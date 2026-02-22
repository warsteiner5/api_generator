import { ApiImportExcelProductResponseAltDto } from '../../../swagger/models/api-import-excel-product-response';
import { ImportExcelProductResponseAlt } from '../../models/import-excel-product-response-alt.interface';
import { productDto2Adapter } from './product-dto-2.adapter';

export const importExcelProductResponseAltAdapter = (source?: ApiImportExcelProductResponseAltDto | null): ImportExcelProductResponseAlt => {
  return {
    errorText: source?.ErrorText,
    errorsFileUrl: source?.ErrorsFileUrl,
    isSuccess: source?.IsSuccess,
    products: source?.Products?.map((item) => productDto2Adapter(item)),
  };
}
