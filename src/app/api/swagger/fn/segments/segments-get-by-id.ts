/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfSegmentInfoDto } from '../../models/api-market-json-result-of-segment-info-dto';

export interface SegmentsGetById$Params {
  id: number;
}

export function segmentsGetById(http: HttpClient, rootUrl: string, params: SegmentsGetById$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfSegmentInfoDto>> {
  const rb = new RequestBuilder(rootUrl, segmentsGetById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfSegmentInfoDto>;
    })
  );
}

segmentsGetById.PATH = '/market/api/v1/Segment/{id}';
