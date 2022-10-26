export async function getLocalStorage(){
    const newsList = JSON.parse(localStorage.getItem("newsList"))
    console.log(newsList);
    return newsList;
}
