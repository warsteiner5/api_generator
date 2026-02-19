/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiAvailableVatTypeEnum } from '../../models/api-available-vat-type-enum';
import { ApiMarketJsonResultOfDecimalAltDto } from '../../models/api-market-json-result-of-decimal';

export interface VatGetPriceApplyVat$Params {
  price: number;
  rate: ApiAvailableVatTypeEnum;
  getPriceWithTax: boolean;
}

export function vatGetPriceApplyVat(http: HttpClient, rootUrl: string, params: VatGetPriceApplyVat$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDecimalAltDto>> {
  const rb = new RequestBuilder(rootUrl, vatGetPriceApplyVat.PATH, 'get');
  if (params) {
    rb.path('price', params.price, {});
    rb.path('rate', params.rate, {});
    rb.path('getPriceWithTax', params.getPriceWithTax, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfDecimalAltDto>;
    })
  );
}

vatGetPriceApplyVat.PATH = '/market/api/v1/vat/{rate}/price/{price}/include/{getPriceWithTax}';
