import { ApplicationProduct } from '../../models/application-product.interface';
import { ApiApplicationProductDto } from '../../../swagger/models/api-application-product-dto';

export const apiApplicationProductDtoAdapter = (source?: ApplicationProduct | null): ApiApplicationProductDto => {
  return (source ?? {}) as ApiApplicationProductDto;
}
