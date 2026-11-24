let counter = 0
let size = 8
let choosedWidth = 10
function widthPattern(number) {
    let width = ""
    for (let i = 0; i < number;i++) {
        width += " #"
    }
    return width
}
let evenWidth = widthPattern(choosedWidth)
let oddWidth = evenWidth.slice(1, evenWidth.length) + " "
while (counter < size) {
    if (counter % 2 === 0) {
        console.log(evenWidth)
        counter ++
    } else {
        console.log(oddWidth)
        counter ++
    }
}