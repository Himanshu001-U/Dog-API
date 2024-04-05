// fetch("https://dog.ceo/api/breeds/image/random")
// .then((data)=>{
//     console.log(data);
//     return data;
// })
// .then((data)=>{
//     console.log(data.json);
// })

document.getElementById("fetchbtn").addEventListener('click', fetchImage);

async function fetchImage(){
    let container = document.getElementById("container");
    let response =  await fetch ("https://dog.ceo/api/breeds/image/random" );
    let Data = await response.json();

    let img = document.createElement("img");
    img.src = Data.message;
    img.alt = "Random Dog Image";
    container.innerHTML="";
    container.appendChild(img);

}
 