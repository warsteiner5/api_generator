import { EntityDtoOfInteger } from './entity-dto-of-integer.interface';

// @ts-ignore
export interface CompetitiveListItemReject extends EntityDtoOfInteger {
  competitiveListItemId: number;
  explainMessage: string;
  fileGuid: string;
}
