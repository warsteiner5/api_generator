/* tslint:disable */
/* eslint-disable */
import { ApiMarketOrganizationCommonAddressDto } from '../models/api-market-organization-common-address-dto';
import { ApiMarketOrganizationCommonBankDto } from '../models/api-market-organization-common-bank-dto';
import { ApiMarketOrganizationCommonBaseInfoAltDto } from '../models/api-market-organization-common-base-info';
import { ApiMarketOrganizationCommonDocumentsDto } from '../models/api-market-organization-common-documents-dto';
export interface ApiMarketOrganizationCommonInfoDto {
  Addresses?: ApiMarketOrganizationCommonAddressDto | null;
  BankRequisites?: ApiMarketOrganizationCommonBankDto | null;
  BaseInfo?: ApiMarketOrganizationCommonBaseInfoAltDto | null;
  Documents?: ApiMarketOrganizationCommonDocumentsDto | null;
}
