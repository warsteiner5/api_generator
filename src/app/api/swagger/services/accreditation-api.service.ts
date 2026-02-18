/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { accreditationCreateAccreditationBlankGet } from '../fn/accreditation/accreditation-create-accreditation-blank-get';
import { AccreditationCreateAccreditationBlankGet$Params } from '../fn/accreditation/accreditation-create-accreditation-blank-get';
import { accreditationCreateAccreditationBlankPost } from '../fn/accreditation/accreditation-create-accreditation-blank-post';
import { AccreditationCreateAccreditationBlankPost$Params } from '../fn/accreditation/accreditation-create-accreditation-blank-post';
import { accreditationGetExistingAuthorizationPaymentPrintFormPdfDocument } from '../fn/accreditation/accreditation-get-existing-authorization-payment-print-form-pdf-document';
import { AccreditationGetExistingAuthorizationPaymentPrintFormPdfDocument$Params } from '../fn/accreditation/accreditation-get-existing-authorization-payment-print-form-pdf-document';
import { ApiMarketJsonResultOfNullableGuid } from '../models/api-market-json-result-of-nullable-guid';
import { ApiMarketJsonResultOfString } from '../models/api-market-json-result-of-string';

@Injectable({ providedIn: 'root' })
export class AccreditationApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `accreditationCreateAccreditationBlankGet()` */
  static readonly AccreditationCreateAccreditationBlankGetPath = '/bla-bla-vla/Accreditation/CreateAccreditationInvoice/{accountNumber}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accreditationCreateAccreditationBlankGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  accreditationCreateAccreditationBlankGet$Response(params: AccreditationCreateAccreditationBlankGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfString>> {
    return accreditationCreateAccreditationBlankGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accreditationCreateAccreditationBlankGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  accreditationCreateAccreditationBlankGet(params: AccreditationCreateAccreditationBlankGet$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfString> {
    return this.accreditationCreateAccreditationBlankGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfString>): ApiMarketJsonResultOfString => r.body)
    );
  }

  /** Path part for operation `accreditationCreateAccreditationBlankPost()` */
  static readonly AccreditationCreateAccreditationBlankPostPath = '/bla-bla-vla/Accreditation/CreateAccreditationInvoice';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accreditationCreateAccreditationBlankPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accreditationCreateAccreditationBlankPost$Response(params?: AccreditationCreateAccreditationBlankPost$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfString>> {
    return accreditationCreateAccreditationBlankPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accreditationCreateAccreditationBlankPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accreditationCreateAccreditationBlankPost(params?: AccreditationCreateAccreditationBlankPost$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfString> {
    return this.accreditationCreateAccreditationBlankPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfString>): ApiMarketJsonResultOfString => r.body)
    );
  }

  /** Path part for operation `accreditationGetExistingAuthorizationPaymentPrintFormPdfDocument()` */
  static readonly AccreditationGetExistingAuthorizationPaymentPrintFormPdfDocumentPath = '/bla-bla-vla/Accreditation/PrintFormPdfDocument';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accreditationGetExistingAuthorizationPaymentPrintFormPdfDocument()` instead.
   *
   * This method doesn't expect any request body.
   */
  accreditationGetExistingAuthorizationPaymentPrintFormPdfDocument$Response(params?: AccreditationGetExistingAuthorizationPaymentPrintFormPdfDocument$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfNullableGuid>> {
    return accreditationGetExistingAuthorizationPaymentPrintFormPdfDocument(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accreditationGetExistingAuthorizationPaymentPrintFormPdfDocument$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  accreditationGetExistingAuthorizationPaymentPrintFormPdfDocument(params?: AccreditationGetExistingAuthorizationPaymentPrintFormPdfDocument$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfNullableGuid> {
    return this.accreditationGetExistingAuthorizationPaymentPrintFormPdfDocument$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfNullableGuid>): ApiMarketJsonResultOfNullableGuid => r.body)
    );
  }

}
