/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiMarketJsonResultOfGuidAltDto } from '../models/api-market-json-result-of-guid';
import { ApiMarketJsonResultOfIntegerAltDto } from '../models/api-market-json-result-of-integer';
import { ApiMarketJsonResultOfIReadOnlyCollectionOfQuotationSessionApplicationShortDto } from '../models/api-market-json-result-of-i-read-only-collection-of-quotation-session-application-short-dto';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfQuotationSessionItemDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-quotation-session-item-dto';
import { ApiMarketJsonResultOfPublishApplicationResultAltDto } from '../models/api-market-json-result-of-publish-application-result';
import { ApiMarketJsonResultOfQuotationSessionAltDto } from '../models/api-market-json-result-of-quotation-session';
import { ApiMarketJsonResultOfQuotationSessionApplicationDetailsDto } from '../models/api-market-json-result-of-quotation-session-application-details-dto';
import { ApiMarketJsonResultOfQuotationSessionImportDetailsResponseAltDto } from '../models/api-market-json-result-of-quotation-session-import-details-response';
import { ApiMarketJsonResultOfQuotationSessionViewDto } from '../models/api-market-json-result-of-quotation-session-view-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { quotationSessionCancel } from '../fn/quotation-session/quotation-session-cancel';
import { QuotationSessionCancel$Params } from '../fn/quotation-session/quotation-session-cancel';
import { quotationSessionCopy } from '../fn/quotation-session/quotation-session-copy';
import { QuotationSessionCopy$Params } from '../fn/quotation-session/quotation-session-copy';
import { quotationSessionCreate } from '../fn/quotation-session/quotation-session-create';
import { QuotationSessionCreate$Params } from '../fn/quotation-session/quotation-session-create';
import { quotationSessionEdit } from '../fn/quotation-session/quotation-session-edit';
import { QuotationSessionEdit$Params } from '../fn/quotation-session/quotation-session-edit';
import { quotationSessionGet } from '../fn/quotation-session/quotation-session-get';
import { QuotationSessionGet$Params } from '../fn/quotation-session/quotation-session-get';
import { quotationSessionGetApplicationDetails } from '../fn/quotation-session/quotation-session-get-application-details';
import { QuotationSessionGetApplicationDetails$Params } from '../fn/quotation-session/quotation-session-get-application-details';
import { quotationSessionGetApplications } from '../fn/quotation-session/quotation-session-get-applications';
import { QuotationSessionGetApplications$Params } from '../fn/quotation-session/quotation-session-get-applications';
import { quotationSessionGetImportTemplateGuidByTenant } from '../fn/quotation-session/quotation-session-get-import-template-guid-by-tenant';
import { QuotationSessionGetImportTemplateGuidByTenant$Params } from '../fn/quotation-session/quotation-session-get-import-template-guid-by-tenant';
import { quotationSessionGetItems } from '../fn/quotation-session/quotation-session-get-items';
import { QuotationSessionGetItems$Params } from '../fn/quotation-session/quotation-session-get-items';
import { quotationSessionImportDetails } from '../fn/quotation-session/quotation-session-import-details';
import { QuotationSessionImportDetails$Params } from '../fn/quotation-session/quotation-session-import-details';
import { quotationSessionInit } from '../fn/quotation-session/quotation-session-init';
import { QuotationSessionInit$Params } from '../fn/quotation-session/quotation-session-init';
import { quotationSessionJoin } from '../fn/quotation-session/quotation-session-join';
import { QuotationSessionJoin$Params } from '../fn/quotation-session/quotation-session-join';
import { quotationSessionSaveAsDraft } from '../fn/quotation-session/quotation-session-save-as-draft';
import { QuotationSessionSaveAsDraft$Params } from '../fn/quotation-session/quotation-session-save-as-draft';
import { quotationSessionSpeedUp } from '../fn/quotation-session/quotation-session-speed-up';
import { QuotationSessionSpeedUp$Params } from '../fn/quotation-session/quotation-session-speed-up';

