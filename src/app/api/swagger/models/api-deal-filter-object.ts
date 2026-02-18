/* tslint:disable */
/* eslint-disable */
import { ApiBaseFilterObjectAltDto } from '../models/api-base-filter-object';
import { ApiDealFormEnum } from '../models/api-deal-form-enum';
import { ApiDealObjectEnum } from '../models/api-deal-object-enum';
import { ApiDealStateEnum } from '../models/api-deal-state-enum';
import { ApiTradeSearchTypeEnum } from '../models/api-trade-search-type-enum';
export type ApiDealFilterObjectAltDto = ApiBaseFilterObjectAltDto & {
'CustomerName'?: string | null;
'ParticipantNameOrInn'?: string | null;
'CustomerNameOrInn'?: string | null;
'DealSubject'?: string | null;
'PriceMin'?: number | null;
'PriceMax'?: number | null;
'ConclusionDateFrom'?: string | null;
'ConclusionDateTo'?: string | null;
'TradeNumber'?: number | null;
'DealForm'?: ApiDealFormEnum | null;
'DealState'?: ApiDealStateEnum | null;
'ShowOnlyDealSignedOutsideEShop'?: boolean;
'CustomerOrganizationInn'?: string | null;
'ShowOnlyOwnDeals'?: boolean;
'DealObject'?: ApiDealObjectEnum | null;
'SearchType'?: ApiTradeSearchTypeEnum | null;
};
