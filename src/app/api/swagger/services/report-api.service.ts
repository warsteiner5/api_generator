/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { reportGenerateSupplierReport } from '../fn/report/report-generate-supplier-report';
import { ReportGenerateSupplierReport$Params } from '../fn/report/report-generate-supplier-report';
import { reportGenerateSuppliersListReport } from '../fn/report/report-generate-suppliers-list-report';
import { ReportGenerateSuppliersListReport$Params } from '../fn/report/report-generate-suppliers-list-report';
import { reportGetSupplierListReportGuidByTradeId } from '../fn/report/report-get-supplier-list-report-guid-by-trade-id';
import { ReportGetSupplierListReportGuidByTradeId$Params } from '../fn/report/report-get-supplier-list-report-guid-by-trade-id';
import { ApiSuppliersListReportDto } from '../models/api-suppliers-list-report-dto';

@Injectable({ providedIn: 'root' })
export class ReportApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `reportGenerateSupplierReport()` */
  static readonly ReportGenerateSupplierReportPath = '/api/reports/supplier';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reportGenerateSupplierReport()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  reportGenerateSupplierReport$Response(params?: ReportGenerateSupplierReport$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return reportGenerateSupplierReport(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `reportGenerateSupplierReport$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  reportGenerateSupplierReport(params?: ReportGenerateSupplierReport$Params, context?: HttpContext): Observable<Blob> {
    return this.reportGenerateSupplierReport$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `reportGenerateSuppliersListReport()` */
  static readonly ReportGenerateSuppliersListReportPath = '/api/reports/suppliersList';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reportGenerateSuppliersListReport()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  reportGenerateSuppliersListReport$Response(params?: ReportGenerateSuppliersListReport$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return reportGenerateSuppliersListReport(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `reportGenerateSuppliersListReport$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  reportGenerateSuppliersListReport(params?: ReportGenerateSuppliersListReport$Params, context?: HttpContext): Observable<Blob> {
    return this.reportGenerateSuppliersListReport$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `reportGetSupplierListReportGuidByTradeId()` */
  static readonly ReportGetSupplierListReportGuidByTradeIdPath = '/api/reports/{tradeId}/suppliersListReportGuid';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reportGetSupplierListReportGuidByTradeId()` instead.
   *
   * This method doesn't expect any request body.
   */
  reportGetSupplierListReportGuidByTradeId$Response(params: ReportGetSupplierListReportGuidByTradeId$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiSuppliersListReportDto>> {
    return reportGetSupplierListReportGuidByTradeId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `reportGetSupplierListReportGuidByTradeId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  reportGetSupplierListReportGuidByTradeId(params: ReportGetSupplierListReportGuidByTradeId$Params, context?: HttpContext): Observable<ApiSuppliersListReportDto> {
    return this.reportGetSupplierListReportGuidByTradeId$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiSuppliersListReportDto>): ApiSuppliersListReportDto => r.body)
    );
  }

}
