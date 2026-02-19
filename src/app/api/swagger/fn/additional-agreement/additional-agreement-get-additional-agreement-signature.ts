/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiAdditionalAgreementInitiatorEnum } from '../../models/api-additional-agreement-initiator-enum';
import { ApiAdditionalAgreementSignatureDto } from '../../models/api-additional-agreement-signature-dto';

export interface AdditionalAgreementGetAdditionalAgreementSignature$Params {
  additionalAgreementId: number;
  fileGuid: string;
  participant: ApiAdditionalAgreementInitiatorEnum;
}

export function additionalAgreementGetAdditionalAgreementSignature(http: HttpClient, rootUrl: string, params: AdditionalAgreementGetAdditionalAgreementSignature$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiAdditionalAgreementSignatureDto>> {
  const rb = new RequestBuilder(rootUrl, additionalAgreementGetAdditionalAgreementSignature.PATH, 'get');
  if (params) {
    rb.path('additionalAgreementId', params.additionalAgreementId, {});
    rb.path('fileGuid', params.fileGuid, {});
    rb.path('participant', params.participant, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiAdditionalAgreementSignatureDto>;
    })
  );
}

additionalAgreementGetAdditionalAgreementSignature.PATH = '/api/AdditionalAgreement/GetAdditionalAgreementSignature/{additionalAgreementId}/{fileGuid}/{participant}';
