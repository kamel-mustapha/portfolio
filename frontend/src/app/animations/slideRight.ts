import {
  trigger,
  state,
  transition,
  style,
  animate,
} from '@angular/animations';

export let slideRight = trigger('slideRight', [
  transition('void => *', [
    style({ transform: 'translateX(10%)' }),
    animate(1000),
  ]),
]);
