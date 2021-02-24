import { EventEmitter, Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class CoinService {

    constructor() {
    }

    score: number = 0

    scoreObservable = new EventEmitter<number>()

    registerCoinClick(increment: number): void {
        this.score = this.score + increment
        this.scoreObservable.emit(this.score)
    }
}
