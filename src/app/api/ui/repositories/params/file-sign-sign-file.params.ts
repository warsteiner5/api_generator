import { FileSign } from '../../models/file-sign.interface';
import { FileSignSignFile$Params } from '../../../swagger/fn/file-sign/file-sign-sign-file';
import { apiFileSignDtoAdapter } from '../../adapters/models/api-file-sign-dto.adapter';

// @ts-ignore
export interface FileSignSignFileParams {
  body?: FileSign;
}

export function fileSignSignFileAdapter(params?: FileSignSignFileParams): FileSignSignFile$Params {
  if (!params) {
    return {} as FileSignSignFile$Params;
  }
  return {
      body: apiFileSignDtoAdapter(params.body),
  };
}
