/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { participantRatingCanLeaveRatingFeedback } from '../fn/participant-rating/participant-rating-can-leave-rating-feedback';
import { ParticipantRatingCanLeaveRatingFeedback$Params } from '../fn/participant-rating/participant-rating-can-leave-rating-feedback';
import { participantRatingDeleteCustomerFeedbackForParticipant } from '../fn/participant-rating/participant-rating-delete-customer-feedback-for-participant';
import { ParticipantRatingDeleteCustomerFeedbackForParticipant$Params } from '../fn/participant-rating/participant-rating-delete-customer-feedback-for-participant';
import { ApiParticipantRatingDetailsDto } from '../models/api-participant-rating-details-dto';
import { ApiParticipantRatingDetailsToLeaveFeedbackDto } from '../models/api-participant-rating-details-to-leave-feedback-dto';
import { participantRatingExportFeedbackToExcel } from '../fn/participant-rating/participant-rating-export-feedback-to-excel';
import { ParticipantRatingExportFeedbackToExcel$Params } from '../fn/participant-rating/participant-rating-export-feedback-to-excel';
import { participantRatingExportFeedbackToExcelByFilter } from '../fn/participant-rating/participant-rating-export-feedback-to-excel-by-filter';
import { ParticipantRatingExportFeedbackToExcelByFilter$Params } from '../fn/participant-rating/participant-rating-export-feedback-to-excel-by-filter';
import { participantRatingGetParticipantRatingDetails } from '../fn/participant-rating/participant-rating-get-participant-rating-details';
import { ParticipantRatingGetParticipantRatingDetails$Params } from '../fn/participant-rating/participant-rating-get-participant-rating-details';
import { participantRatingGetParticipantRatingDetailsToLeaveFeedback } from '../fn/participant-rating/participant-rating-get-participant-rating-details-to-leave-feedback';
import { ParticipantRatingGetParticipantRatingDetailsToLeaveFeedback$Params } from '../fn/participant-rating/participant-rating-get-participant-rating-details-to-leave-feedback';
import { participantRatingGetParticipantsRating } from '../fn/participant-rating/participant-rating-get-participants-rating';
import { ParticipantRatingGetParticipantsRating$Params } from '../fn/participant-rating/participant-rating-get-participants-rating';
import { participantRatingHideCustomerFeedbackForParticipant } from '../fn/participant-rating/participant-rating-hide-customer-feedback-for-participant';
import { ParticipantRatingHideCustomerFeedbackForParticipant$Params } from '../fn/participant-rating/participant-rating-hide-customer-feedback-for-participant';
import { participantRatingSaveCustomerFeedbackForParticipant } from '../fn/participant-rating/participant-rating-save-customer-feedback-for-participant';
import { ParticipantRatingSaveCustomerFeedbackForParticipant$Params } from '../fn/participant-rating/participant-rating-save-customer-feedback-for-participant';
import { participantRatingShowCustomerFeedbackForParticipant } from '../fn/participant-rating/participant-rating-show-customer-feedback-for-participant';
import { ParticipantRatingShowCustomerFeedbackForParticipant$Params } from '../fn/participant-rating/participant-rating-show-customer-feedback-for-participant';
import { ApiSearchResultOfParticipantFeedbackRatingInfoDto } from '../models/api-search-result-of-participant-feedback-rating-info-dto';

