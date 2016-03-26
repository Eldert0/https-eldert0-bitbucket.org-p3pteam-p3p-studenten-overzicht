$(document).ready(function () {
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


    var windowHeigth = window.innerHeight - 150;

    $('#StudentResultList').append('<div id="NoResults">Geen resultaten, gebruik het zoekveld om naar sudenten te zoeken.</div>');

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


        // Remove search content placeholder
        $('#preContent').css("display", "none");



        var fieldData = $(this).val();

        if (fieldData.length >= 2) {

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

                    if (data.length != 0) {
                        $.each(data, function (idx, obj) {
                            $('#StudentResultList').append(
                                '<li class="StudentItem" sId="' + obj.Uid + '">' +
                                '<img class="ThumbStudentIMage" src="/Images/Thumb.png"></img>' +
                                '<span class="StudentItemText">'
                                + obj.Naam + " " + obj.Voorvoegsel + " " + obj.Achternaam +
                                '</span></li>'
                            );
                        });

                    } else {

                        $('#StudentResultList li').remove();
                        $('#NoResults').remove();
                        $('#StudentResultList').append('<div id="NoResults" class="LowError"></div>');
                        $('#NoResults').text('Uw zoekopdracht heeft geen resultaten opgeleverd.');
                    }
                }
            });
        }
        else if (!fieldData == "" && fieldData.length < 2) {
            $('#StudentResultList li').remove();
            $('#NoResults').remove();
            $('#StudentResultList').append('<div id="NoResults" class="LowError"></div>');
            $('#NoResults').text('Vul een groter zoekwoord in...');
        } else {
            $('#StudentContent').addClass('fadeOut');
            $('#preContent').css("display", "block");
            $('#preContent').addClass('fadeIn');
            $('#StudentContent').css("display:", "none")
            RenderStudent("ClearData");
            $('#StudentResultList li').remove();
            $('#NoResults').remove();
            $('#StudentResultList').append('<div id="NoResults">Geen resultaten, gebruik het zoekveld om naar sudenten te zoeken.</div>');
        }
    }));


    $('#StudentResultList').on('click', 'li', function () {

        $('.sidebar-nav').addClass("collapse");
        $('.sidebar-nav').removeClass("in");
        $('#StudentContent').removeClass('fadeOut');
        $('#StudentContent').addClass('bounceInLeft');

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



    // Foto stuff
    function RenderStudent(data) {
        console.log(data);
        if (data != "ClearData") {
            $('#StudentContent').css('display', 'block');
            //http://blog.teamtreehouse.com/using-jquery-asynchronously-loading-image
            //http://imagesloaded.desandro.com/

            // Handle image buttons depending on the user having one.
            if (data[0].imageUrl == null) {
                $('.StudentImageHolder').empty();
                  $('.StudentImageHolder').append('<img id="NoImageID" alt="StudentPicture"  data-toggle="modal" data-target="#myModal" class="NoImageYet studentImage animated shake" src="/Images/thumb.png"></img>');

                
            
                console.log("Image is null");
            } else {
                $('.StudentImageHolder').empty();
                  
                
                $('.StudentImageHolder').append('<img alt="StudentPicture" class="studentImage" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAK-AAAAJDhkNGM4MGNkLTRhMDktNGZmMi1hN2ZmLTlkYWIzYzFkMzQ1Mg.jpg"></img>');

                console.log("Image is there!");
            }




            $('#StudentContent').addClass('bounceInLeft');

            // Display  the content of student
            $('#StudentContent').css("display", "block");

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
            $('.aankomst_bij_isatcode').text(data[0].aankomstBijIsatcode);
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
        else {
            $('#StudentContent').css('display', 'none');
            var first = false;
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

$(document).on('click', '.verwijderstudentbutton', function(){
     console.log('i"m here');
        var element = $(this).closest("tr");
        var StudentsTodelete = $(this).attr("data-id");
        console.log('i"m here');
        var txt;
        var r = confirm("Weet je zeker dat je deze student wilt verwijderen?");
        console.log('i"m here 2');

        if (r == true) {
            $.ajax({
                url: '/admin/students/deletestudents.cshtml',
                type: 'GET',
                data: {
                    data: StudentsTodelete
                },
                dataType: 'json',
                success: FadeRow(StudentsTodelete) // End of success function of ajax form
            });

            function FadeRow(trID) {
                element.fadeOut(500, function () {
                    element.remove();
                });
            }
        }  
});
$(document).on('click', '.verwijderbutton', function () {
    var element = $(this).closest("tr");
    var UserTodelete = $(this).attr("data-id");

    var txt;
    var r = confirm("Weet je zeker dat je deze gebruiker wilt verwijderen?");

    if (r == true) {
        $.ajax({
            url: '/admin/users/deleteuser.cshtml',
            type: 'GET',
            data: {
                data: UserTodelete
            },
            dataType: 'json',
            success: FadeRow(UserTodelete) // End of success function of ajax form
        });

        function FadeRow(trID) {
            element.fadeOut(500, function () {
                element.remove();
            });
        }
    }
});

// -----------------------------------------------------------------------------------------------------------------     Fix left sidebar height onresize event
$(window).resize(function () {
    windowHeigth = window.innerHeight - 150;
    $('#SearchResultContainer').css("height", windowHeigth);
});



// -------------------------------------------------------------------------------------------------------------------- Foto handler code
var device;




// $(document).on('click', '.AddImage', function () {
//        console.log("uploadImage");
//});

// Se what for device is on the page.
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    device = "Mobile";
    console.log("Mobile");
}else if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    device = "Desktop";
    console.log("Windows");
}else{
    device = "Onbekend"
    console.log("Device Onbekend..");
}


// Add content to the overlay depending on the type of device the user is using

if(device == "Desktop")
{
    $('.UploadSourceChoice').append('<div class="padding col-sd-6"><button type="button" class="orange center-block btn btn-default btn-circle btn-xl"><i class="glyphicon fa fa-video-camera"><br><span class="iconTextStyling">Webcam</span></i></button></div><div class="padding col-sd-6"><button type="button" class="crim center-block btn btn-default btn-circle btn-xl"><i class="glyphicon fa fa-file"><br> <span class="iconTextStyling ">File</span></i></button></div>');
}
else if(device == "Mobile")
{
    $('.UploadSourceChoice').append('<div class="padding col-sd-12"><button type="button" class="aqua center-block btn btn-default btn-circle btn-xl"><i class="glyphicon fa fa-camera"><br><span class="iconTextStyling">Mobile</span></i></button></div>');
}else
{
    console.log("No device found no content set in overlay....");
}
