import {Location} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CourtEntity} from 'src/app/entities/Court.entity';
import {VenueEntity} from 'src/app/entities/Venue.entity';
import {ApiService} from 'src/app/services/api.service';
import {environment} from 'src/app/environments/environment';

@Component({
  selector: 'app-pilih',
  templateUrl: './pilih.page.html',
  styleUrls: ['./pilih.page.scss'],
})
export class PilihPage implements OnInit {
  venue: VenueEntity;
  courts: CourtEntity[] = [];
  imageUrl = environment.imageUrl;
  constructor(
    private router: Router,
    private apiService: ApiService,
    private location: Location
  ) {
  }

  async ngOnInit() {
    const temp = this.router.url.split('/');
    const result =  await this.apiService.venue(temp[4]);
    this.venue = result?.data?.data;
    this.courts = this.venue?.courts;
  }

  backClick() {
    this.location.back();
  }

  bookingClick(court: CourtEntity) {
    this.router.navigateByUrl(`/court/${court.id}/booking`);
  }
}
