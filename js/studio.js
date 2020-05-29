function onInit() {
}
var a = 0;
var seq = 0;
function addItem(opt,xpath,extra) {
	seq++;
	if (a == 0) {
		$('.div_work').html('');
		a = 1;
	} var content = $('.div_work'); var bg = "";
	var campos = "";
	var id = "";
	if (opt == 'v') {
		id = "F0935E4CD5920AA6C7C996A5EE53A70F"; bg = 'bg-primary';
		campos = '<div class="row"><div class="col-sm-6"><input type="text" id="xpath_' + seq + '" name="xpath_' + seq + '" placeholder="XPATH" class="form-control-SM input-item"></div><div class="col-sm-6"><input type="text" id="extra_' + seq + '" name="extra_' + seq + '" placeholder="Valor" class="form-control-SM input-item"></div></div>';
	} else if (opt == 'a') {
		id = "65B9EEA6E1CC6BB9F0CD2A47751A186F"; bg = 'bg-warning';
		campos = '<div class="row"><div class="col-sm-6"><input type="text" id="xpath_' + seq + '" name="xpath_' + seq + '" placeholder="XPATH" class="form-control-SM input-item"></div><div class="col-sm-6"><input type="text" id="extra_' + seq + '" name="extra_' + seq + '" placeholder="Timeout" class="form-control-SM input-item"></div></div>';
	} else {
		id = "C9E1074F5B3F9FC8EA15D152ADD07294"; bg = 'bg-success';
		campos = '<input type="text" id="xpath_' + seq + '" name="xpath_' + seq + '" placeholder="XPATH" class="form-control-SM input-item"><input type="hidden" id="extra_' + seq + '" value=""/>';
	} var sHTML = '<div class="row form-group acao_workflow ' + bg + '" id="item' + seq + '" data-id="' + seq + '"><input type="hidden" id="fk_act_' + seq + '" value="' + id + '"/> <div class="col col-md-3 offset-md-1"> <label for="text-input" class=" form-control-label">';
	if (opt == 'v') {
		sHTML += '<i class="fa fa-check-square"></i>&nbsp; Validar';
	} else if (opt == 'a') {
		sHTML += '<i class="fa fa-clock-o"></i>&nbsp; Aguardar';
	} else {
		sHTML += '<i class="fa fa-hand-o-up"></i>&nbsp; Click';
	} sHTML += '';
	sHTML += '</label> </div> <div class="col-12 col-md-7">';
	sHTML += campos;
	sHTML += '</div> <div class="col col-md-1 offset-md-0"> <button type="reset" class="btn btn-danger" onclick="$(\'#item' + seq + '\').remove()"> <i class="fa fa-times-circle"></i> </button> </div> </div>'; content.append(sHTML);
	if(xpath){
		$('#xpath_' + seq).val(xpath)
	}
	if(extra){
		$('#extra_' + seq).val(extra);
	}
} 
function salvarRPA() {
	var nome = $('#txtnome').val(), 
		proj = $('#txtprojeto').val(), 
		desc = $('#txtdesc').val(),
		opc_xlsx = $('#checkbox1').is(":checked") === true ? 1 : 0, 
		opc_print = $('#checkbox2').is(":checked") === true ? 1 : 0, 
		opc_log = $('#checkbox3').is(":checked") === true ? 1 : 0, 
		link = $('#txtlink').val(),
		login = $('#txtlogin').val(), 
		senha = $('#txtpassword').val(),
		flag = $('#chkpublic').is(":checked") === true ? 1 : 0, 
		id_user = $('#hdniduser').val(),
		id_rpa = $('#hdnrpa').val(),
		edit = $('#hdnedit').val();
		debugger
	var itens_workflow = [];
	var itens_view = $('.acao_workflow'); itens_view.each(function () {
		var id_item = $(this).data('id'); var xpath = $('#xpath_' + id_item).val(); var extra = $('#extra_' + id_item).val(); var act = $('#fk_act_' + id_item).val(); console.log(id_item);
		var item = {
			"act": act,
			"xpath": xpath,
			"extra": extra
		};
		itens_workflow.push(item);
	});
	var jsonPOST = {
		"id_user": id_user,
		"name": nome,
		"description": desc,
		"link": link,
		"password": senha,
		"user": login,
		"opc_xlsx": opc_xlsx,
		"opc_log": opc_log,
		"opc_print": opc_print,
		"projeto": proj,
		"itens": itens_workflow,
		"flag": flag,
		"edit":edit,
		"id_rpa":id_rpa
	};
	$.ajax
		({
			type: "POST",
			url: HANA_XSJS + "InserirFlow.xsjs", data: JSON.stringify(jsonPOST), dataType: "json",
			crossDomain: true,
			headers: {
				"Authorization": "Basic " + btoa(USERNAME + ":" + PASSWORD)
			},
			success: function (data) {
				swal("Boa!", "Seu RPA2DEV foi criado com sucesso!", "success");
				var url_string = window.location.href
				var url = new URL(url_string);
				var u = url.searchParams.get("u");
				setTimeout(function () { window.location = "myrpa2dev.php?u=" + u }, 1500);
			},
			error: function (xhr) { // if error occured 
				swal("Ops!", "Erro ao salvar os Dados!", "error");
				$("#btnSalvar").html('Criar RPA2Dev');
			},
			beforeSend: function (xhr) {
				$("#btnSalvar").html('Criando...');
			},
		});
	debugger
} 
function editMode(id_irpa){
	var url_string = window.location.href
	var url = new URL(url_string);
	var u = url.searchParams.get("u");
	debugger
	$.ajax
		({
			type: "GET",
			url: HANA_ODATA + "rpa_case?$filter=fk_user eq '" + u + "' and type_rpa eq 0 and id eq '"+id_irpa+"'&$format=json&$expand=importNav,accessNav,workflowNav,workflowNav/itemworkflowNav,exportNav,userNav,workflowNav/seqworkflowNav", 
			dataType: 'json',
			headers: {
				"Authorization": "Basic " + btoa(USERNAME + ":" + PASSWORD)
			},
			success: function (data) {
				debugger
				var grid = $('#divRPA').html('');
				$.each(data.d.results, function (index, value) {
					setDataEdit(data.d.results[index]);
					//debugger
				});
			},
			error: function (xhr) { // if error occured 
				swal("Ops!", "Erro ao carregar dados do irpa!", "error");
			},
			beforeSend: function () {
				var grid = $('#divRPA');
				//grid.html('<center><img src="https://i2.wp.com/static.onemansblog.com/wp-content/uploads/2016/05/Boobs-Loading.gif" ></center>') 
				grid.html('<center><img src="https://data.whicdn.com/images/265718366/original.gif" ></center>')
			},
		});
}
function setDataEdit(data){
	$('#txtnome').val(data.name);
	$('#txtprojeto').val(data.projeto);
	$('#txtdesc').html(data.description.split("<br>").join("\n"));
	debugger
	if(data.exportNav.opc_xlsx){
		$('#checkbox1').prop( "checked", true );
	}
	if(data.exportNav.opc_log){
		$('#checkbox3').prop( "checked", true );
	}
	if(data.exportNav.opc_print){
		$('#checkbox2').prop( "checked", true );
	}
	$('#txtlink').val(data.accessNav.link);
	$('#txtlogin').val(data.accessNav.user);
	$('#txtpassword').val(data.accessNav.password);
	var oSeq = data.workflowNav.seqworkflowNav.results // from, to
	var oIWk = data.workflowNav.itemworkflowNav.results // item
	var aSeqW = [];
	var aActW = [];
	var aXptW = [];
	var aExtW = [];
	for(var i = 0; i < oSeq.length; i++){
		if(oSeq[i].from_item == ""){
			aSeqW.push(oSeq[i].to_item);
		}
	}
	for(var j = 0; j < i; j++){
		for (var k=0 ; k < oSeq.length ; k++)
		{
			if (oSeq[k].from_item == aSeqW[j]) {
				aSeqW.push(oSeq[k].to_item);
			}
		}
	}
	for(var j = 0; j < i; j++){
		for (var k=0 ; k < oIWk.length ; k++)
		{
			if (oIWk[k].id == aSeqW[j]) {
				var sOpc = ""
				if(oIWk[k].fk_act == "F0935E4CD5920AA6C7C996A5EE53A70F"){
					sOpc = "v"
				}else if(oIWk[k].fk_act == "65B9EEA6E1CC6BB9F0CD2A47751A186F"){
					sOpc = "a"
				}else{
					sOpc = "c"
				}
				aActW.push(sOpc);
				aXptW.push(oIWk[k].xpath);
				aExtW.push(oIWk[k].extra);
			}
		}
	}
	for(var l=0; l < oIWk.length; l++){
		addItem(aActW[l],aXptW[l],aExtW[l]);
	}
	debugger
}
$(document).ready(function () {
	onInit();
});
