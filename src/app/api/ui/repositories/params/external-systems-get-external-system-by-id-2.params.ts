import { ExternalSystemsGetExternalSystemById2$Params } from '../../../swagger/fn/external-systems/external-systems-get-external-system-by-id-2';

// @ts-ignore
export interface ExternalSystemsGetExternalSystemById2Params {
  id: number;
}

export function externalSystemsGetExternalSystemById2Adapter(params?: ExternalSystemsGetExternalSystemById2Params): ExternalSystemsGetExternalSystemById2$Params {
  if (!params) {
    return {} as ExternalSystemsGetExternalSystemById2$Params;
  }
  return {
      id: params.id,
  };
}
