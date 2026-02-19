/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface OrganizationsCheckAndGetOrganization$Params {
  inn: string | null;
  kpp?: string | null;
}

export function organizationsCheckAndGetOrganization(http: HttpClient, rootUrl: string, params: OrganizationsCheckAndGetOrganization$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, organizationsCheckAndGetOrganization.PATH, 'get');
  if (params) {
    rb.query('inn', params.inn, {});
    rb.query('kpp', params.kpp, {});
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

organizationsCheckAndGetOrganization.PATH = '/market/api/v1/organizations/CheckAndGetOrganization';
