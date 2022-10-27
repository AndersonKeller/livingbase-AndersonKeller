let listLocal = [];

export async function conectAPI(currentPage){
    const data = await fetch(`https://m2-api-living.herokuapp.com/news?page=${currentPage}`)
    const dataJson = await data.json();
   
    listLocal= [...dataJson.news]
    
    localStorage.setItem("newsList",JSON.stringify(listLocal))
    return dataJson;
}
export async function getPostById(id){
    const baseUrl = "https://m2-api-living.herokuapp.com/news/";
    const data = await fetch(`${baseUrl}${id}`);
    const dataJson = await data.json();

    return dataJson;
}

