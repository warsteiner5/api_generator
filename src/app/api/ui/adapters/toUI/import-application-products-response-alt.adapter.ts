import { ApiImportApplicationProductsResponseAltDto } from '../../../swagger/models/api-import-application-products-response';
import { ImportApplicationProductsResponseAlt } from '../../models/import-application-products-response-alt.interface';
import { adaptImportedApplicationProductToUI } from './imported-application-product.adapter';

export function adaptImportApplicationProductsResponseAltToUI(source?: ApiImportApplicationProductsResponseAltDto | null): ImportApplicationProductsResponseAlt {
  return {
    applicationProducts: (source?.ApplicationProducts ?? []).map((item) => adaptImportedApplicationProductToUI(item)),
    errorText: source?.ErrorText ?? '',
    errorsFileUrl: source?.ErrorsFileUrl ?? '',
    isSuccess: source?.IsSuccess ?? false,
  };
}
