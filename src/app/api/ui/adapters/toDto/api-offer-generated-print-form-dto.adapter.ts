import { OfferGeneratedPrintForm } from '../../models/offer-generated-print-form.interface';
import { ApiOfferGeneratedPrintFormDto } from '../../../swagger/models/api-offer-generated-print-form-dto';

export function adaptApiOfferGeneratedPrintFormDto(source?: OfferGeneratedPrintForm | null): ApiOfferGeneratedPrintFormDto {
  return {
    FileGuid: source?.fileGuid,
    Id: source?.id,
  };
}
