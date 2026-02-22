import { TradeInfoForAnonymousAlt } from './trade-info-for-anonymous-alt.interface';

// @ts-ignore
export interface ApiSearchResultOfTradeInfoForAnonymousAlt {
  currpage: number;
  invdata: TradeInfoForAnonymousAlt[];
  showTotal: boolean;
  totalpages: number;
  totalrecords: number;
}
