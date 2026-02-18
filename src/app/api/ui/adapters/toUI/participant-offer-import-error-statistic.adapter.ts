import { ApiParticipantOfferImportErrorStatisticDto } from '../../../swagger/models/api-participant-offer-import-error-statistic-dto';
import { ParticipantOfferImportErrorStatistic } from '../../models/participant-offer-import-error-statistic.interface';
import { adaptOfferImportErrorEnumToUI } from './offer-import-error-enum.adapter';

export function adaptParticipantOfferImportErrorStatisticToUI(source?: ApiParticipantOfferImportErrorStatisticDto | null): ParticipantOfferImportErrorStatistic {
  return {
    count: source?.Count ?? 0,
    errorType: adaptOfferImportErrorEnumToUI(source?.ErrorType),
    errorTypeDescription: source?.ErrorTypeDescription ?? '',
  };
}
