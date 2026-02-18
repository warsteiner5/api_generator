import { Application } from '../../models/application.interface';
import { ApplicationSaveUpdateApplication$Params } from '../../../swagger/fn/application/application-save-update-application';
import { adaptApiApplicationDto } from '../../adapters/toDto/api-application-dto.adapter';

export interface ApplicationSaveUpdateApplicationParams {
  body?: Application;
}

export const applicationSaveUpdateApplicationParamsAdapter = {
  adapt(params?: ApplicationSaveUpdateApplicationParams): ApplicationSaveUpdateApplication$Params {
    if (!params) {
      return {} as ApplicationSaveUpdateApplication$Params;
    }
    return {
      body: adaptApiApplicationDto(params.body),
    };
  }
};
