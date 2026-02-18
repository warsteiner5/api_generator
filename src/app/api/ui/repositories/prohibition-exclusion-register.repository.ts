import { adaptApiSearchResultOfTenantOrganizationSettingsInfoAltToUI } from '../adapters/toUI/api-search-result-of-tenant-organization-settings-info-alt.adapter';
import { adaptOrganizationNameToUI } from '../adapters/toUI/organization-name.adapter';
import { ApiSearchResultOfTenantOrganizationSettingsInfoAlt } from '../models/api-search-result-of-tenant-organization-settings-info-alt.interface';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { OrganizationName } from '../models/organization-name.interface';
import { ProhibitionExclusionRegisterApiService } from '../../swagger/services/prohibition-exclusion-register-api.service';
import { ProhibitionExclusionRegisterCreateOrganizationSettingParams, prohibitionExclusionRegisterCreateOrganizationSettingParamsAdapter } from './params/prohibition-exclusion-register-create-organization-setting.params';
import { ProhibitionExclusionRegisterDeleteOrganizationSettingParams, prohibitionExclusionRegisterDeleteOrganizationSettingParamsAdapter } from './params/prohibition-exclusion-register-delete-organization-setting.params';
import { ProhibitionExclusionRegisterGetOrganizationInfoByInnAndKppParams, prohibitionExclusionRegisterGetOrganizationInfoByInnAndKppParamsAdapter } from './params/prohibition-exclusion-register-get-organization-info-by-inn-and-kpp.params';
import { ProhibitionExclusionRegisterGetOrganizationSettingsParams, prohibitionExclusionRegisterGetOrganizationSettingsParamsAdapter } from './params/prohibition-exclusion-register-get-organization-settings.params';
import { ProhibitionExclusionRegisterGetTenantSettingsParams, prohibitionExclusionRegisterGetTenantSettingsParamsAdapter } from './params/prohibition-exclusion-register-get-tenant-settings.params';
import { ProhibitionExclusionRegisterUpdateOrganizationSettingParams, prohibitionExclusionRegisterUpdateOrganizationSettingParamsAdapter } from './params/prohibition-exclusion-register-update-organization-setting.params';

@Injectable({ providedIn: 'root' })
export class ProhibitionExclusionRegisterRepository {
  private readonly _api = inject(ProhibitionExclusionRegisterApiService);

  prohibitionExclusionRegisterCreateOrganizationSetting(params?: ProhibitionExclusionRegisterCreateOrganizationSettingParams): Observable<Blob> {
    return this._api.prohibitionExclusionRegisterCreateOrganizationSetting(prohibitionExclusionRegisterCreateOrganizationSettingParamsAdapter.adapt(params));
  }

  prohibitionExclusionRegisterDeleteOrganizationSetting(params: ProhibitionExclusionRegisterDeleteOrganizationSettingParams): Observable<Blob> {
    return this._api.prohibitionExclusionRegisterDeleteOrganizationSetting(prohibitionExclusionRegisterDeleteOrganizationSettingParamsAdapter.adapt(params));
  }

  prohibitionExclusionRegisterGetOrganizationInfoByInnAndKpp(params: ProhibitionExclusionRegisterGetOrganizationInfoByInnAndKppParams): Observable<OrganizationName> {
    return this._api.prohibitionExclusionRegisterGetOrganizationInfoByInnAndKpp(prohibitionExclusionRegisterGetOrganizationInfoByInnAndKppParamsAdapter.adapt(params)).pipe(
      map((res) => adaptOrganizationNameToUI(res))
    );
  }

  prohibitionExclusionRegisterGetOrganizationSettings(params?: ProhibitionExclusionRegisterGetOrganizationSettingsParams): Observable<ApiSearchResultOfTenantOrganizationSettingsInfoAlt> {
    return this._api.prohibitionExclusionRegisterGetOrganizationSettings(prohibitionExclusionRegisterGetOrganizationSettingsParamsAdapter.adapt(params)).pipe(
      map((res) => adaptApiSearchResultOfTenantOrganizationSettingsInfoAltToUI(res))
    );
  }

  prohibitionExclusionRegisterGetTenantSettings(params?: ProhibitionExclusionRegisterGetTenantSettingsParams): Observable<Blob> {
    return this._api.prohibitionExclusionRegisterGetTenantSettings(prohibitionExclusionRegisterGetTenantSettingsParamsAdapter.adapt(params));
  }

  prohibitionExclusionRegisterUpdateOrganizationSetting(params?: ProhibitionExclusionRegisterUpdateOrganizationSettingParams): Observable<Blob> {
    return this._api.prohibitionExclusionRegisterUpdateOrganizationSetting(prohibitionExclusionRegisterUpdateOrganizationSettingParamsAdapter.adapt(params));
  }

}
