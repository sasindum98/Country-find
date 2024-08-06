document.getElementById("tblCountries");

let tableBody = ` <tr>
            <th>Name</th>
            <th>Flag</th>
        </tr>`

let tes = fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then(data => {

        data.forEach(element => {
            tableBody += ` <tr>
    
    <td><h1>${element.name.common}</h1><br>
    Official Name : ${element.name.official}<br>
    <p>Reigon : ${element.region}<br>
    Area : ${element.area}<p>
    <a class = "btn btn-warning" href = "${element.maps.googleMaps}">Go to Map</a>
    
    </td>

    <td><img src="${element.flags.png}" alt=""></td>
</tr>`
            console.log(element.name.common);

        });
        

        tblCountries.innerHTML = tableBody;
    });

function searchCountry() {


let userInput = document.getElementById("txtInput").value;


let flagImg =  document.getElementById("flagImg");
let name = document.getElementById("name");
let officialName = document.getElementById("officialName");
let region = document.getElementById("region");
let area = document.getElementById("area");

fetch(`https://restcountries.com/v3.1/name/${userInput}`)
.then(res =>res.json())
.then(data => {
    data.forEach(obj =>{
        console.log(obj);
        flagImg.src=obj.flags.png
        name.innerText=obj.name.common
        officialName.innerText = obj.name.official
        region.innerText= obj.region
        area.innerText=obj.area
        
    })     
})

}