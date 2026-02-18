import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { PagedCollectionOfReportRegistryItemWithPeriod } from './paged-collection-of-report-registry-item-with-period.interface';

export type MarketJsonResultOfPagedCollectionOfReportRegistryItemWithPeriod = MarketJsonVoidResultAlt & { 'data'?: PagedCollectionOfReportRegistryItemWithPeriod | null; };