@Injectable({ providedIn: 'root' })
export class ParticipantRatingApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `participantRatingCanLeaveRatingFeedback()` */
  static readonly ParticipantRatingCanLeaveRatingFeedbackPath = '/api/ParticipantRating/CanLeaveRatingFeedback';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantRatingCanLeaveRatingFeedback()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantRatingCanLeaveRatingFeedback$Response(params?: ParticipantRatingCanLeaveRatingFeedback$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return participantRatingCanLeaveRatingFeedback(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantRatingCanLeaveRatingFeedback$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantRatingCanLeaveRatingFeedback(params?: ParticipantRatingCanLeaveRatingFeedback$Params, context?: HttpContext): Observable<boolean> {
    return this.participantRatingCanLeaveRatingFeedback$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `participantRatingGetParticipantsRating()` */
  static readonly ParticipantRatingGetParticipantsRatingPath = '/api/ParticipantRating/GetParticipantsRating';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantRatingGetParticipantsRating()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantRatingGetParticipantsRating$Response(params?: ParticipantRatingGetParticipantsRating$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiSearchResultOfParticipantFeedbackRatingInfoDto>> {
    return participantRatingGetParticipantsRating(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantRatingGetParticipantsRating$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantRatingGetParticipantsRating(params?: ParticipantRatingGetParticipantsRating$Params, context?: HttpContext): Observable<ApiSearchResultOfParticipantFeedbackRatingInfoDto> {
    return this.participantRatingGetParticipantsRating$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiSearchResultOfParticipantFeedbackRatingInfoDto>): ApiSearchResultOfParticipantFeedbackRatingInfoDto => r.body)
    );
  }

  /** Path part for operation `participantRatingGetParticipantRatingDetailsToLeaveFeedback()` */
  static readonly ParticipantRatingGetParticipantRatingDetailsToLeaveFeedbackPath = '/api/ParticipantRating/GetParticipantRatingDetailsToLeaveFeedback/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantRatingGetParticipantRatingDetailsToLeaveFeedback()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantRatingGetParticipantRatingDetailsToLeaveFeedback$Response(params: ParticipantRatingGetParticipantRatingDetailsToLeaveFeedback$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiParticipantRatingDetailsToLeaveFeedbackDto>> {
    return participantRatingGetParticipantRatingDetailsToLeaveFeedback(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantRatingGetParticipantRatingDetailsToLeaveFeedback$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantRatingGetParticipantRatingDetailsToLeaveFeedback(params: ParticipantRatingGetParticipantRatingDetailsToLeaveFeedback$Params, context?: HttpContext): Observable<ApiParticipantRatingDetailsToLeaveFeedbackDto> {
    return this.participantRatingGetParticipantRatingDetailsToLeaveFeedback$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiParticipantRatingDetailsToLeaveFeedbackDto>): ApiParticipantRatingDetailsToLeaveFeedbackDto => r.body)
    );
  }

  /** Path part for operation `participantRatingSaveCustomerFeedbackForParticipant()` */
  static readonly ParticipantRatingSaveCustomerFeedbackForParticipantPath = '/api/ParticipantRating/SaveCustomerFeedbackForParticipant';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantRatingSaveCustomerFeedbackForParticipant()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantRatingSaveCustomerFeedbackForParticipant$Response(params?: ParticipantRatingSaveCustomerFeedbackForParticipant$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return participantRatingSaveCustomerFeedbackForParticipant(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantRatingSaveCustomerFeedbackForParticipant$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantRatingSaveCustomerFeedbackForParticipant(params?: ParticipantRatingSaveCustomerFeedbackForParticipant$Params, context?: HttpContext): Observable<Blob> {
    return this.participantRatingSaveCustomerFeedbackForParticipant$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `participantRatingDeleteCustomerFeedbackForParticipant()` */
  static readonly ParticipantRatingDeleteCustomerFeedbackForParticipantPath = '/api/ParticipantRating/DeleteCustomerFeedbackForParticipant';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantRatingDeleteCustomerFeedbackForParticipant()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantRatingDeleteCustomerFeedbackForParticipant$Response(params?: ParticipantRatingDeleteCustomerFeedbackForParticipant$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return participantRatingDeleteCustomerFeedbackForParticipant(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantRatingDeleteCustomerFeedbackForParticipant$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantRatingDeleteCustomerFeedbackForParticipant(params?: ParticipantRatingDeleteCustomerFeedbackForParticipant$Params, context?: HttpContext): Observable<Blob> {
    return this.participantRatingDeleteCustomerFeedbackForParticipant$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `participantRatingHideCustomerFeedbackForParticipant()` */
  static readonly ParticipantRatingHideCustomerFeedbackForParticipantPath = '/api/ParticipantRating/HideCustomerFeedbackForParticipant';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantRatingHideCustomerFeedbackForParticipant()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantRatingHideCustomerFeedbackForParticipant$Response(params?: ParticipantRatingHideCustomerFeedbackForParticipant$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return participantRatingHideCustomerFeedbackForParticipant(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantRatingHideCustomerFeedbackForParticipant$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantRatingHideCustomerFeedbackForParticipant(params?: ParticipantRatingHideCustomerFeedbackForParticipant$Params, context?: HttpContext): Observable<Blob> {
    return this.participantRatingHideCustomerFeedbackForParticipant$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `participantRatingShowCustomerFeedbackForParticipant()` */
  static readonly ParticipantRatingShowCustomerFeedbackForParticipantPath = '/api/ParticipantRating/ShowCustomerFeedbackForParticipant';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantRatingShowCustomerFeedbackForParticipant()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantRatingShowCustomerFeedbackForParticipant$Response(params?: ParticipantRatingShowCustomerFeedbackForParticipant$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return participantRatingShowCustomerFeedbackForParticipant(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantRatingShowCustomerFeedbackForParticipant$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantRatingShowCustomerFeedbackForParticipant(params?: ParticipantRatingShowCustomerFeedbackForParticipant$Params, context?: HttpContext): Observable<Blob> {
    return this.participantRatingShowCustomerFeedbackForParticipant$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `participantRatingGetParticipantRatingDetails()` */
  static readonly ParticipantRatingGetParticipantRatingDetailsPath = '/api/ParticipantRating/GetParticipantRatingDetails/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantRatingGetParticipantRatingDetails()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantRatingGetParticipantRatingDetails$Response(params: ParticipantRatingGetParticipantRatingDetails$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiParticipantRatingDetailsDto>> {
    return participantRatingGetParticipantRatingDetails(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantRatingGetParticipantRatingDetails$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantRatingGetParticipantRatingDetails(params: ParticipantRatingGetParticipantRatingDetails$Params, context?: HttpContext): Observable<ApiParticipantRatingDetailsDto> {
    return this.participantRatingGetParticipantRatingDetails$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiParticipantRatingDetailsDto>): ApiParticipantRatingDetailsDto => r.body)
    );
  }

  /** Path part for operation `participantRatingExportFeedbackToExcel()` */
  static readonly ParticipantRatingExportFeedbackToExcelPath = '/api/ParticipantRating/ExportFeedbackToExcel';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantRatingExportFeedbackToExcel()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantRatingExportFeedbackToExcel$Response(params?: ParticipantRatingExportFeedbackToExcel$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return participantRatingExportFeedbackToExcel(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantRatingExportFeedbackToExcel$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantRatingExportFeedbackToExcel(params?: ParticipantRatingExportFeedbackToExcel$Params, context?: HttpContext): Observable<Blob> {
    return this.participantRatingExportFeedbackToExcel$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `participantRatingExportFeedbackToExcelByFilter()` */
  static readonly ParticipantRatingExportFeedbackToExcelByFilterPath = '/api/ParticipantRating/ExportFeedbackToExcelByFilter';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantRatingExportFeedbackToExcelByFilter()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantRatingExportFeedbackToExcelByFilter$Response(params?: ParticipantRatingExportFeedbackToExcelByFilter$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return participantRatingExportFeedbackToExcelByFilter(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantRatingExportFeedbackToExcelByFilter$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantRatingExportFeedbackToExcelByFilter(params?: ParticipantRatingExportFeedbackToExcelByFilter$Params, context?: HttpContext): Observable<Blob> {
    return this.participantRatingExportFeedbackToExcelByFilter$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}
