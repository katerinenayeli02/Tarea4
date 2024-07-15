// function ajax() {
//     let number = 0;
//     const btn = document.getElementById('btn');
//     btn.addEventListener('click', e => {
//       const req = new XMLHttpRequest();
//       req.onreadystatechange = function() {
//         if (req.readyState == 4) {
//           if(req.status == 200) {
//             const videoArea = document.getElementById("video");
//             const titleArea = document.getElementById("title");
//             const contentArea = document.getElementById("content");
//             videoArea.innerHTML = req.response[number].url;
//             titleArea.innerHTML = req.response[number].title;
//             contentArea.innerHTML = req.response[number].content;
//             number == 2 ? number = 0 : number++
//           }
//         }
//       }
//       req.open("GET", "url.json");
//       req.responseType = "json"
//       req.send(null);
//     })
//   }
  
// window.onload = ajax;

let number = 0;
let data = []; // Para almacenar los datos obtenidos de ajax.json
const videoArea = document.getElementById("video");
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const button = document.getElementById('btn');

// function getData() {
//   button.addEventListener('click', e => {
//     const request = new XMLHttpRequest();
//     request.onreadystatechange = function() {
//       if (request.readyState == 4) {
//         if(request.status == 200) {
//           titleArea.innerHTML = request.response[number].title;
//           contentArea.innerHTML = request.response[number].content;
//           videoArea.setAttribute("src", request.response[number].url);
//           number == 2 ? number = 0 : number++;
//         }
//       }
//     }
//     request.open("GET", "ajax.json");
//     request.responseType = "json";
//     request.send(null);
//   })
// }
// window.onload = getData;

function getData() {
  button.addEventListener('click', e => {
    console.log("ejecuta metodo click");
    if (data.length === 0) { // Solo hace la petición si data está vacía
      console.log("data no tiene datos");
      const request = new XMLHttpRequest();
      request.onreadystatechange = function() {
        if (request.readyState == 4) {
          if (request.status == 200) {
            console.log(`request.response: ${request.response}`);
            data = request.response; // Almacena los datos en la variable global
            console.log(`data1: ${data}`);
            console.log(data);
            changeVideo();
          } else {
            console.log(`${request.status} respuesta diferente de 200`)
          }
        }
      }
      request.open("GET", "ajax.json");
      request.responseType = "json";
      request.send(null);
    } else {
        console.log("data length mayor a 0")
        changeVideo(); // Reutiliza los datos si ya fueron obtenidos
    }
  })
}

function changeVideo() {
  titleArea.innerHTML = data[number].title;
  contentArea.innerHTML = data[number].content;
  console.log(`url data: ${data[number].url}`)
  // videoArea.innerHTML(data[number].url);
  // videoArea.setAttribute("src", data[number].url)
  videoArea.src = data[number].url;
  number == 2 ? number = 0 : number++;
}

window.onload = getData;
