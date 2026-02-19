/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfNicRegistryEntryDto } from '../../models/api-market-json-result-of-nic-registry-entry-dto';

export interface NicRegistryGetModelForCreate$Params {
}

export function nicRegistryGetModelForCreate(http: HttpClient, rootUrl: string, params?: NicRegistryGetModelForCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfNicRegistryEntryDto>> {
  const rb = new RequestBuilder(rootUrl, nicRegistryGetModelForCreate.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfNicRegistryEntryDto>;
    })
  );
}

nicRegistryGetModelForCreate.PATH = '/market/api/v1/registry/nic/empty';
