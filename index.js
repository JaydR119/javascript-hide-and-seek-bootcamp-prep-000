function getFirstSelector(selector) {
  return document.querySelector(selector);

}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var ranks = document.querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n;
  }
}

function deepestChild() {
  var answer
  var children = {}
  var counter = 0
  var list = document.querySelectorAll('#grand-node > div')
  for (var i = 0; i < list.length; i++) {
    var current_child = list[i]
    while (current_child.querySelector(':first-child') != null) {
      counter += 1
      current_child = current_child.querySelector(':first-child')
      deepestChild = current_child
    }
    if (children[i] === undefined || children[i] < counter) {
      children[i] = counter
      answer = deepestChild
    }
    counter = 0
    }
    return answer
    
}
