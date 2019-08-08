//Business logic
var doctorArr = [];
function DoctorsInfo(name,spec,hos,loc,lan,email,num){
  this.name = name;
  this.spec = spec;
  this.hos = hos;
  this.loc = loc;
  this.lan = lan;
  this.email = email;
  this.num = num;
}
DoctorsInfo.prototype.fullDocInfo = function(){
  return "Name: " + this.name + ",Speciality: " + this.spec + ", Hospital: " + this.hos + ", Location: " + this.loc + ",Language: " + this.lan + ", Email: " + this.email + ", Phone number: " + this.num;
}
// function resetFields(){

// }

//User interface logic
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyARRTsdlTgZ0HbIDOc0anwBX7l2VDvzG88",
  authDomain: "specialists-663ef.firebaseapp.com",
  databaseURL: "https://specialists-663ef.firebaseio.com",
  projectId: "specialists-663ef",
  storageBucket: "",
  messagingSenderId: "452003197107",
  appId: "1:452003197107:web:5a3fda3944c6036b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var ref = database.ref("Doctors");

function submit() {
  alert("Thank you for registering.")
  var Doctor = {
  name: document.getElementById("name").value,
  speciality: document.getElementById("speciality").value,
  hospital: document.getElementById("hospital").value,
  location: document.getElementById("location").value,
  languages: document.getElementById("lang").value,
  email: document.getElementById("email").value,
  Pnumber: document.getElementById("phone").value
  }
  console.log(Doctor);
  var ref = database.ref("Doctors");
  ref.push(Doctor);
  var newDoctor = new DoctorsInfo(Doctor.name,Doctor.speciality,Doctor.hospital,Doctor.location,Doctor.languages,Doctor.email,Doctor.Pnumber);
  console.log(newDoctor);
  
}
console.log(doctorArr);
$(document).ready(function(){
  $("#doc").click(function(){
    // $("#cardPat").toggle();
    $("#form").toggle();
    $("#available").hide();
    $("#list").hide();
  });
  $("#pat").click(function(){
    // $("#cardDoc").toggle();
    $(".search").toggle();
    $("#available").hide();
    $("#form").hide();
    $("#list").hide();
  }); 
  $("#show").click(function(){
    $("#list").show();
  });
  
  console.log(database);
  ref.on("value" , gotData , errData);
  
  function gotData(data){
    // console.log(data.val());
    doctor = data.val();
    var keys = Object.keys(doctor);
    // console.log(keys);
    for(var i = 0 ; i <= keys.length ; i++){
      var k = keys[i];
      var name = doctor[k].name;
      var speciality = doctor[k].speciality; 
      var hospital = doctor[k].hospital;
      var location = doctor[k].location;
      var languages = doctor[k].languages;
      var email = doctor[k].email;
      var pnumber = doctor[k].Pnumber;
      doctorArr.push(doctor[k]);
      console.log(doctorArr);
      var li = "Name: " +name + ", Speciality: " +speciality + ", Hospital " +hospital + ", Location: " +location + ", Languages: " + languages + ", Email: " + email + ", Phone number: " + pnumber;
      $("#list").prepend("<p>" + li +"<p>");
    }
  }
  function errData(err){
    console.log("Error!");
    console.log(err);
  }
  $("#input").click(function(){
    $("#available").show();
    var search = $("#search").val();
    console.log(search);
    for(var i=0; i<=doctorArr.length; i++){
      if(search.toUpperCase() === doctorArr[i].speciality.toUpperCase())
      {

        var li = "Name: " + doctorArr[i].name + ", Speciality: " +doctorArr[i].speciality + ", Hospital " +doctorArr[i].hospital + ", Location: " + doctorArr[i].location + ", Languages: " + doctorArr[i].languages + ", Email: " + doctorArr[i].email + ", Phone number: " + doctorArr[i].pnumber;
        $("#available").prepend("<p>" + li +"<p>");
       console.log(li);
      }
      else{
        $("#available").prepend("<p>There are no doctors registered with this speciality.</p>")
      }
    }

  });
});



