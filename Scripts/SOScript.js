// Variabelen
var IDCurrentStudentShown;
var manager;
var CurrentStudentListId = [];
var idx = 0;
var ListOfWords = [];

// Initialize Materialize
 $('.materialboxed').materialbox();
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

         var img;

         var fieldData = $(this).val();
         ListOfWords = [];



         ListOfWords = fieldData.split(' ');

         if (fieldData.length >= 2) {

             $('#StudentResultList li').remove();
             $('#StudentResultList #NoResults').remove();

             $.ajax({
                 url: '/Data/GetData.cshtml',

                 data: {
                     searchQueryValue: ListOfWords
                 },
                 type: 'POST',
                 error: function () {

                 },
                 dataType: 'json',
                 success: function (data) {
                     var final = JSON.stringify(data);
                     CurrentStudentListId = [];
                     if (data.length != 0) {
                         $.each(data, function (idx, obj) {
                             CurrentStudentListId.push(obj.Uid);

                             if (obj.ImageUrl == null) {
                                 img = '<img class="ThumbStudentIMage" src="/Images/thumb.png"></img>';
                             }
                             else {
                                 img = '<img class="ThumbStudentIMage" src="' + obj.ImageUrl + '"></img>';
                             }


                             $('#StudentResultList').append(
                                '<li class="StudentItem" sId="' + obj.Uid + '">' + img +
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
         idx = jQuery.inArray(IDCurrentStudentShown, CurrentStudentListId);
         RetrieveStudentData(student);
     });

     function RetrieveStudentData(student) {
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
     }


     // Foto stuff
     function RenderStudent(data) {
         console.log(data);
         IDCurrentStudentShown = data[0].Uid;



         if (data != "ClearData") {
             $('#StudentContent').css('display', 'block');

             // Handle image buttons depending on the user having one.
             if (data[0].imageUrl == null) {
                 $('.StudentImageHolder').empty();
                 $('.StudentImageHolder').append('<img id="NoImageID" alt="StudentPicture"  data-toggle="modal" data-target="#myModal" class="NoImageYet studentImage animated shake" src="/Images/thumb.png"></img>');
             } else {
                 $('.StudentImageHolder').empty();
                 $('.StudentImageHolder').append('<img alt="StudentPicture" class="materialboxed"  src="' + data[0].imageUrl + '"></img>');
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
             $('.vooropleiding').text(data[0].vooropleiding);

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


     $(document).on('click', '.verwijderstudentbutton', function () {
         console.log('i"m here');
         var element = $(this).closest("tr");
         var StudentsTodelete = $(this).attr("data-id");
         console.log('i"m here');
         var txt;
         var r = confirm("Weet je zeker dat je deze student wilt verwijderen?");
         console.log('i"m here 2');

         if (r == true) {
             $.ajax({
                 url: '/admin/students/deletestudent.cshtml',
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
     // Se what for device is on the page.
     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
         device = "Mobile";
         console.log("Mobile");
     } else if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
         device = "Desktop";
         console.log("Windows");
     } else {
         device = "Onbekend"
         console.log("Device Onbekend..");
     }

     // Add content to the overlay depending on the type of device the user is using

     if (device == "Desktop") {
         $('.UploadSourceChoice').append('<div class="padding col-md-6"><button type="button" class="UseWebcam orange center-block btn btn-default btn-circle btn-xl"><i class="glyphicon fa fa-video-camera"><br><span class="iconTextStyling">Webcam</span></i></button></div><div class="padding col-md-6"><button type="button" class="UploadFileOrMakePicture crim center-block btn btn-default btn-circle btn-xl"><i class="glyphicon fa fa-file"><br> <span class="iconTextStyling ">File</span></i></button></div>');
         $('.CloseSourceChoice').append('<div class="padding col-md-4"></div><div class="padding col-md-4"><button type="button" data-dismiss="modal" class="closeOverlay blueB center-block btn btn-default btn-circle btn-xl"><i class="fa fa-times"></i><br><span class="iconTextStyling "></span></i></button></div><div class="padding col-md-4"></div>');

     }
     else if (device == "Mobile") {
         $('.UploadSourceChoice').append('<div class="padding col-sd-12"><button type="button" class="UploadFileOrMakePicture aqua center-block btn btn-default btn-circle btn-xl"><i class="glyphicon fa fa-camera"><br><span class="iconTextStyling">Foto</span></i></button></div>');
         $('.CloseSourceChoice').append('<div class="padding col-sd-4"></div><div class="padding col-md-4"><button type="button" data-dismiss="modal" class="closeOverlay blueB center-block btn btn-default btn-circle btn-xl"><i class="fa fa-times"></i><br><span class="iconTextStyling "></span></i></button></div><div class="padding col-md-4"></div>');
     } else {
         console.log("No device found no content set in overlay....");
     }

     // Trigger hidden file input onclick
     //UseWebcam

     $(document).on('click', '.UploadFileOrMakePicture', function () {
         console.log("Clicked on file upload button");
         manager.data = { id: IDCurrentStudentShown }
         $('#upload-input').trigger('click');
     });


     // Using live upload library
     /*global require, alert*/
     /*jslint browser:true*/

     require.config({
         paths: {
             knockout: '/scripts/knockout-2.1.0'
         }
     });


     require(['Scripts/html5Upload', 'domReady', 'knockout-models'], function (html5Upload, domReady, models) {
         'use strict';

         domReady(function () {
             if (html5Upload.fileApiSupported()) {

                 var context = document.getElementById('upload-liveuploads'),
                        uploadsModel = new models.UploadsViewModel();

                 manager = html5Upload.initialize({
                     // URL that handles uploaded files
                     uploadUrl: '/SaveImage.cshtml',

                     // HTML element on which files should be dropped (optional)
                     dropContainer: document.getElementById('dragndropimage'),

                     // HTML file input element that allows to select files (optional)
                     inputField: document.getElementById('upload-input'),

                     // Key for the file data (optional, default: 'file')
                     key: 'File',

                     // Get current id
                     // Additional data submitted with file (optional)
                     data: { id: IDCurrentStudentShown },

                     // Maximum number of simultaneous uploads
                     // Other uploads will be added to uploads queue (optional)
                     maxSimultaneousUploads: 1,

                     // Callback for each dropped or selected file
                     // It receives one argument, add callbacks 
                     // by passing events map object: file.on({ ... })
                     onFileAdded: function (file) {
                         var fileModel = new models.FileViewModel(file);
                         uploadsModel.uploads.push(fileModel);

                         file.on({
                             // Called after received response from the server
                             onCompleted: function (response) {
                                 fileModel.uploadCompleted(true);
                             },

                             // Called during upload progress, first parameter
                             // is decimal value from 0 to 100.
                             onProgress: function (progress, fileSize, uploadedBytes) {
                                 fileModel.uploadProgress(parseInt(progress, 10));
                             }
                         });
                     }
                 });
                 models.applyBindings(uploadsModel, context);
             }
         });
     });

     // ------------------------------ Next Prev Edit control -----------------------------------------



     $(document).on('click', '.PrevStudent', function () {
         if (idx != 0) {

             RetrieveStudentData(CurrentStudentListId[idx = idx - 1])
             console.log("Prev Student " + idx);
         } else {
             idx = CurrentStudentListId.length;
         }
     });

     $(document).on('click', '.NextStudent', function () {

         if (idx <= CurrentStudentListId.length) {
             RetrieveStudentData(CurrentStudentListId[idx = idx + 1])
             console.log("Next Student " + idx);
         } else {
             RetrieveStudentData(CurrentStudentListId[CurrentStudentListId.length])
             console.log("Next Student " + idx);
             idx = 0;
         }
     });
 });