/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiGetFilesInfoForSignDto } from '../../models/api-get-files-info-for-sign-dto';
import { ApiMarketJsonResultOfListOfFileInfoForSignDto } from '../../models/api-market-json-result-of-list-of-file-info-for-sign-dto';

export interface FilesGetInfosForSign$Params {
      body?: ApiGetFilesInfoForSignDto | null
}

export function filesGetInfosForSign(http: HttpClient, rootUrl: string, params?: FilesGetInfosForSign$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfFileInfoForSignDto>> {
  const rb = new RequestBuilder(rootUrl, filesGetInfosForSign.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfFileInfoForSignDto>;
    })
  );
}

filesGetInfosForSign.PATH = '/market/api/v1/files/infos-for-sign';
