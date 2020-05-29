function setTemplate(opc){
    var id_irpa = $('#hashid').val();
    $.ajax
    ({
        type: "GET",
        url: HANA_XSJS + "SetTemplate.xsjs?r="+id_irpa+"&o="+opc, dataType: 'json',
        headers: {
            "Authorization": "Basic " + btoa(USERNAME + ":" + PASSWORD)
        },
        success: function (data) {
            $('#hashid').val('');
            swal("Show!", "Template Alterado!", "success");
        },
        error: function (xhr) { // if error occured 
            swal("Ops!", "Erro ao carregar dados!", "error");
        },
    });
}