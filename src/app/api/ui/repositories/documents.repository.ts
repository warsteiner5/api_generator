import { adaptOrganizationDocumentToUI } from '../adapters/toUI/organization-document.adapter';
import { DocumentsApiService } from '../../swagger/services/documents-api.service';
import { DocumentsDeleteDocumentParams, documentsDeleteDocumentParamsAdapter } from './params/documents-delete-document.params';
import { DocumentsGetMyDocumentsParams, documentsGetMyDocumentsParamsAdapter } from './params/documents-get-my-documents.params';
import { DocumentsSaveDocumentParams, documentsSaveDocumentParamsAdapter } from './params/documents-save-document.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { OrganizationDocument } from '../models/organization-document.interface';

@Injectable({ providedIn: 'root' })
export class DocumentsRepository {
  private readonly _api = inject(DocumentsApiService);

  documentsDeleteDocument(params: DocumentsDeleteDocumentParams): Observable<void> {
    return this._api.documentsDeleteDocument(documentsDeleteDocumentParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  documentsGetMyDocuments(params?: DocumentsGetMyDocumentsParams): Observable<OrganizationDocument[]> {
    return this._api.documentsGetMyDocuments(documentsGetMyDocumentsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptOrganizationDocumentToUI(item)))
    );
  }

  documentsSaveDocument(params?: DocumentsSaveDocumentParams): Observable<void> {
    return this._api.documentsSaveDocument(documentsSaveDocumentParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

}
