import { ApiUploadFileByUrlRequestAltDto } from '../../../swagger/models/api-upload-file-by-url-request';
import { UploadFileByUrlRequestAlt } from '../../models/upload-file-by-url-request-alt.interface';

export const uploadFileByUrlRequestAltAdapter = (source?: ApiUploadFileByUrlRequestAltDto | null): UploadFileByUrlRequestAlt => {
  return {
    url: source?.Url,
  };
}
