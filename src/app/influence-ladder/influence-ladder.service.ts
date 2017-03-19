import { Injectable } from '@angular/core';

import { MockedInfluenceLadders } from './mock-influence-ladder';
import { MockedInfluenceLadder } from './mock-influence-ladder';
import { InfluenceLadder } from '../shared/classes/influence-ladder';

@Injectable()
export class InfluenceLadderService {
  getInfluenceLadder(): Promise<InfluenceLadder> {
    return Promise.resolve(MockedInfluenceLadder);
  }
  getInfluenceLadders(): Promise<InfluenceLadder[]> {
    return Promise.resolve(MockedInfluenceLadders);
  }
}
