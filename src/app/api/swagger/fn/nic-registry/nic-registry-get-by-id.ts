/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfNicRegistryEntryDto } from '../../models/api-market-json-result-of-nic-registry-entry-dto';

export interface NicRegistryGetById$Params {
  entryId: number;
}

export function nicRegistryGetById(http: HttpClient, rootUrl: string, params: NicRegistryGetById$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfNicRegistryEntryDto>> {
  const rb = new RequestBuilder(rootUrl, nicRegistryGetById.PATH, 'get');
  if (params) {
    rb.path('entryId', params.entryId, {});
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

nicRegistryGetById.PATH = '/bla-bla-vla/registry/nic/{entryId}';
