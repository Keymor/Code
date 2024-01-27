const vans = {
    shoes: 12,
    skates: 5,
    amount: 0,
    price: 5,
    t_shirt: {
        mens: 'fore',
        kids: 'two'
    }
}

const myName = {
name: 'VANS'
}

const fallen = Object.assign ({}, vans)

vans.t_shirt.kids = 'ten'
fallen.shoes = 5

console.log (vans.t_shirt)
console.log (fallen.t_shirt)
console.log (vans)

// functions

function caunter(a, b) {
    vans.amount = a + b
    return vans.amount
}

function priceCounter(a, b) {
    vans.price = a * b
    return vans.price
}

function increaseSkatesAmount(deck) {
    deck.skates = deck.skates + 1
    return deck.skates
}

function increaseShoes(vans) {
    const coppyOfVans = Object.assign ({}, vans)
    coppyOfVans.shoes += 1
    return coppyOfVans
}

function upp() {
    console.log ()
}

// end of functions

caunter(vans.shoes, vans.skates)
priceCounter(vans.price, vans.amount)
increaseSkatesAmount(vans)
const vansMoreShoes = increaseShoes(fallen)

console.log (vansMoreShoes)
console.log (fallen)

console.log (vans.amount)
console.log (vans.price)
console.log (vans.skates)

