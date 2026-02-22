import { ParticipantOfferImportErrorStatistic } from '../../models/participant-offer-import-error-statistic.interface';
import { ApiParticipantOfferImportErrorStatisticDto } from '../../../swagger/models/api-participant-offer-import-error-statistic-dto';
import { apiOfferImportErrorEnumAdapter } from '../enums/api-offer-import-error-enum.adapter';

export const apiParticipantOfferImportErrorStatisticDtoAdapter = (source?: ParticipantOfferImportErrorStatistic | null): ApiParticipantOfferImportErrorStatisticDto => {
  return {
    Count: source?.count,
    ErrorType: source?.errorType === null ? undefined : apiOfferImportErrorEnumAdapter(source?.errorType),
    ErrorTypeDescription: source?.errorTypeDescription,
  };
}
