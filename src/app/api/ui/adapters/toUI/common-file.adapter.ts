import { ApiCommonFileDto } from '../../../swagger/models/api-common-file-dto';
import { CommonFile } from '../../models/common-file.interface';

export function adaptCommonFileToUI(source?: ApiCommonFileDto | null): CommonFile {
  return {
    fileId: source?.FileId ?? '',
    fileName: source?.FileName ?? '',
  };
}
