import { SourceTypeAltEnum } from '../enums/source-type-alt.enum';

// @ts-ignore
export interface AutocompleteForeignOrganizationsRequestAlt {
  itemsPerPage: number;
  page: number;
  query: string;
  source: SourceTypeAltEnum;
}
