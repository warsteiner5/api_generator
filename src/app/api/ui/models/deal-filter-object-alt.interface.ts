import { BaseFilterObjectAlt } from './base-filter-object-alt.interface';
import { DealFormEnum } from '../enums/deal-form.enum';
import { DealObjectEnum } from '../enums/deal-object.enum';
import { DealStateEnum } from '../enums/deal-state.enum';
import { TradeSearchTypeEnum } from '../enums/trade-search-type.enum';

export type DealFilterObjectAlt = BaseFilterObjectAlt & { 'CustomerName'?: string | null; 'ParticipantNameOrInn'?: string | null; 'CustomerNameOrInn'?: string | null; 'DealSubject'?: string | null; 'PriceMin'?: number | null; 'PriceMax'?: number | null; 'ConclusionDateFrom'?: string | null; 'ConclusionDateTo'?: string | null; 'TradeNumber'?: number | null; 'DealForm'?: DealFormEnum | null; 'DealState'?: DealStateEnum | null; 'ShowOnlyDealSignedOutsideEShop'?: boolean; 'CustomerOrganizationInn'?: string | null; 'ShowOnlyOwnDeals'?: boolean; 'DealObject'?: DealObjectEnum | null; 'SearchType'?: TradeSearchTypeEnum | null; };
