import { SuggestEmail$Params } from '../../../swagger/fn/suggest/suggest-email';

// @ts-ignore
export interface SuggestEmailParams {
}

export function suggestEmailAdapter(params?: SuggestEmailParams): SuggestEmail$Params {
  if (!params) {
    return {} as SuggestEmail$Params;
  }
  return {
  };
}
