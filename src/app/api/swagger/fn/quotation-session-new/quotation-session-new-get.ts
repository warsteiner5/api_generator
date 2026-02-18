/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfQuotationSessionViewDto } from '../../models/api-market-json-result-of-quotation-session-view-dto';

export interface QuotationSessionNewGet$Params {
  tradeGuid: string;
}

export function quotationSessionNewGet(http: HttpClient, rootUrl: string, params: QuotationSessionNewGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfQuotationSessionViewDto>> {
  const rb = new RequestBuilder(rootUrl, quotationSessionNewGet.PATH, 'get');
  if (params) {
    rb.path('tradeGuid', params.tradeGuid, {});
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

quotationSessionNewGet.PATH = '/bla-bla-vla/quotation-session-new/{tradeGuid}';
