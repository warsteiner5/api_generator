import { SuggestEmail$Params } from '../../../swagger/fn/suggest/suggest-email';

export interface SuggestEmailParams {
}

export const suggestEmailParamsAdapter = {
  adapt(params?: SuggestEmailParams): SuggestEmail$Params {
    if (!params) {
      return {} as SuggestEmail$Params;
    }
    return {
    };
  }
};
