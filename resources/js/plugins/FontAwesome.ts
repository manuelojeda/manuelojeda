import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPhp, faLaravel, faVuejs, faJs,
} from '@fortawesome/free-brands-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faPhp,
  faLaravel,
  faJs,
  faVuejs,
  faCaretRight,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
