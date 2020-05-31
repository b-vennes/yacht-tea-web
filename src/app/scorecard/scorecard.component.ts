import { Component, OnInit } from '@angular/core';
import { GameService } from '../_services/game.service';
import { take } from 'rxjs/operators';
import { ScorecardTable } from './scorecard-table';

@Component({
    selector: 'app-scorecard',
    templateUrl: './scorecard.component.html',
    styleUrls: ['./scorecard.component.scss']
})
export class ScorecardComponent implements OnInit {

    scorecard: ScorecardTable;

    displayedColumns: string[] = ['name', 'score'];

    constructor(private gameService: GameService) { }

    ngOnInit(): void {
        this.gameService.getGameView(1)
            .pipe(take(1))
            .subscribe(result => this.scorecard = new ScorecardTable(result.scorecard));
    }
}
