import { LogGetBusinessOperationLogHistoryExcel$Params } from '../../../swagger/fn/log/log-get-business-operation-log-history-excel';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface LogGetBusinessOperationLogHistoryExcelParams {
  body?: SearchObjectAlt;
}

export function logGetBusinessOperationLogHistoryExcelAdapter(params?: LogGetBusinessOperationLogHistoryExcelParams): LogGetBusinessOperationLogHistoryExcel$Params {
  if (!params) {
    return {} as LogGetBusinessOperationLogHistoryExcel$Params;
  }
  return {
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}
