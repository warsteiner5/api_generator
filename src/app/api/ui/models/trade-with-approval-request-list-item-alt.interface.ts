import { ApprovalRequestStateEnum } from '../enums/approval-request-state.enum';
import { DictionaryItem2Alt } from './dictionary-item-2-alt.interface';
import { MarketDealStateEnum } from '../enums/market-deal-state.enum';

// @ts-ignore
export interface TradeWithApprovalRequestListItemAlt {
  approvalRequestState: ApprovalRequestStateEnum;
  deliveryKladrs: DictionaryItem2Alt[];
  fillingApplicationEndDate: string;
  id: number;
  lotItemsCount: number;
  name: string;
  price: number;
  state: MarketDealStateEnum;
  stateString: string;
  workGroupsNames: string[];
}
