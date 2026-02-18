import { ApiImportExcelParticipantOfferToTradeResultAltDto } from '../../../swagger/models/api-import-excel-participant-offer-to-trade-result';
import { ImportExcelParticipantOfferToTradeResultAlt } from '../../models/import-excel-participant-offer-to-trade-result-alt.interface';
import { adaptImportExcelParticipantOfferToUI } from './import-excel-participant-offer.adapter';

export function adaptImportExcelParticipantOfferToTradeResultAltToUI(source?: ApiImportExcelParticipantOfferToTradeResultAltDto | null): ImportExcelParticipantOfferToTradeResultAlt {
  return {
    errorText: source?.ErrorText ?? '',
    errorsFileUrl: source?.ErrorsFileUrl ?? '',
    isSuccess: source?.IsSuccess ?? false,
    participantOffers: (source?.ParticipantOffers ?? []).map((item) => adaptImportExcelParticipantOfferToUI(item)),
  };
}
