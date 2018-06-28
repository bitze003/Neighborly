$(document).ready(function () {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBt0ybhT7-Ft1QM2BKmSpm1ixLYcSCwxOA",
    authDomain: "firstproject-62f58.firebaseapp.com",
    databaseURL: "https://firstproject-62f58.firebaseio.com",
    projectId: "firstproject-62f58",
    storageBucket: "firstproject-62f58.appspot.com",
    messagingSenderId: "614682014505"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  var modal = document.querySelector(".modals");
  var trigger = document.querySelector(".trigger");
  var closeButton = document.querySelector(".close-button");

  function toggleModal() {
      modal.classList.toggle("show-modal");
      console.log(modal);
  }

  function windowOnClick(event) {
      if (event.target === modal) {
          toggleModal();
          console.log("Please work!");
      }
  }

  trigger.addEventListener("click", toggleModal);
  closeButton.addEventListener("click", toggleModal);
  window.addEventListener("click", windowOnClick);

  $("#event-form-submit").on("click", function (event) {
      event.preventDefault();

      var eventTitle = $("#event-title").val();
      var eventDate = $("#event-date").val();
      var streetAddress = $("#street-address").val();
      var city = $("#city").val();
      var state = $("#state").val();
      var zip = $("#zip").val();
      var email = $("#email").val();

      database.ref().push({
          EventTitle: eventTitle,
          EventDate: eventDate,
          StreetAddress: streetAddress,
          City: city,
          State: state,
          Zip: zip,
          Email: email,
          dateAdded: firebase.database.ServerValue.TIMESTAMP
      })
      $("input").val("");

  })
  database.ref().on("child_added", function (snapshot) {
      console.log(snapshot.val().EventTitle);

      $("tbody").append('<tr>');
      $("tbody").append('<td>' + snapshot.val().EventDate + '</td>');
      $("tbody").append('<td>' + snapshot.val().EventTitle + '</td>');
      $("tbody").append('<td>' + snapshot.val().StreetAddress + '</td>');
      $("tbody").append('</tr>');

  })

  // MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP //

 


});