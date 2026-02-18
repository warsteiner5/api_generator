import { Application } from '../../models/application.interface';
import { ApplicationPublish$Params } from '../../../swagger/fn/application/application-publish';
import { adaptApiApplicationDto } from '../../adapters/toDto/api-application-dto.adapter';

export interface ApplicationPublishParams {
  body?: Application;
}

export const applicationPublishParamsAdapter = {
  adapt(params?: ApplicationPublishParams): ApplicationPublish$Params {
    if (!params) {
      return {} as ApplicationPublish$Params;
    }
    return {
      body: adaptApiApplicationDto(params.body),
    };
  }
};
