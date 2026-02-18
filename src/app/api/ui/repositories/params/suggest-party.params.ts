import { SuggestParty$Params } from '../../../swagger/fn/suggest/suggest-party';

export interface SuggestPartyParams {
}

export const suggestPartyParamsAdapter = {
  adapt(params?: SuggestPartyParams): SuggestParty$Params {
    if (!params) {
      return {} as SuggestParty$Params;
    }
    return {
    };
  }
};
