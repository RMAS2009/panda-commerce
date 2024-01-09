function Agedetection()
{

     // Get the user input value
     let userInput = document.getElementById("agevalue").value;
     const modalInstance = new bootstrap.Modal(document.getElementById("myModal"));
 
 
     // Check if the input is blank
     if (!userInput.trim()) {
         const modalBody = document.getElementById("modalBody");
         modalBody.innerHTML = `
         <div class="card" style = "width: 100%;" >
         <img src="error.jpg" class="card-img-top" alt="...">
             <div class="card-body">
                 <h2 class="card-title text-center">opps! Please enter a valid age</h2>
                
         `;
         modalInstance.show();
         return;
 
     }
 
     // Convert the input to a floating-point number
     const age = parseFloat(userInput);
 
     // Check if the age is a valid number
     if (isNaN(age)) {
         const modalBody = document.getElementById("modalBody");
         modalBody.innerHTML = `
         <div class="card" style = "width: 100%;" >
         <img src="error.jpg" class="card-img-top" alt="...">
             <div class="card-body">
                 <h2 class="card-title text-center">Enter Some Valid Input Buddy...</h2>
                 
         `;
         modalInstance.show();
         return;
     }
 
     // Check if the age is 18 or more
     if (age >= 18) {
 
         const modalBody = document.getElementById("modalBody");
         modalBody.innerHTML = `
         <div class="card" style = "width: 100%;" >
         <img src="adult men.avif" class="card-img-top" alt="...">
             <div class="card-body">
                 <h5 class="card-title">🎉🎉🎉 Congrats Buddy!! You are an Adult......</h5>
                 
         `;
         modalInstance.show();
 
 
     } else {
         const modalBody = document.getElementById("modalBody");
         modalBody.innerHTML = `
         <div class="card" style = "width: 100%;" >
         <img src="crying kid.jpg" class="card-img-top" alt="...">
             <div class="card-body">
                 <h5 class="card-title">👶🏼👶🏼 OOOpsss! You are still Kid </h5>
                 
         `;
         modalInstance.show();
     }
 
     // Clear the input field
     document.getElementById("UserInput").value = "";
    

}