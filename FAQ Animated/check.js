const icon = document.querySelector(".icon");
const answer = document.querySelector(".answer");


icon.addEventListener("click", ()=>{
    if(icon.classList.contains("active")){
    icon.classList.remove("active");
    answer.style.maxHeight= null;
    }else {
        icon.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
    }

});




// Your updated JavaScript code targets the first 
// .icon and .answer elements on the page, and adds an
//  event listener to toggle the visibility of the answer.
//   This will work, but it only handles the first set of FAQ 
//   elements. To handle multiple sets of FAQ elements,
//    you need to loop through each accordion and add the
//     event listener to each icon. Here is the modified 