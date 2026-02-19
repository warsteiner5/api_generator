/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfSettingsAddedResponseAltDto } from '../../models/api-market-json-result-of-settings-added-response';
import { ApiPriceListSettingsAddDto } from '../../models/api-price-list-settings-add-dto';

export interface PomogatorAddPriceListSettings$Params {
      body?: ApiPriceListSettingsAddDto | null
}

export function pomogatorAddPriceListSettings(http: HttpClient, rootUrl: string, params?: PomogatorAddPriceListSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfSettingsAddedResponseAltDto>> {
  const rb = new RequestBuilder(rootUrl, pomogatorAddPriceListSettings.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfSettingsAddedResponseAltDto>;
    })
  );
}

pomogatorAddPriceListSettings.PATH = '/market/api/v1/pomogator/addPriceListSettings';
