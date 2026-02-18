/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { itemCalculateSum } from '../fn/item/item-calculate-sum';
import { ItemCalculateSum$Params } from '../fn/item/item-calculate-sum';
import { ApiMarketJsonResultOfDecimal } from '../models/api-market-json-result-of-decimal';

@Injectable({ providedIn: 'root' })
export class ItemApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `itemCalculateSum()` */
  static readonly ItemCalculateSumPath = '/bla-bla-vla/item/sum';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `itemCalculateSum()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  itemCalculateSum$Response(params?: ItemCalculateSum$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDecimal>> {
    return itemCalculateSum(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `itemCalculateSum$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  itemCalculateSum(params?: ItemCalculateSum$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfDecimal> {
    return this.itemCalculateSum$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfDecimal>): ApiMarketJsonResultOfDecimal => r.body)
    );
  }

}
