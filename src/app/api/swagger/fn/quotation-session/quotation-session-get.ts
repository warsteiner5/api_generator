/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfQuotationSessionViewDto } from '../../models/api-market-json-result-of-quotation-session-view-dto';

export interface QuotationSessionGet$Params {
  id: number;
}

export function quotationSessionGet(http: HttpClient, rootUrl: string, params: QuotationSessionGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfQuotationSessionViewDto>> {
  const rb = new RequestBuilder(rootUrl, quotationSessionGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfQuotationSessionViewDto>;
    })
  );
}

quotationSessionGet.PATH = '/market/api/v1/quotation-session/{id}';
