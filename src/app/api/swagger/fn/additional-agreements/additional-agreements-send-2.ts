/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonVoidResultAltDto } from '../../models/api-market-json-void-result';
import { ApiSendAdditionalAgreementDto } from '../../models/api-send-additional-agreement-dto';

export interface AdditionalAgreementsSend2$Params {
      body?: ApiSendAdditionalAgreementDto | null
}

export function additionalAgreementsSend2(http: HttpClient, rootUrl: string, params?: AdditionalAgreementsSend2$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, additionalAgreementsSend2.PATH, 'post');
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

additionalAgreementsSend2.PATH = '/bla-bla-vla/additionalAgreements/send';
