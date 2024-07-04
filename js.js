// JavaScript for Template Futsal - Enhanced

// Owl Carousel Initialization
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  });

  // Smooth Scroll for Navigation Links
  $('a.nav-link').on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

  // Subscribe Form Submission
  $('.subscribe_bt').on('click', function(event) {
    event.preventDefault();
    var email = $('.email_text').val();
    if (validateEmail(email)) {
      alert("Thank you for subscribing! You will receive our newsletter soon.");
      $('.email_text').val('');
    } else {
      alert("Please enter a valid email address.");
    }
  });

  // Show modal and set product name and price
  $('.buy-now').on('click', function() {
    var product = $(this).data('product');
    var price = $(this).data('price');
    $('#productName').val(product);
    $('#productPrice').text('$' + price);
  });

  // Handle form submission
  $('#buyForm').on('submit', function(event) {
    event.preventDefault();
    var buyerName = $('#buyerName').val();
    var buyerEmail = $('#buyerEmail').val();
    var buyerAddress = $('#buyerAddress').val();
    var productName = $('#productName').val();

    if (buyerName && buyerEmail && buyerAddress) {
      alert("Thank you, " + buyerName + "! Your order for " + productName + " has been received.");
      $('#buyModal').modal('hide');
      $('#buyForm')[0].reset();
    } else {
      alert("Please fill out all fields.");
    }
  });
});

// Function to validate email address
function validateEmail(email) {
  var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(email);
}

// Unit test for validateEmail function
console.assert(validateEmail('test@example.com') === true, 'Valid email should pass');
console.assert(validateEmail('invalid-email') === false, 'Invalid email should fail');
