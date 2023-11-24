// QUESTION NUMBER 1 

function displayFormData(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Get form data
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Display form data on the webpage
    var displayData = document.getElementById("displayData");
    displayData.innerHTML = "<h2>Form Data:</h2>" +
        "<p><strong>Username:</strong> " + username + "</p>" +
        "<p><strong>Email:</strong> " + email + "</p>" +
        "<p><strong>Password:</strong> " + password + "</p>";
}
// QUESTION NUMBER 2
function toggleDetails() {
    var itemDetails = document.getElementById("itemDetails");
    var readMoreBtn = document.getElementById("readMoreBtn");

    if (itemDetails.style.maxHeight) {
        
        itemDetails.style.maxHeight = null ;
        readMoreBtn.textContent = "Read more" ;
    } else {
        
        itemDetails.style.maxHeight = itemDetails.scrollHeight + "px";
        readMoreBtn.textContent = "Read less";
    }
}


document.getElementById("readMoreBtn").style.display = "block";

// QUESTION NUMBER 3 


function deleteRow(btn) {
  
    var row = btn.parentNode.parentNode;
    
    
    row.parentNode.removeChild(row);
}

