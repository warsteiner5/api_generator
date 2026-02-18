/* tslint:disable */
/* eslint-disable */
import { ApiMarketPublishParticipantOfferDto } from '../models/api-market-publish-participant-offer-dto';
export type ApiExternalPublishParticipantOfferDto = ApiMarketPublishParticipantOfferDto & {
'IsChanged'?: boolean;
'IsCreatedByManager'?: boolean;
'TenantId'?: number;
'UserId'?: number;
};
