/** NORMAL words**/
function altSenha() {
    var sen = $('#txtsenha').val();
    var sec = $('#txtsenhaconfirm').val();
    if (sen == sec) {
        if (sen.length > 7) {
            debugger
            var url_string = window.location.href
            var url = new URL(url_string);
            var u = url.searchParams.get("u");
            $.ajax
                ({
                    type: "GET",
                    url: HANA_XSJS + "ChangePass.xsjs?ss=" + sen + "&u=" + u, dataType: 'json',
                    headers: {
                        "Authorization": "Basic " + btoa(USERNAME + ":" + PASSWORD)
                    },
                    success: function (data) {
                        $('#txtsenha').val('');
                        $('#txtsenhaconfirm').val('');
                        swal("Uhuu!", "Senha Alterada!", "success");
                        setTimeout(function () { window.location = "config.php?u=" + u }, 1500);
                    },
                    error: function (xhr) { // if error occured 
                        swal("Ops!", "Erro ao alterar a senha!", "error");
                    },
                });
        } else {
            swal("Ops!", "As senhas deve ter no mínimo 8 caracteres!", "error");
        }
    } else {
        swal("Ops!", "As senhas não correspondem!", "error");
    }
}