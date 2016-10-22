'use strict';

//NAV BAR HIGHLIGHTING
$('header').on('click', 'a', function () {
    $('a').removeClass('active');
    $(this).addClass('active');
});

//HIDE STUFF
$('form span').hide();
// $('.register').hide();
// $('.login').hide();

//LANDING PAGE
$('#register').on('click', function () {
    $('.new-or-returning').hide();
    $('.register').show();
});

$('#login').on('click', function () {
    $('.new-or-returning').hide();
    $('.login').show();
});

//PLAYER NAME ENTRY
function checkPlayerName() {
    return $('#player-name-reg').val().length > 5;
}

function playerNameEvent() {
    if (checkPlayerName()) {
        $('#player-name-reg').next().hide();
    } else {
        $('#player-name-reg').next().show();
    }
}

//EMAIL ENTRY
function checkEmailValid() {
    var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var validated = true;
    if (!emailRegEx.test($('#email').val())) validated = false;
    console.log(validated);
    return validated;
}

function emailEvent() {
    if (checkEmailValid()) {
        $('#email').prev().hide();
    } else {
        $('#email').prev().show();
    }
}

//EMAIL CONFIRMATION
function checkEmailsMatch() {
    return $('#email').val() === $('#confirm-email').val();
}

function confirmEmail() {
    if (checkEmailsMatch()) {
        $('#confirm-email').next().hide();
    } else {
        $('#confirm-email').next().show();
    }
}

//READY TO SUBMIT
function canSubmit() {
    return checkPlayerName() && checkEmailValid() && checkEmailsMatch();
}

function enableSubmit() {
    $("#submit").prop("disabled", !canSubmit());
}

//EVENT HANDLERS
$('body').on('keydown', 'input', function (event) {
    var form = $(this).parents('form:eq(0)'),
        focusable = $('form').find('.text-input').filter(':visible'),
        next = focusable.eq(focusable.index(this) + 1);
    if (event.keyCode == 13) {
        event.preventDefault();
        if (next.length) {
            next.focus();
        } else {
            if (!canSubmit()) {
                console.log("here");
                next = focusable.eq(0);
                next.focus();
            } else {
                form.submit();
            }
        }
        return false;
    }
});

//REGISTER FIELDS
//Player name input
$('#player-name-reg').focus(playerNameEvent).keyup(playerNameEvent).keyup(enableSubmit);

//Email input
$('#email').focus(emailEvent).keyup(emailEvent).keyup(confirmEmail).keyup(enableSubmit);

//Confirm email input
$('#confirm-email').focus(confirmEmail).keyup(confirmEmail).keyup(enableSubmit);

//LOGIN FIELD
enableSubmit();
//# sourceMappingURL=index.js.map
