import { adaptApplicationRejectionReasonToUI } from '../adapters/toUI/application-rejection-reason.adapter';
import { adaptDealRejectionReasonToUI } from '../adapters/toUI/deal-rejection-reason.adapter';
import { adaptFormTemplateToUI } from '../adapters/toUI/form-template.adapter';
import { adaptInformSupplierBeforeApplicationToUI } from '../adapters/toUI/inform-supplier-before-application.adapter';
import { adaptOpenPartCorporateShopToUI } from '../adapters/toUI/open-part-corporate-shop.adapter';
import { adaptOpenPartDistrictToUI } from '../adapters/toUI/open-part-district.adapter';
import { adaptTenantSettingToUI } from '../adapters/toUI/tenant-setting.adapter';
import { ApplicationRejectionReason } from '../models/application-rejection-reason.interface';
import { DealRejectionReason } from '../models/deal-rejection-reason.interface';
import { FormTemplate } from '../models/form-template.interface';
import { InformSupplierBeforeApplication } from '../models/inform-supplier-before-application.interface';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { OpenPartCorporateShop } from '../models/open-part-corporate-shop.interface';
import { OpenPartDistrict } from '../models/open-part-district.interface';
import { TenantsApiService } from '../../swagger/services/tenants-api.service';
import { TenantSetting } from '../models/tenant-setting.interface';
import { TenantsGetCreateExternalDealFormTemplateSettingsParams, tenantsGetCreateExternalDealFormTemplateSettingsParamsAdapter } from './params/tenants-get-create-external-deal-form-template-settings.params';
import { TenantsGetCreateOrderFormTemplateSettingsParams, tenantsGetCreateOrderFormTemplateSettingsParamsAdapter } from './params/tenants-get-create-order-form-template-settings.params';
import { TenantsGetCreatePriceListFormTemplateSettingsParams, tenantsGetCreatePriceListFormTemplateSettingsParamsAdapter } from './params/tenants-get-create-price-list-form-template-settings.params';
import { TenantsGetCreateTradeFormTemplateSettingsParams, tenantsGetCreateTradeFormTemplateSettingsParamsAdapter } from './params/tenants-get-create-trade-form-template-settings.params';
import { TenantsGetDealRejectReasonsParams, tenantsGetDealRejectReasonsParamsAdapter } from './params/tenants-get-deal-reject-reasons.params';
import { TenantsGetGlobalMarketTenantIdParams, tenantsGetGlobalMarketTenantIdParamsAdapter } from './params/tenants-get-global-market-tenant-id.params';
import { TenantsGetInformSupplierDataParams, tenantsGetInformSupplierDataParamsAdapter } from './params/tenants-get-inform-supplier-data.params';
import { TenantsGetMarketRejectReasonsParams, tenantsGetMarketRejectReasonsParamsAdapter } from './params/tenants-get-market-reject-reasons.params';
import { TenantsGetOpenPartCorporateShopsParams, tenantsGetOpenPartCorporateShopsParamsAdapter } from './params/tenants-get-open-part-corporate-shops.params';
import { TenantsGetOpenPartRegionalShopsParams, tenantsGetOpenPartRegionalShopsParamsAdapter } from './params/tenants-get-open-part-regional-shops.params';
import { TenantsGetOrderAcceptFormTemplateSettingsParams, tenantsGetOrderAcceptFormTemplateSettingsParamsAdapter } from './params/tenants-get-order-accept-form-template-settings.params';
import { TenantsGetTenantSettingsGetParams, tenantsGetTenantSettingsGetParamsAdapter } from './params/tenants-get-tenant-settings-get.params';
import { TenantsGetTenantSettingsPostParams, tenantsGetTenantSettingsPostParamsAdapter } from './params/tenants-get-tenant-settings-post.params';
import { TenantsSearchByTenantFlowTypeParams, tenantsSearchByTenantFlowTypeParamsAdapter } from './params/tenants-search-by-tenant-flow-type.params';

@Injectable({ providedIn: 'root' })
export class TenantsRepository {
  private readonly _api = inject(TenantsApiService);

  tenantsGetCreateExternalDealFormTemplateSettings(params?: TenantsGetCreateExternalDealFormTemplateSettingsParams): Observable<FormTemplate> {
    return this._api.tenantsGetCreateExternalDealFormTemplateSettings(tenantsGetCreateExternalDealFormTemplateSettingsParamsAdapter.adapt(params)).pipe(
      map((res) => adaptFormTemplateToUI(res?.data))
    );
  }

