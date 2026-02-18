import { Banner } from '../../models/banner.interface';
import { ApiBannerDto } from '../../../swagger/models/api-banner-dto';
import { adaptApiBannerKeyEnum } from './api-banner-key-enum.adapter';

export function adaptApiBannerDto(source?: Banner | null): ApiBannerDto {
  return {
    IsAvailableToShow: source?.isAvailableToShow,
    Key: adaptApiBannerKeyEnum(source?.key),
  };
}
