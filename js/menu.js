function getDadosUser() {
	$.ajax
		({
			type: "GET",
			url: HANA_ODATA + "user?$format=json&$filter=id eq '" + ID_USER + "'", dataType: 'json',
			headers: {
				"Authorization": "Basic " + btoa(USERNAME + ":" + PASSWORD)
			},
			success: function (data) {
				if (data.d.results.length > 0) { populateUser(data.d.results[0]); } else {
					alert('Falha ao Logar'); window.open('login.php', '_self');
				}
			},
			error: function (xhr) { // if error occured 
				alert('Falha ao Logar'); 
				window.open('login.php', '_self'); },
				beforeSend: function () { },
			});
};
function populateUser(data) { 
	$('.nomeUser').html(data.full_name); 
	$('.emailUser').html(data.username); 
};
$(document).ready(function () {
	getDadosUser();
});
