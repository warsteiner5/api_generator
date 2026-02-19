/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfIndustryDto } from '../../models/api-market-json-result-of-industry-dto';

export interface CompanyCatalogGetIndustry$Params {
  id: string;
}

export function companyCatalogGetIndustry(http: HttpClient, rootUrl: string, params: CompanyCatalogGetIndustry$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIndustryDto>> {
  const rb = new RequestBuilder(rootUrl, companyCatalogGetIndustry.PATH, 'get');
  if (params) {
    rb.query('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfIndustryDto>;
    })
  );
}

companyCatalogGetIndustry.PATH = '/market/api/v1/companies/industries';
