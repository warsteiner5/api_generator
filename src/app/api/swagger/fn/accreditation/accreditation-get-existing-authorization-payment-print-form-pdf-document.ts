/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfNullableGuid } from '../../models/api-market-json-result-of-nullable-guid';

export interface AccreditationGetExistingAuthorizationPaymentPrintFormPdfDocument$Params {
}

export function accreditationGetExistingAuthorizationPaymentPrintFormPdfDocument(http: HttpClient, rootUrl: string, params?: AccreditationGetExistingAuthorizationPaymentPrintFormPdfDocument$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfNullableGuid>> {
  const rb = new RequestBuilder(rootUrl, accreditationGetExistingAuthorizationPaymentPrintFormPdfDocument.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfNullableGuid>;
    })
  );
}

accreditationGetExistingAuthorizationPaymentPrintFormPdfDocument.PATH = '/bla-bla-vla/Accreditation/PrintFormPdfDocument';
