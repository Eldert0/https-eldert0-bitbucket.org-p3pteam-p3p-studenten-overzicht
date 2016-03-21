$(document).ready(function () {
    $('#example').DataTable();

    var windowHeigth = window.innerHeight - 150;

    $('#SearchResultContainer').css("height", windowHeigth);
    $('#StudentResultList').append('<div id="NoResults">Geen resultaten, gebruik het zoekveld om naar sudenten te zoeken.</div>');
    $(".removeCertificate").click(function () {
        var txt;
        var r = confirm("Are you sure of deleting this certificate?");
        if (r == true) {
            var profileid = $(this).attr("data-profileid");

            $.ajax({
                url: 'http://oliveira.frolich-it.nl/certificates/delete_cert',
                type: 'POST',
                data: ({ cert_id: profileid }),
                dataType: 'json',
                success: removeUser() // End of success function of ajax form
            }); // End of ajax call

            function removeUser() {
                $(".removeCertificate[data-profileid='" + profileid + "']").closest("tr").fadeOut("slow");
                $(this).remove();
            }
        }
    });
    var level = "1";

    if (level == 2) {
        $('#table_id').dataTable({
            "columnDefs": [
            { "orderable": false, "targets": 7 },
            { "orderable": false, "targets": 8 }

            ],
            "paging": false,
            "info": false
        });
    } else {
        $('#table_id').dataTable({
            "columnDefs": [
            { "orderable": false, "targets": 7 },
            { "orderable": false, "targets": 8 },
            { "orderable": false, "targets": 9 }

            ],
            "paging": false,
            "info": false
        });
    }

    // Search onchage method Ajax
    $('#SearchBox').on('input', (function () {
        var fieldData = $(this).val();
        if (!fieldData == "") {
            $('#StudentResultList li').remove();
            $('#StudentResultList #NoResults').remove();

            $.ajax({
                url: '/Data/GetData.cshtml',

                data: {
                    format: 'text',
                    searchQueryValue: fieldData
                },
                type: 'POST',
                error: function () {
                    
                },
                dataType: 'json',
                success: function (data) {
                    var final = JSON.stringify(data);

                    $.each(data, function (idx, obj) {
                        $('#StudentResultList').append(
                        '<li class="StudentItem" sId="' + obj.Uid + '">' +
                        '<img class="ThumbStudentIMage" src="/Images/Thumb.png"></img>' +
                        '<span class="StudentItemText">'
                        + obj.Naam + " " + obj.Voorvoegsel + " " + obj.Achternaam +
                        '</span></li>'
                        );
                    });
                }
            });
        } 
        else
        {
            $('#StudentResultList li').remove();
            $('#StudentResultList').append('<div id="NoResults">Geen resultaten, gebruik het zoekveld om naar sudenten te zoeken.</div>');
            // Show message that there are no result and let them search
        }
    }));

    $('#StudentResultList').on('click', 'li', function () {
        var student = $(this).attr("sId");

        $.ajax({
            url: '/Data/GetStudentData.cshtml',
            data: {
                format: 'text',
                id: student
            },
            type: 'POST',
            error: function () {
                //$('#info').html('<p>An error has occurred</p>');
            },
            dataType: 'json',
            success: function (data) {
                var final = JSON.stringify(data);
                $('.studentnaam').text(data[0].roepnaam +" "+ data[0].voorvoegsels +" "+ data[0].naam);    
            }
        });
    });
});
