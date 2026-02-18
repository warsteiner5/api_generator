/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiDiscussionFileDto } from '../models/api-discussion-file-dto';
import { ApiMarketJsonResultOfBoolean } from '../models/api-market-json-result-of-boolean';
import { ApiMarketJsonResultOfDictionaryOfIntegerAndListOfReadItemInfo } from '../models/api-market-json-result-of-dictionary-of-integer-and-list-of-read-item-info';
import { ApiMarketJsonResultOfDiscussionDto } from '../models/api-market-json-result-of-discussion-dto';
import { ApiMarketJsonResultOfDiscussionItemDto } from '../models/api-market-json-result-of-discussion-item-dto';
import { ApiMarketJsonResultOfEquivalentTableDto } from '../models/api-market-json-result-of-equivalent-table-dto';
import { ApiMarketJsonResultOfInteger } from '../models/api-market-json-result-of-integer';
import { ApiMarketJsonResultOfListOfCharacteristicDto } from '../models/api-market-json-result-of-list-of-characteristic-dto';
import { ApiMarketJsonResultOfListOfCompetitiveListMinPriceDto } from '../models/api-market-json-result-of-list-of-competitive-list-min-price-dto';
import { ApiMarketJsonResultOfListOfDiscussionDto } from '../models/api-market-json-result-of-list-of-discussion-dto';
import { ApiMarketJsonResultOfListOfDiscussionItemDto } from '../models/api-market-json-result-of-list-of-discussion-item-dto';
import { ApiMarketJsonResultOfListOfIdName } from '../models/api-market-json-result-of-list-of-id-name';
import { ApiMarketJsonResultOfListOfParticipantOfferItemDto } from '../models/api-market-json-result-of-list-of-participant-offer-item-dto';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfRequirementRequestsSearchResultDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-requirement-requests-search-result-dto';
import { ApiMarketJsonResultOfMemoryStream } from '../models/api-market-json-result-of-memory-stream';
import { ApiMarketJsonResultOfOffersTableDto } from '../models/api-market-json-result-of-offers-table-dto';
import { ApiMarketJsonResultOfRequirementRequestForViewDto } from '../models/api-market-json-result-of-requirement-request-for-view-dto';
import { requirementRequestsAddChatMessage } from '../fn/requirement-requests/requirement-requests-add-chat-message';
import { RequirementRequestsAddChatMessage$Params } from '../fn/requirement-requests/requirement-requests-add-chat-message';
import { requirementRequestsApproveRequirementRequestCharacteristic } from '../fn/requirement-requests/requirement-requests-approve-requirement-request-characteristic';
import { RequirementRequestsApproveRequirementRequestCharacteristic$Params } from '../fn/requirement-requests/requirement-requests-approve-requirement-request-characteristic';
import { requirementRequestsCancelRequirementRequest } from '../fn/requirement-requests/requirement-requests-cancel-requirement-request';
import { RequirementRequestsCancelRequirementRequest$Params } from '../fn/requirement-requests/requirement-requests-cancel-requirement-request';
import { requirementRequestsCanUpdate } from '../fn/requirement-requests/requirement-requests-can-update';
import { RequirementRequestsCanUpdate$Params } from '../fn/requirement-requests/requirement-requests-can-update';
import { requirementRequestsCreateEquivalentTable } from '../fn/requirement-requests/requirement-requests-create-equivalent-table';
import { RequirementRequestsCreateEquivalentTable$Params } from '../fn/requirement-requests/requirement-requests-create-equivalent-table';
import { requirementRequestsDownloadComparisonProtocol } from '../fn/requirement-requests/requirement-requests-download-comparison-protocol';
import { RequirementRequestsDownloadComparisonProtocol$Params } from '../fn/requirement-requests/requirement-requests-download-comparison-protocol';
import { requirementRequestsDownloadComparisonProtocolForCompetitiveList } from '../fn/requirement-requests/requirement-requests-download-comparison-protocol-for-competitive-list';
import { RequirementRequestsDownloadComparisonProtocolForCompetitiveList$Params } from '../fn/requirement-requests/requirement-requests-download-comparison-protocol-for-competitive-list';
import { requirementRequestsDownloadEquivalentTable } from '../fn/requirement-requests/requirement-requests-download-equivalent-table';
import { RequirementRequestsDownloadEquivalentTable$Params } from '../fn/requirement-requests/requirement-requests-download-equivalent-table';
import { requirementRequestsGetCharacteristics } from '../fn/requirement-requests/requirement-requests-get-characteristics';
import { RequirementRequestsGetCharacteristics$Params } from '../fn/requirement-requests/requirement-requests-get-characteristics';
import { requirementRequestsGetChat } from '../fn/requirement-requests/requirement-requests-get-chat';
import { RequirementRequestsGetChat$Params } from '../fn/requirement-requests/requirement-requests-get-chat';
import { requirementRequestsGetChatFiles } from '../fn/requirement-requests/requirement-requests-get-chat-files';
import { RequirementRequestsGetChatFiles$Params } from '../fn/requirement-requests/requirement-requests-get-chat-files';
import { requirementRequestsGetChatItems } from '../fn/requirement-requests/requirement-requests-get-chat-items';
import { RequirementRequestsGetChatItems$Params } from '../fn/requirement-requests/requirement-requests-get-chat-items';
import { requirementRequestsGetChats } from '../fn/requirement-requests/requirement-requests-get-chats';
import { RequirementRequestsGetChats$Params } from '../fn/requirement-requests/requirement-requests-get-chats';
import { requirementRequestsGetCompetitiveListMinPrices } from '../fn/requirement-requests/requirement-requests-get-competitive-list-min-prices';
import { RequirementRequestsGetCompetitiveListMinPrices$Params } from '../fn/requirement-requests/requirement-requests-get-competitive-list-min-prices';
import { requirementRequestsGetEquivalentTable } from '../fn/requirement-requests/requirement-requests-get-equivalent-table';
import { RequirementRequestsGetEquivalentTable$Params } from '../fn/requirement-requests/requirement-requests-get-equivalent-table';
import { requirementRequestsGetForView } from '../fn/requirement-requests/requirement-requests-get-for-view';
import { RequirementRequestsGetForView$Params } from '../fn/requirement-requests/requirement-requests-get-for-view';
import { requirementRequestsGetLastChatItems } from '../fn/requirement-requests/requirement-requests-get-last-chat-items';
import { RequirementRequestsGetLastChatItems$Params } from '../fn/requirement-requests/requirement-requests-get-last-chat-items';
import { requirementRequestsGetPriceLists } from '../fn/requirement-requests/requirement-requests-get-price-lists';
import { RequirementRequestsGetPriceLists$Params } from '../fn/requirement-requests/requirement-requests-get-price-lists';
import { requirementRequestsGetReadItemInfo } from '../fn/requirement-requests/requirement-requests-get-read-item-info';
import { RequirementRequestsGetReadItemInfo$Params } from '../fn/requirement-requests/requirement-requests-get-read-item-info';
import { requirementRequestsGetRequirementRequestCharacteristicTableByFilter } from '../fn/requirement-requests/requirement-requests-get-requirement-request-characteristic-table-by-filter';
import { RequirementRequestsGetRequirementRequestCharacteristicTableByFilter$Params } from '../fn/requirement-requests/requirement-requests-get-requirement-request-characteristic-table-by-filter';
import { requirementRequestsGetRequirementRequestsByOffer } from '../fn/requirement-requests/requirement-requests-get-requirement-requests-by-offer';
import { RequirementRequestsGetRequirementRequestsByOffer$Params } from '../fn/requirement-requests/requirement-requests-get-requirement-requests-by-offer';
import { requirementRequestsGetUnreadItems } from '../fn/requirement-requests/requirement-requests-get-unread-items';
import { RequirementRequestsGetUnreadItems$Params } from '../fn/requirement-requests/requirement-requests-get-unread-items';
import { requirementRequestsGetUnreadItemsCount } from '../fn/requirement-requests/requirement-requests-get-unread-items-count';
import { RequirementRequestsGetUnreadItemsCount$Params } from '../fn/requirement-requests/requirement-requests-get-unread-items-count';
import { ApiRequirementRequestShortInfoDto } from '../models/api-requirement-request-short-info-dto';
import { requirementRequestsIsEquivalentTableExist } from '../fn/requirement-requests/requirement-requests-is-equivalent-table-exist';
import { RequirementRequestsIsEquivalentTableExist$Params } from '../fn/requirement-requests/requirement-requests-is-equivalent-table-exist';
import { requirementRequestsPublicSearch } from '../fn/requirement-requests/requirement-requests-public-search';
import { RequirementRequestsPublicSearch$Params } from '../fn/requirement-requests/requirement-requests-public-search';
import { requirementRequestsPublish } from '../fn/requirement-requests/requirement-requests-publish';
import { RequirementRequestsPublish$Params } from '../fn/requirement-requests/requirement-requests-publish';
import { requirementRequestsReadAllItemsFromId } from '../fn/requirement-requests/requirement-requests-read-all-items-from-id';
import { RequirementRequestsReadAllItemsFromId$Params } from '../fn/requirement-requests/requirement-requests-read-all-items-from-id';
import { requirementRequestsReadChatItemByIds } from '../fn/requirement-requests/requirement-requests-read-chat-item-by-ids';
import { RequirementRequestsReadChatItemByIds$Params } from '../fn/requirement-requests/requirement-requests-read-chat-item-by-ids';
import { requirementRequestsRejectRequirementRequestCharacteristic } from '../fn/requirement-requests/requirement-requests-reject-requirement-request-characteristic';
import { RequirementRequestsRejectRequirementRequestCharacteristic$Params } from '../fn/requirement-requests/requirement-requests-reject-requirement-request-characteristic';
import { requirementRequestsSaveAsDraft } from '../fn/requirement-requests/requirement-requests-save-as-draft';
import { RequirementRequestsSaveAsDraft$Params } from '../fn/requirement-requests/requirement-requests-save-as-draft';
import { requirementRequestsSearch } from '../fn/requirement-requests/requirement-requests-search';
import { RequirementRequestsSearch$Params } from '../fn/requirement-requests/requirement-requests-search';
import { requirementRequestsUpdateEquivalentTable } from '../fn/requirement-requests/requirement-requests-update-equivalent-table';
import { RequirementRequestsUpdateEquivalentTable$Params } from '../fn/requirement-requests/requirement-requests-update-equivalent-table';
import { requirementRequestsUpdateRequirementRequestStates } from '../fn/requirement-requests/requirement-requests-update-requirement-request-states';
import { RequirementRequestsUpdateRequirementRequestStates$Params } from '../fn/requirement-requests/requirement-requests-update-requirement-request-states';

