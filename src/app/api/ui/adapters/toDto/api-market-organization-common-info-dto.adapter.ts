import { MarketOrganizationCommonInfo } from '../../models/market-organization-common-info.interface';
import { ApiMarketOrganizationCommonInfoDto } from '../../../swagger/models/api-market-organization-common-info-dto';
import { adaptApiMarketOrganizationCommonAddressDto } from './api-market-organization-common-address-dto.adapter';
import { adaptApiMarketOrganizationCommonBankDto } from './api-market-organization-common-bank-dto.adapter';
import { adaptApiMarketOrganizationCommonBaseInfoAltDto } from './api-market-organization-common-base-info.adapter';
import { adaptApiMarketOrganizationCommonDocumentsDto } from './api-market-organization-common-documents-dto.adapter';

export function adaptApiMarketOrganizationCommonInfoDto(source?: MarketOrganizationCommonInfo | null): ApiMarketOrganizationCommonInfoDto {
  return {
    Addresses: adaptApiMarketOrganizationCommonAddressDto(source?.addresses),
    BankRequisites: adaptApiMarketOrganizationCommonBankDto(source?.bankRequisites),
    BaseInfo: adaptApiMarketOrganizationCommonBaseInfoAltDto(source?.baseInfo),
    Documents: adaptApiMarketOrganizationCommonDocumentsDto(source?.documents),
  };
}
