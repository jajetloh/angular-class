import { Component, Input, OnInit } from '@angular/core'
import { CoinService } from './coin.service'

@Component({
    selector: 'app-coin',
    templateUrl: './coin.component.html',
    styleUrls: ['./coin.component.css']
})

export class CoinComponent implements OnInit {

    @Input() initialType: CoinType = CoinType.Yellow
    @Input() id: any

    type: CoinType
    CoinType = CoinType

    constructor(private coinService: CoinService) {
    }

    ngOnInit(): void {
        this.type = this.initialType
    }

    onClick(): void {
        console.log('onClick', this.type)
        switch (this.type) {
            case CoinType.Yellow:
                this.coinService.registerCoinClick(1)
                this.type = CoinType.Blue
        }
    }

}

enum CoinType {
    Yellow = 0,
    Blue = 1,
}
