var app = document.getElementById('root');

 const logo = document.createElement('img');
 logo.src = '/javascripts/logo.png';

var container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://api.mercadolibre.com/sites', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(site => {
      var card = document.createElement('div');
      card.setAttribute('class', 'card');
      card.onclick=function(){
        console.log(site.id);
        //window.open("categories.html?id="+site_id,"_self");
        window.location.assign("/sites/categories/"+site.id);
      };

      var h1 = document.createElement('h1');
      h1.textContent = site.name;

      var p = document.createElement('p');
      p.textContent = "ID: " + site.id;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    var errorMessage = document.createElement('marquee');
    errorMessage.textContent = "No funciona!";
    app.appendChild(errorMessage);
  }
}

request.send();