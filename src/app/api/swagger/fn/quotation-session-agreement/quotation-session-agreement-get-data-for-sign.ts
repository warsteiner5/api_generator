/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfFileInfoForSignDto } from '../../models/api-market-json-result-of-file-info-for-sign-dto';

export interface QuotationSessionAgreementGetDataForSign$Params {
  signatureAlgorithmOid: string | null;
}

export function quotationSessionAgreementGetDataForSign(http: HttpClient, rootUrl: string, params: QuotationSessionAgreementGetDataForSign$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfFileInfoForSignDto>> {
  const rb = new RequestBuilder(rootUrl, quotationSessionAgreementGetDataForSign.PATH, 'get');
  if (params) {
    rb.query('signatureAlgorithmOid', params.signatureAlgorithmOid, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfFileInfoForSignDto>;
    })
  );
}

quotationSessionAgreementGetDataForSign.PATH = '/bla-bla-vla/quotation-session/agreement/sign/data';
