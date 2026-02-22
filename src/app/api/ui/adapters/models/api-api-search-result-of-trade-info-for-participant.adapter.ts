import { ApiSearchResultOfTradeInfoForParticipantAlt } from '../../models/api-search-result-of-trade-info-for-participant-alt.interface';
import { ApiApiSearchResultOfTradeInfoForParticipantAltDto } from '../../../swagger/models/api-api-search-result-of-trade-info-for-participant';
import { apiTradeInfoForParticipantAltDtoAdapter } from './api-trade-info-for-participant.adapter';

export const apiApiSearchResultOfTradeInfoForParticipantAltDtoAdapter = (source?: ApiSearchResultOfTradeInfoForParticipantAlt | null): ApiApiSearchResultOfTradeInfoForParticipantAltDto => {
  return {
    currpage: source?.currpage,
    invdata: source?.invdata?.map((item) => apiTradeInfoForParticipantAltDtoAdapter(item)),
    showTotal: source?.showTotal,
    totalpages: source?.totalpages,
    totalrecords: source?.totalrecords,
  };
}
