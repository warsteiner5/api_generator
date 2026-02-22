import { ApiFormTemplateItemAltDto } from '../../../swagger/models/api-form-template-item';
import { FormTemplateItemAlt } from '../../models/form-template-item-alt.interface';

export const formTemplateItemAltAdapter = (source?: ApiFormTemplateItemAltDto | null): FormTemplateItemAlt => {
  return {
    defaultValue: source?.DefaultValue,
    isEnabled: source?.IsEnabled,
    isRequired: source?.IsRequired,
    isVisible: source?.IsVisible,
    name: source?.Name,
    type: source?.Type,
  };
}
