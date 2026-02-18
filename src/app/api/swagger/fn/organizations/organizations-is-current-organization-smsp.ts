/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface OrganizationsIsCurrentOrganizationSmsp$Params {
}

export function organizationsIsCurrentOrganizationSmsp(http: HttpClient, rootUrl: string, params?: OrganizationsIsCurrentOrganizationSmsp$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<boolean>>> {
  const rb = new RequestBuilder(rootUrl, organizationsIsCurrentOrganizationSmsp.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<boolean>>;
    })
  );
}

organizationsIsCurrentOrganizationSmsp.PATH = '/bla-bla-vla/organizations/IsSmsp';
