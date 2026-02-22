import { PurchaseObjectCardAlt } from './purchase-object-card-alt.interface';

// @ts-ignore
export interface StarSearchObjItemAlt {
  additionalNumbers: string[];
  attachmentSearchResultInfo: string;
  etpsId: number;
  marketPlaceNumber: string;
  marketPlaceNumberInt: number;
  marketPlaceTenderId: number;
  purchaseName: string;
  rawMaxPrice: number;
  region: string;
  regionId: number;
  tru: PurchaseObjectCardAlt[];
}
