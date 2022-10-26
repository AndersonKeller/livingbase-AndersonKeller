export async function getLocalStorage(){
    const newsList = await JSON.parse(localStorage.getItem("newsList"))
    console.log(newsList);
    return newsList;
}
export async function getIdLocalStorage(){
    const id = await JSON.parse(localStorage.getItem("idNews"));

    return id
}