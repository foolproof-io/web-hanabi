import { VNode, h } from "maquette";
import { Color, Colors, Rank, Ranks } from './tile';

type Kind = ColorHint | RankHint;
interface ColorHint {
    color: Color;
    type: "color";
}
interface RankHint {
    rank: Rank;
    type: "rank";
}

export class Hint {
    private kind: Kind;
    constructor(kind: Kind) {
        this.kind = kind;
    }

    view(): VNode {
        let src = "";
        if (this.kind.type == "color") {
            src = `imgs/hints/${Colors.toString(this.kind.color)}.svg`;
        } else if (this.kind.type == "rank") {
            src = `imgs/hints/${Ranks.toString(this.kind.rank)}.svg`;
        }
        return h('img.hint', { src });
    }
}

export class Hints {
    private static COLORS: Hint[] = Colors.ALL.map(c => new Hint({ color: c, type: "color" }));
    private static RANKS: Hint[] = Ranks.ALL.map(r => new Hint({ rank: r, type: "rank" }));
    static ALL: Hint[] = Hints.COLORS.concat(Hints.RANKS);
}