import { SuggestParty$Params } from '../../../swagger/fn/suggest/suggest-party';

// @ts-ignore
export interface SuggestPartyParams {
}

export function suggestPartyAdapter(params?: SuggestPartyParams): SuggestParty$Params {
  if (!params) {
    return {} as SuggestParty$Params;
  }
  return {
  };
}
