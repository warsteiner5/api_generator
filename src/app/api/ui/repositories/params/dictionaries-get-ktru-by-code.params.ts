import { DictionariesGetKtruByCode$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-ktru-by-code';

export interface DictionariesGetKtruByCodeParams {
  code: string;
  version: number;
}

export const dictionariesGetKtruByCodeParamsAdapter = {
  adapt(params?: DictionariesGetKtruByCodeParams): DictionariesGetKtruByCode$Params {
    if (!params) {
      return {} as DictionariesGetKtruByCode$Params;
    }
    return {
      code: params.code,
      version: params.version,
    };
  }
};
