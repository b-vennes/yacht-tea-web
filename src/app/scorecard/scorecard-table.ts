import { ScorecardView } from '../_views/scorecard.view';

export class ScorecardTable {

    constructor(scorecard: ScorecardView) {
        this.rows = [];
        this.rows.push({ name: 'Ones', score: scorecard.ones });
        this.rows.push({ name: 'Twos', score: scorecard.twos });
        this.rows.push({ name: 'Threes', score: scorecard.threes });
        this.rows.push({ name: 'Fours', score: scorecard.fours });
        this.rows.push({ name: 'Fives', score: scorecard.fives });
        this.rows.push({ name: 'Sixes', score: scorecard.sixes });
        this.rows.push({ name: 'Upper Bonus', score: scorecard.upperBonus });
        this.rows.push({ name: 'Upper Total', score: scorecard.upperTotal });
    }

    rows: Array<ScorecardRow>;
}

export class ScorecardRow {
    name: string;

    score: number;
}
