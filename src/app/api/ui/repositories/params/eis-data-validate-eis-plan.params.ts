import { EisDataValidateEisPlan$Params } from '../../../swagger/fn/eis-data/eis-data-validate-eis-plan';

// @ts-ignore
export interface EisDataValidateEisPlanParams {
  planRegistrationNumber: string;
  planPositionNumber: string;
}

export function eisDataValidateEisPlanAdapter(params?: EisDataValidateEisPlanParams): EisDataValidateEisPlan$Params {
  if (!params) {
    return {} as EisDataValidateEisPlan$Params;
  }
  return {
      planRegistrationNumber: params.planRegistrationNumber,
      planPositionNumber: params.planPositionNumber,
  };
}
