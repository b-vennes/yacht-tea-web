import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameView } from '../_views/game.view';
import { environment } from 'src/environments/environment';
import { GameQueryMessage } from './messages/gameQueryMessage';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GameService {

    constructor(private httpClient: HttpClient) { }

    public getGameView(gameId: number): Observable<GameView> {
        const queryUrl = `${environment.serverRoot}/game/query`;
        const queryMessage: GameQueryMessage = { id: gameId };

        return this.httpClient.post<GameView>(queryUrl, queryMessage);
    }
}
