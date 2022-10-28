

export async function verifyClick(){
    const categoryLocal = await JSON.parse(localStorage.getItem("categoryPost"));
    const btns = document.querySelectorAll(".btn-category");
    btns.forEach((btn)=>{
        if(btn.innerText == categoryLocal){
            btn.click()
           // btn.classList.toggle("button-click")
            localStorage.removeItem("categoryPost")
        }
    })

}