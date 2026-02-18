import { ApiImportExcelApplicationSpecificationsResultAltDto } from '../../../swagger/models/api-import-excel-application-specifications-result';
import { ImportExcelApplicationSpecificationsResultAlt } from '../../models/import-excel-application-specifications-result-alt.interface';

export function adaptImportExcelApplicationSpecificationsResultAltToUI(source?: ApiImportExcelApplicationSpecificationsResultAltDto | null): ImportExcelApplicationSpecificationsResultAlt {
  return {
    errorText: source?.ErrorText ?? '',
    errorsFileUrl: source?.ErrorsFileUrl ?? '',
    importedFileName: source?.ImportedFileName ?? '',
    importedFileUrl: source?.ImportedFileUrl ?? '',
    isSuccess: source?.IsSuccess ?? false,
  };
}
