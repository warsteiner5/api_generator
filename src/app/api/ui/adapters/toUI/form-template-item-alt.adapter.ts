import { ApiFormTemplateItemAltDto } from '../../../swagger/models/api-form-template-item';
import { FormTemplateItemAlt } from '../../models/form-template-item-alt.interface';

export function adaptFormTemplateItemAltToUI(source?: ApiFormTemplateItemAltDto | null): FormTemplateItemAlt {
  return {
    defaultValue: source?.DefaultValue ?? '',
    isEnabled: source?.IsEnabled ?? false,
    isRequired: source?.IsRequired ?? false,
    isVisible: source?.IsVisible ?? false,
    name: source?.Name ?? '',
    type: source?.Type ?? '',
  };
}
