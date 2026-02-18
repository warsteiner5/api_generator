/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiFileInfoForSignDto } from '../../models/api-file-info-for-sign-dto';
import { ApiGetFilesInfoForSignDto } from '../../models/api-get-files-info-for-sign-dto';

export interface FileSignGetInfosForSign$Params {
      body?: ApiGetFilesInfoForSignDto | null
}

export function fileSignGetInfosForSign(http: HttpClient, rootUrl: string, params?: FileSignGetInfosForSign$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiFileInfoForSignDto>> {
  const rb = new RequestBuilder(rootUrl, fileSignGetInfosForSign.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiFileInfoForSignDto>;
    })
  );
}

fileSignGetInfosForSign.PATH = '/bla-bla-vla/FileSign/GetInfosForSign';
