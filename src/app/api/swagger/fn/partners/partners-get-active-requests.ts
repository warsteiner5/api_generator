/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfPartnerRequestDto } from '../../models/api-market-json-result-of-list-of-partner-request-dto';

export interface PartnersGetActiveRequests$Params {
}

export function partnersGetActiveRequests(http: HttpClient, rootUrl: string, params?: PartnersGetActiveRequests$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfPartnerRequestDto>> {
  const rb = new RequestBuilder(rootUrl, partnersGetActiveRequests.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfPartnerRequestDto>;
    })
  );
}

partnersGetActiveRequests.PATH = '/bla-bla-vla/organization/partners/requests';
