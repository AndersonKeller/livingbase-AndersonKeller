export async function conectAPI(){
    const data = await fetch("https://m2-api-living.herokuapp.com/news?page=1")
    const dataJson = await data.json();
   
    
    localStorage.setItem("newsList",JSON.stringify(dataJson.news))
    return dataJson;
}
export async function getPostById(id){
    const baseUrl = "https://m2-api-living.herokuapp.com/news/";
    const data = await fetch(`${baseUrl}${id}`);
    const dataJson = await data.json();

    return dataJson;
}