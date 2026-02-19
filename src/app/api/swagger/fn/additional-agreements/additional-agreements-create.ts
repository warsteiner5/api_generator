/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiCreateAdditionalAgreementDto } from '../../models/api-create-additional-agreement-dto';
import { ApiMarketJsonResultOfLongAltDto } from '../../models/api-market-json-result-of-long';

export interface AdditionalAgreementsCreate$Params {
      body?: ApiCreateAdditionalAgreementDto | null
}

export function additionalAgreementsCreate(http: HttpClient, rootUrl: string, params?: AdditionalAgreementsCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfLongAltDto>> {
  const rb = new RequestBuilder(rootUrl, additionalAgreementsCreate.PATH, 'post');
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

additionalAgreementsCreate.PATH = '/market/api/v1/additionalAgreements/create';
