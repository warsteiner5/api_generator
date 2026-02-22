import { ProductDto2 } from './product-dto-2.interface';

// @ts-ignore
export interface ImportExcelProductResponseAlt {
  errorText: string;
  errorsFileUrl: string;
  isSuccess: boolean;
  products: ProductDto2[];
}
