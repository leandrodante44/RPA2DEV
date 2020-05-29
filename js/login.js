function login() {
	var user = $("#email").val(); var pass = $("#pass").val(); $.ajax
		({
			type: "GET",
			url: HANA_ODATA + "user?$format=json&$filter=username eq '" + user + "' and password eq '" + pass + "'", dataType: 'json',
			headers: {
				"Authorization": "Basic " + btoa(USERNAME + ":" + PASSWORD)
			},
			success: function (data) {
				if (data.d.results.length > 0) { window.open("team.php?u=" + data.d.results[0].id, "_self") } else {
					swal("Ops!", "Usuário/Senha não correspondem!", "error"); $("#btnLogin").html('ENTRAR');
				}
			},
			error: function (xhr) {
				// if error occured 
				swal("Ops!", "Usuário/Senha não correspondem!", "error");
				$("#btnLogin").html('ENTRAR');
			},
			beforeSend: function () { $("#btnLogin").html('ENTRANDO...'); },
		});
} function onInit() {
	$("#btnLogin").on("click", function () { login(); });
} $(document).ready(function () {
	onInit();
});
