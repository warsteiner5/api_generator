/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiCertificateViewModelDto } from '../../models/api-certificate-view-model-dto';
import { ApiDealDocumentSignatureInfoBindingModelAltDto } from '../../models/api-deal-document-signature-info-binding-model';

export interface DealGetDataForDealDocumentSignedByParticipant$Params {
      body?: ApiDealDocumentSignatureInfoBindingModelAltDto | null
}

export function dealGetDataForDealDocumentSignedByParticipant(http: HttpClient, rootUrl: string, params?: DealGetDataForDealDocumentSignedByParticipant$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiCertificateViewModelDto>> {
  const rb = new RequestBuilder(rootUrl, dealGetDataForDealDocumentSignedByParticipant.PATH, 'post');
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

dealGetDataForDealDocumentSignedByParticipant.PATH = '/api/Deal/GetDataForDealDocumentSignedByParticipant';
