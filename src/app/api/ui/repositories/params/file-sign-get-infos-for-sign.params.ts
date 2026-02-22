import { FileSignGetInfosForSign$Params } from '../../../swagger/fn/file-sign/file-sign-get-infos-for-sign';
import { GetFilesInfoForSign } from '../../models/get-files-info-for-sign.interface';
import { apiGetFilesInfoForSignDtoAdapter } from '../../adapters/models/api-get-files-info-for-sign-dto.adapter';

// @ts-ignore
export interface FileSignGetInfosForSignParams {
  body?: GetFilesInfoForSign;
}

export function fileSignGetInfosForSignAdapter(params?: FileSignGetInfosForSignParams): FileSignGetInfosForSign$Params {
  if (!params) {
    return {} as FileSignGetInfosForSign$Params;
  }
  return {
      body: apiGetFilesInfoForSignDtoAdapter(params.body),
  };
}
