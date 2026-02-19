/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiChangeDealFormDto } from '../../models/api-change-deal-form-dto';
import { ApiMarketJsonResultOfLongAltDto } from '../../models/api-market-json-result-of-long';

export interface DealsChangeFormToPaper$Params {
      body?: ApiChangeDealFormDto | null
}

export function dealsChangeFormToPaper(http: HttpClient, rootUrl: string, params?: DealsChangeFormToPaper$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfLongAltDto>> {
  const rb = new RequestBuilder(rootUrl, dealsChangeFormToPaper.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfLongAltDto>;
    })
  );
}

dealsChangeFormToPaper.PATH = '/market/api/v1/deals/customers/paper_form/change';