@Injectable({ providedIn: 'root' })
export class QuotationSessionApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `quotationSessionGetApplications()` */
  static readonly QuotationSessionGetApplicationsPath = '/market/api/v1/quotation-session/{id}/applications/short';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `quotationSessionGetApplications()` instead.
   *
   * This method doesn't expect any request body.
   */
  quotationSessionGetApplications$Response(params: QuotationSessionGetApplications$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfQuotationSessionApplicationShortDto>> {
    return quotationSessionGetApplications(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `quotationSessionGetApplications$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  quotationSessionGetApplications(params: QuotationSessionGetApplications$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIReadOnlyCollectionOfQuotationSessionApplicationShortDto> {
    return this.quotationSessionGetApplications$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfQuotationSessionApplicationShortDto>): ApiMarketJsonResultOfIReadOnlyCollectionOfQuotationSessionApplicationShortDto => r.body)
    );
  }

  /** Path part for operation `quotationSessionGetApplicationDetails()` */
  static readonly QuotationSessionGetApplicationDetailsPath = '/market/api/v1/quotation-session/{id}/applications/{applicationId}/details';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `quotationSessionGetApplicationDetails()` instead.
   *
   * This method doesn't expect any request body.
   */
  quotationSessionGetApplicationDetails$Response(params: QuotationSessionGetApplicationDetails$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfQuotationSessionApplicationDetailsDto>> {
    return quotationSessionGetApplicationDetails(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `quotationSessionGetApplicationDetails$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  quotationSessionGetApplicationDetails(params: QuotationSessionGetApplicationDetails$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfQuotationSessionApplicationDetailsDto> {
    return this.quotationSessionGetApplicationDetails$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfQuotationSessionApplicationDetailsDto>): ApiMarketJsonResultOfQuotationSessionApplicationDetailsDto => r.body)
    );
  }

  /** Path part for operation `quotationSessionInit()` */
  static readonly QuotationSessionInitPath = '/market/api/v1/quotation-session/init';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `quotationSessionInit()` instead.
   *
   * This method doesn't expect any request body.
   */
  quotationSessionInit$Response(params?: QuotationSessionInit$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfQuotationSessionAltDto>> {
    return quotationSessionInit(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `quotationSessionInit$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  quotationSessionInit(params?: QuotationSessionInit$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfQuotationSessionAltDto> {
    return this.quotationSessionInit$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfQuotationSessionAltDto>): ApiMarketJsonResultOfQuotationSessionAltDto => r.body)
    );
  }

  /** Path part for operation `quotationSessionSaveAsDraft()` */
  static readonly QuotationSessionSaveAsDraftPath = '/market/api/v1/quotation-session/draft';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `quotationSessionSaveAsDraft()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  quotationSessionSaveAsDraft$Response(params?: QuotationSessionSaveAsDraft$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
    return quotationSessionSaveAsDraft(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `quotationSessionSaveAsDraft$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  quotationSessionSaveAsDraft(params?: QuotationSessionSaveAsDraft$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIntegerAltDto> {
    return this.quotationSessionSaveAsDraft$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>): ApiMarketJsonResultOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `quotationSessionCreate()` */
  static readonly QuotationSessionCreatePath = '/market/api/v1/quotation-session';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `quotationSessionCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  quotationSessionCreate$Response(params?: QuotationSessionCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
    return quotationSessionCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `quotationSessionCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  quotationSessionCreate(params?: QuotationSessionCreate$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIntegerAltDto> {
    return this.quotationSessionCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>): ApiMarketJsonResultOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `quotationSessionEdit()` */
  static readonly QuotationSessionEditPath = '/market/api/v1/quotation-session/edit/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `quotationSessionEdit()` instead.
   *
   * This method doesn't expect any request body.
   */
  quotationSessionEdit$Response(params: QuotationSessionEdit$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfQuotationSessionAltDto>> {
    return quotationSessionEdit(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `quotationSessionEdit$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  quotationSessionEdit(params: QuotationSessionEdit$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfQuotationSessionAltDto> {
    return this.quotationSessionEdit$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfQuotationSessionAltDto>): ApiMarketJsonResultOfQuotationSessionAltDto => r.body)
    );
  }

  /** Path part for operation `quotationSessionGetImportTemplateGuidByTenant()` */
  static readonly QuotationSessionGetImportTemplateGuidByTenantPath = '/market/api/v1/quotation-session/import-template-guid';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `quotationSessionGetImportTemplateGuidByTenant()` instead.
   *
   * This method doesn't expect any request body.
   */
  quotationSessionGetImportTemplateGuidByTenant$Response(params?: QuotationSessionGetImportTemplateGuidByTenant$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfGuidAltDto>> {
    return quotationSessionGetImportTemplateGuidByTenant(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `quotationSessionGetImportTemplateGuidByTenant$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  quotationSessionGetImportTemplateGuidByTenant(params?: QuotationSessionGetImportTemplateGuidByTenant$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfGuidAltDto> {
    return this.quotationSessionGetImportTemplateGuidByTenant$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfGuidAltDto>): ApiMarketJsonResultOfGuidAltDto => r.body)
    );
  }

  /** Path part for operation `quotationSessionImportDetails()` */
  static readonly QuotationSessionImportDetailsPath = '/market/api/v1/quotation-session/import-details';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `quotationSessionImportDetails()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  quotationSessionImportDetails$Response(params?: QuotationSessionImportDetails$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfQuotationSessionImportDetailsResponseAltDto>> {
    return quotationSessionImportDetails(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `quotationSessionImportDetails$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  quotationSessionImportDetails(params?: QuotationSessionImportDetails$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfQuotationSessionImportDetailsResponseAltDto> {
    return this.quotationSessionImportDetails$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfQuotationSessionImportDetailsResponseAltDto>): ApiMarketJsonResultOfQuotationSessionImportDetailsResponseAltDto => r.body)
    );
  }

  /** Path part for operation `quotationSessionCancel()` */
  static readonly QuotationSessionCancelPath = '/market/api/v1/quotation-session/cancel';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `quotationSessionCancel()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  quotationSessionCancel$Response(params?: QuotationSessionCancel$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return quotationSessionCancel(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `quotationSessionCancel$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  quotationSessionCancel(params?: QuotationSessionCancel$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.quotationSessionCancel$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `quotationSessionJoin()` */
  static readonly QuotationSessionJoinPath = '/market/api/v1/quotation-session/join';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `quotationSessionJoin()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  quotationSessionJoin$Response(params?: QuotationSessionJoin$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfPublishApplicationResultAltDto>> {
    return quotationSessionJoin(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `quotationSessionJoin$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  quotationSessionJoin(params?: QuotationSessionJoin$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfPublishApplicationResultAltDto> {
    return this.quotationSessionJoin$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfPublishApplicationResultAltDto>): ApiMarketJsonResultOfPublishApplicationResultAltDto => r.body)
    );
  }

  /** Path part for operation `quotationSessionGet()` */
  static readonly QuotationSessionGetPath = '/market/api/v1/quotation-session/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `quotationSessionGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  quotationSessionGet$Response(params: QuotationSessionGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfQuotationSessionViewDto>> {
    return quotationSessionGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `quotationSessionGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  quotationSessionGet(params: QuotationSessionGet$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfQuotationSessionViewDto> {
    return this.quotationSessionGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfQuotationSessionViewDto>): ApiMarketJsonResultOfQuotationSessionViewDto => r.body)
    );
  }

  /** Path part for operation `quotationSessionGetItems()` */
  static readonly QuotationSessionGetItemsPath = '/market/api/v1/quotation-session/{id}/items';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `quotationSessionGetItems()` instead.
   *
   * This method doesn't expect any request body.
   */
  quotationSessionGetItems$Response(params: QuotationSessionGetItems$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfQuotationSessionItemDto>> {
    return quotationSessionGetItems(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `quotationSessionGetItems$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  quotationSessionGetItems(params: QuotationSessionGetItems$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfQuotationSessionItemDto> {
    return this.quotationSessionGetItems$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfQuotationSessionItemDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfQuotationSessionItemDto => r.body)
    );
  }

  /** Path part for operation `quotationSessionCopy()` */
  static readonly QuotationSessionCopyPath = '/market/api/v1/quotation-session/{id}/copy';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `quotationSessionCopy()` instead.
   *
   * This method doesn't expect any request body.
   */
  quotationSessionCopy$Response(params: QuotationSessionCopy$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
    return quotationSessionCopy(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `quotationSessionCopy$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  quotationSessionCopy(params: QuotationSessionCopy$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIntegerAltDto> {
    return this.quotationSessionCopy$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>): ApiMarketJsonResultOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `quotationSessionSpeedUp()` */
  static readonly QuotationSessionSpeedUpPath = '/market/api/v1/quotation-session/{id}/speedup';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `quotationSessionSpeedUp()` instead.
   *
   * This method doesn't expect any request body.
   */
  quotationSessionSpeedUp$Response(params: QuotationSessionSpeedUp$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return quotationSessionSpeedUp(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `quotationSessionSpeedUp$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  quotationSessionSpeedUp(params: QuotationSessionSpeedUp$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.quotationSessionSpeedUp$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

}
