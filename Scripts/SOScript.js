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

            $('.groep').text(data[0].groep);
            $('.mentor').text(data[0].mentor);
            $('.studentnummer').text(data[0].studentnummer);
            $('.studentnaam').text(data[0].roepnaam);
            $('.voorvoegsels').text(data[0].voorvoegsels);
            $('.naam').text(data[0].naam);
            $('.geslacht').text(data[0].geslacht);
            $('.vooropleiding').text(data[0].vooropleiding);
            $('.emailprive').text(data[0].emailprive);
            $('.emailinstelling').text(data[0].emailinstelling);
            $('.adrestype').text(data[0].adrestype);
            $('.etiketnaam').text(data[0].etiketnaam);
            $('.etiketregel1').text(data[0].etiketregel1);
            $('.etiketregel2').text(data[0].etiketregel2);
            $('.telefoonnummer').text(data[0].telefoonnummer);
            $('.telefoonnummermobiel').text(data[0].telefoonnummermobiel);
            $('.herinschrijving').text(data[0].herinschrijving);
            $('.opleiding').text(data[0].opleiding);
            $('.datumvan').text(data[0].datumvan);
            $('.datumtot').text(data[0].datumtot);
            $('.aankomst_bij_isatcode').text(data[0].aankomst_bij_isatcode);
            $('.aanmeldingdatum').text(data[0].aanmeldingdatum);
            $('.datumdefinitief').text(data[0].datumdefinitief);
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
