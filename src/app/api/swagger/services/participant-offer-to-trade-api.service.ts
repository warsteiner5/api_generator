/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiMarketJsonResultOfExternalLotItemsParticipantOffersInfoDtoOf } from '../models/api-market-json-result-of-external-lot-items-participant-offers-info-dto-of';
import { ApiMarketJsonResultOfGetParticipantOffersByTradeResponseDto } from '../models/api-market-json-result-of-get-participant-offers-by-trade-response-dto';
import { ApiMarketJsonResultOfGuidAltDto } from '../models/api-market-json-result-of-guid';
import { ApiMarketJsonResultOfImportExcelApplicationSpecificationsResultAltDto } from '../models/api-market-json-result-of-import-excel-application-specifications-result';
import { ApiMarketJsonResultOfImportExcelParticipantOfferToTradeResultAltDto } from '../models/api-market-json-result-of-import-excel-participant-offer-to-trade-result';
import { ApiMarketJsonResultOfListOfParticipantOfferShortInfoDto } from '../models/api-market-json-result-of-list-of-participant-offer-short-info-dto';
import { ApiMarketJsonResultOfLotItemsParticipantOffersInfoDtoOf } from '../models/api-market-json-result-of-lot-items-participant-offers-info-dto-of';
import { ApiMarketJsonResultOfMarketJsonVoidResultAltDto } from '../models/api-market-json-result-of-market-json-void-result';
import { ApiMarketJsonResultOfParticipantOfferShortInfoDtoOf } from '../models/api-market-json-result-of-participant-offer-short-info-dto-of';
import { participantOfferToTradeCreateParticipantOffersToTrade } from '../fn/participant-offer-to-trade/participant-offer-to-trade-create-participant-offers-to-trade';
import { ParticipantOfferToTradeCreateParticipantOffersToTrade$Params } from '../fn/participant-offer-to-trade/participant-offer-to-trade-create-participant-offers-to-trade';
import { participantOfferToTradeCreateParticipantOfferToTradeLotItem } from '../fn/participant-offer-to-trade/participant-offer-to-trade-create-participant-offer-to-trade-lot-item';
import { ParticipantOfferToTradeCreateParticipantOfferToTradeLotItem$Params } from '../fn/participant-offer-to-trade/participant-offer-to-trade-create-participant-offer-to-trade-lot-item';
import { participantOfferToTradeGetExcelImportTemplateForTrade } from '../fn/participant-offer-to-trade/participant-offer-to-trade-get-excel-import-template-for-trade';
import { ParticipantOfferToTradeGetExcelImportTemplateForTrade$Params } from '../fn/participant-offer-to-trade/participant-offer-to-trade-get-excel-import-template-for-trade';
import { participantOfferToTradeGetExternalLotItemsFullOffersInfo } from '../fn/participant-offer-to-trade/participant-offer-to-trade-get-external-lot-items-full-offers-info';
import { ParticipantOfferToTradeGetExternalLotItemsFullOffersInfo$Params } from '../fn/participant-offer-to-trade/participant-offer-to-trade-get-external-lot-items-full-offers-info';
import { participantOfferToTradeGetExternalLotItemsShortOffersInfo } from '../fn/participant-offer-to-trade/participant-offer-to-trade-get-external-lot-items-short-offers-info';
import { ParticipantOfferToTradeGetExternalLotItemsShortOffersInfo$Params } from '../fn/participant-offer-to-trade/participant-offer-to-trade-get-external-lot-items-short-offers-info';
import { participantOfferToTradeGetImportByExcelTemplate } from '../fn/participant-offer-to-trade/participant-offer-to-trade-get-import-by-excel-template';
import { ParticipantOfferToTradeGetImportByExcelTemplate$Params } from '../fn/participant-offer-to-trade/participant-offer-to-trade-get-import-by-excel-template';
import { participantOfferToTradeGetLotItemsFullOffersInfo } from '../fn/participant-offer-to-trade/participant-offer-to-trade-get-lot-items-full-offers-info';
import { ParticipantOfferToTradeGetLotItemsFullOffersInfo$Params } from '../fn/participant-offer-to-trade/participant-offer-to-trade-get-lot-items-full-offers-info';
import { participantOfferToTradeGetLotItemsShortOffersInfo } from '../fn/participant-offer-to-trade/participant-offer-to-trade-get-lot-items-short-offers-info';
import { ParticipantOfferToTradeGetLotItemsShortOffersInfo$Params } from '../fn/participant-offer-to-trade/participant-offer-to-trade-get-lot-items-short-offers-info';
import { participantOfferToTradeGetOffersByLotItemId } from '../fn/participant-offer-to-trade/participant-offer-to-trade-get-offers-by-lot-item-id';
import { ParticipantOfferToTradeGetOffersByLotItemId$Params } from '../fn/participant-offer-to-trade/participant-offer-to-trade-get-offers-by-lot-item-id';
import { participantOfferToTradeGetOffersByTradeId } from '../fn/participant-offer-to-trade/participant-offer-to-trade-get-offers-by-trade-id';
import { ParticipantOfferToTradeGetOffersByTradeId$Params } from '../fn/participant-offer-to-trade/participant-offer-to-trade-get-offers-by-trade-id';
import { participantOfferToTradeGetParticipantOffersByTradeId } from '../fn/participant-offer-to-trade/participant-offer-to-trade-get-participant-offers-by-trade-id';
import { ParticipantOfferToTradeGetParticipantOffersByTradeId$Params } from '../fn/participant-offer-to-trade/participant-offer-to-trade-get-participant-offers-by-trade-id';
import { participantOfferToTradeGetSuitableParticipantOffersExcelReport } from '../fn/participant-offer-to-trade/participant-offer-to-trade-get-suitable-participant-offers-excel-report';
import { ParticipantOfferToTradeGetSuitableParticipantOffersExcelReport$Params } from '../fn/participant-offer-to-trade/participant-offer-to-trade-get-suitable-participant-offers-excel-report';
import { participantOfferToTradeGetTradeLotSpecificationsImportByExcelTemplate } from '../fn/participant-offer-to-trade/participant-offer-to-trade-get-trade-lot-specifications-import-by-excel-template';
import { ParticipantOfferToTradeGetTradeLotSpecificationsImportByExcelTemplate$Params } from '../fn/participant-offer-to-trade/participant-offer-to-trade-get-trade-lot-specifications-import-by-excel-template';
import { participantOfferToTradeImportByExcel } from '../fn/participant-offer-to-trade/participant-offer-to-trade-import-by-excel';
import { ParticipantOfferToTradeImportByExcel$Params } from '../fn/participant-offer-to-trade/participant-offer-to-trade-import-by-excel';
import { participantOfferToTradeImportTradeLotApplicationSpecificationsFromExcel } from '../fn/participant-offer-to-trade/participant-offer-to-trade-import-trade-lot-application-specifications-from-excel';
import { ParticipantOfferToTradeImportTradeLotApplicationSpecificationsFromExcel$Params } from '../fn/participant-offer-to-trade/participant-offer-to-trade-import-trade-lot-application-specifications-from-excel';

