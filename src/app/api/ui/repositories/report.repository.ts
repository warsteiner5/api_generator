import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ReportApiService } from '../../swagger/services/report-api.service';
import { ReportGenerateSupplierReportParams, reportGenerateSupplierReportAdapter } from './params/report-generate-supplier-report.params';
import { ReportGenerateSuppliersListReportParams, reportGenerateSuppliersListReportAdapter } from './params/report-generate-suppliers-list-report.params';
import { ReportGetSupplierListReportGuidByTradeIdParams, reportGetSupplierListReportGuidByTradeIdAdapter } from './params/report-get-supplier-list-report-guid-by-trade-id.params';
import { SuppliersListReport } from '../models/suppliers-list-report.interface';
import { suppliersListReportAdapter } from '../adapters/models/suppliers-list-report.adapter';

@Injectable({ providedIn: 'root' })
export class ReportRepository {
  private readonly _api = inject(ReportApiService);

  reportGenerateSupplierReport(params?: ReportGenerateSupplierReportParams): Observable<Blob> {
    return this._api.reportGenerateSupplierReport(reportGenerateSupplierReportAdapter(params));
  }

  reportGenerateSuppliersListReport(params?: ReportGenerateSuppliersListReportParams): Observable<Blob> {
    return this._api.reportGenerateSuppliersListReport(reportGenerateSuppliersListReportAdapter(params));
  }

  reportGetSupplierListReportGuidByTradeId(params: ReportGetSupplierListReportGuidByTradeIdParams): Observable<SuppliersListReport> {
    return this._api.reportGetSupplierListReportGuidByTradeId(reportGetSupplierListReportGuidByTradeIdAdapter(params)).pipe(
      map((res) => suppliersListReportAdapter(res))
    );
  }

}
