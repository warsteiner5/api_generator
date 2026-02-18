/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiMarketJsonResultOfSingleSupplierTradeViewDto } from '../models/api-market-json-result-of-single-supplier-trade-view-dto';
import { singleSupplierGet } from '../fn/single-supplier/single-supplier-get';
import { SingleSupplierGet$Params } from '../fn/single-supplier/single-supplier-get';

@Injectable({ providedIn: 'root' })
export class SingleSupplierApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `singleSupplierGet()` */
  static readonly SingleSupplierGetPath = '/bla-bla-vla/single-supplier/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `singleSupplierGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  singleSupplierGet$Response(params: SingleSupplierGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfSingleSupplierTradeViewDto>> {
    return singleSupplierGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `singleSupplierGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  singleSupplierGet(params: SingleSupplierGet$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfSingleSupplierTradeViewDto> {
    return this.singleSupplierGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfSingleSupplierTradeViewDto>): ApiMarketJsonResultOfSingleSupplierTradeViewDto => r.body)
    );
  }

}
