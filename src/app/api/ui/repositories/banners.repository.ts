import { Banner } from '../models/banner.interface';
import { bannerAdapter } from '../adapters/models/banner.adapter';
import { BannersApiService } from '../../swagger/services/banners-api.service';
import { BannerSettings } from '../models/banner-settings.interface';
import { bannerSettingsAdapter } from '../adapters/models/banner-settings.adapter';
import { BannersGetBannerSettingsParams, bannersGetBannerSettingsAdapter } from './params/banners-get-banner-settings.params';
import { BannersGetUserBannersParams, bannersGetUserBannersAdapter } from './params/banners-get-user-banners.params';
import { BannersHideBannerPermanentlyParams, bannersHideBannerPermanentlyAdapter } from './params/banners-hide-banner-permanently.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BannersRepository {
  private readonly _api = inject(BannersApiService);

  bannersGetBannerSettings(params?: BannersGetBannerSettingsParams): Observable<BannerSettings> {
    return this._api.bannersGetBannerSettings(bannersGetBannerSettingsAdapter(params)).pipe(
      map((res) => bannerSettingsAdapter(res?.data))
    );
  }

  bannersGetUserBanners(params?: BannersGetUserBannersParams): Observable<Banner[]> {
    return this._api.bannersGetUserBanners(bannersGetUserBannersAdapter(params)).pipe(
      map((res) => (res ?? []).map((item) => bannerAdapter(item)))
    );
  }

  bannersHideBannerPermanently(params: BannersHideBannerPermanentlyParams): Observable<Blob> {
    return this._api.bannersHideBannerPermanently(bannersHideBannerPermanentlyAdapter(params));
  }

}
