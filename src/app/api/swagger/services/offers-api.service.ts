/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiMarketJsonResultOfBatchProcessingResultAltDto } from '../models/api-market-json-result-of-batch-processing-result';
import { ApiMarketJsonResultOfBooleanAltDto } from '../models/api-market-json-result-of-boolean';
import { ApiMarketJsonResultOfIReadOnlyCollectionOfParticipantOfferDto } from '../models/api-market-json-result-of-i-read-only-collection-of-participant-offer-dto';
import { ApiMarketJsonResultOfListOfOfferStatesDto } from '../models/api-market-json-result-of-list-of-offer-states-dto';
import { ApiMarketJsonResultOfLongAltDto } from '../models/api-market-json-result-of-long';
import { ApiMarketJsonResultOfMarketJsonVoidResultAltDto } from '../models/api-market-json-result-of-market-json-void-result';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketOfferShortModelDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-market-offer-short-model-dto';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketParticipantOfferInfoDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-market-participant-offer-info-dto';
import { ApiMarketJsonResultOfMarketParticipantOfferInfoDto } from '../models/api-market-json-result-of-market-participant-offer-info-dto';
import { ApiMarketJsonResultOfParticipantOfferPublishResultDto } from '../models/api-market-json-result-of-participant-offer-publish-result-dto';
import { ApiMarketJsonResultOfStringAltDto } from '../models/api-market-json-result-of-string';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { offersApprove } from '../fn/offers/offers-approve';
import { OffersApprove$Params } from '../fn/offers/offers-approve';
import { offersChangeStateOffer } from '../fn/offers/offers-change-state-offer';
import { OffersChangeStateOffer$Params } from '../fn/offers/offers-change-state-offer';
import { offersChechActualizationRequestExtists } from '../fn/offers/offers-chech-actualization-request-extists';
import { OffersChechActualizationRequestExtists$Params } from '../fn/offers/offers-chech-actualization-request-extists';
import { offersConfirmExternal } from '../fn/offers/offers-confirm-external';
import { OffersConfirmExternal$Params } from '../fn/offers/offers-confirm-external';
import { offersCount } from '../fn/offers/offers-count';
import { OffersCount$Params } from '../fn/offers/offers-count';
import { offersCreateParticipantOfferActualizationRequest } from '../fn/offers/offers-create-participant-offer-actualization-request';
import { OffersCreateParticipantOfferActualizationRequest$Params } from '../fn/offers/offers-create-participant-offer-actualization-request';
import { offersDisapprove } from '../fn/offers/offers-disapprove';
import { OffersDisapprove$Params } from '../fn/offers/offers-disapprove';
import { offersExportPriceListToExcel } from '../fn/offers/offers-export-price-list-to-excel';
import { OffersExportPriceListToExcel$Params } from '../fn/offers/offers-export-price-list-to-excel';
import { offersExtendParticipantOffer } from '../fn/offers/offers-extend-participant-offer';
import { OffersExtendParticipantOffer$Params } from '../fn/offers/offers-extend-participant-offer';
import { offersExternalSearch } from '../fn/offers/offers-external-search';
import { OffersExternalSearch$Params } from '../fn/offers/offers-external-search';
import { offersGetExcelImportTemplate } from '../fn/offers/offers-get-excel-import-template';
import { OffersGetExcelImportTemplate$Params } from '../fn/offers/offers-get-excel-import-template';
import { offersGetExcelImportTemplateExportBy } from '../fn/offers/offers-get-excel-import-template-export-by';
import { OffersGetExcelImportTemplateExportBy$Params } from '../fn/offers/offers-get-excel-import-template-export-by';
import { offersGetOfferInfo } from '../fn/offers/offers-get-offer-info';
import { OffersGetOfferInfo$Params } from '../fn/offers/offers-get-offer-info';
import { offersGetOffers } from '../fn/offers/offers-get-offers';
import { OffersGetOffers$Params } from '../fn/offers/offers-get-offers';
import { offersModerate } from '../fn/offers/offers-moderate';
import { OffersModerate$Params } from '../fn/offers/offers-moderate';
import { offersPublish } from '../fn/offers/offers-publish';
import { OffersPublish$Params } from '../fn/offers/offers-publish';
import { offersPublish2 } from '../fn/offers/offers-publish-2';
import { OffersPublish2$Params } from '../fn/offers/offers-publish-2';
import { offersPublishExternal } from '../fn/offers/offers-publish-external';
import { OffersPublishExternal$Params } from '../fn/offers/offers-publish-external';
import { offersRemoveOffer } from '../fn/offers/offers-remove-offer';
import { OffersRemoveOffer$Params } from '../fn/offers/offers-remove-offer';
import { offersRemoveParticipantOffer } from '../fn/offers/offers-remove-participant-offer';
import { OffersRemoveParticipantOffer$Params } from '../fn/offers/offers-remove-participant-offer';
import { offersSaveAsDraft } from '../fn/offers/offers-save-as-draft';
import { OffersSaveAsDraft$Params } from '../fn/offers/offers-save-as-draft';
import { offersSearch } from '../fn/offers/offers-search';
import { OffersSearch$Params } from '../fn/offers/offers-search';
import { offersSendCustomerCommercialOffer } from '../fn/offers/offers-send-customer-commercial-offer';
import { OffersSendCustomerCommercialOffer$Params } from '../fn/offers/offers-send-customer-commercial-offer';
import { offersUpdate } from '../fn/offers/offers-update';
import { OffersUpdate$Params } from '../fn/offers/offers-update';
import { offersValidateAccessToOffer } from '../fn/offers/offers-validate-access-to-offer';
import { OffersValidateAccessToOffer$Params } from '../fn/offers/offers-validate-access-to-offer';
import { ApiUpdateResultAltDto } from '../models/api-update-result';

