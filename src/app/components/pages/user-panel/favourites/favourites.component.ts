import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { latestForRent, pagination } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';
import { addCompareItem } from '../../../../shared/store/actions/compare.action';
import { removeWishlistItem } from '../../../../shared/store/actions/wishlist.action';
import { wishlistState } from '../../../../shared/store/states/wishlist.state';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent {

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Dashboard';
  public parent = 'Home';
  public child = 'Favourites';

  public totalData: number;
  public latestForRentData: latestForRent[];

  public paginate: pagination; // Pagination use only
  public pageNo: number = 1;
  public paginationData: pagination;
  public totalProperty: number;
  public filterValue : string;

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  @Select(wishlistState.getWishListData) wishlistData$: Observable<latestForRent[]>;

  constructor(
    private propertyService: PropertyService,
    private store:Store,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.route.queryParams.subscribe((params) => {
      this.pageNo = params['page'] ? params['page'] : this.pageNo;

      this.wishlistData$.subscribe(res => {
      this.latestForRentData = res;

      this.paginate = this.propertyService.getPager(this.latestForRentData.length, + this.pageNo);

        this.latestForRentData = this.latestForRentData.slice(this.paginate.startIndex, this.paginate.endIndex + 1);
      })
    })
  }

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4', this.theme_default4);
  }

  sortFilter(value: string) {
    this.filterValue = value
  }

  setPage(page: number) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: page },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false, // do trigger navigation
    });
  }

  addCompare(data: latestForRent) {
    this.store.dispatch(new addCompareItem(data));
  }

  removeItem(data: number) {
    this.store.dispatch(new removeWishlistItem(data));
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }
}
