/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiCalculateLotSumRequestAltDto } from '../../models/api-calculate-lot-sum-request';
import { ApiMarketJsonResultOfLotPriceAltDto } from '../../models/api-market-json-result-of-lot-price';

export interface VatCalculateSumApplyVat$Params {
  isPriceWithoutVat: boolean;
      body?: ApiCalculateLotSumRequestAltDto | null
}

export function vatCalculateSumApplyVat(http: HttpClient, rootUrl: string, params: VatCalculateSumApplyVat$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfLotPriceAltDto>> {
  const rb = new RequestBuilder(rootUrl, vatCalculateSumApplyVat.PATH, 'post');
  if (params) {
    rb.path('isPriceWithoutVat', params.isPriceWithoutVat, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfLotPriceAltDto>;
    })
  );
}

vatCalculateSumApplyVat.PATH = '/market/api/v1/vat/sum/{isPriceWithoutVat}';
