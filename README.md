the-one-for-input-mask
=======

the-one-for-input-mask is a simple code to help mask input value in an given format.

```javascript
var masking = require('the-one-for-input-mask');

var maskCreditCard = new masking("xxxx xxxx");
var {value, mask} = maskCreditCard.mask("5987679500800000");
// value | 5987679500800000
// mask  | 5987 6795 0080 0000

var maskExpiryDate = new masking("xx/xx");
var {value, mask} = maskExpiryDate.mask("0325");
// value | 0325
// mask  | 03/25

var maskDate = new masking("xx-xx-xxxx");
var {valuue, mask} = maskDate.mask("17081992");
// value | 17081992
//mask   | 17-08-1992

```

## Predefined delimiters list

<table>
	<tr>
		<td>
			Space
		</td>
    <td>
      " "
    </td>
	</tr>
  <tr>
		<td>
			Forward Slash
		</td>
    <td>
      /
    </td>
	</tr>
    <tr>
		<td>
			Hyphen
		</td>
    <td>
      -
    </td>
   </tr>
	</tr>
  <tr>
		<td>
			At
		</td>
    <td>
      @
    </td>
	</tr>
  <tr>
		<td>
			Percent
		</td>
    <td>
      %
    </td>
	</tr>
  <tr>
		<td>
			Asterisk
		</td>
    <td>
      *
    </td>
	</tr>
  <tr>
		<td>
			Hash
		</td>
    <td>
      #
    </td>
	</tr>
  <tr>
		<td>
			Dollar
		</td>
    <td>
      $
    </td>
	</tr>
</table>


### Passing custom Delimiter

```javascript
var masking = require('the-one-for-input-mask');

var maskCreditCard = new masking("xxxx=xxxx", "="); //can pass custom delimiter as a second argument while creating an instance
var {value, mask} = maskCreditCard.mask("5987679500800000");

// value | 5987679500800000
// mask  | 5987=6795=0080=0000
```
