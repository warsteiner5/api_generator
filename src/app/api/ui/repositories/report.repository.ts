import { adaptSuppliersListReportToUI } from '../adapters/toUI/suppliers-list-report.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ReportApiService } from '../../swagger/services/report-api.service';
import { ReportGenerateSupplierReportParams, reportGenerateSupplierReportParamsAdapter } from './params/report-generate-supplier-report.params';
import { ReportGenerateSuppliersListReportParams, reportGenerateSuppliersListReportParamsAdapter } from './params/report-generate-suppliers-list-report.params';
import { ReportGetSupplierListReportGuidByTradeIdParams, reportGetSupplierListReportGuidByTradeIdParamsAdapter } from './params/report-get-supplier-list-report-guid-by-trade-id.params';
import { SuppliersListReport } from '../models/suppliers-list-report.interface';

@Injectable({ providedIn: 'root' })
export class ReportRepository {
  private readonly _api = inject(ReportApiService);

  reportGenerateSupplierReport(params?: ReportGenerateSupplierReportParams): Observable<Blob> {
    return this._api.reportGenerateSupplierReport(reportGenerateSupplierReportParamsAdapter.adapt(params));
  }

  reportGenerateSuppliersListReport(params?: ReportGenerateSuppliersListReportParams): Observable<Blob> {
    return this._api.reportGenerateSuppliersListReport(reportGenerateSuppliersListReportParamsAdapter.adapt(params));
  }

  reportGetSupplierListReportGuidByTradeId(params: ReportGetSupplierListReportGuidByTradeIdParams): Observable<SuppliersListReport> {
    return this._api.reportGetSupplierListReportGuidByTradeId(reportGetSupplierListReportGuidByTradeIdParamsAdapter.adapt(params)).pipe(
      map((res) => adaptSuppliersListReportToUI(res))
    );
  }

}
