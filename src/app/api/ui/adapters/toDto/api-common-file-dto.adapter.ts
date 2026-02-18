import { CommonFile } from '../../models/common-file.interface';
import { ApiCommonFileDto } from '../../../swagger/models/api-common-file-dto';

export function adaptApiCommonFileDto(source?: CommonFile | null): ApiCommonFileDto {
  return {
    FileId: source?.fileId,
    FileName: source?.fileName,
  };
}
