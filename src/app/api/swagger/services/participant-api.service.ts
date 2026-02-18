/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { participantExportToExcel } from '../fn/participant/participant-export-to-excel';
import { ParticipantExportToExcel$Params } from '../fn/participant/participant-export-to-excel';
import { participantGetParticipant } from '../fn/participant/participant-get-participant';
import { ParticipantGetParticipant$Params } from '../fn/participant/participant-get-participant';
import { participantGetParticipants } from '../fn/participant/participant-get-participants';
import { ParticipantGetParticipants$Params } from '../fn/participant/participant-get-participants';
import { participantGetParticipantShortInfo } from '../fn/participant/participant-get-participant-short-info';
import { ParticipantGetParticipantShortInfo$Params } from '../fn/participant/participant-get-participant-short-info';

@Injectable({ providedIn: 'root' })
export class ParticipantApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `participantGetParticipants()` */
  static readonly ParticipantGetParticipantsPath = '/api/Participants';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantGetParticipants()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantGetParticipants$Response(params?: ParticipantGetParticipants$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return participantGetParticipants(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantGetParticipants$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantGetParticipants(params?: ParticipantGetParticipants$Params, context?: HttpContext): Observable<Blob> {
    return this.participantGetParticipants$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `participantGetParticipant()` */
  static readonly ParticipantGetParticipantPath = '/api/Participants/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantGetParticipant()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantGetParticipant$Response(params: ParticipantGetParticipant$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return participantGetParticipant(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantGetParticipant$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantGetParticipant(params: ParticipantGetParticipant$Params, context?: HttpContext): Observable<Blob> {
    return this.participantGetParticipant$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `participantGetParticipantShortInfo()` */
  static readonly ParticipantGetParticipantShortInfoPath = '/api/participants/participantshortinfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantGetParticipantShortInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantGetParticipantShortInfo$Response(params?: ParticipantGetParticipantShortInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return participantGetParticipantShortInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantGetParticipantShortInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantGetParticipantShortInfo(params?: ParticipantGetParticipantShortInfo$Params, context?: HttpContext): Observable<Blob> {
    return this.participantGetParticipantShortInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `participantExportToExcel()` */
  static readonly ParticipantExportToExcelPath = '/api/participants/ExportToExcel';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantExportToExcel()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantExportToExcel$Response(params?: ParticipantExportToExcel$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return participantExportToExcel(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantExportToExcel$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantExportToExcel(params?: ParticipantExportToExcel$Params, context?: HttpContext): Observable<Blob> {
    return this.participantExportToExcel$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}
