const accordians = document.querySelectorAll(".accordian");

accordians.forEach(accordians=>{
    const icon = accordians.querySelector(".icon");
    const answers = accordians.querySelector(".answer");

    accordians.addEventListener("click",()=>{
        if(icon.classList.contains("active")){
            icon.classList.remove("active");
            answers.style.maxHeight = null;

        }else {
            icon.classList.add("active");
            answers.style.maxHeight= answers.scrollHeight + "px";
        }
    })
})
 
