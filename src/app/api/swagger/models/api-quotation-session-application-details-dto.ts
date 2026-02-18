/* tslint:disable */
/* eslint-disable */
import { ApiBaseQuotationSessionApplicationDto } from '../models/api-base-quotation-session-application-dto';
import { ApiQuotationSessionApplicationConditionsDto } from '../models/api-quotation-session-application-conditions-dto';
import { ApiQuotationSessionApplicationDocumentDto } from '../models/api-quotation-session-application-document-dto';
import { ApiQuotationSessionApplicationDtoParticipantInfoDto } from '../models/api-quotation-session-application-dto-participant-info-dto';
import { ApiQuotationSessionApplicationProductDto } from '../models/api-quotation-session-application-product-dto';
export type ApiQuotationSessionApplicationDetailsDto = ApiBaseQuotationSessionApplicationDto & {
'ParticipantInfo'?: ApiQuotationSessionApplicationDtoParticipantInfoDto | null;
'Conditions'?: ApiQuotationSessionApplicationConditionsDto | null;
'ApplicationDocuments'?: Array<ApiQuotationSessionApplicationDocumentDto> | null;
'OrganizationRegistryDocuments'?: Array<ApiQuotationSessionApplicationDocumentDto> | null;
'Products'?: Array<ApiQuotationSessionApplicationProductDto> | null;
};
