import { ApiParticipantOfferImportErrorStatisticDto } from '../../../swagger/models/api-participant-offer-import-error-statistic-dto';
import { ParticipantOfferImportErrorStatistic } from '../../models/participant-offer-import-error-statistic.interface';
import { offerImportErrorEnumAdapter } from '../enums/offer-import-error-enum.adapter';

export const participantOfferImportErrorStatisticAdapter = (source?: ApiParticipantOfferImportErrorStatisticDto | null): ParticipantOfferImportErrorStatistic => {
  return {
    count: source?.Count,
    errorType: source?.ErrorType === null ? undefined : offerImportErrorEnumAdapter(source?.ErrorType),
    errorTypeDescription: source?.ErrorTypeDescription,
  };
}
