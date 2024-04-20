document.getElementById("colorForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let color = document.getElementById("colorInput").value;
    document.getElementById("header").style.color = color;
});
