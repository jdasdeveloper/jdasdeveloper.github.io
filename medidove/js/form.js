$("#contact-form").submit(function(e) {
	
    e.preventDefault();    
    var formData = new FormData(this);

    $.ajax({
        url: 'email.php',
        type: 'POST',
        data: formData,
        success: function (data) {
			$('#success').toggle('fast', function() {
			const form = document.getElementById('contact-form');
			
			//var captcha = document.getElementById("g-recaptcha");
			form.reset();
			// grecaptcha.reset();
			//captcha.style.display = "block";
      // Animation complete.
    });
        },
        cache: false,
        contentType: false,
        processData: false
    });
});

