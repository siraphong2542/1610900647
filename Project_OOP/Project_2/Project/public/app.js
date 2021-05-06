// Firebase Config
var firebaseConfig = {
  apiKey: "AIzaSyDVJn6ER2ATaspHaHFHVB0jU_s53tMlHJM",
  authDomain: "javaproject-86658.firebaseapp.com",
  databaseURL: "https://javaproject-86658-default-rtdb.firebaseio.com",
  projectId: "javaproject-86658",
  storageBucket: "javaproject-86658.appspot.com",
  messagingSenderId: "449604717569",
  appId: "1:449604717569:web:19059f5a8333a0901fc400",
  measurementId: "G-SZ5KKGTP0S"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



// -------------------------------------
// Upload A Single Image
// -------------------------------------

function uploadImage(e) {
  let file = e.target.files[0];

  firebase
    .app()
    .storage()
    .ref('images')
    .child(file.name)
    .put(file);
}


const email = document.getElementById('email'),
  pword = document.getElementById('pword'),
  fileUploader = document.getElementById('fileUploader'),
  img = document.getElementById('img')

// Data
let file = {};

// File Uploaded Change Event
fileUploader.addEventListener('change', function (e) {
  file = e.target.files[0];
})


// Signup User
function signUpUser() {
  firebase.auth().createUserWithEmailAndPassword(email.value, pword.value).then(auth => {

    // Upload A Profile Image to the Cloud Storage
    firebase
      .storage()
      .ref("users")
      .child(auth.user.uid + "/profile.jpg")
      .put(file);

  }).catch(error => {
    alert("Email ที่คุณป้อนไม่ถูกต้อง!");
    console.log(error.message)
  })
}

// Check to see if a user is logged in or not
firebase.auth().onAuthStateChanged(user => {

  if (user) {

    // Get A Profile Image from the Cloud Storage
    firebase
      .storage()
      .ref("users")
      .child(user.uid + "/profile.jpg")
      .getDownloadURL()
      .then(imgUrl => {
        img.src = imgUrl;
      });
  }
})