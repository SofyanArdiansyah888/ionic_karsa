import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KebijakanPrivasiPage } from './kebijakan-privasi.page';

describe('KebijakanPrivasiPage', () => {
  let component: KebijakanPrivasiPage;
  let fixture: ComponentFixture<KebijakanPrivasiPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KebijakanPrivasiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KebijakanPrivasiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
