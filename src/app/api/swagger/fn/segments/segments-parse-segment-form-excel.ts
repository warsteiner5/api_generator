/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfCharacteristicDto } from '../../models/api-market-json-result-of-list-of-characteristic-dto';

export interface SegmentsParseSegmentFormExcel$Params {
  fileGuid: string | null;
}

export function segmentsParseSegmentFormExcel(http: HttpClient, rootUrl: string, params: SegmentsParseSegmentFormExcel$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfCharacteristicDto>> {
  const rb = new RequestBuilder(rootUrl, segmentsParseSegmentFormExcel.PATH, 'get');
  if (params) {
    rb.query('fileGuid', params.fileGuid, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfCharacteristicDto>;
    })
  );
}

segmentsParseSegmentFormExcel.PATH = '/bla-bla-vla/Segment/ParseSegmentFormExcel';
