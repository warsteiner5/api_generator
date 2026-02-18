import { DealsEditWorkGroups$Params } from '../../../swagger/fn/deals/deals-edit-work-groups';
import { EditDealWorkGroupsModelAlt } from '../../models/edit-deal-work-groups-model-alt.interface';
import { adaptApiEditDealWorkGroupsModelAltDto } from '../../adapters/toDto/api-edit-deal-work-groups-model.adapter';

export interface DealsEditWorkGroupsParams {
  body?: EditDealWorkGroupsModelAlt;
}

export const dealsEditWorkGroupsParamsAdapter = {
  adapt(params?: DealsEditWorkGroupsParams): DealsEditWorkGroups$Params {
    if (!params) {
      return {} as DealsEditWorkGroups$Params;
    }
    return {
      body: adaptApiEditDealWorkGroupsModelAltDto(params.body),
    };
  }
};
