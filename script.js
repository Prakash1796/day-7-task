// a.Get all the countries from the Asia continent /region using the Filter function

var request = XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload = function(){ 
    var result = JSON.parse(request.response);
    result.filter((countries) => {
        return countries.region ==="Asia";
  })
  console.log(result);
}

