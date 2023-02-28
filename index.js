let div = document.querySelector("#div")
document.querySelector("#zipcode").addEventListener("click", function(){
   let val = document.querySelector("#search").value
    if(val.length === 5 && div.innerHTML === ""){
        fetch(`http://api.zippopotam.us/us/${val}`).then((res)=>{
            return res.json();
        }).then((data)=>{
            // console.log(data)
            let p5 = document.createElement("p")
            let p1 = document.createElement("p")
            let p2 = document.createElement("p")
            let p3 = document.createElement("p")
            let p4 = document.createElement("p")
            div.appendChild(p5)
            div.appendChild(p1)
            div.appendChild(p2)
            div.appendChild(p3)
            div.appendChild(p4)
            p5.innerText = "Zip Code: " + val
            p1.innerText = "Country: " + data.country
            p2.innerText = "State: " + data.places[0].state
            p3.innerText = "Longitude: " + data.places[0].longitude
            p4.innerText = "Latitude: " + data.places[0].latitude
            document.querySelector("#search").value = ""
            div.style.display = "block"
        }).catch((e)=>{
            alert("invalid zip code")
            window.location.reload();
        })
    }else{
        window.location.reload();
        alert("enter valid zipcode or try once")
        div.style.display = "none"
    }
   
})