import { NsiSuggestBank$Params } from '../../../swagger/fn/nsi/nsi-suggest-bank';

export interface NsiSuggestBankParams {
  query: string;
}

export const nsiSuggestBankParamsAdapter = {
  adapt(params?: NsiSuggestBankParams): NsiSuggestBank$Params {
    if (!params) {
      return {} as NsiSuggestBank$Params;
    }
    return {
      query: params.query,
    };
  }
};
