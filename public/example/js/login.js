 Parse.initialize("testid", 'unused', "testid");
Parse.serverURL = 'http://localhost:1338/parse' 

//check login status
$(function checkLogin() {
    if(Parse.User.current()) {
      $("#current-user").html("User: "+Parse.User.current().get("username"));
    } else {
      $("#current-user").html("");
    }
});

$(document).ready(function(){

  //login
  $("#login").submit(function(event){
    event.preventDefault();

    var login_name = $("#login-id").val();
    var login_pwd = $("#login-pwd").val();

    Parse.User.logIn(login_name, login_pwd, {
      success: function(){
        console.log("Login successfully.");
      }, error: function(user, error){
        console.log("Login error: "+error.message);
      }
    });
  });

  //log out
  $("#logout").click(function(event){
    Parse.User.logOut();
  });

  //sign up
  $("#signup").submit(function(event){
    event.preventDefault();
      console.log("button clicked");
      var userid_value = $("#signup-id").val();
      var userpwd_value = $("#signup-pwd").val();

      var user = new Parse.User();
      user.set("username", userid_value);
      user.set("password", userpwd_value);

      user.signUp(null, {
        success: function(){
          console.log("Sign up successfully.");
        }, error: function(user, error){
          console.log("Sign Up error: "+error.message);
        }
      });
  });

});