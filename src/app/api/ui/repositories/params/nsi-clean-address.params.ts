import { NsiCleanAddress$Params } from '../../../swagger/fn/nsi/nsi-clean-address';

export interface NsiCleanAddressParams {
  query: string;
}

export const nsiCleanAddressParamsAdapter = {
  adapt(params?: NsiCleanAddressParams): NsiCleanAddress$Params {
    if (!params) {
      return {} as NsiCleanAddress$Params;
    }
    return {
      query: params.query,
    };
  }
};
