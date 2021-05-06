// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyDVJn6ER2ATaspHaHFHVB0jU_s53tMlHJM",
  authDomain: "javaproject-86658.firebaseapp.com",
  databaseURL: "https://javaproject-86658-default-rtdb.firebaseio.com",
  projectId: "javaproject-86658",
  storageBucket: "javaproject-86658.appspot.com",
  messagingSenderId: "449604717569",
  appId: "1:449604717569:web:19059f5a8333a0901fc400",
  measurementId: "G-SZ5KKGTP0S"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('Delivery');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    phone:phone,
    message:message
  });
}