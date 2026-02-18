import { adaptRegulationDocumentTypeViewToUI } from '../adapters/toUI/regulation-document-type-view.adapter';
import { adaptRegulationDocumentViewToUI } from '../adapters/toUI/regulation-document-view.adapter';
import { adaptSearchResultOfRegulationDocumentViewToUI } from '../adapters/toUI/search-result-of-regulation-document-view.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { RegulationApiService } from '../../swagger/services/regulation-api.service';
import { RegulationDocumentTypeView } from '../models/regulation-document-type-view.interface';
import { RegulationDocumentView } from '../models/regulation-document-view.interface';
import { RegulationGetDocumentParams, regulationGetDocumentParamsAdapter } from './params/regulation-get-document.params';
import { RegulationGetDocumentTypeParams, regulationGetDocumentTypeParamsAdapter } from './params/regulation-get-document-type.params';
import { RegulationGetRegulationDocumentsByFilterParams, regulationGetRegulationDocumentsByFilterParamsAdapter } from './params/regulation-get-regulation-documents-by-filter.params';
import { RegulationGetRegulationDocumentTypesParams, regulationGetRegulationDocumentTypesParamsAdapter } from './params/regulation-get-regulation-document-types.params';
import { RegulationHideRegulationDocumentParams, regulationHideRegulationDocumentParamsAdapter } from './params/regulation-hide-regulation-document.params';
import { RegulationHideRegulationDocumentTypeParams, regulationHideRegulationDocumentTypeParamsAdapter } from './params/regulation-hide-regulation-document-type.params';
import { RegulationSaveDocumentParams, regulationSaveDocumentParamsAdapter } from './params/regulation-save-document.params';
import { RegulationSaveDocumentTypeParams, regulationSaveDocumentTypeParamsAdapter } from './params/regulation-save-document-type.params';
import { SearchResultOfRegulationDocumentView } from '../models/search-result-of-regulation-document-view.interface';

@Injectable({ providedIn: 'root' })
export class RegulationRepository {
  private readonly _api = inject(RegulationApiService);

  regulationGetDocument(params: RegulationGetDocumentParams): Observable<RegulationDocumentView> {
    return this._api.regulationGetDocument(regulationGetDocumentParamsAdapter.adapt(params)).pipe(
      map((res) => adaptRegulationDocumentViewToUI(res?.data))
    );
  }

  regulationGetDocumentType(params: RegulationGetDocumentTypeParams): Observable<RegulationDocumentTypeView> {
    return this._api.regulationGetDocumentType(regulationGetDocumentTypeParamsAdapter.adapt(params)).pipe(
      map((res) => adaptRegulationDocumentTypeViewToUI(res?.data))
    );
  }

  regulationGetRegulationDocumentsByFilter(params?: RegulationGetRegulationDocumentsByFilterParams): Observable<SearchResultOfRegulationDocumentView> {
    return this._api.regulationGetRegulationDocumentsByFilter(regulationGetRegulationDocumentsByFilterParamsAdapter.adapt(params)).pipe(
      map((res) => adaptSearchResultOfRegulationDocumentViewToUI(res?.data))
    );
  }

  regulationGetRegulationDocumentTypes(params?: RegulationGetRegulationDocumentTypesParams): Observable<RegulationDocumentTypeView[]> {
    return this._api.regulationGetRegulationDocumentTypes(regulationGetRegulationDocumentTypesParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptRegulationDocumentTypeViewToUI(item)))
    );
  }

  regulationHideRegulationDocument(params: RegulationHideRegulationDocumentParams): Observable<void> {
    return this._api.regulationHideRegulationDocument(regulationHideRegulationDocumentParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  regulationHideRegulationDocumentType(params: RegulationHideRegulationDocumentTypeParams): Observable<void> {
    return this._api.regulationHideRegulationDocumentType(regulationHideRegulationDocumentTypeParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  regulationSaveDocument(params?: RegulationSaveDocumentParams): Observable<void> {
    return this._api.regulationSaveDocument(regulationSaveDocumentParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  regulationSaveDocumentType(params?: RegulationSaveDocumentTypeParams): Observable<void> {
    return this._api.regulationSaveDocumentType(regulationSaveDocumentTypeParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

}
