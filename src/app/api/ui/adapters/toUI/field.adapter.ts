import { ApiFieldDto } from '../../../swagger/models/api-field-dto';
import { Field } from '../../models/field.interface';
import { adaptFieldTypeAltEnumToUI } from './field-type-alt-enum.adapter';

export function adaptFieldToUI(source?: ApiFieldDto | null): Field {
  return {
    descriptionValue: source?.DescriptionValue,
    name: source?.Name ?? '',
    shortName: source?.ShortName ?? '',
    title: source?.Title ?? '',
    type: adaptFieldTypeAltEnumToUI(source?.Type),
    value: source?.Value,
  };
}
