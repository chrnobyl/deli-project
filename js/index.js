$(document).ready(function () {
  Deli()

  $("#deliButton").on("click", function(event){
    event.preventDefault()

    let toSend = $("#newDeli").children().serialize()
    $.ajax({
      type: "POST",
      url: 'http://localhost:3000/api/v1/delis',
      data: toSend,
      success: function(toSend) {
        addDeli(toSend)
        document.getElementById('newDeli').reset()

      },
      dataType: "json"
    });
  })
})

function  Deli(){
   $.ajax({
    url: 'http://localhost:3000/api/v1/delis',
    success: function (response) {
      formatDelis(response)
    }
  })
}

function addDeli(arg) {
  let container = $("#deliContainer")

  if (arg.cat === true){
    arg.cat = "<img src='/Users/cbuggelli/Desktop/FlatironLabs/javascript/deli project/images/yes_cat.jpg'>"
  } else {
    arg.cat = "<img src='/Users/cbuggelli/Desktop/FlatironLabs/javascript/deli project/images/no_cat.jpg'>"
  }

  if (arg.beer === true){
    arg.beer = "<img src='/Users/cbuggelli/Desktop/FlatironLabs/javascript/deli project/images/yes_beer.jpg'>"
  } else {
    arg.beer = "<img src='/Users/cbuggelli/Desktop/FlatironLabs/javascript/deli project/images/no_beer.jpg'>"
  }


  let newString = ""
  newString += `<div><h1>${arg.name}</h1>`
  newString += `<p>${arg.address}</p>`
  newString += `<p>${arg.rating}</p>`
  newString += `<p>Beer: ${arg.beer}</p>`
  newString += `<p>Cat: ${arg.cat}</p></div>`
  container.prepend(newString)
}


function formatDelis(response){
  let allDelis = response

  allDelis.forEach(function(deli){
    let container = $("#deliContainer")
    let deliString = ''

    deliString += `<div><h1>${deli.name}</h1>`
    deliString += `<p>${deli.address}</p>`
    deliString += `<p>${deli.rating}</p></div>`
    deliString += `<p class="beer">Beer: ${deli.beer}</p></div>`
    deliString += `<p class='cat'>Cat: ${deli.cat}</p></div>`
    container.append(deliString)
    let last = container[container.length]
  })

  appendCatImage()
  appendBeerImage()
}

function appendCatImage(){
  let cats = $('.cat')
  for(var cat in cats){
      if (cats[cat].innerHTML === "Cat: true"){
        cats[cat].innerHTML = "<img src='/Users/cbuggelli/Desktop/FlatironLabs/javascript/deli project/images/yes_cat.jpg'>"
      } else {
        cats[cat].innerHTML = "<img src='/Users/cbuggelli/Desktop/FlatironLabs/javascript/deli project/images/no_cat.jpg'>"
      }
    }
  }

function appendBeerImage(){
    let beers = $('.beer')
    for(var beer in beers){
        if (beers[beer].innerHTML.split(" ")[1] === "true"){
          beers[beer].innerHTML = "<img src='/Users/cbuggelli/Desktop/FlatironLabs/javascript/deli project/images/yes_beer.jpg'>"
        } else {
          beers[beer].innerHTML = "<img src='/Users/cbuggelli/Desktop/FlatironLabs/javascript/deli project/images/no_beer.jpg'>"
        }
    }
}
