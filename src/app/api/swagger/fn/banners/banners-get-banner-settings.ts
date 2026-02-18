/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiBannerPlaceEnum } from '../../models/api-banner-place-enum';
import { ApiMarketJsonResultOfBannerSettingsDto } from '../../models/api-market-json-result-of-banner-settings-dto';

export interface BannersGetBannerSettings$Params {
  TenantId?: number;
  BannerPlace?: ApiBannerPlaceEnum | null;
}

export function bannersGetBannerSettings(http: HttpClient, rootUrl: string, params?: BannersGetBannerSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBannerSettingsDto>> {
  const rb = new RequestBuilder(rootUrl, bannersGetBannerSettings.PATH, 'get');
  if (params) {
    rb.query('TenantId', params.TenantId, {});
    rb.query('BannerPlace', params.BannerPlace, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfBannerSettingsDto>;
    })
  );
}

bannersGetBannerSettings.PATH = '/bla-bla-vla/banners/settings';
