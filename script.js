$(document).bind('mobileinit', function() {
  $.mobile.touchOverflowEnabled = false;
  $.mobile.ajaxFormsEnabled  = false;
});

$(document).ready(function() {
  console.log('ready');

  $('#detailForm').submit(function() {
    $.post("#list", $('#detailForm'), function(data) {
      console.log('Form data: FirstName: ' + $('#fname')[0].value + ', LastName: ' + $('#lname')[0].value + ', Email: ' + $('#email')[0].value);
    });
    return true;      
  });
});
