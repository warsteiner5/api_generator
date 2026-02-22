import { BannerKeyEnum } from '../enums/banner-key.enum';

// @ts-ignore
export interface Banner {
  isAvailableToShow: boolean;
  key: BannerKeyEnum;
}
