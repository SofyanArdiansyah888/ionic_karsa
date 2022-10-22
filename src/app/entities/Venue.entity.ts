/* eslint-disable @typescript-eslint/naming-convention */

import { CategoryEntity } from './Category.entity';
import { CourtEntity } from './Court.entity';
import { FacilityEntity } from './Facility.entity';


export interface VenueEntity {
  name: string;
  city: string;
  operating_day: string;
  operating_time: string;
  location: string;
  rating: string;
  description: string;
  logo: string;
  image1: string;
  image2: string;
  image3: string;
  category_id?: number;
  category?: CategoryEntity;
  courts?: CourtEntity[];
  facilities?: FacilityEntity[];

}

