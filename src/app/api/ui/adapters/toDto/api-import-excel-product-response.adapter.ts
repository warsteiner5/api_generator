import { ImportExcelProductResponseAlt } from '../../models/import-excel-product-response-alt.interface';
import { ApiImportExcelProductResponseAltDto } from '../../../swagger/models/api-import-excel-product-response';
import { adaptApiProductDto2 } from './api-product-dto-2.adapter';

export function adaptApiImportExcelProductResponseAltDto(source?: ImportExcelProductResponseAlt | null): ApiImportExcelProductResponseAltDto {
  return {
    ErrorText: source?.errorText,
    ErrorsFileUrl: source?.errorsFileUrl,
    IsSuccess: source?.isSuccess,
    Products: (source?.products ?? []).map((item) => adaptApiProductDto2(item)),
  };
}
