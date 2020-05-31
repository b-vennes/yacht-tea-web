import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameView } from '../_views/game.view';
import { environment } from 'src/environments/environment';
import { GameQueryMessage } from './messages/gameQueryMessage';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root'
})
export class GameService {

    constructor(private httpClient: HttpClient, private userService: UserService) { }

    public getGameView(): Observable<GameView> {
        const queryUrl = `${environment.serverRoot}/game/query`;
        const queryMessage: GameQueryMessage = { userId: this.userService.getUserId() };

        return this.httpClient.post<GameView>(queryUrl, queryMessage);
    }
}
