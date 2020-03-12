let tempConverter = function (temp) {
    let newTemp = (temp - 32) * 5 / 9
    return newTemp
}

celsiusTemp = tempConverter(32)
otherCelsiusTemp = tempConverter(68)
console.log(celsiusTemp)
console.log(otherCelsiusTemp)