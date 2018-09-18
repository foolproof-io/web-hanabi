import * as maquette from "maquette";

let h = maquette.h;
let projector = maquette.createProjector();

let hands: string[][] = [
  ["b4", "r3", "y5", "w1", "p1"],
  ["b4", "r3", "y5", "w1", "p1"],
  ["b4", "r3", "y5", "w1", "p1"],
  ["b4", "r3", "y5", "w1", "p1"]
]

function render() {
  return h('div', [
    hands.map((hand, idx) => {
      let tiles = hand.map(card => h('img.tile', {
        src: `imgs/tiles/${card}.svg`
      }));
      tiles.push(h('button', {
        onclick: () => shuffle(hand)
      }));
      return h('div', tiles);
    }),
    h('img', { id: "trash", src: "imgs/trashcan.svg" }),
    h('div', { id: "table" }),
  ]);
}

// Initializes the projector
document.addEventListener('DOMContentLoaded', function () {
  console.log("Hello, World!");
  projector.append(document.body, render);
});

function shuffle<T>(xs: T[]) {
    for (let i = xs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [xs[i], xs[j]] = [xs[j], xs[i]];
    }
}

function cardColor(card: string) {
  switch (card[0]) {
    case "r": return "red";
    case "b": return "blue";
    case "y": return "yellow";
    case "w": return "white";
  }
  return "grey";
}