@Injectable({ providedIn: 'root' })
export class OffersApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `offersGetOfferInfo()` */
  static readonly OffersGetOfferInfoPath = '/market/api/v1/offers/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `offersGetOfferInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  offersGetOfferInfo$Response(params: OffersGetOfferInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketParticipantOfferInfoDto>> {
    return offersGetOfferInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `offersGetOfferInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  offersGetOfferInfo(params: OffersGetOfferInfo$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketParticipantOfferInfoDto> {
    return this.offersGetOfferInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketParticipantOfferInfoDto>): ApiMarketJsonResultOfMarketParticipantOfferInfoDto => r.body)
    );
  }

  /** Path part for operation `offersRemoveOffer()` */
  static readonly OffersRemoveOfferPath = '/market/api/v1/offers/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `offersRemoveOffer()` instead.
   *
   * This method doesn't expect any request body.
   */
  offersRemoveOffer$Response(params: OffersRemoveOffer$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBatchProcessingResultAltDto>> {
    return offersRemoveOffer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `offersRemoveOffer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  offersRemoveOffer(params: OffersRemoveOffer$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBatchProcessingResultAltDto> {
    return this.offersRemoveOffer$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBatchProcessingResultAltDto>): ApiMarketJsonResultOfBatchProcessingResultAltDto => r.body)
    );
  }

  /** Path part for operation `offersValidateAccessToOffer()` */
  static readonly OffersValidateAccessToOfferPath = '/market/api/v1/offers/{id}/isPublicAccess';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `offersValidateAccessToOffer()` instead.
   *
   * This method doesn't expect any request body.
   */
  offersValidateAccessToOffer$Response(params: OffersValidateAccessToOffer$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return offersValidateAccessToOffer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `offersValidateAccessToOffer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  offersValidateAccessToOffer(params: OffersValidateAccessToOffer$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.offersValidateAccessToOffer$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `offersCreateParticipantOfferActualizationRequest()` */
  static readonly OffersCreateParticipantOfferActualizationRequestPath = '/market/api/v1/offers/{id}/actualizationRequest';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `offersCreateParticipantOfferActualizationRequest()` instead.
   *
   * This method doesn't expect any request body.
   */
  offersCreateParticipantOfferActualizationRequest$Response(params: OffersCreateParticipantOfferActualizationRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketJsonVoidResultAltDto>> {
    return offersCreateParticipantOfferActualizationRequest(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `offersCreateParticipantOfferActualizationRequest$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  offersCreateParticipantOfferActualizationRequest(params: OffersCreateParticipantOfferActualizationRequest$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketJsonVoidResultAltDto> {
    return this.offersCreateParticipantOfferActualizationRequest$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketJsonVoidResultAltDto>): ApiMarketJsonResultOfMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `offersChechActualizationRequestExtists()` */
  static readonly OffersChechActualizationRequestExtistsPath = '/market/api/v1/offers/{id}/actualizationRequest/isExists';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `offersChechActualizationRequestExtists()` instead.
   *
   * This method doesn't expect any request body.
   */
  offersChechActualizationRequestExtists$Response(params: OffersChechActualizationRequestExtists$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return offersChechActualizationRequestExtists(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `offersChechActualizationRequestExtists$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  offersChechActualizationRequestExtists(params: OffersChechActualizationRequestExtists$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.offersChechActualizationRequestExtists$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `offersPublish()` */
  static readonly OffersPublishPath = '/market/api/v1/offers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `offersPublish()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offersPublish$Response(params?: OffersPublish$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfParticipantOfferPublishResultDto>> {
    return offersPublish(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `offersPublish$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offersPublish(params?: OffersPublish$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfParticipantOfferPublishResultDto> {
    return this.offersPublish$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfParticipantOfferPublishResultDto>): ApiMarketJsonResultOfParticipantOfferPublishResultDto => r.body)
    );
  }

  /** Path part for operation `offersPublishExternal()` */
  static readonly OffersPublishExternalPath = '/market/api/v1/offers/publish/external';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `offersPublishExternal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offersPublishExternal$Response(params?: OffersPublishExternal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfParticipantOfferPublishResultDto>> {
    return offersPublishExternal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `offersPublishExternal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offersPublishExternal(params?: OffersPublishExternal$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfParticipantOfferPublishResultDto> {
    return this.offersPublishExternal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfParticipantOfferPublishResultDto>): ApiMarketJsonResultOfParticipantOfferPublishResultDto => r.body)
    );
  }

  /** Path part for operation `offersConfirmExternal()` */
  static readonly OffersConfirmExternalPath = '/market/api/v1/offers/confirm/external';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `offersConfirmExternal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offersConfirmExternal$Response(params?: OffersConfirmExternal$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return offersConfirmExternal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `offersConfirmExternal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offersConfirmExternal(params?: OffersConfirmExternal$Params, context?: HttpContext): Observable<Blob> {
    return this.offersConfirmExternal$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `offersPublish2()` */
  static readonly OffersPublish2Path = '/market/api/v1/offers/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `offersPublish2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offersPublish2$Response(params?: OffersPublish2$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return offersPublish2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `offersPublish2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offersPublish2(params?: OffersPublish2$Params, context?: HttpContext): Observable<number> {
    return this.offersPublish2$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `offersSaveAsDraft()` */
  static readonly OffersSaveAsDraftPath = '/market/api/v1/offers/draft';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `offersSaveAsDraft()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offersSaveAsDraft$Response(params?: OffersSaveAsDraft$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfLongAltDto>> {
    return offersSaveAsDraft(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `offersSaveAsDraft$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offersSaveAsDraft(params?: OffersSaveAsDraft$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfLongAltDto> {
    return this.offersSaveAsDraft$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfLongAltDto>): ApiMarketJsonResultOfLongAltDto => r.body)
    );
  }

  /** Path part for operation `offersGetOffers()` */
  static readonly OffersGetOffersPath = '/market/api/v1/offers/my';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `offersGetOffers()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offersGetOffers$Response(params?: OffersGetOffers$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketParticipantOfferInfoDto>> {
    return offersGetOffers(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `offersGetOffers$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offersGetOffers(params?: OffersGetOffers$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketParticipantOfferInfoDto> {
    return this.offersGetOffers$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketParticipantOfferInfoDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketParticipantOfferInfoDto => r.body)
    );
  }

  /** Path part for operation `offersSearch()` */
  static readonly OffersSearchPath = '/market/api/v1/offers/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `offersSearch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offersSearch$Response(params?: OffersSearch$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketOfferShortModelDto>> {
    return offersSearch(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `offersSearch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offersSearch(params?: OffersSearch$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketOfferShortModelDto> {
    return this.offersSearch$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketOfferShortModelDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketOfferShortModelDto => r.body)
    );
  }

  /** Path part for operation `offersUpdate()` */
  static readonly OffersUpdatePath = '/market/api/v1/offers/batchUpdate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `offersUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offersUpdate$Response(params?: OffersUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return offersUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `offersUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offersUpdate(params?: OffersUpdate$Params, context?: HttpContext): Observable<Blob> {
    return this.offersUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `offersCount()` */
  static readonly OffersCountPath = '/market/api/v1/offers/count';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `offersCount()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offersCount$Response(params?: OffersCount$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfOfferStatesDto>> {
    return offersCount(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `offersCount$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offersCount(params?: OffersCount$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfOfferStatesDto> {
    return this.offersCount$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfOfferStatesDto>): ApiMarketJsonResultOfListOfOfferStatesDto => r.body)
    );
  }

  /** Path part for operation `offersApprove()` */
  static readonly OffersApprovePath = '/market/api/v1/offers/approve';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `offersApprove()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offersApprove$Response(params?: OffersApprove$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return offersApprove(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `offersApprove$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offersApprove(params?: OffersApprove$Params, context?: HttpContext): Observable<Blob> {
    return this.offersApprove$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `offersDisapprove()` */
  static readonly OffersDisapprovePath = '/market/api/v1/offers/disapprove';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `offersDisapprove()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offersDisapprove$Response(params?: OffersDisapprove$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return offersDisapprove(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `offersDisapprove$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offersDisapprove(params?: OffersDisapprove$Params, context?: HttpContext): Observable<Blob> {
    return this.offersDisapprove$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `offersModerate()` */
  static readonly OffersModeratePath = '/market/api/v1/offers/moderate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `offersModerate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offersModerate$Response(params?: OffersModerate$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiUpdateResultAltDto>> {
    return offersModerate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `offersModerate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offersModerate(params?: OffersModerate$Params, context?: HttpContext): Observable<ApiUpdateResultAltDto> {
    return this.offersModerate$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiUpdateResultAltDto>): ApiUpdateResultAltDto => r.body)
    );
  }

  /** Path part for operation `offersChangeStateOffer()` */
  static readonly OffersChangeStateOfferPath = '/market/api/v1/offers/change-state';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `offersChangeStateOffer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offersChangeStateOffer$Response(params?: OffersChangeStateOffer$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiUpdateResultAltDto>> {
    return offersChangeStateOffer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `offersChangeStateOffer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offersChangeStateOffer(params?: OffersChangeStateOffer$Params, context?: HttpContext): Observable<ApiUpdateResultAltDto> {
    return this.offersChangeStateOffer$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiUpdateResultAltDto>): ApiUpdateResultAltDto => r.body)
    );
  }

  /** Path part for operation `offersExportPriceListToExcel()` */
  static readonly OffersExportPriceListToExcelPath = '/market/api/v1/offers/ExportToExcel';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `offersExportPriceListToExcel()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offersExportPriceListToExcel$Response(params?: OffersExportPriceListToExcel$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return offersExportPriceListToExcel(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `offersExportPriceListToExcel$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offersExportPriceListToExcel(params?: OffersExportPriceListToExcel$Params, context?: HttpContext): Observable<Blob> {
    return this.offersExportPriceListToExcel$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `offersGetExcelImportTemplate()` */
  static readonly OffersGetExcelImportTemplatePath = '/market/api/v1/offers/ExcelExportTemplate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `offersGetExcelImportTemplate()` instead.
   *
   * This method doesn't expect any request body.
   */
  offersGetExcelImportTemplate$Response(params?: OffersGetExcelImportTemplate$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfStringAltDto>> {
    return offersGetExcelImportTemplate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `offersGetExcelImportTemplate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  offersGetExcelImportTemplate(params?: OffersGetExcelImportTemplate$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfStringAltDto> {
    return this.offersGetExcelImportTemplate$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfStringAltDto>): ApiMarketJsonResultOfStringAltDto => r.body)
    );
  }

  /** Path part for operation `offersGetExcelImportTemplateExportBy()` */
  static readonly OffersGetExcelImportTemplateExportByPath = '/market/api/v1/offers/ExcelImportTemplate/export-by';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `offersGetExcelImportTemplateExportBy()` instead.
   *
   * This method doesn't expect any request body.
   */
  offersGetExcelImportTemplateExportBy$Response(params?: OffersGetExcelImportTemplateExportBy$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return offersGetExcelImportTemplateExportBy(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `offersGetExcelImportTemplateExportBy$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  offersGetExcelImportTemplateExportBy(params?: OffersGetExcelImportTemplateExportBy$Params, context?: HttpContext): Observable<Blob> {
    return this.offersGetExcelImportTemplateExportBy$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `offersExtendParticipantOffer()` */
  static readonly OffersExtendParticipantOfferPath = '/market/api/v1/offers/extend';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `offersExtendParticipantOffer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offersExtendParticipantOffer$Response(params?: OffersExtendParticipantOffer$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return offersExtendParticipantOffer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `offersExtendParticipantOffer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offersExtendParticipantOffer(params?: OffersExtendParticipantOffer$Params, context?: HttpContext): Observable<Blob> {
    return this.offersExtendParticipantOffer$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `offersRemoveParticipantOffer()` */
  static readonly OffersRemoveParticipantOfferPath = '/market/api/v1/offers/remove';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `offersRemoveParticipantOffer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offersRemoveParticipantOffer$Response(params?: OffersRemoveParticipantOffer$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return offersRemoveParticipantOffer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `offersRemoveParticipantOffer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offersRemoveParticipantOffer(params?: OffersRemoveParticipantOffer$Params, context?: HttpContext): Observable<Blob> {
    return this.offersRemoveParticipantOffer$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `offersExternalSearch()` */
  static readonly OffersExternalSearchPath = '/market/api/v1/offers/external-info/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `offersExternalSearch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offersExternalSearch$Response(params?: OffersExternalSearch$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfParticipantOfferDto>> {
    return offersExternalSearch(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `offersExternalSearch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offersExternalSearch(params?: OffersExternalSearch$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIReadOnlyCollectionOfParticipantOfferDto> {
    return this.offersExternalSearch$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfParticipantOfferDto>): ApiMarketJsonResultOfIReadOnlyCollectionOfParticipantOfferDto => r.body)
    );
  }

  /** Path part for operation `offersSendCustomerCommercialOffer()` */
  static readonly OffersSendCustomerCommercialOfferPath = '/market/api/v1/offers/{id}/commercial-offer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `offersSendCustomerCommercialOffer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offersSendCustomerCommercialOffer$Response(params: OffersSendCustomerCommercialOffer$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return offersSendCustomerCommercialOffer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `offersSendCustomerCommercialOffer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  offersSendCustomerCommercialOffer(params: OffersSendCustomerCommercialOffer$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.offersSendCustomerCommercialOffer$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

}
