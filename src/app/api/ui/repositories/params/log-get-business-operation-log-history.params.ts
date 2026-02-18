import { LogGetBusinessOperationLogHistory$Params } from '../../../swagger/fn/log/log-get-business-operation-log-history';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface LogGetBusinessOperationLogHistoryParams {
  body?: SearchObjectAlt;
}

export const logGetBusinessOperationLogHistoryParamsAdapter = {
  adapt(params?: LogGetBusinessOperationLogHistoryParams): LogGetBusinessOperationLogHistory$Params {
    if (!params) {
      return {} as LogGetBusinessOperationLogHistory$Params;
    }
    return {
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};
