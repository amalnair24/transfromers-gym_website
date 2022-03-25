var firebaseConfig = {
    apiKey: "AIzaSyD9lyoJ_ZHs0MgL79Y7S7Tu07hRiIevuAo",
    authDomain: "form-2e4b8.firebaseapp.com",
    projectId: "form-2e4b8",
    storageBucket: "form-2e4b8.appspot.com",
    messagingSenderId: "288967564917",
    appId: "1:288967564917:web:f39fb3e97ac8da79e5e23c"
  };
  
  firebase.initializeApp(firebaseConfig);



  var con= firebase.database().ref('users');


  document.getElementById('form').addEventListener("submit",(e)=>{
      e.preventDefault();

      var userInfo = con.push();
      userInfo.set({
          
          name:getId("fname"),
          lname:getId("lname"),
          number:getId("number"),
          age:getId("anumber"),
          email:getId("email"),
          planname:getId("packagename"),
      });
      document.getElementById("form").reset();
      });

      function getId(id){
          return document.getElementById(id).value;

      }
  