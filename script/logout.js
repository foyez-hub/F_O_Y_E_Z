function logout() {
    console.log('logout');
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("housename");
    localStorage.removeItem("fullname");

      document.getElementById("topnavlogout").style.display = "none";
      document.getElementById("topnavlogin").style.display = "block";
      document.getElementById("topnavusername").style.display = "none";

  }