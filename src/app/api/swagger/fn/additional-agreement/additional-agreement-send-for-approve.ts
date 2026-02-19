/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiSignatureForAdditionalAgreementDto } from '../../models/api-signature-for-additional-agreement-dto';

export interface AdditionalAgreementSendForApprove$Params {
  id: number;
      body?: ApiSignatureForAdditionalAgreementDto | null
}

export function additionalAgreementSendForApprove(http: HttpClient, rootUrl: string, params: AdditionalAgreementSendForApprove$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, additionalAgreementSendForApprove.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: 'application/octet-stream', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Blob>;
    })
  );
}

additionalAgreementSendForApprove.PATH = '/api/AdditionalAgreement/{id}/SendToCustomer';
