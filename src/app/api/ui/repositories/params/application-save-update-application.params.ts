import { Application } from '../../models/application.interface';
import { ApplicationSaveUpdateApplication$Params } from '../../../swagger/fn/application/application-save-update-application';
import { apiApplicationDtoAdapter } from '../../adapters/models/api-application-dto.adapter';

// @ts-ignore
export interface ApplicationSaveUpdateApplicationParams {
  body?: Application;
}

export function applicationSaveUpdateApplicationAdapter(params?: ApplicationSaveUpdateApplicationParams): ApplicationSaveUpdateApplication$Params {
  if (!params) {
    return {} as ApplicationSaveUpdateApplication$Params;
  }
  return {
      body: apiApplicationDtoAdapter(params.body),
  };
}
