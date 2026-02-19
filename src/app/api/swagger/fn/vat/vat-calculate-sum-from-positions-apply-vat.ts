/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiLotPositionPricesAltDto } from '../../models/api-lot-position-prices';
import { ApiMarketJsonResultOfLotPriceAltDto } from '../../models/api-market-json-result-of-lot-price';

export interface VatCalculateSumFromPositionsApplyVat$Params {
  isPriceWithoutVat: boolean;
      body?: Array<ApiLotPositionPricesAltDto> | null
}

export function vatCalculateSumFromPositionsApplyVat(http: HttpClient, rootUrl: string, params: VatCalculateSumFromPositionsApplyVat$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfLotPriceAltDto>> {
  const rb = new RequestBuilder(rootUrl, vatCalculateSumFromPositionsApplyVat.PATH, 'post');
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

vatCalculateSumFromPositionsApplyVat.PATH = '/market/api/v1/vat/sum/include/{isPriceWithoutVat}';
