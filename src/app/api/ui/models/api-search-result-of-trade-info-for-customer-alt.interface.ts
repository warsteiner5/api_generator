import { TradeInfoForCustomerAlt } from './trade-info-for-customer-alt.interface';

export interface ApiSearchResultOfTradeInfoForCustomerAlt {
  currpage: number;
  invdata: TradeInfoForCustomerAlt[];
  showTotal: boolean;
  totalpages: number;
  totalrecords: number;
}
