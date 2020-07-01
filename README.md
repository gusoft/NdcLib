# Ndc

The constructor takes an unpadded-hyphenated NDC.
It is impossible to determine the structure when the NDC is padded, or unhyphenated for all FDA NDCs, so this is necessary.

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

Ndcs can now be passed around as an instance of the `Ndc` class, without needing to know the underlying NDC format requirement. 

``` js


const doSomething = (ndc: Ndc) => {
    const unhyphenatedNdc = ndc.unhyphenated(true);
    return fetch('https://someservice.com?ndc=' + unhyphenatedNdc)
}

const doSomethingElse = (ndc: Ndc) => {
    const hyphenatedNdc = ndc.hyphenated();
    return fetch('https://someotherservice.com?ndc=' + hyphenatedNdc)
}

```