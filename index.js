document.addEventListener("DOMContentLoaded", function(event) {
  init()

})

function handlebarsSetup(){
  var recipe = {
    description: 'yummy chicken noodle soup',
    ingredients: [
      {quantity: "1 cup", name: 'chicken'},
      {quantity: "3 nanoliters", name: 'stock'},
      {quantity: "12", name: 'noodles'}
    ]
  }

  var template = Handlebars.compile(document.getElementById("my-template").innerHTML);
  var html = template(recipe);
  document.getElementById('main').innerHTML += html
}

function init() {
  //put any page initialization/handlebars initialization here
  handlebarsSetup()

}
