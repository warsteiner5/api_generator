import { LogGetBusinessOperationLogHistoryExcel$Params } from '../../../swagger/fn/log/log-get-business-operation-log-history-excel';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface LogGetBusinessOperationLogHistoryExcelParams {
  body?: SearchObjectAlt;
}

export const logGetBusinessOperationLogHistoryExcelParamsAdapter = {
  adapt(params?: LogGetBusinessOperationLogHistoryExcelParams): LogGetBusinessOperationLogHistoryExcel$Params {
    if (!params) {
      return {} as LogGetBusinessOperationLogHistoryExcel$Params;
    }
    return {
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};
