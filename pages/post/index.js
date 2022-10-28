/* Desenvolva seu script aqui */
import { getLocalStorage, getIdLocalStorage } from "../../scripts/localStorage.js";
import { renderButtons } from "../home/index.js";
import {getPostById} from "../../scripts/requests.js"
 //renderButtons();

async function goToHome(){
    const btnHome = document.querySelector(".btn-home");
    const id = await getIdLocalStorage();
   
    const post = await getPostById(id);
    localStorage.setItem("categoryPost",JSON.stringify(post.category));

    btnHome.addEventListener("click",async ()=>{
       // await renderPostSelected()
        
        window.location.replace("../home/index.html")
    });
    
    return post.category;
}
goToHome()

async function renderPostSelected(){
    const id = await getIdLocalStorage();
    
    const post = await getPostById(id);
    const main = document.querySelector("main")
    main.insertAdjacentHTML("afterbegin",`
    <section class="section-post">
            <div class="div-post-header">
                <h2 class="title-main title1">${post.title}</h2>
        <p class="p-description text1">${post.description}</p>
            </div>
        <div class="div-post-body">
            <img src="${post.image}" alt="${post.title}">
        <p class="p-content text2">${post.content}</p> 
        </div>
        </section>
    `)
    await renderButtons()
    return main;
}
renderPostSelected()
