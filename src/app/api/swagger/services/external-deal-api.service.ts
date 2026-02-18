/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiExternalDealCardDocumentDto } from '../models/api-external-deal-card-document-dto';
import { ApiExternalDealCardDto } from '../models/api-external-deal-card-dto';
import { externalDealCreateExternalDeal } from '../fn/external-deal/external-deal-create-external-deal';
import { ExternalDealCreateExternalDeal$Params } from '../fn/external-deal/external-deal-create-external-deal';
import { externalDealDelete } from '../fn/external-deal/external-deal-delete';
import { ExternalDealDelete$Params } from '../fn/external-deal/external-deal-delete';
import { externalDealDeleteDocument } from '../fn/external-deal/external-deal-delete-document';
import { ExternalDealDeleteDocument$Params } from '../fn/external-deal/external-deal-delete-document';
import { externalDealExportToExcel } from '../fn/external-deal/external-deal-export-to-excel';
import { ExternalDealExportToExcel$Params } from '../fn/external-deal/external-deal-export-to-excel';
import { externalDealExportToExcelByFilter } from '../fn/external-deal/external-deal-export-to-excel-by-filter';
import { ExternalDealExportToExcelByFilter$Params } from '../fn/external-deal/external-deal-export-to-excel-by-filter';
import { externalDealExportToExcelForOperator } from '../fn/external-deal/external-deal-export-to-excel-for-operator';
import { ExternalDealExportToExcelForOperator$Params } from '../fn/external-deal/external-deal-export-to-excel-for-operator';
import { externalDealGetExternalDealCard } from '../fn/external-deal/external-deal-get-external-deal-card';
import { ExternalDealGetExternalDealCard$Params } from '../fn/external-deal/external-deal-get-external-deal-card';
import { externalDealGetExternalDealCardForOperator } from '../fn/external-deal/external-deal-get-external-deal-card-for-operator';
import { ExternalDealGetExternalDealCardForOperator$Params } from '../fn/external-deal/external-deal-get-external-deal-card-for-operator';
import { externalDealGetExternalDeals } from '../fn/external-deal/external-deal-get-external-deals';
import { ExternalDealGetExternalDeals$Params } from '../fn/external-deal/external-deal-get-external-deals';
import { externalDealGetExternalDealsForAdmin } from '../fn/external-deal/external-deal-get-external-deals-for-admin';
import { ExternalDealGetExternalDealsForAdmin$Params } from '../fn/external-deal/external-deal-get-external-deals-for-admin';
import { externalDealUploadDocuments } from '../fn/external-deal/external-deal-upload-documents';
import { ExternalDealUploadDocuments$Params } from '../fn/external-deal/external-deal-upload-documents';

