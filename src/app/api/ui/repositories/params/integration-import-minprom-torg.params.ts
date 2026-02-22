import { ExternalIntegrationOfferImportRequestAlt } from '../../models/external-integration-offer-import-request-alt.interface';
import { IntegrationImportMinpromTorg$Params } from '../../../swagger/fn/integration/integration-import-minprom-torg';
import { apiExternalIntegrationOfferImportRequestAltDtoAdapter } from '../../adapters/models/api-external-integration-offer-import-request.adapter';

// @ts-ignore
export interface IntegrationImportMinpromTorgParams {
  body?: ExternalIntegrationOfferImportRequestAlt;
}

export function integrationImportMinpromTorgAdapter(params?: IntegrationImportMinpromTorgParams): IntegrationImportMinpromTorg$Params {
  if (!params) {
    return {} as IntegrationImportMinpromTorg$Params;
  }
  return {
      body: apiExternalIntegrationOfferImportRequestAltDtoAdapter(params.body),
  };
}
