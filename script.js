const BASE_URL = "https://indonesia-covid-19.mathdro.id/api/provinsi";
const tabel = document.getElementById("table");


fetch(BASE_URL)
    .then((Response)=>Response.json())
    .then((data) => {

        
        for(let i =0; i<data.data.length; i++)
        {
            // isi <tr>
            const row = table.insertRow(i+1);
            //buat <td> 
            const cell1 =row.insertCell(0);
            const cell2 =row.insertCell(1);
            const cell3 =row.insertCell(2);
            const cell4 =row.insertCell(3);
            
    
            cell1.innerHTML = data.data[i].provinsi;
           
            cell2.innerHTML = data.data[i].kasusPosi;
            cell3.innerHTML = data.data[i].kasusSemb;
            cell4.innerHTML = data.data[i].kasusMeni;

            
        }
        
       

        

    });

