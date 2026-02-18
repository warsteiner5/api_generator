import { adaptCategoryTenantReportResultToUI } from '../adapters/toUI/category-tenant-report-result.adapter';
import { adaptCheckForAvailableGenerateReportResultToUI } from '../adapters/toUI/check-for-available-generate-report-result.adapter';
import { adaptPagedCollectionOfReportRegistryItemToUI } from '../adapters/toUI/paged-collection-of-report-registry-item.adapter';
import { adaptPagedCollectionOfReportRegistryItemWithPeriodToUI } from '../adapters/toUI/paged-collection-of-report-registry-item-with-period.adapter';
import { adaptTenantInformationReportResultToUI } from '../adapters/toUI/tenant-information-report-result.adapter';
import { CategoryTenantReportResult } from '../models/category-tenant-report-result.interface';
import { CheckForAvailableGenerateReportResult } from '../models/check-for-available-generate-report-result.interface';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PagedCollectionOfReportRegistryItem } from '../models/paged-collection-of-report-registry-item.interface';
import { PagedCollectionOfReportRegistryItemWithPeriod } from '../models/paged-collection-of-report-registry-item-with-period.interface';
import { ReportsApiService } from '../../swagger/services/reports-api.service';
import { ReportsCanGenerateNewParams, reportsCanGenerateNewParamsAdapter } from './params/reports-can-generate-new.params';
import { ReportsCategoryTenantParams, reportsCategoryTenantParamsAdapter } from './params/reports-category-tenant.params';
import { ReportsGenerateCustomerRegistryReport2Params, reportsGenerateCustomerRegistryReport2ParamsAdapter } from './params/reports-generate-customer-registry-report-2.params';
import { ReportsGenerateCustomerRegistryReportParams, reportsGenerateCustomerRegistryReportParamsAdapter } from './params/reports-generate-customer-registry-report.params';
import { ReportsGeneratePurchaseReportParams, reportsGeneratePurchaseReportParamsAdapter } from './params/reports-generate-purchase-report.params';
import { ReportsGenerateSupplierRegistryReport2Params, reportsGenerateSupplierRegistryReport2ParamsAdapter } from './params/reports-generate-supplier-registry-report-2.params';
import { ReportsGenerateSupplierRegistryReportParams, reportsGenerateSupplierRegistryReportParamsAdapter } from './params/reports-generate-supplier-registry-report.params';
import { ReportsGenerateTradeRegistryReport2Params, reportsGenerateTradeRegistryReport2ParamsAdapter } from './params/reports-generate-trade-registry-report-2.params';
import { ReportsGenerateTradeRegistryReportParams, reportsGenerateTradeRegistryReportParamsAdapter } from './params/reports-generate-trade-registry-report.params';
import { ReportsGetParams, reportsGetParamsAdapter } from './params/reports-get.params';
import { ReportsTenantInformationParams, reportsTenantInformationParamsAdapter } from './params/reports-tenant-information.params';
import { TenantInformationReportResult } from '../models/tenant-information-report-result.interface';

@Injectable({ providedIn: 'root' })
export class ReportsRepository {
  private readonly _api = inject(ReportsApiService);

  reportsCanGenerateNew(params: ReportsCanGenerateNewParams): Observable<CheckForAvailableGenerateReportResult> {
    return this._api.reportsCanGenerateNew(reportsCanGenerateNewParamsAdapter.adapt(params)).pipe(
      map((res) => adaptCheckForAvailableGenerateReportResultToUI(res?.data))
    );
  }

  reportsCategoryTenant(params?: ReportsCategoryTenantParams): Observable<CategoryTenantReportResult[]> {
    return this._api.reportsCategoryTenant(reportsCategoryTenantParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptCategoryTenantReportResultToUI(item)))
    );
  }

  reportsGenerateCustomerRegistryReport(params?: ReportsGenerateCustomerRegistryReportParams): Observable<Blob> {
    return this._api.reportsGenerateCustomerRegistryReport(reportsGenerateCustomerRegistryReportParamsAdapter.adapt(params));
  }

  reportsGenerateCustomerRegistryReport2(params?: ReportsGenerateCustomerRegistryReport2Params): Observable<PagedCollectionOfReportRegistryItem> {
    return this._api.reportsGenerateCustomerRegistryReport2(reportsGenerateCustomerRegistryReport2ParamsAdapter.adapt(params)).pipe(
      map((res) => adaptPagedCollectionOfReportRegistryItemToUI(res?.data))
    );
  }

  reportsGeneratePurchaseReport(params?: ReportsGeneratePurchaseReportParams): Observable<boolean> {
    return this._api.reportsGeneratePurchaseReport(reportsGeneratePurchaseReportParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  reportsGenerateSupplierRegistryReport(params?: ReportsGenerateSupplierRegistryReportParams): Observable<Blob> {
    return this._api.reportsGenerateSupplierRegistryReport(reportsGenerateSupplierRegistryReportParamsAdapter.adapt(params));
  }

  reportsGenerateSupplierRegistryReport2(params?: ReportsGenerateSupplierRegistryReport2Params): Observable<PagedCollectionOfReportRegistryItem> {
    return this._api.reportsGenerateSupplierRegistryReport2(reportsGenerateSupplierRegistryReport2ParamsAdapter.adapt(params)).pipe(
      map((res) => adaptPagedCollectionOfReportRegistryItemToUI(res?.data))
    );
  }

  reportsGenerateTradeRegistryReport(params?: ReportsGenerateTradeRegistryReportParams): Observable<Blob> {
    return this._api.reportsGenerateTradeRegistryReport(reportsGenerateTradeRegistryReportParamsAdapter.adapt(params));
  }

  reportsGenerateTradeRegistryReport2(params?: ReportsGenerateTradeRegistryReport2Params): Observable<PagedCollectionOfReportRegistryItemWithPeriod> {
    return this._api.reportsGenerateTradeRegistryReport2(reportsGenerateTradeRegistryReport2ParamsAdapter.adapt(params)).pipe(
      map((res) => adaptPagedCollectionOfReportRegistryItemWithPeriodToUI(res?.data))
    );
  }

  reportsGet(params?: ReportsGetParams): Observable<PagedCollectionOfReportRegistryItemWithPeriod> {
    return this._api.reportsGet(reportsGetParamsAdapter.adapt(params)).pipe(
      map((res) => adaptPagedCollectionOfReportRegistryItemWithPeriodToUI(res?.data))
    );
  }

  reportsTenantInformation(params?: ReportsTenantInformationParams): Observable<TenantInformationReportResult[]> {
    return this._api.reportsTenantInformation(reportsTenantInformationParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptTenantInformationReportResultToUI(item)))
    );
  }

}
