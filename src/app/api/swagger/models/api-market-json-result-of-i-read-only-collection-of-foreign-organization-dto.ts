/* tslint:disable */
/* eslint-disable */
import { ApiForeignOrganizationDto } from '../models/api-foreign-organization-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfIReadOnlyCollectionOfForeignOrganizationDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiForeignOrganizationDto> | null;
};
