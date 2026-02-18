/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfIndustryDto } from '../../models/api-market-json-result-of-list-of-industry-dto';

export interface DictionariesGetIndustries$Params {
}

export function dictionariesGetIndustries(http: HttpClient, rootUrl: string, params?: DictionariesGetIndustries$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfIndustryDto>> {
  const rb = new RequestBuilder(rootUrl, dictionariesGetIndustries.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfIndustryDto>;
    })
  );
}

dictionariesGetIndustries.PATH = '/bla-bla-vla/dictionaries/industries';
