/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfIReadOnlyCollectionOfQuotationSessionApplicationShortDto } from '../../models/api-market-json-result-of-i-read-only-collection-of-quotation-session-application-short-dto';

export interface QuotationSessionGetApplications$Params {
  id: number;
}

export function quotationSessionGetApplications(http: HttpClient, rootUrl: string, params: QuotationSessionGetApplications$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfQuotationSessionApplicationShortDto>> {
  const rb = new RequestBuilder(rootUrl, quotationSessionGetApplications.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfQuotationSessionApplicationShortDto>;
    })
  );
}

quotationSessionGetApplications.PATH = '/market/api/v1/quotation-session/{id}/applications/short';
