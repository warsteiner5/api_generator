/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { logGetBusinessOperationLogHistory } from '../fn/log/log-get-business-operation-log-history';
import { LogGetBusinessOperationLogHistory$Params } from '../fn/log/log-get-business-operation-log-history';
import { logGetBusinessOperationLogHistoryExcel } from '../fn/log/log-get-business-operation-log-history-excel';
import { LogGetBusinessOperationLogHistoryExcel$Params } from '../fn/log/log-get-business-operation-log-history-excel';
import { logLogAction } from '../fn/log/log-log-action';
import { LogLogAction$Params } from '../fn/log/log-log-action';
import { logLogError } from '../fn/log/log-log-error';
import { LogLogError$Params } from '../fn/log/log-log-error';
import { ApiMarketJsonResultOfBooleanAltDto } from '../models/api-market-json-result-of-boolean';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketBusinessOperationLogDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-market-business-operation-log-dto';

@Injectable({ providedIn: 'root' })
export class LogApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `logLogAction()` */
  static readonly LogLogActionPath = '/market/api/v1/log/action';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logLogAction()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  logLogAction$Response(params?: LogLogAction$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return logLogAction(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `logLogAction$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  logLogAction(params?: LogLogAction$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.logLogAction$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `logLogError()` */
  static readonly LogLogErrorPath = '/market/api/v1/log/error';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logLogError()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  logLogError$Response(params?: LogLogError$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return logLogError(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `logLogError$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  logLogError(params?: LogLogError$Params, context?: HttpContext): Observable<Blob> {
    return this.logLogError$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `logGetBusinessOperationLogHistory()` */
  static readonly LogGetBusinessOperationLogHistoryPath = '/market/api/v1/log/trade/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logGetBusinessOperationLogHistory()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  logGetBusinessOperationLogHistory$Response(params?: LogGetBusinessOperationLogHistory$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketBusinessOperationLogDto>> {
    return logGetBusinessOperationLogHistory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `logGetBusinessOperationLogHistory$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  logGetBusinessOperationLogHistory(params?: LogGetBusinessOperationLogHistory$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketBusinessOperationLogDto> {
    return this.logGetBusinessOperationLogHistory$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketBusinessOperationLogDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketBusinessOperationLogDto => r.body)
    );
  }

  /** Path part for operation `logGetBusinessOperationLogHistoryExcel()` */
  static readonly LogGetBusinessOperationLogHistoryExcelPath = '/market/api/v1/log/trade/export';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logGetBusinessOperationLogHistoryExcel()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  logGetBusinessOperationLogHistoryExcel$Response(params?: LogGetBusinessOperationLogHistoryExcel$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return logGetBusinessOperationLogHistoryExcel(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `logGetBusinessOperationLogHistoryExcel$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  logGetBusinessOperationLogHistoryExcel(params?: LogGetBusinessOperationLogHistoryExcel$Params, context?: HttpContext): Observable<Blob> {
    return this.logGetBusinessOperationLogHistoryExcel$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}
