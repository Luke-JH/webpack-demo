import _ from 'lodash';
function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

function addingVar() {
  const element = document.createElement('div');

  element.innerHTML = `${process.env.TEST_VAR}`;

  return element;
}

document.body.appendChild(addingVar());

//addimg second var
const secondVar = process.env.SECOND_VAR;
const secondVarElement = document.getElementById('SECOND_VAR');
secondVarElement.textContent = secondVar;
