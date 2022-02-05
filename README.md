<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Pareto Random Numbers

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Pareto (Type I)][pareto] distributed pseudorandom numbers.



<section class="usage">

## Usage

```javascript
import pareto1 from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-pareto-type1@deno/mod.js';
```

#### pareto1( alpha, beta )

Returns a pseudorandom number drawn from a [Pareto (Type I)][pareto] distribution with parameters `alpha` (shape parameter) and `beta` (scale parameter).

```javascript
var r = pareto1( 2.0, 5.0 );
// returns <number>
```

If `alpha <= 0` or `beta <= 0`, the function returns `NaN`.

```javascript
var r = pareto1( 2.0, -2.0 );
// returns NaN

r = pareto1( -2.0, 2.0 );
// returns NaN
```

If `alpha` or `beta` is `NaN`, the function returns `NaN`.

```javascript
var r = pareto1( NaN, 5.0 );
// returns NaN

r = pareto1( 2.0, NaN );
// returns NaN
```

#### pareto1.factory( \[alpha, beta, ]\[options] )

Returns a pseudorandom number generator (PRNG) for generating pseudorandom numbers drawn from a [Pareto (Type I)][pareto] distribution.

```javascript
var rand = pareto1.factory();

var r = rand( 1.5, 1.5 );
// returns <number>
```

If provided `alpha` and `beta`, the returned generator returns random variates from the specified distribution.

```javascript
var rand = pareto1.factory( 1.5, 1.5 );

var r = rand();
// returns <number>

r = rand();
// returns <number>
```

If not provided `alpha` and `beta`, the returned generator requires that both parameters be provided at each invocation.

```javascript
var rand = pareto1.factory();

var r = rand( 1.0, 1.0 );
// returns <number>

r = rand( 3.14, 2.25 );
// returns <number>
```

The function accepts the following `options`:

-   **prng**: pseudorandom number generator for generating uniformly distributed pseudorandom numbers on the interval `[0,1)`. If provided, the function **ignores** both the `state` and `seed` options. In order to seed the returned pseudorandom number generator, one must seed the provided `prng` (assuming the provided `prng` is seedable).
-   **seed**: pseudorandom number generator seed.
-   **state**: a [`Uint32Array`][@stdlib/array/uint32] containing pseudorandom number generator state. If provided, the function ignores the `seed` option.
-   **copy**: `boolean` indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that a returned generator has exclusive control over its internal state. Default: `true`.

To use a custom PRNG as the underlying source of uniformly distributed pseudorandom numbers, set the `prng` option.

```javascript
import minstd from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd@deno/mod.js';

var rand = pareto1.factory({
    'prng': minstd.normalized
});

var r = rand( 2.0, 3.0 );
// returns <number>
```

To seed a pseudorandom number generator, set the `seed` option.

```javascript
var rand1 = pareto1.factory({
    'seed': 12345
});

var r1 = rand1( 2.0, 3.0 );
// returns <number>

var rand2 = pareto1.factory( 2.0, 3.0, {
    'seed': 12345
});

var r2 = rand2();
// returns <number>

var bool = ( r1 === r2 );
// returns true
```

To return a generator having a specific initial state, set the generator `state` option.

```javascript
var rand;
var bool;
var r;
var i;

// Generate pseudorandom numbers, thus progressing the generator state:
for ( i = 0; i < 1000; i++ ) {
    r = pareto1( 1.0, 2.0 );
}

// Create a new PRNG initialized to the current state of `pareto1`:
rand = pareto1.factory({
    'state': pareto1.state
});

// Test that the generated pseudorandom numbers are the same:
bool = ( rand( 1.0, 2.0 ) === pareto1( 1.0, 2.0 ) );
// returns true
```

#### pareto1.NAME

The generator name.

```javascript
var str = pareto1.NAME;
// returns 'pareto-type1'
```

#### pareto1.PRNG

The underlying pseudorandom number generator.

```javascript
var prng = pareto1.PRNG;
// returns <Function>
```

#### pareto1.seed

The value used to seed `pareto1()`.

