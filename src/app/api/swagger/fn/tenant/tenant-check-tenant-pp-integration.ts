/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface TenantCheckTenantPpIntegration$Params {
  tenantId: number;
}

export function tenantCheckTenantPpIntegration(http: HttpClient, rootUrl: string, params: TenantCheckTenantPpIntegration$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, tenantCheckTenantPpIntegration.PATH, 'get');
  if (params) {
    rb.query('tenantId', params.tenantId, {});
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

tenantCheckTenantPpIntegration.PATH = '/api/Tenant/checkTenantPPIntegration';
