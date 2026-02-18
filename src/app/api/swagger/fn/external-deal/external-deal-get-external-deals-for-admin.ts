/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiExternalDealFilterObjectAltDto } from '../../models/api-external-deal-filter-object';

export interface ExternalDealGetExternalDealsForAdmin$Params {
      body?: ApiExternalDealFilterObjectAltDto | null
}

export function externalDealGetExternalDealsForAdmin(http: HttpClient, rootUrl: string, params?: ExternalDealGetExternalDealsForAdmin$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, externalDealGetExternalDealsForAdmin.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

externalDealGetExternalDealsForAdmin.PATH = '/bla-bla-vla/externaldeal/getExternalDealsForAdmin';
