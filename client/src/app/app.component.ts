import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';

import { InfluenceLadder } from './shared/classes/influenceLadder';
import { InfluenceLadderService } from './influence-ladder/influence-ladder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [InfluenceLadderService]
})

export class AppComponent implements OnInit {
  influenceLadder: InfluenceLadder;
  influenceLadders: InfluenceLadder[];
  constructor(private influenceLadderService: InfluenceLadderService) {}

  getInfluenceLadder(): void {
    this.influenceLadderService.getInfluenceLadders().then(
      influenceLadders => this.influenceLadders = influenceLadders
    );
  }

  ngOnInit(): void {
    this.getInfluenceLadder();
  }
}
