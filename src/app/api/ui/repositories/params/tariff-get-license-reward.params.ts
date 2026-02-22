import { TariffGetLicenseReward$Params } from '../../../swagger/fn/tariff/tariff-get-license-reward';

// @ts-ignore
export interface TariffGetLicenseRewardParams {
  tradeLotId: number;
  price: number;
  publicationDate: string;
}

export function tariffGetLicenseRewardAdapter(params?: TariffGetLicenseRewardParams): TariffGetLicenseReward$Params {
  if (!params) {
    return {} as TariffGetLicenseReward$Params;
  }
  return {
      tradeLotId: params.tradeLotId,
      price: params.price,
      publicationDate: params.publicationDate,
  };
}
