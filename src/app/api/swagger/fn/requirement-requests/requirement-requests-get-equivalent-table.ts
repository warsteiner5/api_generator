/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfEquivalentTableDto } from '../../models/api-market-json-result-of-equivalent-table-dto';

export interface RequirementRequestsGetEquivalentTable$Params {
  id: number;
}

export function requirementRequestsGetEquivalentTable(http: HttpClient, rootUrl: string, params: RequirementRequestsGetEquivalentTable$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfEquivalentTableDto>> {
  const rb = new RequestBuilder(rootUrl, requirementRequestsGetEquivalentTable.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfEquivalentTableDto>;
    })
  );
}

requirementRequestsGetEquivalentTable.PATH = '/bla-bla-vla/RequirementRequests/{id}/GetEquivalentTable';
