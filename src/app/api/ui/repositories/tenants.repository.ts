import { ApplicationRejectionReason } from '../models/application-rejection-reason.interface';
import { applicationRejectionReasonAdapter } from '../adapters/models/application-rejection-reason.adapter';
import { DealRejectionReason } from '../models/deal-rejection-reason.interface';
import { dealRejectionReasonAdapter } from '../adapters/models/deal-rejection-reason.adapter';
import { FormTemplate } from '../models/form-template.interface';
import { formTemplateAdapter } from '../adapters/models/form-template.adapter';
import { InformSupplierBeforeApplication } from '../models/inform-supplier-before-application.interface';
import { informSupplierBeforeApplicationAdapter } from '../adapters/models/inform-supplier-before-application.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { OpenPartCorporateShop } from '../models/open-part-corporate-shop.interface';
import { openPartCorporateShopAdapter } from '../adapters/models/open-part-corporate-shop.adapter';
import { OpenPartDistrict } from '../models/open-part-district.interface';
import { openPartDistrictAdapter } from '../adapters/models/open-part-district.adapter';
import { TenantsApiService } from '../../swagger/services/tenants-api.service';
import { TenantSetting } from '../models/tenant-setting.interface';
import { tenantSettingAdapter } from '../adapters/models/tenant-setting.adapter';
import { TenantsGetCreateExternalDealFormTemplateSettingsParams, tenantsGetCreateExternalDealFormTemplateSettingsAdapter } from './params/tenants-get-create-external-deal-form-template-settings.params';
import { TenantsGetCreateOrderFormTemplateSettingsParams, tenantsGetCreateOrderFormTemplateSettingsAdapter } from './params/tenants-get-create-order-form-template-settings.params';
import { TenantsGetCreatePriceListFormTemplateSettingsParams, tenantsGetCreatePriceListFormTemplateSettingsAdapter } from './params/tenants-get-create-price-list-form-template-settings.params';
import { TenantsGetCreateTradeFormTemplateSettingsParams, tenantsGetCreateTradeFormTemplateSettingsAdapter } from './params/tenants-get-create-trade-form-template-settings.params';
import { TenantsGetDealRejectReasonsParams, tenantsGetDealRejectReasonsAdapter } from './params/tenants-get-deal-reject-reasons.params';
import { TenantsGetGlobalMarketTenantIdParams, tenantsGetGlobalMarketTenantIdAdapter } from './params/tenants-get-global-market-tenant-id.params';
import { TenantsGetInformSupplierDataParams, tenantsGetInformSupplierDataAdapter } from './params/tenants-get-inform-supplier-data.params';
import { TenantsGetMarketRejectReasonsParams, tenantsGetMarketRejectReasonsAdapter } from './params/tenants-get-market-reject-reasons.params';
import { TenantsGetOpenPartCorporateShopsParams, tenantsGetOpenPartCorporateShopsAdapter } from './params/tenants-get-open-part-corporate-shops.params';
import { TenantsGetOpenPartRegionalShopsParams, tenantsGetOpenPartRegionalShopsAdapter } from './params/tenants-get-open-part-regional-shops.params';
import { TenantsGetOrderAcceptFormTemplateSettingsParams, tenantsGetOrderAcceptFormTemplateSettingsAdapter } from './params/tenants-get-order-accept-form-template-settings.params';
import { TenantsGetTenantSettingsGetParams, tenantsGetTenantSettingsGetAdapter } from './params/tenants-get-tenant-settings-get.params';
import { TenantsGetTenantSettingsPostParams, tenantsGetTenantSettingsPostAdapter } from './params/tenants-get-tenant-settings-post.params';
import { TenantsSearchByTenantFlowTypeParams, tenantsSearchByTenantFlowTypeAdapter } from './params/tenants-search-by-tenant-flow-type.params';

@Injectable({ providedIn: 'root' })
export class TenantsRepository {
  private readonly _api = inject(TenantsApiService);

  tenantsGetCreateExternalDealFormTemplateSettings(params?: TenantsGetCreateExternalDealFormTemplateSettingsParams): Observable<FormTemplate> {
    return this._api.tenantsGetCreateExternalDealFormTemplateSettings(tenantsGetCreateExternalDealFormTemplateSettingsAdapter(params)).pipe(
      map((res) => formTemplateAdapter(res?.data))
    );
  }

