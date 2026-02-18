/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfOrganizationRegistrationAgreementFileDto } from '../../models/api-market-json-result-of-list-of-organization-registration-agreement-file-dto';
import { ApiOrganizationRegistrationEmployeeDto } from '../../models/api-organization-registration-employee-dto';

export interface OrganizationRegistrationGenerateDocumentsLink$Params {
      body?: ApiOrganizationRegistrationEmployeeDto | null
}

export function organizationRegistrationGenerateDocumentsLink(http: HttpClient, rootUrl: string, params?: OrganizationRegistrationGenerateDocumentsLink$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfOrganizationRegistrationAgreementFileDto>> {
  const rb = new RequestBuilder(rootUrl, organizationRegistrationGenerateDocumentsLink.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfOrganizationRegistrationAgreementFileDto>;
    })
  );
}

organizationRegistrationGenerateDocumentsLink.PATH = '/bla-bla-vla/organization/registration/agreement/documents';
