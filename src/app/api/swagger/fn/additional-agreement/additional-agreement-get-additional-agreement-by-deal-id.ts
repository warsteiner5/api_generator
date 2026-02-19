/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiAdditionalAgreementDto } from '../../models/api-additional-agreement-dto';

export interface AdditionalAgreementGetAdditionalAgreementByDealId$Params {
  dealId: number;
}

export function additionalAgreementGetAdditionalAgreementByDealId(http: HttpClient, rootUrl: string, params: AdditionalAgreementGetAdditionalAgreementByDealId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ApiAdditionalAgreementDto>>> {
  const rb = new RequestBuilder(rootUrl, additionalAgreementGetAdditionalAgreementByDealId.PATH, 'get');
  if (params) {
    rb.query('dealId', params.dealId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ApiAdditionalAgreementDto>>;
    })
  );
}

additionalAgreementGetAdditionalAgreementByDealId.PATH = '/api/AdditionalAgreement/GetByDealId';
