import { EisDataGetPlanPositionDetails$Params } from '../../../swagger/fn/eis-data/eis-data-get-plan-position-details';

// @ts-ignore
export interface EisDataGetPlanPositionDetailsParams {
  planRegistrationNumber: string;
  positionNumber: number;
}

export function eisDataGetPlanPositionDetailsAdapter(params?: EisDataGetPlanPositionDetailsParams): EisDataGetPlanPositionDetails$Params {
  if (!params) {
    return {} as EisDataGetPlanPositionDetails$Params;
  }
  return {
      planRegistrationNumber: params.planRegistrationNumber,
      positionNumber: params.positionNumber,
  };
}
