export async function getLocalStorage(){
    const newsList = await JSON.parse(localStorage.getItem("newsList"))
    
    return newsList;
}
export async function getIdLocalStorage(){
    const id = await JSON.parse(localStorage.getItem("idNews"));

    return id
}