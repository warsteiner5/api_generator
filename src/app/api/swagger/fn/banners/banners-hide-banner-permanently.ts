/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiBannerKeyEnum } from '../../models/api-banner-key-enum';

export interface BannersHideBannerPermanently$Params {
  bannerKey: ApiBannerKeyEnum;
}

export function bannersHideBannerPermanently(http: HttpClient, rootUrl: string, params: BannersHideBannerPermanently$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, bannersHideBannerPermanently.PATH, 'post');
  if (params) {
    rb.path('bannerKey', params.bannerKey, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: 'application/octet-stream', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Blob>;
    })
  );
}

bannersHideBannerPermanently.PATH = '/market/api/v1/banners/{bannerKey}/hide';
