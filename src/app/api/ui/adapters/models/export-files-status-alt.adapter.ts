import { ApiExportFilesStatusAltDto } from '../../../swagger/models/api-export-files-status';
import { ExportFilesStatusAlt } from '../../models/export-files-status-alt.interface';
import { filesStatusAltAdapter } from './files-status-alt.adapter';

export const exportFilesStatusAltAdapter = (source?: ApiExportFilesStatusAltDto | null): ExportFilesStatusAlt => {
  return {
    ...filesStatusAltAdapter(source as unknown as Parameters<typeof filesStatusAltAdapter>[0]),
    recordsCount: source?.recordsCount,
  };
}
