import { ApplicationFilterObjectAlt } from '../../models/application-filter-object-alt.interface';
import { ApplicationParticipantApplications$Params } from '../../../swagger/fn/application/application-participant-applications';
import { apiApplicationFilterObjectAltDtoAdapter } from '../../adapters/models/api-application-filter-object.adapter';

// @ts-ignore
export interface ApplicationParticipantApplicationsParams {
  body?: ApplicationFilterObjectAlt;
}

export function applicationParticipantApplicationsAdapter(params?: ApplicationParticipantApplicationsParams): ApplicationParticipantApplications$Params {
  if (!params) {
    return {} as ApplicationParticipantApplications$Params;
  }
  return {
      body: apiApplicationFilterObjectAltDtoAdapter(params.body),
  };
}
