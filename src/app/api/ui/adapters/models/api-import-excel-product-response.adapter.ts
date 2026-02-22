import { ImportExcelProductResponseAlt } from '../../models/import-excel-product-response-alt.interface';
import { ApiImportExcelProductResponseAltDto } from '../../../swagger/models/api-import-excel-product-response';
import { apiProductDto2Adapter } from './api-product-dto-2.adapter';

export const apiImportExcelProductResponseAltDtoAdapter = (source?: ImportExcelProductResponseAlt | null): ApiImportExcelProductResponseAltDto => {
  return {
    ErrorText: source?.errorText,
    ErrorsFileUrl: source?.errorsFileUrl,
    IsSuccess: source?.isSuccess,
    Products: source?.products?.map((item) => apiProductDto2Adapter(item)),
  };
}
