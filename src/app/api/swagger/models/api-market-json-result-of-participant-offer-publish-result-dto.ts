/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiParticipantOfferPublishResultDto } from '../models/api-participant-offer-publish-result-dto';
export type ApiMarketJsonResultOfParticipantOfferPublishResultDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiParticipantOfferPublishResultDto | null;
};
