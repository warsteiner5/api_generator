import { ApplicationFilterObjectAlt } from '../../models/application-filter-object-alt.interface';
import { ApplicationParticipantApplications$Params } from '../../../swagger/fn/application/application-participant-applications';
import { adaptApiApplicationFilterObjectAltDto } from '../../adapters/toDto/api-application-filter-object.adapter';

export interface ApplicationParticipantApplicationsParams {
  body?: ApplicationFilterObjectAlt;
}

export const applicationParticipantApplicationsParamsAdapter = {
  adapt(params?: ApplicationParticipantApplicationsParams): ApplicationParticipantApplications$Params {
    if (!params) {
      return {} as ApplicationParticipantApplications$Params;
    }
    return {
      body: adaptApiApplicationFilterObjectAltDto(params.body),
    };
  }
};
