import render from './dom';

const element = (
  <div>
      hello<span onClick={() => {}}>world!</span>
  </div>
);

render(element, document.getElementById('container'));
