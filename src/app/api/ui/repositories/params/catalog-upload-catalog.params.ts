import { CatalogUploadCatalog$Params } from '../../../swagger/fn/catalog/catalog-upload-catalog';

export interface CatalogUploadCatalogParams {
}

export const catalogUploadCatalogParamsAdapter = {
  adapt(params?: CatalogUploadCatalogParams): CatalogUploadCatalog$Params {
    if (!params) {
      return {} as CatalogUploadCatalog$Params;
    }
    return {
    };
  }
};
