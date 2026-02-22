import { DealDownloadSpecification$Params } from '../../../swagger/fn/deal/deal-download-specification';

// @ts-ignore
export interface DealDownloadSpecificationParams {
  dealId: number;
  applicationId: number;
}

export function dealDownloadSpecificationAdapter(params?: DealDownloadSpecificationParams): DealDownloadSpecification$Params {
  if (!params) {
    return {} as DealDownloadSpecification$Params;
  }
  return {
      dealId: params.dealId,
      applicationId: params.applicationId,
  };
}
