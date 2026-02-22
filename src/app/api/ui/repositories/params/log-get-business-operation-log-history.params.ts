import { LogGetBusinessOperationLogHistory$Params } from '../../../swagger/fn/log/log-get-business-operation-log-history';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface LogGetBusinessOperationLogHistoryParams {
  body?: SearchObjectAlt;
}

export function logGetBusinessOperationLogHistoryAdapter(params?: LogGetBusinessOperationLogHistoryParams): LogGetBusinessOperationLogHistory$Params {
  if (!params) {
    return {} as LogGetBusinessOperationLogHistory$Params;
  }
  return {
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}
