import { ExternalSystemsGetExternalSystemById$Params } from '../../../swagger/fn/external-systems/external-systems-get-external-system-by-id';

export interface ExternalSystemsGetExternalSystemByIdParams {
  key: string;
}

export const externalSystemsGetExternalSystemByIdParamsAdapter = {
  adapt(params?: ExternalSystemsGetExternalSystemByIdParams): ExternalSystemsGetExternalSystemById$Params {
    if (!params) {
      return {} as ExternalSystemsGetExternalSystemById$Params;
    }
    return {
      key: params.key,
    };
  }
};
