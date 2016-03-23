$(document).ready(function () {
<<<<<<< HEAD
    // voor beide tabellen (viewusers & viewstudents)
    $('#ViewUserTable, #ViewStudentTable').DataTable({
        language: {
            "sProcessing": "Bezig...",
            "sLengthMenu": "_MENU_ resultaten weergeven",
            "sZeroRecords": "Geen resultaten gevonden",
            "sInfo": "_START_ tot _END_ van _TOTAL_ resultaten",
            "sInfoEmpty": "Geen resultaten om weer te geven",
            "sInfoFiltered": " (gefilterd uit _MAX_ resultaten)",
            "sInfoPostFix": "",
            "sSearch": "Zoeken:",
            "sEmptyTable": "Geen resultaten aanwezig in de tabel",
            "sInfoThousands": ".",
            "sLoadingRecords": "Een moment geduld aub - bezig met laden...",
            "oPaginate": {
                "sFirst": "Eerste",
                "sLast": "Laatste",
                "sNext": "Volgende",
                "sPrevious": "Vorige"
            },
            responsive: true

        },
        "columnDefs": [
            { "orderable": false, "targets": 5 },
            { "orderable": false, "targets": 6 }

            ]
    });

=======
    $('#example').DataTable();
>>>>>>> 573141103e29a9cb886448b9d92818ce19183bb6

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
        else {
            RenderStudent("ClearData");
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
                RenderStudent(data)
            }
        });
    });

    function RenderStudent(data) {

        console.log(data);

        if (data != "ClearData") {


            // Student
            $('.etiketnaam').text(data[0].etiketnaam);
            $('.roepnaam').text(data[0].roepnaam);
            $('.voorvoegsels').text(data[0].voorvoegsels);
            $('.naam').text(data[0].naam);
            $('.studentnummer').text(data[0].studentnummer);
            $('.geboortedatum').text(data[0].geboortedatum);
            $('.geslacht').text(data[0].geslacht);

            //Opleiding
            $('.opleiding').text(data[0].opleiding);
            $('.mentor').text(data[0].mentor);
            $('.groep').text(data[0].groep);
            $('.fase').text(data[0].fase);
            $('.datumvan').text(data[0].datumvan);
            $('.datumtot').text(data[0].datumtot);
            $('.aankomst_bij_isatcode').text(data[0].aankomst_bij_isatcode);
            $('.aanmeldingdatum').text(data[0].aanmeldingdatum);
            $('.datumdefinitief').text(data[0].datumdefinitief);


            // Contact gegevens
            
            $('.etiketregel1').text(data[0].etiketregel1);
            $('.etiketregel2').text(data[0].etiketregel2);
            $('.emailinstelling').text(data[0].emailinstelling);
            $('.emailprive').text(data[0].emailprive);
            $('.telefoonnummer').text(data[0].telefoonnummer);
            $('.telefoonnummermobiel').text(data[0].telefoonnummermobiel);


            //Opleidinghistorie
            $('.vooropleiding').text(data[0].herinschrijving);

        }
        else 
        {
            $('.studentnaam').text("");
            $('.groep').text("");
            $('.mentor').text("");
            $('.studentnummer').text("");
            $('.roepnaam').text("");
            $('.voorvoegsels').text("");
            $('.naam').text("");
            $('.geslacht').text("");
            $('.vooropleiding').text("");
            $('.emailprive').text("");
            $('.emailinstelling').text("");
            $('.adrestype').text("");
            $('.etiketnaam').text("");
            $('.etiketregel1').text("");
            $('.etiketregel2').text("");
            $('.telefoonnummer').text("");
            $('.telefoonnummermobiel').text("");
            $('.herinschrijving').text("");
            $('.opleiding').text("");
            $('.datumvan').text("");
            $('.datumtot').text("");
            $('.aankomst_bij_isatcode').text("");
            $('.aanmeldingdatum').text("");
            $('.datumdefinitief').text("");
        }
    }
});
