import { TestBed, inject } from '@angular/core/testing';

import { CategoryAndProductsService } from './category-and-products.service';

describe('CategoryAndProductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryAndProductsService]
    });
  });

  it('should be created', inject([CategoryAndProductsService], (service: CategoryAndProductsService) => {
    expect(service).toBeTruthy();
  }));
});
