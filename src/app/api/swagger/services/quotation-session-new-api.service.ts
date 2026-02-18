/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiMarketJsonResultOfGuid } from '../models/api-market-json-result-of-guid';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfQuotationSessionItemDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-quotation-session-item-dto';
import { ApiMarketJsonResultOfPublishApplicationResult } from '../models/api-market-json-result-of-publish-application-result';
import { ApiMarketJsonResultOfQuotationSession } from '../models/api-market-json-result-of-quotation-session';
import { ApiMarketJsonResultOfQuotationSessionImportDetailsResponse } from '../models/api-market-json-result-of-quotation-session-import-details-response';
import { ApiMarketJsonResultOfQuotationSessionViewDto } from '../models/api-market-json-result-of-quotation-session-view-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { quotationSessionNewCancel } from '../fn/quotation-session-new/quotation-session-new-cancel';
import { QuotationSessionNewCancel$Params } from '../fn/quotation-session-new/quotation-session-new-cancel';
import { quotationSessionNewCreate } from '../fn/quotation-session-new/quotation-session-new-create';
import { QuotationSessionNewCreate$Params } from '../fn/quotation-session-new/quotation-session-new-create';
import { quotationSessionNewEdit } from '../fn/quotation-session-new/quotation-session-new-edit';
import { QuotationSessionNewEdit$Params } from '../fn/quotation-session-new/quotation-session-new-edit';
import { quotationSessionNewGet } from '../fn/quotation-session-new/quotation-session-new-get';
import { QuotationSessionNewGet$Params } from '../fn/quotation-session-new/quotation-session-new-get';
import { quotationSessionNewGetImportTemplateGuidByTenant } from '../fn/quotation-session-new/quotation-session-new-get-import-template-guid-by-tenant';
import { QuotationSessionNewGetImportTemplateGuidByTenant$Params } from '../fn/quotation-session-new/quotation-session-new-get-import-template-guid-by-tenant';
import { quotationSessionNewGetItems } from '../fn/quotation-session-new/quotation-session-new-get-items';
import { QuotationSessionNewGetItems$Params } from '../fn/quotation-session-new/quotation-session-new-get-items';
import { quotationSessionNewImportDetails } from '../fn/quotation-session-new/quotation-session-new-import-details';
import { QuotationSessionNewImportDetails$Params } from '../fn/quotation-session-new/quotation-session-new-import-details';
import { quotationSessionNewInit } from '../fn/quotation-session-new/quotation-session-new-init';
import { QuotationSessionNewInit$Params } from '../fn/quotation-session-new/quotation-session-new-init';
import { quotationSessionNewJoin } from '../fn/quotation-session-new/quotation-session-new-join';
import { QuotationSessionNewJoin$Params } from '../fn/quotation-session-new/quotation-session-new-join';
import { quotationSessionNewSaveAsDraft } from '../fn/quotation-session-new/quotation-session-new-save-as-draft';
import { QuotationSessionNewSaveAsDraft$Params } from '../fn/quotation-session-new/quotation-session-new-save-as-draft';

