/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiDealObjectEnum } from '../../models/api-deal-object-enum';
import { ApiFullDealDto } from '../../models/api-full-deal-dto';

export interface DealGetDeal$Params {
  id: number;
  dealObject: ApiDealObjectEnum;
}

export function dealGetDeal(http: HttpClient, rootUrl: string, params: DealGetDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiFullDealDto>> {
  const rb = new RequestBuilder(rootUrl, dealGetDeal.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('dealObject', params.dealObject, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiFullDealDto>;
    })
  );
}

dealGetDeal.PATH = '/api/Deal/GetDeal/{id}/{dealObject}';
