import { ClarificationRequestListItem } from './clarification-request-list-item.interface';
import { ClarificationRequestSideEnum } from '../enums/clarification-request-side.enum';

export interface ClarificationRequests {
  requests: ClarificationRequestListItem[];
  side: ClarificationRequestSideEnum;
}
