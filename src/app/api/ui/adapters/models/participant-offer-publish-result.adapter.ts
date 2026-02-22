import { ApiParticipantOfferPublishResultDto } from '../../../swagger/models/api-participant-offer-publish-result-dto';
import { ParticipantOfferPublishResult } from '../../models/participant-offer-publish-result.interface';
import { participantOfferStateEnumAdapter } from '../enums/participant-offer-state-enum.adapter';
import { usedClassificatorTypeEnumAdapter } from '../enums/used-classificator-type-enum.adapter';

export const participantOfferPublishResultAdapter = (source?: ApiParticipantOfferPublishResultDto | null): ParticipantOfferPublishResult => {
  return {
    classificatorCode: source?.ClassificatorCode,
    classificatorType: source?.ClassificatorType === null ? undefined : usedClassificatorTypeEnumAdapter(source?.ClassificatorType),
    id: source?.Id,
    isAdviceNeeded: source?.IsAdviceNeeded,
    isUpdated: source?.IsUpdated,
    oldOfferState: source?.OldOfferState === null ? undefined : participantOfferStateEnumAdapter(source?.OldOfferState),
    priceListId: source?.PriceListId,
  };
}
