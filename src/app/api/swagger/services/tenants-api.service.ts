/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiMarketJsonResultOfFormTemplateDto } from '../models/api-market-json-result-of-form-template-dto';
import { ApiMarketJsonResultOfInformSupplierBeforeApplicationDto } from '../models/api-market-json-result-of-inform-supplier-before-application-dto';
import { ApiMarketJsonResultOfListOfApplicationRejectionReasonDto } from '../models/api-market-json-result-of-list-of-application-rejection-reason-dto';
import { ApiMarketJsonResultOfListOfDealRejectionReasonDto } from '../models/api-market-json-result-of-list-of-deal-rejection-reason-dto';
import { ApiMarketJsonResultOfOpenPartCorporateShopDtoOf } from '../models/api-market-json-result-of-open-part-corporate-shop-dto-of';
import { ApiMarketJsonResultOfOpenPartDistrictDtoOf } from '../models/api-market-json-result-of-open-part-district-dto-of';
import { ApiMarketJsonResultOfString } from '../models/api-market-json-result-of-string';
import { ApiMarketJsonResultOfTenantSettingDto } from '../models/api-market-json-result-of-tenant-setting-dto';
import { tenantsGetCreateExternalDealFormTemplateSettings } from '../fn/tenants/tenants-get-create-external-deal-form-template-settings';
import { TenantsGetCreateExternalDealFormTemplateSettings$Params } from '../fn/tenants/tenants-get-create-external-deal-form-template-settings';
import { tenantsGetCreateOrderFormTemplateSettings } from '../fn/tenants/tenants-get-create-order-form-template-settings';
import { TenantsGetCreateOrderFormTemplateSettings$Params } from '../fn/tenants/tenants-get-create-order-form-template-settings';
import { tenantsGetCreatePriceListFormTemplateSettings } from '../fn/tenants/tenants-get-create-price-list-form-template-settings';
import { TenantsGetCreatePriceListFormTemplateSettings$Params } from '../fn/tenants/tenants-get-create-price-list-form-template-settings';
import { tenantsGetCreateTradeFormTemplateSettings } from '../fn/tenants/tenants-get-create-trade-form-template-settings';
import { TenantsGetCreateTradeFormTemplateSettings$Params } from '../fn/tenants/tenants-get-create-trade-form-template-settings';
import { tenantsGetDealRejectReasons } from '../fn/tenants/tenants-get-deal-reject-reasons';
import { TenantsGetDealRejectReasons$Params } from '../fn/tenants/tenants-get-deal-reject-reasons';
import { tenantsGetGlobalMarketTenantId } from '../fn/tenants/tenants-get-global-market-tenant-id';
import { TenantsGetGlobalMarketTenantId$Params } from '../fn/tenants/tenants-get-global-market-tenant-id';
import { tenantsGetInformSupplierData } from '../fn/tenants/tenants-get-inform-supplier-data';
import { TenantsGetInformSupplierData$Params } from '../fn/tenants/tenants-get-inform-supplier-data';
import { tenantsGetMarketRejectReasons } from '../fn/tenants/tenants-get-market-reject-reasons';
import { TenantsGetMarketRejectReasons$Params } from '../fn/tenants/tenants-get-market-reject-reasons';
import { tenantsGetOpenPartCorporateShops } from '../fn/tenants/tenants-get-open-part-corporate-shops';
import { TenantsGetOpenPartCorporateShops$Params } from '../fn/tenants/tenants-get-open-part-corporate-shops';
import { tenantsGetOpenPartRegionalShops } from '../fn/tenants/tenants-get-open-part-regional-shops';
import { TenantsGetOpenPartRegionalShops$Params } from '../fn/tenants/tenants-get-open-part-regional-shops';
import { tenantsGetOrderAcceptFormTemplateSettings } from '../fn/tenants/tenants-get-order-accept-form-template-settings';
import { TenantsGetOrderAcceptFormTemplateSettings$Params } from '../fn/tenants/tenants-get-order-accept-form-template-settings';
import { tenantsGetTenantSettingsGet } from '../fn/tenants/tenants-get-tenant-settings-get';
import { TenantsGetTenantSettingsGet$Params } from '../fn/tenants/tenants-get-tenant-settings-get';
import { tenantsGetTenantSettingsPost } from '../fn/tenants/tenants-get-tenant-settings-post';
import { TenantsGetTenantSettingsPost$Params } from '../fn/tenants/tenants-get-tenant-settings-post';
import { tenantsSearchByTenantFlowType } from '../fn/tenants/tenants-search-by-tenant-flow-type';
import { TenantsSearchByTenantFlowType$Params } from '../fn/tenants/tenants-search-by-tenant-flow-type';

