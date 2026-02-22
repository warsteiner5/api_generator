import { MarketCompositeOrganizationShortInfo } from '../../models/market-composite-organization-short-info.interface';
import { ApiMarketCompositeOrganizationShortInfoDto } from '../../../swagger/models/api-market-composite-organization-short-info-dto';
import { apiAddressDtoAdapter } from './api-address-dto.adapter';

export const apiMarketCompositeOrganizationShortInfoDtoAdapter = (source?: MarketCompositeOrganizationShortInfo | null): ApiMarketCompositeOrganizationShortInfoDto => {
  return {
    LegalAddress: source?.legalAddress === null ? undefined : apiAddressDtoAdapter(source?.legalAddress),
    Okopf: source?.okopf,
    Okpo: source?.okpo,
    Oktmo: source?.oktmo,
    RegistrationDate: source?.registrationDate,
  };
}
