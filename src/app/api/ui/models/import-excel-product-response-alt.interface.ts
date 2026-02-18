import { ProductDto2 } from './product-dto-2.interface';

export interface ImportExcelProductResponseAlt {
  errorText: string;
  errorsFileUrl: string;
  isSuccess: boolean;
  products: ProductDto2[];
}
