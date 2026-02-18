import { FileSign } from '../../models/file-sign.interface';
import { ApiFileSignDto } from '../../../swagger/models/api-file-sign-dto';

export function adaptApiFileSignDto(source?: FileSign | null): ApiFileSignDto {
  return {
    FileGuid: source?.fileGuid,
    FileSign: source?.fileSign,
  };
}
