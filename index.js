function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('.target');
}

function increaseRankBy(n) {
  const ranks = document.querySelectorAll('.ranked-list li');
  for (let i = 0; i <ranks.length; i++) {
    ranks[i].innerHTML = parseInt((n * ranks[i]).toString(),10);
  }
}

function deepestChild() {
  const temp = document.getElementById("grand-node").querySelectorAll("div");
  console.log(temp);
  console.log(temp.innerHTML);
}