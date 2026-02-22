import { ExternalDealApiService } from '../../swagger/services/external-deal-api.service';
import { ExternalDealCard } from '../models/external-deal-card.interface';
import { externalDealCardAdapter } from '../adapters/models/external-deal-card.adapter';
import { ExternalDealCardDocument } from '../models/external-deal-card-document.interface';
import { externalDealCardDocumentAdapter } from '../adapters/models/external-deal-card-document.adapter';
import { ExternalDealCreateExternalDealParams, externalDealCreateExternalDealAdapter } from './params/external-deal-create-external-deal.params';
import { ExternalDealDeleteDocumentParams, externalDealDeleteDocumentAdapter } from './params/external-deal-delete-document.params';
import { ExternalDealDeleteParams, externalDealDeleteAdapter } from './params/external-deal-delete.params';
import { ExternalDealExportToExcelByFilterParams, externalDealExportToExcelByFilterAdapter } from './params/external-deal-export-to-excel-by-filter.params';
import { ExternalDealExportToExcelForOperatorParams, externalDealExportToExcelForOperatorAdapter } from './params/external-deal-export-to-excel-for-operator.params';
import { ExternalDealExportToExcelParams, externalDealExportToExcelAdapter } from './params/external-deal-export-to-excel.params';
import { ExternalDealGetExternalDealCardForOperatorParams, externalDealGetExternalDealCardForOperatorAdapter } from './params/external-deal-get-external-deal-card-for-operator.params';
import { ExternalDealGetExternalDealCardParams, externalDealGetExternalDealCardAdapter } from './params/external-deal-get-external-deal-card.params';
import { ExternalDealGetExternalDealsForAdminParams, externalDealGetExternalDealsForAdminAdapter } from './params/external-deal-get-external-deals-for-admin.params';
import { ExternalDealGetExternalDealsParams, externalDealGetExternalDealsAdapter } from './params/external-deal-get-external-deals.params';
import { ExternalDealUploadDocumentsParams, externalDealUploadDocumentsAdapter } from './params/external-deal-upload-documents.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ExternalDealRepository {
  private readonly _api = inject(ExternalDealApiService);

  externalDealCreateExternalDeal(params?: ExternalDealCreateExternalDealParams): Observable<Blob> {
    return this._api.externalDealCreateExternalDeal(externalDealCreateExternalDealAdapter(params));
  }

  externalDealDelete(params: ExternalDealDeleteParams): Observable<Blob> {
    return this._api.externalDealDelete(externalDealDeleteAdapter(params));
  }

  externalDealDeleteDocument(params?: ExternalDealDeleteDocumentParams): Observable<void> {
    return this._api.externalDealDeleteDocument(externalDealDeleteDocumentAdapter(params));
  }

  externalDealExportToExcel(params?: ExternalDealExportToExcelParams): Observable<Blob> {
    return this._api.externalDealExportToExcel(externalDealExportToExcelAdapter(params));
  }

  externalDealExportToExcelByFilter(params?: ExternalDealExportToExcelByFilterParams): Observable<Blob> {
    return this._api.externalDealExportToExcelByFilter(externalDealExportToExcelByFilterAdapter(params));
  }

  externalDealExportToExcelForOperator(params?: ExternalDealExportToExcelForOperatorParams): Observable<Blob> {
    return this._api.externalDealExportToExcelForOperator(externalDealExportToExcelForOperatorAdapter(params));
  }

  externalDealGetExternalDealCard(params: ExternalDealGetExternalDealCardParams): Observable<ExternalDealCard> {
    return this._api.externalDealGetExternalDealCard(externalDealGetExternalDealCardAdapter(params)).pipe(
      map((res) => externalDealCardAdapter(res))
    );
  }

  externalDealGetExternalDealCardForOperator(params: ExternalDealGetExternalDealCardForOperatorParams): Observable<ExternalDealCard> {
    return this._api.externalDealGetExternalDealCardForOperator(externalDealGetExternalDealCardForOperatorAdapter(params)).pipe(
      map((res) => externalDealCardAdapter(res))
    );
  }

  externalDealGetExternalDeals(params?: ExternalDealGetExternalDealsParams): Observable<Blob> {
    return this._api.externalDealGetExternalDeals(externalDealGetExternalDealsAdapter(params));
  }

  externalDealGetExternalDealsForAdmin(params?: ExternalDealGetExternalDealsForAdminParams): Observable<Blob> {
    return this._api.externalDealGetExternalDealsForAdmin(externalDealGetExternalDealsForAdminAdapter(params));
  }

  externalDealUploadDocuments(params?: ExternalDealUploadDocumentsParams): Observable<ExternalDealCardDocument[]> {
    return this._api.externalDealUploadDocuments(externalDealUploadDocumentsAdapter(params)).pipe(
      map((res) => (res ?? []).map((item) => externalDealCardDocumentAdapter(item)))
    );
  }

}
