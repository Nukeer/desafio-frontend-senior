import { CurrencyMaskConfig } from 'ngx-currency';

export function getOptionsToCurrencyMask(medida: string): Partial<CurrencyMaskConfig> {
  if (medida === 'kg' || medida === 'lt') {
    return { prefix: '', decimal: ',', precision: 3, max: 999 };
  } else if (medida === 'un') {
    return { prefix: '', thousands: '', decimal: '' };
  } else {
    return { prefix: '', thousands: '', decimal: '' };
  }
}
