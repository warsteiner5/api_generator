import { ParticipantOfferStateEnum } from '../enums/participant-offer-state.enum';
import { UsedClassificatorTypeEnum } from '../enums/used-classificator-type.enum';

export interface ParticipantOfferPublishResult {
  classificatorCode: string;
  classificatorType: UsedClassificatorTypeEnum;
  id: number;
  isAdviceNeeded: boolean;
  isUpdated: boolean;
  oldOfferState: ParticipantOfferStateEnum;
  priceListId: number;
}