@Injectable({ providedIn: 'root' })
export class QuotationSessionNewApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `quotationSessionNewInit()` */
  static readonly QuotationSessionNewInitPath = '/bla-bla-vla/quotation-session-new/init';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `quotationSessionNewInit()` instead.
   *
   * This method doesn't expect any request body.
   */
  quotationSessionNewInit$Response(params?: QuotationSessionNewInit$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfQuotationSession>> {
    return quotationSessionNewInit(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `quotationSessionNewInit$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  quotationSessionNewInit(params?: QuotationSessionNewInit$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfQuotationSession> {
    return this.quotationSessionNewInit$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfQuotationSession>): ApiMarketJsonResultOfQuotationSession => r.body)
    );
  }

  /** Path part for operation `quotationSessionNewSaveAsDraft()` */
  static readonly QuotationSessionNewSaveAsDraftPath = '/bla-bla-vla/quotation-session-new/draft';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `quotationSessionNewSaveAsDraft()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  quotationSessionNewSaveAsDraft$Response(params?: QuotationSessionNewSaveAsDraft$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfGuid>> {
    return quotationSessionNewSaveAsDraft(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `quotationSessionNewSaveAsDraft$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  quotationSessionNewSaveAsDraft(params?: QuotationSessionNewSaveAsDraft$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfGuid> {
    return this.quotationSessionNewSaveAsDraft$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfGuid>): ApiMarketJsonResultOfGuid => r.body)
    );
  }

  /** Path part for operation `quotationSessionNewCreate()` */
  static readonly QuotationSessionNewCreatePath = '/bla-bla-vla/quotation-session-new';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `quotationSessionNewCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  quotationSessionNewCreate$Response(params?: QuotationSessionNewCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfGuid>> {
    return quotationSessionNewCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `quotationSessionNewCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  quotationSessionNewCreate(params?: QuotationSessionNewCreate$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfGuid> {
    return this.quotationSessionNewCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfGuid>): ApiMarketJsonResultOfGuid => r.body)
    );
  }

  /** Path part for operation `quotationSessionNewEdit()` */
  static readonly QuotationSessionNewEditPath = '/bla-bla-vla/quotation-session-new/edit/{tradeGuid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `quotationSessionNewEdit()` instead.
   *
   * This method doesn't expect any request body.
   */
  quotationSessionNewEdit$Response(params: QuotationSessionNewEdit$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfQuotationSession>> {
    return quotationSessionNewEdit(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `quotationSessionNewEdit$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  quotationSessionNewEdit(params: QuotationSessionNewEdit$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfQuotationSession> {
    return this.quotationSessionNewEdit$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfQuotationSession>): ApiMarketJsonResultOfQuotationSession => r.body)
    );
  }

  /** Path part for operation `quotationSessionNewGetImportTemplateGuidByTenant()` */
  static readonly QuotationSessionNewGetImportTemplateGuidByTenantPath = '/bla-bla-vla/quotation-session-new/import-template-guid';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `quotationSessionNewGetImportTemplateGuidByTenant()` instead.
   *
   * This method doesn't expect any request body.
   */
  quotationSessionNewGetImportTemplateGuidByTenant$Response(params?: QuotationSessionNewGetImportTemplateGuidByTenant$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfGuid>> {
    return quotationSessionNewGetImportTemplateGuidByTenant(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `quotationSessionNewGetImportTemplateGuidByTenant$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  quotationSessionNewGetImportTemplateGuidByTenant(params?: QuotationSessionNewGetImportTemplateGuidByTenant$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfGuid> {
    return this.quotationSessionNewGetImportTemplateGuidByTenant$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfGuid>): ApiMarketJsonResultOfGuid => r.body)
    );
  }

  /** Path part for operation `quotationSessionNewImportDetails()` */
  static readonly QuotationSessionNewImportDetailsPath = '/bla-bla-vla/quotation-session-new/import-details';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `quotationSessionNewImportDetails()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  quotationSessionNewImportDetails$Response(params?: QuotationSessionNewImportDetails$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfQuotationSessionImportDetailsResponse>> {
    return quotationSessionNewImportDetails(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `quotationSessionNewImportDetails$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  quotationSessionNewImportDetails(params?: QuotationSessionNewImportDetails$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfQuotationSessionImportDetailsResponse> {
    return this.quotationSessionNewImportDetails$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfQuotationSessionImportDetailsResponse>): ApiMarketJsonResultOfQuotationSessionImportDetailsResponse => r.body)
    );
  }

  /** Path part for operation `quotationSessionNewCancel()` */
  static readonly QuotationSessionNewCancelPath = '/bla-bla-vla/quotation-session-new/cancel';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `quotationSessionNewCancel()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  quotationSessionNewCancel$Response(params?: QuotationSessionNewCancel$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return quotationSessionNewCancel(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `quotationSessionNewCancel$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  quotationSessionNewCancel(params?: QuotationSessionNewCancel$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.quotationSessionNewCancel$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `quotationSessionNewJoin()` */
  static readonly QuotationSessionNewJoinPath = '/bla-bla-vla/quotation-session-new/join';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `quotationSessionNewJoin()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  quotationSessionNewJoin$Response(params?: QuotationSessionNewJoin$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfPublishApplicationResult>> {
    return quotationSessionNewJoin(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `quotationSessionNewJoin$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  quotationSessionNewJoin(params?: QuotationSessionNewJoin$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfPublishApplicationResult> {
    return this.quotationSessionNewJoin$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfPublishApplicationResult>): ApiMarketJsonResultOfPublishApplicationResult => r.body)
    );
  }

  /** Path part for operation `quotationSessionNewGet()` */
  static readonly QuotationSessionNewGetPath = '/bla-bla-vla/quotation-session-new/{tradeGuid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `quotationSessionNewGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  quotationSessionNewGet$Response(params: QuotationSessionNewGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfQuotationSessionViewDto>> {
    return quotationSessionNewGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `quotationSessionNewGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  quotationSessionNewGet(params: QuotationSessionNewGet$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfQuotationSessionViewDto> {
    return this.quotationSessionNewGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfQuotationSessionViewDto>): ApiMarketJsonResultOfQuotationSessionViewDto => r.body)
    );
  }

  /** Path part for operation `quotationSessionNewGetItems()` */
  static readonly QuotationSessionNewGetItemsPath = '/bla-bla-vla/quotation-session-new/{tradeGuid}/items';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `quotationSessionNewGetItems()` instead.
   *
   * This method doesn't expect any request body.
   */
  quotationSessionNewGetItems$Response(params: QuotationSessionNewGetItems$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfQuotationSessionItemDto>> {
    return quotationSessionNewGetItems(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `quotationSessionNewGetItems$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  quotationSessionNewGetItems(params: QuotationSessionNewGetItems$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfQuotationSessionItemDto> {
    return this.quotationSessionNewGetItems$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfQuotationSessionItemDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfQuotationSessionItemDto => r.body)
    );
  }

}
