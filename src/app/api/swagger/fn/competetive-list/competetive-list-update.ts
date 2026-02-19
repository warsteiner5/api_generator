/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiCompetitiveListItemForViewDto } from '../../models/api-competitive-list-item-for-view-dto';
import { ApiMarketJsonResultOfIntegerAltDto } from '../../models/api-market-json-result-of-integer';

export interface CompetetiveListUpdate$Params {
  competitiveListId: number;
      body?: ApiCompetitiveListItemForViewDto | null
}

export function competetiveListUpdate(http: HttpClient, rootUrl: string, params: CompetetiveListUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
  const rb = new RequestBuilder(rootUrl, competetiveListUpdate.PATH, 'post');
  if (params) {
    rb.path('competitiveListId', params.competitiveListId, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>;
    })
  );
}

competetiveListUpdate.PATH = '/market/api/v1/competetivelist/{competitiveListId}/Update';
