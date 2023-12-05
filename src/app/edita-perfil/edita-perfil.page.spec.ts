import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditaPerfilPage } from './edita-perfil.page';

describe('EditaPerfilPage', () => {
  let component: EditaPerfilPage;
  let fixture: ComponentFixture<EditaPerfilPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditaPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
