import { ApiMarketOrganizationCommonInfoDto } from '../../../swagger/models/api-market-organization-common-info-dto';
import { MarketOrganizationCommonInfo } from '../../models/market-organization-common-info.interface';
import { adaptMarketOrganizationCommonAddressToUI } from './market-organization-common-address.adapter';
import { adaptMarketOrganizationCommonBankToUI } from './market-organization-common-bank.adapter';
import { adaptMarketOrganizationCommonBaseInfoAltToUI } from './market-organization-common-base-info-alt.adapter';
import { adaptMarketOrganizationCommonDocumentsToUI } from './market-organization-common-documents.adapter';

export function adaptMarketOrganizationCommonInfoToUI(source?: ApiMarketOrganizationCommonInfoDto | null): MarketOrganizationCommonInfo {
  return {
    addresses: adaptMarketOrganizationCommonAddressToUI(source?.Addresses),
    bankRequisites: adaptMarketOrganizationCommonBankToUI(source?.BankRequisites),
    baseInfo: adaptMarketOrganizationCommonBaseInfoAltToUI(source?.BaseInfo),
    documents: adaptMarketOrganizationCommonDocumentsToUI(source?.Documents),
  };
}
