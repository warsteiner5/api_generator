import { ApiFileDto } from '../../../swagger/models/api-file-dto';
import { File } from '../../models/file.interface';

export const fileAdapter = (source?: ApiFileDto | null): File => {
  return {
    fileGuid: source?.FileGuid,
    name: source?.Name,
  };
}
