/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiApplicationDto } from '../../models/api-application-dto';

export interface ApplicationGetApplicationsByTradeId$Params {
  id: number;
}

export function applicationGetApplicationsByTradeId(http: HttpClient, rootUrl: string, params: ApplicationGetApplicationsByTradeId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ApiApplicationDto>>> {
  const rb = new RequestBuilder(rootUrl, applicationGetApplicationsByTradeId.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ApiApplicationDto>>;
    })
  );
}

applicationGetApplicationsByTradeId.PATH = '/bla-bla-vla/GetApplicationsByTradeId/{id}';
