import { ApiParticipantOfferPublishResultDto } from '../../../swagger/models/api-participant-offer-publish-result-dto';
import { ParticipantOfferPublishResult } from '../../models/participant-offer-publish-result.interface';
import { adaptParticipantOfferStateEnumToUI } from './participant-offer-state-enum.adapter';
import { adaptUsedClassificatorTypeEnumToUI } from './used-classificator-type-enum.adapter';

export function adaptParticipantOfferPublishResultToUI(source?: ApiParticipantOfferPublishResultDto | null): ParticipantOfferPublishResult {
  return {
    classificatorCode: source?.ClassificatorCode ?? '',
    classificatorType: adaptUsedClassificatorTypeEnumToUI(source?.ClassificatorType),
    id: source?.Id ?? 0,
    isAdviceNeeded: source?.IsAdviceNeeded ?? false,
    isUpdated: source?.IsUpdated ?? false,
    oldOfferState: adaptParticipantOfferStateEnumToUI(source?.OldOfferState),
    priceListId: source?.PriceListId ?? 0,
  };
}
