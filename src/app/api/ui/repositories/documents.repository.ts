import { DocumentsApiService } from '../../swagger/services/documents-api.service';
import { DocumentsDeleteDocumentParams, documentsDeleteDocumentAdapter } from './params/documents-delete-document.params';
import { DocumentsGetMyDocumentsParams, documentsGetMyDocumentsAdapter } from './params/documents-get-my-documents.params';
import { DocumentsSaveDocumentParams, documentsSaveDocumentAdapter } from './params/documents-save-document.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MarketPaginationResult } from '../models/market-pagination-result.interface';
import { marketPaginationResultOfListOfOrganizationDocumentAdapter } from '../adapters/models/market-pagination-result-of-list-of-organization-document.adapter';
import { Observable } from 'rxjs';
import { OrganizationDocument } from '../models/organization-document.interface';

@Injectable({ providedIn: 'root' })
export class DocumentsRepository {
  private readonly _api = inject(DocumentsApiService);

  documentsDeleteDocument(params: DocumentsDeleteDocumentParams): Observable<void> {
    return this._api.documentsDeleteDocument(documentsDeleteDocumentAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  documentsGetMyDocuments(params?: DocumentsGetMyDocumentsParams): Observable<MarketPaginationResult<OrganizationDocument[]>> {
    return this._api.documentsGetMyDocuments(documentsGetMyDocumentsAdapter(params)).pipe(
      map((res) => marketPaginationResultOfListOfOrganizationDocumentAdapter(res?.data))
    );
  }

  documentsSaveDocument(params?: DocumentsSaveDocumentParams): Observable<void> {
    return this._api.documentsSaveDocument(documentsSaveDocumentAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

}
