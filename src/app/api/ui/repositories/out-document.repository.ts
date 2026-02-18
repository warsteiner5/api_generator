import { adaptApiSearchResultOfOutDocumentToUI } from '../adapters/toUI/api-search-result-of-out-document.adapter';
import { adaptOutDocumentToUI } from '../adapters/toUI/out-document.adapter';
import { ApiSearchResultOfOutDocument } from '../models/api-search-result-of-out-document.interface';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { OutDocument } from '../models/out-document.interface';
import { OutDocumentApiService } from '../../swagger/services/out-document-api.service';
import { OutDocumentGetOutDocumentParams, outDocumentGetOutDocumentParamsAdapter } from './params/out-document-get-out-document.params';
import { OutDocumentGetOutDocumentsParams, outDocumentGetOutDocumentsParamsAdapter } from './params/out-document-get-out-documents.params';
import { OutDocumentSetOutDocumentReadParams, outDocumentSetOutDocumentReadParamsAdapter } from './params/out-document-set-out-document-read.params';

@Injectable({ providedIn: 'root' })
export class OutDocumentRepository {
  private readonly _api = inject(OutDocumentApiService);

  outDocumentGetOutDocument(params: OutDocumentGetOutDocumentParams): Observable<OutDocument> {
    return this._api.outDocumentGetOutDocument(outDocumentGetOutDocumentParamsAdapter.adapt(params)).pipe(
      map((res) => adaptOutDocumentToUI(res))
    );
  }

  outDocumentGetOutDocuments(params?: OutDocumentGetOutDocumentsParams): Observable<ApiSearchResultOfOutDocument> {
    return this._api.outDocumentGetOutDocuments(outDocumentGetOutDocumentsParamsAdapter.adapt(params)).pipe(
      map((res) => adaptApiSearchResultOfOutDocumentToUI(res))
    );
  }

  outDocumentSetOutDocumentRead(params?: OutDocumentSetOutDocumentReadParams): Observable<Blob> {
    return this._api.outDocumentSetOutDocumentRead(outDocumentSetOutDocumentReadParamsAdapter.adapt(params));
  }

}
