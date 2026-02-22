import { MarketOrganizationCommonInfo } from '../../models/market-organization-common-info.interface';
import { ApiMarketOrganizationCommonInfoDto } from '../../../swagger/models/api-market-organization-common-info-dto';
import { apiMarketOrganizationCommonAddressDtoAdapter } from './api-market-organization-common-address-dto.adapter';
import { apiMarketOrganizationCommonBankDtoAdapter } from './api-market-organization-common-bank-dto.adapter';
import { apiMarketOrganizationCommonBaseInfoAltDtoAdapter } from './api-market-organization-common-base-info.adapter';
import { apiMarketOrganizationCommonDocumentsDtoAdapter } from './api-market-organization-common-documents-dto.adapter';

export const apiMarketOrganizationCommonInfoDtoAdapter = (source?: MarketOrganizationCommonInfo | null): ApiMarketOrganizationCommonInfoDto => {
  return {
    Addresses: source?.addresses === null ? undefined : apiMarketOrganizationCommonAddressDtoAdapter(source?.addresses),
    BankRequisites: source?.bankRequisites === null ? undefined : apiMarketOrganizationCommonBankDtoAdapter(source?.bankRequisites),
    BaseInfo: source?.baseInfo === null ? undefined : apiMarketOrganizationCommonBaseInfoAltDtoAdapter(source?.baseInfo),
    Documents: source?.documents === null ? undefined : apiMarketOrganizationCommonDocumentsDtoAdapter(source?.documents),
  };
}
