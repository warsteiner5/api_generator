import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { OrganizationSettingApiService } from '../../swagger/services/organization-setting-api.service';
import { OrganizationSettingGetOrgSettingsParams, organizationSettingGetOrgSettingsAdapter } from './params/organization-setting-get-org-settings.params';
import { OrganizationSettingGetTenantSettingsByTenantIdParams, organizationSettingGetTenantSettingsByTenantIdAdapter } from './params/organization-setting-get-tenant-settings-by-tenant-id.params';
import { OrganizationSettingIsOfferModerationEnableForOrganisationParams, organizationSettingIsOfferModerationEnableForOrganisationAdapter } from './params/organization-setting-is-offer-moderation-enable-for-organisation.params';
import { OrganizationSettingSetOfferModerationForOrganisationParams, organizationSettingSetOfferModerationForOrganisationAdapter } from './params/organization-setting-set-offer-moderation-for-organisation.params';
import { OrgSetting } from '../models/org-setting.interface';
import { orgSettingAdapter } from '../adapters/models/org-setting.adapter';

@Injectable({ providedIn: 'root' })
export class OrganizationSettingRepository {
  private readonly _api = inject(OrganizationSettingApiService);

  organizationSettingGetOrgSettings(params: OrganizationSettingGetOrgSettingsParams): Observable<OrgSetting[]> {
    return this._api.organizationSettingGetOrgSettings(organizationSettingGetOrgSettingsAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => orgSettingAdapter(item)))
    );
  }

  organizationSettingGetTenantSettingsByTenantId(params: OrganizationSettingGetTenantSettingsByTenantIdParams): Observable<OrgSetting[]> {
    return this._api.organizationSettingGetTenantSettingsByTenantId(organizationSettingGetTenantSettingsByTenantIdAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => orgSettingAdapter(item)))
    );
  }

  organizationSettingIsOfferModerationEnableForOrganisation(params: OrganizationSettingIsOfferModerationEnableForOrganisationParams): Observable<Blob> {
    return this._api.organizationSettingIsOfferModerationEnableForOrganisation(organizationSettingIsOfferModerationEnableForOrganisationAdapter(params));
  }

  organizationSettingSetOfferModerationForOrganisation(params: OrganizationSettingSetOfferModerationForOrganisationParams): Observable<Blob> {
    return this._api.organizationSettingSetOfferModerationForOrganisation(organizationSettingSetOfferModerationForOrganisationAdapter(params));
  }

}
