/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfCertificateViewModelDto } from '../../models/api-market-json-result-of-certificate-view-model-dto';

export interface OrganizationsGetCertificateInfoFromFile$Params {
  fileGuid: string;
}

export function organizationsGetCertificateInfoFromFile(http: HttpClient, rootUrl: string, params: OrganizationsGetCertificateInfoFromFile$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfCertificateViewModelDto>> {
  const rb = new RequestBuilder(rootUrl, organizationsGetCertificateInfoFromFile.PATH, 'get');
  if (params) {
    rb.path('fileGuid', params.fileGuid, {});
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

organizationsGetCertificateInfoFromFile.PATH = '/market/api/v1/organizations/my/documents/{fileGuid}/signature';
