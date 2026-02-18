/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfRegionDto } from '../../models/api-market-json-result-of-list-of-region-dto';

export interface DictionariesGetRegions$Params {
}

export function dictionariesGetRegions(http: HttpClient, rootUrl: string, params?: DictionariesGetRegions$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfRegionDto>> {
  const rb = new RequestBuilder(rootUrl, dictionariesGetRegions.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfRegionDto>;
    })
  );
}

dictionariesGetRegions.PATH = '/bla-bla-vla/dictionaries/regions';
