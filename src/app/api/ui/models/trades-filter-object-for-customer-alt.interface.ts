import { TradeSearchTypeEnum } from '../enums/trade-search-type.enum';
import { TradesFilterObjectAlt } from './trades-filter-object-alt.interface';
import { ZmoFinanceSourceEnum } from '../enums/zmo-finance-source.enum';

export type TradesFilterObjectForCustomerAlt = TradesFilterObjectAlt & { 'ZmoFinanceSource'?: ZmoFinanceSourceEnum | null; 'ZmoFzType'?: number | null; 'ShowOnlyOwnTrades'?: boolean; 'IsExpire'?: boolean; 'ZmoFinanceSourceBudget'?: boolean; 'ZmoFinanceSourceOutOfBudget'?: boolean; 'ZmoFinanceSourceMixedBudget'?: boolean; 'ZmoFinanceSourceMunicipalBudget'?: boolean; 'ZmoFinanceSourceRegionalBudget'?: boolean; 'ZmoFinanceSourceFederalBudget'?: boolean; 'ZmoFinanceSourceNotChecked'?: boolean | null; 'ShowTradesCount'?: boolean; 'TradeSearchType'?: TradeSearchTypeEnum | null; };
