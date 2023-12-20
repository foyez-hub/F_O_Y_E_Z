
document.addEventListener("DOMContentLoaded", function () {
        fetch("topnav.html")
          .then(response => response.text())
          .then(data => {
            document.getElementById("topnav-container").innerHTML = data;
          })
          .catch(error => console.error("Error loading topnav:", error));
      });