/* JSON SAMPLE
{
	"operacao" : 0,
	"valor": 123.12,
	"conta": 'XXXXXXXXXXXXX'
}
*/

let oConn = $.db.getConnection();
/*DAO FUNCTIONS*/
function getSaldoConta(conta){
    //PREPARAR COMANDO SQL
	let sQuery = '';
	sQuery += 'SELECT CB."saldo" ';
    sQuery += 'FROM "TREINAMENTO_HANA"."ZLAB_TREINAMENTO.table::tables.conta_bancaria" CB ';
    sQuery += 'WHERE CB."id" = ?';
	
	let oStmt = oConn.prepareStatement(sQuery);
    oStmt.setString(1, conta); 
    
    // EXECUTAR O SELECT
	let sResultSet = oStmt.executeQuery();
    
    //LOOP NO RETORNO
	while (sResultSet.next()) {
	    //TRATATIVA DO RETORNO
        const SALDO = parseFloat(sResultSet.getNString(1)).toFixed(2);
		return {
		    SALDO: SALDO ? SALDO : 0
		};
	}
	return { SALDO: 0 };
}

function atualizarConta(conta,saldo){
    //PREPARAR COMANDO SQL
    let sQuery = 'UPDATE "TREINAMENTO_HANA"."ZLAB_TREINAMENTO.table::tables.conta_bancaria" CB ';
    sQuery += 'SET CB."saldo" = ? ';
    sQuery += 'WHERE CB."id" = ? ';
    
    try {
        const oStmt = oConn.prepareStatement(sQuery);
        oStmt.setString(2, conta);
        oStmt.setString(1,saldo.toString());
        //EXECUTAR UPDATE
        let records = oStmt.executeBatch();
        let sumOfRecords = 0;
        
        records.forEach(function(record) {
            sumOfRecords += record;
        });
        //RETORNO
        return sumOfRecords;
    } catch(e) {
        return e.message;
    }
}

function salvarTransferencia(data){
    //PREPARAR COMANDO SQL
    let sQuery = 'INSERT INTO "TREINAMENTO_HANA"."ZLAB_TREINAMENTO.table::tables.transacao" ';
    sQuery += 'VALUES (?,?,?,NOW())';
    try {
        const oStmt = oConn.prepareStatement(sQuery);
        oStmt.setString(1, data.conta);
        oStmt.setFloat(2,data.valor);
        oStmt.setFloat(3,data.operacao);
        //EXECUTAR UPDATE
        let records = oStmt.executeBatch();
        let sumOfRecords = 0;
        
        records.forEach(function(record) {
            sumOfRecords += record;
        });
        //RETORNO
        return sumOfRecords;
    } catch(e) {
        return e.message;
    }
}

/* PRESET FUNCTIONS */
function calcConta(data){
    //BUSCAR SALDO DA CONTA
    var objConta = getSaldoConta(data.conta);
    //CONTA DO SALDO ATUAL
    var saldo = 0;
    if(data.operacao === 0){//RETIRADA
        saldo = objConta.SALDO - data.valor;
    }else{//DEPOSITO
        saldo = objConta.SALDO + data.valor;
    }
    //SALVAR DADOS
    salvarTransferencia();
    atualizarConta(data.conta, saldo);
    oConn.commit();
    oConn.close();
}

/* MAIN FUNCTION*/
function mainFunction(){
    var content = $.request.body.asString();
	content = JSON.parse(content);
	//CHAMADA FUNÇÃO PRESET
    calcConta(content);
}

mainFunction();
$.response.status = $.net.http.OK;
$.response.setBody(JSON.stringify({"STATUS" : "OK"}));
$.response.contentType = "application/json";	
$.response.headers.set("Access-Control-Allow-Origin", "*");
