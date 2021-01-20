import { header } from './header';
import { game } from './game';
import { footer } from './footer';
import { createLevels } from '../createPage/createLevels';
import { checkCurrentLevel } from '../checkCurrentLevel';



const root = document.querySelector('#root');
const container = document.createElement('div')
const wrapper = document.createElement('div')
wrapper.classList.add('wrapper')
container.classList.add('container')

wrapper.append(header, container)
container.append(game, createLevels())
root.append(wrapper, footer);

document.addEventListener("DOMContentLoaded", checkCurrentLevel())

