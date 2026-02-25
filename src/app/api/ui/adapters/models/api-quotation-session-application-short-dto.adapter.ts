import { QuotationSessionApplicationShort } from '../../models/quotation-session-application-short.interface';
import { ApiQuotationSessionApplicationShortDto } from '../../../swagger/models/api-quotation-session-application-short-dto';
import { apiAvailableVatTypeEnumAdapter } from '../enums/api-available-vat-type-enum.adapter';
import { apiBaseQuotationSessionApplicationDtoAdapter } from './api-base-quotation-session-application-dto.adapter';
import { apiOrganizationCountryAltEnumAdapter } from '../enums/api-organization-country.adapter';

export const apiQuotationSessionApplicationShortDtoAdapter = (source?: QuotationSessionApplicationShort | null): ApiQuotationSessionApplicationShortDto => {
  return {
    ...apiBaseQuotationSessionApplicationDtoAdapter(source as unknown as Parameters<typeof apiBaseQuotationSessionApplicationDtoAdapter>[0]),
    IsWinner: source?.isWinner,
    IsCurrentUserApplication: source?.isCurrentUserApplication,
    OrganizationName: source?.organizationName,
    OrganizationGuid: source?.organizationGuid,
    OrganizationForeignId: source?.organizationForeignId,
    OrganizationCountry: source?.organizationCountry === null ? undefined : apiOrganizationCountryAltEnumAdapter(source?.organizationCountry),
    PublicationDate: source?.publicationDate,
    Price: source?.price,
    Sum: source?.sum,
    PriceWithVat: source?.priceWithVat,
    VatRate: source?.vatRate === null ? undefined : apiAvailableVatTypeEnumAdapter(source?.vatRate),
    DiscussionId: source?.discussionId,
    IsApplicationConfirmed: source?.isApplicationConfirmed,
  };
}
