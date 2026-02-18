/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiCharacteristicDto } from '../models/api-characteristic-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { participantOfferImportApproveCharateristicById } from '../fn/participant-offer-import/participant-offer-import-approve-charateristic-by-id';
import { ParticipantOfferImportApproveCharateristicById$Params } from '../fn/participant-offer-import/participant-offer-import-approve-charateristic-by-id';
import { participantOfferImportCreateImportTask } from '../fn/participant-offer-import/participant-offer-import-create-import-task';
import { ParticipantOfferImportCreateImportTask$Params } from '../fn/participant-offer-import/participant-offer-import-create-import-task';
import { participantOfferImportCreateImportTaskExportBy } from '../fn/participant-offer-import/participant-offer-import-create-import-task-export-by';
import { ParticipantOfferImportCreateImportTaskExportBy$Params } from '../fn/participant-offer-import/participant-offer-import-create-import-task-export-by';
import { participantOfferImportGetCharacteristicsByParticipantOffer } from '../fn/participant-offer-import/participant-offer-import-get-characteristics-by-participant-offer';
import { ParticipantOfferImportGetCharacteristicsByParticipantOffer$Params } from '../fn/participant-offer-import/participant-offer-import-get-characteristics-by-participant-offer';
import { participantOfferImportGetImportTask } from '../fn/participant-offer-import/participant-offer-import-get-import-task';
import { ParticipantOfferImportGetImportTask$Params } from '../fn/participant-offer-import/participant-offer-import-get-import-task';
import { participantOfferImportGetImportTasks } from '../fn/participant-offer-import/participant-offer-import-get-import-tasks';
import { ParticipantOfferImportGetImportTasks$Params } from '../fn/participant-offer-import/participant-offer-import-get-import-tasks';
import { participantOfferImportRestartImportTask } from '../fn/participant-offer-import/participant-offer-import-restart-import-task';
import { ParticipantOfferImportRestartImportTask$Params } from '../fn/participant-offer-import/participant-offer-import-restart-import-task';
import { participantOfferImportRestartImportTaskExportBy } from '../fn/participant-offer-import/participant-offer-import-restart-import-task-export-by';
import { ParticipantOfferImportRestartImportTaskExportBy$Params } from '../fn/participant-offer-import/participant-offer-import-restart-import-task-export-by';
import { ApiParticipantOfferImportTaskDto } from '../models/api-participant-offer-import-task-dto';
import { ApiSearchResultOfParticipantOfferImportTaskGridItem } from '../models/api-search-result-of-participant-offer-import-task-grid-item';

