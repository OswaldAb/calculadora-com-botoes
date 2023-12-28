let result = document.getElementById('result')
let res = ''

document.getElementById('zero').addEventListener('click', function () {
    res += '0'
    result.innerText = res
})
document.getElementById('one').addEventListener('click', function () {
    res += '1'
    result.innerText = res
})
document.getElementById('two').addEventListener('click', function () {
    res += '2'
    result.innerText = res
})
document.getElementById('three').addEventListener('click', function () {
    res += '3'
    result.innerText = res
})
document.getElementById('four').addEventListener('click', function (ev) {
    res += '4'
    result.innerText = res
})
document.getElementById('five').addEventListener('click', function () {
    res += '5'
    result.innerText = res
})
document.getElementById('six').addEventListener('click', function () {
    res += '6'
    result.innerText = res
})
document.getElementById('seven').addEventListener('click', function () {
    res += '7'
    result.innerText = res
})
document.getElementById('eight').addEventListener('click', function () {
    res += '8'
    result.innerText = res
})
document.getElementById('none').addEventListener('click', function () {
    res += '9'
    result.innerText = res
})
document.getElementById('dot').addEventListener('click', function () {
    res += '.'
    result.innerText = res
})
document.getElementById('add').addEventListener('click', function () {
    res += ' + '
    result.innerText = res
})
document.getElementById('subtraction').addEventListener('click', function () {
    res += ' - '
    result.innerText = res
})
document.getElementById('multiplication').addEventListener('click', function () {
    res += ' * '
    result.innerText = res
})
document.getElementById('division').addEventListener('click', function () {
    res += ' / '
    result.innerText = res
})

document.getElementById('equal').addEventListener('click', function () {
    res = eval(res)
    result.innerText = res
})

document.getElementById('deleteEverything').addEventListener('click', function () {
    res = ''
    result.innerText = res
})


