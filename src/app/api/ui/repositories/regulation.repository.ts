import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { RegulationApiService } from '../../swagger/services/regulation-api.service';
import { RegulationDocumentTypeView } from '../models/regulation-document-type-view.interface';
import { regulationDocumentTypeViewAdapter } from '../adapters/models/regulation-document-type-view.adapter';
import { RegulationDocumentView } from '../models/regulation-document-view.interface';
import { regulationDocumentViewAdapter } from '../adapters/models/regulation-document-view.adapter';
import { RegulationGetDocumentParams, regulationGetDocumentAdapter } from './params/regulation-get-document.params';
import { RegulationGetDocumentTypeParams, regulationGetDocumentTypeAdapter } from './params/regulation-get-document-type.params';
import { RegulationGetRegulationDocumentsByFilterParams, regulationGetRegulationDocumentsByFilterAdapter } from './params/regulation-get-regulation-documents-by-filter.params';
import { RegulationGetRegulationDocumentTypesParams, regulationGetRegulationDocumentTypesAdapter } from './params/regulation-get-regulation-document-types.params';
import { RegulationHideRegulationDocumentParams, regulationHideRegulationDocumentAdapter } from './params/regulation-hide-regulation-document.params';
import { RegulationHideRegulationDocumentTypeParams, regulationHideRegulationDocumentTypeAdapter } from './params/regulation-hide-regulation-document-type.params';
import { RegulationSaveDocumentParams, regulationSaveDocumentAdapter } from './params/regulation-save-document.params';
import { RegulationSaveDocumentTypeParams, regulationSaveDocumentTypeAdapter } from './params/regulation-save-document-type.params';
import { SearchResultOfRegulationDocumentView } from '../models/search-result-of-regulation-document-view.interface';
import { searchResultOfRegulationDocumentViewAdapter } from '../adapters/models/search-result-of-regulation-document-view.adapter';

@Injectable({ providedIn: 'root' })
export class RegulationRepository {
  private readonly _api = inject(RegulationApiService);

  regulationGetDocument(params: RegulationGetDocumentParams): Observable<RegulationDocumentView> {
    return this._api.regulationGetDocument(regulationGetDocumentAdapter(params)).pipe(
      map((res) => regulationDocumentViewAdapter(res?.data))
    );
  }

  regulationGetDocumentType(params: RegulationGetDocumentTypeParams): Observable<RegulationDocumentTypeView> {
    return this._api.regulationGetDocumentType(regulationGetDocumentTypeAdapter(params)).pipe(
      map((res) => regulationDocumentTypeViewAdapter(res?.data))
    );
  }

  regulationGetRegulationDocumentsByFilter(params?: RegulationGetRegulationDocumentsByFilterParams): Observable<SearchResultOfRegulationDocumentView> {
    return this._api.regulationGetRegulationDocumentsByFilter(regulationGetRegulationDocumentsByFilterAdapter(params)).pipe(
      map((res) => searchResultOfRegulationDocumentViewAdapter(res?.data))
    );
  }

  regulationGetRegulationDocumentTypes(params?: RegulationGetRegulationDocumentTypesParams): Observable<RegulationDocumentTypeView[]> {
    return this._api.regulationGetRegulationDocumentTypes(regulationGetRegulationDocumentTypesAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => regulationDocumentTypeViewAdapter(item)))
    );
  }

  regulationHideRegulationDocument(params: RegulationHideRegulationDocumentParams): Observable<void> {
    return this._api.regulationHideRegulationDocument(regulationHideRegulationDocumentAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  regulationHideRegulationDocumentType(params: RegulationHideRegulationDocumentTypeParams): Observable<void> {
    return this._api.regulationHideRegulationDocumentType(regulationHideRegulationDocumentTypeAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  regulationSaveDocument(params?: RegulationSaveDocumentParams): Observable<void> {
    return this._api.regulationSaveDocument(regulationSaveDocumentAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  regulationSaveDocumentType(params?: RegulationSaveDocumentTypeParams): Observable<void> {
    return this._api.regulationSaveDocumentType(regulationSaveDocumentTypeAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

}
