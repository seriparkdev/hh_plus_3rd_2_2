import { create } from 'zustand';
import { Coupon } from '../../types';

interface Store {
  coupons: Coupon[];
  addCoupon: (newCoupon: Coupon) => void;
}

const initialCoupons = [
  {
    name: '5000원 할인 쿠폰',
    code: 'AMOUNT5000',
    discountType: 'amount',
    discountValue: 5000
  },
  {
    name: '10% 할인 쿠폰',
    code: 'PERCENT10',
    discountType: 'percentage',
    discountValue: 10
  }
];

export const useCouponStore = create<Store>()((set) => ({
  coupons: initialCoupons,
  addCoupon: (couponToAdd) =>
    set((state) => ({ coupons: [...state.coupons, couponToAdd] }))
}));
