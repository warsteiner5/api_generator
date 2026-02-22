import { CatalogApiService } from '../../swagger/services/catalog-api.service';
import { CatalogGetItemByLatinNameParams, catalogGetItemByLatinNameAdapter } from './params/catalog-get-item-by-latin-name.params';
import { CatalogGetItemParams, catalogGetItemAdapter } from './params/catalog-get-item.params';
import { CatalogGetItemsByLevelParams, catalogGetItemsByLevelAdapter } from './params/catalog-get-items-by-level.params';
import { CatalogGetItemsByParentLatinNameParams, catalogGetItemsByParentLatinNameAdapter } from './params/catalog-get-items-by-parent-latin-name.params';
import { CatalogGetItemsByParentParams, catalogGetItemsByParentAdapter } from './params/catalog-get-items-by-parent.params';
import { CatalogItem } from '../models/catalog-item.interface';
import { catalogItemAdapter } from '../adapters/models/catalog-item.adapter';
import { CatalogTransliteAllEmptyParams, catalogTransliteAllEmptyAdapter } from './params/catalog-translite-all-empty.params';
import { CatalogTransliteAllParams, catalogTransliteAllAdapter } from './params/catalog-translite-all.params';
import { CatalogTransliteCatalogItemParams, catalogTransliteCatalogItemAdapter } from './params/catalog-translite-catalog-item.params';
import { CatalogUploadCatalogParams, catalogUploadCatalogAdapter } from './params/catalog-upload-catalog.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TreeNode } from '../models/tree-node.interface';
import { treeNodeAdapter } from '../adapters/models/tree-node.adapter';

@Injectable({ providedIn: 'root' })
export class CatalogRepository {
  private readonly _api = inject(CatalogApiService);

  catalogGetItem(params: CatalogGetItemParams): Observable<CatalogItem> {
    return this._api.catalogGetItem(catalogGetItemAdapter(params)).pipe(
      map((res) => catalogItemAdapter(res?.data))
    );
  }

  catalogGetItemByLatinName(params: CatalogGetItemByLatinNameParams): Observable<CatalogItem> {
    return this._api.catalogGetItemByLatinName(catalogGetItemByLatinNameAdapter(params)).pipe(
      map((res) => catalogItemAdapter(res?.data))
    );
  }

  catalogGetItemsByLevel(params: CatalogGetItemsByLevelParams): Observable<TreeNode[]> {
    return this._api.catalogGetItemsByLevel(catalogGetItemsByLevelAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => treeNodeAdapter(item)))
    );
  }

  catalogGetItemsByParent(params: CatalogGetItemsByParentParams): Observable<TreeNode[]> {
    return this._api.catalogGetItemsByParent(catalogGetItemsByParentAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => treeNodeAdapter(item)))
    );
  }

  catalogGetItemsByParentLatinName(params: CatalogGetItemsByParentLatinNameParams): Observable<TreeNode[]> {
    return this._api.catalogGetItemsByParentLatinName(catalogGetItemsByParentLatinNameAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => treeNodeAdapter(item)))
    );
  }

  catalogTransliteAll(params?: CatalogTransliteAllParams): Observable<void> {
    return this._api.catalogTransliteAll(catalogTransliteAllAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  catalogTransliteAllEmpty(params?: CatalogTransliteAllEmptyParams): Observable<void> {
    return this._api.catalogTransliteAllEmpty(catalogTransliteAllEmptyAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  catalogTransliteCatalogItem(params: CatalogTransliteCatalogItemParams): Observable<string> {
    return this._api.catalogTransliteCatalogItem(catalogTransliteCatalogItemAdapter(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  catalogUploadCatalog(params?: CatalogUploadCatalogParams): Observable<boolean> {
    return this._api.catalogUploadCatalog(catalogUploadCatalogAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

}
