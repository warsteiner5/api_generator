/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiMarketJsonResultOfInteger } from '../models/api-market-json-result-of-integer';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfTagOperatorViewDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-tag-operator-view-dto';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfTagParticipantViewDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-tag-participant-view-dto';
import { ApiMarketJsonResultOfTagOperatorViewDto } from '../models/api-market-json-result-of-tag-operator-view-dto';
import { ApiMarketJsonResultOfTagViewDtoOf } from '../models/api-market-json-result-of-tag-view-dto-of';
import { tagsDeleteTag } from '../fn/tags/tags-delete-tag';
import { TagsDeleteTag$Params } from '../fn/tags/tags-delete-tag';
import { tagsDeleteTagParticipantOfferRule } from '../fn/tags/tags-delete-tag-participant-offer-rule';
import { TagsDeleteTagParticipantOfferRule$Params } from '../fn/tags/tags-delete-tag-participant-offer-rule';
import { tagsDeleteTagParticipantRule } from '../fn/tags/tags-delete-tag-participant-rule';
import { TagsDeleteTagParticipantRule$Params } from '../fn/tags/tags-delete-tag-participant-rule';
import { tagsGetTagForOperator } from '../fn/tags/tags-get-tag-for-operator';
import { TagsGetTagForOperator$Params } from '../fn/tags/tags-get-tag-for-operator';
import { tagsGetTagsForCurrentTenant } from '../fn/tags/tags-get-tags-for-current-tenant';
import { TagsGetTagsForCurrentTenant$Params } from '../fn/tags/tags-get-tags-for-current-tenant';
import { tagsGetTagsForOperator } from '../fn/tags/tags-get-tags-for-operator';
import { TagsGetTagsForOperator$Params } from '../fn/tags/tags-get-tags-for-operator';
import { tagsGetTagsForParticipant } from '../fn/tags/tags-get-tags-for-participant';
import { TagsGetTagsForParticipant$Params } from '../fn/tags/tags-get-tags-for-participant';
import { tagsSaveSettings } from '../fn/tags/tags-save-settings';
import { TagsSaveSettings$Params } from '../fn/tags/tags-save-settings';
import { tagsSaveTag } from '../fn/tags/tags-save-tag';
import { TagsSaveTag$Params } from '../fn/tags/tags-save-tag';
import { tagsSaveTagParticipantOfferRule } from '../fn/tags/tags-save-tag-participant-offer-rule';
import { TagsSaveTagParticipantOfferRule$Params } from '../fn/tags/tags-save-tag-participant-offer-rule';
import { tagsSaveTagParticipantRule } from '../fn/tags/tags-save-tag-participant-rule';
import { TagsSaveTagParticipantRule$Params } from '../fn/tags/tags-save-tag-participant-rule';

