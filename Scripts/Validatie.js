//formvalidatie voor adduser
$('#AddUserForm').bootstrapValidator({
        
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            voornaam: { 
                validators: {
                    notEmpty: {
                        message: 'Veld mag niet leeg zijn'
                    },
                    stringLength: {
                        min: 2,
                        message: 'Voornaam moet langer zijn dan 2 letters'
                    },
                    regexp: {
                        regexp: /[a-zA-Z]/,
                        message: 'Voornaam mag alleen alfabetische karakters bevatten'
                    }
                }
            },
            achternaam: {
                validators: {
                    notEmpty: {
                        message: 'Veld mag niet leeg zijn'
                    },
                    stringLength: {
                        max: 20,
                        message: 'Achternaam kan niet langer zijn dan 20 karakters'
                        },
                    regexp: {
                        regexp: /^[a-zA-Z_ ]*$/,
                        message: 'Achternaam mag alleen alfabetische letters bevatten'
                    }
                }
            },
            telefoonnummer: {
                validators: {
                    notEmpty: {
                        message: 'Veld mag niet leeg zijn'
                    },
                    stringLength: {
                        min: 1,
                        max: 10,
                        message: 'Telefoonnummer mag maximaal 10 cijfers bevatten'
                    },
                    regexp: {
                        regexp: /[0-9]/,
                        message: 'Alleen cijfers gebruiken'
                    }
                }
            },

            email: {
                validators: {
                    notEmpty: {
                        message: 'Veld mag niet leeg zijn'
                    },
                    regexp: {
                        regexp: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                        message: 'Foutief email-adres'
                    }
                }
            },

            geslacht: {
                validators: {
                    notEmpty: {
                        message: 'Veld mag niet leeg zijn'
                    }
                    }
                },

            roleSelect: {
                validators: {
                    notEmpty: {
                        message: 'Veld mag niet leeg zijn'
                    }
                    }
             }
}});


