import { adaptExternalDealCardDocumentToUI } from '../adapters/toUI/external-deal-card-document.adapter';
import { adaptExternalDealCardToUI } from '../adapters/toUI/external-deal-card.adapter';
import { ExternalDealApiService } from '../../swagger/services/external-deal-api.service';
import { ExternalDealCard } from '../models/external-deal-card.interface';
import { ExternalDealCardDocument } from '../models/external-deal-card-document.interface';
import { ExternalDealCreateExternalDealParams, externalDealCreateExternalDealParamsAdapter } from './params/external-deal-create-external-deal.params';
import { ExternalDealDeleteDocumentParams, externalDealDeleteDocumentParamsAdapter } from './params/external-deal-delete-document.params';
import { ExternalDealDeleteParams, externalDealDeleteParamsAdapter } from './params/external-deal-delete.params';
import { ExternalDealExportToExcelByFilterParams, externalDealExportToExcelByFilterParamsAdapter } from './params/external-deal-export-to-excel-by-filter.params';
import { ExternalDealExportToExcelForOperatorParams, externalDealExportToExcelForOperatorParamsAdapter } from './params/external-deal-export-to-excel-for-operator.params';
import { ExternalDealExportToExcelParams, externalDealExportToExcelParamsAdapter } from './params/external-deal-export-to-excel.params';
import { ExternalDealGetExternalDealCardForOperatorParams, externalDealGetExternalDealCardForOperatorParamsAdapter } from './params/external-deal-get-external-deal-card-for-operator.params';
import { ExternalDealGetExternalDealCardParams, externalDealGetExternalDealCardParamsAdapter } from './params/external-deal-get-external-deal-card.params';
import { ExternalDealGetExternalDealsForAdminParams, externalDealGetExternalDealsForAdminParamsAdapter } from './params/external-deal-get-external-deals-for-admin.params';
import { ExternalDealGetExternalDealsParams, externalDealGetExternalDealsParamsAdapter } from './params/external-deal-get-external-deals.params';
import { ExternalDealUploadDocumentsParams, externalDealUploadDocumentsParamsAdapter } from './params/external-deal-upload-documents.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ExternalDealRepository {
  private readonly _api = inject(ExternalDealApiService);

  externalDealCreateExternalDeal(params?: ExternalDealCreateExternalDealParams): Observable<Blob> {
    return this._api.externalDealCreateExternalDeal(externalDealCreateExternalDealParamsAdapter.adapt(params));
  }

  externalDealDelete(params: ExternalDealDeleteParams): Observable<Blob> {
    return this._api.externalDealDelete(externalDealDeleteParamsAdapter.adapt(params));
  }

  externalDealDeleteDocument(params?: ExternalDealDeleteDocumentParams): Observable<void> {
    return this._api.externalDealDeleteDocument(externalDealDeleteDocumentParamsAdapter.adapt(params));
  }

  externalDealExportToExcel(params?: ExternalDealExportToExcelParams): Observable<Blob> {
    return this._api.externalDealExportToExcel(externalDealExportToExcelParamsAdapter.adapt(params));
  }

  externalDealExportToExcelByFilter(params?: ExternalDealExportToExcelByFilterParams): Observable<Blob> {
    return this._api.externalDealExportToExcelByFilter(externalDealExportToExcelByFilterParamsAdapter.adapt(params));
  }

  externalDealExportToExcelForOperator(params?: ExternalDealExportToExcelForOperatorParams): Observable<Blob> {
    return this._api.externalDealExportToExcelForOperator(externalDealExportToExcelForOperatorParamsAdapter.adapt(params));
  }

  externalDealGetExternalDealCard(params: ExternalDealGetExternalDealCardParams): Observable<ExternalDealCard> {
    return this._api.externalDealGetExternalDealCard(externalDealGetExternalDealCardParamsAdapter.adapt(params)).pipe(
      map((res) => adaptExternalDealCardToUI(res))
    );
  }

  externalDealGetExternalDealCardForOperator(params: ExternalDealGetExternalDealCardForOperatorParams): Observable<ExternalDealCard> {
    return this._api.externalDealGetExternalDealCardForOperator(externalDealGetExternalDealCardForOperatorParamsAdapter.adapt(params)).pipe(
      map((res) => adaptExternalDealCardToUI(res))
    );
  }

  externalDealGetExternalDeals(params?: ExternalDealGetExternalDealsParams): Observable<Blob> {
    return this._api.externalDealGetExternalDeals(externalDealGetExternalDealsParamsAdapter.adapt(params));
  }

  externalDealGetExternalDealsForAdmin(params?: ExternalDealGetExternalDealsForAdminParams): Observable<Blob> {
    return this._api.externalDealGetExternalDealsForAdmin(externalDealGetExternalDealsForAdminParamsAdapter.adapt(params));
  }

  externalDealUploadDocuments(params?: ExternalDealUploadDocumentsParams): Observable<ExternalDealCardDocument[]> {
    return this._api.externalDealUploadDocuments(externalDealUploadDocumentsParamsAdapter.adapt(params)).pipe(
      map((res) => (res ?? []).map((item) => adaptExternalDealCardDocumentToUI(item)))
    );
  }

}
