import { TradeInfoForAnonymousAlt } from './trade-info-for-anonymous-alt.interface';

export interface ApiSearchResultOfTradeInfoForAnonymousAlt {
  currpage: number;
  invdata: TradeInfoForAnonymousAlt[];
  showTotal: boolean;
  totalpages: number;
  totalrecords: number;
}
