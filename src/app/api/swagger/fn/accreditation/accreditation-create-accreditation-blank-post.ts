/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiCreateAccreditationPaymentPrintFormRequestAltDto } from '../../models/api-create-accreditation-payment-print-form-request';
import { ApiMarketJsonResultOfStringAltDto } from '../../models/api-market-json-result-of-string';

export interface AccreditationCreateAccreditationBlankPost$Params {
      body?: ApiCreateAccreditationPaymentPrintFormRequestAltDto | null
}

export function accreditationCreateAccreditationBlankPost(http: HttpClient, rootUrl: string, params?: AccreditationCreateAccreditationBlankPost$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfStringAltDto>> {
  const rb = new RequestBuilder(rootUrl, accreditationCreateAccreditationBlankPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfStringAltDto>;
    })
  );
}

accreditationCreateAccreditationBlankPost.PATH = '/market/api/v1/Accreditation/CreateAccreditationInvoice';
