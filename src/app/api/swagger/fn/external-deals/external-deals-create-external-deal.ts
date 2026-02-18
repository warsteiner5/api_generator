/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiApiResultOfInteger2AltDto } from '../../models/api-api-result-of-integer-2';
import { ApiExternalDealDto } from '../../models/api-external-deal-dto';

export interface ExternalDealsCreateExternalDeal$Params {
      body?: ApiExternalDealDto | null
}

export function externalDealsCreateExternalDeal(http: HttpClient, rootUrl: string, params?: ExternalDealsCreateExternalDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiApiResultOfInteger2AltDto>> {
  const rb = new RequestBuilder(rootUrl, externalDealsCreateExternalDeal.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiApiResultOfInteger2AltDto>;
    })
  );
}

externalDealsCreateExternalDeal.PATH = '/bla-bla-vla/external-deals';
