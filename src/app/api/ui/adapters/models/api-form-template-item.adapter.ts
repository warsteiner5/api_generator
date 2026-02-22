import { FormTemplateItemAlt } from '../../models/form-template-item-alt.interface';
import { ApiFormTemplateItemAltDto } from '../../../swagger/models/api-form-template-item';

export const apiFormTemplateItemAltDtoAdapter = (source?: FormTemplateItemAlt | null): ApiFormTemplateItemAltDto => {
  return {
    DefaultValue: source?.defaultValue,
    IsEnabled: source?.isEnabled,
    IsRequired: source?.isRequired,
    IsVisible: source?.isVisible,
    Name: source?.name,
    Type: source?.type,
  };
}
