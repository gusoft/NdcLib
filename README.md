# Ndc

The constructor takes an unpadded-hyphenated NDC.
It is impossible to determine the structure when the NDC is padded, or unhyphenated for all FDA NDCs, so this is necessary.

## Package

``` js
const ndc = new PackageNdc('1234-5678-90')
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
## Package


``` js
const ndc = new ProductNdc('1234-5678')
```

```js 
// hyphenated([padded:boolean])

ndc.hyphenated(); // return '1234-5678'
ndc.hyphenated(true); // return '01234-5678'
```

``` js
// unhyphenated([padded:boolean])

ndc.unhyphenated(); // return '12345678'
ndc.unhyphenated(true); // return '012345678'

```

## Package to Product Conversion

A product NDC can also be obtained from a PackageNdc:

``` js
const packageNdc: PackageNdc = new PackageNdc('1234-5678-90')
const productNdc: ProductNdc = packageNdc.product();

const rawProductNdc: string = productNdc.hyphenated(); // returns 1234-5678
```

## Using instances


Ndcs can now be passed around as an instance of the `Ndc` class, without needing to know the underlying NDC format requirement. 

``` js


const doSomething = (ndc: PackageNdc) => {
    const unhyphenatedNdc = ndc.unhyphenated(true);
    return fetch('https://someservice.com?ndc=' + unhyphenatedNdc)
}

const doSomethingElse = (ndc: PackageNdc) => {
    const hyphenatedNdc = ndc.hyphenated();
    return fetch('https://someotherservice.com?ndc=' + hyphenatedNdc)
}

const doSomethingElseButWithProduct = (ndc: PackageNdc) => {
    const hyphenatedNdc = ndc.product().hyphenated();
    return fetch('https://someotherservice.com?productndc=' + hyphenatedNdc)
}

```