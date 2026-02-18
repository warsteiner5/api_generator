/* tslint:disable */
/* eslint-disable */
import { ApiCommonFileDto } from '../models/api-common-file-dto';
import { ApiFullDealDto } from '../models/api-full-deal-dto';
export type ApiMarketFullDealDto = ApiFullDealDto & {
'CustomerId'?: number;
'CustomerGuid'?: string;
'CustomerName'?: string | null;
'CustomerExternalOrganizationId'?: string | null;
'CustomerSource'?: number | null;
'DeliveryTerms'?: string | null;
'RelatedFiles'?: Array<ApiCommonFileDto> | null;
'CreatedDate'?: string | null;
'DeliveryPlace'?: string | null;
'ContractGuarantee'?: boolean;
'ApplicationPrice'?: number | null;
'SupplierSignDate'?: string | null;
'CustomerSignDate'?: string | null;
};
