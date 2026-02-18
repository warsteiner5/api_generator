/* tslint:disable */
/* eslint-disable */
import { ApiAvailableVatTypeEnum } from '../models/api-available-vat-type-enum';
import { ApiBaseQuotationSessionApplicationDto } from '../models/api-base-quotation-session-application-dto';
import { ApiOrganizationCountryAltEnum } from '../models/api-organization-country';
export type ApiQuotationSessionApplicationShortDto = ApiBaseQuotationSessionApplicationDto & {
'IsWinner'?: boolean;
'IsCurrentUserApplication'?: boolean;
'OrganizationName'?: string | null;
'OrganizationGuid'?: string | null;
'OrganizationForeignId'?: string | null;
'OrganizationCountry'?: ApiOrganizationCountryAltEnum;
'PublicationDate'?: string | null;
'Price'?: number | null;
'Sum'?: number | null;
'PriceWithVat'?: number | null;
'VatRate'?: ApiAvailableVatTypeEnum | null;
'DiscussionId'?: number | null;
'IsApplicationConfirmed'?: boolean;
};
