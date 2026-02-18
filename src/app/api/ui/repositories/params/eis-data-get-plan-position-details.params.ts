import { EisDataGetPlanPositionDetails$Params } from '../../../swagger/fn/eis-data/eis-data-get-plan-position-details';

export interface EisDataGetPlanPositionDetailsParams {
  planRegistrationNumber: string;
  positionNumber: number;
}

export const eisDataGetPlanPositionDetailsParamsAdapter = {
  adapt(params?: EisDataGetPlanPositionDetailsParams): EisDataGetPlanPositionDetails$Params {
    if (!params) {
      return {} as EisDataGetPlanPositionDetails$Params;
    }
    return {
      planRegistrationNumber: params.planRegistrationNumber,
      positionNumber: params.positionNumber,
    };
  }
};
