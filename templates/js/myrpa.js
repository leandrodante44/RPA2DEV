//rpa_case?$filter=fk_user+eq+%27F899139DF5E1059396431415E770C6DD%27&$orderby=date_created+desc&$select=name,description,projeto,fk_workflow
function onInit(){
	loadGrid();
}

function loadGrid(){
	
	//https://xi9p2001649838trial.hanatrial.ondemand.com/ZLAB_RPA2DEV/odata/services.xsodata/rpa_case?$filter=fk_user+eq+%27F899139DF5E1059396431415E770C6DD%27&$orderby=date_created+desc&$select=name,description,projeto,fk_workflow&$format=json
	var url_string = window.location.href
	var url = new URL(url_string);
	var u = url.searchParams.get("u");
	$.ajax
	({
		type: "GET",
		url: HANA_ODATA+"rpa_case?$filter=fk_user eq '" + u +"'&$orderby=date_created desc&$select=name,description,projeto,fk_workflow&$format=json",
		dataType: 'json',
		headers: {
			"Authorization": "Basic " + btoa(USERNAME + ":" + PASSWORD)
		},
		success: function (data){
			debugger
			var grid = $('#divRPA').html('');
			$.each(data.d.results, function( index, value ) {
			  var nome = data.d.results[index].name,
				desc = data.d.results[index].description,
				proj = data.d.results[index].projeto,
				fk_workflow = data.d.results[index].fk_workflow;
			
			
				var sHTML = '<div class="col-md-4"> <div class="card"> <div class="card-header user-header alt bg-primary"> <div class="media"> <div class="icon"> <i class="zmdi zmdi-android"></i> </div> <div class="media-body"> <h3 class="text-light display-6">';
				sHTML += nome;
				sHTML += '</h3> <p style="color:#003c7c">';
				sHTML += proj;
				sHTML += '</p> </div> <small> <span class="badge badge-primary float-right mt-1" onclick="window.location=\'rpa2devstudio.php?u='+ u +'\'" style="cursor: pointer;">Edit</span> </small> </div> </div> <div class="card-body"> <p class="card-text">';
				sHTML += desc;
				sHTML += '</p> </div> </div> </div>';
				grid.append(sHTML);
			  
			  //debugger
			});
			
		},
		error: function(xhr) { // if error occured
			swal("Ops!", "Erro ao carregar dados do grid!", "error");			
		},
		beforeSend: function() {
			var grid = $('#divRPA');
			//grid.html('<center><img src="https://i2.wp.com/static.onemansblog.com/wp-content/uploads/2016/05/Boobs-Loading.gif" ></center>')
			grid.html('<center><img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/cd514331234507.564a1d2324e4e.gif" ></center>')
		},
	});
	
}

$(document).ready(function() {
	onInit();
});