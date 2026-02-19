/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiMarketJsonResultOfBooleanAltDto } from '../models/api-market-json-result-of-boolean';
import { ApiMarketJsonResultOfCheckForAvailableGenerateReportResultDto } from '../models/api-market-json-result-of-check-for-available-generate-report-result-dto';
import { ApiMarketJsonResultOfListOfCategoryTenantReportResultDto } from '../models/api-market-json-result-of-list-of-category-tenant-report-result-dto';
import { ApiMarketJsonResultOfListOfTenantInformationReportResultDto } from '../models/api-market-json-result-of-list-of-tenant-information-report-result-dto';
import { ApiMarketJsonResultOfPagedCollectionOfReportRegistryItemDto } from '../models/api-market-json-result-of-paged-collection-of-report-registry-item-dto';
import { ApiMarketJsonResultOfPagedCollectionOfReportRegistryItemWithPeriodDto } from '../models/api-market-json-result-of-paged-collection-of-report-registry-item-with-period-dto';
import { reportsCanGenerateNew } from '../fn/reports/reports-can-generate-new';
import { ReportsCanGenerateNew$Params } from '../fn/reports/reports-can-generate-new';
import { reportsCategoryTenant } from '../fn/reports/reports-category-tenant';
import { ReportsCategoryTenant$Params } from '../fn/reports/reports-category-tenant';
import { reportsGenerateCustomerRegistryReport } from '../fn/reports/reports-generate-customer-registry-report';
import { ReportsGenerateCustomerRegistryReport$Params } from '../fn/reports/reports-generate-customer-registry-report';
import { reportsGenerateCustomerRegistryReport2 } from '../fn/reports/reports-generate-customer-registry-report-2';
import { ReportsGenerateCustomerRegistryReport2$Params } from '../fn/reports/reports-generate-customer-registry-report-2';
import { reportsGeneratePurchaseReport } from '../fn/reports/reports-generate-purchase-report';
import { ReportsGeneratePurchaseReport$Params } from '../fn/reports/reports-generate-purchase-report';
import { reportsGenerateSupplierRegistryReport } from '../fn/reports/reports-generate-supplier-registry-report';
import { ReportsGenerateSupplierRegistryReport$Params } from '../fn/reports/reports-generate-supplier-registry-report';
import { reportsGenerateSupplierRegistryReport2 } from '../fn/reports/reports-generate-supplier-registry-report-2';
import { ReportsGenerateSupplierRegistryReport2$Params } from '../fn/reports/reports-generate-supplier-registry-report-2';
import { reportsGenerateTradeRegistryReport } from '../fn/reports/reports-generate-trade-registry-report';
import { ReportsGenerateTradeRegistryReport$Params } from '../fn/reports/reports-generate-trade-registry-report';
import { reportsGenerateTradeRegistryReport2 } from '../fn/reports/reports-generate-trade-registry-report-2';
import { ReportsGenerateTradeRegistryReport2$Params } from '../fn/reports/reports-generate-trade-registry-report-2';
import { reportsGet } from '../fn/reports/reports-get';
import { ReportsGet$Params } from '../fn/reports/reports-get';
import { reportsTenantInformation } from '../fn/reports/reports-tenant-information';
import { ReportsTenantInformation$Params } from '../fn/reports/reports-tenant-information';

