import bulldozer from '../../images/bulldozer.png';
import crane from '../../images/crane.png';
import excavator from '../../images/excavator.png';
import mixer from '../../images/mixer.png';
import truck from '../../images/truck.png';

export const levels = [
  {
    doThis: "Select the bulldozers",
    input: 'bulldozer',
    selector: [0, 1],
    img: [bulldozer, bulldozer],
    boardMarkup: ['&lt;bulldozer/&gt;', '&lt;bulldozer/&gt;']
  },
  {
    doThis: "Select the cranes",
    input: 'crane',
    selector: [0, 2],
    img: [crane, bulldozer, crane],
    boardMarkup: ['&lt;crane/&gt;', '&lt;bulldozer/&gt;', '&lt;crane/&gt;']
  },
  {
    doThis: "Select all cars",
    input: '*',
    selector: [0, 1, 2, 3],
    img: [crane, mixer, bulldozer, truck],
    boardMarkup: ['&lt;crane/&gt;', '&lt;mixer/&gt;', '&lt;bulldozer/&gt;', '&lt;truck/&gt;',]
  },
  {
    doThis: "Select the second bulldozer",
    input: '.work',
    selector: [1],
    img: [bulldozer, bulldozer, crane],
    boardMarkup: ['&lt;bulldozer/&gt;', '&lt;bulldozer class="work"/&gt;', '&lt;crane/&gt;']
  },
  {
    doThis: "Select the work excavator",
    input: 'excavator.work',
    selector: [0],
    img: [excavator, truck, excavator, truck],
    boardMarkup: ['&lt;excavator class="work"/&gt;', '&lt;truck class="work"/&gt;', '&lt;excavator/&gt;', '&lt;truck class="work"/&gt;']
  },
  {
    doThis: "Select the second mixer",
    input: '#repair mixer',
    selector: [2],
    img: [mixer, excavator, mixer, excavator],
    boardMarkup: ['&lt;mixer/&gt;', '&lt;excavator id="repair"&gt;', '  &lt;mixer/&gt;', '&lt;/excavator&gt;',]
  },
  {
    doThis: "Select a bulldozer neighboring to the mixer",
    input: 'mixer + bulldozer',
    selector: [1],
    img: [mixer, bulldozer, truck, bulldozer],
    boardMarkup: ['&lt;mixer/&gt;', '&lt;bulldozer/&gt;', '&lt;truck/&gt;', '&lt;bulldozer/&gt;',]
  },
  {
    doThis: "Select the mixer and crane",
    input: 'mixer, crane',
    selector: [1, 3, 4],
    img: [bulldozer, mixer, excavator, crane, crane],
    boardMarkup: ['&lt;bulldozer/&gt;', '&lt;mixer/&gt;', '&lt;excavator/&gt;', '&lt;crane/&gt;', '&lt;crane/&gt;']
  },
  {
    doThis: "Select all even mixers",
    input: 'mixer:nth-child(2n)',
    selector: [1, 3, 5],
    img: [mixer, mixer, mixer, mixer, mixer, mixer],
    boardMarkup: ['&lt;mixer/&gt;', '&lt;mixer/&gt;', '&lt;mixer/&gt;', '&lt;mixer/&gt;', '&lt;mixer/&gt;', '&lt;mixer/&gt;']
  },
  {
    doThis: "Select a mixer type 'worker'",
    input: 'mixer[type="worker"]',
    selector: [0, 1],
    img: [mixer, mixer, mixer, mixer],
    boardMarkup: ['&lt;mixer type="worker"&gt;', '&lt;mixer type="worker"&gt;', '&lt;mixer type="repair"&gt;', '&lt;mixer type="repair"&gt;',]
  },

]