  tenantsGetCreateOrderFormTemplateSettings(params?: TenantsGetCreateOrderFormTemplateSettingsParams): Observable<FormTemplate> {
    return this._api.tenantsGetCreateOrderFormTemplateSettings(tenantsGetCreateOrderFormTemplateSettingsAdapter(params)).pipe(
      map((res) => formTemplateAdapter(res?.data))
    );
  }

  tenantsGetCreatePriceListFormTemplateSettings(params?: TenantsGetCreatePriceListFormTemplateSettingsParams): Observable<FormTemplate> {
    return this._api.tenantsGetCreatePriceListFormTemplateSettings(tenantsGetCreatePriceListFormTemplateSettingsAdapter(params)).pipe(
      map((res) => formTemplateAdapter(res?.data))
    );
  }

  tenantsGetCreateTradeFormTemplateSettings(params?: TenantsGetCreateTradeFormTemplateSettingsParams): Observable<FormTemplate> {
    return this._api.tenantsGetCreateTradeFormTemplateSettings(tenantsGetCreateTradeFormTemplateSettingsAdapter(params)).pipe(
      map((res) => formTemplateAdapter(res?.data))
    );
  }

  tenantsGetDealRejectReasons(params: TenantsGetDealRejectReasonsParams): Observable<DealRejectionReason[]> {
    return this._api.tenantsGetDealRejectReasons(tenantsGetDealRejectReasonsAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => dealRejectionReasonAdapter(item)))
    );
  }

  tenantsGetGlobalMarketTenantId(params?: TenantsGetGlobalMarketTenantIdParams): Observable<Blob> {
    return this._api.tenantsGetGlobalMarketTenantId(tenantsGetGlobalMarketTenantIdAdapter(params));
  }

  tenantsGetInformSupplierData(params: TenantsGetInformSupplierDataParams): Observable<InformSupplierBeforeApplication> {
    return this._api.tenantsGetInformSupplierData(tenantsGetInformSupplierDataAdapter(params)).pipe(
      map((res) => informSupplierBeforeApplicationAdapter(res?.data))
    );
  }

  tenantsGetMarketRejectReasons(params: TenantsGetMarketRejectReasonsParams): Observable<ApplicationRejectionReason[]> {
    return this._api.tenantsGetMarketRejectReasons(tenantsGetMarketRejectReasonsAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => applicationRejectionReasonAdapter(item)))
    );
  }

  tenantsGetOpenPartCorporateShops(params?: TenantsGetOpenPartCorporateShopsParams): Observable<OpenPartCorporateShop[]> {
    return this._api.tenantsGetOpenPartCorporateShops(tenantsGetOpenPartCorporateShopsAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => openPartCorporateShopAdapter(item)))
    );
  }

  tenantsGetOpenPartRegionalShops(params?: TenantsGetOpenPartRegionalShopsParams): Observable<OpenPartDistrict[]> {
    return this._api.tenantsGetOpenPartRegionalShops(tenantsGetOpenPartRegionalShopsAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => openPartDistrictAdapter(item)))
    );
  }

  tenantsGetOrderAcceptFormTemplateSettings(params?: TenantsGetOrderAcceptFormTemplateSettingsParams): Observable<FormTemplate> {
    return this._api.tenantsGetOrderAcceptFormTemplateSettings(tenantsGetOrderAcceptFormTemplateSettingsAdapter(params)).pipe(
      map((res) => formTemplateAdapter(res?.data))
    );
  }

  tenantsGetTenantSettingsGet(params: TenantsGetTenantSettingsGetParams): Observable<TenantSetting> {
    return this._api.tenantsGetTenantSettingsGet(tenantsGetTenantSettingsGetAdapter(params)).pipe(
      map((res) => tenantSettingAdapter(res?.data))
    );
  }

  tenantsGetTenantSettingsPost(params?: TenantsGetTenantSettingsPostParams): Observable<TenantSetting> {
    return this._api.tenantsGetTenantSettingsPost(tenantsGetTenantSettingsPostAdapter(params)).pipe(
      map((res) => tenantSettingAdapter(res?.data))
    );
  }

  tenantsSearchByTenantFlowType(params: TenantsSearchByTenantFlowTypeParams): Observable<string> {
    return this._api.tenantsSearchByTenantFlowType(tenantsSearchByTenantFlowTypeAdapter(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

}
