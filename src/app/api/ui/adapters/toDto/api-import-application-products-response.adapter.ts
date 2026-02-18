import { ImportApplicationProductsResponseAlt } from '../../models/import-application-products-response-alt.interface';
import { ApiImportApplicationProductsResponseAltDto } from '../../../swagger/models/api-import-application-products-response';
import { adaptApiImportedApplicationProductDto } from './api-imported-application-product-dto.adapter';

export function adaptApiImportApplicationProductsResponseAltDto(source?: ImportApplicationProductsResponseAlt | null): ApiImportApplicationProductsResponseAltDto {
  return {
    ApplicationProducts: (source?.applicationProducts ?? []).map((item) => adaptApiImportedApplicationProductDto(item)),
    ErrorText: source?.errorText,
    ErrorsFileUrl: source?.errorsFileUrl,
    IsSuccess: source?.isSuccess,
  };
}
