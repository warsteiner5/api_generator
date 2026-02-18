import { adaptMarketOrganizationSettingsAltToUI } from '../adapters/toUI/market-organization-settings-alt.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MarketOrganizationSettingsAlt } from '../models/market-organization-settings-alt.interface';
import { Observable } from 'rxjs';
import { OrganizationPurchasePrefsApiService } from '../../swagger/services/organization-purchase-prefs-api.service';
import { OrganizationPurchasePrefsGetPurchaseSettingsParams, organizationPurchasePrefsGetPurchaseSettingsParamsAdapter } from './params/organization-purchase-prefs-get-purchase-settings.params';
import { OrganizationPurchasePrefsSetEisPrefsParams, organizationPurchasePrefsSetEisPrefsParamsAdapter } from './params/organization-purchase-prefs-set-eis-prefs.params';
import { OrganizationPurchasePrefsSetHideApplicationDataParams, organizationPurchasePrefsSetHideApplicationDataParamsAdapter } from './params/organization-purchase-prefs-set-hide-application-data.params';
import { OrganizationPurchasePrefsSetM4DPrefsParams, organizationPurchasePrefsSetM4DPrefsParamsAdapter } from './params/organization-purchase-prefs-set-m-4-d-prefs.params';
import { OrganizationPurchasePrefsSetOtherPrefsParams, organizationPurchasePrefsSetOtherPrefsParamsAdapter } from './params/organization-purchase-prefs-set-other-prefs.params';
import { OrganizationPurchasePrefsSetSignatureStampFormatParams, organizationPurchasePrefsSetSignatureStampFormatParamsAdapter } from './params/organization-purchase-prefs-set-signature-stamp-format.params';

@Injectable({ providedIn: 'root' })
export class OrganizationPurchasePrefsRepository {
  private readonly _api = inject(OrganizationPurchasePrefsApiService);

  organizationPurchasePrefsGetPurchaseSettings(params?: OrganizationPurchasePrefsGetPurchaseSettingsParams): Observable<MarketOrganizationSettingsAlt> {
    return this._api.organizationPurchasePrefsGetPurchaseSettings(organizationPurchasePrefsGetPurchaseSettingsParamsAdapter.adapt(params)).pipe(
      map((res) => adaptMarketOrganizationSettingsAltToUI(res?.data))
    );
  }

  organizationPurchasePrefsSetEisPrefs(params?: OrganizationPurchasePrefsSetEisPrefsParams): Observable<boolean> {
    return this._api.organizationPurchasePrefsSetEisPrefs(organizationPurchasePrefsSetEisPrefsParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  organizationPurchasePrefsSetHideApplicationData(params?: OrganizationPurchasePrefsSetHideApplicationDataParams): Observable<boolean> {
    return this._api.organizationPurchasePrefsSetHideApplicationData(organizationPurchasePrefsSetHideApplicationDataParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  organizationPurchasePrefsSetM4DPrefs(params?: OrganizationPurchasePrefsSetM4DPrefsParams): Observable<boolean> {
    return this._api.organizationPurchasePrefsSetM4DPrefs(organizationPurchasePrefsSetM4DPrefsParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  organizationPurchasePrefsSetOtherPrefs(params?: OrganizationPurchasePrefsSetOtherPrefsParams): Observable<boolean> {
    return this._api.organizationPurchasePrefsSetOtherPrefs(organizationPurchasePrefsSetOtherPrefsParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  organizationPurchasePrefsSetSignatureStampFormat(params?: OrganizationPurchasePrefsSetSignatureStampFormatParams): Observable<boolean> {
    return this._api.organizationPurchasePrefsSetSignatureStampFormat(organizationPurchasePrefsSetSignatureStampFormatParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

}
