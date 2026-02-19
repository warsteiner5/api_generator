/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { catalogGetItem } from '../fn/catalog/catalog-get-item';
import { CatalogGetItem$Params } from '../fn/catalog/catalog-get-item';
import { catalogGetItemByLatinName } from '../fn/catalog/catalog-get-item-by-latin-name';
import { CatalogGetItemByLatinName$Params } from '../fn/catalog/catalog-get-item-by-latin-name';
import { catalogGetItemsByLevel } from '../fn/catalog/catalog-get-items-by-level';
import { CatalogGetItemsByLevel$Params } from '../fn/catalog/catalog-get-items-by-level';
import { catalogGetItemsByParent } from '../fn/catalog/catalog-get-items-by-parent';
import { CatalogGetItemsByParent$Params } from '../fn/catalog/catalog-get-items-by-parent';
import { catalogGetItemsByParentLatinName } from '../fn/catalog/catalog-get-items-by-parent-latin-name';
import { CatalogGetItemsByParentLatinName$Params } from '../fn/catalog/catalog-get-items-by-parent-latin-name';
import { catalogTransliteAll } from '../fn/catalog/catalog-translite-all';
import { CatalogTransliteAll$Params } from '../fn/catalog/catalog-translite-all';
import { catalogTransliteAllEmpty } from '../fn/catalog/catalog-translite-all-empty';
import { CatalogTransliteAllEmpty$Params } from '../fn/catalog/catalog-translite-all-empty';
import { catalogTransliteCatalogItem } from '../fn/catalog/catalog-translite-catalog-item';
import { CatalogTransliteCatalogItem$Params } from '../fn/catalog/catalog-translite-catalog-item';
import { catalogUploadCatalog } from '../fn/catalog/catalog-upload-catalog';
import { CatalogUploadCatalog$Params } from '../fn/catalog/catalog-upload-catalog';
import { ApiMarketJsonResultOfBooleanAltDto } from '../models/api-market-json-result-of-boolean';
import { ApiMarketJsonResultOfCatalogItemDto } from '../models/api-market-json-result-of-catalog-item-dto';
import { ApiMarketJsonResultOfListOfTreeNodeDto } from '../models/api-market-json-result-of-list-of-tree-node-dto';
import { ApiMarketJsonResultOfStringAltDto } from '../models/api-market-json-result-of-string';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';

