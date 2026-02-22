import { ApiSearchResultOfOutDocument } from '../models/api-search-result-of-out-document.interface';
import { apiSearchResultOfOutDocumentAdapter } from '../adapters/models/api-search-result-of-out-document.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { OutDocument } from '../models/out-document.interface';
import { outDocumentAdapter } from '../adapters/models/out-document.adapter';
import { OutDocumentApiService } from '../../swagger/services/out-document-api.service';
import { OutDocumentGetOutDocumentParams, outDocumentGetOutDocumentAdapter } from './params/out-document-get-out-document.params';
import { OutDocumentGetOutDocumentsParams, outDocumentGetOutDocumentsAdapter } from './params/out-document-get-out-documents.params';
import { OutDocumentSetOutDocumentReadParams, outDocumentSetOutDocumentReadAdapter } from './params/out-document-set-out-document-read.params';

@Injectable({ providedIn: 'root' })
export class OutDocumentRepository {
  private readonly _api = inject(OutDocumentApiService);

  outDocumentGetOutDocument(params: OutDocumentGetOutDocumentParams): Observable<OutDocument> {
    return this._api.outDocumentGetOutDocument(outDocumentGetOutDocumentAdapter(params)).pipe(
      map((res) => outDocumentAdapter(res))
    );
  }

  outDocumentGetOutDocuments(params?: OutDocumentGetOutDocumentsParams): Observable<ApiSearchResultOfOutDocument> {
    return this._api.outDocumentGetOutDocuments(outDocumentGetOutDocumentsAdapter(params)).pipe(
      map((res) => apiSearchResultOfOutDocumentAdapter(res))
    );
  }

  outDocumentSetOutDocumentRead(params?: OutDocumentSetOutDocumentReadParams): Observable<Blob> {
    return this._api.outDocumentSetOutDocumentRead(outDocumentSetOutDocumentReadAdapter(params));
  }

}
