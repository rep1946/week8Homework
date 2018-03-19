console.log('Main.js is connected!')

$(function() {
  var $userData = $('#user_data');
  $userData.submit(function(event) {
    event.preventDefault();
    // uncomment this when you're working on it!
    /*
    var username = [access the user's username]
    var email = [email]
    var bio = [bio]
    var number = [number]
    var pet = [pet]
    */

    // this is going to have an error until you do the part above
    attachUserInfoToPage(username, email, bio, number, pet)
    event.target.reset()
  })

  function attachUserInfoToPage(username, email, bio, number, pet) {
    // use jquery to append the information to the dom!
    // Create a new div with the user info 
  }
})