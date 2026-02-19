/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfIReadOnlyCollectionOfIntegerAltDto } from '../../models/api-market-json-result-of-i-read-only-collection-of-integer';

export interface DealsAutoCreateDeals$Params {
  tradeLotId: number;
}

export function dealsAutoCreateDeals(http: HttpClient, rootUrl: string, params: DealsAutoCreateDeals$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfIntegerAltDto>> {
  const rb = new RequestBuilder(rootUrl, dealsAutoCreateDeals.PATH, 'post');
  if (params) {
    rb.path('tradeLotId', params.tradeLotId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfIntegerAltDto>;
    })
  );
}

dealsAutoCreateDeals.PATH = '/market/api/v1/deals/create/lot/{tradeLotId}';
