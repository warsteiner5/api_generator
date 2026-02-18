/* tslint:disable */
/* eslint-disable */
import { ApiParticipantOfferStateEnum } from '../models/api-participant-offer-state-enum';
import { ApiUsedClassificatorTypeEnum } from '../models/api-used-classificator-type-enum';
export interface ApiParticipantOfferPublishResultDto {
  ClassificatorCode?: string | null;
  ClassificatorType?: ApiUsedClassificatorTypeEnum;
  Id?: number;
  IsAdviceNeeded?: boolean;
  IsUpdated?: boolean;
  OldOfferState?: ApiParticipantOfferStateEnum | null;
  PriceListId?: number | null;
}
