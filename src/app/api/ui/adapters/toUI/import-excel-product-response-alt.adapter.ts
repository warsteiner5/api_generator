import { ApiImportExcelProductResponseAltDto } from '../../../swagger/models/api-import-excel-product-response';
import { ImportExcelProductResponseAlt } from '../../models/import-excel-product-response-alt.interface';
import { adaptProductDto2ToUI } from './product-dto-2.adapter';

export function adaptImportExcelProductResponseAltToUI(source?: ApiImportExcelProductResponseAltDto | null): ImportExcelProductResponseAlt {
  return {
    errorText: source?.ErrorText ?? '',
    errorsFileUrl: source?.ErrorsFileUrl ?? '',
    isSuccess: source?.IsSuccess ?? false,
    products: (source?.Products ?? []).map((item) => adaptProductDto2ToUI(item)),
  };
}
