var startups = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var ideas = ['Kittens', 'Cars', 'Clowns', 'Insurance', 'Clothes', 'Food', 'Hipsters'];
var favs = [];



document.getElementById('create').onclick = function() {
  var random1 = Math.floor((Math.random() * startups.length)),
      random2 = Math.floor((Math.random() * ideas.length));
      create = startups[random1] + ' for ' + ideas[random2];



console.log(create);
document.getElementById('xForY').textContent = create;
}

document.getElementById('save').onclick = function(){
  favs.push(create);
  console.log(favs);
};

document.getElementById('print').onclick = function(){


  for (i = 0; i <= favs.length -1; i++){
    var li = document.createElement('li');
    var ul = document.getElementById('favs')

    if (i <= favs.length) {
      li.appendChild(document.createTextNode(favs[i]));
      ul.appendChild(li);
    }


  }


}
