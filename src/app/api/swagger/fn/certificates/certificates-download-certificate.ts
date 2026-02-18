/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiOrganizationContractSideAltEnum } from '../../models/api-organization-contract-side';

export interface CertificatesDownloadCertificate$Params {
  dealId: number;
  contractSide: ApiOrganizationContractSideAltEnum;
  fileGuid: string;
}

export function certificatesDownloadCertificate(http: HttpClient, rootUrl: string, params: CertificatesDownloadCertificate$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, certificatesDownloadCertificate.PATH, 'get');
  if (params) {
    rb.path('dealId', params.dealId, {});
    rb.path('contractSide', params.contractSide, {});
    rb.path('fileGuid', params.fileGuid, {});
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

certificatesDownloadCertificate.PATH = '/bla-bla-vla/certificates/deals/{dealId}/sides/{contractSide}/files/{fileGuid}';