  tenantsGetCreateOrderFormTemplateSettings(params?: TenantsGetCreateOrderFormTemplateSettingsParams): Observable<FormTemplate> {
    return this._api.tenantsGetCreateOrderFormTemplateSettings(tenantsGetCreateOrderFormTemplateSettingsParamsAdapter.adapt(params)).pipe(
      map((res) => adaptFormTemplateToUI(res?.data))
    );
  }

  tenantsGetCreatePriceListFormTemplateSettings(params?: TenantsGetCreatePriceListFormTemplateSettingsParams): Observable<FormTemplate> {
    return this._api.tenantsGetCreatePriceListFormTemplateSettings(tenantsGetCreatePriceListFormTemplateSettingsParamsAdapter.adapt(params)).pipe(
      map((res) => adaptFormTemplateToUI(res?.data))
    );
  }

  tenantsGetCreateTradeFormTemplateSettings(params?: TenantsGetCreateTradeFormTemplateSettingsParams): Observable<FormTemplate> {
    return this._api.tenantsGetCreateTradeFormTemplateSettings(tenantsGetCreateTradeFormTemplateSettingsParamsAdapter.adapt(params)).pipe(
      map((res) => adaptFormTemplateToUI(res?.data))
    );
  }

  tenantsGetDealRejectReasons(params: TenantsGetDealRejectReasonsParams): Observable<DealRejectionReason[]> {
    return this._api.tenantsGetDealRejectReasons(tenantsGetDealRejectReasonsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptDealRejectionReasonToUI(item)))
    );
  }

  tenantsGetGlobalMarketTenantId(params?: TenantsGetGlobalMarketTenantIdParams): Observable<Blob> {
    return this._api.tenantsGetGlobalMarketTenantId(tenantsGetGlobalMarketTenantIdParamsAdapter.adapt(params));
  }

  tenantsGetInformSupplierData(params: TenantsGetInformSupplierDataParams): Observable<InformSupplierBeforeApplication> {
    return this._api.tenantsGetInformSupplierData(tenantsGetInformSupplierDataParamsAdapter.adapt(params)).pipe(
      map((res) => adaptInformSupplierBeforeApplicationToUI(res?.data))
    );
  }

  tenantsGetMarketRejectReasons(params: TenantsGetMarketRejectReasonsParams): Observable<ApplicationRejectionReason[]> {
    return this._api.tenantsGetMarketRejectReasons(tenantsGetMarketRejectReasonsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptApplicationRejectionReasonToUI(item)))
    );
  }

  tenantsGetOpenPartCorporateShops(params?: TenantsGetOpenPartCorporateShopsParams): Observable<OpenPartCorporateShop[]> {
    return this._api.tenantsGetOpenPartCorporateShops(tenantsGetOpenPartCorporateShopsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptOpenPartCorporateShopToUI(item)))
    );
  }

  tenantsGetOpenPartRegionalShops(params?: TenantsGetOpenPartRegionalShopsParams): Observable<OpenPartDistrict[]> {
    return this._api.tenantsGetOpenPartRegionalShops(tenantsGetOpenPartRegionalShopsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptOpenPartDistrictToUI(item)))
    );
  }

  tenantsGetOrderAcceptFormTemplateSettings(params?: TenantsGetOrderAcceptFormTemplateSettingsParams): Observable<FormTemplate> {
    return this._api.tenantsGetOrderAcceptFormTemplateSettings(tenantsGetOrderAcceptFormTemplateSettingsParamsAdapter.adapt(params)).pipe(
      map((res) => adaptFormTemplateToUI(res?.data))
    );
  }

  tenantsGetTenantSettingsGet(params: TenantsGetTenantSettingsGetParams): Observable<TenantSetting> {
    return this._api.tenantsGetTenantSettingsGet(tenantsGetTenantSettingsGetParamsAdapter.adapt(params)).pipe(
      map((res) => adaptTenantSettingToUI(res?.data))
    );
  }

  tenantsGetTenantSettingsPost(params?: TenantsGetTenantSettingsPostParams): Observable<TenantSetting> {
    return this._api.tenantsGetTenantSettingsPost(tenantsGetTenantSettingsPostParamsAdapter.adapt(params)).pipe(
      map((res) => adaptTenantSettingToUI(res?.data))
    );
  }

  tenantsSearchByTenantFlowType(params: TenantsSearchByTenantFlowTypeParams): Observable<string> {
    return this._api.tenantsSearchByTenantFlowType(tenantsSearchByTenantFlowTypeParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

}
