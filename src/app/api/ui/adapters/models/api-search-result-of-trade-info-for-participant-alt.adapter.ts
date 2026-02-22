import { ApiApiSearchResultOfTradeInfoForParticipantAltDto } from '../../../swagger/models/api-api-search-result-of-trade-info-for-participant';
import { ApiSearchResultOfTradeInfoForParticipantAlt } from '../../models/api-search-result-of-trade-info-for-participant-alt.interface';
import { tradeInfoForParticipantAltAdapter } from './trade-info-for-participant-alt.adapter';

export const apiSearchResultOfTradeInfoForParticipantAltAdapter = (source?: ApiApiSearchResultOfTradeInfoForParticipantAltDto | null): ApiSearchResultOfTradeInfoForParticipantAlt => {
  return {
    currpage: source?.currpage,
    invdata: source?.invdata?.map((item) => tradeInfoForParticipantAltAdapter(item)),
    showTotal: source?.showTotal,
    totalpages: source?.totalpages,
    totalrecords: source?.totalrecords,
  };
}
