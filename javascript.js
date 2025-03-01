let buffer, operator;

const compute = (operator, left, right) => {
  switch (operator) {
    case '+': return left + right;
    case '-': return left - right;
    case '*': return left * right;
    case '/': return left / right;
    default:  return 'ERR';
  }
}

const handleClick = (e) => {
  const calculator = e.target.closest('.calculator');
  const dispBuffer = calculator.querySelector('.display > .buffer');
  const dispInput = calculator.querySelector('.display > input');
  
  switch (e.target.dataset.type) {
    case 'digit':
      dispInput.value += e.target.dataset.value;
      break;
    case 'operator':
      buffer = operator ? compute(operator, +buffer, +dispInput.value) : dispInput.value;
      operator = e.target.dataset.value;
      dispInput.value = '';
      dispBuffer.textContent = `${buffer} ${operator}`;
      break;
    case 'command':
      switch (e.target.dataset.value) {
        case 'AC':
          dispInput.value = '';
          operator = '';
          buffer = '';
          dispBuffer.textContent = '';
          break;
        case '+/-':
          dispInput.value = +dispInput.value * -1;
          break;
        case '%':
          dispInput.value = buffer ? +dispInput.value / 100 : 0;
          break;
        case '=':
          dispInput.value = compute(operator, +buffer, +dispInput.value);
          operator = '';
          buffer = '';
          dispBuffer.textContent = '';
          break;
      }
      break;
  }
};

document.querySelector('.keyboard').addEventListener('click', handleClick);





