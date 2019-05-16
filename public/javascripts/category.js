var url_string = window.location.pathname;
var p=/M../;
var siteId=p.exec(url_string);
// var url = new URL(url_string);
// var siteId= url.searchParams.get("id");
console.log(siteId);
var endPoint="https://api.mercadolibre.com/sites/" + siteId + "/categories";
var app = document.getElementById('root');
var request = new XMLHttpRequest();
request.open('GET', endPoint, true);
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    var container = document.createElement('div');
    //container.setAttribute('class', 'container');
    container.style.alignContent="center"
    container.style.paddingLeft="50px"
    container.style.paddingRight="50px"
    var lista = document.createElement('ul');
    data.forEach(category => {
      var item = document.createElement('li');
      item.setAttribute('class','card');
      item.style.textAlign='center'
      item.innerHTML=category.name;
      lista.appendChild(item);
    });
    container.appendChild(lista);
    app.appendChild(container);
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = "No funciona!";
    app.appendChild(errorMessage);
  }
}
request.send();