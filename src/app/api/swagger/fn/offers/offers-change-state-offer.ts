/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiChangeStateOffersModelAltDto } from '../../models/api-change-state-offers-model';
import { ApiUpdateResultAltDto } from '../../models/api-update-result';

export interface OffersChangeStateOffer$Params {
      body?: ApiChangeStateOffersModelAltDto | null
}

export function offersChangeStateOffer(http: HttpClient, rootUrl: string, params?: OffersChangeStateOffer$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiUpdateResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, offersChangeStateOffer.PATH, 'post');
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

offersChangeStateOffer.PATH = '/market/api/v1/offers/change-state';
