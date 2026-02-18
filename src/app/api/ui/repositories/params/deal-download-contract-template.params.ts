import { DealDownloadContractTemplate$Params } from '../../../swagger/fn/deal/deal-download-contract-template';

export interface DealDownloadContractTemplateParams {
  dealId: number;
  applicationId: number;
}

export const dealDownloadContractTemplateParamsAdapter = {
  adapt(params?: DealDownloadContractTemplateParams): DealDownloadContractTemplate$Params {
    if (!params) {
      return {} as DealDownloadContractTemplate$Params;
    }
    return {
      dealId: params.dealId,
      applicationId: params.applicationId,
    };
  }
};
