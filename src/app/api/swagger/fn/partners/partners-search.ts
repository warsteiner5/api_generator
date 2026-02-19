/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketPaginationResultOfListOfPartnerDto } from '../../models/api-market-json-result-of-market-pagination-result-of-list-of-partner-dto';
import { ApiPartnersFilterAltDto } from '../../models/api-partners-filter';

export interface PartnersSearch$Params {
      body?: ApiPartnersFilterAltDto | null
}

export function partnersSearch(http: HttpClient, rootUrl: string, params?: PartnersSearch$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfPartnerDto>> {
  const rb = new RequestBuilder(rootUrl, partnersSearch.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfPartnerDto>;
    })
  );
}

partnersSearch.PATH = '/market/api/v1/organization/partners/search';
