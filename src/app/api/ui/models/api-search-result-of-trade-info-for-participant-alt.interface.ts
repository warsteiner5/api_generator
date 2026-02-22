import { TradeInfoForParticipantAlt } from './trade-info-for-participant-alt.interface';

// @ts-ignore
export interface ApiSearchResultOfTradeInfoForParticipantAlt {
  currpage: number;
  invdata: TradeInfoForParticipantAlt[];
  showTotal: boolean;
  totalpages: number;
  totalrecords: number;
}