@Injectable({ providedIn: 'root' })
export class TenantsApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `tenantsGetTenantSettingsGet()` */
  static readonly TenantsGetTenantSettingsGetPath = '/bla-bla-vla/tenants/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsGetTenantSettingsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsGetTenantSettingsGet$Response(params: TenantsGetTenantSettingsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTenantSettingDto>> {
    return tenantsGetTenantSettingsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tenantsGetTenantSettingsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsGetTenantSettingsGet(params: TenantsGetTenantSettingsGet$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfTenantSettingDto> {
    return this.tenantsGetTenantSettingsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfTenantSettingDto>): ApiMarketJsonResultOfTenantSettingDto => r.body)
    );
  }

  /** Path part for operation `tenantsGetTenantSettingsPost()` */
  static readonly TenantsGetTenantSettingsPostPath = '/bla-bla-vla/tenants';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsGetTenantSettingsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tenantsGetTenantSettingsPost$Response(params?: TenantsGetTenantSettingsPost$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTenantSettingDto>> {
    return tenantsGetTenantSettingsPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tenantsGetTenantSettingsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tenantsGetTenantSettingsPost(params?: TenantsGetTenantSettingsPost$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfTenantSettingDto> {
    return this.tenantsGetTenantSettingsPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfTenantSettingDto>): ApiMarketJsonResultOfTenantSettingDto => r.body)
    );
  }

  /** Path part for operation `tenantsSearchByTenantFlowType()` */
  static readonly TenantsSearchByTenantFlowTypePath = '/bla-bla-vla/tenants/search/{flowType}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsSearchByTenantFlowType()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsSearchByTenantFlowType$Response(params: TenantsSearchByTenantFlowType$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfString>> {
    return tenantsSearchByTenantFlowType(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tenantsSearchByTenantFlowType$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsSearchByTenantFlowType(params: TenantsSearchByTenantFlowType$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfString> {
    return this.tenantsSearchByTenantFlowType$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfString>): ApiMarketJsonResultOfString => r.body)
    );
  }

  /** Path part for operation `tenantsGetCreateTradeFormTemplateSettings()` */
  static readonly TenantsGetCreateTradeFormTemplateSettingsPath = '/bla-bla-vla/tenants/trade-template';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsGetCreateTradeFormTemplateSettings()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsGetCreateTradeFormTemplateSettings$Response(params?: TenantsGetCreateTradeFormTemplateSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfFormTemplateDto>> {
    return tenantsGetCreateTradeFormTemplateSettings(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tenantsGetCreateTradeFormTemplateSettings$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsGetCreateTradeFormTemplateSettings(params?: TenantsGetCreateTradeFormTemplateSettings$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfFormTemplateDto> {
    return this.tenantsGetCreateTradeFormTemplateSettings$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfFormTemplateDto>): ApiMarketJsonResultOfFormTemplateDto => r.body)
    );
  }

  /** Path part for operation `tenantsGetCreateOrderFormTemplateSettings()` */
  static readonly TenantsGetCreateOrderFormTemplateSettingsPath = '/bla-bla-vla/tenants/order-template';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsGetCreateOrderFormTemplateSettings()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsGetCreateOrderFormTemplateSettings$Response(params?: TenantsGetCreateOrderFormTemplateSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfFormTemplateDto>> {
    return tenantsGetCreateOrderFormTemplateSettings(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tenantsGetCreateOrderFormTemplateSettings$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsGetCreateOrderFormTemplateSettings(params?: TenantsGetCreateOrderFormTemplateSettings$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfFormTemplateDto> {
    return this.tenantsGetCreateOrderFormTemplateSettings$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfFormTemplateDto>): ApiMarketJsonResultOfFormTemplateDto => r.body)
    );
  }

  /** Path part for operation `tenantsGetOrderAcceptFormTemplateSettings()` */
  static readonly TenantsGetOrderAcceptFormTemplateSettingsPath = '/bla-bla-vla/tenants/order-accept-template';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsGetOrderAcceptFormTemplateSettings()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsGetOrderAcceptFormTemplateSettings$Response(params?: TenantsGetOrderAcceptFormTemplateSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfFormTemplateDto>> {
    return tenantsGetOrderAcceptFormTemplateSettings(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tenantsGetOrderAcceptFormTemplateSettings$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsGetOrderAcceptFormTemplateSettings(params?: TenantsGetOrderAcceptFormTemplateSettings$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfFormTemplateDto> {
    return this.tenantsGetOrderAcceptFormTemplateSettings$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfFormTemplateDto>): ApiMarketJsonResultOfFormTemplateDto => r.body)
    );
  }

  /** Path part for operation `tenantsGetCreateExternalDealFormTemplateSettings()` */
  static readonly TenantsGetCreateExternalDealFormTemplateSettingsPath = '/bla-bla-vla/tenants/external-deal-template';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsGetCreateExternalDealFormTemplateSettings()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsGetCreateExternalDealFormTemplateSettings$Response(params?: TenantsGetCreateExternalDealFormTemplateSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfFormTemplateDto>> {
    return tenantsGetCreateExternalDealFormTemplateSettings(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tenantsGetCreateExternalDealFormTemplateSettings$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsGetCreateExternalDealFormTemplateSettings(params?: TenantsGetCreateExternalDealFormTemplateSettings$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfFormTemplateDto> {
    return this.tenantsGetCreateExternalDealFormTemplateSettings$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfFormTemplateDto>): ApiMarketJsonResultOfFormTemplateDto => r.body)
    );
  }

  /** Path part for operation `tenantsGetCreatePriceListFormTemplateSettings()` */
  static readonly TenantsGetCreatePriceListFormTemplateSettingsPath = '/bla-bla-vla/tenants/price-list-template';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsGetCreatePriceListFormTemplateSettings()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsGetCreatePriceListFormTemplateSettings$Response(params?: TenantsGetCreatePriceListFormTemplateSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfFormTemplateDto>> {
    return tenantsGetCreatePriceListFormTemplateSettings(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tenantsGetCreatePriceListFormTemplateSettings$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsGetCreatePriceListFormTemplateSettings(params?: TenantsGetCreatePriceListFormTemplateSettings$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfFormTemplateDto> {
    return this.tenantsGetCreatePriceListFormTemplateSettings$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfFormTemplateDto>): ApiMarketJsonResultOfFormTemplateDto => r.body)
    );
  }

  /** Path part for operation `tenantsGetGlobalMarketTenantId()` */
  static readonly TenantsGetGlobalMarketTenantIdPath = '/bla-bla-vla/tenants/globalMarketId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsGetGlobalMarketTenantId()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsGetGlobalMarketTenantId$Response(params?: TenantsGetGlobalMarketTenantId$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tenantsGetGlobalMarketTenantId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tenantsGetGlobalMarketTenantId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsGetGlobalMarketTenantId(params?: TenantsGetGlobalMarketTenantId$Params, context?: HttpContext): Observable<Blob> {
    return this.tenantsGetGlobalMarketTenantId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `tenantsGetOpenPartCorporateShops()` */
  static readonly TenantsGetOpenPartCorporateShopsPath = '/bla-bla-vla/tenants/corporate-shops';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsGetOpenPartCorporateShops()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsGetOpenPartCorporateShops$Response(params?: TenantsGetOpenPartCorporateShops$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfOpenPartCorporateShopDtoOf>> {
    return tenantsGetOpenPartCorporateShops(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tenantsGetOpenPartCorporateShops$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsGetOpenPartCorporateShops(params?: TenantsGetOpenPartCorporateShops$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfOpenPartCorporateShopDtoOf> {
    return this.tenantsGetOpenPartCorporateShops$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfOpenPartCorporateShopDtoOf>): ApiMarketJsonResultOfOpenPartCorporateShopDtoOf => r.body)
    );
  }

  /** Path part for operation `tenantsGetOpenPartRegionalShops()` */
  static readonly TenantsGetOpenPartRegionalShopsPath = '/bla-bla-vla/tenants/regional-shops';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsGetOpenPartRegionalShops()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsGetOpenPartRegionalShops$Response(params?: TenantsGetOpenPartRegionalShops$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfOpenPartDistrictDtoOf>> {
    return tenantsGetOpenPartRegionalShops(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tenantsGetOpenPartRegionalShops$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsGetOpenPartRegionalShops(params?: TenantsGetOpenPartRegionalShops$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfOpenPartDistrictDtoOf> {
    return this.tenantsGetOpenPartRegionalShops$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfOpenPartDistrictDtoOf>): ApiMarketJsonResultOfOpenPartDistrictDtoOf => r.body)
    );
  }

  /** Path part for operation `tenantsGetInformSupplierData()` */
  static readonly TenantsGetInformSupplierDataPath = '/bla-bla-vla/tenants/inform-supplier-data/{tenantId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsGetInformSupplierData()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsGetInformSupplierData$Response(params: TenantsGetInformSupplierData$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfInformSupplierBeforeApplicationDto>> {
    return tenantsGetInformSupplierData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tenantsGetInformSupplierData$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsGetInformSupplierData(params: TenantsGetInformSupplierData$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfInformSupplierBeforeApplicationDto> {
    return this.tenantsGetInformSupplierData$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfInformSupplierBeforeApplicationDto>): ApiMarketJsonResultOfInformSupplierBeforeApplicationDto => r.body)
    );
  }

  /** Path part for operation `tenantsGetDealRejectReasons()` */
  static readonly TenantsGetDealRejectReasonsPath = '/bla-bla-vla/tenants/GetDealRejectReasons';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsGetDealRejectReasons()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsGetDealRejectReasons$Response(params: TenantsGetDealRejectReasons$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfDealRejectionReasonDto>> {
    return tenantsGetDealRejectReasons(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tenantsGetDealRejectReasons$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsGetDealRejectReasons(params: TenantsGetDealRejectReasons$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfDealRejectionReasonDto> {
    return this.tenantsGetDealRejectReasons$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfDealRejectionReasonDto>): ApiMarketJsonResultOfListOfDealRejectionReasonDto => r.body)
    );
  }

  /** Path part for operation `tenantsGetMarketRejectReasons()` */
  static readonly TenantsGetMarketRejectReasonsPath = '/bla-bla-vla/tenants/GetApplicationRejectReasons';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsGetMarketRejectReasons()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsGetMarketRejectReasons$Response(params: TenantsGetMarketRejectReasons$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfApplicationRejectionReasonDto>> {
    return tenantsGetMarketRejectReasons(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tenantsGetMarketRejectReasons$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsGetMarketRejectReasons(params: TenantsGetMarketRejectReasons$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfApplicationRejectionReasonDto> {
    return this.tenantsGetMarketRejectReasons$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfApplicationRejectionReasonDto>): ApiMarketJsonResultOfListOfApplicationRejectionReasonDto => r.body)
    );
  }

}
