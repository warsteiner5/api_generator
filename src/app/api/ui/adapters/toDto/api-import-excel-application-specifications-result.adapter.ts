import { ImportExcelApplicationSpecificationsResultAlt } from '../../models/import-excel-application-specifications-result-alt.interface';
import { ApiImportExcelApplicationSpecificationsResultAltDto } from '../../../swagger/models/api-import-excel-application-specifications-result';

export function adaptApiImportExcelApplicationSpecificationsResultAltDto(source?: ImportExcelApplicationSpecificationsResultAlt | null): ApiImportExcelApplicationSpecificationsResultAltDto {
  return {
    ErrorText: source?.errorText,
    ErrorsFileUrl: source?.errorsFileUrl,
    ImportedFileName: source?.importedFileName,
    ImportedFileUrl: source?.importedFileUrl,
    IsSuccess: source?.isSuccess,
  };
}
