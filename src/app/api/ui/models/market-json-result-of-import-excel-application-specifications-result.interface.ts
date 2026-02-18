import { ImportExcelApplicationSpecificationsResultAlt } from './import-excel-application-specifications-result-alt.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfImportExcelApplicationSpecificationsResult = MarketJsonVoidResultAlt & { 'data'?: ImportExcelApplicationSpecificationsResultAlt | null; };
