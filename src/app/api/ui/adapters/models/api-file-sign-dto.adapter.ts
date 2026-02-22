import { FileSign } from '../../models/file-sign.interface';
import { ApiFileSignDto } from '../../../swagger/models/api-file-sign-dto';

export const apiFileSignDtoAdapter = (source?: FileSign | null): ApiFileSignDto => {
  return {
    FileGuid: source?.fileGuid,
    FileSign: source?.fileSign,
  };
}
