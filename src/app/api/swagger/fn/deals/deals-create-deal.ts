/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiCreateDealDraftByParticipantRequestDto } from '../../models/api-create-deal-draft-by-participant-request-dto';
import { ApiMarketJsonResultOfIntegerAltDto } from '../../models/api-market-json-result-of-integer';

export interface DealsCreateDeal$Params {
      body?: ApiCreateDealDraftByParticipantRequestDto | null
}

export function dealsCreateDeal(http: HttpClient, rootUrl: string, params?: DealsCreateDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
  const rb = new RequestBuilder(rootUrl, dealsCreateDeal.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>;
    })
  );
}

dealsCreateDeal.PATH = '/market/api/v1/deals';
