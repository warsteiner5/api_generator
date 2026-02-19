/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { competetiveListAddParticipantOfferToCompetitiveListItem } from '../fn/competetive-list/competetive-list-add-participant-offer-to-competitive-list-item';
import { CompetetiveListAddParticipantOfferToCompetitiveListItem$Params } from '../fn/competetive-list/competetive-list-add-participant-offer-to-competitive-list-item';
import { competetiveListApproveCompetetiveListItem } from '../fn/competetive-list/competetive-list-approve-competetive-list-item';
import { CompetetiveListApproveCompetetiveListItem$Params } from '../fn/competetive-list/competetive-list-approve-competetive-list-item';
import { competetiveListCanAddOrSetParticipantOffer } from '../fn/competetive-list/competetive-list-can-add-or-set-participant-offer';
import { CompetetiveListCanAddOrSetParticipantOffer$Params } from '../fn/competetive-list/competetive-list-can-add-or-set-participant-offer';
import { competetiveListCanPublish } from '../fn/competetive-list/competetive-list-can-publish';
import { CompetetiveListCanPublish$Params } from '../fn/competetive-list/competetive-list-can-publish';
import { competetiveListCanUpdateCompetetiveListItem } from '../fn/competetive-list/competetive-list-can-update-competetive-list-item';
import { CompetetiveListCanUpdateCompetetiveListItem$Params } from '../fn/competetive-list/competetive-list-can-update-competetive-list-item';
import { competetiveListGetAcceptedPriceLists } from '../fn/competetive-list/competetive-list-get-accepted-price-lists';
import { CompetetiveListGetAcceptedPriceLists$Params } from '../fn/competetive-list/competetive-list-get-accepted-price-lists';
import { competetiveListGetAcceptedPriceListsInfo } from '../fn/competetive-list/competetive-list-get-accepted-price-lists-info';
import { CompetetiveListGetAcceptedPriceListsInfo$Params } from '../fn/competetive-list/competetive-list-get-accepted-price-lists-info';
import { competetiveListGetCompetetiveListItemsByFilter } from '../fn/competetive-list/competetive-list-get-competetive-list-items-by-filter';
import { CompetetiveListGetCompetetiveListItemsByFilter$Params } from '../fn/competetive-list/competetive-list-get-competetive-list-items-by-filter';
import { competetiveListGetCompetetiveListItemsById } from '../fn/competetive-list/competetive-list-get-competetive-list-items-by-id';
import { CompetetiveListGetCompetetiveListItemsById$Params } from '../fn/competetive-list/competetive-list-get-competetive-list-items-by-id';
import { competetiveListGetCompetetiveListItemsByRequirementRequestId } from '../fn/competetive-list/competetive-list-get-competetive-list-items-by-requirement-request-id';
import { CompetetiveListGetCompetetiveListItemsByRequirementRequestId$Params } from '../fn/competetive-list/competetive-list-get-competetive-list-items-by-requirement-request-id';
import { competetiveListGetCompetetiveListItemsByTradeId } from '../fn/competetive-list/competetive-list-get-competetive-list-items-by-trade-id';
import { CompetetiveListGetCompetetiveListItemsByTradeId$Params } from '../fn/competetive-list/competetive-list-get-competetive-list-items-by-trade-id';
import { competetiveListGetCompetetiveListItemState } from '../fn/competetive-list/competetive-list-get-competetive-list-item-state';
import { CompetetiveListGetCompetetiveListItemState$Params } from '../fn/competetive-list/competetive-list-get-competetive-list-item-state';
import { competetiveListGetCompetitiveListItemForParticipantOfferTemplate } from '../fn/competetive-list/competetive-list-get-competitive-list-item-for-participant-offer-template';
import { CompetetiveListGetCompetitiveListItemForParticipantOfferTemplate$Params } from '../fn/competetive-list/competetive-list-get-competitive-list-item-for-participant-offer-template';
import { competetiveListGetEquivalentCompetetiveLists } from '../fn/competetive-list/competetive-list-get-equivalent-competetive-lists';
import { CompetetiveListGetEquivalentCompetetiveLists$Params } from '../fn/competetive-list/competetive-list-get-equivalent-competetive-lists';
import { competetiveListPublish } from '../fn/competetive-list/competetive-list-publish';
import { CompetetiveListPublish$Params } from '../fn/competetive-list/competetive-list-publish';
import { competetiveListRejectCompetetiveListItem } from '../fn/competetive-list/competetive-list-reject-competetive-list-item';
import { CompetetiveListRejectCompetetiveListItem$Params } from '../fn/competetive-list/competetive-list-reject-competetive-list-item';
import { competetiveListRejectCompetetiveListItemWithExplain } from '../fn/competetive-list/competetive-list-reject-competetive-list-item-with-explain';
import { CompetetiveListRejectCompetetiveListItemWithExplain$Params } from '../fn/competetive-list/competetive-list-reject-competetive-list-item-with-explain';
import { competetiveListRemoveParticipantOfferFromCompetitiveListItem } from '../fn/competetive-list/competetive-list-remove-participant-offer-from-competitive-list-item';
import { CompetetiveListRemoveParticipantOfferFromCompetitiveListItem$Params } from '../fn/competetive-list/competetive-list-remove-participant-offer-from-competitive-list-item';
import { competetiveListUpdate } from '../fn/competetive-list/competetive-list-update';
import { CompetetiveListUpdate$Params } from '../fn/competetive-list/competetive-list-update';
import { ApiMarketJsonResultOfAcceptedPriceListsExtendedResultAltDto } from '../models/api-market-json-result-of-accepted-price-lists-extended-result';
import { ApiMarketJsonResultOfBooleanAltDto } from '../models/api-market-json-result-of-boolean';
import { ApiMarketJsonResultOfCompetitiveListItemForParticipantOfferTemplateDto } from '../models/api-market-json-result-of-competitive-list-item-for-participant-offer-template-dto';
import { ApiMarketJsonResultOfCompetitiveListItemForViewDto } from '../models/api-market-json-result-of-competitive-list-item-for-view-dto';
import { ApiMarketJsonResultOfCompetitiveListItemStateEnumAltDto } from '../models/api-market-json-result-of-competitive-list-item-state-enum';
import { ApiMarketJsonResultOfIntegerAltDto } from '../models/api-market-json-result-of-integer';
import { ApiMarketJsonResultOfListOfCompetitiveListItemDto } from '../models/api-market-json-result-of-list-of-competitive-list-item-dto';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfAcceptedPriceListInfoDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-accepted-price-list-info-dto';
import { ApiMarketJsonResultOfRequirementRequestOfferPricesInfoDto } from '../models/api-market-json-result-of-requirement-request-offer-prices-info-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';

