import { ApiFieldDto } from '../../../swagger/models/api-field-dto';
import { Field } from '../../models/field.interface';
import { fieldTypeAltEnumAdapter } from '../enums/field-type-alt-enum.adapter';

export const fieldAdapter = (source?: ApiFieldDto | null): Field => {
  return {
    descriptionValue: source?.DescriptionValue,
    name: source?.Name,
    shortName: source?.ShortName,
    title: source?.Title,
    type: source?.Type === null ? undefined : fieldTypeAltEnumAdapter(source?.Type),
    value: source?.Value,
  };
}
