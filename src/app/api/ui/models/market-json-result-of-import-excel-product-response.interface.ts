import { ImportExcelProductResponseAlt } from './import-excel-product-response-alt.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfImportExcelProductResponse = MarketJsonVoidResultAlt & { 'data'?: ImportExcelProductResponseAlt | null; };
