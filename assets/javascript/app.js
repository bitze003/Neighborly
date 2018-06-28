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
      var eventTime = $("#event-time").val();
      var eventLocation = $("#event-address").val();
      var eventDescription = $("#event-description").val();

      database.ref().push({
          EventTitle: eventTitle,4
          EventDate: eventDate,
          EventTime: eventTime,
          EventLocation: eventLocation,
          EventDescription: eventDescription,
          dateAdded: firebase.database.ServerValue.TIMESTAMP
      })
      $("input").val("");
      $(".modals").hide();

  })
  database.ref().on("child_added", function (snapshot) {
      console.log(snapshot.val().EventTitle);

      $("tbody").append('<tr>');
      $("tbody").append('<td>' + snapshot.val().EventDate + '</td>');
      $("tbody").append('<td>' + snapshot.val().EventTime + '</td>');
      $("tbody").append('<td>' + snapshot.val().EventTitle + '</td>');
      $("tbody").append('<td>' + snapshot.val().EventLocation + '</td>');
      $("tbody").append('<td>' + snapshot.val().EventDescription + '</td>');
      $("tbody").append('</tr>');

  })

  // MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP //

 


});