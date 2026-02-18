import { MarketCompositeOrganizationShortInfo } from '../../models/market-composite-organization-short-info.interface';
import { ApiMarketCompositeOrganizationShortInfoDto } from '../../../swagger/models/api-market-composite-organization-short-info-dto';
import { adaptApiAddressDto } from './api-address-dto.adapter';

export function adaptApiMarketCompositeOrganizationShortInfoDto(source?: MarketCompositeOrganizationShortInfo | null): ApiMarketCompositeOrganizationShortInfoDto {
  return {
    LegalAddress: adaptApiAddressDto(source?.legalAddress),
    Okopf: source?.okopf,
    Okpo: source?.okpo,
    Oktmo: source?.oktmo,
    RegistrationDate: source?.registrationDate,
  };
}
