import { ApiExportFilesStatusAltDto } from '../../../swagger/models/api-export-files-status';
import { ExportFilesStatusAlt } from '../../models/export-files-status-alt.interface';

export const exportFilesStatusAltAdapter = (source?: ApiExportFilesStatusAltDto | null): ExportFilesStatusAlt => {
  return (source ?? {}) as ExportFilesStatusAlt;
}
