/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiApiResultAltDto } from '../../models/api-api-result';
import { ApiExternalDealDto } from '../../models/api-external-deal-dto';

export interface ExternalDealsPublish2$Params {
  id: number;
      body?: ApiExternalDealDto | null
}

export function externalDealsPublish2(http: HttpClient, rootUrl: string, params: ExternalDealsPublish2$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiApiResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, externalDealsPublish2.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiApiResultAltDto>;
    })
  );
}

externalDealsPublish2.PATH = '/market/api/v1/external-deals/{id}/publish';
