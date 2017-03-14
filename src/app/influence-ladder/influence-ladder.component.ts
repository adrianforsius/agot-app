import { Component, Input } from '@angular/core';

import { InfluenceLadder } from '../shared/classes/influence-ladder';

@Component({
  selector: 'influence-ladder',
  templateUrl: './influence-ladder.component.html',
  styleUrls: ['./influence-ladder.component.css']
})

export class InfluenceLadderComponent {
  @Input()
  influenceLadder: InfluenceLadder;
}
