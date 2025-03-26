// This function changes the color of the circle
function paint(color) {
    // Get the circle element by its ID
    const circle = document.getElementById('circleID');
    
    // Change the background color of the circle
    circle.style.backgroundColor = color;
    
    // Log a message to the console
    console.log(`Circle color changed to ${color}`);
}
