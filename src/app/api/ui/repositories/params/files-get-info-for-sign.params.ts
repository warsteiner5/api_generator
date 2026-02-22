import { FilesGetInfoForSign$Params } from '../../../swagger/fn/files/files-get-info-for-sign';
import { GetFileInfoForSign } from '../../models/get-file-info-for-sign.interface';
import { apiGetFileInfoForSignDtoAdapter } from '../../adapters/models/api-get-file-info-for-sign-dto.adapter';

// @ts-ignore
export interface FilesGetInfoForSignParams {
  body?: GetFileInfoForSign;
}

export function filesGetInfoForSignAdapter(params?: FilesGetInfoForSignParams): FilesGetInfoForSign$Params {
  if (!params) {
    return {} as FilesGetInfoForSign$Params;
  }
  return {
      body: apiGetFileInfoForSignDtoAdapter(params.body),
  };
}
