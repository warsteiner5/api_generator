import { EisDataValidateEisPlan$Params } from '../../../swagger/fn/eis-data/eis-data-validate-eis-plan';

export interface EisDataValidateEisPlanParams {
  planRegistrationNumber: string;
  planPositionNumber: string;
}

export const eisDataValidateEisPlanParamsAdapter = {
  adapt(params?: EisDataValidateEisPlanParams): EisDataValidateEisPlan$Params {
    if (!params) {
      return {} as EisDataValidateEisPlan$Params;
    }
    return {
      planRegistrationNumber: params.planRegistrationNumber,
      planPositionNumber: params.planPositionNumber,
    };
  }
};
