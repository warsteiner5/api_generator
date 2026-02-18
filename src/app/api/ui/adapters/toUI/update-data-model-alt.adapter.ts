import { ApiUpdateDataModelAltDto } from '../../../swagger/models/api-update-data-model';
import { UpdateDataModelAlt } from '../../models/update-data-model-alt.interface';
import { adaptUpdatePropertyOfBooleanAltToUI } from './update-property-of-boolean-alt.adapter';
import { adaptUpdatePropertyOfNullableDecimalAltToUI } from './update-property-of-nullable-decimal-alt.adapter';
import { adaptUpdatePropertyOfStringAltToUI } from './update-property-of-string-alt.adapter';
import { adaptUpdatePropertyOfStringOfToUI } from './update-property-of-string-of.adapter';

export function adaptUpdateDataModelAltToUI(source?: ApiUpdateDataModelAltDto | null): UpdateDataModelAlt {
  return {
    categoryId: adaptUpdatePropertyOfStringAltToUI(source?.CategoryId),
    countryCode: adaptUpdatePropertyOfStringAltToUI(source?.CountryCode),
    isRemoved: adaptUpdatePropertyOfBooleanAltToUI(source?.IsRemoved),
    isVisible: adaptUpdatePropertyOfBooleanAltToUI(source?.IsVisible),
    okeiCode: adaptUpdatePropertyOfStringAltToUI(source?.OkeiCode),
    okpd2Codes: adaptUpdatePropertyOfStringOfToUI(source?.Okpd2Codes),
    price: adaptUpdatePropertyOfNullableDecimalAltToUI(source?.Price),
    productDescription: adaptUpdatePropertyOfStringAltToUI(source?.ProductDescription),
    productName: adaptUpdatePropertyOfStringAltToUI(source?.ProductName),
    quantity: adaptUpdatePropertyOfNullableDecimalAltToUI(source?.Quantity),
    regionCodes: adaptUpdatePropertyOfStringOfToUI(source?.RegionCodes),
    regionalProductSignChecked: adaptUpdatePropertyOfBooleanAltToUI(source?.RegionalProductSignChecked),
  };
}
