/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfBoolean } from '../../models/api-market-json-result-of-boolean';

export interface RequirementRequestsCanUpdate$Params {
  id: number;
}

export function requirementRequestsCanUpdate(http: HttpClient, rootUrl: string, params: RequirementRequestsCanUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
  const rb = new RequestBuilder(rootUrl, requirementRequestsCanUpdate.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfBoolean>;
    })
  );
}

requirementRequestsCanUpdate.PATH = '/bla-bla-vla/RequirementRequests/{id}/CanUpdate';
