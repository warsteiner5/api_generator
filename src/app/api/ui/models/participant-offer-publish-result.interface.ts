import { ParticipantOfferStateEnum } from '../enums/participant-offer-state.enum';
import { UsedClassificatorTypeEnum } from '../enums/used-classificator-type.enum';

// @ts-ignore
export interface ParticipantOfferPublishResult {
  classificatorCode: string;
  classificatorType: UsedClassificatorTypeEnum;
  id: number;
  isAdviceNeeded: boolean;
  isUpdated: boolean;
  oldOfferState: ParticipantOfferStateEnum;
  priceListId: number;
}
