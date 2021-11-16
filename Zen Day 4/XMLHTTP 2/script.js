// 3.Use the rest countries API and print all countries name, region, sub region and population

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all", true);
request.send();
request.onload = function () {
  var data = JSON.parse(request.response);
  console.log(data);

  for (var i = 0; i < data.length; i++) {
    console.log(
      data[i].name,
      data[i].region,
      data[i].subregion,
      data[i].population
    );
  }
};
