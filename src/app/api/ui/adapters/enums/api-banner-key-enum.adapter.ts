import { BannerKeyEnum } from '../../enums/banner-key.enum';
import { ApiBannerKeyEnum } from '../../../swagger/models/api-banner-key-enum';

export const apiBannerKeyEnumAdapter = (source?: BannerKeyEnum | null): ApiBannerKeyEnum => {
  switch (source) {
    case BannerKeyEnum.Undefined:
      return ApiBannerKeyEnum.Undefined;
    case BannerKeyEnum.AboutPurchaseMethodMapping:
      return ApiBannerKeyEnum.AboutPurchaseMethodMapping;
    default:
      throw new Error(`Enum value is not defined: BannerKeyEnum=${String(source)}`);
  }
}
