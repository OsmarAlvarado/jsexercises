const topping = prompt("What kind of ice cream do you want?")
let withoutTopping = 1.90
let topping2 = 1.00
let topping3 = 1.50
let topping4 = 0.75
let topping5 = 0.95

switch (topping) {
    case 'without':
        alert(`${withoutTopping} €`)
        break;
    case 'Oreo':
        topping2 += withoutTopping
        alert(`${topping2} €`)
        break;
    case 'Kitkat':
        topping3 += withoutTopping
        alert(`${topping3} €`)
        break;
    case 'Brownie':
        topping4 += withoutTopping
        alert(`${topping4} €`)
        break;
    case 'lacasitos':
        topping5 += withoutTopping
        alert(`${topping5} €`)
        break;

    default:
        alert(`Sorry, we do not have this topping, the price is: ${withoutTopping} €`)
        break;
}