@Injectable({ providedIn: 'root' })
export class RequirementRequestsApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `requirementRequestsGetRequirementRequestCharacteristicTableByFilter()` */
  static readonly RequirementRequestsGetRequirementRequestCharacteristicTableByFilterPath = '/bla-bla-vla/RequirementRequests/getcharacteristictable';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requirementRequestsGetRequirementRequestCharacteristicTableByFilter()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requirementRequestsGetRequirementRequestCharacteristicTableByFilter$Response(params?: RequirementRequestsGetRequirementRequestCharacteristicTableByFilter$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfOffersTableDto>> {
    return requirementRequestsGetRequirementRequestCharacteristicTableByFilter(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requirementRequestsGetRequirementRequestCharacteristicTableByFilter$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requirementRequestsGetRequirementRequestCharacteristicTableByFilter(params?: RequirementRequestsGetRequirementRequestCharacteristicTableByFilter$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfOffersTableDto> {
    return this.requirementRequestsGetRequirementRequestCharacteristicTableByFilter$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfOffersTableDto>): ApiMarketJsonResultOfOffersTableDto => r.body)
    );
  }

  /** Path part for operation `requirementRequestsSearch()` */
  static readonly RequirementRequestsSearchPath = '/bla-bla-vla/RequirementRequests/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requirementRequestsSearch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requirementRequestsSearch$Response(params?: RequirementRequestsSearch$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfRequirementRequestsSearchResultDto>> {
    return requirementRequestsSearch(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requirementRequestsSearch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requirementRequestsSearch(params?: RequirementRequestsSearch$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfRequirementRequestsSearchResultDto> {
    return this.requirementRequestsSearch$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfRequirementRequestsSearchResultDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfRequirementRequestsSearchResultDto => r.body)
    );
  }

  /** Path part for operation `requirementRequestsPublicSearch()` */
  static readonly RequirementRequestsPublicSearchPath = '/bla-bla-vla/RequirementRequests/PublicSearch';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requirementRequestsPublicSearch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requirementRequestsPublicSearch$Response(params?: RequirementRequestsPublicSearch$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfRequirementRequestsSearchResultDto>> {
    return requirementRequestsPublicSearch(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requirementRequestsPublicSearch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requirementRequestsPublicSearch(params?: RequirementRequestsPublicSearch$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfRequirementRequestsSearchResultDto> {
    return this.requirementRequestsPublicSearch$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfRequirementRequestsSearchResultDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfRequirementRequestsSearchResultDto => r.body)
    );
  }

  /** Path part for operation `requirementRequestsSaveAsDraft()` */
  static readonly RequirementRequestsSaveAsDraftPath = '/bla-bla-vla/RequirementRequests/SaveAsDraft';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requirementRequestsSaveAsDraft()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requirementRequestsSaveAsDraft$Response(params?: RequirementRequestsSaveAsDraft$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfInteger>> {
    return requirementRequestsSaveAsDraft(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requirementRequestsSaveAsDraft$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requirementRequestsSaveAsDraft(params?: RequirementRequestsSaveAsDraft$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfInteger> {
    return this.requirementRequestsSaveAsDraft$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfInteger>): ApiMarketJsonResultOfInteger => r.body)
    );
  }

  /** Path part for operation `requirementRequestsPublish()` */
  static readonly RequirementRequestsPublishPath = '/bla-bla-vla/RequirementRequests/Publish';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requirementRequestsPublish()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requirementRequestsPublish$Response(params?: RequirementRequestsPublish$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfInteger>> {
    return requirementRequestsPublish(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requirementRequestsPublish$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requirementRequestsPublish(params?: RequirementRequestsPublish$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfInteger> {
    return this.requirementRequestsPublish$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfInteger>): ApiMarketJsonResultOfInteger => r.body)
    );
  }

  /** Path part for operation `requirementRequestsCanUpdate()` */
  static readonly RequirementRequestsCanUpdatePath = '/bla-bla-vla/RequirementRequests/{id}/CanUpdate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requirementRequestsCanUpdate()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsCanUpdate$Response(params: RequirementRequestsCanUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
    return requirementRequestsCanUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requirementRequestsCanUpdate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsCanUpdate(params: RequirementRequestsCanUpdate$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBoolean> {
    return this.requirementRequestsCanUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBoolean>): ApiMarketJsonResultOfBoolean => r.body)
    );
  }

  /** Path part for operation `requirementRequestsGetForView()` */
  static readonly RequirementRequestsGetForViewPath = '/bla-bla-vla/RequirementRequests/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requirementRequestsGetForView()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsGetForView$Response(params: RequirementRequestsGetForView$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfRequirementRequestForViewDto>> {
    return requirementRequestsGetForView(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requirementRequestsGetForView$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsGetForView(params: RequirementRequestsGetForView$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfRequirementRequestForViewDto> {
    return this.requirementRequestsGetForView$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfRequirementRequestForViewDto>): ApiMarketJsonResultOfRequirementRequestForViewDto => r.body)
    );
  }

  /** Path part for operation `requirementRequestsCancelRequirementRequest()` */
  static readonly RequirementRequestsCancelRequirementRequestPath = '/bla-bla-vla/RequirementRequests/{id}/Cancel';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requirementRequestsCancelRequirementRequest()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsCancelRequirementRequest$Response(params: RequirementRequestsCancelRequirementRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return requirementRequestsCancelRequirementRequest(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requirementRequestsCancelRequirementRequest$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsCancelRequirementRequest(params: RequirementRequestsCancelRequirementRequest$Params, context?: HttpContext): Observable<Blob> {
    return this.requirementRequestsCancelRequirementRequest$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `requirementRequestsUpdateRequirementRequestStates()` */
  static readonly RequirementRequestsUpdateRequirementRequestStatesPath = '/bla-bla-vla/RequirementRequests/UpdateRequirementRequestStates';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requirementRequestsUpdateRequirementRequestStates()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsUpdateRequirementRequestStates$Response(params?: RequirementRequestsUpdateRequirementRequestStates$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return requirementRequestsUpdateRequirementRequestStates(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requirementRequestsUpdateRequirementRequestStates$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsUpdateRequirementRequestStates(params?: RequirementRequestsUpdateRequirementRequestStates$Params, context?: HttpContext): Observable<Blob> {
    return this.requirementRequestsUpdateRequirementRequestStates$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `requirementRequestsIsEquivalentTableExist()` */
  static readonly RequirementRequestsIsEquivalentTableExistPath = '/bla-bla-vla/RequirementRequests/{id}/IsEquivalentTableExist';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requirementRequestsIsEquivalentTableExist()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsIsEquivalentTableExist$Response(params: RequirementRequestsIsEquivalentTableExist$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
    return requirementRequestsIsEquivalentTableExist(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requirementRequestsIsEquivalentTableExist$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsIsEquivalentTableExist(params: RequirementRequestsIsEquivalentTableExist$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBoolean> {
    return this.requirementRequestsIsEquivalentTableExist$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBoolean>): ApiMarketJsonResultOfBoolean => r.body)
    );
  }

  /** Path part for operation `requirementRequestsCreateEquivalentTable()` */
  static readonly RequirementRequestsCreateEquivalentTablePath = '/bla-bla-vla/RequirementRequests/{id}/CreateEquivalentTable';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requirementRequestsCreateEquivalentTable()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsCreateEquivalentTable$Response(params: RequirementRequestsCreateEquivalentTable$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
    return requirementRequestsCreateEquivalentTable(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requirementRequestsCreateEquivalentTable$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsCreateEquivalentTable(params: RequirementRequestsCreateEquivalentTable$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBoolean> {
    return this.requirementRequestsCreateEquivalentTable$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBoolean>): ApiMarketJsonResultOfBoolean => r.body)
    );
  }

  /** Path part for operation `requirementRequestsUpdateEquivalentTable()` */
  static readonly RequirementRequestsUpdateEquivalentTablePath = '/bla-bla-vla/RequirementRequests/{id}/UpdateEquivalentTable';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requirementRequestsUpdateEquivalentTable()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsUpdateEquivalentTable$Response(params: RequirementRequestsUpdateEquivalentTable$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
    return requirementRequestsUpdateEquivalentTable(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requirementRequestsUpdateEquivalentTable$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsUpdateEquivalentTable(params: RequirementRequestsUpdateEquivalentTable$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBoolean> {
    return this.requirementRequestsUpdateEquivalentTable$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBoolean>): ApiMarketJsonResultOfBoolean => r.body)
    );
  }

  /** Path part for operation `requirementRequestsGetEquivalentTable()` */
  static readonly RequirementRequestsGetEquivalentTablePath = '/bla-bla-vla/RequirementRequests/{id}/GetEquivalentTable';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requirementRequestsGetEquivalentTable()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsGetEquivalentTable$Response(params: RequirementRequestsGetEquivalentTable$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfEquivalentTableDto>> {
    return requirementRequestsGetEquivalentTable(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requirementRequestsGetEquivalentTable$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsGetEquivalentTable(params: RequirementRequestsGetEquivalentTable$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfEquivalentTableDto> {
    return this.requirementRequestsGetEquivalentTable$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfEquivalentTableDto>): ApiMarketJsonResultOfEquivalentTableDto => r.body)
    );
  }

  /** Path part for operation `requirementRequestsDownloadEquivalentTable()` */
  static readonly RequirementRequestsDownloadEquivalentTablePath = '/bla-bla-vla/RequirementRequests/{id}/DownloadEquivalentTable';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requirementRequestsDownloadEquivalentTable()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsDownloadEquivalentTable$Response(params: RequirementRequestsDownloadEquivalentTable$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMemoryStream>> {
    return requirementRequestsDownloadEquivalentTable(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requirementRequestsDownloadEquivalentTable$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsDownloadEquivalentTable(params: RequirementRequestsDownloadEquivalentTable$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMemoryStream> {
    return this.requirementRequestsDownloadEquivalentTable$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMemoryStream>): ApiMarketJsonResultOfMemoryStream => r.body)
    );
  }

  /** Path part for operation `requirementRequestsDownloadComparisonProtocol()` */
  static readonly RequirementRequestsDownloadComparisonProtocolPath = '/bla-bla-vla/RequirementRequests/{id}/DownloadComparisonProtocol';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requirementRequestsDownloadComparisonProtocol()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsDownloadComparisonProtocol$Response(params: RequirementRequestsDownloadComparisonProtocol$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMemoryStream>> {
    return requirementRequestsDownloadComparisonProtocol(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requirementRequestsDownloadComparisonProtocol$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsDownloadComparisonProtocol(params: RequirementRequestsDownloadComparisonProtocol$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMemoryStream> {
    return this.requirementRequestsDownloadComparisonProtocol$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMemoryStream>): ApiMarketJsonResultOfMemoryStream => r.body)
    );
  }

  /** Path part for operation `requirementRequestsDownloadComparisonProtocolForCompetitiveList()` */
  static readonly RequirementRequestsDownloadComparisonProtocolForCompetitiveListPath = '/bla-bla-vla/RequirementRequests/{id}/CompetitiveList/{competitiveListId}/DownloadComparisonProtocolForCompetitiveList';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requirementRequestsDownloadComparisonProtocolForCompetitiveList()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsDownloadComparisonProtocolForCompetitiveList$Response(params: RequirementRequestsDownloadComparisonProtocolForCompetitiveList$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMemoryStream>> {
    return requirementRequestsDownloadComparisonProtocolForCompetitiveList(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requirementRequestsDownloadComparisonProtocolForCompetitiveList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsDownloadComparisonProtocolForCompetitiveList(params: RequirementRequestsDownloadComparisonProtocolForCompetitiveList$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMemoryStream> {
    return this.requirementRequestsDownloadComparisonProtocolForCompetitiveList$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMemoryStream>): ApiMarketJsonResultOfMemoryStream => r.body)
    );
  }

  /** Path part for operation `requirementRequestsGetPriceLists()` */
  static readonly RequirementRequestsGetPriceListsPath = '/bla-bla-vla/RequirementRequests/getpriceLists/{requirementRequestId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requirementRequestsGetPriceLists()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsGetPriceLists$Response(params: RequirementRequestsGetPriceLists$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfParticipantOfferItemDto>> {
    return requirementRequestsGetPriceLists(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requirementRequestsGetPriceLists$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsGetPriceLists(params: RequirementRequestsGetPriceLists$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfParticipantOfferItemDto> {
    return this.requirementRequestsGetPriceLists$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfParticipantOfferItemDto>): ApiMarketJsonResultOfListOfParticipantOfferItemDto => r.body)
    );
  }

  /** Path part for operation `requirementRequestsApproveRequirementRequestCharacteristic()` */
  static readonly RequirementRequestsApproveRequirementRequestCharacteristicPath = '/bla-bla-vla/RequirementRequests/approve_requirement_request_characteristic/{characteristicId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requirementRequestsApproveRequirementRequestCharacteristic()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsApproveRequirementRequestCharacteristic$Response(params: RequirementRequestsApproveRequirementRequestCharacteristic$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return requirementRequestsApproveRequirementRequestCharacteristic(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requirementRequestsApproveRequirementRequestCharacteristic$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsApproveRequirementRequestCharacteristic(params: RequirementRequestsApproveRequirementRequestCharacteristic$Params, context?: HttpContext): Observable<Blob> {
    return this.requirementRequestsApproveRequirementRequestCharacteristic$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `requirementRequestsRejectRequirementRequestCharacteristic()` */
  static readonly RequirementRequestsRejectRequirementRequestCharacteristicPath = '/bla-bla-vla/RequirementRequests/reject_requirement_request_characteristic/{characteristicId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requirementRequestsRejectRequirementRequestCharacteristic()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsRejectRequirementRequestCharacteristic$Response(params: RequirementRequestsRejectRequirementRequestCharacteristic$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return requirementRequestsRejectRequirementRequestCharacteristic(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requirementRequestsRejectRequirementRequestCharacteristic$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsRejectRequirementRequestCharacteristic(params: RequirementRequestsRejectRequirementRequestCharacteristic$Params, context?: HttpContext): Observable<Blob> {
    return this.requirementRequestsRejectRequirementRequestCharacteristic$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `requirementRequestsGetCharacteristics()` */
  static readonly RequirementRequestsGetCharacteristicsPath = '/bla-bla-vla/RequirementRequests/get_characteristics/{characteristicIds}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requirementRequestsGetCharacteristics()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsGetCharacteristics$Response(params: RequirementRequestsGetCharacteristics$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfCharacteristicDto>> {
    return requirementRequestsGetCharacteristics(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requirementRequestsGetCharacteristics$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsGetCharacteristics(params: RequirementRequestsGetCharacteristics$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfCharacteristicDto> {
    return this.requirementRequestsGetCharacteristics$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfCharacteristicDto>): ApiMarketJsonResultOfListOfCharacteristicDto => r.body)
    );
  }

  /** Path part for operation `requirementRequestsGetChat()` */
  static readonly RequirementRequestsGetChatPath = '/bla-bla-vla/RequirementRequests/{requirementRequestId}/chat/{chatId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requirementRequestsGetChat()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsGetChat$Response(params: RequirementRequestsGetChat$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDiscussionDto>> {
    return requirementRequestsGetChat(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requirementRequestsGetChat$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsGetChat(params: RequirementRequestsGetChat$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfDiscussionDto> {
    return this.requirementRequestsGetChat$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfDiscussionDto>): ApiMarketJsonResultOfDiscussionDto => r.body)
    );
  }

  /** Path part for operation `requirementRequestsAddChatMessage()` */
  static readonly RequirementRequestsAddChatMessagePath = '/bla-bla-vla/RequirementRequests/{requirementRequestId}/chat/{chatId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requirementRequestsAddChatMessage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requirementRequestsAddChatMessage$Response(params: RequirementRequestsAddChatMessage$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDiscussionItemDto>> {
    return requirementRequestsAddChatMessage(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requirementRequestsAddChatMessage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requirementRequestsAddChatMessage(params: RequirementRequestsAddChatMessage$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfDiscussionItemDto> {
    return this.requirementRequestsAddChatMessage$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfDiscussionItemDto>): ApiMarketJsonResultOfDiscussionItemDto => r.body)
    );
  }

  /** Path part for operation `requirementRequestsGetChatItems()` */
  static readonly RequirementRequestsGetChatItemsPath = '/bla-bla-vla/RequirementRequests/{requirementRequestId}/chat/{chatId}/read/items';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requirementRequestsGetChatItems()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requirementRequestsGetChatItems$Response(params: RequirementRequestsGetChatItems$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfDiscussionDto>> {
    return requirementRequestsGetChatItems(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requirementRequestsGetChatItems$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requirementRequestsGetChatItems(params: RequirementRequestsGetChatItems$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfDiscussionDto> {
    return this.requirementRequestsGetChatItems$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfDiscussionDto>): ApiMarketJsonResultOfListOfDiscussionDto => r.body)
    );
  }

  /** Path part for operation `requirementRequestsGetReadItemInfo()` */
  static readonly RequirementRequestsGetReadItemInfoPath = '/bla-bla-vla/RequirementRequests/{requirementRequestId}/chat/{itemId}/who';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requirementRequestsGetReadItemInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsGetReadItemInfo$Response(params: RequirementRequestsGetReadItemInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDictionaryOfIntegerAndListOfReadItemInfo>> {
    return requirementRequestsGetReadItemInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requirementRequestsGetReadItemInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsGetReadItemInfo(params: RequirementRequestsGetReadItemInfo$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfDictionaryOfIntegerAndListOfReadItemInfo> {
    return this.requirementRequestsGetReadItemInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfDictionaryOfIntegerAndListOfReadItemInfo>): ApiMarketJsonResultOfDictionaryOfIntegerAndListOfReadItemInfo => r.body)
    );
  }

  /** Path part for operation `requirementRequestsGetUnreadItems()` */
  static readonly RequirementRequestsGetUnreadItemsPath = '/bla-bla-vla/RequirementRequests/{requirementRequestId}/chat/{chatId}/unread/items';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requirementRequestsGetUnreadItems()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsGetUnreadItems$Response(params: RequirementRequestsGetUnreadItems$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfDiscussionItemDto>> {
    return requirementRequestsGetUnreadItems(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requirementRequestsGetUnreadItems$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsGetUnreadItems(params: RequirementRequestsGetUnreadItems$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfDiscussionItemDto> {
    return this.requirementRequestsGetUnreadItems$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfDiscussionItemDto>): ApiMarketJsonResultOfListOfDiscussionItemDto => r.body)
    );
  }

  /** Path part for operation `requirementRequestsGetUnreadItemsCount()` */
  static readonly RequirementRequestsGetUnreadItemsCountPath = '/bla-bla-vla/RequirementRequests/{requirementRequestId}/chat/{chatId}/unread/count';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requirementRequestsGetUnreadItemsCount()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsGetUnreadItemsCount$Response(params: RequirementRequestsGetUnreadItemsCount$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfInteger>> {
    return requirementRequestsGetUnreadItemsCount(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requirementRequestsGetUnreadItemsCount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsGetUnreadItemsCount(params: RequirementRequestsGetUnreadItemsCount$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfInteger> {
    return this.requirementRequestsGetUnreadItemsCount$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfInteger>): ApiMarketJsonResultOfInteger => r.body)
    );
  }

  /** Path part for operation `requirementRequestsReadChatItemByIds()` */
  static readonly RequirementRequestsReadChatItemByIdsPath = '/bla-bla-vla/RequirementRequests/{requirementRequestId}/chat/{chatId}/read';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requirementRequestsReadChatItemByIds()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requirementRequestsReadChatItemByIds$Response(params: RequirementRequestsReadChatItemByIds$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
    return requirementRequestsReadChatItemByIds(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requirementRequestsReadChatItemByIds$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requirementRequestsReadChatItemByIds(params: RequirementRequestsReadChatItemByIds$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBoolean> {
    return this.requirementRequestsReadChatItemByIds$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBoolean>): ApiMarketJsonResultOfBoolean => r.body)
    );
  }

  /** Path part for operation `requirementRequestsReadAllItemsFromId()` */
  static readonly RequirementRequestsReadAllItemsFromIdPath = '/bla-bla-vla/RequirementRequests/{requirementRequestId}/chat/{chatId}/read/{itemId}/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requirementRequestsReadAllItemsFromId()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsReadAllItemsFromId$Response(params: RequirementRequestsReadAllItemsFromId$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
    return requirementRequestsReadAllItemsFromId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requirementRequestsReadAllItemsFromId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsReadAllItemsFromId(params: RequirementRequestsReadAllItemsFromId$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBoolean> {
    return this.requirementRequestsReadAllItemsFromId$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBoolean>): ApiMarketJsonResultOfBoolean => r.body)
    );
  }

  /** Path part for operation `requirementRequestsGetLastChatItems()` */
  static readonly RequirementRequestsGetLastChatItemsPath = '/bla-bla-vla/RequirementRequests/{requirementRequestId}/chat/{chatId}/{lastId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requirementRequestsGetLastChatItems()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsGetLastChatItems$Response(params: RequirementRequestsGetLastChatItems$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDiscussionDto>> {
    return requirementRequestsGetLastChatItems(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requirementRequestsGetLastChatItems$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsGetLastChatItems(params: RequirementRequestsGetLastChatItems$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfDiscussionDto> {
    return this.requirementRequestsGetLastChatItems$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfDiscussionDto>): ApiMarketJsonResultOfDiscussionDto => r.body)
    );
  }

  /** Path part for operation `requirementRequestsGetChats()` */
  static readonly RequirementRequestsGetChatsPath = '/bla-bla-vla/RequirementRequests/{requirementRequestId}/chats';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requirementRequestsGetChats()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsGetChats$Response(params: RequirementRequestsGetChats$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfIdName>> {
    return requirementRequestsGetChats(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requirementRequestsGetChats$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsGetChats(params: RequirementRequestsGetChats$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfIdName> {
    return this.requirementRequestsGetChats$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfIdName>): ApiMarketJsonResultOfListOfIdName => r.body)
    );
  }

  /** Path part for operation `requirementRequestsGetChatFiles()` */
  static readonly RequirementRequestsGetChatFilesPath = '/bla-bla-vla/RequirementRequests/chat/{chatId}/files';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requirementRequestsGetChatFiles()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsGetChatFiles$Response(params: RequirementRequestsGetChatFiles$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ApiDiscussionFileDto>>> {
    return requirementRequestsGetChatFiles(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requirementRequestsGetChatFiles$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsGetChatFiles(params: RequirementRequestsGetChatFiles$Params, context?: HttpContext): Observable<Array<ApiDiscussionFileDto>> {
    return this.requirementRequestsGetChatFiles$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ApiDiscussionFileDto>>): Array<ApiDiscussionFileDto> => r.body)
    );
  }

  /** Path part for operation `requirementRequestsGetCompetitiveListMinPrices()` */
  static readonly RequirementRequestsGetCompetitiveListMinPricesPath = '/bla-bla-vla/RequirementRequests/CompetitiveListMinPrices/{requirementRequestId}/{kladrCode}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requirementRequestsGetCompetitiveListMinPrices()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsGetCompetitiveListMinPrices$Response(params: RequirementRequestsGetCompetitiveListMinPrices$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfCompetitiveListMinPriceDto>> {
    return requirementRequestsGetCompetitiveListMinPrices(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requirementRequestsGetCompetitiveListMinPrices$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsGetCompetitiveListMinPrices(params: RequirementRequestsGetCompetitiveListMinPrices$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfCompetitiveListMinPriceDto> {
    return this.requirementRequestsGetCompetitiveListMinPrices$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfCompetitiveListMinPriceDto>): ApiMarketJsonResultOfListOfCompetitiveListMinPriceDto => r.body)
    );
  }

  /** Path part for operation `requirementRequestsGetRequirementRequestsByOffer()` */
  static readonly RequirementRequestsGetRequirementRequestsByOfferPath = '/bla-bla-vla/RequirementRequests/byOffer/{participantOfferId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requirementRequestsGetRequirementRequestsByOffer()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsGetRequirementRequestsByOffer$Response(params: RequirementRequestsGetRequirementRequestsByOffer$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ApiRequirementRequestShortInfoDto>>> {
    return requirementRequestsGetRequirementRequestsByOffer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requirementRequestsGetRequirementRequestsByOffer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requirementRequestsGetRequirementRequestsByOffer(params: RequirementRequestsGetRequirementRequestsByOffer$Params, context?: HttpContext): Observable<Array<ApiRequirementRequestShortInfoDto>> {
    return this.requirementRequestsGetRequirementRequestsByOffer$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ApiRequirementRequestShortInfoDto>>): Array<ApiRequirementRequestShortInfoDto> => r.body)
    );
  }

}
