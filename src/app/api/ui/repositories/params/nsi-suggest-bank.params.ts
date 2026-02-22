import { NsiSuggestBank$Params } from '../../../swagger/fn/nsi/nsi-suggest-bank';

// @ts-ignore
export interface NsiSuggestBankParams {
  query: string;
}

export function nsiSuggestBankAdapter(params?: NsiSuggestBankParams): NsiSuggestBank$Params {
  if (!params) {
    return {} as NsiSuggestBank$Params;
  }
  return {
      query: params.query,
  };
}
