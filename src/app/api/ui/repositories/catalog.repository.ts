import { adaptCatalogItemToUI } from '../adapters/toUI/catalog-item.adapter';
import { adaptTreeNodeToUI } from '../adapters/toUI/tree-node.adapter';
import { CatalogApiService } from '../../swagger/services/catalog-api.service';
import { CatalogGetItemByLatinNameParams, catalogGetItemByLatinNameParamsAdapter } from './params/catalog-get-item-by-latin-name.params';
import { CatalogGetItemParams, catalogGetItemParamsAdapter } from './params/catalog-get-item.params';
import { CatalogGetItemsByLevelParams, catalogGetItemsByLevelParamsAdapter } from './params/catalog-get-items-by-level.params';
import { CatalogGetItemsByParentLatinNameParams, catalogGetItemsByParentLatinNameParamsAdapter } from './params/catalog-get-items-by-parent-latin-name.params';
import { CatalogGetItemsByParentParams, catalogGetItemsByParentParamsAdapter } from './params/catalog-get-items-by-parent.params';
import { CatalogItem } from '../models/catalog-item.interface';
import { CatalogTransliteAllEmptyParams, catalogTransliteAllEmptyParamsAdapter } from './params/catalog-translite-all-empty.params';
import { CatalogTransliteAllParams, catalogTransliteAllParamsAdapter } from './params/catalog-translite-all.params';
import { CatalogTransliteCatalogItemParams, catalogTransliteCatalogItemParamsAdapter } from './params/catalog-translite-catalog-item.params';
import { CatalogUploadCatalogParams, catalogUploadCatalogParamsAdapter } from './params/catalog-upload-catalog.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TreeNode } from '../models/tree-node.interface';

@Injectable({ providedIn: 'root' })
export class CatalogRepository {
  private readonly _api = inject(CatalogApiService);

  catalogGetItem(params: CatalogGetItemParams): Observable<CatalogItem> {
    return this._api.catalogGetItem(catalogGetItemParamsAdapter.adapt(params)).pipe(
      map((res) => adaptCatalogItemToUI(res?.data))
    );
  }

  catalogGetItemByLatinName(params: CatalogGetItemByLatinNameParams): Observable<CatalogItem> {
    return this._api.catalogGetItemByLatinName(catalogGetItemByLatinNameParamsAdapter.adapt(params)).pipe(
      map((res) => adaptCatalogItemToUI(res?.data))
    );
  }

  catalogGetItemsByLevel(params: CatalogGetItemsByLevelParams): Observable<TreeNode[]> {
    return this._api.catalogGetItemsByLevel(catalogGetItemsByLevelParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptTreeNodeToUI(item)))
    );
  }

  catalogGetItemsByParent(params: CatalogGetItemsByParentParams): Observable<TreeNode[]> {
    return this._api.catalogGetItemsByParent(catalogGetItemsByParentParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptTreeNodeToUI(item)))
    );
  }

  catalogGetItemsByParentLatinName(params: CatalogGetItemsByParentLatinNameParams): Observable<TreeNode[]> {
    return this._api.catalogGetItemsByParentLatinName(catalogGetItemsByParentLatinNameParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptTreeNodeToUI(item)))
    );
  }

  catalogTransliteAll(params?: CatalogTransliteAllParams): Observable<void> {
    return this._api.catalogTransliteAll(catalogTransliteAllParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  catalogTransliteAllEmpty(params?: CatalogTransliteAllEmptyParams): Observable<void> {
    return this._api.catalogTransliteAllEmpty(catalogTransliteAllEmptyParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  catalogTransliteCatalogItem(params: CatalogTransliteCatalogItemParams): Observable<string> {
    return this._api.catalogTransliteCatalogItem(catalogTransliteCatalogItemParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  catalogUploadCatalog(params?: CatalogUploadCatalogParams): Observable<boolean> {
    return this._api.catalogUploadCatalog(catalogUploadCatalogParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

}
