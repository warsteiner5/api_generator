import { DictionariesGetAllOkeiCodes$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-all-okei-codes';

export interface DictionariesGetAllOkeiCodesParams {
}

export const dictionariesGetAllOkeiCodesParamsAdapter = {
  adapt(params?: DictionariesGetAllOkeiCodesParams): DictionariesGetAllOkeiCodes$Params {
    if (!params) {
      return {} as DictionariesGetAllOkeiCodes$Params;
    }
    return {
    };
  }
};
