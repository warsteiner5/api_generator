import { AvailableVatTypeEnum } from '../enums/available-vat-type.enum';
import { BaseQuotationSessionApplication } from './base-quotation-session-application.interface';
import { OrganizationCountry } from './organization-country.interface';
import { OrganizationCountryAltEnum } from '../enums/organization-country-alt.enum';
import { OrganizationName } from './organization-name.interface';

// @ts-ignore
export interface QuotationSessionApplicationShort extends BaseQuotationSessionApplication {
  isWinner: boolean;
  isCurrentUserApplication: boolean;
  organizationName: string;
  organizationGuid: string;
  organizationForeignId: string;
  organizationCountry: OrganizationCountryAltEnum;
  publicationDate: string;
  price: number;
  sum: number;
  priceWithVat: number;
  vatRate: AvailableVatTypeEnum;
  discussionId: number;
  isApplicationConfirmed: boolean;
}
