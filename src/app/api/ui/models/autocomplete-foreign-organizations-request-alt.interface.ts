import { SourceTypeAltEnum } from '../enums/source-type-alt.enum';

export interface AutocompleteForeignOrganizationsRequestAlt {
  itemsPerPage: number;
  page: number;
  query: string;
  source: SourceTypeAltEnum;
}
