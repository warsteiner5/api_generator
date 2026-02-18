import { ApiNotTookPlaceLinkValidationResultAltDto } from '../../../swagger/models/api-not-took-place-link-validation-result';
import { NotTookPlaceLinkValidationResultAlt } from '../../models/not-took-place-link-validation-result-alt.interface';

export function adaptNotTookPlaceLinkValidationResultAltToUI(source?: ApiNotTookPlaceLinkValidationResultAltDto | null): NotTookPlaceLinkValidationResultAlt {
  return {
    errorMessage: source?.ErrorMessage ?? '',
    hasError: source?.HasError ?? false,
    publicationDate: source?.PublicationDate ?? '',
    tradeName: source?.TradeName ?? '',
  };
}
