$(function() {
  $('#firstName').focus(function() {
    $('#firstName').css('border', '2px solid green');
  })
  $('#lastName').focus(function() {
    $('#lastName').css('border', '2px solid green');
  })
  $('#firstName').focusout(function() {
    $('#firstName').css('border', '1px solid red');
  })
  $('#lastName').focusout(function() {
    $('#lastName').css('border', '1px solid red');
  })
})
