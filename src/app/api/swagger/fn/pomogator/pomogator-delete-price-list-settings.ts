/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonVoidResultAltDto } from '../../models/api-market-json-void-result';
import { ApiPriceListSettingsDeleteDto } from '../../models/api-price-list-settings-delete-dto';

export interface PomogatorDeletePriceListSettings$Params {
      body?: ApiPriceListSettingsDeleteDto | null
}

export function pomogatorDeletePriceListSettings(http: HttpClient, rootUrl: string, params?: PomogatorDeletePriceListSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, pomogatorDeletePriceListSettings.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

pomogatorDeletePriceListSettings.PATH = '/market/api/v1/pomogator/deletePriceListSettings';
