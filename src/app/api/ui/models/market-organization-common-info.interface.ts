import { MarketOrganizationCommonAddress } from './market-organization-common-address.interface';
import { MarketOrganizationCommonBank } from './market-organization-common-bank.interface';
import { MarketOrganizationCommonBaseInfoAlt } from './market-organization-common-base-info-alt.interface';
import { MarketOrganizationCommonDocuments } from './market-organization-common-documents.interface';

// @ts-ignore
export interface MarketOrganizationCommonInfo {
  addresses: MarketOrganizationCommonAddress;
  bankRequisites: MarketOrganizationCommonBank;
  baseInfo: MarketOrganizationCommonBaseInfoAlt;
  documents: MarketOrganizationCommonDocuments;
}
