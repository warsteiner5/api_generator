import { SearchObjectAlt } from './search-object-alt.interface';
import { UpdateDataModelAlt } from './update-data-model-alt.interface';

export interface BatchUpdateModelAlt {
  changedData: UpdateDataModelAlt;
  searchObject: SearchObjectAlt;
}
