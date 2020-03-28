/* Submits and Validates Contact Form */

$(document).ready(function () {
    $('.submit').click(function (event) {

        //Getting DOM Elements
        //Input Variables
        var firstName = $('.firstname').val();
        var lastName = $('.lastname').val();
        var email = $('.email').val();
        var subject = $('.subject').val();
        var message = $('.message').val();

        //Validation Variables
        var statusFN = $('.status-firstname');
        var statusLN = $('.status-lastname');
        var statusEmail = $('.status-email');
        var statusSubject = $('.status-subject');
        var statusMessage = $('.status-message');

        //Empties Status on Button Press
        statusFN.empty();
        statusLN.empty();
        statusEmail.empty();
        statusSubject.empty();
        statusMessage.empty();

        //Validations
        //First Name Validation
        if (firstName.length >= 2) {
            statusFN.append('<small style="color: darkgreen;>First Name is Valid</small>');
        } else {
            event.preventDefault(); //Prevents Sending Form
            statusFN.append('<small style="color: maroon;">First Name is Not Valid</small>');
        }

        //Last Name Validation
        if (lastName.length >= 2) {
            statusLN.append('<small style="color: darkgreen;>Last Name is Valid</small>');
        } else {
            event.preventDefault(); //Prevents Sending Form
            statusLN.append('<small style="color: maroon;">Last Name is Not Valid</small>');
        }

        //Email Validation
        if (email.length > 5 && email.includes('@') && email.includes('.')) {
            statusEmail.append('<small style="color: darkgreen;>Email is Valid</small>');
        } else {
            event.preventDefault(); //Prevents Sending Form
            statusEmail.append('<small style="color: maroon;">Email is Not Valid</small>');
        }

        //Subject Validation
        if (subject.length >= 2) {
            statusSubject.append('<small style="color: darkgreen;>Subject is Valid</small>');
        } else {
            event.preventDefault(); //Prevents Sending Form
            statusSubject.append('<small style="color: maroon;">Subject is Not Valid</small>');
        }

        //Message Validation
        if (message.length >= 2) {
            statusMessage.append('<small style="color: darkgreen;>Message is Valid</small>');
        } else {
            event.preventDefault(); //Prevents Sending Form
            statusMessage.append('<small style="color: maroon;">Message is Not Valid</small>');
        }

    });
})