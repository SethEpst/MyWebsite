
    
    /* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
    function dropdownBtn() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      
      // Close the dropdown if the user clicks outside of it
      window.onclick = function(e) {
        if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
          if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
          }
        }
      }

      // Toggles Dark Mode for page
      function toggleDark() {
        document.body.classList.toggle('dark');
      }
