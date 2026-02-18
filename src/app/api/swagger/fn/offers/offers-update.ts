/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiBatchUpdateModelAltDto } from '../../models/api-batch-update-model';

export interface OffersUpdate$Params {
      body?: ApiBatchUpdateModelAltDto | null
}

export function offersUpdate(http: HttpClient, rootUrl: string, params?: OffersUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, offersUpdate.PATH, 'put');
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

offersUpdate.PATH = '/bla-bla-vla/offers/batchUpdate';
