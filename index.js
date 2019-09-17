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
  let node = document.getElementById('grand-node');
  let nextNode = node.children[0];
  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }
}
