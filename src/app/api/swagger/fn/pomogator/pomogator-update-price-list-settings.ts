/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonVoidResultAltDto } from '../../models/api-market-json-void-result';
import { ApiPriceListSettingsUpdateDto } from '../../models/api-price-list-settings-update-dto';

export interface PomogatorUpdatePriceListSettings$Params {
      body?: ApiPriceListSettingsUpdateDto | null
}

export function pomogatorUpdatePriceListSettings(http: HttpClient, rootUrl: string, params?: PomogatorUpdatePriceListSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, pomogatorUpdatePriceListSettings.PATH, 'post');
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

pomogatorUpdatePriceListSettings.PATH = '/market/api/v1/pomogator/updatePriceListSettings';
