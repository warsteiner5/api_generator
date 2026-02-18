/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfRequirementRequestForViewDto } from '../../models/api-market-json-result-of-requirement-request-for-view-dto';

export interface RequirementRequestsGetForView$Params {
  id: number;
}

export function requirementRequestsGetForView(http: HttpClient, rootUrl: string, params: RequirementRequestsGetForView$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfRequirementRequestForViewDto>> {
  const rb = new RequestBuilder(rootUrl, requirementRequestsGetForView.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfRequirementRequestForViewDto>;
    })
  );
}

requirementRequestsGetForView.PATH = '/bla-bla-vla/RequirementRequests/{id}';
