import { AvailableVatTypeEnum } from '../enums/available-vat-type.enum';
import { BaseQuotationSessionApplication } from './base-quotation-session-application.interface';
import { OrganizationCountry } from './organization-country.interface';
import { OrganizationCountryAltEnum } from '../enums/organization-country-alt.enum';
import { OrganizationName } from './organization-name.interface';

export type QuotationSessionApplicationShort = BaseQuotationSessionApplication & { 'IsWinner'?: boolean; 'IsCurrentUserApplication'?: boolean; 'OrganizationName'?: string | null; 'OrganizationGuid'?: string | null; 'OrganizationForeignId'?: string | null; 'OrganizationCountry'?: OrganizationCountryAltEnum; 'PublicationDate'?: string | null; 'Price'?: number | null; 'Sum'?: number | null; 'PriceWithVat'?: number | null; 'VatRate'?: AvailableVatTypeEnum | null; 'DiscussionId'?: number | null; 'IsApplicationConfirmed'?: boolean; };
