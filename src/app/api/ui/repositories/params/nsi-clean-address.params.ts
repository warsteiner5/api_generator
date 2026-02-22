import { NsiCleanAddress$Params } from '../../../swagger/fn/nsi/nsi-clean-address';

// @ts-ignore
export interface NsiCleanAddressParams {
  query: string;
}

export function nsiCleanAddressAdapter(params?: NsiCleanAddressParams): NsiCleanAddress$Params {
  if (!params) {
    return {} as NsiCleanAddress$Params;
  }
  return {
      query: params.query,
  };
}
