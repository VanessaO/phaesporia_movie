$(document).ready(function(){

   //Submits form mail through Formspree.io and includes success message
   $(function() {
    $("#contactForm").submit(function(e) {
      e.preventDefault();
      $.ajax({
        url: "//formspree.io/swinefilms@gmail.com", 
        method: "POST",
        data: $(this).serialize(),
        dataType: "json",
        success: function(data){
          // Success message
          $('#success').append('<div class="alert alert-success">Message sent!</div>');

          //clear all fields
          $('#contactForm').trigger("reset");
        },
        error: function(){
          // Fail message
          $('#success').append('<div class="alert alert-danger">Sorry, there was an error sending your message. Please try again later.</div>');

          //clear all fields
          $('#contactForm').trigger("reset");
        }
      });
    });
   });

});
