import { TradeInfoForParticipantAlt } from './trade-info-for-participant-alt.interface';

export interface ApiSearchResultOfTradeInfoForParticipantAlt {
  currpage: number;
  invdata: TradeInfoForParticipantAlt[];
  showTotal: boolean;
  totalpages: number;
  totalrecords: number;
}
