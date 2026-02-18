import { adaptMarketBusinessOperationLogToUI } from '../adapters/toUI/market-business-operation-log.adapter';
import { Injectable, inject } from '@angular/core';
import { LogApiService } from '../../swagger/services/log-api.service';
import { LogGetBusinessOperationLogHistoryExcelParams, logGetBusinessOperationLogHistoryExcelParamsAdapter } from './params/log-get-business-operation-log-history-excel.params';
import { LogGetBusinessOperationLogHistoryParams, logGetBusinessOperationLogHistoryParamsAdapter } from './params/log-get-business-operation-log-history.params';
import { LogLogActionParams, logLogActionParamsAdapter } from './params/log-log-action.params';
import { LogLogErrorParams, logLogErrorParamsAdapter } from './params/log-log-error.params';
import { map } from 'rxjs/operators';
import { MarketBusinessOperationLog } from '../models/market-business-operation-log.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LogRepository {
  private readonly _api = inject(LogApiService);

  logGetBusinessOperationLogHistory(params?: LogGetBusinessOperationLogHistoryParams): Observable<MarketBusinessOperationLog[]> {
    return this._api.logGetBusinessOperationLogHistory(logGetBusinessOperationLogHistoryParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptMarketBusinessOperationLogToUI(item)))
    );
  }

  logGetBusinessOperationLogHistoryExcel(params?: LogGetBusinessOperationLogHistoryExcelParams): Observable<Blob> {
    return this._api.logGetBusinessOperationLogHistoryExcel(logGetBusinessOperationLogHistoryExcelParamsAdapter.adapt(params));
  }

  logLogAction(params?: LogLogActionParams): Observable<boolean> {
    return this._api.logLogAction(logLogActionParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  logLogError(params?: LogLogErrorParams): Observable<Blob> {
    return this._api.logLogError(logLogErrorParamsAdapter.adapt(params));
  }

}
