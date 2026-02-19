/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiMarketJsonResultOfDecimalAltDto } from '../models/api-market-json-result-of-decimal';
import { ApiMarketJsonResultOfLotPriceAltDto } from '../models/api-market-json-result-of-lot-price';
import { vatCalculateSumApplyVat } from '../fn/vat/vat-calculate-sum-apply-vat';
import { VatCalculateSumApplyVat$Params } from '../fn/vat/vat-calculate-sum-apply-vat';
import { vatCalculateSumFromPositionsApplyVat } from '../fn/vat/vat-calculate-sum-from-positions-apply-vat';
import { VatCalculateSumFromPositionsApplyVat$Params } from '../fn/vat/vat-calculate-sum-from-positions-apply-vat';
import { vatGetPriceApplyVat } from '../fn/vat/vat-get-price-apply-vat';
import { VatGetPriceApplyVat$Params } from '../fn/vat/vat-get-price-apply-vat';

@Injectable({ providedIn: 'root' })
export class VatApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `vatGetPriceApplyVat()` */
  static readonly VatGetPriceApplyVatPath = '/market/api/v1/vat/{rate}/price/{price}/include/{getPriceWithTax}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `vatGetPriceApplyVat()` instead.
   *
   * This method doesn't expect any request body.
   */
  vatGetPriceApplyVat$Response(params: VatGetPriceApplyVat$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDecimalAltDto>> {
    return vatGetPriceApplyVat(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `vatGetPriceApplyVat$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  vatGetPriceApplyVat(params: VatGetPriceApplyVat$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfDecimalAltDto> {
    return this.vatGetPriceApplyVat$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfDecimalAltDto>): ApiMarketJsonResultOfDecimalAltDto => r.body)
    );
  }

  /** Path part for operation `vatCalculateSumFromPositionsApplyVat()` */
  static readonly VatCalculateSumFromPositionsApplyVatPath = '/market/api/v1/vat/sum/include/{isPriceWithoutVat}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `vatCalculateSumFromPositionsApplyVat()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  vatCalculateSumFromPositionsApplyVat$Response(params: VatCalculateSumFromPositionsApplyVat$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfLotPriceAltDto>> {
    return vatCalculateSumFromPositionsApplyVat(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `vatCalculateSumFromPositionsApplyVat$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  vatCalculateSumFromPositionsApplyVat(params: VatCalculateSumFromPositionsApplyVat$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfLotPriceAltDto> {
    return this.vatCalculateSumFromPositionsApplyVat$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfLotPriceAltDto>): ApiMarketJsonResultOfLotPriceAltDto => r.body)
    );
  }

  /** Path part for operation `vatCalculateSumApplyVat()` */
  static readonly VatCalculateSumApplyVatPath = '/market/api/v1/vat/sum/{isPriceWithoutVat}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `vatCalculateSumApplyVat()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  vatCalculateSumApplyVat$Response(params: VatCalculateSumApplyVat$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfLotPriceAltDto>> {
    return vatCalculateSumApplyVat(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `vatCalculateSumApplyVat$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  vatCalculateSumApplyVat(params: VatCalculateSumApplyVat$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfLotPriceAltDto> {
    return this.vatCalculateSumApplyVat$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfLotPriceAltDto>): ApiMarketJsonResultOfLotPriceAltDto => r.body)
    );
  }

}
