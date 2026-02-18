import { TariffGetLicenseReward$Params } from '../../../swagger/fn/tariff/tariff-get-license-reward';

export interface TariffGetLicenseRewardParams {
  tradeLotId: number;
  price: number;
  publicationDate: string;
}

export const tariffGetLicenseRewardParamsAdapter = {
  adapt(params?: TariffGetLicenseRewardParams): TariffGetLicenseReward$Params {
    if (!params) {
      return {} as TariffGetLicenseReward$Params;
    }
    return {
      tradeLotId: params.tradeLotId,
      price: params.price,
      publicationDate: params.publicationDate,
    };
  }
};
