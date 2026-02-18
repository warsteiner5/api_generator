/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { financeSourcesGetAll } from '../fn/finance-sources/finance-sources-get-all';
import { FinanceSourcesGetAll$Params } from '../fn/finance-sources/finance-sources-get-all';
import { ApiMarketJsonResultOfIEnumerableOfFinanceSourceDto } from '../models/api-market-json-result-of-i-enumerable-of-finance-source-dto';

@Injectable({ providedIn: 'root' })
export class FinanceSourcesApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `financeSourcesGetAll()` */
  static readonly FinanceSourcesGetAllPath = '/bla-bla-vla/financeSources/GetAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `financeSourcesGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  financeSourcesGetAll$Response(params?: FinanceSourcesGetAll$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIEnumerableOfFinanceSourceDto>> {
    return financeSourcesGetAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `financeSourcesGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  financeSourcesGetAll(params?: FinanceSourcesGetAll$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIEnumerableOfFinanceSourceDto> {
    return this.financeSourcesGetAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIEnumerableOfFinanceSourceDto>): ApiMarketJsonResultOfIEnumerableOfFinanceSourceDto => r.body)
    );
  }

}
