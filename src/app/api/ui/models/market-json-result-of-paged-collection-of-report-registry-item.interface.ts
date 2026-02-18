import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { PagedCollectionOfReportRegistryItem } from './paged-collection-of-report-registry-item.interface';

export type MarketJsonResultOfPagedCollectionOfReportRegistryItem = MarketJsonVoidResultAlt & { 'data'?: PagedCollectionOfReportRegistryItem | null; };
