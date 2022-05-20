import {
  trigger,
  state,
  transition,
  style,
  animate,
} from '@angular/animations';

export let fadeInOut = trigger('fadeInOut', [
  state('void', style({ opacity: 0 })),
  transition('void <=> *', [animate(1000)]),
]);
