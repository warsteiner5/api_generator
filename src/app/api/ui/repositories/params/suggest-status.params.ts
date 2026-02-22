import { SuggestStatus$Params } from '../../../swagger/fn/suggest/suggest-status';

// @ts-ignore
export interface SuggestStatusParams {
}

export function suggestStatusAdapter(params?: SuggestStatusParams): SuggestStatus$Params {
  if (!params) {
    return {} as SuggestStatus$Params;
  }
  return {
  };
}
