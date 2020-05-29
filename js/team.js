function onInit(){
    var url_string = window.location.href
    var url = new URL(url_string);
    var u = url.searchParams.get("u");
    debugger
    $.ajax
        ({
            type: "GET",
            url: HANA_ODATA + "rpa_case?$format=json&$filter=type_rpa eq 1 or type_rpa eq 0&$orderby=date_created desc&$expand=userNav,workflowNav,workflowNav/itemworkflowNav&$top=50", dataType: 'json',
            headers: {
                "Authorization": "Basic " + btoa(USERNAME + ":" + PASSWORD)
            },
            success: function (data) {
                debugger
                var grid = $('#divTable').html('');
                $.each(data.d.results, function (index, value) {
                    setDataEdit(data.d.results[index]);					
                    //debugger  
                });
            },
            error: function (xhr) { // if error occured 
                swal("Ops!", "Erro ao carregar dados !", "error");
            },
            beforeSend: function () {
                var grid = $('#divTable');
                //grid.html('<center><img src="https://i2.wp.com/static.onemansblog.com/wp-content/uploads/2016/05/Boobs-Loading.gif" ></center>') 
                grid.html('<center><img src="https://data.whicdn.com/images/265718366/original.gif" ></center>')
            },
        });
        $.ajax
        ({
            type: "GET",
            url: HANA_XSJS + "SummaryTeam.xsjs", dataType: 'json',
            headers: {
                "Authorization": "Basic " + btoa(USERNAME + ":" + PASSWORD)
            },
            success: function (data) {
                debugger
                $('#c1').html(data.C1);
                $('#c2').html(data.C2);
                $('#c3').html(data.C3);
                $('#c4').html(data.C4 + '<span>min</span>');
            },
            error: function (xhr) { // if error occured 
                swal("Ops!", "Erro ao carregar dados!", "error");
            },
        });
 } 
 function setDataEdit(data){
    var html = '<tr>';
    html += '<td><b>'+data.name+'</b></td>';
    html += '<td >'+data.projeto+'</td>';
    var sType = '';
    if(data.type_rpa == '1'){
        sType = '<td style="text-align: center;"><span class="badge badge-success"><i class="fa fa-gem"></i>&nbsp; IRPA</span></td>';
    }else{
        sType = '<td style="text-align: center;"><span class="badge badge-primary"><i class="fa fa-cube"></i>&nbsp; RPA2DEV</span></td>';
    }
    html += sType;
    html += '<td>'+data.userNav.full_name+'</td>';
    html += '<td  style="text-align: center;">'+new Date(parseInt(data.date_created.split('/Date(').join('').split(')').join(''),10)).toLocaleString()+'</td>';
    try{
        html += '<td  style="text-align: center;"><span class="badge badge-secondary"><i class="fa fa-cogs"></i> &nbsp;'+data.workflowNav.itemworkflowNav.results.length+'</span></td>';
    }catch(e){
        html += '<td  style="text-align: center;"><span class="badge badge-secondary"><i class="fa fa-cogs"></i> &nbsp;0</span></td>';
    }
    html += '</tr>';
    $('#divTable').append(html);
 } 
$(document).ready(function() { onInit();
});
