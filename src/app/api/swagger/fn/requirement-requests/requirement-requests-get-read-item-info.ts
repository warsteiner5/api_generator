/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfDictionaryOfIntegerAndListOfReadItemInfo } from '../../models/api-market-json-result-of-dictionary-of-integer-and-list-of-read-item-info';

export interface RequirementRequestsGetReadItemInfo$Params {
  requirementRequestId: number;
  itemId: number;
}

export function requirementRequestsGetReadItemInfo(http: HttpClient, rootUrl: string, params: RequirementRequestsGetReadItemInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDictionaryOfIntegerAndListOfReadItemInfo>> {
  const rb = new RequestBuilder(rootUrl, requirementRequestsGetReadItemInfo.PATH, 'get');
  if (params) {
    rb.path('requirementRequestId', params.requirementRequestId, {});
    rb.path('itemId', params.itemId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfDictionaryOfIntegerAndListOfReadItemInfo>;
    })
  );
}

requirementRequestsGetReadItemInfo.PATH = '/bla-bla-vla/RequirementRequests/{requirementRequestId}/chat/{itemId}/who';
