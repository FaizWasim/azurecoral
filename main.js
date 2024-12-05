
    // Initialize EmailJS
    (function() {
        emailjs.init("WRn1cdRzixll6f6Os"); // Replace "YOUR_PUBLIC_KEY" with your EmailJS public key
    })();


        $(document).ready(function () {
            // Hide all error messages initially
            $(".text-danger").hide();
            $("#errormessage").hide();
            $("#sendmessage").hide();
        
            $("#submitBtn").on("click", function () {
                let isValid = true;
        
                // Hide all error messages before validation
                $(".text-danger").hide();
        
                // Validate Name
                if ($("#Name").val().trim() === "") {
                    $("#NameError").show();
                    isValid = false;
                }
        
                // Validate Email
                const email = $("#EmailId").val().trim();
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    $("#EmailError").show();
                    isValid = false;
                }
        
                // Validate Phone (optional)
                if ($("#MobileNo").val().trim() === "") {
                    $("#MobileError").show();
                    isValid = false;
                }
        
                // Validate Subject
                if ($("#Subject").val().trim() === "") {
                    $("#SubjectError").show();
                    isValid = false;
                }
        
                // Validate Message
                if ($("#Message").val().trim() === "") {
                    $("#MessageError").show();
                    isValid = false;
                }
        
                if (isValid) {
                    let formData={
                        from_name : $("#Name").val(),
                        from_email : $("#EmailId").val(),
                        subject : $("#Subject").val(),
                        message : $("#Message").val(),
                        to_name : "Nadeem",
                        to_email : "rossiefaiz@gmail.com"
                    }
                    console.log(formData)
                    // Replace with EmailJS integration or any success logic
                    // $("#sendmessage").fadeIn().delay(3000).fadeOut();
                    emailjs.send("service_lvcqxwv","template_u6lbszs", formData)
                    .then(
                        function(response) {
                    $("#sendmessage").fadeIn().delay(3000).fadeOut();
                    $("#contactForm")[0].reset(); // Reset the form

                            // $("#sendmessage").show();
                            // $("#errormessage").hide();
                        },
                        function(error) {
                            $("#errormessage").text("There was an error sending your message. Please try again.").fadeIn().delay(3000).fadeOut();
                            $("#errormessage").show();
                        }
                    );
                    
                } else {
                    $("#errormessage").text("Please fill all the details.").fadeIn().delay(3000).fadeOut();
                }
             
            });
        });
        
        
