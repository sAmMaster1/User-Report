// JavaScript functions
const quizForm = document.getElementById("quizForm");
const resetButton = document.getElementById("resetButton");
const submitButton = document.getElementById("submitButton");

// Event listener for the reset button
resetButton.addEventListener("click", function() {
    quizForm.reset();
});

// Event listener for the submit button
submitButton.addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const familySize = parseInt(document.getElementById("familySize").value);
    const dietaryHabit = document.getElementById("dietaryHabit").value;
    const plasticUsage = document.getElementById("plasticUsage").value;
    const recycleFrequency = document.getElementById("recycleFrequency").value;
    const groceryShoppingFrequency = document.getElementById("groceryShoppingFrequency").value;

    // Initialize total points
    let totalPoints = 0;

    // Calculate points based on user's choices
    // Dietary Habit
    if (dietaryHabit === "CookAtHome") {
        totalPoints += 2;
    } else if (dietaryHabit === "EatOut") {
        totalPoints -= 1;
    }

    // Plastic Usage
    if (plasticUsage === "PlasticStraws") {
        totalPoints -= 4;
    } else if (plasticUsage === "PlasticBottle") {
        totalPoints -= 3;
    } else if (plasticUsage === "PlasticBags") {
        totalPoints -= 2;
    } else if (plasticUsage === "CoffeeCups") {
        totalPoints -= 1;
    }

    // Recycling Frequency
    if (recycleFrequency === "Weekly") {
        totalPoints += 2;
    } else if (recycleFrequency === "Monthly") {
        totalPoints += 1;
    } else if (recycleFrequency === "Rarely") {
        totalPoints -= 1;
    } else if (recycleFrequency === "Never") {
        totalPoints -= 2;
    }

    // Grocery Shopping Frequency
    if (groceryShoppingFrequency === "Daily") {
        totalPoints -= 1;
    } else if (groceryShoppingFrequency === "Weekly") {
        totalPoints += 1;
    } else if (groceryShoppingFrequency === "Monthly") {
        totalPoints += 2;
    }

    // Display points in a dialog box
    alert(`${name}, you scored ${totalPoints} points!`);

    // You can add logic here to interpret the points and provide a meaningful message

    // Reset the form
    quizForm.reset();
});
