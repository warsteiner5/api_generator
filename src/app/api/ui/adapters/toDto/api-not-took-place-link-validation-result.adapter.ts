import { NotTookPlaceLinkValidationResultAlt } from '../../models/not-took-place-link-validation-result-alt.interface';
import { ApiNotTookPlaceLinkValidationResultAltDto } from '../../../swagger/models/api-not-took-place-link-validation-result';

export function adaptApiNotTookPlaceLinkValidationResultAltDto(source?: NotTookPlaceLinkValidationResultAlt | null): ApiNotTookPlaceLinkValidationResultAltDto {
  return {
    ErrorMessage: source?.errorMessage,
    HasError: source?.hasError,
    PublicationDate: source?.publicationDate,
    TradeName: source?.tradeName,
  };
}
