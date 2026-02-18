import { UpdateDataModelAlt } from '../../models/update-data-model-alt.interface';
import { ApiUpdateDataModelAltDto } from '../../../swagger/models/api-update-data-model';
import { adaptApiUpdatePropertyOfBooleanAltDto } from './api-update-property-of-boolean.adapter';
import { adaptApiUpdatePropertyOfNullableDecimalAltDto } from './api-update-property-of-nullable-decimal.adapter';
import { adaptApiUpdatePropertyOfStringAltDto } from './api-update-property-of-string.adapter';
import { adaptApiUpdatePropertyOfStringOf } from './api-update-property-of-string-of.adapter';

export function adaptApiUpdateDataModelAltDto(source?: UpdateDataModelAlt | null): ApiUpdateDataModelAltDto {
  return {
    CategoryId: adaptApiUpdatePropertyOfStringAltDto(source?.categoryId),
    CountryCode: adaptApiUpdatePropertyOfStringAltDto(source?.countryCode),
    IsRemoved: adaptApiUpdatePropertyOfBooleanAltDto(source?.isRemoved),
    IsVisible: adaptApiUpdatePropertyOfBooleanAltDto(source?.isVisible),
    OkeiCode: adaptApiUpdatePropertyOfStringAltDto(source?.okeiCode),
    Okpd2Codes: adaptApiUpdatePropertyOfStringOf(source?.okpd2Codes),
    Price: adaptApiUpdatePropertyOfNullableDecimalAltDto(source?.price),
    ProductDescription: adaptApiUpdatePropertyOfStringAltDto(source?.productDescription),
    ProductName: adaptApiUpdatePropertyOfStringAltDto(source?.productName),
    Quantity: adaptApiUpdatePropertyOfNullableDecimalAltDto(source?.quantity),
    RegionCodes: adaptApiUpdatePropertyOfStringOf(source?.regionCodes),
    RegionalProductSignChecked: adaptApiUpdatePropertyOfBooleanAltDto(source?.regionalProductSignChecked),
  };
}
