import { MarketJsonResultOfImportExcelApplicationSpecificationsResult } from '../../models/market-json-result-of-import-excel-application-specifications-result.interface';
import { ApiMarketJsonResultOfImportExcelApplicationSpecificationsResult } from '../../../swagger/models/api-market-json-result-of-import-excel-application-specifications-result';

export function adaptApiMarketJsonResultOfImportExcelApplicationSpecificationsResult(source?: MarketJsonResultOfImportExcelApplicationSpecificationsResult | null): ApiMarketJsonResultOfImportExcelApplicationSpecificationsResult {
  return (source ?? {}) as ApiMarketJsonResultOfImportExcelApplicationSpecificationsResult;
}
