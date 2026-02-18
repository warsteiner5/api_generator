/* tslint:disable */
/* eslint-disable */
import { ApiOrderViewDto } from '../models/api-order-view-dto';
import { ApiParticipantOfferDocumentDto } from '../models/api-participant-offer-document-dto';
export type ApiMarketOrderViewDto = ApiOrderViewDto & {
'DealId'?: number | null;
'PictureFileGuids'?: Array<string> | null;
'IsCustomPrice'?: boolean | null;
'MinOrderQuantity'?: number | null;
'InitialOrderPrice'?: number | null;
'ParticipantOfferDocuments'?: Array<ApiParticipantOfferDocumentDto> | null;
};
