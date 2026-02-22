import { ImportApplicationProductsResponseAlt } from '../../models/import-application-products-response-alt.interface';
import { ApiImportApplicationProductsResponseAltDto } from '../../../swagger/models/api-import-application-products-response';
import { apiImportedApplicationProductDtoAdapter } from './api-imported-application-product-dto.adapter';

export const apiImportApplicationProductsResponseAltDtoAdapter = (source?: ImportApplicationProductsResponseAlt | null): ApiImportApplicationProductsResponseAltDto => {
  return {
    ApplicationProducts: source?.applicationProducts?.map((item) => apiImportedApplicationProductDtoAdapter(item)),
    ErrorText: source?.errorText,
    ErrorsFileUrl: source?.errorsFileUrl,
    IsSuccess: source?.isSuccess,
  };
}
