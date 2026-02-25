import { ExportFilesStatusAlt } from '../../models/export-files-status-alt.interface';
import { ApiExportFilesStatusAltDto } from '../../../swagger/models/api-export-files-status';
import { apiFilesStatusAltDtoAdapter } from './api-files-status.adapter';

export const apiExportFilesStatusAltDtoAdapter = (source?: ExportFilesStatusAlt | null): ApiExportFilesStatusAltDto => {
  return {
    ...apiFilesStatusAltDtoAdapter(source as unknown as Parameters<typeof apiFilesStatusAltDtoAdapter>[0]),
    recordsCount: source?.recordsCount,
  };
}
