/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiPagedCollectionOfReportRegistryItemDto } from '../models/api-paged-collection-of-report-registry-item-dto';
export type ApiMarketJsonResultOfPagedCollectionOfReportRegistryItemDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiPagedCollectionOfReportRegistryItemDto | null;
};
