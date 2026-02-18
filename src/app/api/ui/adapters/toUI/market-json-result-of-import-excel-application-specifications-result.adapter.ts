import { ApiMarketJsonResultOfImportExcelApplicationSpecificationsResult } from '../../../swagger/models/api-market-json-result-of-import-excel-application-specifications-result';
import { MarketJsonResultOfImportExcelApplicationSpecificationsResult } from '../../models/market-json-result-of-import-excel-application-specifications-result.interface';

export function adaptMarketJsonResultOfImportExcelApplicationSpecificationsResultToUI(source?: ApiMarketJsonResultOfImportExcelApplicationSpecificationsResult | null): MarketJsonResultOfImportExcelApplicationSpecificationsResult {
  return (source ?? {}) as MarketJsonResultOfImportExcelApplicationSpecificationsResult;
}
