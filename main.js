document.addEventListener("DOMContentLoaded", function() {

const url = "https://love-calculator.p.rapidapi.com/getPercentage?";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "891667cc5fmsh9ceb60d030fb4a2p17f874jsn9cbc66b28d88",
          "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
        },
      };
      document.getElementById("calcularBtn").addEventListener("click", calcular);
      function calcular() {
        let nombre1 = document.getElementById("nombre1").value;
        let nombre2 = document.getElementById("nombre2").value;
        fetch(url + "fname=" + nombre1 + "&sname=" + nombre2, options)
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            response.image =
              "https://static.vecteezy.com/system/resources/previews/001/187/507/non_2x/heart-png.png";
            const content = document.getElementById("content");
            content.innerHTML = `
      <h1>${response.fname}</h1> <img src="${response.image}" width="100" alt="Corazón"> <h1>${response.sname}</h1>
      <h1>Porcentaje de amor: ${response.percentage}%</h1>
      <h3>Resultado: ${response.result}</h3>
    `;
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    });