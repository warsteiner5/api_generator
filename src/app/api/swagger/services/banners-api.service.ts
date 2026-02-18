/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiBannerDto } from '../models/api-banner-dto';
import { bannersGetBannerSettings } from '../fn/banners/banners-get-banner-settings';
import { BannersGetBannerSettings$Params } from '../fn/banners/banners-get-banner-settings';
import { bannersGetUserBanners } from '../fn/banners/banners-get-user-banners';
import { BannersGetUserBanners$Params } from '../fn/banners/banners-get-user-banners';
import { bannersHideBannerPermanently } from '../fn/banners/banners-hide-banner-permanently';
import { BannersHideBannerPermanently$Params } from '../fn/banners/banners-hide-banner-permanently';
import { ApiMarketJsonResultOfBannerSettingsDto } from '../models/api-market-json-result-of-banner-settings-dto';

@Injectable({ providedIn: 'root' })
export class BannersApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `bannersGetUserBanners()` */
  static readonly BannersGetUserBannersPath = '/bla-bla-vla/banners';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `bannersGetUserBanners()` instead.
   *
   * This method doesn't expect any request body.
   */
  bannersGetUserBanners$Response(params?: BannersGetUserBanners$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ApiBannerDto>>> {
    return bannersGetUserBanners(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `bannersGetUserBanners$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  bannersGetUserBanners(params?: BannersGetUserBanners$Params, context?: HttpContext): Observable<Array<ApiBannerDto>> {
    return this.bannersGetUserBanners$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ApiBannerDto>>): Array<ApiBannerDto> => r.body)
    );
  }

  /** Path part for operation `bannersHideBannerPermanently()` */
  static readonly BannersHideBannerPermanentlyPath = '/bla-bla-vla/banners/{bannerKey}/hide';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `bannersHideBannerPermanently()` instead.
   *
   * This method doesn't expect any request body.
   */
  bannersHideBannerPermanently$Response(params: BannersHideBannerPermanently$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return bannersHideBannerPermanently(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `bannersHideBannerPermanently$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  bannersHideBannerPermanently(params: BannersHideBannerPermanently$Params, context?: HttpContext): Observable<Blob> {
    return this.bannersHideBannerPermanently$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `bannersGetBannerSettings()` */
  static readonly BannersGetBannerSettingsPath = '/bla-bla-vla/banners/settings';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `bannersGetBannerSettings()` instead.
   *
   * This method doesn't expect any request body.
   */
  bannersGetBannerSettings$Response(params?: BannersGetBannerSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBannerSettingsDto>> {
    return bannersGetBannerSettings(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `bannersGetBannerSettings$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  bannersGetBannerSettings(params?: BannersGetBannerSettings$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBannerSettingsDto> {
    return this.bannersGetBannerSettings$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBannerSettingsDto>): ApiMarketJsonResultOfBannerSettingsDto => r.body)
    );
  }

}
