//rpa_case?$filter=fk_user+eq+%27F899139DF5E1059396431415E770C6DD%27&$orderby=date_created+desc&$select=name,description,projeto,fk_workflow 
function onInit() {
	loadGrid();
}
function loadGrid() {
	//https://xi9p2001649838trial.hanatrial.ondemand.com/ZLAB_RPA2DEV/odata/services.xsodata/rpa_case?$filter=fk_user+eq+%27F899139DF5E1059396431415E770C6DD%27&$orderby=date_created+desc&$select=name,description,projeto,fk_workflow&$format=json 
	var url_string = window.location.href
	var url = new URL(url_string);
	var u = url.searchParams.get("u");
	$.ajax
		({
			type: "GET",
			url: HANA_ODATA + "rpa_case?$filter=fk_user eq '" + u + "' and type_rpa eq 0&$orderby=date_created desc&$select=name,description,projeto,fk_workflow,id&$format=json", dataType: 'json',
			headers: {
				"Authorization": "Basic " + btoa(USERNAME + ":" + PASSWORD)
			},
			success: function (data) {
				debugger
				var grid = $('#divRPA').html('');
				$.each(data.d.results, function (index, value) {
					var nome = data.d.results[index].name,
						desc = data.d.results[index].description,
						proj = data.d.results[index].projeto,
						id_irpa = data.d.results[index].id,
						fk_workflow = data.d.results[index].fk_workflow;
					var sHTML = '<div class="col-md-4"> <div class="card"> <div class="card-header user-header alt bg-primary"> <div class="media"> <div class="icon"> <i class="zmdi zmdi-android"></i> </div> <div class="media-body"> <h3 class="text-light display-6">'; sHTML += nome;
					sHTML += '</h3> <p style="color:#003c7c">'; sHTML += proj;
					sHTML += '</p> </div> <small> <span class="badge badge-success float-right mt-1" id="btngerar" onclick="gerarScript(\'' + id_irpa + '\',this)" style="cursor: pointer;"> <i class="fa  fa-download"></i> &nbsp;Script</span> <span class="badge badge-primary float-right mt-1" onclick="window.location=\'rpa2devstudio.php?u=' + u + '&r=' + id_irpa + '\'" style="cursor: pointer;"><i class="fa  fa-edit"></i> &nbsp;Edit</span> </small> </div> </div> <div class="card-body"> <p class="card-text">';
					sHTML += desc;
					sHTML += '</p> </div> </div> </div>';
					grid.append(sHTML);
					//debugger
				});
			},
			error: function (xhr) { // if error occured 
				swal("Ops!", "Erro ao carregar dados do grid!", "error");
			},
			beforeSend: function () {
				var grid = $('#divRPA');
				//grid.html('<center><img src="https://i2.wp.com/static.onemansblog.com/wp-content/uploads/2016/05/Boobs-Loading.gif" ></center>') 
				grid.html('<center><img src="https://data.whicdn.com/images/265718366/original.gif" ></center>')
			},
		}); 7
}
function gerarScript(id_irpa, btn) {
	var url_string = window.location.href
	var url = new URL(url_string);
	var u = url.searchParams.get("u");
	debugger
	$.ajax
		({
			type: "GET",
			url: HANA_ODATA + "rpa_case?$filter=fk_user eq '" + u + "' and type_rpa eq 0 and id eq '" + id_irpa + "'&$format=json&$expand=importNav,accessNav,workflowNav,workflowNav/itemworkflowNav,exportNav,userNav,workflowNav/seqworkflowNav",
			dataType: 'json',
			headers: {
				"Authorization": "Basic " + btoa(USERNAME + ":" + PASSWORD)
			},
			success: function (data) {
				debugger
				$.each(data.d.results, function (index, value) {
					setDataEdit(data.d.results[index]);
					$(btn).html('<i class="fa  fa-download"></i> &nbsp;Script');
					//debugger
				});
			},
			error: function (xhr) { // if error occured 
				swal("Ops!", "Erro ao carregar dados do irpa!", "error");
			},
			beforeSend: function () {
				$(btn).html('<i class="fa  fa-download"></i> &nbsp;Gerando Script...');
			},
		});
}
function setDataEdit(data) {
	var oJson =  {
		"name":data.name,
		"project":data.projeto,
		"description":data.description,
		"xlsx":data.exportNav.opc_xlsx,
		"print":data.exportNav.opc_print,
		"log":data.exportNav.opc_log,
		"link":data.accessNav.link,
		"user":data.accessNav.user,
		"password":data.accessNav.password
	}
	var oItens = [];
	var oSeq = data.workflowNav.seqworkflowNav.results // from, to
	var oIWk = data.workflowNav.itemworkflowNav.results // item
	var aSeqW = [];
	var aActW = [];
	var aXptW = [];
	var aExtW = [];
	for (var i = 0; i < oSeq.length; i++) {
		if (oSeq[i].from_item == "") {
			aSeqW.push(oSeq[i].to_item);
		}
	}
	for (var j = 0; j < i; j++) {
		for (var k = 0; k < oSeq.length; k++) {
			if (oSeq[k].from_item == aSeqW[j]) {
				aSeqW.push(oSeq[k].to_item);
			}
		}
	}
	for (var j = 0; j < i; j++) {
		for (var k = 0; k < oIWk.length; k++) {
			if (oIWk[k].id == aSeqW[j]) {
				var sOpc = ""
				if (oIWk[k].fk_act == "F0935E4CD5920AA6C7C996A5EE53A70F") {
					sOpc = "v"
				} else if (oIWk[k].fk_act == "65B9EEA6E1CC6BB9F0CD2A47751A186F") {
					sOpc = "a"
				} else {
					sOpc = "c"
				}
				aActW.push(sOpc);
				aXptW.push(oIWk[k].xpath);
				aExtW.push(oIWk[k].extra);
			}
		}
	}
	for (var l = 0; l < oIWk.length; l++) {
		var thisItem ={
			"action":aActW[l],
			"xpath":aXptW[l],
			"extra":aExtW[l]
		}
		oItens.push(thisItem);
	}
	oJson.workflow = oItens;
	var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(oJson));
	var dlAnchorElem = document.getElementById('downloadAnchorElem');
	dlAnchorElem.setAttribute("href",     dataStr     );
	dlAnchorElem.setAttribute("target",     "_blank"     );
	dlAnchorElem.setAttribute("download", "RPA2DEV_"+data.id+".json");
	dlAnchorElem.click();
}

$(document).ready(function () {
	onInit();
});
