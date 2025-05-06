export const validUser = {
  username: "takitanja123456",
  email: "tankja@maill.com",
  confirmEmail: "tankja@maill.com",
  password: "Mara123456",
  confirmPassword: "Mara123456"
};

export const emptyFields = {
  username: "",
  email: "",
  confirmEmail: "",
  password: "",
  confirmPassword: ""
};


export const invalidShortAndSpecialEmail = {
  username: "Tan",          //too short
  email: "tan@@gmail.com",  //special char
  confirmEmail: "",         //empty
  password: "12345",       //too short 
  confirmPassword: ""       //empty
}

export const invalidNotMatchAndSpecialUsername = {
  username: "Tanja@Pervan",       // special char invalid format
  email: "tan@gmail.com",         // valid
  confirmEmail: "other@mail.com",  // email not match
  password: "12345678",           // valid
  confirmPassword: "87654321"     // password not match
};
export const validMaxLenghtUsernamePass = {
  username: 'x'.repeat(30),  //long username
  email: "tankja@maill.com",
  confirmEmail: "tankja@maill.com",
  password: 'x'.repeat(75),
  confirmPassword: 'x'.repeat(75)
};
