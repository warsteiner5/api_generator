import { ApiDistrictNameEnum } from '../../../swagger/models/api-district-name-enum';
import { DistrictNameEnum } from '../../enums/district-name.enum';

export const districtNameEnumAdapter = (source?: ApiDistrictNameEnum | null): DistrictNameEnum => {
  switch (source) {
    case ApiDistrictNameEnum.CentralDistrict:
      return DistrictNameEnum.CentralDistrict;
    case ApiDistrictNameEnum.NorthWestDistrict:
      return DistrictNameEnum.NorthWestDistrict;
    case ApiDistrictNameEnum.SouthDistrict:
      return DistrictNameEnum.SouthDistrict;
    case ApiDistrictNameEnum.NorthCaucasianDistrict:
      return DistrictNameEnum.NorthCaucasianDistrict;
    case ApiDistrictNameEnum.PrivolzhskyDistrict:
      return DistrictNameEnum.PrivolzhskyDistrict;
    case ApiDistrictNameEnum.UralDistrict:
      return DistrictNameEnum.UralDistrict;
    case ApiDistrictNameEnum.SiberianDistrict:
      return DistrictNameEnum.SiberianDistrict;
    case ApiDistrictNameEnum.FarEasternDistrict:
      return DistrictNameEnum.FarEasternDistrict;
    default:
      throw new Error(`Enum value is not defined: ApiDistrictNameEnum=${String(source)}`);
  }
}
