$(document).ready(function() {
    $('#example').DataTable();

     $(".removeCertificate").click(function() {
        var txt;
        var r = confirm("Are you sure of deleting this certificate?");
        if (r == true) {
            var profileid = $(this).attr("data-profileid");

            $.ajax({
                url: 'http://oliveira.frolich-it.nl/certificates/delete_cert',
                type:'POST',
                data: ({cert_id: profileid}),
                dataType: 'json',
                success: removeUser() // End of success function of ajax form
            }); // End of ajax call

            function removeUser(){
                $(".removeCertificate[data-profileid='" + profileid + "']").closest("tr").fadeOut("slow");
                $(this).remove();
            }
        }
    });
    var level = "1";

    if(level == 2){
        $('#table_id').dataTable( {
            "columnDefs": [
            { "orderable": false, "targets": 7 },
            { "orderable": false, "targets": 8 }

            ],
            "paging":   false,
            "info":     false
        });
    }else{
        $('#table_id').dataTable( {
            "columnDefs": [
            { "orderable": false, "targets": 7 },
            { "orderable": false, "targets": 8 },
            { "orderable": false, "targets": 9 }

            ],
            "paging":   false,
            "info":     false
        });
    }
} );
