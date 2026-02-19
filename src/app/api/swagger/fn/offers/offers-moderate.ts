/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiSearchObjectAltDto } from '../../models/api-search-object';
import { ApiUpdateResultAltDto } from '../../models/api-update-result';

export interface OffersModerate$Params {
      body?: ApiSearchObjectAltDto | null
}

export function offersModerate(http: HttpClient, rootUrl: string, params?: OffersModerate$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiUpdateResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, offersModerate.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiUpdateResultAltDto>;
    })
  );
}

offersModerate.PATH = '/market/api/v1/offers/moderate';
