import { BannerKeyEnum } from '../enums/banner-key.enum';

export interface Banner {
  isAvailableToShow: boolean;
  key: BannerKeyEnum;
}
