import { adaptOrgSettingToUI } from '../adapters/toUI/org-setting.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { OrganizationSettingApiService } from '../../swagger/services/organization-setting-api.service';
import { OrganizationSettingGetOrgSettingsParams, organizationSettingGetOrgSettingsParamsAdapter } from './params/organization-setting-get-org-settings.params';
import { OrganizationSettingGetTenantSettingsByTenantIdParams, organizationSettingGetTenantSettingsByTenantIdParamsAdapter } from './params/organization-setting-get-tenant-settings-by-tenant-id.params';
import { OrganizationSettingIsOfferModerationEnableForOrganisationParams, organizationSettingIsOfferModerationEnableForOrganisationParamsAdapter } from './params/organization-setting-is-offer-moderation-enable-for-organisation.params';
import { OrganizationSettingSetOfferModerationForOrganisationParams, organizationSettingSetOfferModerationForOrganisationParamsAdapter } from './params/organization-setting-set-offer-moderation-for-organisation.params';
import { OrgSetting } from '../models/org-setting.interface';

@Injectable({ providedIn: 'root' })
export class OrganizationSettingRepository {
  private readonly _api = inject(OrganizationSettingApiService);

  organizationSettingGetOrgSettings(params: OrganizationSettingGetOrgSettingsParams): Observable<OrgSetting[]> {
    return this._api.organizationSettingGetOrgSettings(organizationSettingGetOrgSettingsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptOrgSettingToUI(item)))
    );
  }

  organizationSettingGetTenantSettingsByTenantId(params: OrganizationSettingGetTenantSettingsByTenantIdParams): Observable<OrgSetting[]> {
    return this._api.organizationSettingGetTenantSettingsByTenantId(organizationSettingGetTenantSettingsByTenantIdParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptOrgSettingToUI(item)))
    );
  }

  organizationSettingIsOfferModerationEnableForOrganisation(params: OrganizationSettingIsOfferModerationEnableForOrganisationParams): Observable<Blob> {
    return this._api.organizationSettingIsOfferModerationEnableForOrganisation(organizationSettingIsOfferModerationEnableForOrganisationParamsAdapter.adapt(params));
  }

  organizationSettingSetOfferModerationForOrganisation(params: OrganizationSettingSetOfferModerationForOrganisationParams): Observable<Blob> {
    return this._api.organizationSettingSetOfferModerationForOrganisation(organizationSettingSetOfferModerationForOrganisationParamsAdapter.adapt(params));
  }

}
