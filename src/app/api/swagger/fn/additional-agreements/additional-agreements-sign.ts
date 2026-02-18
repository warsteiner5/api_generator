/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonVoidResultAltDto } from '../../models/api-market-json-void-result';
import { ApiSignAdditionalAgreementDto } from '../../models/api-sign-additional-agreement-dto';

export interface AdditionalAgreementsSign$Params {
      body?: ApiSignAdditionalAgreementDto | null
}

export function additionalAgreementsSign(http: HttpClient, rootUrl: string, params?: AdditionalAgreementsSign$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, additionalAgreementsSign.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonVoidResultAltDto>;
    })
  );
}

additionalAgreementsSign.PATH = '/bla-bla-vla/additionalAgreements/sign';
