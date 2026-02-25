import { Injectable, inject } from '@angular/core';
import { LogApiService } from '../../swagger/services/log-api.service';
import { LogGetBusinessOperationLogHistoryExcelParams, logGetBusinessOperationLogHistoryExcelAdapter } from './params/log-get-business-operation-log-history-excel.params';
import { LogGetBusinessOperationLogHistoryParams, logGetBusinessOperationLogHistoryAdapter } from './params/log-get-business-operation-log-history.params';
import { LogLogActionParams, logLogActionAdapter } from './params/log-log-action.params';
import { LogLogErrorParams, logLogErrorAdapter } from './params/log-log-error.params';
import { map } from 'rxjs/operators';
import { MarketBusinessOperationLog } from '../models/market-business-operation-log.interface';
import { MarketPaginationResult } from '../models/market-pagination-result.interface';
import { marketPaginationResultOfListOfMarketBusinessOperationLogAdapter } from '../adapters/models/market-pagination-result-of-list-of-market-business-operation-log.adapter';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LogRepository {
  private readonly _api = inject(LogApiService);

  logGetBusinessOperationLogHistory(params?: LogGetBusinessOperationLogHistoryParams): Observable<MarketPaginationResult<MarketBusinessOperationLog[]>> {
    return this._api.logGetBusinessOperationLogHistory(logGetBusinessOperationLogHistoryAdapter(params)).pipe(
      map((res) => marketPaginationResultOfListOfMarketBusinessOperationLogAdapter(res?.data))
    );
  }

  logGetBusinessOperationLogHistoryExcel(params?: LogGetBusinessOperationLogHistoryExcelParams): Observable<Blob> {
    return this._api.logGetBusinessOperationLogHistoryExcel(logGetBusinessOperationLogHistoryExcelAdapter(params));
  }

  logLogAction(params?: LogLogActionParams): Observable<boolean> {
    return this._api.logLogAction(logLogActionAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  logLogError(params?: LogLogErrorParams): Observable<Blob> {
    return this._api.logLogError(logLogErrorAdapter(params));
  }

}