```javascript
var rand;
var r;
var i;

// Generate pseudorandom values...
for ( i = 0; i < 100; i++ ) {
    r = pareto1( 2.0, 2.0 );
}

// Generate the same pseudorandom values...
rand = pareto1.factory( 2.0, 2.0, {
    'seed': pareto1.seed
});
for ( i = 0; i < 100; i++ ) {
    r = rand();
}
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = pareto1.factory({
    'prng': Math.random
});

var seed = rand.seed;
// returns null
```

#### pareto1.seedLength

Length of generator seed.

```javascript
var len = pareto1.seedLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = pareto1.factory({
    'prng': Math.random
});

var len = rand.seedLength;
// returns null
```

#### pareto1.state

Writable property for getting and setting the generator state.

```javascript
var r = pareto1( 2.0, 5.0 );
// returns <number>

r = pareto1( 2.0, 5.0 );
// returns <number>

// ...

// Get a copy of the current state:
var state = pareto1.state;
// returns <Uint32Array>

r = pareto1( 2.0, 5.0 );
// returns <number>

r = pareto1( 2.0, 5.0 );
// returns <number>

// Reset the state:
pareto1.state = state;

// Replay the last two pseudorandom numbers:
r = pareto1( 2.0, 5.0 );
// returns <number>

r = pareto1( 2.0, 5.0 );
// returns <number>

// ...
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = pareto1.factory({
    'prng': Math.random
});

var state = rand.state;
// returns null
```

#### pareto1.stateLength

Length of generator state.

```javascript
var len = pareto1.stateLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = pareto1.factory({
    'prng': Math.random
});

var len = rand.stateLength;
// returns null
```

#### pareto1.byteLength

Size (in bytes) of generator state.

```javascript
var sz = pareto1.byteLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = pareto1.factory({
    'prng': Math.random
});

var sz = rand.byteLength;
// returns null
```

#### pareto1.toJSON()

Serializes the pseudorandom number generator as a JSON object.

```javascript
var o = pareto1.toJSON();
// returns { 'type': 'PRNG', 'name': '...', 'state': {...}, 'params': [] }
```

If provided a PRNG for uniformly distributed numbers, this method returns `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = pareto1.factory({
    'prng': Math.random
});

var o = rand.toJSON();
// returns null
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If PRNG state is "shared" (meaning a state array was provided during PRNG creation and **not** copied) and one sets the generator state to a state array having a different length, the PRNG does **not** update the existing shared state and, instead, points to the newly provided state array. In order to synchronize PRNG output according to the new shared state array, the state array for **each** relevant PRNG must be **explicitly** set.
-   If PRNG state is "shared" and one sets the generator state to a state array of the same length, the PRNG state is updated (along with the state of all other PRNGs sharing the PRNG's state array).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import pareto1 from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-pareto-type1@deno/mod.js';

var seed;
var rand;
var i;

// Generate pseudorandom numbers...
for ( i = 0; i < 100; i++ ) {
    console.log( pareto1( 2.0, 2.0 ) );
}

// Create a new pseudorandom number generator...
seed = 1234;
rand = pareto1.factory( 6.0, 2.0, {
    'seed': seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}

// Create another pseudorandom number generator using a previous seed...
rand = pareto1.factory( 2.0, 2.0, {
    'seed': pareto1.seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/random-base-pareto-type1.svg
[npm-url]: https://npmjs.org/package/@stdlib/random-base-pareto-type1

[test-image]: https://github.com/stdlib-js/random-base-pareto-type1/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/random-base-pareto-type1/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/random-base-pareto-type1/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/random-base-pareto-type1?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/random-base-pareto-type1.svg
[dependencies-url]: https://david-dm.org/stdlib-js/random-base-pareto-type1/main

-->

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/random-base-pareto-type1/tree/deno
[umd-url]: https://github.com/stdlib-js/random-base-pareto-type1/tree/umd
[esm-url]: https://github.com/stdlib-js/random-base-pareto-type1/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/random-base-pareto-type1/main/LICENSE

[pareto]: https://en.wikipedia.org/wiki/Pareto_distribution

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32/tree/deno

</section>

<!-- /.links -->
