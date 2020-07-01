# NdcLib


``` js
const ndc = new Ndc('1234-5678-90')
```

```js 
// hyphenated([padded:boolean])

ndc.hyphenated(); // return '1234-5678-90'
ndc.hyphenated(true); // return '01234-5678-90'
```

``` js
// unhyphenated([padded:boolean])

ndc.unhyphenated(); // return '1234567890'
ndc.unhyphenated(true); // return '01234567890'

```
