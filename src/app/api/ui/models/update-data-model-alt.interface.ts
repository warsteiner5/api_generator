import { UpdatePropertyOfBooleanAlt } from './update-property-of-boolean-alt.interface';
import { UpdatePropertyOfNullableDecimalAlt } from './update-property-of-nullable-decimal-alt.interface';
import { UpdatePropertyOfStringAlt } from './update-property-of-string-alt.interface';
import { UpdatePropertyOfStringOf } from './update-property-of-string-of.interface';

export interface UpdateDataModelAlt {
  categoryId: UpdatePropertyOfStringAlt;
  countryCode: UpdatePropertyOfStringAlt;
  isRemoved: UpdatePropertyOfBooleanAlt;
  isVisible: UpdatePropertyOfBooleanAlt;
  okeiCode: UpdatePropertyOfStringAlt;
  okpd2Codes: UpdatePropertyOfStringOf;
  price: UpdatePropertyOfNullableDecimalAlt;
  productDescription: UpdatePropertyOfStringAlt;
  productName: UpdatePropertyOfStringAlt;
  quantity: UpdatePropertyOfNullableDecimalAlt;
  regionCodes: UpdatePropertyOfStringOf;
  regionalProductSignChecked: UpdatePropertyOfBooleanAlt;
}
