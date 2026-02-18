import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { OrgSettingApiService } from '../../swagger/services/org-setting-api.service';
import { OrgSettingGetBoolCurrentOrgSettingParams, orgSettingGetBoolCurrentOrgSettingParamsAdapter } from './params/org-setting-get-bool-current-org-setting.params';
import { OrgSettingGetBoolOrgSettingParams, orgSettingGetBoolOrgSettingParamsAdapter } from './params/org-setting-get-bool-org-setting.params';

@Injectable({ providedIn: 'root' })
export class OrgSettingRepository {
  private readonly _api = inject(OrgSettingApiService);

  orgSettingGetBoolCurrentOrgSetting(params: OrgSettingGetBoolCurrentOrgSettingParams): Observable<Blob> {
    return this._api.orgSettingGetBoolCurrentOrgSetting(orgSettingGetBoolCurrentOrgSettingParamsAdapter.adapt(params));
  }

  orgSettingGetBoolOrgSetting(params: OrgSettingGetBoolOrgSettingParams): Observable<Blob> {
    return this._api.orgSettingGetBoolOrgSetting(orgSettingGetBoolOrgSettingParamsAdapter.adapt(params));
  }

}
