/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiExternalDealCardDto } from '../../models/api-external-deal-card-dto';

export interface ExternalDealGetExternalDealCard$Params {
  dealId: number;
}

export function externalDealGetExternalDealCard(http: HttpClient, rootUrl: string, params: ExternalDealGetExternalDealCard$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiExternalDealCardDto>> {
  const rb = new RequestBuilder(rootUrl, externalDealGetExternalDealCard.PATH, 'get');
  if (params) {
    rb.path('dealId', params.dealId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiExternalDealCardDto>;
    })
  );
}

externalDealGetExternalDealCard.PATH = '/bla-bla-vla/externaldeal/GetExternalDealCard/{dealId}';
