import {
  trigger,
  state,
  transition,
  style,
  animate,
} from '@angular/animations';

export let slideIn = trigger('slideIn', [
  transition('void => *', [
    style({ transform: 'translateY(-20%)' }),
    animate(1000),
  ]),
]);
