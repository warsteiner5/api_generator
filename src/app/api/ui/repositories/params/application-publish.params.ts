import { Application } from '../../models/application.interface';
import { ApplicationPublish$Params } from '../../../swagger/fn/application/application-publish';
import { apiApplicationDtoAdapter } from '../../adapters/models/api-application-dto.adapter';

// @ts-ignore
export interface ApplicationPublishParams {
  body?: Application;
}

export function applicationPublishAdapter(params?: ApplicationPublishParams): ApplicationPublish$Params {
  if (!params) {
    return {} as ApplicationPublish$Params;
  }
  return {
      body: apiApplicationDtoAdapter(params.body),
  };
}
