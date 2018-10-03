import { VNode, h } from "maquette";
import { shuffle } from "./util";

export enum Color {
    Blue,
    Green,
    Rainbow,
    Red,
    White,
    Yellow,
}

export class Colors {
    static ALL: Color[] = [ Color.Blue, Color.Green, Color.Rainbow, Color.Red, Color.White, Color.Yellow ];
    static toString(c: Color): string {
        switch (c) {
            case Color.Blue: return "b";
            case Color.Green: return "g";
            case Color.Rainbow: return "p";
            case Color.Red: return "r";
            case Color.White: return "w";
            case Color.Yellow: return "y";
        }
    }
}

export enum Rank {
    One,
    Two,
    Three,
    Four,
    Five,
}

export class Ranks {
    static ALL: Rank[] = [ Rank.One, Rank.Two, Rank.Three, Rank.Four, Rank.Five ];
    static toString(r: Rank): string {
        switch (r) {
            case Rank.One: return "1";
            case Rank.Two: return "2";
            case Rank.Three: return "3";
            case Rank.Four: return "4";
            case Rank.Five: return "5";
        }
    }
    static count(r: Rank): number {
        switch (r) {
            case Rank.One: return 3;
            case Rank.Two: return 2;
            case Rank.Three: return 2;
            case Rank.Four: return 2;
            case Rank.Five: return 1;
        }
    }
}

export class Tile {
    color: Color;
    rank: Rank;
    constructor(color: Color, rank: Rank) {
        this.color = color;
        this.rank = rank;
    }

    view(): VNode {
        return h('img.tile', { 
            src: `imgs/tiles/${Colors.toString(this.color)}${Ranks.toString(this.rank)}.svg`
        });
    }
}

export function newDeck(): Tile[] {
    let deck: Tile[] = [];
    Colors.ALL.forEach(c => {
        Ranks.ALL.forEach(r => {
            for (let i = 0; i < Ranks.count(r); i++) {
                deck.push(new Tile(c, r));
            }
        });
    });
    shuffle(deck);
    return deck;
}