import { DealDownloadContractTemplate$Params } from '../../../swagger/fn/deal/deal-download-contract-template';

// @ts-ignore
export interface DealDownloadContractTemplateParams {
  dealId: number;
  applicationId: number;
}

export function dealDownloadContractTemplateAdapter(params?: DealDownloadContractTemplateParams): DealDownloadContractTemplate$Params {
  if (!params) {
    return {} as DealDownloadContractTemplate$Params;
  }
  return {
      dealId: params.dealId,
      applicationId: params.applicationId,
  };
}
