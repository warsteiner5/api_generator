import { ApiFileSignDto } from '../../../swagger/models/api-file-sign-dto';
import { FileSign } from '../../models/file-sign.interface';

export function adaptFileSignToUI(source?: ApiFileSignDto | null): FileSign {
  return {
    fileGuid: source?.FileGuid ?? '',
    fileSign: source?.FileSign ?? '',
  };
}
