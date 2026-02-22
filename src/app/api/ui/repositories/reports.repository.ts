import { CategoryTenantReportResult } from '../models/category-tenant-report-result.interface';
import { categoryTenantReportResultAdapter } from '../adapters/models/category-tenant-report-result.adapter';
import { CheckForAvailableGenerateReportResult } from '../models/check-for-available-generate-report-result.interface';
import { checkForAvailableGenerateReportResultAdapter } from '../adapters/models/check-for-available-generate-report-result.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PagedCollectionOfReportRegistryItem } from '../models/paged-collection-of-report-registry-item.interface';
import { pagedCollectionOfReportRegistryItemAdapter } from '../adapters/models/paged-collection-of-report-registry-item.adapter';
import { PagedCollectionOfReportRegistryItemWithPeriod } from '../models/paged-collection-of-report-registry-item-with-period.interface';
import { pagedCollectionOfReportRegistryItemWithPeriodAdapter } from '../adapters/models/paged-collection-of-report-registry-item-with-period.adapter';
import { ReportsApiService } from '../../swagger/services/reports-api.service';
import { ReportsCanGenerateNewParams, reportsCanGenerateNewAdapter } from './params/reports-can-generate-new.params';
import { ReportsCategoryTenantParams, reportsCategoryTenantAdapter } from './params/reports-category-tenant.params';
import { ReportsGenerateCustomerRegistryReport2Params, reportsGenerateCustomerRegistryReport2Adapter } from './params/reports-generate-customer-registry-report-2.params';
import { ReportsGenerateCustomerRegistryReportParams, reportsGenerateCustomerRegistryReportAdapter } from './params/reports-generate-customer-registry-report.params';
import { ReportsGeneratePurchaseReportParams, reportsGeneratePurchaseReportAdapter } from './params/reports-generate-purchase-report.params';
import { ReportsGenerateSupplierRegistryReport2Params, reportsGenerateSupplierRegistryReport2Adapter } from './params/reports-generate-supplier-registry-report-2.params';
import { ReportsGenerateSupplierRegistryReportParams, reportsGenerateSupplierRegistryReportAdapter } from './params/reports-generate-supplier-registry-report.params';
import { ReportsGenerateTradeRegistryReport2Params, reportsGenerateTradeRegistryReport2Adapter } from './params/reports-generate-trade-registry-report-2.params';
import { ReportsGenerateTradeRegistryReportParams, reportsGenerateTradeRegistryReportAdapter } from './params/reports-generate-trade-registry-report.params';
import { ReportsGetParams, reportsGetAdapter } from './params/reports-get.params';
import { ReportsTenantInformationParams, reportsTenantInformationAdapter } from './params/reports-tenant-information.params';
import { TenantInformationReportResult } from '../models/tenant-information-report-result.interface';
import { tenantInformationReportResultAdapter } from '../adapters/models/tenant-information-report-result.adapter';

@Injectable({ providedIn: 'root' })
export class ReportsRepository {
  private readonly _api = inject(ReportsApiService);

  reportsCanGenerateNew(params: ReportsCanGenerateNewParams): Observable<CheckForAvailableGenerateReportResult> {
    return this._api.reportsCanGenerateNew(reportsCanGenerateNewAdapter(params)).pipe(
      map((res) => checkForAvailableGenerateReportResultAdapter(res?.data))
    );
  }

  reportsCategoryTenant(params?: ReportsCategoryTenantParams): Observable<CategoryTenantReportResult[]> {
    return this._api.reportsCategoryTenant(reportsCategoryTenantAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => categoryTenantReportResultAdapter(item)))
    );
  }

  reportsGenerateCustomerRegistryReport(params?: ReportsGenerateCustomerRegistryReportParams): Observable<Blob> {
    return this._api.reportsGenerateCustomerRegistryReport(reportsGenerateCustomerRegistryReportAdapter(params));
  }

  reportsGenerateCustomerRegistryReport2(params?: ReportsGenerateCustomerRegistryReport2Params): Observable<PagedCollectionOfReportRegistryItem> {
    return this._api.reportsGenerateCustomerRegistryReport2(reportsGenerateCustomerRegistryReport2Adapter(params)).pipe(
      map((res) => pagedCollectionOfReportRegistryItemAdapter(res?.data))
    );
  }

  reportsGeneratePurchaseReport(params?: ReportsGeneratePurchaseReportParams): Observable<boolean> {
    return this._api.reportsGeneratePurchaseReport(reportsGeneratePurchaseReportAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  reportsGenerateSupplierRegistryReport(params?: ReportsGenerateSupplierRegistryReportParams): Observable<Blob> {
    return this._api.reportsGenerateSupplierRegistryReport(reportsGenerateSupplierRegistryReportAdapter(params));
  }

  reportsGenerateSupplierRegistryReport2(params?: ReportsGenerateSupplierRegistryReport2Params): Observable<PagedCollectionOfReportRegistryItem> {
    return this._api.reportsGenerateSupplierRegistryReport2(reportsGenerateSupplierRegistryReport2Adapter(params)).pipe(
      map((res) => pagedCollectionOfReportRegistryItemAdapter(res?.data))
    );
  }

  reportsGenerateTradeRegistryReport(params?: ReportsGenerateTradeRegistryReportParams): Observable<Blob> {
    return this._api.reportsGenerateTradeRegistryReport(reportsGenerateTradeRegistryReportAdapter(params));
  }

  reportsGenerateTradeRegistryReport2(params?: ReportsGenerateTradeRegistryReport2Params): Observable<PagedCollectionOfReportRegistryItemWithPeriod> {
    return this._api.reportsGenerateTradeRegistryReport2(reportsGenerateTradeRegistryReport2Adapter(params)).pipe(
      map((res) => pagedCollectionOfReportRegistryItemWithPeriodAdapter(res?.data))
    );
  }

  reportsGet(params?: ReportsGetParams): Observable<PagedCollectionOfReportRegistryItemWithPeriod> {
    return this._api.reportsGet(reportsGetAdapter(params)).pipe(
      map((res) => pagedCollectionOfReportRegistryItemWithPeriodAdapter(res?.data))
    );
  }

  reportsTenantInformation(params?: ReportsTenantInformationParams): Observable<TenantInformationReportResult[]> {
    return this._api.reportsTenantInformation(reportsTenantInformationAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => tenantInformationReportResultAdapter(item)))
    );
  }

}
