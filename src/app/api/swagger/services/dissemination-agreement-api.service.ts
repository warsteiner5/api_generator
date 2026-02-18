/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { disseminationAgreementConfirm } from '../fn/dissemination-agreement/dissemination-agreement-confirm';
import { DisseminationAgreementConfirm$Params } from '../fn/dissemination-agreement/dissemination-agreement-confirm';
import { disseminationAgreementExist } from '../fn/dissemination-agreement/dissemination-agreement-exist';
import { DisseminationAgreementExist$Params } from '../fn/dissemination-agreement/dissemination-agreement-exist';
import { disseminationAgreementGetPdf } from '../fn/dissemination-agreement/dissemination-agreement-get-pdf';
import { DisseminationAgreementGetPdf$Params } from '../fn/dissemination-agreement/dissemination-agreement-get-pdf';

@Injectable({ providedIn: 'root' })
export class DisseminationAgreementApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `disseminationAgreementGetPdf()` */
  static readonly DisseminationAgreementGetPdfPath = '/api/DisseminationAgreement/pdf';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `disseminationAgreementGetPdf()` instead.
   *
   * This method doesn't expect any request body.
   */
  disseminationAgreementGetPdf$Response(params?: DisseminationAgreementGetPdf$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return disseminationAgreementGetPdf(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `disseminationAgreementGetPdf$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  disseminationAgreementGetPdf(params?: DisseminationAgreementGetPdf$Params, context?: HttpContext): Observable<Blob> {
    return this.disseminationAgreementGetPdf$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `disseminationAgreementExist()` */
  static readonly DisseminationAgreementExistPath = '/api/DisseminationAgreement/Exist';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `disseminationAgreementExist()` instead.
   *
   * This method doesn't expect any request body.
   */
  disseminationAgreementExist$Response(params?: DisseminationAgreementExist$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return disseminationAgreementExist(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `disseminationAgreementExist$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  disseminationAgreementExist(params?: DisseminationAgreementExist$Params, context?: HttpContext): Observable<Blob> {
    return this.disseminationAgreementExist$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `disseminationAgreementConfirm()` */
  static readonly DisseminationAgreementConfirmPath = '/api/DisseminationAgreement/Confirm';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `disseminationAgreementConfirm()` instead.
   *
   * This method doesn't expect any request body.
   */
  disseminationAgreementConfirm$Response(params?: DisseminationAgreementConfirm$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return disseminationAgreementConfirm(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `disseminationAgreementConfirm$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  disseminationAgreementConfirm(params?: DisseminationAgreementConfirm$Params, context?: HttpContext): Observable<Blob> {
    return this.disseminationAgreementConfirm$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}
