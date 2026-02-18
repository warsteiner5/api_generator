/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiMarketParticipantOfferInfoDto } from '../models/api-market-participant-offer-info-dto';
export type ApiMarketJsonResultOfMarketParticipantOfferInfoDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiMarketParticipantOfferInfoDto | null;
};
