import { SuggestBank$Params } from '../../../swagger/fn/suggest/suggest-bank';

export interface SuggestBankParams {
}

export const suggestBankParamsAdapter = {
  adapt(params?: SuggestBankParams): SuggestBank$Params {
    if (!params) {
      return {} as SuggestBank$Params;
    }
    return {
    };
  }
};
