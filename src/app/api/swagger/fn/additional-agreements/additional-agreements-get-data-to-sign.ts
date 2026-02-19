/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiGetDataToSignAdditionalAgreementDto } from '../../models/api-get-data-to-sign-additional-agreement-dto';
import { ApiMarketJsonResultOfAdditionalAgreementHashToSignDto } from '../../models/api-market-json-result-of-additional-agreement-hash-to-sign-dto';

export interface AdditionalAgreementsGetDataToSign$Params {
      body?: ApiGetDataToSignAdditionalAgreementDto | null
}

export function additionalAgreementsGetDataToSign(http: HttpClient, rootUrl: string, params?: AdditionalAgreementsGetDataToSign$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfAdditionalAgreementHashToSignDto>> {
  const rb = new RequestBuilder(rootUrl, additionalAgreementsGetDataToSign.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfAdditionalAgreementHashToSignDto>;
    })
  );
}

additionalAgreementsGetDataToSign.PATH = '/market/api/v1/additionalAgreements/data-to-sign';