//formvalidatie voor addstudent
$('#AddForm').bootstrapValidator({
        
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        
        
        fields: {
            roepnaam: { 
                validators: {
                    notEmpty: {
                        message: 'Veld mag niet leeg zijn'
                    },
                    stringLength: {
                        min: 2,
                        message: 'Voornaam moet langer zijn dan 1 letters'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z]+$/,
                        message: 'Voornaam mag alleen alfabetische karakters bevatten'
                    }
                }
            },

            groep: { 
                validators: {
                    notEmpty: {
                        message: 'Veld mag niet leeg zijn'
                    },
                    stringLength: {
                        max: 3,
                        message: 'Klas kan niet langer dan 3 karakters'
                    },
                    regexp: {
                        regexp: /[0-9a-zA-Z. ]/,
                        message: 'Klas mag alleen alfabetische karakters en cijfers bevatten'
                    }
                }
            },

            naam: {
                validators: {
                    notEmpty: {
                        message: 'Veld mag niet leeg zijn'
                    },
                    stringLength: {
                        max: 20,
                        message: 'Achternaam kan niet langer zijn dan 20 karakters'
                        },
                    regexp: {
                        regexp: /^[a-zA-Z_ ]*$/,
                        message: 'Achternaam mag alleen alfabetische letters bevatten'
                    }
                }
            },

            mentor: { 
                validators: {
                    notEmpty: {
                        message: 'Veld mag niet leeg zijn'
                    },
                    stringLength: {
                        min: 2,
                        message: 'Mentor kan niet 1 karakter zijn'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z. ]+$/,
                        message: 'Mentor mag alleen alfabetische karakters bevatten'
                    }
                }
            },
           
            voorvoegsels: { 
                validators: {
                  regexp: {
                        regexp: /^[a-zA-Z. ]+$/,
                        message: 'Tussenvoegsels mogen alleen alfabetische karakters bevatten'
                    }
                }
            },

            studentnummer: {
                validators: {
                    notEmpty: {
                        message: 'Veld mag niet leeg zijn'
                    },
                    stringLength: {
                        min: 1,
                        max:10,
                        message: 'Studentnummer mag maximaal 10 cijfers bevatten'
                    },
                    regexp: {
                        regexp: /[0-9]/,
                        message: 'Alleen cijfers gebruiken'
                    }
                }
            },

            telefoonnummer: {
                validators: {
                    notEmpty: {
                        message: 'Veld mag niet leeg zijn'
                    },
                    stringLength: {
                        min: 1,
                        message: 'Telefoonnummer mag maximaal 10 cijfers bevatten'
                    },
                    regexp: {
                        regexp: /[0-9. ]/,
                        message: 'Alleen cijfers gebruiken'
                    }
                }
            },

            telefoonnummermobiel: {
                validators: {
                    notEmpty: {
                        message: 'Veld mag niet leeg zijn'
                    },
                    stringLength: {
                        min: 1,
                        max: 10,
                        message: 'Telefoonnummermobiel mag maximaal 10 cijfers bevatten'
                    },
                    regexp: {
                        regexp: /[0-9. ]/,
                        message: 'Alleen cijfers gebruiken'
                    }
                }
            },

            email: {
                validators: {
                    notEmpty: {
                        message: 'Veld mag niet leeg zijn'
                    },
                    regexp: {
                        regexp: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                        message: 'Foutief email-adres'
                    }
                }
            },

            emailinstelling: {
                validators: {
                    notEmpty: {
                        message: 'Veld mag niet leeg zijn'
                    },
                    regexp: {
                        regexp: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                        message: 'Foutief email-adres'
                    }
                }
            },

            geboortedatum: {
                validators: {
                    notEmpty: {
                        message: 'Veld mag niet leeg zijn'
                    },
                    regexp: {
                        regexp: /[0-9a-zA-Z. ]/,
                        message: 'Foutief geboortedatum mag alleen alfabetische karakters en cijfers bevatten'
                    }
                }
            },

            vooropleiding: { 
                validators: {
                    notEmpty: {
                        message: 'Veld mag niet leeg zijn'
                    },
                    stringLength: {
                        min: 2,
                        message: 'Vooropleiding kan niet 1 karakter zijn'
                    },
                    regexp: {
                        regexp: /[0-9a-zA-Z. ]/,
                        message: 'Vooropleiding mag alleen alfabetische karakters en cijfers bevatten'
                    }
                }
            },
        
            opleiding: { 
                validators: {
                    notEmpty: {
                        message: 'Veld mag niet leeg zijn'
                    },
                    stringLength: {
                        min: 2,
                        message: 'Opleiding kan niet 1 karakter zijn'
                    },
                    regexp: {
                        regexp: /[0-9a-zA-Z. ]/,
                        message: 'Opleiding mag alleen alfabetische karakters bevatten'
                    }
                }
            },
 
            fase: { 
                validators: {
                    notEmpty: {
                        message: 'Veld mag niet leeg zijn'
                    },
                    stringLength: {
                        min: 2,
                        message: 'fase kan niet 1 karakter zijn'
                    },
                    regexp: {
                        regexp: /[a-zA-Z. ]/,
                        message: 'Vooropleiding mag alleen alfabetische karakters bevatten'
                    }
                }
            },
         
            adrestype: { 
                validators: {
                    notEmpty: {
                        message: 'Veld mag niet leeg zijn'
                    },
                    stringLength: {
                        min: 2,
                        message: 'Adrestype kan niet 1 karakters zijn'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z]+$/,
                        message: 'Adrestype mag alleen alfabetische karakters bevatten'
                    }
                }
            },
       
            etiketnaam: { 
                validators: {
                    notEmpty: {
                        message: 'Veld mag niet leeg zijn'
                    },
                    stringLength: {
                        min: 2,
                        message: 'Initialen kan niet 1 letter zijn'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z. ]+$/,
                        message: 'Initialen mag alleen alfabetische karakters bevatten'
                    }
                }
            },
       
            etiketregel1: { 
                validators: {
                    notEmpty: {
                        message: 'Veld mag niet leeg zijn'
                    },
                    stringLength: {
                        min: 2,
                        message: 'Straatnaam en huisnummer moet langer zijn dan 1 karakter'
                    },
                    regexp: {
                        regexp: /[0-9a-zA-Z. ]/,
                        message: 'Straatnaam en huisnummer mogen alleen alfabetische karakters en cijfers bevatten'
                    }
                }
            },

            etiketregel2: { 
                validators: {
                    notEmpty: {
                        message: 'Veld mag niet leeg zijn'
                    },
                    stringLength: {
                        min: 2,
                        message: 'Postcode en woonplaats moet langer zijn dan 1 karakter'
                    },
                    regexp: {
                        regexp: /[0-9a-zA-Z. ]/,
                        message: 'Postcode en woonplaats mag alleen alfabetische karakters en cijfers bevatten'
                    }
                }
            },
             
            land: { 
                validators: {
                    notEmpty: {
                        message: 'Veld mag niet leeg zijn'
                    },
                    stringLength: {
                        min: 2,
                        message: 'Land moet langer zijn dan 1 karakter'
                    },
                    regexp: {
                        regexp: /[0-9a-zA-Z. ]/,
                        message: 'land mag alleen alfabetische karakters en cijfers bevatten'
                    }
                }
            },

            herinschrijving: { 
                validators: {
                    notEmpty: {
                        message: 'Veld mag niet leeg zijn'
                    }         
                    }
                },
           
            datumvan: { 
                validators: {
                    notEmpty: {
                        message: 'Veld mag niet leeg zijn'
                    },
                        stringLength: {
                        min: 1,
                        message: 'Datumvan kan niet langer zijn dan 30 karakters'
                    },
                    regexp: {
                        regexp: /[0-9a-zA-Z. ]/,
                        message: 'Datumvan mag alleen alfabetische karakters en cijfers bevatten'
                    }
                }
            },
         
            datumtot: { 
                validators: {
                    notEmpty: {
                        message: 'Veld mag niet leeg zijn'
                    },
                        stringLength: {
                        min: 1,
                        message: 'Datumtot kan niet langer zijn dan 30 karakters'
                    },
                    regexp: {
                        regexp: /[0-9a-zA-Z. ]/,
                        message: 'Datumtot mag alleen alfabetische karakters en cijfers bevatten'
                    }
                }
            },
         
            aanmeldingdatum: { 
                validators: {
                    notEmpty: {
                        message: 'Veld mag niet leeg zijn'
                    },
                        stringLength: {
                        min: 1,
                        message: 'Datumtot kan niet langer zijn dan 30 karakters'
                    },
                    regexp: {
                        regexp: /[0-9a-zA-Z. ]/,
                        message: 'Aanmeldingsdatum mag alleen alfabetische karakters en cijfers bevatten'
                    }
                }
            },
           
            aankomst_bij_isatcode: { 
                validators: {
                    notEmpty: {
                        message: 'Veld mag niet leeg zijn'
                    },
                    regexp: {
                        regexp: /[0-9a-zA-Z. ]/,
                        message: 'Aankomst bij isatcode mag alleen alfabetische karakters en cijfers bevatten'
                    }
                }
            },
          
            datumdefinitief: { 
                validators: {
                    notEmpty: {
                        message: 'Veld mag niet leeg zijn'
                    },
                    regexp: {
                        regexp: /[0-9a-zA-Z. ]/,
                        message: 'Datumdefinitief mag alleen alfabetische karakters en cijfers bevatten'
                    }
                }
            },

            geslacht: {
                validators: {
                    notEmpty: {
                        message: 'Veld mag niet leeg zijn'
                    }
                    }
                }
            
           
}});

