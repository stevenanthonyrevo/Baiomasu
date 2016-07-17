

//fire a test function for front end
function test() {

  // Starting up Parse for First Time by initializing && Server URL Environment
  Parse.initialize("testid", 'unused', "testid");
  Parse.serverURL = 'http://localhost:1338/parse' 

    //create a TestObject class 
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();

      //save action to database 
      testObject.save({foo: "bars"}, {
        //on success show success div
        success: function(object) {
          document.getElementById("success").style.display = "block";
        },
        //on error show error div
        error: function(model, error) {
          document.getElementsByClassName('error').style.display = "block";
        }
      });

}