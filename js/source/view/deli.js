class Deli {
  constructor(response){
    this.name = response.name
    this.address = response.address
    this.rating = response.rating
    this.beer = response.beer
    this.cat = response.cat
  }
    render(){

      let container = $("#deliContainer")
      let deliString = ''

      deliString += `<div><h1>${this.name}</h1>`
      deliString += `<p>${this.address}</p>`
      deliString += `<p>${this.rating}</p></div>`
      deliString += `<p class="beer">Beer: ${this.beer}</p></div>`
      deliString += `<p class='cat'>Cat: ${this.cat}</p></div>`
      container.append(deliString)
      let last = container[container.length]
    }
}
