var dreamCar = {
    make: "Ferrari",           // Brand of the car
    model: "296 gtb",                  // Model of the car
    color: "teal",              // Color of the car
    year: 2023,                   // Year it was made
    bodyStyle: "Luxury Car",      // Type of car body
    price: 450000                   // Price of the car
};

// alert("The type of dreamCar is: " + typeof dreamCar); // (Optional) Shows the type of dreamCar (object)

document.getElementById("pricetag").innerHTML = dreamCar.price;         // Displays the car's price in the "pricetag" element
document.getElementById("modelyear").innerHTML = dreamCar.year;         // Displays the car's year in the "modelyear" element
document.getElementById("body").style.backgroundColor = dreamCar.color; // Changes the background color of "body" to match the car's color
document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model; // Displays the full make and model inside the "body" element