@Injectable({ providedIn: 'root' })
export class ReportsApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `reportsGet()` */
  static readonly ReportsGetPath = '/market/api/v1/reports/get';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reportsGet()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  reportsGet$Response(params?: ReportsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfPagedCollectionOfReportRegistryItemWithPeriodDto>> {
    return reportsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `reportsGet$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  reportsGet(params?: ReportsGet$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfPagedCollectionOfReportRegistryItemWithPeriodDto> {
    return this.reportsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfPagedCollectionOfReportRegistryItemWithPeriodDto>): ApiMarketJsonResultOfPagedCollectionOfReportRegistryItemWithPeriodDto => r.body)
    );
  }

  /** Path part for operation `reportsGeneratePurchaseReport()` */
  static readonly ReportsGeneratePurchaseReportPath = '/market/api/v1/reports/purchase';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reportsGeneratePurchaseReport()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  reportsGeneratePurchaseReport$Response(params?: ReportsGeneratePurchaseReport$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return reportsGeneratePurchaseReport(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `reportsGeneratePurchaseReport$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  reportsGeneratePurchaseReport(params?: ReportsGeneratePurchaseReport$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.reportsGeneratePurchaseReport$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `reportsCanGenerateNew()` */
  static readonly ReportsCanGenerateNewPath = '/market/api/v1/reports/canGenerateNew/{reportType}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reportsCanGenerateNew()` instead.
   *
   * This method doesn't expect any request body.
   */
  reportsCanGenerateNew$Response(params: ReportsCanGenerateNew$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfCheckForAvailableGenerateReportResultDto>> {
    return reportsCanGenerateNew(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `reportsCanGenerateNew$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  reportsCanGenerateNew(params: ReportsCanGenerateNew$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfCheckForAvailableGenerateReportResultDto> {
    return this.reportsCanGenerateNew$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfCheckForAvailableGenerateReportResultDto>): ApiMarketJsonResultOfCheckForAvailableGenerateReportResultDto => r.body)
    );
  }

  /** Path part for operation `reportsTenantInformation()` */
  static readonly ReportsTenantInformationPath = '/market/api/v1/reports/statistic/deals';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reportsTenantInformation()` instead.
   *
   * This method doesn't expect any request body.
   */
  reportsTenantInformation$Response(params?: ReportsTenantInformation$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfTenantInformationReportResultDto>> {
    return reportsTenantInformation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `reportsTenantInformation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  reportsTenantInformation(params?: ReportsTenantInformation$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfTenantInformationReportResultDto> {
    return this.reportsTenantInformation$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfTenantInformationReportResultDto>): ApiMarketJsonResultOfListOfTenantInformationReportResultDto => r.body)
    );
  }

  /** Path part for operation `reportsCategoryTenant()` */
  static readonly ReportsCategoryTenantPath = '/market/api/v1/reports/statistic/priceLists';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reportsCategoryTenant()` instead.
   *
   * This method doesn't expect any request body.
   */
  reportsCategoryTenant$Response(params?: ReportsCategoryTenant$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfCategoryTenantReportResultDto>> {
    return reportsCategoryTenant(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `reportsCategoryTenant$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  reportsCategoryTenant(params?: ReportsCategoryTenant$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfCategoryTenantReportResultDto> {
    return this.reportsCategoryTenant$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfCategoryTenantReportResultDto>): ApiMarketJsonResultOfListOfCategoryTenantReportResultDto => r.body)
    );
  }

  /** Path part for operation `reportsGenerateTradeRegistryReport()` */
  static readonly ReportsGenerateTradeRegistryReportPath = '/market/api/v1/reports/trade-registry';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reportsGenerateTradeRegistryReport()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  reportsGenerateTradeRegistryReport$Response(params?: ReportsGenerateTradeRegistryReport$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return reportsGenerateTradeRegistryReport(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `reportsGenerateTradeRegistryReport$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  reportsGenerateTradeRegistryReport(params?: ReportsGenerateTradeRegistryReport$Params, context?: HttpContext): Observable<Blob> {
    return this.reportsGenerateTradeRegistryReport$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `reportsGenerateSupplierRegistryReport()` */
  static readonly ReportsGenerateSupplierRegistryReportPath = '/market/api/v1/reports/supplier-registry';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reportsGenerateSupplierRegistryReport()` instead.
   *
   * This method doesn't expect any request body.
   */
  reportsGenerateSupplierRegistryReport$Response(params?: ReportsGenerateSupplierRegistryReport$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return reportsGenerateSupplierRegistryReport(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `reportsGenerateSupplierRegistryReport$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  reportsGenerateSupplierRegistryReport(params?: ReportsGenerateSupplierRegistryReport$Params, context?: HttpContext): Observable<Blob> {
    return this.reportsGenerateSupplierRegistryReport$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `reportsGenerateCustomerRegistryReport()` */
  static readonly ReportsGenerateCustomerRegistryReportPath = '/market/api/v1/reports/customer-registry';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reportsGenerateCustomerRegistryReport()` instead.
   *
   * This method doesn't expect any request body.
   */
  reportsGenerateCustomerRegistryReport$Response(params?: ReportsGenerateCustomerRegistryReport$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return reportsGenerateCustomerRegistryReport(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `reportsGenerateCustomerRegistryReport$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  reportsGenerateCustomerRegistryReport(params?: ReportsGenerateCustomerRegistryReport$Params, context?: HttpContext): Observable<Blob> {
    return this.reportsGenerateCustomerRegistryReport$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `reportsGenerateTradeRegistryReport2()` */
  static readonly ReportsGenerateTradeRegistryReport2Path = '/market/api/v1/reports/trade-registry/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reportsGenerateTradeRegistryReport2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  reportsGenerateTradeRegistryReport2$Response(params?: ReportsGenerateTradeRegistryReport2$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfPagedCollectionOfReportRegistryItemWithPeriodDto>> {
    return reportsGenerateTradeRegistryReport2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `reportsGenerateTradeRegistryReport2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  reportsGenerateTradeRegistryReport2(params?: ReportsGenerateTradeRegistryReport2$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfPagedCollectionOfReportRegistryItemWithPeriodDto> {
    return this.reportsGenerateTradeRegistryReport2$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfPagedCollectionOfReportRegistryItemWithPeriodDto>): ApiMarketJsonResultOfPagedCollectionOfReportRegistryItemWithPeriodDto => r.body)
    );
  }

  /** Path part for operation `reportsGenerateSupplierRegistryReport2()` */
  static readonly ReportsGenerateSupplierRegistryReport2Path = '/market/api/v1/reports/supplier-registry/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reportsGenerateSupplierRegistryReport2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  reportsGenerateSupplierRegistryReport2$Response(params?: ReportsGenerateSupplierRegistryReport2$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfPagedCollectionOfReportRegistryItemDto>> {
    return reportsGenerateSupplierRegistryReport2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `reportsGenerateSupplierRegistryReport2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  reportsGenerateSupplierRegistryReport2(params?: ReportsGenerateSupplierRegistryReport2$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfPagedCollectionOfReportRegistryItemDto> {
    return this.reportsGenerateSupplierRegistryReport2$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfPagedCollectionOfReportRegistryItemDto>): ApiMarketJsonResultOfPagedCollectionOfReportRegistryItemDto => r.body)
    );
  }

  /** Path part for operation `reportsGenerateCustomerRegistryReport2()` */
  static readonly ReportsGenerateCustomerRegistryReport2Path = '/market/api/v1/reports/customer-registry/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reportsGenerateCustomerRegistryReport2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  reportsGenerateCustomerRegistryReport2$Response(params?: ReportsGenerateCustomerRegistryReport2$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfPagedCollectionOfReportRegistryItemDto>> {
    return reportsGenerateCustomerRegistryReport2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `reportsGenerateCustomerRegistryReport2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  reportsGenerateCustomerRegistryReport2(params?: ReportsGenerateCustomerRegistryReport2$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfPagedCollectionOfReportRegistryItemDto> {
    return this.reportsGenerateCustomerRegistryReport2$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfPagedCollectionOfReportRegistryItemDto>): ApiMarketJsonResultOfPagedCollectionOfReportRegistryItemDto => r.body)
    );
  }

}
