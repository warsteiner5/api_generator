/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfSegmentDto } from '../../models/api-market-json-result-of-segment-dto';
import { ApiSegmentSearchRequestDto } from '../../models/api-segment-search-request-dto';

export interface SegmentsGetByName$Params {
      body?: ApiSegmentSearchRequestDto | null
}

export function segmentsGetByName(http: HttpClient, rootUrl: string, params?: SegmentsGetByName$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfSegmentDto>> {
  const rb = new RequestBuilder(rootUrl, segmentsGetByName.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfSegmentDto>;
    })
  );
}

segmentsGetByName.PATH = '/bla-bla-vla/Segment/GetByName';
