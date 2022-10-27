/* Desenvolva seu script aqui */
import { conectAPI } from "../../scripts/requests.js";
import { getLocalStorage } from "../../scripts/localStorage.js";
//getLocalStorage()
//let page =1;
// const response = await conectAPI()
// response.news.forEach((e)=>{
//     //console.log(e.category)
// })
// <li class="li-category">
// <button class="btn-category">Todos</button>
// </li>
export async function renderButtons(){
    
    const listLocal = await getLocalStorage();
    
    const ulCategory = document.querySelector(".ul-category");
    ulCategory.innerHTML = ""
    ulCategory.addEventListener("click",async (event)=>{
        if(event.target.tagName == "BUTTON"){
            
            if(event.target.innerText == "Todos"){
                const ulNews = document.querySelector(".ul-news");
                ulNews.innerHTML = "";
                await renderNews();
                 observerNewsScroll()
            }else{
               await renderCategory(event.target.innerText);
               const divFinal = document.querySelector(".div-final");
              if(divFinal){
                divFinal.remove()
              }
               
            }
        }
    })
    
    const newsBtn = await getLocalStorage();
    const filtered = newsBtn.map((btn)=>{
        return btn.category
    })
    console.log(filtered)
    let filterList = filtered.filter(function(e,i){
        return filtered.indexOf(e)===i;
    })
    console.log(filterList)
    
    const li = document.createElement("li");
        li.classList.add("li-category");
        const btn = document.createElement("button");
        btn.classList.add("btn-category");
        btn.innerText = `Todos`
        li.appendChild(btn)
        ulCategory.appendChild(li);
        
        
        filterList.forEach( (e)=>{
            
        const liNews = document.createElement("li");
        liNews.classList.add("li-category");
        const btnNews = document.createElement("button");
        btnNews.classList.add("btn-category");
        btnNews.innerText = `${e}`;
        
      
                liNews.appendChild(btnNews);
                ulCategory.appendChild(liNews);
      
        
    })
   

}
 //renderButtons()
observerNewsScroll()
let page =1;
async function observerNewsScroll(){
    const main = document.querySelector("main")
    const createDiv = document.createElement("div");
    createDiv.classList.add("div-final")
    main.appendChild(createDiv)
    const divObservadora = document.querySelector('.div-final');
    const observer = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) {
       if(page<4){
        conectAPI(page++)
        renderNews()
        renderButtons()
       }
    }
  });
  observer.observe(divObservadora);
}
  
async function renderNews(){
    
    const newsList = await conectAPI(page);
    newsList.news.forEach((news)=>{
        const ulNews = document.querySelector(".ul-news");
        const li = document.createElement("li");
        li.classList.add("li-news");
        li.id = `${news.id}`
        const imgNews = document.createElement("img");
        imgNews.src = `${news.image}`;
        const h2Title = document.createElement("h2");
        h2Title.classList.add("title-new");
        h2Title.classList.add("title2");
        h2Title.innerText = `${news.title}`;
        const pContent = document.createElement("p");
        pContent.classList.add("text2");
        pContent.classList.add("content-new");
        pContent.innerText = `${news.description}`;
        const aLink = document.createElement("a");
        aLink.classList.add("link-new");
        aLink.innerText = "Acessar conteúdo";
        aLink.addEventListener("click",()=>{
            localStorage.setItem("idNews",JSON.stringify(`${news.id}`))
            window.location.replace("../post/index.html")
        })

        li.append(imgNews,h2Title,pContent,aLink)
        ulNews.appendChild(li)

    })
    renderButtons()
}
//renderNews()
async function renderCategory(category){
    const localList = await getLocalStorage()
    const ulNews = document.querySelector(".ul-news");
    ulNews.innerHTML = ""
   localList.forEach((news)=>{
    if(news.category == category){
       
        const li = document.createElement("li");
        li.classList.add("li-news");
        li.id = `${news.id}`
        const imgNews = document.createElement("img");
        imgNews.src = `${news.image}`;
        const h2Title = document.createElement("h2");
        h2Title.classList.add("title-new");
        h2Title.classList.add("title2");
        h2Title.innerText = `${news.title}`;
        const pContent = document.createElement("p");
        pContent.classList.add("text2");
        pContent.classList.add("content-new");
        pContent.innerText = `${news.description}`;
        const aLink = document.createElement("a");
        aLink.classList.add("link-new");
        aLink.innerText = "Acessar conteúdo";
        aLink.addEventListener("click",()=>{
            localStorage.setItem("idNews",JSON.stringify(`${news.id}`))
            window.location.replace("../post/index.html")
        })

        li.append(imgNews,h2Title,pContent,aLink)
        ulNews.appendChild(li)
    }
   })
   
}
