import { CreateApplicationsByCustomerBindingModelAlt } from '../../models/create-applications-by-customer-binding-model-alt.interface';
import { ApiCreateApplicationsByCustomerBindingModelAltDto } from '../../../swagger/models/api-create-applications-by-customer-binding-model';

export const apiCreateApplicationsByCustomerBindingModelAltDtoAdapter = (source?: CreateApplicationsByCustomerBindingModelAlt | null): ApiCreateApplicationsByCustomerBindingModelAltDto => {
  return {
    ParticipantsIds: source?.participantsIds,
  };
}
