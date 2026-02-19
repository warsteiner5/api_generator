/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMemoryStreamAltDto } from '../../models/api-market-json-result-of-memory-stream';

export interface RequirementRequestsDownloadComparisonProtocolForCompetitiveList$Params {
  id: number;
  competitiveListId: number;
}

export function requirementRequestsDownloadComparisonProtocolForCompetitiveList(http: HttpClient, rootUrl: string, params: RequirementRequestsDownloadComparisonProtocolForCompetitiveList$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMemoryStreamAltDto>> {
  const rb = new RequestBuilder(rootUrl, requirementRequestsDownloadComparisonProtocolForCompetitiveList.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('competitiveListId', params.competitiveListId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMemoryStreamAltDto>;
    })
  );
}

requirementRequestsDownloadComparisonProtocolForCompetitiveList.PATH = '/market/api/v1/RequirementRequests/{id}/CompetitiveList/{competitiveListId}/DownloadComparisonProtocolForCompetitiveList';
