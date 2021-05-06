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
firebase.analytics();

//Program 
function insertData(username,product){
    var firebaseRef=firebase.database().ref("historyWEB");
    firebaseRef.push({
        'username':username,
        'product':product
    });
    console.log("insertData")
}

