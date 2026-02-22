import { ApiImportExcelParticipantOfferToTradeResultAltDto } from '../../../swagger/models/api-import-excel-participant-offer-to-trade-result';
import { ImportExcelParticipantOfferToTradeResultAlt } from '../../models/import-excel-participant-offer-to-trade-result-alt.interface';
import { importExcelParticipantOfferAdapter } from './import-excel-participant-offer.adapter';

export const importExcelParticipantOfferToTradeResultAltAdapter = (source?: ApiImportExcelParticipantOfferToTradeResultAltDto | null): ImportExcelParticipantOfferToTradeResultAlt => {
  return {
    errorText: source?.ErrorText,
    errorsFileUrl: source?.ErrorsFileUrl,
    isSuccess: source?.IsSuccess,
    participantOffers: source?.ParticipantOffers?.map((item) => importExcelParticipantOfferAdapter(item)),
  };
}
