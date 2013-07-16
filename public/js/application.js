$(document).ready(function() {
  // alert("loading doc");
  $('body').on('submit', '.talk', function(e) {
    e.preventDefault();
    // alert("here");
    var url = $(this).attr('action');
    //Using serialize
    var data = $(this).serialize();
    console.log(data);
    $.post(url, data, function(response){
      // console.log("Hello1");
      console.log(response);
     $('#response').html(response);
    });

    // console.log("Hello2");
   });
});


