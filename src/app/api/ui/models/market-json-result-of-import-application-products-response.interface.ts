import { ImportApplicationProductsResponseAlt } from './import-application-products-response-alt.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfImportApplicationProductsResponse = MarketJsonVoidResultAlt & { 'data'?: ImportApplicationProductsResponseAlt | null; };
