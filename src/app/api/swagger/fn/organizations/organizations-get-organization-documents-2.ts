/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfOrganizationProfileDocumentDto } from '../../models/api-market-json-result-of-organization-profile-document-dto';

export interface OrganizationsGetOrganizationDocuments2$Params {
  guid: string | null;
}

export function organizationsGetOrganizationDocuments2(http: HttpClient, rootUrl: string, params: OrganizationsGetOrganizationDocuments2$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfOrganizationProfileDocumentDto>> {
  const rb = new RequestBuilder(rootUrl, organizationsGetOrganizationDocuments2.PATH, 'get');
  if (params) {
    rb.path('guid', params.guid, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfOrganizationProfileDocumentDto>;
    })
  );
}

organizationsGetOrganizationDocuments2.PATH = '/bla-bla-vla/organizations/documents/{guid}';
