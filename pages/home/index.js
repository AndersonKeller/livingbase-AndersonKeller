/* Desenvolva seu script aqui */
import { conectAPI } from "../../scripts/requests.js";

const response = await conectAPI()
response.news.forEach((e)=>{
    console.log(e.category)
})
// <li class="li-category">
// <button class="btn-category">Todos</button>
// </li>
async function renderButtons(){
    const ulCategory = document.querySelector(".ul-category");
    const newsBtn = await conectAPI();
    const li = document.createElement("li");
        li.classList.add("li-category");
        const btn = document.createElement("button");
        btn.classList.add("btn-category");
        btn.innerText = `Todos`
        li.appendChild(btn)
        ulCategory.appendChild(li);

    newsBtn.news.forEach((news)=>{
        const li = document.createElement("li");
        li.classList.add("li-category");
        const btn = document.createElement("button");
        btn.classList.add("btn-category");
        btn.innerText = `${news.category}`
        li.appendChild(btn)
        ulCategory.appendChild(li)

    })

}
renderButtons()
async function renderNews(){
    const newsList = await conectAPI();
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
        aLink.innerText = "Acessar conteúdo"

        li.append(imgNews,h2Title,pContent,aLink)
        ulNews.appendChild(li)

    })
}
renderNews()
{/* <li class="li-news">
<img src="../../assets/news1.png" alt="">
<h2 class="title-new title2">Cuidados para manter com plantas dentro de apartamentos</h2>
<p class="content-new text2">Invite as many collaborators as you’d like. They can register as team members or join as guests – no registration required.</p>
<a href="" class="link-new">Acessar conteúdo</a>
</li> */}