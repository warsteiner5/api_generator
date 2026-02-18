/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiAdditionalAgreementDocumentSignatureInfoDto } from '../../models/api-additional-agreement-document-signature-info-dto';
import { ApiMarketJsonResultOfCertificateViewModelDto } from '../../models/api-market-json-result-of-certificate-view-model-dto';

export interface AdditionalAgreementsGetDocumentFileDigitalSignature$Params {
      body?: ApiAdditionalAgreementDocumentSignatureInfoDto | null
}

export function additionalAgreementsGetDocumentFileDigitalSignature(http: HttpClient, rootUrl: string, params?: AdditionalAgreementsGetDocumentFileDigitalSignature$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfCertificateViewModelDto>> {
  const rb = new RequestBuilder(rootUrl, additionalAgreementsGetDocumentFileDigitalSignature.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfCertificateViewModelDto>;
    })
  );
}

additionalAgreementsGetDocumentFileDigitalSignature.PATH = '/bla-bla-vla/additionalAgreements/file-digital-signature';
