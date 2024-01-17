import { El } from 'components/PageContent/type';

var previousEl: El;

const getPreviousEl = () => {
   return previousEl;
}
const setPreviousEl = (el: El) => {
   previousEl = el;
}

export {getPreviousEl, setPreviousEl}