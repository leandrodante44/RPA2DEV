
function onInit() {
	$(".switch-input").on('change', function() {
		$('#hdnpublic').val($('.switch-input').is(":checked"));
	});
}
function salvarRPA(name,description,fk_user,projeto,flag_public, name_file,edit,id_irpa) {
	var jsonPOST = {
		"name": name,
		"description": description,
		"id_user": fk_user,
		"projeto": projeto,
		"flag": flag_public,
		"name_file": name_file,
		"edit":edit,
		"id_irpa":id_irpa
    };
    debugger
	$.ajax
		({
			type: "POST",
			url: HANA_XSJS + "InserirIRPA.xsjs", data: JSON.stringify(jsonPOST), dataType: "json",
			crossDomain: true,
			headers: {
				"Authorization": "Basic " + btoa(USERNAME + ":" + PASSWORD)
			},
			success: function (data) {
                debugger
				swal("Boa!", "Seu SAP-IRPA foi criado com sucesso!", "success");
				var url_string = window.location.href
				var url = new URL(url_string);
				var u = url.searchParams.get("u");
				setTimeout(function () { window.location = "myirpa.php?u=" + u }, 1500);
			},
			error: function (xhr) { // if error occured 
				swal("Ops!", "Erro ao salvar os Dados!", "error");
				setTimeout(function () { window.location = "myirpa	.php?u=" + u }, 1500);
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
			url: HANA_ODATA + "rpa_case?$filter=fk_user eq '" + u + "' and type_rpa eq 1 and id eq '"+id_irpa+"'&$select=name,description,projeto,id,importNav/name_file&$format=json&$expand=importNav", dataType: 'json',
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
	$('#name_file').val(data.importNav.name_file);
}


$(document).ready(function () {
	onInit();
});