/*=================================================
true = yes/enable
false = no/disable
1000 = 1 seconds
=================================================*/

/*=================================================
color version
=================================================*/
var _color = 'blank'; // blank, red, green, blue, brown, purple

/*=================================================
preloader
=================================================*/
var _preloaderDuration = 800; // duration
var _preloaderDelay = 500; // delay

/*=================================================
background style
=================================================*/
var _bgStyle = 1; // 1 = single image, 2 = static image, 3 = slideshow, 4 = youtube video, 5 = html5 video

/*=================================================
slideshow
=================================================*/
var _ssAmount = 3; // image amount
var _ssDuration = 5000; // duration
var _ssFade = 800; // fade

/*=================================================
youtube video
=================================================*/
var _ytUrl = 'https://www.youtube.com/watch?v=ivW6nTMUdC0'; // youtube video url
var _ytStart = 1; // start time (seconds)
var _ytEnd = 0; // end time (seconds), 0 to ignored
var _ytLoop = true; // loop
var _ytMute = false; // mute on start

/*=================================================
countdown
=================================================*/
var _countdown = true; // countdown toggle
var _countdownDate = '12/24/2015 23:59:59'; // 2015-12-24 23:59:59
var _countdownTimezone = "-8"; // timezone

/*=================================================
contact
=================================================*/
var _contactEmail = 'email@example.com'; // contact email address
var _contactSuccess = '<i class="icons fa fa-check valid"></i> message has been sent'; // success submit message
var _contactInputError = '<i class="icons fa fa-close error"></i> all fields are required'; // input error message
var _contactEmailError = '<i class="icons fa fa-close error"></i> email address is invalid'; // email error message

/*=================================================
subscribe
=================================================*/
var _subscribe = 1; // 1 = php, 2 = mailchimp

/* php */
var _subscribeEmail = 'email@example.com'; // subscribe email address
var _subscribeSuccess = '<i class="icons fa fa-check valid"></i> thank you for subscribing'; // subscribe success message
var _subscribeError = '<i class="icons fa fa-close error"></i> email address is invalid'; // subscribe error message

/* mailchimp */
var _mailchimpUrl = 'MAILCHIMP_POST_URL_HERE'; // mailchimp post url

$.ajaxChimp.translations.eng = { // custom mailchimp message
  'submit': 'please wait',
  0: '<i class="icons fa fa-check"></i> we have sent you a confirmation email',
  1: '<i class="icons fa fa-close"></i> enter a valid e-mail address',
  2: '<i class="icons fa fa-close"></i> e-mail address is not valid',
  3: '<i class="icons fa fa-close"></i> e-mail address is not valid',
  4: '<i class="icons fa fa-close"></i> e-mail address is not valid',
  5: '<i class="icons fa fa-close"></i> e-mail address is not valid'
}

// dedault mailchimp message for reference

// Submit Message
// 'submit': 'Submitting...'
// Mailchimp Responses
// 0: 'We have sent you a confirmation email'
// 1: 'Please enter a value'
// 2: 'An email address must contain a single @'
// 3: 'The domain portion of the email address is invalid (the portion after the @: )'
// 4: 'The username portion of the email address is invalid (the portion before the @: )'
// 5: 'This email address looks fake or invalid. Please enter a real email address'

/*=================================================
disable section, true = disable, false = enable
last value without comma
=================================================*/
var _disableSection = {
  about : false, // about
  services : false, // service
  contact : false // contact
};