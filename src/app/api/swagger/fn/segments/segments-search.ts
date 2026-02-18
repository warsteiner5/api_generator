/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfSegmentSearchResultDto } from '../../models/api-market-json-result-of-list-of-segment-search-result-dto';
import { ApiSegmentSearchRequestDto } from '../../models/api-segment-search-request-dto';

export interface SegmentsSearch$Params {
      body?: ApiSegmentSearchRequestDto | null
}

export function segmentsSearch(http: HttpClient, rootUrl: string, params?: SegmentsSearch$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfSegmentSearchResultDto>> {
  const rb = new RequestBuilder(rootUrl, segmentsSearch.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfSegmentSearchResultDto>;
    })
  );
}

segmentsSearch.PATH = '/bla-bla-vla/Segment/Search';
