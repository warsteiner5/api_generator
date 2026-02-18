import { ApplicationProduct } from '../../models/application-product.interface';
import { ApiApplicationProductDto } from '../../../swagger/models/api-application-product-dto';

export function adaptApiApplicationProductDto(source?: ApplicationProduct | null): ApiApplicationProductDto {
  return (source ?? {}) as ApiApplicationProductDto;
}
