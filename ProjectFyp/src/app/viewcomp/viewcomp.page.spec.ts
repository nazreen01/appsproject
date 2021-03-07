import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewcompPage } from './viewcomp.page';

describe('ViewcompPage', () => {
  let component: ViewcompPage;
  let fixture: ComponentFixture<ViewcompPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcompPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewcompPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
