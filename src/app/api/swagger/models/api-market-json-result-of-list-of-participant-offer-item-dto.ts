/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiParticipantOfferItemDto } from '../models/api-participant-offer-item-dto';
export type ApiMarketJsonResultOfListOfParticipantOfferItemDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiParticipantOfferItemDto> | null;
};
