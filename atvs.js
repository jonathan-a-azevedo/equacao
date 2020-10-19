alert('Eu resolvo qualquer equação de 2º grau.')
let a, b, c, delta;
a = prompt('Digite o valor de "a":');
b = prompt('Digite o valor de "b":');
c = prompt('Digite o valor de "c":');
delta = (b*b)-4*a*c;
alert(`x¹= ${[-b-Math.sqrt(delta)]/(2*a)} e x²= ${[-b+Math.sqrt(delta)]/(2*a)}`);