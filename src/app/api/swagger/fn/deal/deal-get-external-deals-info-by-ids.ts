/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiGetExternalDealsInfoRequestAltDto } from '../../models/api-get-external-deals-info-request';
import { ApiHmaoExternalDealInfoDto } from '../../models/api-hmao-external-deal-info-dto';

export interface DealGetExternalDealsInfoByIds$Params {
      body?: ApiGetExternalDealsInfoRequestAltDto | null
}

export function dealGetExternalDealsInfoByIds(http: HttpClient, rootUrl: string, params?: DealGetExternalDealsInfoByIds$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ApiHmaoExternalDealInfoDto>>> {
  const rb = new RequestBuilder(rootUrl, dealGetExternalDealsInfoByIds.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ApiHmaoExternalDealInfoDto>>;
    })
  );
}

dealGetExternalDealsInfoByIds.PATH = '/bla-bla-vla/Deal/GetExternalDealsInfoByIds';
