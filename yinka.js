window.addEventListener("load", function() {
    const targetDiv = document.getElementById('home');
    if (targetDiv) {
        targetDiv.scrollIntoView({ behavior: 'smooth' });
    }
    const confirm = confirm("WELCOME");
    confirm.style.color = "blue";
}); 
console.log("work mode");
console.log("Working.....");