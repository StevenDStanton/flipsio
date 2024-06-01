declare const __brand: unique symbol;

type Branded<Type, Brand> = Type & { readonly [__brand]: Brand };

export { __brand, Branded };
