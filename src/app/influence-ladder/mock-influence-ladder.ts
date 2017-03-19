import { MockedInfluence } from './mock-influence';
import { MockedFamilyList } from './mock-family-list';

import { InfluenceLadder } from '../shared/classes/influence-ladder';

export const MockedInfluenceLadder: InfluenceLadder = {
  familyList: MockedFamilyList,
  influence: MockedInfluence
}
export const MockedInfluenceLadders: InfluenceLadder[] = [
  MockedInfluenceLadder,
  MockedInfluenceLadder,
  MockedInfluenceLadder
]