@Injectable({ providedIn: 'root' })
export class ParticipantOfferToTradeApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `participantOfferToTradeGetOffersByTradeId()` */
  static readonly ParticipantOfferToTradeGetOffersByTradeIdPath = '/market/api/v1/offerToTrade/participantOffersByTradeId/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferToTradeGetOffersByTradeId()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferToTradeGetOffersByTradeId$Response(params: ParticipantOfferToTradeGetOffersByTradeId$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfGetParticipantOffersByTradeResponseDto>> {
    return participantOfferToTradeGetOffersByTradeId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferToTradeGetOffersByTradeId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferToTradeGetOffersByTradeId(params: ParticipantOfferToTradeGetOffersByTradeId$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfGetParticipantOffersByTradeResponseDto> {
    return this.participantOfferToTradeGetOffersByTradeId$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfGetParticipantOffersByTradeResponseDto>): ApiMarketJsonResultOfGetParticipantOffersByTradeResponseDto => r.body)
    );
  }

  /** Path part for operation `participantOfferToTradeGetParticipantOffersByTradeId()` */
  static readonly ParticipantOfferToTradeGetParticipantOffersByTradeIdPath = '/market/api/v1/offerToTrade/{tradeId}/organization/{organizationId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferToTradeGetParticipantOffersByTradeId()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferToTradeGetParticipantOffersByTradeId$Response(params: ParticipantOfferToTradeGetParticipantOffersByTradeId$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfParticipantOfferShortInfoDtoOf>> {
    return participantOfferToTradeGetParticipantOffersByTradeId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferToTradeGetParticipantOffersByTradeId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferToTradeGetParticipantOffersByTradeId(params: ParticipantOfferToTradeGetParticipantOffersByTradeId$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfParticipantOfferShortInfoDtoOf> {
    return this.participantOfferToTradeGetParticipantOffersByTradeId$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfParticipantOfferShortInfoDtoOf>): ApiMarketJsonResultOfParticipantOfferShortInfoDtoOf => r.body)
    );
  }

  /** Path part for operation `participantOfferToTradeGetOffersByLotItemId()` */
  static readonly ParticipantOfferToTradeGetOffersByLotItemIdPath = '/market/api/v1/offerToTrade/participantOffersByLotItemId/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferToTradeGetOffersByLotItemId()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferToTradeGetOffersByLotItemId$Response(params: ParticipantOfferToTradeGetOffersByLotItemId$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfParticipantOfferShortInfoDto>> {
    return participantOfferToTradeGetOffersByLotItemId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferToTradeGetOffersByLotItemId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferToTradeGetOffersByLotItemId(params: ParticipantOfferToTradeGetOffersByLotItemId$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfParticipantOfferShortInfoDto> {
    return this.participantOfferToTradeGetOffersByLotItemId$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfParticipantOfferShortInfoDto>): ApiMarketJsonResultOfListOfParticipantOfferShortInfoDto => r.body)
    );
  }

  /** Path part for operation `participantOfferToTradeCreateParticipantOfferToTradeLotItem()` */
  static readonly ParticipantOfferToTradeCreateParticipantOfferToTradeLotItemPath = '/market/api/v1/offerToTrade/createParticipantOfferToTrade';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferToTradeCreateParticipantOfferToTradeLotItem()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   *
   * @deprecated
   */
  participantOfferToTradeCreateParticipantOfferToTradeLotItem$Response(params?: ParticipantOfferToTradeCreateParticipantOfferToTradeLotItem$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketJsonVoidResultAltDto>> {
    return participantOfferToTradeCreateParticipantOfferToTradeLotItem(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferToTradeCreateParticipantOfferToTradeLotItem$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   *
   * @deprecated
   */
  participantOfferToTradeCreateParticipantOfferToTradeLotItem(params?: ParticipantOfferToTradeCreateParticipantOfferToTradeLotItem$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketJsonVoidResultAltDto> {
    return this.participantOfferToTradeCreateParticipantOfferToTradeLotItem$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketJsonVoidResultAltDto>): ApiMarketJsonResultOfMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `participantOfferToTradeCreateParticipantOffersToTrade()` */
  static readonly ParticipantOfferToTradeCreateParticipantOffersToTradePath = '/market/api/v1/offerToTrade/{tradeId}/items/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferToTradeCreateParticipantOffersToTrade()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferToTradeCreateParticipantOffersToTrade$Response(params: ParticipantOfferToTradeCreateParticipantOffersToTrade$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketJsonVoidResultAltDto>> {
    return participantOfferToTradeCreateParticipantOffersToTrade(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferToTradeCreateParticipantOffersToTrade$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferToTradeCreateParticipantOffersToTrade(params: ParticipantOfferToTradeCreateParticipantOffersToTrade$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketJsonVoidResultAltDto> {
    return this.participantOfferToTradeCreateParticipantOffersToTrade$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketJsonVoidResultAltDto>): ApiMarketJsonResultOfMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `participantOfferToTradeGetLotItemsShortOffersInfo()` */
  static readonly ParticipantOfferToTradeGetLotItemsShortOffersInfoPath = '/market/api/v1/offerToTrade/{tradeId}/participant-offers/short-info';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferToTradeGetLotItemsShortOffersInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferToTradeGetLotItemsShortOffersInfo$Response(params: ParticipantOfferToTradeGetLotItemsShortOffersInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfLotItemsParticipantOffersInfoDtoOf>> {
    return participantOfferToTradeGetLotItemsShortOffersInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferToTradeGetLotItemsShortOffersInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferToTradeGetLotItemsShortOffersInfo(params: ParticipantOfferToTradeGetLotItemsShortOffersInfo$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfLotItemsParticipantOffersInfoDtoOf> {
    return this.participantOfferToTradeGetLotItemsShortOffersInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfLotItemsParticipantOffersInfoDtoOf>): ApiMarketJsonResultOfLotItemsParticipantOffersInfoDtoOf => r.body)
    );
  }

  /** Path part for operation `participantOfferToTradeGetExternalLotItemsShortOffersInfo()` */
  static readonly ParticipantOfferToTradeGetExternalLotItemsShortOffersInfoPath = '/market/api/v1/offerToTrade/{tradeId}/participant-offers/external/short-info';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferToTradeGetExternalLotItemsShortOffersInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferToTradeGetExternalLotItemsShortOffersInfo$Response(params: ParticipantOfferToTradeGetExternalLotItemsShortOffersInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfLotItemsParticipantOffersInfoDtoOf>> {
    return participantOfferToTradeGetExternalLotItemsShortOffersInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferToTradeGetExternalLotItemsShortOffersInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferToTradeGetExternalLotItemsShortOffersInfo(params: ParticipantOfferToTradeGetExternalLotItemsShortOffersInfo$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfLotItemsParticipantOffersInfoDtoOf> {
    return this.participantOfferToTradeGetExternalLotItemsShortOffersInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfLotItemsParticipantOffersInfoDtoOf>): ApiMarketJsonResultOfLotItemsParticipantOffersInfoDtoOf => r.body)
    );
  }

  /** Path part for operation `participantOfferToTradeGetLotItemsFullOffersInfo()` */
  static readonly ParticipantOfferToTradeGetLotItemsFullOffersInfoPath = '/market/api/v1/offerToTrade/{tradeId}/participant-offers/full-info';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferToTradeGetLotItemsFullOffersInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferToTradeGetLotItemsFullOffersInfo$Response(params: ParticipantOfferToTradeGetLotItemsFullOffersInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfLotItemsParticipantOffersInfoDtoOf>> {
    return participantOfferToTradeGetLotItemsFullOffersInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferToTradeGetLotItemsFullOffersInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferToTradeGetLotItemsFullOffersInfo(params: ParticipantOfferToTradeGetLotItemsFullOffersInfo$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfLotItemsParticipantOffersInfoDtoOf> {
    return this.participantOfferToTradeGetLotItemsFullOffersInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfLotItemsParticipantOffersInfoDtoOf>): ApiMarketJsonResultOfLotItemsParticipantOffersInfoDtoOf => r.body)
    );
  }

  /** Path part for operation `participantOfferToTradeGetExternalLotItemsFullOffersInfo()` */
  static readonly ParticipantOfferToTradeGetExternalLotItemsFullOffersInfoPath = '/market/api/v1/offerToTrade/{tradeId}/participant-offers/external/full-info';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferToTradeGetExternalLotItemsFullOffersInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferToTradeGetExternalLotItemsFullOffersInfo$Response(params: ParticipantOfferToTradeGetExternalLotItemsFullOffersInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfExternalLotItemsParticipantOffersInfoDtoOf>> {
    return participantOfferToTradeGetExternalLotItemsFullOffersInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferToTradeGetExternalLotItemsFullOffersInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferToTradeGetExternalLotItemsFullOffersInfo(params: ParticipantOfferToTradeGetExternalLotItemsFullOffersInfo$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfExternalLotItemsParticipantOffersInfoDtoOf> {
    return this.participantOfferToTradeGetExternalLotItemsFullOffersInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfExternalLotItemsParticipantOffersInfoDtoOf>): ApiMarketJsonResultOfExternalLotItemsParticipantOffersInfoDtoOf => r.body)
    );
  }

  /** Path part for operation `participantOfferToTradeGetImportByExcelTemplate()` */
  static readonly ParticipantOfferToTradeGetImportByExcelTemplatePath = '/market/api/v1/offerToTrade/participant-offers/excel/import/template';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferToTradeGetImportByExcelTemplate()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferToTradeGetImportByExcelTemplate$Response(params?: ParticipantOfferToTradeGetImportByExcelTemplate$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return participantOfferToTradeGetImportByExcelTemplate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferToTradeGetImportByExcelTemplate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferToTradeGetImportByExcelTemplate(params?: ParticipantOfferToTradeGetImportByExcelTemplate$Params, context?: HttpContext): Observable<string> {
    return this.participantOfferToTradeGetImportByExcelTemplate$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `participantOfferToTradeGetExcelImportTemplateForTrade()` */
  static readonly ParticipantOfferToTradeGetExcelImportTemplateForTradePath = '/market/api/v1/offerToTrade/participant-offers/trade/{tradeId}/excel/import/template';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferToTradeGetExcelImportTemplateForTrade()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferToTradeGetExcelImportTemplateForTrade$Response(params: ParticipantOfferToTradeGetExcelImportTemplateForTrade$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return participantOfferToTradeGetExcelImportTemplateForTrade(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferToTradeGetExcelImportTemplateForTrade$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferToTradeGetExcelImportTemplateForTrade(params: ParticipantOfferToTradeGetExcelImportTemplateForTrade$Params, context?: HttpContext): Observable<string> {
    return this.participantOfferToTradeGetExcelImportTemplateForTrade$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `participantOfferToTradeImportByExcel()` */
  static readonly ParticipantOfferToTradeImportByExcelPath = '/market/api/v1/offerToTrade/participant-offers/trade/{tradeId}/excel/import/{importFileGuid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferToTradeImportByExcel()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferToTradeImportByExcel$Response(params: ParticipantOfferToTradeImportByExcel$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfImportExcelParticipantOfferToTradeResultAltDto>> {
    return participantOfferToTradeImportByExcel(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferToTradeImportByExcel$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferToTradeImportByExcel(params: ParticipantOfferToTradeImportByExcel$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfImportExcelParticipantOfferToTradeResultAltDto> {
    return this.participantOfferToTradeImportByExcel$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfImportExcelParticipantOfferToTradeResultAltDto>): ApiMarketJsonResultOfImportExcelParticipantOfferToTradeResultAltDto => r.body)
    );
  }

  /** Path part for operation `participantOfferToTradeGetSuitableParticipantOffersExcelReport()` */
  static readonly ParticipantOfferToTradeGetSuitableParticipantOffersExcelReportPath = '/market/api/v1/offerToTrade/{tradeId}/participant-offers/suitable/report/excel';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferToTradeGetSuitableParticipantOffersExcelReport()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferToTradeGetSuitableParticipantOffersExcelReport$Response(params: ParticipantOfferToTradeGetSuitableParticipantOffersExcelReport$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return participantOfferToTradeGetSuitableParticipantOffersExcelReport(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferToTradeGetSuitableParticipantOffersExcelReport$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferToTradeGetSuitableParticipantOffersExcelReport(params: ParticipantOfferToTradeGetSuitableParticipantOffersExcelReport$Params, context?: HttpContext): Observable<Blob> {
    return this.participantOfferToTradeGetSuitableParticipantOffersExcelReport$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `participantOfferToTradeGetTradeLotSpecificationsImportByExcelTemplate()` */
  static readonly ParticipantOfferToTradeGetTradeLotSpecificationsImportByExcelTemplatePath = '/market/api/v1/offerToTrade/{tradeId}/participant-offers/excel/import/specifications/template';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferToTradeGetTradeLotSpecificationsImportByExcelTemplate()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferToTradeGetTradeLotSpecificationsImportByExcelTemplate$Response(params: ParticipantOfferToTradeGetTradeLotSpecificationsImportByExcelTemplate$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfGuidAltDto>> {
    return participantOfferToTradeGetTradeLotSpecificationsImportByExcelTemplate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferToTradeGetTradeLotSpecificationsImportByExcelTemplate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferToTradeGetTradeLotSpecificationsImportByExcelTemplate(params: ParticipantOfferToTradeGetTradeLotSpecificationsImportByExcelTemplate$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfGuidAltDto> {
    return this.participantOfferToTradeGetTradeLotSpecificationsImportByExcelTemplate$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfGuidAltDto>): ApiMarketJsonResultOfGuidAltDto => r.body)
    );
  }

  /** Path part for operation `participantOfferToTradeImportTradeLotApplicationSpecificationsFromExcel()` */
  static readonly ParticipantOfferToTradeImportTradeLotApplicationSpecificationsFromExcelPath = '/market/api/v1/offerToTrade/{tradeId}/participant-offers/excel/import/specifications/{fileGuid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferToTradeImportTradeLotApplicationSpecificationsFromExcel()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferToTradeImportTradeLotApplicationSpecificationsFromExcel$Response(params: ParticipantOfferToTradeImportTradeLotApplicationSpecificationsFromExcel$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfImportExcelApplicationSpecificationsResultAltDto>> {
    return participantOfferToTradeImportTradeLotApplicationSpecificationsFromExcel(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferToTradeImportTradeLotApplicationSpecificationsFromExcel$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferToTradeImportTradeLotApplicationSpecificationsFromExcel(params: ParticipantOfferToTradeImportTradeLotApplicationSpecificationsFromExcel$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfImportExcelApplicationSpecificationsResultAltDto> {
    return this.participantOfferToTradeImportTradeLotApplicationSpecificationsFromExcel$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfImportExcelApplicationSpecificationsResultAltDto>): ApiMarketJsonResultOfImportExcelApplicationSpecificationsResultAltDto => r.body)
    );
  }

}
