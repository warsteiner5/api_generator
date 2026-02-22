import { ApiImportApplicationProductsResponseAltDto } from '../../../swagger/models/api-import-application-products-response';
import { ImportApplicationProductsResponseAlt } from '../../models/import-application-products-response-alt.interface';
import { importedApplicationProductAdapter } from './imported-application-product.adapter';

export const importApplicationProductsResponseAltAdapter = (source?: ApiImportApplicationProductsResponseAltDto | null): ImportApplicationProductsResponseAlt => {
  return {
    applicationProducts: source?.ApplicationProducts?.map((item) => importedApplicationProductAdapter(item)),
    errorText: source?.ErrorText,
    errorsFileUrl: source?.ErrorsFileUrl,
    isSuccess: source?.IsSuccess,
  };
}