@Injectable({ providedIn: 'root' })
export class ExternalDealApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `externalDealCreateExternalDeal()` */
  static readonly ExternalDealCreateExternalDealPath = '/api/externaldeal/createexternaldeal';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `externalDealCreateExternalDeal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  externalDealCreateExternalDeal$Response(params?: ExternalDealCreateExternalDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return externalDealCreateExternalDeal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `externalDealCreateExternalDeal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  externalDealCreateExternalDeal(params?: ExternalDealCreateExternalDeal$Params, context?: HttpContext): Observable<Blob> {
    return this.externalDealCreateExternalDeal$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `externalDealGetExternalDeals()` */
  static readonly ExternalDealGetExternalDealsPath = '/api/externaldeal/getexternaldeals';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `externalDealGetExternalDeals()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  externalDealGetExternalDeals$Response(params?: ExternalDealGetExternalDeals$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return externalDealGetExternalDeals(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `externalDealGetExternalDeals$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  externalDealGetExternalDeals(params?: ExternalDealGetExternalDeals$Params, context?: HttpContext): Observable<Blob> {
    return this.externalDealGetExternalDeals$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `externalDealGetExternalDealsForAdmin()` */
  static readonly ExternalDealGetExternalDealsForAdminPath = '/api/externaldeal/getExternalDealsForAdmin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `externalDealGetExternalDealsForAdmin()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  externalDealGetExternalDealsForAdmin$Response(params?: ExternalDealGetExternalDealsForAdmin$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return externalDealGetExternalDealsForAdmin(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `externalDealGetExternalDealsForAdmin$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  externalDealGetExternalDealsForAdmin(params?: ExternalDealGetExternalDealsForAdmin$Params, context?: HttpContext): Observable<Blob> {
    return this.externalDealGetExternalDealsForAdmin$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `externalDealDelete()` */
  static readonly ExternalDealDeletePath = '/api/externaldeal/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `externalDealDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  externalDealDelete$Response(params: ExternalDealDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return externalDealDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `externalDealDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  externalDealDelete(params: ExternalDealDelete$Params, context?: HttpContext): Observable<Blob> {
    return this.externalDealDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `externalDealGetExternalDealCard()` */
  static readonly ExternalDealGetExternalDealCardPath = '/api/externaldeal/GetExternalDealCard/{dealId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `externalDealGetExternalDealCard()` instead.
   *
   * This method doesn't expect any request body.
   */
  externalDealGetExternalDealCard$Response(params: ExternalDealGetExternalDealCard$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiExternalDealCardDto>> {
    return externalDealGetExternalDealCard(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `externalDealGetExternalDealCard$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  externalDealGetExternalDealCard(params: ExternalDealGetExternalDealCard$Params, context?: HttpContext): Observable<ApiExternalDealCardDto> {
    return this.externalDealGetExternalDealCard$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiExternalDealCardDto>): ApiExternalDealCardDto => r.body)
    );
  }

  /** Path part for operation `externalDealGetExternalDealCardForOperator()` */
  static readonly ExternalDealGetExternalDealCardForOperatorPath = '/api/externaldeal/GetExternalDealCardForOperator/{dealId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `externalDealGetExternalDealCardForOperator()` instead.
   *
   * This method doesn't expect any request body.
   */
  externalDealGetExternalDealCardForOperator$Response(params: ExternalDealGetExternalDealCardForOperator$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiExternalDealCardDto>> {
    return externalDealGetExternalDealCardForOperator(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `externalDealGetExternalDealCardForOperator$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  externalDealGetExternalDealCardForOperator(params: ExternalDealGetExternalDealCardForOperator$Params, context?: HttpContext): Observable<ApiExternalDealCardDto> {
    return this.externalDealGetExternalDealCardForOperator$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiExternalDealCardDto>): ApiExternalDealCardDto => r.body)
    );
  }

  /** Path part for operation `externalDealExportToExcel()` */
  static readonly ExternalDealExportToExcelPath = '/api/externaldeal/exporttoexcel';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `externalDealExportToExcel()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  externalDealExportToExcel$Response(params?: ExternalDealExportToExcel$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return externalDealExportToExcel(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `externalDealExportToExcel$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  externalDealExportToExcel(params?: ExternalDealExportToExcel$Params, context?: HttpContext): Observable<Blob> {
    return this.externalDealExportToExcel$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `externalDealExportToExcelForOperator()` */
  static readonly ExternalDealExportToExcelForOperatorPath = '/api/externaldeal/exportToExcelForOperator';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `externalDealExportToExcelForOperator()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  externalDealExportToExcelForOperator$Response(params?: ExternalDealExportToExcelForOperator$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return externalDealExportToExcelForOperator(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `externalDealExportToExcelForOperator$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  externalDealExportToExcelForOperator(params?: ExternalDealExportToExcelForOperator$Params, context?: HttpContext): Observable<Blob> {
    return this.externalDealExportToExcelForOperator$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `externalDealExportToExcelByFilter()` */
  static readonly ExternalDealExportToExcelByFilterPath = '/api/externaldeal/ExportToExcelByFilter';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `externalDealExportToExcelByFilter()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  externalDealExportToExcelByFilter$Response(params?: ExternalDealExportToExcelByFilter$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return externalDealExportToExcelByFilter(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `externalDealExportToExcelByFilter$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  externalDealExportToExcelByFilter(params?: ExternalDealExportToExcelByFilter$Params, context?: HttpContext): Observable<Blob> {
    return this.externalDealExportToExcelByFilter$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `externalDealDeleteDocument()` */
  static readonly ExternalDealDeleteDocumentPath = '/api/externaldeal/DeleteDocument';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `externalDealDeleteDocument()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  externalDealDeleteDocument$Response(params?: ExternalDealDeleteDocument$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return externalDealDeleteDocument(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `externalDealDeleteDocument$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  externalDealDeleteDocument(params?: ExternalDealDeleteDocument$Params, context?: HttpContext): Observable<void> {
    return this.externalDealDeleteDocument$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `externalDealUploadDocuments()` */
  static readonly ExternalDealUploadDocumentsPath = '/api/externaldeal/UploadDocuments';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `externalDealUploadDocuments()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  externalDealUploadDocuments$Response(params?: ExternalDealUploadDocuments$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ApiExternalDealCardDocumentDto>>> {
    return externalDealUploadDocuments(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `externalDealUploadDocuments$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  externalDealUploadDocuments(params?: ExternalDealUploadDocuments$Params, context?: HttpContext): Observable<Array<ApiExternalDealCardDocumentDto>> {
    return this.externalDealUploadDocuments$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ApiExternalDealCardDocumentDto>>): Array<ApiExternalDealCardDocumentDto> => r.body)
    );
  }

}
