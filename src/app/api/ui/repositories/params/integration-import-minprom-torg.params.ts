import { ExternalIntegrationOfferImportRequestAlt } from '../../models/external-integration-offer-import-request-alt.interface';
import { IntegrationImportMinpromTorg$Params } from '../../../swagger/fn/integration/integration-import-minprom-torg';
import { adaptApiExternalIntegrationOfferImportRequestAltDto } from '../../adapters/toDto/api-external-integration-offer-import-request.adapter';

export interface IntegrationImportMinpromTorgParams {
  body?: ExternalIntegrationOfferImportRequestAlt;
}

export const integrationImportMinpromTorgParamsAdapter = {
  adapt(params?: IntegrationImportMinpromTorgParams): IntegrationImportMinpromTorg$Params {
    if (!params) {
      return {} as IntegrationImportMinpromTorg$Params;
    }
    return {
      body: adaptApiExternalIntegrationOfferImportRequestAltDto(params.body),
    };
  }
};
