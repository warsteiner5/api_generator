import { OrderFilterObjectAlt } from './order-filter-object-alt.interface';
import { TradeSearchTypeEnum } from '../enums/trade-search-type.enum';
import { ZmoFinanceSourceEnum } from '../enums/zmo-finance-source.enum';

export type OrderFilterObjectForCustomerAlt = OrderFilterObjectAlt & { 'ParticipantNameOrInn'?: string | null; 'CustomerNameOrInn'?: string | null; 'ShowOnlyOwnOrder'?: boolean; 'OrderSearchType'?: TradeSearchTypeEnum | null; 'ShowTradesCount'?: boolean; 'ZmoFinanceSource'?: ZmoFinanceSourceEnum | null; 'ZmoFzType'?: number | null; 'ZmoFinanceSourceBudget'?: boolean; 'ZmoFinanceSourceOutOfBudget'?: boolean; 'ZmoFinanceSourceMixedBudget'?: boolean; 'ZmoFinanceSourceMunicipalBudget'?: boolean; 'ZmoFinanceSourceRegionalBudget'?: boolean; 'ZmoFinanceSourceFederalBudget'?: boolean; 'ZmoFinanceSourceNotChecked'?: boolean | null; 'ParentNotTookPlaceTradeId'?: number | null; 'TradeIds'?: Array<number> | null; };
