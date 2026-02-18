import { OffersTableFilterAlt } from '../../models/offers-table-filter-alt.interface';
import { RequirementRequestsGetRequirementRequestCharacteristicTableByFilter$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-get-requirement-request-characteristic-table-by-filter';
import { adaptApiOffersTableFilterAltDto } from '../../adapters/toDto/api-offers-table-filter.adapter';

export interface RequirementRequestsGetRequirementRequestCharacteristicTableByFilterParams {
  body?: OffersTableFilterAlt;
}

export const requirementRequestsGetRequirementRequestCharacteristicTableByFilterParamsAdapter = {
  adapt(params?: RequirementRequestsGetRequirementRequestCharacteristicTableByFilterParams): RequirementRequestsGetRequirementRequestCharacteristicTableByFilter$Params {
    if (!params) {
      return {} as RequirementRequestsGetRequirementRequestCharacteristicTableByFilter$Params;
    }
    return {
      body: adaptApiOffersTableFilterAltDto(params.body),
    };
  }
};
