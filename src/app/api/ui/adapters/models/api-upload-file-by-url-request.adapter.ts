import { UploadFileByUrlRequestAlt } from '../../models/upload-file-by-url-request-alt.interface';
import { ApiUploadFileByUrlRequestAltDto } from '../../../swagger/models/api-upload-file-by-url-request';

export const apiUploadFileByUrlRequestAltDtoAdapter = (source?: UploadFileByUrlRequestAlt | null): ApiUploadFileByUrlRequestAltDto => {
  return {
    Url: source?.url,
  };
}
