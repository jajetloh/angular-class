import { Component, OnInit } from '@angular/core'
import { CoinService } from '../components/coin/coin.service'

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {

  score: number = 0

  constructor(
    private coinService: CoinService
  ) {
  }

  ngOnInit(): void {
    this.coinService.scoreObservable.subscribe(s => {
      console.log('received!')
      this.score = s
    })
  }


}
