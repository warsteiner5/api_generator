/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiGetFileInfoForSignDto } from '../../models/api-get-file-info-for-sign-dto';
import { ApiMarketJsonResultOfFileInfoForSignDto } from '../../models/api-market-json-result-of-file-info-for-sign-dto';

export interface FilesGetInfoForSign$Params {
      body?: ApiGetFileInfoForSignDto | null
}

export function filesGetInfoForSign(http: HttpClient, rootUrl: string, params?: FilesGetInfoForSign$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfFileInfoForSignDto>> {
  const rb = new RequestBuilder(rootUrl, filesGetInfoForSign.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfFileInfoForSignDto>;
    })
  );
}

filesGetInfoForSign.PATH = '/market/api/v1/files/info-for-sign';
