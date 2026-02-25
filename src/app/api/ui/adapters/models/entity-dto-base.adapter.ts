import { ApiEntityDtoBase } from '../../../swagger/models/api-entity-dto-base';
import { EntityDtoBase } from '../../models/entity-dto-base.interface';
import { entityDtoBaseWithTypedIdOfIntegerAdapter } from './entity-dto-base-with-typed-id-of-integer.adapter';

export const entityDtoBaseAdapter = (source?: ApiEntityDtoBase | null): EntityDtoBase => {
  return {
    ...entityDtoBaseWithTypedIdOfIntegerAdapter(source as unknown as Parameters<typeof entityDtoBaseWithTypedIdOfIntegerAdapter>[0]),
  };
}
