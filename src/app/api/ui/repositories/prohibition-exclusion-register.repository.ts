import { ApiSearchResultOfTenantOrganizationSettingsInfoAlt } from '../models/api-search-result-of-tenant-organization-settings-info-alt.interface';
import { apiSearchResultOfTenantOrganizationSettingsInfoAltAdapter } from '../adapters/models/api-search-result-of-tenant-organization-settings-info-alt.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { OrganizationName } from '../models/organization-name.interface';
import { organizationNameAdapter } from '../adapters/models/organization-name.adapter';
import { ProhibitionExclusionRegisterApiService } from '../../swagger/services/prohibition-exclusion-register-api.service';
import { ProhibitionExclusionRegisterCreateOrganizationSettingParams, prohibitionExclusionRegisterCreateOrganizationSettingAdapter } from './params/prohibition-exclusion-register-create-organization-setting.params';
import { ProhibitionExclusionRegisterDeleteOrganizationSettingParams, prohibitionExclusionRegisterDeleteOrganizationSettingAdapter } from './params/prohibition-exclusion-register-delete-organization-setting.params';
import { ProhibitionExclusionRegisterGetOrganizationInfoByInnAndKppParams, prohibitionExclusionRegisterGetOrganizationInfoByInnAndKppAdapter } from './params/prohibition-exclusion-register-get-organization-info-by-inn-and-kpp.params';
import { ProhibitionExclusionRegisterGetOrganizationSettingsParams, prohibitionExclusionRegisterGetOrganizationSettingsAdapter } from './params/prohibition-exclusion-register-get-organization-settings.params';
import { ProhibitionExclusionRegisterGetTenantSettingsParams, prohibitionExclusionRegisterGetTenantSettingsAdapter } from './params/prohibition-exclusion-register-get-tenant-settings.params';
import { ProhibitionExclusionRegisterUpdateOrganizationSettingParams, prohibitionExclusionRegisterUpdateOrganizationSettingAdapter } from './params/prohibition-exclusion-register-update-organization-setting.params';

@Injectable({ providedIn: 'root' })
export class ProhibitionExclusionRegisterRepository {
  private readonly _api = inject(ProhibitionExclusionRegisterApiService);

  prohibitionExclusionRegisterCreateOrganizationSetting(params?: ProhibitionExclusionRegisterCreateOrganizationSettingParams): Observable<Blob> {
    return this._api.prohibitionExclusionRegisterCreateOrganizationSetting(prohibitionExclusionRegisterCreateOrganizationSettingAdapter(params));
  }

  prohibitionExclusionRegisterDeleteOrganizationSetting(params: ProhibitionExclusionRegisterDeleteOrganizationSettingParams): Observable<Blob> {
    return this._api.prohibitionExclusionRegisterDeleteOrganizationSetting(prohibitionExclusionRegisterDeleteOrganizationSettingAdapter(params));
  }

  prohibitionExclusionRegisterGetOrganizationInfoByInnAndKpp(params: ProhibitionExclusionRegisterGetOrganizationInfoByInnAndKppParams): Observable<OrganizationName> {
    return this._api.prohibitionExclusionRegisterGetOrganizationInfoByInnAndKpp(prohibitionExclusionRegisterGetOrganizationInfoByInnAndKppAdapter(params)).pipe(
      map((res) => organizationNameAdapter(res))
    );
  }

  prohibitionExclusionRegisterGetOrganizationSettings(params?: ProhibitionExclusionRegisterGetOrganizationSettingsParams): Observable<ApiSearchResultOfTenantOrganizationSettingsInfoAlt> {
    return this._api.prohibitionExclusionRegisterGetOrganizationSettings(prohibitionExclusionRegisterGetOrganizationSettingsAdapter(params)).pipe(
      map((res) => apiSearchResultOfTenantOrganizationSettingsInfoAltAdapter(res))
    );
  }

  prohibitionExclusionRegisterGetTenantSettings(params?: ProhibitionExclusionRegisterGetTenantSettingsParams): Observable<Blob> {
    return this._api.prohibitionExclusionRegisterGetTenantSettings(prohibitionExclusionRegisterGetTenantSettingsAdapter(params));
  }

  prohibitionExclusionRegisterUpdateOrganizationSetting(params?: ProhibitionExclusionRegisterUpdateOrganizationSettingParams): Observable<Blob> {
    return this._api.prohibitionExclusionRegisterUpdateOrganizationSetting(prohibitionExclusionRegisterUpdateOrganizationSettingAdapter(params));
  }

}
