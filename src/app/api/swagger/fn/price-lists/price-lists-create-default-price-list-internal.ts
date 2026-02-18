/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiGetOrCreateDefaultPriceListRequestAltDto } from '../../models/api-get-or-create-default-price-list-request';

export interface PriceListsCreateDefaultPriceListInternal$Params {
      body?: ApiGetOrCreateDefaultPriceListRequestAltDto | null
}

export function priceListsCreateDefaultPriceListInternal(http: HttpClient, rootUrl: string, params?: PriceListsCreateDefaultPriceListInternal$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
  const rb = new RequestBuilder(rootUrl, priceListsCreateDefaultPriceListInternal.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
    })
  );
}

priceListsCreateDefaultPriceListInternal.PATH = '/bla-bla-vla/priceLists/get-or-create';
