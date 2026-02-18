/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfFileStreamModel } from '../../models/api-market-json-result-of-file-stream-model';

export interface UsersGetPowerOfAttorney$Params {
  fileId: string;
  id: string;
}

export function usersGetPowerOfAttorney(http: HttpClient, rootUrl: string, params: UsersGetPowerOfAttorney$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfFileStreamModel>> {
  const rb = new RequestBuilder(rootUrl, usersGetPowerOfAttorney.PATH, 'get');
  if (params) {
    rb.path('fileId', params.fileId, {});
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfFileStreamModel>;
    })
  );
}

usersGetPowerOfAttorney.PATH = '/bla-bla-vla/users/file/{fileId}/power-of-attorney/{id}';
