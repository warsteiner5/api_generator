import { FederalLawLimitAltEnum } from '../../enums/federal-law-limit-alt.enum';
import { FederalLawsGetAll$Params } from '../../../swagger/fn/federal-laws/federal-laws-get-all';
import { apiFederalLawLimitAltEnumAdapter } from '../../adapters/enums/api-federal-law-limit.adapter';

// @ts-ignore
export interface FederalLawsGetAllParams {
  limit?: FederalLawLimitAltEnum;
}

export function federalLawsGetAllAdapter(params?: FederalLawsGetAllParams): FederalLawsGetAll$Params {
  if (!params) {
    return {} as FederalLawsGetAll$Params;
  }
  return {
      limit: apiFederalLawLimitAltEnumAdapter(params.limit),
  };
}
