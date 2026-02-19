/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfIdNameAltDto } from '../../models/api-market-json-result-of-list-of-id-name';

export interface RequirementRequestsGetChats$Params {
  requirementRequestId: number;
}

export function requirementRequestsGetChats(http: HttpClient, rootUrl: string, params: RequirementRequestsGetChats$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfIdNameAltDto>> {
  const rb = new RequestBuilder(rootUrl, requirementRequestsGetChats.PATH, 'get');
  if (params) {
    rb.path('requirementRequestId', params.requirementRequestId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfIdNameAltDto>;
    })
  );
}

requirementRequestsGetChats.PATH = '/market/api/v1/RequirementRequests/{requirementRequestId}/chats';
