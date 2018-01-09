const randomize = document.getElementById('randomize')
const sorter = document.getElementById('quicksort')
var randoms = document.getElementsByClassName('randoms')[0]
var sorts = document.getElementsByClassName('sorts')[0]
var random

createInitial(randoms, sorts)

randomize.addEventListener('click', () => {
  makeArr(100)
  makeBars(random, randoms)
})

sorter.addEventListener('click', () => {
  quickSort(random)
})

function makeArr(num) {
  var arr = []
  for (var i = 0; i < num; i++) {
    arr.push(Math.round(10000 * Math.random() / 10))
  }
  random = arr
}

function createInitial(x, y) {
  for (var i = 0; i < 100; i++) {
    var div = document.createElement('div')
    div.id = i
    // console.log(x);
    // console.log(y);
    x.appendChild(div)
  }
  for (var j = 0; j < 100; j++) {
    var div = document.createElement('div')
    div.id = i
    y.appendChild(div)
  }
  console.log(x)
  console.log(y)
}

function makeBars(list, el) {
  // if (el.hasChildNodes()) {
  //   var children = el.childNodes
  //   console.log(children);
  // }
  el.innerHTML = ''
  for (var i = 0; i < list.length; i++) {
    var current = list[i]
    setTimeout(makeBar, i*20, current, el)
  }
}

function makeBar(current, el) {
  var bar = document.createElement('div')
  bar.style.width = 1 + '%'
  bar.style.height = current / 30 + 'vw'
  bar.style.backgroundColor = 'rgb(' + Math.abs(Math.floor(current/3.92)) + ', ' + Math.abs(Math.floor(current/3.92)-192) + ', ' + Math.abs(Math.floor(current/3.92)-255) + ')'
  el.appendChild(bar)
}

function quickSort(list) {
  if (list.length < 2)
    return list;
  let pivot = list[0];
  let left = []
  let right = []
  for (let i = 1, total = list.length; i < total; i++) {
    // console.log(list[i]);
    // makeBars(list[i])
    // setTimeout(makeBars, i*2, arg, arg2)
    switch (true) {
      case(list[i] < pivot):
        left.push(list[i])
        // console.log(step);
        break;
      case(list[i] >= pivot):
        if (list[i])
          right.push(list[i])
        break;
    }
  }
  var step = [].concat(quickSort(left), pivot, quickSort(right));
  console.log(step);
  if (step.length == 100) {
    makeBars(step, sorts)
  }
  return step
}
