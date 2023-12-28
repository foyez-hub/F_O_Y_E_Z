
      function islogin() {
        var loggedInUser = localStorage.getItem("loggedInUser");

        if (loggedInUser) {
          console.log("Logged in user:", loggedInUser);
          document.getElementById("topnavlogout").style.display = "block";
          document.getElementById("topnavlogin").style.display = "none";
          document.getElementById("topnavusername").innerText=loggedInUser;
          
          document.getElementById("Profilebtn").style.display = "block";

          document.getElementById("topnavusername").style.display = "block";

        } else {

          console.log("User is not logged in");

          document.getElementById("topnavlogout").style.display = "none";
          document.getElementById("topnavlogin").style.display = "block";
          document.getElementById("Profilebtn").style.display = "none";
          document.getElementById("topnavusername").style.display = "none";
          // window.location.href = "index.html";

        }
      }
    

      setTimeout(islogin, 1000);
     