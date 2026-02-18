import { adaptBannerSettingsToUI } from '../adapters/toUI/banner-settings.adapter';
import { adaptBannerToUI } from '../adapters/toUI/banner.adapter';
import { Banner } from '../models/banner.interface';
import { BannersApiService } from '../../swagger/services/banners-api.service';
import { BannerSettings } from '../models/banner-settings.interface';
import { BannersGetBannerSettingsParams, bannersGetBannerSettingsParamsAdapter } from './params/banners-get-banner-settings.params';
import { BannersGetUserBannersParams, bannersGetUserBannersParamsAdapter } from './params/banners-get-user-banners.params';
import { BannersHideBannerPermanentlyParams, bannersHideBannerPermanentlyParamsAdapter } from './params/banners-hide-banner-permanently.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BannersRepository {
  private readonly _api = inject(BannersApiService);

  bannersGetBannerSettings(params?: BannersGetBannerSettingsParams): Observable<BannerSettings> {
    return this._api.bannersGetBannerSettings(bannersGetBannerSettingsParamsAdapter.adapt(params)).pipe(
      map((res) => adaptBannerSettingsToUI(res?.data))
    );
  }

  bannersGetUserBanners(params?: BannersGetUserBannersParams): Observable<Banner[]> {
    return this._api.bannersGetUserBanners(bannersGetUserBannersParamsAdapter.adapt(params)).pipe(
      map((res) => (res ?? []).map((item) => adaptBannerToUI(item)))
    );
  }

  bannersHideBannerPermanently(params: BannersHideBannerPermanentlyParams): Observable<Blob> {
    return this._api.bannersHideBannerPermanently(bannersHideBannerPermanentlyParamsAdapter.adapt(params));
  }

}
