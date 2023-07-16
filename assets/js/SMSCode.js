//   // Get the input element by id
//   const SMSCode = document.getElementById("SMSCode");
//   console.log(SMSCode)

//   // Add a keyup event listener
//   SMSCode.addEventListener("keyup", function() {
//     // Get the current value of the input
//     let value = SMSCode.value;

//     // Remove any non-digit characters from the value
//     value = value.replace(/\D/g, "");

//     // Add dashes after every four digits
//     value = value.replace(/(\d{1})/g, "$1-");

//     // Remove any trailing dash
//     value = value.replace(/-$/, "");

//     // Set the new value of the input
//     SMSCode.value = value;
//   });