@Injectable({ providedIn: 'root' })
export class CompetetiveListApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `competetiveListPublish()` */
  static readonly CompetetiveListPublishPath = '/market/api/v1/competetivelist/Publish';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `competetiveListPublish()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  competetiveListPublish$Response(params?: CompetetiveListPublish$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
    return competetiveListPublish(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `competetiveListPublish$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  competetiveListPublish(params?: CompetetiveListPublish$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIntegerAltDto> {
    return this.competetiveListPublish$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>): ApiMarketJsonResultOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `competetiveListCanPublish()` */
  static readonly CompetetiveListCanPublishPath = '/market/api/v1/competetivelist/CanPublish/{requirementRequestId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `competetiveListCanPublish()` instead.
   *
   * This method doesn't expect any request body.
   */
  competetiveListCanPublish$Response(params: CompetetiveListCanPublish$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return competetiveListCanPublish(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `competetiveListCanPublish$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  competetiveListCanPublish(params: CompetetiveListCanPublish$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.competetiveListCanPublish$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `competetiveListCanUpdateCompetetiveListItem()` */
  static readonly CompetetiveListCanUpdateCompetetiveListItemPath = '/market/api/v1/competetivelist/{competitiveListId}/CanUpdate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `competetiveListCanUpdateCompetetiveListItem()` instead.
   *
   * This method doesn't expect any request body.
   */
  competetiveListCanUpdateCompetetiveListItem$Response(params: CompetetiveListCanUpdateCompetetiveListItem$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return competetiveListCanUpdateCompetetiveListItem(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `competetiveListCanUpdateCompetetiveListItem$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  competetiveListCanUpdateCompetetiveListItem(params: CompetetiveListCanUpdateCompetetiveListItem$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.competetiveListCanUpdateCompetetiveListItem$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `competetiveListGetCompetetiveListItemState()` */
  static readonly CompetetiveListGetCompetetiveListItemStatePath = '/market/api/v1/competetivelist/{competitiveListId}/GetState';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `competetiveListGetCompetetiveListItemState()` instead.
   *
   * This method doesn't expect any request body.
   */
  competetiveListGetCompetetiveListItemState$Response(params: CompetetiveListGetCompetetiveListItemState$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfCompetitiveListItemStateEnumAltDto>> {
    return competetiveListGetCompetetiveListItemState(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `competetiveListGetCompetetiveListItemState$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  competetiveListGetCompetetiveListItemState(params: CompetetiveListGetCompetetiveListItemState$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfCompetitiveListItemStateEnumAltDto> {
    return this.competetiveListGetCompetetiveListItemState$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfCompetitiveListItemStateEnumAltDto>): ApiMarketJsonResultOfCompetitiveListItemStateEnumAltDto => r.body)
    );
  }

  /** Path part for operation `competetiveListUpdate()` */
  static readonly CompetetiveListUpdatePath = '/market/api/v1/competetivelist/{competitiveListId}/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `competetiveListUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  competetiveListUpdate$Response(params: CompetetiveListUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
    return competetiveListUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `competetiveListUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  competetiveListUpdate(params: CompetetiveListUpdate$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIntegerAltDto> {
    return this.competetiveListUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>): ApiMarketJsonResultOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `competetiveListGetCompetetiveListItemsById()` */
  static readonly CompetetiveListGetCompetetiveListItemsByIdPath = '/market/api/v1/competetivelist/{competitiveListId}/Get';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `competetiveListGetCompetetiveListItemsById()` instead.
   *
   * This method doesn't expect any request body.
   */
  competetiveListGetCompetetiveListItemsById$Response(params: CompetetiveListGetCompetetiveListItemsById$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfCompetitiveListItemForViewDto>> {
    return competetiveListGetCompetetiveListItemsById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `competetiveListGetCompetetiveListItemsById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  competetiveListGetCompetetiveListItemsById(params: CompetetiveListGetCompetetiveListItemsById$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfCompetitiveListItemForViewDto> {
    return this.competetiveListGetCompetetiveListItemsById$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfCompetitiveListItemForViewDto>): ApiMarketJsonResultOfCompetitiveListItemForViewDto => r.body)
    );
  }

  /** Path part for operation `competetiveListGetCompetetiveListItemsByTradeId()` */
  static readonly CompetetiveListGetCompetetiveListItemsByTradeIdPath = '/market/api/v1/competetivelist/{tradeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `competetiveListGetCompetetiveListItemsByTradeId()` instead.
   *
   * This method doesn't expect any request body.
   */
  competetiveListGetCompetetiveListItemsByTradeId$Response(params: CompetetiveListGetCompetetiveListItemsByTradeId$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfCompetitiveListItemDto>> {
    return competetiveListGetCompetetiveListItemsByTradeId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `competetiveListGetCompetetiveListItemsByTradeId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  competetiveListGetCompetetiveListItemsByTradeId(params: CompetetiveListGetCompetetiveListItemsByTradeId$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfCompetitiveListItemDto> {
    return this.competetiveListGetCompetetiveListItemsByTradeId$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfCompetitiveListItemDto>): ApiMarketJsonResultOfListOfCompetitiveListItemDto => r.body)
    );
  }

  /** Path part for operation `competetiveListGetCompetetiveListItemsByRequirementRequestId()` */
  static readonly CompetetiveListGetCompetetiveListItemsByRequirementRequestIdPath = '/market/api/v1/competetivelist/byRequirementRequestId/{requirementRequestId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `competetiveListGetCompetetiveListItemsByRequirementRequestId()` instead.
   *
   * This method doesn't expect any request body.
   */
  competetiveListGetCompetetiveListItemsByRequirementRequestId$Response(params: CompetetiveListGetCompetetiveListItemsByRequirementRequestId$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfCompetitiveListItemDto>> {
    return competetiveListGetCompetetiveListItemsByRequirementRequestId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `competetiveListGetCompetetiveListItemsByRequirementRequestId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  competetiveListGetCompetetiveListItemsByRequirementRequestId(params: CompetetiveListGetCompetetiveListItemsByRequirementRequestId$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfCompetitiveListItemDto> {
    return this.competetiveListGetCompetetiveListItemsByRequirementRequestId$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfCompetitiveListItemDto>): ApiMarketJsonResultOfListOfCompetitiveListItemDto => r.body)
    );
  }

  /** Path part for operation `competetiveListGetCompetetiveListItemsByFilter()` */
  static readonly CompetetiveListGetCompetetiveListItemsByFilterPath = '/market/api/v1/competetivelist';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `competetiveListGetCompetetiveListItemsByFilter()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  competetiveListGetCompetetiveListItemsByFilter$Response(params?: CompetetiveListGetCompetetiveListItemsByFilter$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfCompetitiveListItemDto>> {
    return competetiveListGetCompetetiveListItemsByFilter(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `competetiveListGetCompetetiveListItemsByFilter$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  competetiveListGetCompetetiveListItemsByFilter(params?: CompetetiveListGetCompetetiveListItemsByFilter$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfCompetitiveListItemDto> {
    return this.competetiveListGetCompetetiveListItemsByFilter$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfCompetitiveListItemDto>): ApiMarketJsonResultOfListOfCompetitiveListItemDto => r.body)
    );
  }

  /** Path part for operation `competetiveListApproveCompetetiveListItem()` */
  static readonly CompetetiveListApproveCompetetiveListItemPath = '/market/api/v1/competetivelist/{id}/approve';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `competetiveListApproveCompetetiveListItem()` instead.
   *
   * This method doesn't expect any request body.
   */
  competetiveListApproveCompetetiveListItem$Response(params: CompetetiveListApproveCompetetiveListItem$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfRequirementRequestOfferPricesInfoDto>> {
    return competetiveListApproveCompetetiveListItem(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `competetiveListApproveCompetetiveListItem$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  competetiveListApproveCompetetiveListItem(params: CompetetiveListApproveCompetetiveListItem$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfRequirementRequestOfferPricesInfoDto> {
    return this.competetiveListApproveCompetetiveListItem$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfRequirementRequestOfferPricesInfoDto>): ApiMarketJsonResultOfRequirementRequestOfferPricesInfoDto => r.body)
    );
  }

  /** Path part for operation `competetiveListRejectCompetetiveListItem()` */
  static readonly CompetetiveListRejectCompetetiveListItemPath = '/market/api/v1/competetivelist/{id}/reject';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `competetiveListRejectCompetetiveListItem()` instead.
   *
   * This method doesn't expect any request body.
   */
  competetiveListRejectCompetetiveListItem$Response(params: CompetetiveListRejectCompetetiveListItem$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return competetiveListRejectCompetetiveListItem(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `competetiveListRejectCompetetiveListItem$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  competetiveListRejectCompetetiveListItem(params: CompetetiveListRejectCompetetiveListItem$Params, context?: HttpContext): Observable<Blob> {
    return this.competetiveListRejectCompetetiveListItem$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `competetiveListRejectCompetetiveListItemWithExplain()` */
  static readonly CompetetiveListRejectCompetetiveListItemWithExplainPath = '/market/api/v1/competetivelist/reject';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `competetiveListRejectCompetetiveListItemWithExplain()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  competetiveListRejectCompetetiveListItemWithExplain$Response(params?: CompetetiveListRejectCompetetiveListItemWithExplain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return competetiveListRejectCompetetiveListItemWithExplain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `competetiveListRejectCompetetiveListItemWithExplain$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  competetiveListRejectCompetetiveListItemWithExplain(params?: CompetetiveListRejectCompetetiveListItemWithExplain$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.competetiveListRejectCompetetiveListItemWithExplain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `competetiveListGetAcceptedPriceLists()` */
  static readonly CompetetiveListGetAcceptedPriceListsPath = '/market/api/v1/competetivelist/acceptedPriceLists';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `competetiveListGetAcceptedPriceLists()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  competetiveListGetAcceptedPriceLists$Response(params?: CompetetiveListGetAcceptedPriceLists$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfAcceptedPriceListInfoDto>> {
    return competetiveListGetAcceptedPriceLists(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `competetiveListGetAcceptedPriceLists$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  competetiveListGetAcceptedPriceLists(params?: CompetetiveListGetAcceptedPriceLists$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfAcceptedPriceListInfoDto> {
    return this.competetiveListGetAcceptedPriceLists$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfAcceptedPriceListInfoDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfAcceptedPriceListInfoDto => r.body)
    );
  }

  /** Path part for operation `competetiveListCanAddOrSetParticipantOffer()` */
  static readonly CompetetiveListCanAddOrSetParticipantOfferPath = '/market/api/v1/competetivelist/{competitiveListId}/CanAddOrSetParticipantOffer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `competetiveListCanAddOrSetParticipantOffer()` instead.
   *
   * This method doesn't expect any request body.
   */
  competetiveListCanAddOrSetParticipantOffer$Response(params: CompetetiveListCanAddOrSetParticipantOffer$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return competetiveListCanAddOrSetParticipantOffer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `competetiveListCanAddOrSetParticipantOffer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  competetiveListCanAddOrSetParticipantOffer(params: CompetetiveListCanAddOrSetParticipantOffer$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.competetiveListCanAddOrSetParticipantOffer$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `competetiveListAddParticipantOfferToCompetitiveListItem()` */
  static readonly CompetetiveListAddParticipantOfferToCompetitiveListItemPath = '/market/api/v1/competetivelist/attachPriceList';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `competetiveListAddParticipantOfferToCompetitiveListItem()` instead.
   *
   * This method doesn't expect any request body.
   */
  competetiveListAddParticipantOfferToCompetitiveListItem$Response(params: CompetetiveListAddParticipantOfferToCompetitiveListItem$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return competetiveListAddParticipantOfferToCompetitiveListItem(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `competetiveListAddParticipantOfferToCompetitiveListItem$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  competetiveListAddParticipantOfferToCompetitiveListItem(params: CompetetiveListAddParticipantOfferToCompetitiveListItem$Params, context?: HttpContext): Observable<Blob> {
    return this.competetiveListAddParticipantOfferToCompetitiveListItem$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `competetiveListRemoveParticipantOfferFromCompetitiveListItem()` */
  static readonly CompetetiveListRemoveParticipantOfferFromCompetitiveListItemPath = '/market/api/v1/competetivelist/detachPriceList';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `competetiveListRemoveParticipantOfferFromCompetitiveListItem()` instead.
   *
   * This method doesn't expect any request body.
   */
  competetiveListRemoveParticipantOfferFromCompetitiveListItem$Response(params: CompetetiveListRemoveParticipantOfferFromCompetitiveListItem$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return competetiveListRemoveParticipantOfferFromCompetitiveListItem(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `competetiveListRemoveParticipantOfferFromCompetitiveListItem$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  competetiveListRemoveParticipantOfferFromCompetitiveListItem(params: CompetetiveListRemoveParticipantOfferFromCompetitiveListItem$Params, context?: HttpContext): Observable<Blob> {
    return this.competetiveListRemoveParticipantOfferFromCompetitiveListItem$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `competetiveListGetEquivalentCompetetiveLists()` */
  static readonly CompetetiveListGetEquivalentCompetetiveListsPath = '/market/api/v1/competetivelist/getEquivalentCompetetiveLists/{requirementRequestId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `competetiveListGetEquivalentCompetetiveLists()` instead.
   *
   * This method doesn't expect any request body.
   */
  competetiveListGetEquivalentCompetetiveLists$Response(params: CompetetiveListGetEquivalentCompetetiveLists$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfCompetitiveListItemDto>> {
    return competetiveListGetEquivalentCompetetiveLists(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `competetiveListGetEquivalentCompetetiveLists$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  competetiveListGetEquivalentCompetetiveLists(params: CompetetiveListGetEquivalentCompetetiveLists$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfCompetitiveListItemDto> {
    return this.competetiveListGetEquivalentCompetetiveLists$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfCompetitiveListItemDto>): ApiMarketJsonResultOfListOfCompetitiveListItemDto => r.body)
    );
  }

  /** Path part for operation `competetiveListGetCompetitiveListItemForParticipantOfferTemplate()` */
  static readonly CompetetiveListGetCompetitiveListItemForParticipantOfferTemplatePath = '/market/api/v1/competetivelist/GetCompetitiveListItemForParticipantOfferTemplate/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `competetiveListGetCompetitiveListItemForParticipantOfferTemplate()` instead.
   *
   * This method doesn't expect any request body.
   */
  competetiveListGetCompetitiveListItemForParticipantOfferTemplate$Response(params: CompetetiveListGetCompetitiveListItemForParticipantOfferTemplate$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfCompetitiveListItemForParticipantOfferTemplateDto>> {
    return competetiveListGetCompetitiveListItemForParticipantOfferTemplate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `competetiveListGetCompetitiveListItemForParticipantOfferTemplate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  competetiveListGetCompetitiveListItemForParticipantOfferTemplate(params: CompetetiveListGetCompetitiveListItemForParticipantOfferTemplate$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfCompetitiveListItemForParticipantOfferTemplateDto> {
    return this.competetiveListGetCompetitiveListItemForParticipantOfferTemplate$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfCompetitiveListItemForParticipantOfferTemplateDto>): ApiMarketJsonResultOfCompetitiveListItemForParticipantOfferTemplateDto => r.body)
    );
  }

  /** Path part for operation `competetiveListGetAcceptedPriceListsInfo()` */
  static readonly CompetetiveListGetAcceptedPriceListsInfoPath = '/market/api/v1/competetivelist/acceptedPriceListsNewFlow';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `competetiveListGetAcceptedPriceListsInfo()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  competetiveListGetAcceptedPriceListsInfo$Response(params?: CompetetiveListGetAcceptedPriceListsInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfAcceptedPriceListsExtendedResultAltDto>> {
    return competetiveListGetAcceptedPriceListsInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `competetiveListGetAcceptedPriceListsInfo$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  competetiveListGetAcceptedPriceListsInfo(params?: CompetetiveListGetAcceptedPriceListsInfo$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfAcceptedPriceListsExtendedResultAltDto> {
    return this.competetiveListGetAcceptedPriceListsInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfAcceptedPriceListsExtendedResultAltDto>): ApiMarketJsonResultOfAcceptedPriceListsExtendedResultAltDto => r.body)
    );
  }

}
