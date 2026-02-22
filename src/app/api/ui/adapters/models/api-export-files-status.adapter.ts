import { ExportFilesStatusAlt } from '../../models/export-files-status-alt.interface';
import { ApiExportFilesStatusAltDto } from '../../../swagger/models/api-export-files-status';

export const apiExportFilesStatusAltDtoAdapter = (source?: ExportFilesStatusAlt | null): ApiExportFilesStatusAltDto => {
  return (source ?? {}) as ApiExportFilesStatusAltDto;
}
