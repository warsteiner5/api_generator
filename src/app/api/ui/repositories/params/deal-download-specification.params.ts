import { DealDownloadSpecification$Params } from '../../../swagger/fn/deal/deal-download-specification';

export interface DealDownloadSpecificationParams {
  dealId: number;
  applicationId: number;
}

export const dealDownloadSpecificationParamsAdapter = {
  adapt(params?: DealDownloadSpecificationParams): DealDownloadSpecification$Params {
    if (!params) {
      return {} as DealDownloadSpecification$Params;
    }
    return {
      dealId: params.dealId,
      applicationId: params.applicationId,
    };
  }
};
