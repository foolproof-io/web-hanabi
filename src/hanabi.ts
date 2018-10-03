import * as maquette from "maquette";
import { shuffle } from "./util";
import { Tile, newDeck } from "./tile";
import { Hint, Hints } from "./hint";

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
  return h('div', { id: "board" }, [
    h('div', { id: "draw" }, [
      deck.length.toString()
    ]),
    hands.map((hand, idx) => {
      let tiles = hand.map(tile => tile.view());
      return h('div', { id: `player${idx}` }, tiles);
    }),
    h('div', { id: "play" }),
    h('div', { id: "hint" }, Hints.ALL.map(hint => hint.view())),
    h('div', { id: "discard" }),
    h('textarea', { id: "log", disabled: true }),
  ]);
}

// Initializes the projector
document.addEventListener('DOMContentLoaded', function () {
  console.log("Hello, World!");
  projector.append(document.body, render);
});