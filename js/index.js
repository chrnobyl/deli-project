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
  let newString = ""
  newString += `<div><h1>${arg.name}</h1>`
  newString += `<p>${arg.address}</p>`
  newString += `<p>${arg.rating}</p></div>`

  container.append(newString)

}


function formatDelis(response){
  let allDelis = response

  allDelis.forEach(function(deli){
    let container = $("#deliContainer")
    let deliString = ''

    // deliDiv.id = `deli-${deli.id}`
    deliString += `<div><h1>${deli.name}</h1>`
    deliString += `<p>${deli.address}</p>`
    deliString += `<p>${deli.rating}</p></div>`
    container.append(deliString)
    let last = container[container.length]
  })
}

// function deliMaker(info){
//   debugger
//   $.post({
//   url: 'http://localhost:3000/api/v1/delis',
//   data: info,
//   success: function (response){
//     formatDelis(response)
//   },
//   datatype: json
// });
//   // debugger
// }
