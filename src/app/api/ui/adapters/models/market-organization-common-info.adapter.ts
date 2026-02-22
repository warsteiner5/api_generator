import { ApiMarketOrganizationCommonInfoDto } from '../../../swagger/models/api-market-organization-common-info-dto';
import { MarketOrganizationCommonInfo } from '../../models/market-organization-common-info.interface';
import { marketOrganizationCommonAddressAdapter } from './market-organization-common-address.adapter';
import { marketOrganizationCommonBankAdapter } from './market-organization-common-bank.adapter';
import { marketOrganizationCommonBaseInfoAltAdapter } from './market-organization-common-base-info-alt.adapter';
import { marketOrganizationCommonDocumentsAdapter } from './market-organization-common-documents.adapter';

export const marketOrganizationCommonInfoAdapter = (source?: ApiMarketOrganizationCommonInfoDto | null): MarketOrganizationCommonInfo => {
  return {
    addresses: source?.Addresses === null ? undefined : marketOrganizationCommonAddressAdapter(source?.Addresses),
    bankRequisites: source?.BankRequisites === null ? undefined : marketOrganizationCommonBankAdapter(source?.BankRequisites),
    baseInfo: source?.BaseInfo === null ? undefined : marketOrganizationCommonBaseInfoAltAdapter(source?.BaseInfo),
    documents: source?.Documents === null ? undefined : marketOrganizationCommonDocumentsAdapter(source?.Documents),
  };
}
