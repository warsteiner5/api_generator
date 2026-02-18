import { FederalLawLimitAltEnum } from '../../enums/federal-law-limit-alt.enum';
import { FederalLawsGetAll$Params } from '../../../swagger/fn/federal-laws/federal-laws-get-all';
import { adaptApiFederalLawLimitAltEnum } from '../../adapters/toDto/api-federal-law-limit.adapter';

export interface FederalLawsGetAllParams {
  limit?: FederalLawLimitAltEnum;
}

export const federalLawsGetAllParamsAdapter = {
  adapt(params?: FederalLawsGetAllParams): FederalLawsGetAll$Params {
    if (!params) {
      return {} as FederalLawsGetAll$Params;
    }
    return {
      limit: adaptApiFederalLawLimitAltEnum(params.limit),
    };
  }
};
