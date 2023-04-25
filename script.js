function onesDigit(n) {
  while (n > 9) {
  	n = n % 10;
  }

	return n;
}

// Do not change the code below

const n = prompt("Enter Number:");
alert(onesDigit(n));



