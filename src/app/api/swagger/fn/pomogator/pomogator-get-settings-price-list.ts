/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfPriceListItemAltDto } from '../../models/api-market-json-result-of-price-list-item';

export interface PomogatorGetSettingsPriceList$Params {
  id: number;
}

export function pomogatorGetSettingsPriceList(http: HttpClient, rootUrl: string, params: PomogatorGetSettingsPriceList$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfPriceListItemAltDto>> {
  const rb = new RequestBuilder(rootUrl, pomogatorGetSettingsPriceList.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfPriceListItemAltDto>;
    })
  );
}

pomogatorGetSettingsPriceList.PATH = '/market/api/v1/pomogator/settings/price-lists/{id}';
