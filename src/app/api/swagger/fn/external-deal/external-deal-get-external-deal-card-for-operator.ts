/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiExternalDealCardDto } from '../../models/api-external-deal-card-dto';

export interface ExternalDealGetExternalDealCardForOperator$Params {
  dealId: number;
}

export function externalDealGetExternalDealCardForOperator(http: HttpClient, rootUrl: string, params: ExternalDealGetExternalDealCardForOperator$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiExternalDealCardDto>> {
  const rb = new RequestBuilder(rootUrl, externalDealGetExternalDealCardForOperator.PATH, 'get');
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

externalDealGetExternalDealCardForOperator.PATH = '/bla-bla-vla/externaldeal/GetExternalDealCardForOperator/{dealId}';
