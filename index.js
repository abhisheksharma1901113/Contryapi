// function getData(){
//     var request=new XMLHttpRequest()
//     request.open("https://restcountries.com/v3.1/name/bharat ")
//     request.send()

//     request.addEventListener("load",()=>{
//         var [data]= JSON.parse(request.responseText)
//         document.getElementById("name").innerHTML = data.name.official
//         document.getElementById("flag").src = data.flags.svg
//         document.getElementById("capital").innerHTML = data.capital[0]
//         document.getElementById("population").innerHTML = data.population
//         document.getElementById("area").innerHTML = data.area
//         document.getElementById("region").innerHTML = data.region
//         document.getElementById("subregion").innerHTML = data.subregion
//         document.getElementById("maps").href = data.maps.googleMaps 
//         document.getElementById("borders").innerHTML=data.borders
//         document.getElementById("timezones").innerHTML = data.timezones
//         document.getElementById("Independent").innerHTML = data.independent  
//         document.getElementById("UnMember").innerHTML = data.unMember
//         document.getElementById("landlocked").innerHTML = data.landlocked
//         document.getElementById("start").innerHTML = data.startOfWeek

//     })
// }
// getData()   

// function fun(){
//     var name=document.getElementById("search").value
//     var request=new XMLHttpRequest()
//     request.open("get","https://restcountries.com/v3.1/name/"+name )
//     request.send()

//     request.addEventListener("load",()=>{
//         var [data]= JSON.parse(request.responseText)
//         document.getElementById("name").innerHTML = data.name.official
//         document.getElementById("flag").src = data.flags.svg
//         document.getElementById("capital").innerHTML = data.capital[0]
//         document.getElementById("population").innerHTML = data.population
//         document.getElementById("area").innerHTML = data.area
//         document.getElementById("region").innerHTML = data.region
//         document.getElementById("subregion").innerHTML = data.subregion
//         document.getElementById("maps").href = data.maps.googleMaps 
//         document.getElementById("borders").innerHTML=data.borders
//         document.getElementById("timezones").innerHTML = data.timezones
//         document.getElementById("Independent").innerHTML = data.independent  
//         document.getElementById("UnMember").innerHTML = data.unMember
//         document.getElementById("landlocked").innerHTML = data.landlocked
//         document.getElementById("start").innerHTML = data.startOfWeek

//     })
// }
// fun()



async function getData() {
    try {

        var response = await fetch("https://restcountries.com/v3.1/name/bharat ")
        var [data] = await response.json()

        document.getElementById("name").innerHTML = data.name.official
        document.getElementById("flag").src = data.flags.svg
        document.getElementById("capital").innerHTML = data.capital[0]
        document.getElementById("population").innerHTML = data.population
        document.getElementById("area").innerHTML = data.area
        document.getElementById("region").innerHTML = data.region
        document.getElementById("subregion").innerHTML = data.subregion
        document.getElementById("maps").href = data.maps.googleMaps
        document.getElementById("borders").innerHTML = data.borders
        document.getElementById("timezones").innerHTML = data.timezones
        document.getElementById("Independent").innerHTML = data.independent
        document.getElementById("UnMember").innerHTML = data.unMember
        document.getElementById("landlocked").innerHTML = data.landlocked
        document.getElementById("start").innerHTML = data.startOfWeek
    } catch (error) {
        console.log("Contry name invalid")
    }

}
getData()

async function fun() {
    try {
        var name = document.getElementById("search").value
        var response = await fetch("https://restcountries.com/v3.1/name/" + name)
        var [data] = await response.json()
        document.getElementById("name").innerHTML = data.name.official
        document.getElementById("flag").src = data.flags.svg
        document.getElementById("capital").innerHTML = data.capital[0]
        document.getElementById("population").innerHTML = data.population
        document.getElementById("area").innerHTML = data.area
        document.getElementById("region").innerHTML = data.region
        document.getElementById("subregion").innerHTML = data.subregion
        document.getElementById("maps").href = data.maps.googleMaps
        document.getElementById("borders").innerHTML = data.borders
        document.getElementById("timezones").innerHTML = data.timezones
        document.getElementById("Independent").innerHTML = data.independent
        document.getElementById("UnMember").innerHTML = data.unMember
        document.getElementById("landlocked").innerHTML = data.landlocked
        document.getElementById("start").innerHTML = data.startOfWeek
    }catch {
        alert("Contry Name is Invalid")
    }



}
fun()
