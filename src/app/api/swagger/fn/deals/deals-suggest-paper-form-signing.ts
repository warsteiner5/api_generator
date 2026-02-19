/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiDealInfoRequestDto } from '../../models/api-deal-info-request-dto';
import { ApiMarketJsonResultOfBooleanAltDto } from '../../models/api-market-json-result-of-boolean';

export interface DealsSuggestPaperFormSigning$Params {
      body?: ApiDealInfoRequestDto | null
}

export function dealsSuggestPaperFormSigning(http: HttpClient, rootUrl: string, params?: DealsSuggestPaperFormSigning$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
  const rb = new RequestBuilder(rootUrl, dealsSuggestPaperFormSigning.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>;
    })
  );
}

dealsSuggestPaperFormSigning.PATH = '/market/api/v1/deals/participants/paper_form/suggest';
