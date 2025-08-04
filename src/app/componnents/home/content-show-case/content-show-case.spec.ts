import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentShowCase } from './content-show-case';

describe('ContentShowCase', () => {
  let component: ContentShowCase;
  let fixture: ComponentFixture<ContentShowCase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentShowCase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentShowCase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
