$(document).ready(function() {
  // alert("loading doc");
  $('.talk').submit( function(e) {
    e.preventDefault();
    // alert("here");
    var url = $(this).attr('action');
    //Using serialize
    var data = $(this).serialize();
    var posting = $.post(url, data, function(response){
      console.log(response);
     $().html(response);
    });
    // posting.done(function(server_response) {
    //   var content = $(server_response).find( '#response' );
    //   $( '#response' ).replaceWith( content );
    // });
  });
});


