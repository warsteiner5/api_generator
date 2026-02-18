/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { supplierFinanceTransitionToRtsTenderPro } from '../fn/supplier-finance/supplier-finance-transition-to-rts-tender-pro';
import { SupplierFinanceTransitionToRtsTenderPro$Params } from '../fn/supplier-finance/supplier-finance-transition-to-rts-tender-pro';

@Injectable({ providedIn: 'root' })
export class SupplierFinanceApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `supplierFinanceTransitionToRtsTenderPro()` */
  static readonly SupplierFinanceTransitionToRtsTenderProPath = '/bla-bla-vla/supplier-finance/redirect/pro';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `supplierFinanceTransitionToRtsTenderPro()` instead.
   *
   * This method doesn't expect any request body.
   */
  supplierFinanceTransitionToRtsTenderPro$Response(params: SupplierFinanceTransitionToRtsTenderPro$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return supplierFinanceTransitionToRtsTenderPro(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `supplierFinanceTransitionToRtsTenderPro$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  supplierFinanceTransitionToRtsTenderPro(params: SupplierFinanceTransitionToRtsTenderPro$Params, context?: HttpContext): Observable<Blob> {
    return this.supplierFinanceTransitionToRtsTenderPro$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}
