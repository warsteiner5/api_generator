/* tslint:disable */
/* eslint-disable */
import { ApiBaseFilterObjectAltDto } from '../models/api-base-filter-object';
export type ApiShortFilterDto = ApiBaseFilterObjectAltDto & {
'Keyword'?: string | null;
'PriceListId'?: number;
'States'?: Array<number> | null;
'MinPrice'?: number | null;
'MaxPrice'?: number | null;
'OkeiCode'?: string | null;
'CountryCodes'?: Array<string> | null;
'RegionCodes'?: Array<string> | null;
'CategoryIds'?: Array<string> | null;
'AvailableTenantIds'?: Array<number> | null;
'Okpd2Codes'?: Array<string> | null;
'WhiteList'?: Array<number> | null;
'BlackList'?: Array<number> | null;
'OrganizationId'?: number | null;
'HasYmlData'?: boolean | null;
'RegionalProductSignEmpty'?: boolean | null;
};