@Injectable({ providedIn: 'root' })
export class TagsApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `tagsGetTagsForCurrentTenant()` */
  static readonly TagsGetTagsForCurrentTenantPath = '/bla-bla-vla/tags';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tagsGetTagsForCurrentTenant()` instead.
   *
   * This method doesn't expect any request body.
   */
  tagsGetTagsForCurrentTenant$Response(params?: TagsGetTagsForCurrentTenant$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTagViewDtoOf>> {
    return tagsGetTagsForCurrentTenant(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tagsGetTagsForCurrentTenant$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tagsGetTagsForCurrentTenant(params?: TagsGetTagsForCurrentTenant$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfTagViewDtoOf> {
    return this.tagsGetTagsForCurrentTenant$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfTagViewDtoOf>): ApiMarketJsonResultOfTagViewDtoOf => r.body)
    );
  }

  /** Path part for operation `tagsSaveTag()` */
  static readonly TagsSaveTagPath = '/bla-bla-vla/tags';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tagsSaveTag()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tagsSaveTag$Response(params?: TagsSaveTag$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfInteger>> {
    return tagsSaveTag(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tagsSaveTag$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tagsSaveTag(params?: TagsSaveTag$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfInteger> {
    return this.tagsSaveTag$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfInteger>): ApiMarketJsonResultOfInteger => r.body)
    );
  }

  /** Path part for operation `tagsGetTagsForOperator()` */
  static readonly TagsGetTagsForOperatorPath = '/bla-bla-vla/tags/operator';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tagsGetTagsForOperator()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tagsGetTagsForOperator$Response(params?: TagsGetTagsForOperator$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfTagOperatorViewDto>> {
    return tagsGetTagsForOperator(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tagsGetTagsForOperator$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tagsGetTagsForOperator(params?: TagsGetTagsForOperator$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfTagOperatorViewDto> {
    return this.tagsGetTagsForOperator$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfTagOperatorViewDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfTagOperatorViewDto => r.body)
    );
  }

  /** Path part for operation `tagsGetTagForOperator()` */
  static readonly TagsGetTagForOperatorPath = '/bla-bla-vla/tags/{id}/operator';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tagsGetTagForOperator()` instead.
   *
   * This method doesn't expect any request body.
   */
  tagsGetTagForOperator$Response(params: TagsGetTagForOperator$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTagOperatorViewDto>> {
    return tagsGetTagForOperator(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tagsGetTagForOperator$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tagsGetTagForOperator(params: TagsGetTagForOperator$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfTagOperatorViewDto> {
    return this.tagsGetTagForOperator$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfTagOperatorViewDto>): ApiMarketJsonResultOfTagOperatorViewDto => r.body)
    );
  }

  /** Path part for operation `tagsDeleteTag()` */
  static readonly TagsDeleteTagPath = '/bla-bla-vla/tags/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tagsDeleteTag()` instead.
   *
   * This method doesn't expect any request body.
   */
  tagsDeleteTag$Response(params: TagsDeleteTag$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tagsDeleteTag(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tagsDeleteTag$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tagsDeleteTag(params: TagsDeleteTag$Params, context?: HttpContext): Observable<Blob> {
    return this.tagsDeleteTag$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `tagsSaveTagParticipantRule()` */
  static readonly TagsSaveTagParticipantRulePath = '/bla-bla-vla/tags/participant-rule';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tagsSaveTagParticipantRule()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tagsSaveTagParticipantRule$Response(params?: TagsSaveTagParticipantRule$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return tagsSaveTagParticipantRule(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tagsSaveTagParticipantRule$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tagsSaveTagParticipantRule(params?: TagsSaveTagParticipantRule$Params, context?: HttpContext): Observable<number> {
    return this.tagsSaveTagParticipantRule$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `tagsDeleteTagParticipantRule()` */
  static readonly TagsDeleteTagParticipantRulePath = '/bla-bla-vla/tags/participant-rule/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tagsDeleteTagParticipantRule()` instead.
   *
   * This method doesn't expect any request body.
   */
  tagsDeleteTagParticipantRule$Response(params: TagsDeleteTagParticipantRule$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tagsDeleteTagParticipantRule(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tagsDeleteTagParticipantRule$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tagsDeleteTagParticipantRule(params: TagsDeleteTagParticipantRule$Params, context?: HttpContext): Observable<Blob> {
    return this.tagsDeleteTagParticipantRule$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `tagsSaveTagParticipantOfferRule()` */
  static readonly TagsSaveTagParticipantOfferRulePath = '/bla-bla-vla/tags/participant-offer-rule';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tagsSaveTagParticipantOfferRule()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tagsSaveTagParticipantOfferRule$Response(params?: TagsSaveTagParticipantOfferRule$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return tagsSaveTagParticipantOfferRule(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tagsSaveTagParticipantOfferRule$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tagsSaveTagParticipantOfferRule(params?: TagsSaveTagParticipantOfferRule$Params, context?: HttpContext): Observable<number> {
    return this.tagsSaveTagParticipantOfferRule$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `tagsDeleteTagParticipantOfferRule()` */
  static readonly TagsDeleteTagParticipantOfferRulePath = '/bla-bla-vla/tags/participant-offer-rule/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tagsDeleteTagParticipantOfferRule()` instead.
   *
   * This method doesn't expect any request body.
   */
  tagsDeleteTagParticipantOfferRule$Response(params: TagsDeleteTagParticipantOfferRule$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tagsDeleteTagParticipantOfferRule(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tagsDeleteTagParticipantOfferRule$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tagsDeleteTagParticipantOfferRule(params: TagsDeleteTagParticipantOfferRule$Params, context?: HttpContext): Observable<Blob> {
    return this.tagsDeleteTagParticipantOfferRule$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `tagsGetTagsForParticipant()` */
  static readonly TagsGetTagsForParticipantPath = '/bla-bla-vla/tags/settings';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tagsGetTagsForParticipant()` instead.
   *
   * This method doesn't expect any request body.
   */
  tagsGetTagsForParticipant$Response(params?: TagsGetTagsForParticipant$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfTagParticipantViewDto>> {
    return tagsGetTagsForParticipant(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tagsGetTagsForParticipant$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tagsGetTagsForParticipant(params?: TagsGetTagsForParticipant$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfTagParticipantViewDto> {
    return this.tagsGetTagsForParticipant$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfTagParticipantViewDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfTagParticipantViewDto => r.body)
    );
  }

  /** Path part for operation `tagsSaveSettings()` */
  static readonly TagsSaveSettingsPath = '/bla-bla-vla/tags/settings';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tagsSaveSettings()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tagsSaveSettings$Response(params?: TagsSaveSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tagsSaveSettings(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tagsSaveSettings$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tagsSaveSettings(params?: TagsSaveSettings$Params, context?: HttpContext): Observable<Blob> {
    return this.tagsSaveSettings$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}
