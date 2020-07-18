/**
 * Capitalizes a String.
 * @return {String}
*/
String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
};

/**
 * Replaces all instances of the provided String.
 * @param {String} search
 * @return {String} replacement
*/
String.prototype.replaceAll = function(search, replacement) {
	return this.replace(new RegExp(search, 'g'), replacement);
};

/**
 * Essentially, it's Java's String.format();
 * "%s - Test".format(1); returns "1 - Test"
 * @return {String}
*/
String.prototype.format = function() {
	let s = this.toString();

	for (let i = 0; i < arguments.length; i += 1)
		s = s.replace("%s", arguments[i]);

	return s;
};

/**
 * Essentially, it's C#'s String.Format();
 * "{0} - Test".format(1); returns "1 - Test"
 * @return {String}
*/
String.prototype.cformat = function() {
	let s = this.toString();

	for (let i = 0; i < arguments.length; i += 1)
		s = s.replace("{" + i + "}", arguments[i]);

	return s;
};

/**
 * Reverse a String.
 * @return {String}
*/
String.prototype.reverse = function() {
	let s = this.toString().split("");
	let _s = "";

	while (s.length > 0)
		_s += s.pop();

	return _s;
};

/**
 * Shift a String. "abcd".shift(2); returns "cdab"
 * @param {Number} int
 * @return {String}
*/
String.prototype.shift = function(int) {
	if (isNaN(int)) int = 0;

	let s = this.toString().split("");

	for (let i = 0; i < int; i += 1)
		s.push(s.shift());

	return s.join("");
};

/**
 * Randomly alternate between uppercase and lowercase
 * @return {String}
*/
String.prototype.alternate = function() {
	let s = "";
	
	for (let i = 0; i < this.length; i += 1)
		s += (Math.floor(Math.random() * 10) % 2 === 0) ? this.split("")[i].toUpperCase() : this.split("")[i].toLowerCase();

	return s;
};

/**
 * "abcd".removeStart(2); returns "cd"
 * @param {Number} int
 * @return {String}
*/
String.prototype.removeStart = function(int) {
	if (isNaN(int)) int = 0;

	return this.substring(int, this.length);
};

/**
 * "abcd".removeEnd(2); returns "ab"
 * @param {Number} int
 * @return {String}
*/
String.prototype.removeEnd = function(int) {
	if (isNaN(int)) int = 0;

	return this.substring(0, this.length - int);
};

/**
 * "example".space(); returns "e x a m p l e"
 * "foo bar".space(); returns "f o o  b a r"
 * @return {String}
*/
String.prototype.space = function() {
	let w = this.split(' ');

	if (w.length > 1) {
		let s = "";
		let _x = -1;

		for (x in w) {
			if (x != _x)
				s += '  ';

			s += w[x].split('').join(' ');
			_x = x;
		}

		return s.trim();
	} else return this.split('').join(' ');
};
