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

  var provider = new firebase.auth.FacebookAuthProvider();
  $("#event-button").on('click', function () {
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
})
})