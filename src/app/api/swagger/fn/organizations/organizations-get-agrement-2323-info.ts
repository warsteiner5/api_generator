/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfTaskOfAgreement2323Dto } from '../../models/api-market-json-result-of-task-of-agreement-2323-dto';

export interface OrganizationsGetAgrement2323Info$Params {
}

export function organizationsGetAgrement2323Info(http: HttpClient, rootUrl: string, params?: OrganizationsGetAgrement2323Info$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTaskOfAgreement2323Dto>> {
  const rb = new RequestBuilder(rootUrl, organizationsGetAgrement2323Info.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfTaskOfAgreement2323Dto>;
    })
  );
}

organizationsGetAgrement2323Info.PATH = '/market/api/v1/organizations/self/2323Info';
