/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiExternalDealDto } from '../../models/api-external-deal-dto';

export interface ExternalDealsGetExternalDeal$Params {
  id: number;
}

export function externalDealsGetExternalDeal(http: HttpClient, rootUrl: string, params: ExternalDealsGetExternalDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiExternalDealDto>> {
  const rb = new RequestBuilder(rootUrl, externalDealsGetExternalDeal.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiExternalDealDto>;
    })
  );
}

externalDealsGetExternalDeal.PATH = '/market/api/v1/external-deals/{id}';
