/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiAdditionalAgreementHashToSignDto } from '../../models/api-additional-agreement-hash-to-sign-dto';
import { ApiGetDataToSignAdditionalAgreementDto } from '../../models/api-get-data-to-sign-additional-agreement-dto';

export interface AdditionalAgreementGetDataToSign$Params {
      body?: ApiGetDataToSignAdditionalAgreementDto | null
}

export function additionalAgreementGetDataToSign(http: HttpClient, rootUrl: string, params?: AdditionalAgreementGetDataToSign$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiAdditionalAgreementHashToSignDto>> {
  const rb = new RequestBuilder(rootUrl, additionalAgreementGetDataToSign.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiAdditionalAgreementHashToSignDto>;
    })
  );
}

additionalAgreementGetDataToSign.PATH = '/bla-bla-vla/AdditionalAgreement/DataToSign';
