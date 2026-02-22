import { ParticipantOfferPublishResult } from '../../models/participant-offer-publish-result.interface';
import { ApiParticipantOfferPublishResultDto } from '../../../swagger/models/api-participant-offer-publish-result-dto';
import { apiParticipantOfferStateEnumAdapter } from '../enums/api-participant-offer-state-enum.adapter';
import { apiUsedClassificatorTypeEnumAdapter } from '../enums/api-used-classificator-type-enum.adapter';

export const apiParticipantOfferPublishResultDtoAdapter = (source?: ParticipantOfferPublishResult | null): ApiParticipantOfferPublishResultDto => {
  return {
    ClassificatorCode: source?.classificatorCode,
    ClassificatorType: source?.classificatorType === null ? undefined : apiUsedClassificatorTypeEnumAdapter(source?.classificatorType),
    Id: source?.id,
    IsAdviceNeeded: source?.isAdviceNeeded,
    IsUpdated: source?.isUpdated,
    OldOfferState: source?.oldOfferState === null ? undefined : apiParticipantOfferStateEnumAdapter(source?.oldOfferState),
    PriceListId: source?.priceListId,
  };
}
