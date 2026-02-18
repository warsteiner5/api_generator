/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfIndustryDtoOf } from '../../models/api-market-json-result-of-industry-dto-of';
import { ApiSearchObjectAltDto } from '../../models/api-search-object';

export interface CompanyCatalogGetIndustryGroups$Params {
      body?: ApiSearchObjectAltDto | null
}

export function companyCatalogGetIndustryGroups(http: HttpClient, rootUrl: string, params?: CompanyCatalogGetIndustryGroups$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIndustryDtoOf>> {
  const rb = new RequestBuilder(rootUrl, companyCatalogGetIndustryGroups.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfIndustryDtoOf>;
    })
  );
}

companyCatalogGetIndustryGroups.PATH = '/bla-bla-vla/companies/industry-groups/search';
