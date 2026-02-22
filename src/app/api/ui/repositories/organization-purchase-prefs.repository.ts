import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MarketOrganizationSettingsAlt } from '../models/market-organization-settings-alt.interface';
import { marketOrganizationSettingsAltAdapter } from '../adapters/models/market-organization-settings-alt.adapter';
import { Observable } from 'rxjs';
import { OrganizationPurchasePrefsApiService } from '../../swagger/services/organization-purchase-prefs-api.service';
import { OrganizationPurchasePrefsGetPurchaseSettingsParams, organizationPurchasePrefsGetPurchaseSettingsAdapter } from './params/organization-purchase-prefs-get-purchase-settings.params';
import { OrganizationPurchasePrefsSetEisPrefsParams, organizationPurchasePrefsSetEisPrefsAdapter } from './params/organization-purchase-prefs-set-eis-prefs.params';
import { OrganizationPurchasePrefsSetHideApplicationDataParams, organizationPurchasePrefsSetHideApplicationDataAdapter } from './params/organization-purchase-prefs-set-hide-application-data.params';
import { OrganizationPurchasePrefsSetM4DPrefsParams, organizationPurchasePrefsSetM4DPrefsAdapter } from './params/organization-purchase-prefs-set-m-4-d-prefs.params';
import { OrganizationPurchasePrefsSetOtherPrefsParams, organizationPurchasePrefsSetOtherPrefsAdapter } from './params/organization-purchase-prefs-set-other-prefs.params';
import { OrganizationPurchasePrefsSetSignatureStampFormatParams, organizationPurchasePrefsSetSignatureStampFormatAdapter } from './params/organization-purchase-prefs-set-signature-stamp-format.params';

@Injectable({ providedIn: 'root' })
export class OrganizationPurchasePrefsRepository {
  private readonly _api = inject(OrganizationPurchasePrefsApiService);

  organizationPurchasePrefsGetPurchaseSettings(params?: OrganizationPurchasePrefsGetPurchaseSettingsParams): Observable<MarketOrganizationSettingsAlt> {
    return this._api.organizationPurchasePrefsGetPurchaseSettings(organizationPurchasePrefsGetPurchaseSettingsAdapter(params)).pipe(
      map((res) => marketOrganizationSettingsAltAdapter(res?.data))
    );
  }

  organizationPurchasePrefsSetEisPrefs(params?: OrganizationPurchasePrefsSetEisPrefsParams): Observable<boolean> {
    return this._api.organizationPurchasePrefsSetEisPrefs(organizationPurchasePrefsSetEisPrefsAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  organizationPurchasePrefsSetHideApplicationData(params?: OrganizationPurchasePrefsSetHideApplicationDataParams): Observable<boolean> {
    return this._api.organizationPurchasePrefsSetHideApplicationData(organizationPurchasePrefsSetHideApplicationDataAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  organizationPurchasePrefsSetM4DPrefs(params?: OrganizationPurchasePrefsSetM4DPrefsParams): Observable<boolean> {
    return this._api.organizationPurchasePrefsSetM4DPrefs(organizationPurchasePrefsSetM4DPrefsAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  organizationPurchasePrefsSetOtherPrefs(params?: OrganizationPurchasePrefsSetOtherPrefsParams): Observable<boolean> {
    return this._api.organizationPurchasePrefsSetOtherPrefs(organizationPurchasePrefsSetOtherPrefsAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  organizationPurchasePrefsSetSignatureStampFormat(params?: OrganizationPurchasePrefsSetSignatureStampFormatParams): Observable<boolean> {
    return this._api.organizationPurchasePrefsSetSignatureStampFormat(organizationPurchasePrefsSetSignatureStampFormatAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

}
