import { DictionaryGetOkpd2ValuesByCodes$Params } from '../../../swagger/fn/dictionary/dictionary-get-okpd-2-values-by-codes';
import { UsedClassificatorTypeEnum } from '../../enums/used-classificator-type.enum';
import { adaptApiUsedClassificatorTypeEnum } from '../../adapters/toDto/api-used-classificator-type-enum.adapter';

export interface DictionaryGetOkpd2ValuesByCodesParams {
  usedClassificatorType?: UsedClassificatorTypeEnum;
  values?: string[];
}

export const dictionaryGetOkpd2ValuesByCodesParamsAdapter = {
  adapt(params?: DictionaryGetOkpd2ValuesByCodesParams): DictionaryGetOkpd2ValuesByCodes$Params {
    if (!params) {
      return {} as DictionaryGetOkpd2ValuesByCodes$Params;
    }
    return {
      UsedClassificatorType: adaptApiUsedClassificatorTypeEnum(params.usedClassificatorType),
      Values: params.values,
    };
  }
};