@Injectable({ providedIn: 'root' })
export class CatalogApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `catalogGetItemsByParent()` */
  static readonly CatalogGetItemsByParentPath = '/market/api/v1/catalog/items/{parentId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `catalogGetItemsByParent()` instead.
   *
   * This method doesn't expect any request body.
   */
  catalogGetItemsByParent$Response(params: CatalogGetItemsByParent$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfTreeNodeDto>> {
    return catalogGetItemsByParent(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `catalogGetItemsByParent$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  catalogGetItemsByParent(params: CatalogGetItemsByParent$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfTreeNodeDto> {
    return this.catalogGetItemsByParent$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfTreeNodeDto>): ApiMarketJsonResultOfListOfTreeNodeDto => r.body)
    );
  }

  /** Path part for operation `catalogGetItem()` */
  static readonly CatalogGetItemPath = '/market/api/v1/catalog/item/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `catalogGetItem()` instead.
   *
   * This method doesn't expect any request body.
   */
  catalogGetItem$Response(params: CatalogGetItem$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfCatalogItemDto>> {
    return catalogGetItem(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `catalogGetItem$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  catalogGetItem(params: CatalogGetItem$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfCatalogItemDto> {
    return this.catalogGetItem$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfCatalogItemDto>): ApiMarketJsonResultOfCatalogItemDto => r.body)
    );
  }

  /** Path part for operation `catalogGetItemsByParentLatinName()` */
  static readonly CatalogGetItemsByParentLatinNamePath = '/market/api/v1/catalog/items/transliterated/{parentTransliterate}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `catalogGetItemsByParentLatinName()` instead.
   *
   * This method doesn't expect any request body.
   */
  catalogGetItemsByParentLatinName$Response(params: CatalogGetItemsByParentLatinName$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfTreeNodeDto>> {
    return catalogGetItemsByParentLatinName(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `catalogGetItemsByParentLatinName$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  catalogGetItemsByParentLatinName(params: CatalogGetItemsByParentLatinName$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfTreeNodeDto> {
    return this.catalogGetItemsByParentLatinName$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfTreeNodeDto>): ApiMarketJsonResultOfListOfTreeNodeDto => r.body)
    );
  }

  /** Path part for operation `catalogGetItemByLatinName()` */
  static readonly CatalogGetItemByLatinNamePath = '/market/api/v1/catalog/item/transliterated/{transliteratedValue}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `catalogGetItemByLatinName()` instead.
   *
   * This method doesn't expect any request body.
   */
  catalogGetItemByLatinName$Response(params: CatalogGetItemByLatinName$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfCatalogItemDto>> {
    return catalogGetItemByLatinName(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `catalogGetItemByLatinName$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  catalogGetItemByLatinName(params: CatalogGetItemByLatinName$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfCatalogItemDto> {
    return this.catalogGetItemByLatinName$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfCatalogItemDto>): ApiMarketJsonResultOfCatalogItemDto => r.body)
    );
  }

  /** Path part for operation `catalogGetItemsByLevel()` */
  static readonly CatalogGetItemsByLevelPath = '/market/api/v1/catalog/lvl/{level}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `catalogGetItemsByLevel()` instead.
   *
   * This method doesn't expect any request body.
   */
  catalogGetItemsByLevel$Response(params: CatalogGetItemsByLevel$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfTreeNodeDto>> {
    return catalogGetItemsByLevel(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `catalogGetItemsByLevel$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  catalogGetItemsByLevel(params: CatalogGetItemsByLevel$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfTreeNodeDto> {
    return this.catalogGetItemsByLevel$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfTreeNodeDto>): ApiMarketJsonResultOfListOfTreeNodeDto => r.body)
    );
  }

  /** Path part for operation `catalogUploadCatalog()` */
  static readonly CatalogUploadCatalogPath = '/market/api/v1/catalog/uploadCatalog';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `catalogUploadCatalog()` instead.
   *
   * This method doesn't expect any request body.
   */
  catalogUploadCatalog$Response(params?: CatalogUploadCatalog$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return catalogUploadCatalog(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `catalogUploadCatalog$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  catalogUploadCatalog(params?: CatalogUploadCatalog$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.catalogUploadCatalog$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `catalogTransliteCatalogItem()` */
  static readonly CatalogTransliteCatalogItemPath = '/market/api/v1/catalog/translate/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `catalogTransliteCatalogItem()` instead.
   *
   * This method doesn't expect any request body.
   */
  catalogTransliteCatalogItem$Response(params: CatalogTransliteCatalogItem$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfStringAltDto>> {
    return catalogTransliteCatalogItem(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `catalogTransliteCatalogItem$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  catalogTransliteCatalogItem(params: CatalogTransliteCatalogItem$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfStringAltDto> {
    return this.catalogTransliteCatalogItem$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfStringAltDto>): ApiMarketJsonResultOfStringAltDto => r.body)
    );
  }

  /** Path part for operation `catalogTransliteAllEmpty()` */
  static readonly CatalogTransliteAllEmptyPath = '/market/api/v1/catalog/translate/allempty';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `catalogTransliteAllEmpty()` instead.
   *
   * This method doesn't expect any request body.
   */
  catalogTransliteAllEmpty$Response(params?: CatalogTransliteAllEmpty$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return catalogTransliteAllEmpty(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `catalogTransliteAllEmpty$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  catalogTransliteAllEmpty(params?: CatalogTransliteAllEmpty$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.catalogTransliteAllEmpty$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `catalogTransliteAll()` */
  static readonly CatalogTransliteAllPath = '/market/api/v1/catalog/translate/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `catalogTransliteAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  catalogTransliteAll$Response(params?: CatalogTransliteAll$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return catalogTransliteAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `catalogTransliteAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  catalogTransliteAll(params?: CatalogTransliteAll$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.catalogTransliteAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

}
