import '../css/style.css'
import '../fonts/material-icon/css/material-design-iconic-font.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = ``
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
