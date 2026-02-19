/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { messageQueueServiceExcelImportStart } from '../fn/message-queue-service/message-queue-service-excel-import-start';
import { MessageQueueServiceExcelImportStart$Params } from '../fn/message-queue-service/message-queue-service-excel-import-start';
import { messageQueueServiceExcelImportStartExportby } from '../fn/message-queue-service/message-queue-service-excel-import-start-exportby';
import { MessageQueueServiceExcelImportStartExportby$Params } from '../fn/message-queue-service/message-queue-service-excel-import-start-exportby';
import { messageQueueServiceExcelImportStartExportby2 } from '../fn/message-queue-service/message-queue-service-excel-import-start-exportby-2';
import { MessageQueueServiceExcelImportStartExportby2$Params } from '../fn/message-queue-service/message-queue-service-excel-import-start-exportby-2';
import { messageQueueServiceLogSearchAction } from '../fn/message-queue-service/message-queue-service-log-search-action';
import { MessageQueueServiceLogSearchAction$Params } from '../fn/message-queue-service/message-queue-service-log-search-action';
import { messageQueueServiceLogUserAction } from '../fn/message-queue-service/message-queue-service-log-user-action';
import { MessageQueueServiceLogUserAction$Params } from '../fn/message-queue-service/message-queue-service-log-user-action';
import { messageQueueServiceLogUserBatchAction } from '../fn/message-queue-service/message-queue-service-log-user-batch-action';
import { MessageQueueServiceLogUserBatchAction$Params } from '../fn/message-queue-service/message-queue-service-log-user-batch-action';
import { messageQueueServiceOfferImportProcess } from '../fn/message-queue-service/message-queue-service-offer-import-process';
import { MessageQueueServiceOfferImportProcess$Params } from '../fn/message-queue-service/message-queue-service-offer-import-process';

@Injectable({ providedIn: 'root' })
export class MessageQueueServiceApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `messageQueueServiceLogSearchAction()` */
  static readonly MessageQueueServiceLogSearchActionPath = '/market/api/v1/messageQueueService/fksMarketSearch';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `messageQueueServiceLogSearchAction()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  messageQueueServiceLogSearchAction$Response(params?: MessageQueueServiceLogSearchAction$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return messageQueueServiceLogSearchAction(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `messageQueueServiceLogSearchAction$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  messageQueueServiceLogSearchAction(params?: MessageQueueServiceLogSearchAction$Params, context?: HttpContext): Observable<Blob> {
    return this.messageQueueServiceLogSearchAction$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `messageQueueServiceLogUserAction()` */
  static readonly MessageQueueServiceLogUserActionPath = '/market/api/v1/messageQueueService/FksMarketUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `messageQueueServiceLogUserAction()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  messageQueueServiceLogUserAction$Response(params?: MessageQueueServiceLogUserAction$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return messageQueueServiceLogUserAction(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `messageQueueServiceLogUserAction$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  messageQueueServiceLogUserAction(params?: MessageQueueServiceLogUserAction$Params, context?: HttpContext): Observable<Blob> {
    return this.messageQueueServiceLogUserAction$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `messageQueueServiceLogUserBatchAction()` */
  static readonly MessageQueueServiceLogUserBatchActionPath = '/market/api/v1/messageQueueService/FksMarketUserBatch';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `messageQueueServiceLogUserBatchAction()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  messageQueueServiceLogUserBatchAction$Response(params?: MessageQueueServiceLogUserBatchAction$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return messageQueueServiceLogUserBatchAction(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `messageQueueServiceLogUserBatchAction$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  messageQueueServiceLogUserBatchAction(params?: MessageQueueServiceLogUserBatchAction$Params, context?: HttpContext): Observable<Blob> {
    return this.messageQueueServiceLogUserBatchAction$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `messageQueueServiceOfferImportProcess()` */
  static readonly MessageQueueServiceOfferImportProcessPath = '/market/api/v1/messageQueueService/OfferImportEnd/{taskId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `messageQueueServiceOfferImportProcess()` instead.
   *
   * This method doesn't expect any request body.
   */
  messageQueueServiceOfferImportProcess$Response(params: MessageQueueServiceOfferImportProcess$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return messageQueueServiceOfferImportProcess(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `messageQueueServiceOfferImportProcess$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  messageQueueServiceOfferImportProcess(params: MessageQueueServiceOfferImportProcess$Params, context?: HttpContext): Observable<Blob> {
    return this.messageQueueServiceOfferImportProcess$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `messageQueueServiceExcelImportStart()` */
  static readonly MessageQueueServiceExcelImportStartPath = '/market/api/v1/messageQueueService/ExcelImportStart/{taskId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `messageQueueServiceExcelImportStart()` instead.
   *
   * This method doesn't expect any request body.
   */
  messageQueueServiceExcelImportStart$Response(params: MessageQueueServiceExcelImportStart$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return messageQueueServiceExcelImportStart(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `messageQueueServiceExcelImportStart$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  messageQueueServiceExcelImportStart(params: MessageQueueServiceExcelImportStart$Params, context?: HttpContext): Observable<Blob> {
    return this.messageQueueServiceExcelImportStart$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `messageQueueServiceExcelImportStartExportby()` */
  static readonly MessageQueueServiceExcelImportStartExportbyPath = '/market/api/v1/messageQueueService/ExcelImportStartExportby/{taskId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `messageQueueServiceExcelImportStartExportby()` instead.
   *
   * This method doesn't expect any request body.
   */
  messageQueueServiceExcelImportStartExportby$Response(params: MessageQueueServiceExcelImportStartExportby$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return messageQueueServiceExcelImportStartExportby(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `messageQueueServiceExcelImportStartExportby$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  messageQueueServiceExcelImportStartExportby(params: MessageQueueServiceExcelImportStartExportby$Params, context?: HttpContext): Observable<Blob> {
    return this.messageQueueServiceExcelImportStartExportby$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `messageQueueServiceExcelImportStartExportby2()` */
  static readonly MessageQueueServiceExcelImportStartExportby2Path = '/market/api/v1/messageQueueService/MinPromTorgOfferImportStart';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `messageQueueServiceExcelImportStartExportby2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  messageQueueServiceExcelImportStartExportby2$Response(params?: MessageQueueServiceExcelImportStartExportby2$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return messageQueueServiceExcelImportStartExportby2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `messageQueueServiceExcelImportStartExportby2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  messageQueueServiceExcelImportStartExportby2(params?: MessageQueueServiceExcelImportStartExportby2$Params, context?: HttpContext): Observable<Blob> {
    return this.messageQueueServiceExcelImportStartExportby2$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}
