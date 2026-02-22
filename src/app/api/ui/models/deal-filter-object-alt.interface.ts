import { BaseFilterObjectAlt } from './base-filter-object-alt.interface';
import { DealFormEnum } from '../enums/deal-form.enum';
import { DealObjectEnum } from '../enums/deal-object.enum';
import { DealStateEnum } from '../enums/deal-state.enum';
import { TradeSearchTypeEnum } from '../enums/trade-search-type.enum';

// @ts-ignore
export interface DealFilterObjectAlt extends BaseFilterObjectAlt {
  customerName: string;
  participantNameOrInn: string;
  customerNameOrInn: string;
  dealSubject: string;
  priceMin: number;
  priceMax: number;
  conclusionDateFrom: string;
  conclusionDateTo: string;
  tradeNumber: number;
  dealForm: DealFormEnum;
  dealState: DealStateEnum;
  showOnlyDealSignedOutsideEShop: boolean;
  customerOrganizationInn: string;
  showOnlyOwnDeals: boolean;
  dealObject: DealObjectEnum;
  searchType: TradeSearchTypeEnum;
}
