export const registerLocators = {

  username: "[id = 'ContentPlaceHolder1_txtUserName']",
  errorUsername: "[id = 'ContentPlaceHolder1_txtUserName-error']",//Only alphanumeric characters allowed. Please enter at least 5 characters.
  usedUsername: "Sorry! The username you entered is already in use.",//getbytext

  email: "[id = 'ContentPlaceHolder1_txtEmail']",
  errorEmail: "[id = 'ContentPlaceHolder1_txtEmail-error']",

  confirmEmail: "[id='ContentPlaceHolder1_txtConfirmEmail']",
  errorConfrimEmail: "[id='ContentPlaceHolder1_txtConfirmEmail-error']", //Please enter a valid email address. //Email address does not match.

  password: "[id = 'ContentPlaceHolder1_txtPassword']", 
  errorPassword: "[id = 'ContentPlaceHolder1_txtPassword-error']", //Your password must be at least 8 characters long.

  confirmPassword: "[id = 'ContentPlaceHolder1_txtPassword2']",
  errorConfrimPassword: "[id = 'ContentPlaceHolder1_txtPassword2-error']",

  termsCheckBox: "[id = 'ContentPlaceHolder1_MyCheckBox']", //Please accept our Terms and Conditions.

  errorTermsCheckBox: "[id = 'ctl00$ContentPlaceHolder1$MyCheckBox-error']",

  submitButton: "#ContentPlaceHolder1_btnRegister",

  verifyEmail: "[id='ContentPlaceHolder1_divHeaderReg']",
  verifyEmail: "Verify Your Email",


};
