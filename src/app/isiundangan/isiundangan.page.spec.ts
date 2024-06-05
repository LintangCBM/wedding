import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IsiundanganPage } from './isiundangan.page';

describe('IsiundanganPage', () => {
  let component: IsiundanganPage;
  let fixture: ComponentFixture<IsiundanganPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IsiundanganPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
