import * as maquette from "maquette";
import { shuffle } from "./util";
import { Tile, newDeck } from "./tile";

let h = maquette.h;
let projector = maquette.createProjector();

let deck: Tile[] = newDeck();
let hands: Tile[][] = [];
for (let i = 0; i < 4; i++) {
  let hand: Tile[] = [];
  for (let j = 0; j < 4; j++) {
    hand.push(deck.pop()!);
  }
  hands.push(hand);
}

function render() {
  return h('div', [
    h('div', { id: "draw" }, [
      deck.length.toString()
    ]),
    hands.map((hand, idx) => {
      let tiles = hand.map(tile => tile.view());
      return h('div', tiles);
    }),
    h('div', { id: "play" }),
    h('div', { id: "discard" }),
  ]);
}

// Initializes the projector
document.addEventListener('DOMContentLoaded', function () {
  console.log("Hello, World!");
  projector.append(document.body, render);
});