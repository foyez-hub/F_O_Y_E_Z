function isuser(){
    var loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
     

    } else {

      
      window.location.href = "index.html";

    }
  }
  isuser();