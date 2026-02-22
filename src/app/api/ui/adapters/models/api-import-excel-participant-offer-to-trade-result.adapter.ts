import { ImportExcelParticipantOfferToTradeResultAlt } from '../../models/import-excel-participant-offer-to-trade-result-alt.interface';
import { ApiImportExcelParticipantOfferToTradeResultAltDto } from '../../../swagger/models/api-import-excel-participant-offer-to-trade-result';
import { apiImportExcelParticipantOfferDtoAdapter } from './api-import-excel-participant-offer-dto.adapter';

export const apiImportExcelParticipantOfferToTradeResultAltDtoAdapter = (source?: ImportExcelParticipantOfferToTradeResultAlt | null): ApiImportExcelParticipantOfferToTradeResultAltDto => {
  return {
    ErrorText: source?.errorText,
    ErrorsFileUrl: source?.errorsFileUrl,
    IsSuccess: source?.isSuccess,
    ParticipantOffers: source?.participantOffers?.map((item) => apiImportExcelParticipantOfferDtoAdapter(item)),
  };
}
