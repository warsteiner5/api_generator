import { ExternalSystemsGetExternalSystemById$Params } from '../../../swagger/fn/external-systems/external-systems-get-external-system-by-id';

// @ts-ignore
export interface ExternalSystemsGetExternalSystemByIdParams {
  key: string;
}

export function externalSystemsGetExternalSystemByIdAdapter(params?: ExternalSystemsGetExternalSystemByIdParams): ExternalSystemsGetExternalSystemById$Params {
  if (!params) {
    return {} as ExternalSystemsGetExternalSystemById$Params;
  }
  return {
      key: params.key,
  };
}
