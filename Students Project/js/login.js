const emailFromServer = "kenny@gmail.com";
const passwordFromServer = "Aa12345678";
// console.log("Hello world!");
// alert("Hello world!");

//this is how we define a function
//the name of the function is handleBtnClick()
function handleBtnClick() {
  //this command will give us the value from the input that has the id inside the ()
  let emailValue = document.getElementById("emailInput").value;
  // console.log("emailValue", emailValue);
  //display in the console the value of the password
  let passwordValue = document.getElementById("passwordInput").value;
  // console.log("passwordValue", passwordValue);
  // console.log(
  //   "Your email is " + emailValue + ", your password is " + passwordValue
  // );
  // console.log(`Your email is ${emailValue}, your password is ${passwordValue}`);
  // if (emailValue == emailFromServer) {
  //   console.log("The email is correct");
  // } else {
  //   console.log("The email is incorrect");
  // }
  // if (passwordValue == passwordFromServer) {
  //   console.log("The password is correct");
  // } else {
  //   console.log("The password is incorrect");
  // }
  /*
    (emailValue == emailFromServer) => the email we got from the user is the same email that we got from the server
    && => and
    (passwordValue == passwordFromServer) => the password we got from the user is the same password that we got from the server
  */
  if (emailValue == emailFromServer && passwordValue == passwordFromServer) {
    //the email and the password is correct
    console.log("you can access to our website");
    window.location.href = "register.html";
  } else {
    console.log("you shall not pass");
  }
}

// handleBtnClick();
