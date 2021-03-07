import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewcompPage } from './newcomp.page';

describe('NewcompPage', () => {
  let component: NewcompPage;
  let fixture: ComponentFixture<NewcompPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcompPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewcompPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
