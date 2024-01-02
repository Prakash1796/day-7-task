// c.Print the following details name, capital, flag using forEach function

var requestt = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var resultt=JSON.parse(request.response);
   result.forEach(element => {
    console.log(element.name);
        console.log(element.capital);
        console.log(element.flag); 

   });
}
