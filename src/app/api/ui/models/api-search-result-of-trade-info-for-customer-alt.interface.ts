import { TradeInfoForCustomerAlt } from './trade-info-for-customer-alt.interface';

// @ts-ignore
export interface ApiSearchResultOfTradeInfoForCustomerAlt {
  currpage: number;
  invdata: TradeInfoForCustomerAlt[];
  showTotal: boolean;
  totalpages: number;
  totalrecords: number;
}
