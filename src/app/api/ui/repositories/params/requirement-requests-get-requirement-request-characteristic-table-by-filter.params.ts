import { OffersTableFilterAlt } from '../../models/offers-table-filter-alt.interface';
import { RequirementRequestsGetRequirementRequestCharacteristicTableByFilter$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-get-requirement-request-characteristic-table-by-filter';
import { apiOffersTableFilterAltDtoAdapter } from '../../adapters/models/api-offers-table-filter.adapter';

// @ts-ignore
export interface RequirementRequestsGetRequirementRequestCharacteristicTableByFilterParams {
  body?: OffersTableFilterAlt;
}

export function requirementRequestsGetRequirementRequestCharacteristicTableByFilterAdapter(params?: RequirementRequestsGetRequirementRequestCharacteristicTableByFilterParams): RequirementRequestsGetRequirementRequestCharacteristicTableByFilter$Params {
  if (!params) {
    return {} as RequirementRequestsGetRequirementRequestCharacteristicTableByFilter$Params;
  }
  return {
      body: apiOffersTableFilterAltDtoAdapter(params.body),
  };
}
