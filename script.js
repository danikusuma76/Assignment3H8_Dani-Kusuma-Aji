const BASE_URL = "https://indonesia-covid-19.mathdro.id/api/provinsi";
const tabel = document.getElementById("table");
const positifElement  = document.getElementById("positif");
const sembuhElement  = document.getElementById("sembuh");
const meninggalElement  = document.getElementById("meninggal");

fetch(BASE_URL)
    .then((Response)=>Response.json())
    .then((data) => {
        const coviddata=data.data
        
        for(let i =0; i<coviddata.length; i++)
        {
            // isi <tr>
            const row = table.insertRow(i+1);
            //buat <td> 
            const cell1 =row.insertCell(0);
            const cell2 =row.insertCell(1);
            const cell3 =row.insertCell(2);
            const cell4 =row.insertCell(3);
            
    
            cell1.innerHTML = coviddata[i].provinsi;
           
            cell2.innerHTML = coviddata[i].kasusPosi;
            cell3.innerHTML = coviddata[i].kasusSemb;
            cell4.innerHTML = coviddata[i].kasusMeni;

            
        }

        const posi =(coviddata.reduce((n, {kasusPosi}) => n + kasusPosi, 0));
        positifElement.innerHTML="Positif : "+posi;

        const semb =(coviddata.reduce((n, {kasusSemb}) => n + kasusSemb, 0));
        sembuhElement.innerHTML="Sembuh : "+semb;

        const meni =(coviddata.reduce((n, {kasusMeni}) => n + kasusMeni, 0));
        meninggalElement.innerHTML="Meninggal : "+meni;


       

        

    });

    
