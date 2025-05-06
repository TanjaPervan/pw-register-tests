export const registerLocators = {

  username: "[id = 'ContentPlaceHolder1_txtUserName']",
  errorUsername: "[id = 'ContentPlaceHolder1_txtUserName-error']",

  email: "[id = 'ContentPlaceHolder1_txtEmail']",
  errorEmail: "[id = 'ContentPlaceHolder1_txtEmail-error']",

  confirmEmail: "[id='ContentPlaceHolder1_txtConfirmEmail']",
  errorConfrimEmail: "[id='ContentPlaceHolder1_txtConfirmEmail-error']", 

  password: "[id = 'ContentPlaceHolder1_txtPassword']", 
  errorPassword: "[id = 'ContentPlaceHolder1_txtPassword-error']",

  confirmPassword: "[id = 'ContentPlaceHolder1_txtPassword2']",
  errorConfrimPassword: "[id = 'ContentPlaceHolder1_txtPassword2-error']",

  termsCheckBox: "[id = 'ContentPlaceHolder1_MyCheckBox']",
  errorTermsCheckBox: "[id = 'ctl00$ContentPlaceHolder1$MyCheckBox-error']",

  submitButton: "#ContentPlaceHolder1_btnRegister",
  verifySubmitEmail: "[id='ContentPlaceHolder1_divHeaderReg']", //blocked by CAPTCHA
};
