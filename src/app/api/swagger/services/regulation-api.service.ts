/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiMarketJsonResultOfRegulationDocumentTypeViewDto } from '../models/api-market-json-result-of-regulation-document-type-view-dto';
import { ApiMarketJsonResultOfRegulationDocumentTypeViewDtoOf } from '../models/api-market-json-result-of-regulation-document-type-view-dto-of';
import { ApiMarketJsonResultOfRegulationDocumentViewDto } from '../models/api-market-json-result-of-regulation-document-view-dto';
import { ApiMarketJsonResultOfSearchResultOfRegulationDocumentViewDto } from '../models/api-market-json-result-of-search-result-of-regulation-document-view-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { regulationGetDocument } from '../fn/regulation/regulation-get-document';
import { RegulationGetDocument$Params } from '../fn/regulation/regulation-get-document';
import { regulationGetDocumentType } from '../fn/regulation/regulation-get-document-type';
import { RegulationGetDocumentType$Params } from '../fn/regulation/regulation-get-document-type';
import { regulationGetRegulationDocumentsByFilter } from '../fn/regulation/regulation-get-regulation-documents-by-filter';
import { RegulationGetRegulationDocumentsByFilter$Params } from '../fn/regulation/regulation-get-regulation-documents-by-filter';
import { regulationGetRegulationDocumentTypes } from '../fn/regulation/regulation-get-regulation-document-types';
import { RegulationGetRegulationDocumentTypes$Params } from '../fn/regulation/regulation-get-regulation-document-types';
import { regulationHideRegulationDocument } from '../fn/regulation/regulation-hide-regulation-document';
import { RegulationHideRegulationDocument$Params } from '../fn/regulation/regulation-hide-regulation-document';
import { regulationHideRegulationDocumentType } from '../fn/regulation/regulation-hide-regulation-document-type';
import { RegulationHideRegulationDocumentType$Params } from '../fn/regulation/regulation-hide-regulation-document-type';
import { regulationSaveDocument } from '../fn/regulation/regulation-save-document';
import { RegulationSaveDocument$Params } from '../fn/regulation/regulation-save-document';
import { regulationSaveDocumentType } from '../fn/regulation/regulation-save-document-type';
import { RegulationSaveDocumentType$Params } from '../fn/regulation/regulation-save-document-type';

@Injectable({ providedIn: 'root' })
export class RegulationApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `regulationSaveDocument()` */
  static readonly RegulationSaveDocumentPath = '/market/api/v1/regulation/save/document';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `regulationSaveDocument()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  regulationSaveDocument$Response(params?: RegulationSaveDocument$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return regulationSaveDocument(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `regulationSaveDocument$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  regulationSaveDocument(params?: RegulationSaveDocument$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.regulationSaveDocument$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `regulationSaveDocumentType()` */
  static readonly RegulationSaveDocumentTypePath = '/market/api/v1/regulation/save/type';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `regulationSaveDocumentType()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  regulationSaveDocumentType$Response(params?: RegulationSaveDocumentType$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return regulationSaveDocumentType(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `regulationSaveDocumentType$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  regulationSaveDocumentType(params?: RegulationSaveDocumentType$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.regulationSaveDocumentType$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `regulationGetDocument()` */
  static readonly RegulationGetDocumentPath = '/market/api/v1/regulation/{id}/document';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `regulationGetDocument()` instead.
   *
   * This method doesn't expect any request body.
   */
  regulationGetDocument$Response(params: RegulationGetDocument$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfRegulationDocumentViewDto>> {
    return regulationGetDocument(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `regulationGetDocument$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  regulationGetDocument(params: RegulationGetDocument$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfRegulationDocumentViewDto> {
    return this.regulationGetDocument$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfRegulationDocumentViewDto>): ApiMarketJsonResultOfRegulationDocumentViewDto => r.body)
    );
  }

  /** Path part for operation `regulationGetDocumentType()` */
  static readonly RegulationGetDocumentTypePath = '/market/api/v1/regulation/{id}/type';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `regulationGetDocumentType()` instead.
   *
   * This method doesn't expect any request body.
   */
  regulationGetDocumentType$Response(params: RegulationGetDocumentType$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfRegulationDocumentTypeViewDto>> {
    return regulationGetDocumentType(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `regulationGetDocumentType$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  regulationGetDocumentType(params: RegulationGetDocumentType$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfRegulationDocumentTypeViewDto> {
    return this.regulationGetDocumentType$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfRegulationDocumentTypeViewDto>): ApiMarketJsonResultOfRegulationDocumentTypeViewDto => r.body)
    );
  }

  /** Path part for operation `regulationGetRegulationDocumentsByFilter()` */
  static readonly RegulationGetRegulationDocumentsByFilterPath = '/market/api/v1/regulation/documents';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `regulationGetRegulationDocumentsByFilter()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  regulationGetRegulationDocumentsByFilter$Response(params?: RegulationGetRegulationDocumentsByFilter$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfSearchResultOfRegulationDocumentViewDto>> {
    return regulationGetRegulationDocumentsByFilter(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `regulationGetRegulationDocumentsByFilter$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  regulationGetRegulationDocumentsByFilter(params?: RegulationGetRegulationDocumentsByFilter$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfSearchResultOfRegulationDocumentViewDto> {
    return this.regulationGetRegulationDocumentsByFilter$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfSearchResultOfRegulationDocumentViewDto>): ApiMarketJsonResultOfSearchResultOfRegulationDocumentViewDto => r.body)
    );
  }

  /** Path part for operation `regulationGetRegulationDocumentTypes()` */
  static readonly RegulationGetRegulationDocumentTypesPath = '/market/api/v1/regulation/types';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `regulationGetRegulationDocumentTypes()` instead.
   *
   * This method doesn't expect any request body.
   */
  regulationGetRegulationDocumentTypes$Response(params?: RegulationGetRegulationDocumentTypes$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfRegulationDocumentTypeViewDtoOf>> {
    return regulationGetRegulationDocumentTypes(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `regulationGetRegulationDocumentTypes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  regulationGetRegulationDocumentTypes(params?: RegulationGetRegulationDocumentTypes$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfRegulationDocumentTypeViewDtoOf> {
    return this.regulationGetRegulationDocumentTypes$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfRegulationDocumentTypeViewDtoOf>): ApiMarketJsonResultOfRegulationDocumentTypeViewDtoOf => r.body)
    );
  }

  /** Path part for operation `regulationHideRegulationDocument()` */
  static readonly RegulationHideRegulationDocumentPath = '/market/api/v1/regulation/{id}/document/hide';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `regulationHideRegulationDocument()` instead.
   *
   * This method doesn't expect any request body.
   */
  regulationHideRegulationDocument$Response(params: RegulationHideRegulationDocument$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return regulationHideRegulationDocument(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `regulationHideRegulationDocument$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  regulationHideRegulationDocument(params: RegulationHideRegulationDocument$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.regulationHideRegulationDocument$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `regulationHideRegulationDocumentType()` */
  static readonly RegulationHideRegulationDocumentTypePath = '/market/api/v1/regulation/{id}/type/hide';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `regulationHideRegulationDocumentType()` instead.
   *
   * This method doesn't expect any request body.
   */
  regulationHideRegulationDocumentType$Response(params: RegulationHideRegulationDocumentType$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return regulationHideRegulationDocumentType(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `regulationHideRegulationDocumentType$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  regulationHideRegulationDocumentType(params: RegulationHideRegulationDocumentType$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.regulationHideRegulationDocumentType$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

}
