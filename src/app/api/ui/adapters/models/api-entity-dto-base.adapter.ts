import { EntityDtoBase } from '../../models/entity-dto-base.interface';
import { ApiEntityDtoBase } from '../../../swagger/models/api-entity-dto-base';
import { apiEntityDtoBaseWithTypedIdOfIntegerAdapter } from './api-entity-dto-base-with-typed-id-of-integer.adapter';

export const apiEntityDtoBaseAdapter = (source?: EntityDtoBase | null): ApiEntityDtoBase => {
  return {
    ...apiEntityDtoBaseWithTypedIdOfIntegerAdapter(source as unknown as Parameters<typeof apiEntityDtoBaseWithTypedIdOfIntegerAdapter>[0]),
  };
}
