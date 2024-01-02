// d.Print the total population of countries using reduce function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.onload=function(){
    var resul=JSON.parse(request.response);
    var total = resul.reduce((acc,curr) =>{
        return acc+curr.population;
    } ,0);

    console.log(total);
 
}