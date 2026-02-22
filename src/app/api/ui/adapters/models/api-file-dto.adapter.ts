import { File } from '../../models/file.interface';
import { ApiFileDto } from '../../../swagger/models/api-file-dto';

export const apiFileDtoAdapter = (source?: File | null): ApiFileDto => {
  return {
    FileGuid: source?.fileGuid,
    Name: source?.name,
  };
}
