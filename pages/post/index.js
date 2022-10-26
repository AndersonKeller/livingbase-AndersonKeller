/* Desenvolva seu script aqui */
import { getLocalStorage } from "../../scripts/localStorage.js";
import { renderButtons } from "../home/index.js";
const localNews = await getLocalStorage()
await renderButtons();

function goToHome(){
    const btnHome = document.querySelector(".btn-home");
    btnHome.addEventListener("click",()=>{
        window.location.replace("../home/index.html")
    })
}
goToHome()
