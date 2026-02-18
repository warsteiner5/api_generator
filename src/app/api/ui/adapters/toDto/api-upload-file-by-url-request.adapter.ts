import { UploadFileByUrlRequestAlt } from '../../models/upload-file-by-url-request-alt.interface';
import { ApiUploadFileByUrlRequestAltDto } from '../../../swagger/models/api-upload-file-by-url-request';

export function adaptApiUploadFileByUrlRequestAltDto(source?: UploadFileByUrlRequestAlt | null): ApiUploadFileByUrlRequestAltDto {
  return {
    Url: source?.url,
  };
}
