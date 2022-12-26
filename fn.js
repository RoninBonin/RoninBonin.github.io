document.getElementById('reservation-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var name = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;
  var date = document.getElementById('date').value;
  var guests = document.getElementById('guests').value;

  if (confirm(`Confirm reservation?\nName: ${name}\nPhone Number: ${phone}\nDate: ${date}\nNumber of guests: ${guests}`)) {
    var reservationCode = Math.floor(Math.random() * 1000000);

    alert(`Successfully Reserved!!\nHere is the your reservation code: ${reservationCode}`);
    location.href="reservation.html";

  }
});


function showDiscount() {
      document.getElementById("result").innerHTML = "Thank you for loving ramen! Here is your discount coupon code: RAMENLOVER10";
    }
function showSadFace() {
      document.getElementById("result").innerHTML = ":( We're sorry you don't love ramen.";
    }


    