@Injectable({ providedIn: 'root' })
export class ParticipantOfferImportApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `participantOfferImportCreateImportTask()` */
  static readonly ParticipantOfferImportCreateImportTaskPath = '/bla-bla-vla/offerimport/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferImportCreateImportTask()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferImportCreateImportTask$Response(params?: ParticipantOfferImportCreateImportTask$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return participantOfferImportCreateImportTask(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferImportCreateImportTask$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferImportCreateImportTask(params?: ParticipantOfferImportCreateImportTask$Params, context?: HttpContext): Observable<number> {
    return this.participantOfferImportCreateImportTask$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `participantOfferImportCreateImportTaskExportBy()` */
  static readonly ParticipantOfferImportCreateImportTaskExportByPath = '/bla-bla-vla/offerimport/create/export-by';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferImportCreateImportTaskExportBy()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferImportCreateImportTaskExportBy$Response(params?: ParticipantOfferImportCreateImportTaskExportBy$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return participantOfferImportCreateImportTaskExportBy(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferImportCreateImportTaskExportBy$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferImportCreateImportTaskExportBy(params?: ParticipantOfferImportCreateImportTaskExportBy$Params, context?: HttpContext): Observable<number> {
    return this.participantOfferImportCreateImportTaskExportBy$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `participantOfferImportRestartImportTask()` */
  static readonly ParticipantOfferImportRestartImportTaskPath = '/bla-bla-vla/offerimport/restart/{taskId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferImportRestartImportTask()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferImportRestartImportTask$Response(params: ParticipantOfferImportRestartImportTask$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return participantOfferImportRestartImportTask(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferImportRestartImportTask$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferImportRestartImportTask(params: ParticipantOfferImportRestartImportTask$Params, context?: HttpContext): Observable<number> {
    return this.participantOfferImportRestartImportTask$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `participantOfferImportRestartImportTaskExportBy()` */
  static readonly ParticipantOfferImportRestartImportTaskExportByPath = '/bla-bla-vla/offerimport/restart/export-by/{taskId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferImportRestartImportTaskExportBy()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferImportRestartImportTaskExportBy$Response(params: ParticipantOfferImportRestartImportTaskExportBy$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return participantOfferImportRestartImportTaskExportBy(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferImportRestartImportTaskExportBy$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferImportRestartImportTaskExportBy(params: ParticipantOfferImportRestartImportTaskExportBy$Params, context?: HttpContext): Observable<number> {
    return this.participantOfferImportRestartImportTaskExportBy$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `participantOfferImportGetImportTasks()` */
  static readonly ParticipantOfferImportGetImportTasksPath = '/bla-bla-vla/offerimport/gettasks';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferImportGetImportTasks()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferImportGetImportTasks$Response(params?: ParticipantOfferImportGetImportTasks$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiSearchResultOfParticipantOfferImportTaskGridItem>> {
    return participantOfferImportGetImportTasks(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferImportGetImportTasks$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferImportGetImportTasks(params?: ParticipantOfferImportGetImportTasks$Params, context?: HttpContext): Observable<ApiSearchResultOfParticipantOfferImportTaskGridItem> {
    return this.participantOfferImportGetImportTasks$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiSearchResultOfParticipantOfferImportTaskGridItem>): ApiSearchResultOfParticipantOfferImportTaskGridItem => r.body)
    );
  }

  /** Path part for operation `participantOfferImportGetImportTask()` */
  static readonly ParticipantOfferImportGetImportTaskPath = '/bla-bla-vla/offerimport/get/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferImportGetImportTask()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferImportGetImportTask$Response(params: ParticipantOfferImportGetImportTask$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiParticipantOfferImportTaskDto>> {
    return participantOfferImportGetImportTask(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferImportGetImportTask$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferImportGetImportTask(params: ParticipantOfferImportGetImportTask$Params, context?: HttpContext): Observable<ApiParticipantOfferImportTaskDto> {
    return this.participantOfferImportGetImportTask$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiParticipantOfferImportTaskDto>): ApiParticipantOfferImportTaskDto => r.body)
    );
  }

  /** Path part for operation `participantOfferImportGetCharacteristicsByParticipantOffer()` */
  static readonly ParticipantOfferImportGetCharacteristicsByParticipantOfferPath = '/bla-bla-vla/offerimport/characteristics/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferImportGetCharacteristicsByParticipantOffer()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferImportGetCharacteristicsByParticipantOffer$Response(params: ParticipantOfferImportGetCharacteristicsByParticipantOffer$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ApiCharacteristicDto>>> {
    return participantOfferImportGetCharacteristicsByParticipantOffer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferImportGetCharacteristicsByParticipantOffer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferImportGetCharacteristicsByParticipantOffer(params: ParticipantOfferImportGetCharacteristicsByParticipantOffer$Params, context?: HttpContext): Observable<Array<ApiCharacteristicDto>> {
    return this.participantOfferImportGetCharacteristicsByParticipantOffer$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ApiCharacteristicDto>>): Array<ApiCharacteristicDto> => r.body)
    );
  }

  /** Path part for operation `participantOfferImportApproveCharateristicById()` */
  static readonly ParticipantOfferImportApproveCharateristicByIdPath = '/bla-bla-vla/offerimport/characteristics/{id}/approve';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferImportApproveCharateristicById()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferImportApproveCharateristicById$Response(params: ParticipantOfferImportApproveCharateristicById$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return participantOfferImportApproveCharateristicById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferImportApproveCharateristicById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferImportApproveCharateristicById(params: ParticipantOfferImportApproveCharateristicById$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.participantOfferImportApproveCharateristicById$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

}
