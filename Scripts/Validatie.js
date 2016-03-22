$('#AddUserForm').bootstrapValidator({
        
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            voornaam: {
                message: 'The company name is not valid.',
                validators: {
                    notEmpty: {
                        message: 'The company name is required and cannot be empty.'
                    },
                    stringLength: {
                        min: 3,
                        max: 30,
                        message: 'The company name must be more than 3 and less than 30 characters long.'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z]+$/,
                        message: 'The company name can only consist out of alphabetical characters.'
                    }
                }
            },
            clientNumber: {
                message: 'The client number is not valid.',
                validators: {
                    notEmpty: {
                        message: 'The client number is required and cannot be empty.'
                    },
                    stringLength: {
                        min: 1,
                        max: 20,
                        message: 'The client number must be more than 1 and less than 20 characters long.'
                    },
                    regexp: {
                        regexp: /^[0-9]+$/,
                        message: 'The client number can only consist out of numbers.'
                    }
                }
            },
            companyStreet: {
                message: 'The street is not valid.',
                validators: {
                    notEmpty: {
                        message: 'The street is required and cannot be empty.'
                    },
                    stringLength: {
                        min: 1,
                        max: 50,
                        message: 'The street must be more than 1 and less than 50 characters long.'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9 ]+$/,
                        message: 'The client number can only consist out of alphabetical characters, numbers and spaces.'
                    }
                }
            },
            companyStreetnum: {
                message: 'The house number is not valid.',
                validators: {
                    notEmpty: {
                        message: 'The house number is required and cannot be empty.'
                    },
                    stringLength: {
                        min: 1,
                        message: 'The house number must be at least 1 character long.'
                    },
                    regexp: {
                        regexp: /^[0-9]+$/,
                        message: 'The house number can only consist out of alphabetical characters, numbers and spaces.'
                    }
                }
            },
            companyPostalCode: {
               message: 'The Zip-code is not valid.',
                validators: {
                    notEmpty: {
                        message: 'The Zip-code is required and cannot be empty.'
                    },
                    stringLength: {
                        min: 4,
                        max: 20,
                        message: 'The Zip-code must be more than 4 characters long.'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9 ]+$/,
                        message: 'The Zip-code can only consist out of alphabetical characters, numbers and spaces.'
                    }
                }
            },
            companyTown: {
                message: 'The town is not valid.',
                validators: {
                    notEmpty: {
                        message: 'The town is required and cannot be empty.'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z]+$/,
                        message: 'The town name can only consist out of alphabetical characters.'
                    }
                }
            },
            companyCountry: {
                message: 'The country is not valid.',
                validators: {
                    notEmpty: {
                        message: 'The country is required and cannot be empty.'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z]+$/,
                        message: 'The country name can only consist out of alphabetical characters.'
                    }
                }
            },
            certificateNumber: {
                message: 'The certificate number number is not valid.',
                validators: {
                    notEmpty: {
                        message: 'The certificate number is required and cannot be empty.'
                    },
                    stringLength: {
                        min: 1,
                        message: 'The certificate number must be at least 1 character long.'
                    },
                    regexp: {
                        regexp: /^[0-9]+$/,
                        message: 'The certificate number can only consist out of numbers.'
                    }
                }
            },
            orderNumber: {
                message: 'The order number number is not valid.',
                validators: {
                    notEmpty: {
                        message: 'The order number is required and cannot be empty.'
                    },
                    stringLength: {
                        min: 1,
                        message: 'The order number must be at least 1 character long.'
                    },
                    regexp: {
                        regexp: /^[0-9]+$/,
                        message: 'The order number can only consist out of numbers.'
                    }
                }
            },
            yourReference: {
                message: 'Your reference is not valid.',
                validators: {
                    notEmpty: {
                        message: 'Your reference is required and cannot be empty.'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z ]+$/,
                        message: 'Your reference can only consist out of alphabetical characters and spaces.'
                    }
                }
            },
            description: {
                message: 'Your description is not valid.',
                validators: {
                    notEmpty: {
                        message: 'Your description is required and cannot be empty.'
                    },
                }
            },
            pic: {
                message: 'The PIC number is not valid.',
                validators: {
                    notEmpty: {
                        message: 'The PIC number is required and cannot be empty.'
                    },
                    stringLength: {
                        min: 1,
                        message: 'The PIC number must be at least 1 character long.'
                    },
                    regexp: {
                        regexp: /^[0-9]+$/,
                        message: 'The PIC number can only consist out of numbers.'
                    }
                }
            },
           
            dateOfTest: {
                validators: {
                    notEmpty: {
                        message: 'The date is required and cannot be empty'
                    },
                        date: {
                        format: 'YYYY-MM-DD',
                        message: 'The value is not a valid date'
                    }
                }
            },
            examinationPreformedBy: {
               message: 'Examination preformed by is not valid.',
                validators: {
                    notEmpty: {
                        message: 'Examination preformed by is required and cannot be empty.'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z ]+$/,
                        message: 'Examination preformed by can only consist out of alphabetical characters and spaces.'
                    }
                }
            },
            dateOfDelivery: {
                validators: {
                    notEmpty: {
                        message: 'The date is required and cannot be empty'
                    },
                        date: {
                        format: 'YYYY-MM-DD',
                        message: 'The value is not a valid date'
                    }
                }
            },
            notOfDelivery: {
                validators: {
                    notEmpty: {
                        message: 'The note is required and cannot be empty'
                    }
                }
            },
            mmselection: {
                message: 'The username is not valid',
                validators: {

                }
            },
            select: {
                validators: {
                    notEmpty: {
                       
                    }
                }
            }
        }
    });