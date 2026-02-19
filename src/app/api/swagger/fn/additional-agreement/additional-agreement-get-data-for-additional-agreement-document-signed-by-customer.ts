/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiAdditionalAgreementDocumentSignatureInfoDto } from '../../models/api-additional-agreement-document-signature-info-dto';
import { ApiCertificateViewModelDto } from '../../models/api-certificate-view-model-dto';

export interface AdditionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomer$Params {
      body?: ApiAdditionalAgreementDocumentSignatureInfoDto | null
}

export function additionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomer(http: HttpClient, rootUrl: string, params?: AdditionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomer$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiCertificateViewModelDto>> {
  const rb = new RequestBuilder(rootUrl, additionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomer.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiCertificateViewModelDto>;
    })
  );
}

additionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomer.PATH = '/api/AdditionalAgreement/GetDataForDocumentSignedByCustomer';
