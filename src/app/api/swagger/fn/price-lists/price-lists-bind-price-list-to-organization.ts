/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonVoidResultAltDto } from '../../models/api-market-json-void-result';

export interface PriceListsBindPriceListToOrganization$Params {
  id: number;
  idOrganization: number;
}

export function priceListsBindPriceListToOrganization(http: HttpClient, rootUrl: string, params: PriceListsBindPriceListToOrganization$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, priceListsBindPriceListToOrganization.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('idOrganization', params.idOrganization, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonVoidResultAltDto>;
    })
  );
}

priceListsBindPriceListToOrganization.PATH = '/market/api/v1/priceLists/{id}/bindPriceListToOrganization/{idOrganization}';
