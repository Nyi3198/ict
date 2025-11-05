// Example: Highlight pollutant when clicked
document.addEventListener("DOMContentLoaded", function() {
    const pollutants = document.querySelectorAll("ul li");
    pollutants.forEach(item => {
        item.style.cursor = "pointer";
        item.addEventListener("click", function() {
            alert("You clicked on: " + this.textContent);
            this.style.color = "red";
        });
    });
});