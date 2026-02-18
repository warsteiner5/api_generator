import { ParticipantOfferPublishResult } from '../../models/participant-offer-publish-result.interface';
import { ApiParticipantOfferPublishResultDto } from '../../../swagger/models/api-participant-offer-publish-result-dto';
import { adaptApiParticipantOfferStateEnum } from './api-participant-offer-state-enum.adapter';
import { adaptApiUsedClassificatorTypeEnum } from './api-used-classificator-type-enum.adapter';

export function adaptApiParticipantOfferPublishResultDto(source?: ParticipantOfferPublishResult | null): ApiParticipantOfferPublishResultDto {
  return {
    ClassificatorCode: source?.classificatorCode,
    ClassificatorType: adaptApiUsedClassificatorTypeEnum(source?.classificatorType),
    Id: source?.id,
    IsAdviceNeeded: source?.isAdviceNeeded,
    IsUpdated: source?.isUpdated,
    OldOfferState: adaptApiParticipantOfferStateEnum(source?.oldOfferState),
    PriceListId: source?.priceListId,
  };
}
