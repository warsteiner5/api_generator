import { ApiQuotationSessionApplicationShortDto } from '../../../swagger/models/api-quotation-session-application-short-dto';
import { QuotationSessionApplicationShort } from '../../models/quotation-session-application-short.interface';
import { availableVatTypeEnumAdapter } from '../enums/available-vat-type-enum.adapter';
import { baseQuotationSessionApplicationAdapter } from './base-quotation-session-application.adapter';
import { organizationCountryAltEnumAdapter } from '../enums/organization-country-alt-enum.adapter';

export const quotationSessionApplicationShortAdapter = (source?: ApiQuotationSessionApplicationShortDto | null): QuotationSessionApplicationShort => {
  return {
    ...baseQuotationSessionApplicationAdapter(source as unknown as Parameters<typeof baseQuotationSessionApplicationAdapter>[0]),
    isWinner: source?.IsWinner,
    isCurrentUserApplication: source?.IsCurrentUserApplication,
    organizationName: source?.OrganizationName,
    organizationGuid: source?.OrganizationGuid,
    organizationForeignId: source?.OrganizationForeignId,
    organizationCountry: source?.OrganizationCountry === null ? undefined : organizationCountryAltEnumAdapter(source?.OrganizationCountry),
    publicationDate: source?.PublicationDate,
    price: source?.Price,
    sum: source?.Sum,
    priceWithVat: source?.PriceWithVat,
    vatRate: source?.VatRate === null ? undefined : availableVatTypeEnumAdapter(source?.VatRate),
    discussionId: source?.DiscussionId,
    isApplicationConfirmed: source?.IsApplicationConfirmed,
  };
}
