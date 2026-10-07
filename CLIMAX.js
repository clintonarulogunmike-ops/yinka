// window.addEventListener("load", function() {
function scrollUp(){
    const targetDiv = document.getElementById('home');
    if (targetDiv) {
        targetDiv.scrollIntoView({ behavior: 'smooth' });
    }
    const confirm = confirm("WELCOME");
    confirm.style.color = "blue";
}; 
// window.addEventListener("scroll",function(){
//     window.alert("You are currently scrolling this page");
// })
// location= prompt("what your current location");
// console.log(location);
// console.log("work mode");
// console.log("CODDING.....");

const showCase = null;
const cart_btn = document.getElementById("cart_btn");
let counter = 0;
cart_btn.addEventListener("click",function() {
    counter ++;
    document.getElementById("header_2").textContent= counter; 
});

// function cart_btn(){
//     alert("ARE YOU READY TO PURCHASE")
//     let counter = 0;
//     counter += 1;
//     showCase.text = counter;
// }