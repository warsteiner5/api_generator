import { ApiApiSearchResultOfTradeInfoForParticipantAltDto } from '../../../swagger/models/api-api-search-result-of-trade-info-for-participant';
import { ApiSearchResultOfTradeInfoForParticipantAlt } from '../../models/api-search-result-of-trade-info-for-participant-alt.interface';
import { adaptTradeInfoForParticipantAltToUI } from './trade-info-for-participant-alt.adapter';

export function adaptApiSearchResultOfTradeInfoForParticipantAltToUI(source?: ApiApiSearchResultOfTradeInfoForParticipantAltDto | null): ApiSearchResultOfTradeInfoForParticipantAlt {
  return {
    currpage: source?.currpage ?? 0,
    invdata: (source?.invdata ?? []).map((item) => adaptTradeInfoForParticipantAltToUI(item)),
    showTotal: source?.showTotal ?? false,
    totalpages: source?.totalpages ?? 0,
    totalrecords: source?.totalrecords ?? 0,
  };
}
