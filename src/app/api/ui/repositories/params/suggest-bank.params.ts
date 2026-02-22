import { SuggestBank$Params } from '../../../swagger/fn/suggest/suggest-bank';

// @ts-ignore
export interface SuggestBankParams {
}

export function suggestBankAdapter(params?: SuggestBankParams): SuggestBank$Params {
  if (!params) {
    return {} as SuggestBank$Params;
  }
  return {
  };
}
