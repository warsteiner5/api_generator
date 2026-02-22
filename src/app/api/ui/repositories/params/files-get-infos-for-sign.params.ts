import { FilesGetInfosForSign$Params } from '../../../swagger/fn/files/files-get-infos-for-sign';
import { GetFilesInfoForSign } from '../../models/get-files-info-for-sign.interface';
import { apiGetFilesInfoForSignDtoAdapter } from '../../adapters/models/api-get-files-info-for-sign-dto.adapter';

// @ts-ignore
export interface FilesGetInfosForSignParams {
  body?: GetFilesInfoForSign;
}

export function filesGetInfosForSignAdapter(params?: FilesGetInfosForSignParams): FilesGetInfosForSign$Params {
  if (!params) {
    return {} as FilesGetInfosForSign$Params;
  }
  return {
      body: apiGetFilesInfoForSignDtoAdapter(params.body),
  };
}
