// 2.Use the rest countries API url -> https://restcountries.eu/rest/v2/all
// and display all the country flags in console

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all", true);
request.send();
request.onload = function () {
  var data = JSON.parse(request.response);
  console.log(data);

  for (var i = 0; i < data.length; i++) {
    console.log(data[i].flags);
  }
};
