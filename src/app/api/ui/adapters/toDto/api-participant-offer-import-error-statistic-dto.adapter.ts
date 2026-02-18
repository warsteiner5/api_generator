import { ParticipantOfferImportErrorStatistic } from '../../models/participant-offer-import-error-statistic.interface';
import { ApiParticipantOfferImportErrorStatisticDto } from '../../../swagger/models/api-participant-offer-import-error-statistic-dto';
import { adaptApiOfferImportErrorEnum } from './api-offer-import-error-enum.adapter';

export function adaptApiParticipantOfferImportErrorStatisticDto(source?: ParticipantOfferImportErrorStatistic | null): ApiParticipantOfferImportErrorStatisticDto {
  return {
    Count: source?.count,
    ErrorType: adaptApiOfferImportErrorEnum(source?.errorType),
    ErrorTypeDescription: source?.errorTypeDescription,
  };
}
