/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiV2ApiResponseAltDto } from '../../models/api-v-2-api-response';

export interface FileV2DownloadPicturesForOffers$Params {
}

export function fileV2DownloadPicturesForOffers(http: HttpClient, rootUrl: string, params?: FileV2DownloadPicturesForOffers$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiV2ApiResponseAltDto>> {
  const rb = new RequestBuilder(rootUrl, fileV2DownloadPicturesForOffers.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiV2ApiResponseAltDto>;
    })
  );
}

fileV2DownloadPicturesForOffers.PATH = '/api/v2/FileController/DownloadPicturesForOffers';
