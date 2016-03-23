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
                        regexp: /^[a-zA-Z]+$/,
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