
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Plan
 * 
 */
export type Plan = $Result.DefaultSelection<Prisma.$PlanPayload>
/**
 * Model Provider
 * 
 */
export type Provider = $Result.DefaultSelection<Prisma.$ProviderPayload>
/**
 * Model Policy
 * 
 */
export type Policy = $Result.DefaultSelection<Prisma.$PolicyPayload>
/**
 * Model Insured
 * 
 */
export type Insured = $Result.DefaultSelection<Prisma.$InsuredPayload>
/**
 * Model Authorization
 * 
 */
export type Authorization = $Result.DefaultSelection<Prisma.$AuthorizationPayload>
/**
 * Model Claim
 * 
 */
export type Claim = $Result.DefaultSelection<Prisma.$ClaimPayload>
/**
 * Model MedicalService
 * 
 */
export type MedicalService = $Result.DefaultSelection<Prisma.$MedicalServicePayload>
/**
 * Model ProviderPayment
 * 
 */
export type ProviderPayment = $Result.DefaultSelection<Prisma.$ProviderPaymentPayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMINISTRATOR: 'ADMINISTRATOR',
  AGENT: 'AGENT',
  SUPERVISOR: 'SUPERVISOR',
  INSURED: 'INSURED'
};

export type Role = (typeof Role)[keyof typeof Role]


export const InsuredStatus: {
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED',
  INACTIVE: 'INACTIVE'
};

export type InsuredStatus = (typeof InsuredStatus)[keyof typeof InsuredStatus]


export const AuthorizationStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type AuthorizationStatus = (typeof AuthorizationStatus)[keyof typeof AuthorizationStatus]


export const ClaimStatus: {
  UNDER_REVIEW: 'UNDER_REVIEW',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type ClaimStatus = (typeof ClaimStatus)[keyof typeof ClaimStatus]


export const PolicyStatus: {
  ACTIVE: 'ACTIVE',
  IN_GRACE: 'IN_GRACE',
  SUSPENDED: 'SUSPENDED',
  EXPIRED: 'EXPIRED'
};

export type PolicyStatus = (typeof PolicyStatus)[keyof typeof PolicyStatus]


export const InvoiceStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  OVERDUE: 'OVERDUE',
  IN_GRACE: 'IN_GRACE'
};

export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus]


export const ServiceStatus: {
  PENDING_PAYMENT: 'PENDING_PAYMENT',
  PAID: 'PAID'
};

export type ServiceStatus = (typeof ServiceStatus)[keyof typeof ServiceStatus]


export const PaymentStatus: {
  PROCESSED: 'PROCESSED',
  REJECTED: 'REJECTED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type InsuredStatus = $Enums.InsuredStatus

export const InsuredStatus: typeof $Enums.InsuredStatus

export type AuthorizationStatus = $Enums.AuthorizationStatus

export const AuthorizationStatus: typeof $Enums.AuthorizationStatus

export type ClaimStatus = $Enums.ClaimStatus

export const ClaimStatus: typeof $Enums.ClaimStatus

export type PolicyStatus = $Enums.PolicyStatus

export const PolicyStatus: typeof $Enums.PolicyStatus

export type InvoiceStatus = $Enums.InvoiceStatus

export const InvoiceStatus: typeof $Enums.InvoiceStatus

export type ServiceStatus = $Enums.ServiceStatus

export const ServiceStatus: typeof $Enums.ServiceStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plan`: Exposes CRUD operations for the **Plan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plans
    * const plans = await prisma.plan.findMany()
    * ```
    */
  get plan(): Prisma.PlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.provider`: Exposes CRUD operations for the **Provider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Providers
    * const providers = await prisma.provider.findMany()
    * ```
    */
  get provider(): Prisma.ProviderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.policy`: Exposes CRUD operations for the **Policy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Policies
    * const policies = await prisma.policy.findMany()
    * ```
    */
  get policy(): Prisma.PolicyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.insured`: Exposes CRUD operations for the **Insured** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Insureds
    * const insureds = await prisma.insured.findMany()
    * ```
    */
  get insured(): Prisma.InsuredDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authorization`: Exposes CRUD operations for the **Authorization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authorizations
    * const authorizations = await prisma.authorization.findMany()
    * ```
    */
  get authorization(): Prisma.AuthorizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.claim`: Exposes CRUD operations for the **Claim** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Claims
    * const claims = await prisma.claim.findMany()
    * ```
    */
  get claim(): Prisma.ClaimDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicalService`: Exposes CRUD operations for the **MedicalService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicalServices
    * const medicalServices = await prisma.medicalService.findMany()
    * ```
    */
  get medicalService(): Prisma.MedicalServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.providerPayment`: Exposes CRUD operations for the **ProviderPayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProviderPayments
    * const providerPayments = await prisma.providerPayment.findMany()
    * ```
    */
  get providerPayment(): Prisma.ProviderPaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Plan: 'Plan',
    Provider: 'Provider',
    Policy: 'Policy',
    Insured: 'Insured',
    Authorization: 'Authorization',
    Claim: 'Claim',
    MedicalService: 'MedicalService',
    ProviderPayment: 'ProviderPayment',
    Invoice: 'Invoice',
    Notification: 'Notification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "plan" | "provider" | "policy" | "insured" | "authorization" | "claim" | "medicalService" | "providerPayment" | "invoice" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Plan: {
        payload: Prisma.$PlanPayload<ExtArgs>
        fields: Prisma.PlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findFirst: {
            args: Prisma.PlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findMany: {
            args: Prisma.PlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          create: {
            args: Prisma.PlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          createMany: {
            args: Prisma.PlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          delete: {
            args: Prisma.PlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          update: {
            args: Prisma.PlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          deleteMany: {
            args: Prisma.PlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          upsert: {
            args: Prisma.PlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          aggregate: {
            args: Prisma.PlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlan>
          }
          groupBy: {
            args: Prisma.PlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanCountArgs<ExtArgs>
            result: $Utils.Optional<PlanCountAggregateOutputType> | number
          }
        }
      }
      Provider: {
        payload: Prisma.$ProviderPayload<ExtArgs>
        fields: Prisma.ProviderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProviderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProviderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          findFirst: {
            args: Prisma.ProviderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProviderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          findMany: {
            args: Prisma.ProviderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>[]
          }
          create: {
            args: Prisma.ProviderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          createMany: {
            args: Prisma.ProviderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProviderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>[]
          }
          delete: {
            args: Prisma.ProviderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          update: {
            args: Prisma.ProviderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          deleteMany: {
            args: Prisma.ProviderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProviderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProviderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>[]
          }
          upsert: {
            args: Prisma.ProviderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          aggregate: {
            args: Prisma.ProviderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProvider>
          }
          groupBy: {
            args: Prisma.ProviderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProviderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProviderCountArgs<ExtArgs>
            result: $Utils.Optional<ProviderCountAggregateOutputType> | number
          }
        }
      }
      Policy: {
        payload: Prisma.$PolicyPayload<ExtArgs>
        fields: Prisma.PolicyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PolicyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PolicyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          findFirst: {
            args: Prisma.PolicyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PolicyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          findMany: {
            args: Prisma.PolicyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>[]
          }
          create: {
            args: Prisma.PolicyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          createMany: {
            args: Prisma.PolicyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PolicyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>[]
          }
          delete: {
            args: Prisma.PolicyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          update: {
            args: Prisma.PolicyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          deleteMany: {
            args: Prisma.PolicyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PolicyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PolicyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>[]
          }
          upsert: {
            args: Prisma.PolicyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          aggregate: {
            args: Prisma.PolicyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePolicy>
          }
          groupBy: {
            args: Prisma.PolicyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PolicyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PolicyCountArgs<ExtArgs>
            result: $Utils.Optional<PolicyCountAggregateOutputType> | number
          }
        }
      }
      Insured: {
        payload: Prisma.$InsuredPayload<ExtArgs>
        fields: Prisma.InsuredFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InsuredFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsuredPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InsuredFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsuredPayload>
          }
          findFirst: {
            args: Prisma.InsuredFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsuredPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InsuredFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsuredPayload>
          }
          findMany: {
            args: Prisma.InsuredFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsuredPayload>[]
          }
          create: {
            args: Prisma.InsuredCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsuredPayload>
          }
          createMany: {
            args: Prisma.InsuredCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InsuredCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsuredPayload>[]
          }
          delete: {
            args: Prisma.InsuredDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsuredPayload>
          }
          update: {
            args: Prisma.InsuredUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsuredPayload>
          }
          deleteMany: {
            args: Prisma.InsuredDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InsuredUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InsuredUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsuredPayload>[]
          }
          upsert: {
            args: Prisma.InsuredUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsuredPayload>
          }
          aggregate: {
            args: Prisma.InsuredAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInsured>
          }
          groupBy: {
            args: Prisma.InsuredGroupByArgs<ExtArgs>
            result: $Utils.Optional<InsuredGroupByOutputType>[]
          }
          count: {
            args: Prisma.InsuredCountArgs<ExtArgs>
            result: $Utils.Optional<InsuredCountAggregateOutputType> | number
          }
        }
      }
      Authorization: {
        payload: Prisma.$AuthorizationPayload<ExtArgs>
        fields: Prisma.AuthorizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthorizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthorizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizationPayload>
          }
          findFirst: {
            args: Prisma.AuthorizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthorizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizationPayload>
          }
          findMany: {
            args: Prisma.AuthorizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizationPayload>[]
          }
          create: {
            args: Prisma.AuthorizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizationPayload>
          }
          createMany: {
            args: Prisma.AuthorizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthorizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizationPayload>[]
          }
          delete: {
            args: Prisma.AuthorizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizationPayload>
          }
          update: {
            args: Prisma.AuthorizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizationPayload>
          }
          deleteMany: {
            args: Prisma.AuthorizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthorizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthorizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizationPayload>[]
          }
          upsert: {
            args: Prisma.AuthorizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizationPayload>
          }
          aggregate: {
            args: Prisma.AuthorizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthorization>
          }
          groupBy: {
            args: Prisma.AuthorizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthorizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthorizationCountArgs<ExtArgs>
            result: $Utils.Optional<AuthorizationCountAggregateOutputType> | number
          }
        }
      }
      Claim: {
        payload: Prisma.$ClaimPayload<ExtArgs>
        fields: Prisma.ClaimFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClaimFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClaimFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          findFirst: {
            args: Prisma.ClaimFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClaimFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          findMany: {
            args: Prisma.ClaimFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>[]
          }
          create: {
            args: Prisma.ClaimCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          createMany: {
            args: Prisma.ClaimCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClaimCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>[]
          }
          delete: {
            args: Prisma.ClaimDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          update: {
            args: Prisma.ClaimUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          deleteMany: {
            args: Prisma.ClaimDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClaimUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClaimUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>[]
          }
          upsert: {
            args: Prisma.ClaimUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          aggregate: {
            args: Prisma.ClaimAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClaim>
          }
          groupBy: {
            args: Prisma.ClaimGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClaimGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClaimCountArgs<ExtArgs>
            result: $Utils.Optional<ClaimCountAggregateOutputType> | number
          }
        }
      }
      MedicalService: {
        payload: Prisma.$MedicalServicePayload<ExtArgs>
        fields: Prisma.MedicalServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicalServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicalServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalServicePayload>
          }
          findFirst: {
            args: Prisma.MedicalServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicalServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalServicePayload>
          }
          findMany: {
            args: Prisma.MedicalServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalServicePayload>[]
          }
          create: {
            args: Prisma.MedicalServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalServicePayload>
          }
          createMany: {
            args: Prisma.MedicalServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicalServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalServicePayload>[]
          }
          delete: {
            args: Prisma.MedicalServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalServicePayload>
          }
          update: {
            args: Prisma.MedicalServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalServicePayload>
          }
          deleteMany: {
            args: Prisma.MedicalServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicalServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicalServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalServicePayload>[]
          }
          upsert: {
            args: Prisma.MedicalServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalServicePayload>
          }
          aggregate: {
            args: Prisma.MedicalServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicalService>
          }
          groupBy: {
            args: Prisma.MedicalServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicalServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicalServiceCountArgs<ExtArgs>
            result: $Utils.Optional<MedicalServiceCountAggregateOutputType> | number
          }
        }
      }
      ProviderPayment: {
        payload: Prisma.$ProviderPaymentPayload<ExtArgs>
        fields: Prisma.ProviderPaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProviderPaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProviderPaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPaymentPayload>
          }
          findFirst: {
            args: Prisma.ProviderPaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProviderPaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPaymentPayload>
          }
          findMany: {
            args: Prisma.ProviderPaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPaymentPayload>[]
          }
          create: {
            args: Prisma.ProviderPaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPaymentPayload>
          }
          createMany: {
            args: Prisma.ProviderPaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProviderPaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPaymentPayload>[]
          }
          delete: {
            args: Prisma.ProviderPaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPaymentPayload>
          }
          update: {
            args: Prisma.ProviderPaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPaymentPayload>
          }
          deleteMany: {
            args: Prisma.ProviderPaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProviderPaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProviderPaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPaymentPayload>[]
          }
          upsert: {
            args: Prisma.ProviderPaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPaymentPayload>
          }
          aggregate: {
            args: Prisma.ProviderPaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProviderPayment>
          }
          groupBy: {
            args: Prisma.ProviderPaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProviderPaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProviderPaymentCountArgs<ExtArgs>
            result: $Utils.Optional<ProviderPaymentCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    plan?: PlanOmit
    provider?: ProviderOmit
    policy?: PolicyOmit
    insured?: InsuredOmit
    authorization?: AuthorizationOmit
    claim?: ClaimOmit
    medicalService?: MedicalServiceOmit
    providerPayment?: ProviderPaymentOmit
    invoice?: InvoiceOmit
    notification?: NotificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type PlanCountOutputType
   */

  export type PlanCountOutputType = {
    insureds: number
    policies: number
  }

  export type PlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insureds?: boolean | PlanCountOutputTypeCountInsuredsArgs
    policies?: boolean | PlanCountOutputTypeCountPoliciesArgs
  }

  // Custom InputTypes
  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanCountOutputType
     */
    select?: PlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountInsuredsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InsuredWhereInput
  }

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountPoliciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PolicyWhereInput
  }


  /**
   * Count Type ProviderCountOutputType
   */

  export type ProviderCountOutputType = {
    authorizations: number
    claims: number
    services: number
    payments: number
  }

  export type ProviderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authorizations?: boolean | ProviderCountOutputTypeCountAuthorizationsArgs
    claims?: boolean | ProviderCountOutputTypeCountClaimsArgs
    services?: boolean | ProviderCountOutputTypeCountServicesArgs
    payments?: boolean | ProviderCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderCountOutputType
     */
    select?: ProviderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeCountAuthorizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorizationWhereInput
  }

  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeCountClaimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaimWhereInput
  }

  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalServiceWhereInput
  }

  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderPaymentWhereInput
  }


  /**
   * Count Type PolicyCountOutputType
   */

  export type PolicyCountOutputType = {
    insureds: number
    invoices: number
  }

  export type PolicyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insureds?: boolean | PolicyCountOutputTypeCountInsuredsArgs
    invoices?: boolean | PolicyCountOutputTypeCountInvoicesArgs
  }

  // Custom InputTypes
  /**
   * PolicyCountOutputType without action
   */
  export type PolicyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyCountOutputType
     */
    select?: PolicyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PolicyCountOutputType without action
   */
  export type PolicyCountOutputTypeCountInsuredsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InsuredWhereInput
  }

  /**
   * PolicyCountOutputType without action
   */
  export type PolicyCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }


  /**
   * Count Type InsuredCountOutputType
   */

  export type InsuredCountOutputType = {
    authorizations: number
    claims: number
    services: number
  }

  export type InsuredCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authorizations?: boolean | InsuredCountOutputTypeCountAuthorizationsArgs
    claims?: boolean | InsuredCountOutputTypeCountClaimsArgs
    services?: boolean | InsuredCountOutputTypeCountServicesArgs
  }

  // Custom InputTypes
  /**
   * InsuredCountOutputType without action
   */
  export type InsuredCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsuredCountOutputType
     */
    select?: InsuredCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InsuredCountOutputType without action
   */
  export type InsuredCountOutputTypeCountAuthorizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorizationWhereInput
  }

  /**
   * InsuredCountOutputType without action
   */
  export type InsuredCountOutputTypeCountClaimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaimWhereInput
  }

  /**
   * InsuredCountOutputType without action
   */
  export type InsuredCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalServiceWhereInput
  }


  /**
   * Count Type AuthorizationCountOutputType
   */

  export type AuthorizationCountOutputType = {
    services: number
  }

  export type AuthorizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | AuthorizationCountOutputTypeCountServicesArgs
  }

  // Custom InputTypes
  /**
   * AuthorizationCountOutputType without action
   */
  export type AuthorizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorizationCountOutputType
     */
    select?: AuthorizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuthorizationCountOutputType without action
   */
  export type AuthorizationCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalServiceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    name: string | null
    nationalId: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    name: string | null
    nationalId: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    name: number
    nationalId: number
    passwordHash: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    name?: true
    nationalId?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    name?: true
    nationalId?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    name?: true
    nationalId?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    name: string
    nationalId: string | null
    passwordHash: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    name?: boolean
    nationalId?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    name?: boolean
    nationalId?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    name?: boolean
    nationalId?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    name?: boolean
    nationalId?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "name" | "nationalId" | "passwordHash" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      name: string
      nationalId: string | null
      passwordHash: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly nationalId: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Plan
   */

  export type AggregatePlan = {
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  export type PlanAvgAggregateOutputType = {
    consultationCopay: Decimal | null
  }

  export type PlanSumAggregateOutputType = {
    consultationCopay: Decimal | null
  }

  export type PlanMinAggregateOutputType = {
    id: string | null
    name: string | null
    consultationCopay: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanMaxAggregateOutputType = {
    id: string | null
    name: string | null
    consultationCopay: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanCountAggregateOutputType = {
    id: number
    name: number
    consultationCopay: number
    coverage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlanAvgAggregateInputType = {
    consultationCopay?: true
  }

  export type PlanSumAggregateInputType = {
    consultationCopay?: true
  }

  export type PlanMinAggregateInputType = {
    id?: true
    name?: true
    consultationCopay?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanMaxAggregateInputType = {
    id?: true
    name?: true
    consultationCopay?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanCountAggregateInputType = {
    id?: true
    name?: true
    consultationCopay?: true
    coverage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plan to aggregate.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plans
    **/
    _count?: true | PlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanMaxAggregateInputType
  }

  export type GetPlanAggregateType<T extends PlanAggregateArgs> = {
        [P in keyof T & keyof AggregatePlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlan[P]>
      : GetScalarType<T[P], AggregatePlan[P]>
  }




  export type PlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithAggregationInput | PlanOrderByWithAggregationInput[]
    by: PlanScalarFieldEnum[] | PlanScalarFieldEnum
    having?: PlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanCountAggregateInputType | true
    _avg?: PlanAvgAggregateInputType
    _sum?: PlanSumAggregateInputType
    _min?: PlanMinAggregateInputType
    _max?: PlanMaxAggregateInputType
  }

  export type PlanGroupByOutputType = {
    id: string
    name: string
    consultationCopay: Decimal
    coverage: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  type GetPlanGroupByPayload<T extends PlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanGroupByOutputType[P]>
            : GetScalarType<T[P], PlanGroupByOutputType[P]>
        }
      >
    >


  export type PlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    consultationCopay?: boolean
    coverage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    insureds?: boolean | Plan$insuredsArgs<ExtArgs>
    policies?: boolean | Plan$policiesArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    consultationCopay?: boolean
    coverage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    consultationCopay?: boolean
    coverage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectScalar = {
    id?: boolean
    name?: boolean
    consultationCopay?: boolean
    coverage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "consultationCopay" | "coverage" | "createdAt" | "updatedAt", ExtArgs["result"]["plan"]>
  export type PlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insureds?: boolean | Plan$insuredsArgs<ExtArgs>
    policies?: boolean | Plan$policiesArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plan"
    objects: {
      insureds: Prisma.$InsuredPayload<ExtArgs>[]
      policies: Prisma.$PolicyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      consultationCopay: Prisma.Decimal
      coverage: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["plan"]>
    composites: {}
  }

  type PlanGetPayload<S extends boolean | null | undefined | PlanDefaultArgs> = $Result.GetResult<Prisma.$PlanPayload, S>

  type PlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanCountAggregateInputType | true
    }

  export interface PlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plan'], meta: { name: 'Plan' } }
    /**
     * Find zero or one Plan that matches the filter.
     * @param {PlanFindUniqueArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanFindUniqueArgs>(args: SelectSubset<T, PlanFindUniqueArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanFindUniqueOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanFindFirstArgs>(args?: SelectSubset<T, PlanFindFirstArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plans
     * const plans = await prisma.plan.findMany()
     * 
     * // Get first 10 Plans
     * const plans = await prisma.plan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planWithIdOnly = await prisma.plan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanFindManyArgs>(args?: SelectSubset<T, PlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plan.
     * @param {PlanCreateArgs} args - Arguments to create a Plan.
     * @example
     * // Create one Plan
     * const Plan = await prisma.plan.create({
     *   data: {
     *     // ... data to create a Plan
     *   }
     * })
     * 
     */
    create<T extends PlanCreateArgs>(args: SelectSubset<T, PlanCreateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plans.
     * @param {PlanCreateManyArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanCreateManyArgs>(args?: SelectSubset<T, PlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plans and returns the data saved in the database.
     * @param {PlanCreateManyAndReturnArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plans and only return the `id`
     * const planWithIdOnly = await prisma.plan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Plan.
     * @param {PlanDeleteArgs} args - Arguments to delete one Plan.
     * @example
     * // Delete one Plan
     * const Plan = await prisma.plan.delete({
     *   where: {
     *     // ... filter to delete one Plan
     *   }
     * })
     * 
     */
    delete<T extends PlanDeleteArgs>(args: SelectSubset<T, PlanDeleteArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plan.
     * @param {PlanUpdateArgs} args - Arguments to update one Plan.
     * @example
     * // Update one Plan
     * const plan = await prisma.plan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanUpdateArgs>(args: SelectSubset<T, PlanUpdateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plans.
     * @param {PlanDeleteManyArgs} args - Arguments to filter Plans to delete.
     * @example
     * // Delete a few Plans
     * const { count } = await prisma.plan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanDeleteManyArgs>(args?: SelectSubset<T, PlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanUpdateManyArgs>(args: SelectSubset<T, PlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans and returns the data updated in the database.
     * @param {PlanUpdateManyAndReturnArgs} args - Arguments to update many Plans.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Plans and only return the `id`
     * const planWithIdOnly = await prisma.plan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlanUpdateManyAndReturnArgs>(args: SelectSubset<T, PlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Plan.
     * @param {PlanUpsertArgs} args - Arguments to update or create a Plan.
     * @example
     * // Update or create a Plan
     * const plan = await prisma.plan.upsert({
     *   create: {
     *     // ... data to create a Plan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plan we want to update
     *   }
     * })
     */
    upsert<T extends PlanUpsertArgs>(args: SelectSubset<T, PlanUpsertArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanCountArgs} args - Arguments to filter Plans to count.
     * @example
     * // Count the number of Plans
     * const count = await prisma.plan.count({
     *   where: {
     *     // ... the filter for the Plans we want to count
     *   }
     * })
    **/
    count<T extends PlanCountArgs>(
      args?: Subset<T, PlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlanAggregateArgs>(args: Subset<T, PlanAggregateArgs>): Prisma.PrismaPromise<GetPlanAggregateType<T>>

    /**
     * Group by Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanGroupByArgs['orderBy'] }
        : { orderBy?: PlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plan model
   */
  readonly fields: PlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    insureds<T extends Plan$insuredsArgs<ExtArgs> = {}>(args?: Subset<T, Plan$insuredsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsuredPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    policies<T extends Plan$policiesArgs<ExtArgs> = {}>(args?: Subset<T, Plan$policiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Plan model
   */
  interface PlanFieldRefs {
    readonly id: FieldRef<"Plan", 'String'>
    readonly name: FieldRef<"Plan", 'String'>
    readonly consultationCopay: FieldRef<"Plan", 'Decimal'>
    readonly coverage: FieldRef<"Plan", 'Json'>
    readonly createdAt: FieldRef<"Plan", 'DateTime'>
    readonly updatedAt: FieldRef<"Plan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Plan findUnique
   */
  export type PlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findUniqueOrThrow
   */
  export type PlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findFirst
   */
  export type PlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findFirstOrThrow
   */
  export type PlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findMany
   */
  export type PlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan create
   */
  export type PlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to create a Plan.
     */
    data: XOR<PlanCreateInput, PlanUncheckedCreateInput>
  }

  /**
   * Plan createMany
   */
  export type PlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plan createManyAndReturn
   */
  export type PlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plan update
   */
  export type PlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to update a Plan.
     */
    data: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
    /**
     * Choose, which Plan to update.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan updateMany
   */
  export type PlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to update.
     */
    limit?: number
  }

  /**
   * Plan updateManyAndReturn
   */
  export type PlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to update.
     */
    limit?: number
  }

  /**
   * Plan upsert
   */
  export type PlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The filter to search for the Plan to update in case it exists.
     */
    where: PlanWhereUniqueInput
    /**
     * In case the Plan found by the `where` argument doesn't exist, create a new Plan with this data.
     */
    create: XOR<PlanCreateInput, PlanUncheckedCreateInput>
    /**
     * In case the Plan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
  }

  /**
   * Plan delete
   */
  export type PlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter which Plan to delete.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan deleteMany
   */
  export type PlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to delete
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to delete.
     */
    limit?: number
  }

  /**
   * Plan.insureds
   */
  export type Plan$insuredsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insured
     */
    select?: InsuredSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insured
     */
    omit?: InsuredOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuredInclude<ExtArgs> | null
    where?: InsuredWhereInput
    orderBy?: InsuredOrderByWithRelationInput | InsuredOrderByWithRelationInput[]
    cursor?: InsuredWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InsuredScalarFieldEnum | InsuredScalarFieldEnum[]
  }

  /**
   * Plan.policies
   */
  export type Plan$policiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    where?: PolicyWhereInput
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    cursor?: PolicyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * Plan without action
   */
  export type PlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
  }


  /**
   * Model Provider
   */

  export type AggregateProvider = {
    _count: ProviderCountAggregateOutputType | null
    _min: ProviderMinAggregateOutputType | null
    _max: ProviderMaxAggregateOutputType | null
  }

  export type ProviderMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    city: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProviderMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    city: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProviderCountAggregateOutputType = {
    id: number
    name: number
    type: number
    city: number
    phone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProviderMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    city?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProviderMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    city?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProviderCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    city?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProviderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Provider to aggregate.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Providers
    **/
    _count?: true | ProviderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderMaxAggregateInputType
  }

  export type GetProviderAggregateType<T extends ProviderAggregateArgs> = {
        [P in keyof T & keyof AggregateProvider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProvider[P]>
      : GetScalarType<T[P], AggregateProvider[P]>
  }




  export type ProviderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderWhereInput
    orderBy?: ProviderOrderByWithAggregationInput | ProviderOrderByWithAggregationInput[]
    by: ProviderScalarFieldEnum[] | ProviderScalarFieldEnum
    having?: ProviderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderCountAggregateInputType | true
    _min?: ProviderMinAggregateInputType
    _max?: ProviderMaxAggregateInputType
  }

  export type ProviderGroupByOutputType = {
    id: string
    name: string
    type: string
    city: string
    phone: string
    createdAt: Date
    updatedAt: Date
    _count: ProviderCountAggregateOutputType | null
    _min: ProviderMinAggregateOutputType | null
    _max: ProviderMaxAggregateOutputType | null
  }

  type GetProviderGroupByPayload<T extends ProviderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProviderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderGroupByOutputType[P]>
        }
      >
    >


  export type ProviderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    city?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorizations?: boolean | Provider$authorizationsArgs<ExtArgs>
    claims?: boolean | Provider$claimsArgs<ExtArgs>
    services?: boolean | Provider$servicesArgs<ExtArgs>
    payments?: boolean | Provider$paymentsArgs<ExtArgs>
    _count?: boolean | ProviderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["provider"]>

  export type ProviderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    city?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["provider"]>

  export type ProviderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    city?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["provider"]>

  export type ProviderSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    city?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProviderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "city" | "phone" | "createdAt" | "updatedAt", ExtArgs["result"]["provider"]>
  export type ProviderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authorizations?: boolean | Provider$authorizationsArgs<ExtArgs>
    claims?: boolean | Provider$claimsArgs<ExtArgs>
    services?: boolean | Provider$servicesArgs<ExtArgs>
    payments?: boolean | Provider$paymentsArgs<ExtArgs>
    _count?: boolean | ProviderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProviderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProviderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProviderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Provider"
    objects: {
      authorizations: Prisma.$AuthorizationPayload<ExtArgs>[]
      claims: Prisma.$ClaimPayload<ExtArgs>[]
      services: Prisma.$MedicalServicePayload<ExtArgs>[]
      payments: Prisma.$ProviderPaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: string
      city: string
      phone: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["provider"]>
    composites: {}
  }

  type ProviderGetPayload<S extends boolean | null | undefined | ProviderDefaultArgs> = $Result.GetResult<Prisma.$ProviderPayload, S>

  type ProviderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProviderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProviderCountAggregateInputType | true
    }

  export interface ProviderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Provider'], meta: { name: 'Provider' } }
    /**
     * Find zero or one Provider that matches the filter.
     * @param {ProviderFindUniqueArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProviderFindUniqueArgs>(args: SelectSubset<T, ProviderFindUniqueArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Provider that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProviderFindUniqueOrThrowArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProviderFindUniqueOrThrowArgs>(args: SelectSubset<T, ProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Provider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindFirstArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProviderFindFirstArgs>(args?: SelectSubset<T, ProviderFindFirstArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Provider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindFirstOrThrowArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProviderFindFirstOrThrowArgs>(args?: SelectSubset<T, ProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Providers
     * const providers = await prisma.provider.findMany()
     * 
     * // Get first 10 Providers
     * const providers = await prisma.provider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerWithIdOnly = await prisma.provider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProviderFindManyArgs>(args?: SelectSubset<T, ProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Provider.
     * @param {ProviderCreateArgs} args - Arguments to create a Provider.
     * @example
     * // Create one Provider
     * const Provider = await prisma.provider.create({
     *   data: {
     *     // ... data to create a Provider
     *   }
     * })
     * 
     */
    create<T extends ProviderCreateArgs>(args: SelectSubset<T, ProviderCreateArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Providers.
     * @param {ProviderCreateManyArgs} args - Arguments to create many Providers.
     * @example
     * // Create many Providers
     * const provider = await prisma.provider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProviderCreateManyArgs>(args?: SelectSubset<T, ProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Providers and returns the data saved in the database.
     * @param {ProviderCreateManyAndReturnArgs} args - Arguments to create many Providers.
     * @example
     * // Create many Providers
     * const provider = await prisma.provider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Providers and only return the `id`
     * const providerWithIdOnly = await prisma.provider.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProviderCreateManyAndReturnArgs>(args?: SelectSubset<T, ProviderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Provider.
     * @param {ProviderDeleteArgs} args - Arguments to delete one Provider.
     * @example
     * // Delete one Provider
     * const Provider = await prisma.provider.delete({
     *   where: {
     *     // ... filter to delete one Provider
     *   }
     * })
     * 
     */
    delete<T extends ProviderDeleteArgs>(args: SelectSubset<T, ProviderDeleteArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Provider.
     * @param {ProviderUpdateArgs} args - Arguments to update one Provider.
     * @example
     * // Update one Provider
     * const provider = await prisma.provider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProviderUpdateArgs>(args: SelectSubset<T, ProviderUpdateArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Providers.
     * @param {ProviderDeleteManyArgs} args - Arguments to filter Providers to delete.
     * @example
     * // Delete a few Providers
     * const { count } = await prisma.provider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProviderDeleteManyArgs>(args?: SelectSubset<T, ProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Providers
     * const provider = await prisma.provider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProviderUpdateManyArgs>(args: SelectSubset<T, ProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Providers and returns the data updated in the database.
     * @param {ProviderUpdateManyAndReturnArgs} args - Arguments to update many Providers.
     * @example
     * // Update many Providers
     * const provider = await prisma.provider.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Providers and only return the `id`
     * const providerWithIdOnly = await prisma.provider.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProviderUpdateManyAndReturnArgs>(args: SelectSubset<T, ProviderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Provider.
     * @param {ProviderUpsertArgs} args - Arguments to update or create a Provider.
     * @example
     * // Update or create a Provider
     * const provider = await prisma.provider.upsert({
     *   create: {
     *     // ... data to create a Provider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Provider we want to update
     *   }
     * })
     */
    upsert<T extends ProviderUpsertArgs>(args: SelectSubset<T, ProviderUpsertArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderCountArgs} args - Arguments to filter Providers to count.
     * @example
     * // Count the number of Providers
     * const count = await prisma.provider.count({
     *   where: {
     *     // ... the filter for the Providers we want to count
     *   }
     * })
    **/
    count<T extends ProviderCountArgs>(
      args?: Subset<T, ProviderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProviderAggregateArgs>(args: Subset<T, ProviderAggregateArgs>): Prisma.PrismaPromise<GetProviderAggregateType<T>>

    /**
     * Group by Provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProviderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderGroupByArgs['orderBy'] }
        : { orderBy?: ProviderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Provider model
   */
  readonly fields: ProviderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Provider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProviderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    authorizations<T extends Provider$authorizationsArgs<ExtArgs> = {}>(args?: Subset<T, Provider$authorizationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    claims<T extends Provider$claimsArgs<ExtArgs> = {}>(args?: Subset<T, Provider$claimsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    services<T extends Provider$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Provider$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Provider$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Provider$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Provider model
   */
  interface ProviderFieldRefs {
    readonly id: FieldRef<"Provider", 'String'>
    readonly name: FieldRef<"Provider", 'String'>
    readonly type: FieldRef<"Provider", 'String'>
    readonly city: FieldRef<"Provider", 'String'>
    readonly phone: FieldRef<"Provider", 'String'>
    readonly createdAt: FieldRef<"Provider", 'DateTime'>
    readonly updatedAt: FieldRef<"Provider", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Provider findUnique
   */
  export type ProviderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider findUniqueOrThrow
   */
  export type ProviderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider findFirst
   */
  export type ProviderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Providers.
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Providers.
     */
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[]
  }

  /**
   * Provider findFirstOrThrow
   */
  export type ProviderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Providers.
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Providers.
     */
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[]
  }

  /**
   * Provider findMany
   */
  export type ProviderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Providers to fetch.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Providers.
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Providers.
     */
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[]
  }

  /**
   * Provider create
   */
  export type ProviderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * The data needed to create a Provider.
     */
    data: XOR<ProviderCreateInput, ProviderUncheckedCreateInput>
  }

  /**
   * Provider createMany
   */
  export type ProviderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Providers.
     */
    data: ProviderCreateManyInput | ProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Provider createManyAndReturn
   */
  export type ProviderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * The data used to create many Providers.
     */
    data: ProviderCreateManyInput | ProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Provider update
   */
  export type ProviderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * The data needed to update a Provider.
     */
    data: XOR<ProviderUpdateInput, ProviderUncheckedUpdateInput>
    /**
     * Choose, which Provider to update.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider updateMany
   */
  export type ProviderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Providers.
     */
    data: XOR<ProviderUpdateManyMutationInput, ProviderUncheckedUpdateManyInput>
    /**
     * Filter which Providers to update
     */
    where?: ProviderWhereInput
    /**
     * Limit how many Providers to update.
     */
    limit?: number
  }

  /**
   * Provider updateManyAndReturn
   */
  export type ProviderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * The data used to update Providers.
     */
    data: XOR<ProviderUpdateManyMutationInput, ProviderUncheckedUpdateManyInput>
    /**
     * Filter which Providers to update
     */
    where?: ProviderWhereInput
    /**
     * Limit how many Providers to update.
     */
    limit?: number
  }

  /**
   * Provider upsert
   */
  export type ProviderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * The filter to search for the Provider to update in case it exists.
     */
    where: ProviderWhereUniqueInput
    /**
     * In case the Provider found by the `where` argument doesn't exist, create a new Provider with this data.
     */
    create: XOR<ProviderCreateInput, ProviderUncheckedCreateInput>
    /**
     * In case the Provider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProviderUpdateInput, ProviderUncheckedUpdateInput>
  }

  /**
   * Provider delete
   */
  export type ProviderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter which Provider to delete.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider deleteMany
   */
  export type ProviderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Providers to delete
     */
    where?: ProviderWhereInput
    /**
     * Limit how many Providers to delete.
     */
    limit?: number
  }

  /**
   * Provider.authorizations
   */
  export type Provider$authorizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authorization
     */
    select?: AuthorizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authorization
     */
    omit?: AuthorizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizationInclude<ExtArgs> | null
    where?: AuthorizationWhereInput
    orderBy?: AuthorizationOrderByWithRelationInput | AuthorizationOrderByWithRelationInput[]
    cursor?: AuthorizationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthorizationScalarFieldEnum | AuthorizationScalarFieldEnum[]
  }

  /**
   * Provider.claims
   */
  export type Provider$claimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    where?: ClaimWhereInput
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    cursor?: ClaimWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * Provider.services
   */
  export type Provider$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalService
     */
    select?: MedicalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalService
     */
    omit?: MedicalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalServiceInclude<ExtArgs> | null
    where?: MedicalServiceWhereInput
    orderBy?: MedicalServiceOrderByWithRelationInput | MedicalServiceOrderByWithRelationInput[]
    cursor?: MedicalServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicalServiceScalarFieldEnum | MedicalServiceScalarFieldEnum[]
  }

  /**
   * Provider.payments
   */
  export type Provider$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderPayment
     */
    select?: ProviderPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderPayment
     */
    omit?: ProviderPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderPaymentInclude<ExtArgs> | null
    where?: ProviderPaymentWhereInput
    orderBy?: ProviderPaymentOrderByWithRelationInput | ProviderPaymentOrderByWithRelationInput[]
    cursor?: ProviderPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProviderPaymentScalarFieldEnum | ProviderPaymentScalarFieldEnum[]
  }

  /**
   * Provider without action
   */
  export type ProviderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
  }


  /**
   * Model Policy
   */

  export type AggregatePolicy = {
    _count: PolicyCountAggregateOutputType | null
    _avg: PolicyAvgAggregateOutputType | null
    _sum: PolicySumAggregateOutputType | null
    _min: PolicyMinAggregateOutputType | null
    _max: PolicyMaxAggregateOutputType | null
  }

  export type PolicyAvgAggregateOutputType = {
    monthlyPremium: Decimal | null
    insuredCount: number | null
  }

  export type PolicySumAggregateOutputType = {
    monthlyPremium: Decimal | null
    insuredCount: number | null
  }

  export type PolicyMinAggregateOutputType = {
    id: string | null
    company: string | null
    planId: string | null
    startDate: Date | null
    endDate: Date | null
    monthlyPremium: Decimal | null
    insuredCount: number | null
    status: $Enums.PolicyStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PolicyMaxAggregateOutputType = {
    id: string | null
    company: string | null
    planId: string | null
    startDate: Date | null
    endDate: Date | null
    monthlyPremium: Decimal | null
    insuredCount: number | null
    status: $Enums.PolicyStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PolicyCountAggregateOutputType = {
    id: number
    company: number
    planId: number
    startDate: number
    endDate: number
    monthlyPremium: number
    insuredCount: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PolicyAvgAggregateInputType = {
    monthlyPremium?: true
    insuredCount?: true
  }

  export type PolicySumAggregateInputType = {
    monthlyPremium?: true
    insuredCount?: true
  }

  export type PolicyMinAggregateInputType = {
    id?: true
    company?: true
    planId?: true
    startDate?: true
    endDate?: true
    monthlyPremium?: true
    insuredCount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PolicyMaxAggregateInputType = {
    id?: true
    company?: true
    planId?: true
    startDate?: true
    endDate?: true
    monthlyPremium?: true
    insuredCount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PolicyCountAggregateInputType = {
    id?: true
    company?: true
    planId?: true
    startDate?: true
    endDate?: true
    monthlyPremium?: true
    insuredCount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PolicyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Policy to aggregate.
     */
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Policies
    **/
    _count?: true | PolicyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PolicyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PolicySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PolicyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PolicyMaxAggregateInputType
  }

  export type GetPolicyAggregateType<T extends PolicyAggregateArgs> = {
        [P in keyof T & keyof AggregatePolicy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePolicy[P]>
      : GetScalarType<T[P], AggregatePolicy[P]>
  }




  export type PolicyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PolicyWhereInput
    orderBy?: PolicyOrderByWithAggregationInput | PolicyOrderByWithAggregationInput[]
    by: PolicyScalarFieldEnum[] | PolicyScalarFieldEnum
    having?: PolicyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PolicyCountAggregateInputType | true
    _avg?: PolicyAvgAggregateInputType
    _sum?: PolicySumAggregateInputType
    _min?: PolicyMinAggregateInputType
    _max?: PolicyMaxAggregateInputType
  }

  export type PolicyGroupByOutputType = {
    id: string
    company: string
    planId: string
    startDate: Date
    endDate: Date
    monthlyPremium: Decimal
    insuredCount: number
    status: $Enums.PolicyStatus
    createdAt: Date
    updatedAt: Date
    _count: PolicyCountAggregateOutputType | null
    _avg: PolicyAvgAggregateOutputType | null
    _sum: PolicySumAggregateOutputType | null
    _min: PolicyMinAggregateOutputType | null
    _max: PolicyMaxAggregateOutputType | null
  }

  type GetPolicyGroupByPayload<T extends PolicyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PolicyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PolicyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PolicyGroupByOutputType[P]>
            : GetScalarType<T[P], PolicyGroupByOutputType[P]>
        }
      >
    >


  export type PolicySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company?: boolean
    planId?: boolean
    startDate?: boolean
    endDate?: boolean
    monthlyPremium?: boolean
    insuredCount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    insureds?: boolean | Policy$insuredsArgs<ExtArgs>
    invoices?: boolean | Policy$invoicesArgs<ExtArgs>
    _count?: boolean | PolicyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["policy"]>

  export type PolicySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company?: boolean
    planId?: boolean
    startDate?: boolean
    endDate?: boolean
    monthlyPremium?: boolean
    insuredCount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["policy"]>

  export type PolicySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company?: boolean
    planId?: boolean
    startDate?: boolean
    endDate?: boolean
    monthlyPremium?: boolean
    insuredCount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["policy"]>

  export type PolicySelectScalar = {
    id?: boolean
    company?: boolean
    planId?: boolean
    startDate?: boolean
    endDate?: boolean
    monthlyPremium?: boolean
    insuredCount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PolicyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company" | "planId" | "startDate" | "endDate" | "monthlyPremium" | "insuredCount" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["policy"]>
  export type PolicyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    insureds?: boolean | Policy$insuredsArgs<ExtArgs>
    invoices?: boolean | Policy$invoicesArgs<ExtArgs>
    _count?: boolean | PolicyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PolicyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }
  export type PolicyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }

  export type $PolicyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Policy"
    objects: {
      plan: Prisma.$PlanPayload<ExtArgs>
      insureds: Prisma.$InsuredPayload<ExtArgs>[]
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      company: string
      planId: string
      startDate: Date
      endDate: Date
      monthlyPremium: Prisma.Decimal
      insuredCount: number
      status: $Enums.PolicyStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["policy"]>
    composites: {}
  }

  type PolicyGetPayload<S extends boolean | null | undefined | PolicyDefaultArgs> = $Result.GetResult<Prisma.$PolicyPayload, S>

  type PolicyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PolicyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PolicyCountAggregateInputType | true
    }

  export interface PolicyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Policy'], meta: { name: 'Policy' } }
    /**
     * Find zero or one Policy that matches the filter.
     * @param {PolicyFindUniqueArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PolicyFindUniqueArgs>(args: SelectSubset<T, PolicyFindUniqueArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Policy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PolicyFindUniqueOrThrowArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PolicyFindUniqueOrThrowArgs>(args: SelectSubset<T, PolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Policy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyFindFirstArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PolicyFindFirstArgs>(args?: SelectSubset<T, PolicyFindFirstArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Policy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyFindFirstOrThrowArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PolicyFindFirstOrThrowArgs>(args?: SelectSubset<T, PolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Policies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Policies
     * const policies = await prisma.policy.findMany()
     * 
     * // Get first 10 Policies
     * const policies = await prisma.policy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const policyWithIdOnly = await prisma.policy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PolicyFindManyArgs>(args?: SelectSubset<T, PolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Policy.
     * @param {PolicyCreateArgs} args - Arguments to create a Policy.
     * @example
     * // Create one Policy
     * const Policy = await prisma.policy.create({
     *   data: {
     *     // ... data to create a Policy
     *   }
     * })
     * 
     */
    create<T extends PolicyCreateArgs>(args: SelectSubset<T, PolicyCreateArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Policies.
     * @param {PolicyCreateManyArgs} args - Arguments to create many Policies.
     * @example
     * // Create many Policies
     * const policy = await prisma.policy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PolicyCreateManyArgs>(args?: SelectSubset<T, PolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Policies and returns the data saved in the database.
     * @param {PolicyCreateManyAndReturnArgs} args - Arguments to create many Policies.
     * @example
     * // Create many Policies
     * const policy = await prisma.policy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Policies and only return the `id`
     * const policyWithIdOnly = await prisma.policy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PolicyCreateManyAndReturnArgs>(args?: SelectSubset<T, PolicyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Policy.
     * @param {PolicyDeleteArgs} args - Arguments to delete one Policy.
     * @example
     * // Delete one Policy
     * const Policy = await prisma.policy.delete({
     *   where: {
     *     // ... filter to delete one Policy
     *   }
     * })
     * 
     */
    delete<T extends PolicyDeleteArgs>(args: SelectSubset<T, PolicyDeleteArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Policy.
     * @param {PolicyUpdateArgs} args - Arguments to update one Policy.
     * @example
     * // Update one Policy
     * const policy = await prisma.policy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PolicyUpdateArgs>(args: SelectSubset<T, PolicyUpdateArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Policies.
     * @param {PolicyDeleteManyArgs} args - Arguments to filter Policies to delete.
     * @example
     * // Delete a few Policies
     * const { count } = await prisma.policy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PolicyDeleteManyArgs>(args?: SelectSubset<T, PolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Policies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Policies
     * const policy = await prisma.policy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PolicyUpdateManyArgs>(args: SelectSubset<T, PolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Policies and returns the data updated in the database.
     * @param {PolicyUpdateManyAndReturnArgs} args - Arguments to update many Policies.
     * @example
     * // Update many Policies
     * const policy = await prisma.policy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Policies and only return the `id`
     * const policyWithIdOnly = await prisma.policy.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PolicyUpdateManyAndReturnArgs>(args: SelectSubset<T, PolicyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Policy.
     * @param {PolicyUpsertArgs} args - Arguments to update or create a Policy.
     * @example
     * // Update or create a Policy
     * const policy = await prisma.policy.upsert({
     *   create: {
     *     // ... data to create a Policy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Policy we want to update
     *   }
     * })
     */
    upsert<T extends PolicyUpsertArgs>(args: SelectSubset<T, PolicyUpsertArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Policies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyCountArgs} args - Arguments to filter Policies to count.
     * @example
     * // Count the number of Policies
     * const count = await prisma.policy.count({
     *   where: {
     *     // ... the filter for the Policies we want to count
     *   }
     * })
    **/
    count<T extends PolicyCountArgs>(
      args?: Subset<T, PolicyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PolicyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Policy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PolicyAggregateArgs>(args: Subset<T, PolicyAggregateArgs>): Prisma.PrismaPromise<GetPolicyAggregateType<T>>

    /**
     * Group by Policy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PolicyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PolicyGroupByArgs['orderBy'] }
        : { orderBy?: PolicyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Policy model
   */
  readonly fields: PolicyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Policy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PolicyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends PlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanDefaultArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    insureds<T extends Policy$insuredsArgs<ExtArgs> = {}>(args?: Subset<T, Policy$insuredsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsuredPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invoices<T extends Policy$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, Policy$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Policy model
   */
  interface PolicyFieldRefs {
    readonly id: FieldRef<"Policy", 'String'>
    readonly company: FieldRef<"Policy", 'String'>
    readonly planId: FieldRef<"Policy", 'String'>
    readonly startDate: FieldRef<"Policy", 'DateTime'>
    readonly endDate: FieldRef<"Policy", 'DateTime'>
    readonly monthlyPremium: FieldRef<"Policy", 'Decimal'>
    readonly insuredCount: FieldRef<"Policy", 'Int'>
    readonly status: FieldRef<"Policy", 'PolicyStatus'>
    readonly createdAt: FieldRef<"Policy", 'DateTime'>
    readonly updatedAt: FieldRef<"Policy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Policy findUnique
   */
  export type PolicyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter, which Policy to fetch.
     */
    where: PolicyWhereUniqueInput
  }

  /**
   * Policy findUniqueOrThrow
   */
  export type PolicyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter, which Policy to fetch.
     */
    where: PolicyWhereUniqueInput
  }

  /**
   * Policy findFirst
   */
  export type PolicyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter, which Policy to fetch.
     */
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Policies.
     */
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Policies.
     */
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * Policy findFirstOrThrow
   */
  export type PolicyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter, which Policy to fetch.
     */
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Policies.
     */
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Policies.
     */
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * Policy findMany
   */
  export type PolicyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter, which Policies to fetch.
     */
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Policies.
     */
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Policies.
     */
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * Policy create
   */
  export type PolicyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * The data needed to create a Policy.
     */
    data: XOR<PolicyCreateInput, PolicyUncheckedCreateInput>
  }

  /**
   * Policy createMany
   */
  export type PolicyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Policies.
     */
    data: PolicyCreateManyInput | PolicyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Policy createManyAndReturn
   */
  export type PolicyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * The data used to create many Policies.
     */
    data: PolicyCreateManyInput | PolicyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Policy update
   */
  export type PolicyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * The data needed to update a Policy.
     */
    data: XOR<PolicyUpdateInput, PolicyUncheckedUpdateInput>
    /**
     * Choose, which Policy to update.
     */
    where: PolicyWhereUniqueInput
  }

  /**
   * Policy updateMany
   */
  export type PolicyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Policies.
     */
    data: XOR<PolicyUpdateManyMutationInput, PolicyUncheckedUpdateManyInput>
    /**
     * Filter which Policies to update
     */
    where?: PolicyWhereInput
    /**
     * Limit how many Policies to update.
     */
    limit?: number
  }

  /**
   * Policy updateManyAndReturn
   */
  export type PolicyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * The data used to update Policies.
     */
    data: XOR<PolicyUpdateManyMutationInput, PolicyUncheckedUpdateManyInput>
    /**
     * Filter which Policies to update
     */
    where?: PolicyWhereInput
    /**
     * Limit how many Policies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Policy upsert
   */
  export type PolicyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * The filter to search for the Policy to update in case it exists.
     */
    where: PolicyWhereUniqueInput
    /**
     * In case the Policy found by the `where` argument doesn't exist, create a new Policy with this data.
     */
    create: XOR<PolicyCreateInput, PolicyUncheckedCreateInput>
    /**
     * In case the Policy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PolicyUpdateInput, PolicyUncheckedUpdateInput>
  }

  /**
   * Policy delete
   */
  export type PolicyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter which Policy to delete.
     */
    where: PolicyWhereUniqueInput
  }

  /**
   * Policy deleteMany
   */
  export type PolicyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Policies to delete
     */
    where?: PolicyWhereInput
    /**
     * Limit how many Policies to delete.
     */
    limit?: number
  }

  /**
   * Policy.insureds
   */
  export type Policy$insuredsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insured
     */
    select?: InsuredSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insured
     */
    omit?: InsuredOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuredInclude<ExtArgs> | null
    where?: InsuredWhereInput
    orderBy?: InsuredOrderByWithRelationInput | InsuredOrderByWithRelationInput[]
    cursor?: InsuredWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InsuredScalarFieldEnum | InsuredScalarFieldEnum[]
  }

  /**
   * Policy.invoices
   */
  export type Policy$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Policy without action
   */
  export type PolicyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
  }


  /**
   * Model Insured
   */

  export type AggregateInsured = {
    _count: InsuredCountAggregateOutputType | null
    _avg: InsuredAvgAggregateOutputType | null
    _sum: InsuredSumAggregateOutputType | null
    _min: InsuredMinAggregateOutputType | null
    _max: InsuredMaxAggregateOutputType | null
  }

  export type InsuredAvgAggregateOutputType = {
    dependents: number | null
  }

  export type InsuredSumAggregateOutputType = {
    dependents: number | null
  }

  export type InsuredMinAggregateOutputType = {
    id: string | null
    name: string | null
    nationalId: string | null
    planId: string | null
    policyId: string | null
    status: $Enums.InsuredStatus | null
    startDate: Date | null
    birthDate: Date | null
    phone: string | null
    email: string | null
    dependents: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InsuredMaxAggregateOutputType = {
    id: string | null
    name: string | null
    nationalId: string | null
    planId: string | null
    policyId: string | null
    status: $Enums.InsuredStatus | null
    startDate: Date | null
    birthDate: Date | null
    phone: string | null
    email: string | null
    dependents: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InsuredCountAggregateOutputType = {
    id: number
    name: number
    nationalId: number
    planId: number
    policyId: number
    status: number
    startDate: number
    birthDate: number
    phone: number
    email: number
    dependents: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InsuredAvgAggregateInputType = {
    dependents?: true
  }

  export type InsuredSumAggregateInputType = {
    dependents?: true
  }

  export type InsuredMinAggregateInputType = {
    id?: true
    name?: true
    nationalId?: true
    planId?: true
    policyId?: true
    status?: true
    startDate?: true
    birthDate?: true
    phone?: true
    email?: true
    dependents?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InsuredMaxAggregateInputType = {
    id?: true
    name?: true
    nationalId?: true
    planId?: true
    policyId?: true
    status?: true
    startDate?: true
    birthDate?: true
    phone?: true
    email?: true
    dependents?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InsuredCountAggregateInputType = {
    id?: true
    name?: true
    nationalId?: true
    planId?: true
    policyId?: true
    status?: true
    startDate?: true
    birthDate?: true
    phone?: true
    email?: true
    dependents?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InsuredAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Insured to aggregate.
     */
    where?: InsuredWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insureds to fetch.
     */
    orderBy?: InsuredOrderByWithRelationInput | InsuredOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InsuredWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insureds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insureds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Insureds
    **/
    _count?: true | InsuredCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InsuredAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InsuredSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InsuredMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InsuredMaxAggregateInputType
  }

  export type GetInsuredAggregateType<T extends InsuredAggregateArgs> = {
        [P in keyof T & keyof AggregateInsured]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInsured[P]>
      : GetScalarType<T[P], AggregateInsured[P]>
  }




  export type InsuredGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InsuredWhereInput
    orderBy?: InsuredOrderByWithAggregationInput | InsuredOrderByWithAggregationInput[]
    by: InsuredScalarFieldEnum[] | InsuredScalarFieldEnum
    having?: InsuredScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InsuredCountAggregateInputType | true
    _avg?: InsuredAvgAggregateInputType
    _sum?: InsuredSumAggregateInputType
    _min?: InsuredMinAggregateInputType
    _max?: InsuredMaxAggregateInputType
  }

  export type InsuredGroupByOutputType = {
    id: string
    name: string
    nationalId: string
    planId: string
    policyId: string | null
    status: $Enums.InsuredStatus
    startDate: Date
    birthDate: Date | null
    phone: string | null
    email: string | null
    dependents: number
    createdAt: Date
    updatedAt: Date
    _count: InsuredCountAggregateOutputType | null
    _avg: InsuredAvgAggregateOutputType | null
    _sum: InsuredSumAggregateOutputType | null
    _min: InsuredMinAggregateOutputType | null
    _max: InsuredMaxAggregateOutputType | null
  }

  type GetInsuredGroupByPayload<T extends InsuredGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InsuredGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InsuredGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InsuredGroupByOutputType[P]>
            : GetScalarType<T[P], InsuredGroupByOutputType[P]>
        }
      >
    >


  export type InsuredSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nationalId?: boolean
    planId?: boolean
    policyId?: boolean
    status?: boolean
    startDate?: boolean
    birthDate?: boolean
    phone?: boolean
    email?: boolean
    dependents?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    policy?: boolean | Insured$policyArgs<ExtArgs>
    authorizations?: boolean | Insured$authorizationsArgs<ExtArgs>
    claims?: boolean | Insured$claimsArgs<ExtArgs>
    services?: boolean | Insured$servicesArgs<ExtArgs>
    _count?: boolean | InsuredCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["insured"]>

  export type InsuredSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nationalId?: boolean
    planId?: boolean
    policyId?: boolean
    status?: boolean
    startDate?: boolean
    birthDate?: boolean
    phone?: boolean
    email?: boolean
    dependents?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    policy?: boolean | Insured$policyArgs<ExtArgs>
  }, ExtArgs["result"]["insured"]>

  export type InsuredSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nationalId?: boolean
    planId?: boolean
    policyId?: boolean
    status?: boolean
    startDate?: boolean
    birthDate?: boolean
    phone?: boolean
    email?: boolean
    dependents?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    policy?: boolean | Insured$policyArgs<ExtArgs>
  }, ExtArgs["result"]["insured"]>

  export type InsuredSelectScalar = {
    id?: boolean
    name?: boolean
    nationalId?: boolean
    planId?: boolean
    policyId?: boolean
    status?: boolean
    startDate?: boolean
    birthDate?: boolean
    phone?: boolean
    email?: boolean
    dependents?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InsuredOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "nationalId" | "planId" | "policyId" | "status" | "startDate" | "birthDate" | "phone" | "email" | "dependents" | "createdAt" | "updatedAt", ExtArgs["result"]["insured"]>
  export type InsuredInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    policy?: boolean | Insured$policyArgs<ExtArgs>
    authorizations?: boolean | Insured$authorizationsArgs<ExtArgs>
    claims?: boolean | Insured$claimsArgs<ExtArgs>
    services?: boolean | Insured$servicesArgs<ExtArgs>
    _count?: boolean | InsuredCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InsuredIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    policy?: boolean | Insured$policyArgs<ExtArgs>
  }
  export type InsuredIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    policy?: boolean | Insured$policyArgs<ExtArgs>
  }

  export type $InsuredPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Insured"
    objects: {
      plan: Prisma.$PlanPayload<ExtArgs>
      policy: Prisma.$PolicyPayload<ExtArgs> | null
      authorizations: Prisma.$AuthorizationPayload<ExtArgs>[]
      claims: Prisma.$ClaimPayload<ExtArgs>[]
      services: Prisma.$MedicalServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      nationalId: string
      planId: string
      policyId: string | null
      status: $Enums.InsuredStatus
      startDate: Date
      birthDate: Date | null
      phone: string | null
      email: string | null
      dependents: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["insured"]>
    composites: {}
  }

  type InsuredGetPayload<S extends boolean | null | undefined | InsuredDefaultArgs> = $Result.GetResult<Prisma.$InsuredPayload, S>

  type InsuredCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InsuredFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InsuredCountAggregateInputType | true
    }

  export interface InsuredDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Insured'], meta: { name: 'Insured' } }
    /**
     * Find zero or one Insured that matches the filter.
     * @param {InsuredFindUniqueArgs} args - Arguments to find a Insured
     * @example
     * // Get one Insured
     * const insured = await prisma.insured.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InsuredFindUniqueArgs>(args: SelectSubset<T, InsuredFindUniqueArgs<ExtArgs>>): Prisma__InsuredClient<$Result.GetResult<Prisma.$InsuredPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Insured that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InsuredFindUniqueOrThrowArgs} args - Arguments to find a Insured
     * @example
     * // Get one Insured
     * const insured = await prisma.insured.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InsuredFindUniqueOrThrowArgs>(args: SelectSubset<T, InsuredFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InsuredClient<$Result.GetResult<Prisma.$InsuredPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Insured that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsuredFindFirstArgs} args - Arguments to find a Insured
     * @example
     * // Get one Insured
     * const insured = await prisma.insured.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InsuredFindFirstArgs>(args?: SelectSubset<T, InsuredFindFirstArgs<ExtArgs>>): Prisma__InsuredClient<$Result.GetResult<Prisma.$InsuredPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Insured that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsuredFindFirstOrThrowArgs} args - Arguments to find a Insured
     * @example
     * // Get one Insured
     * const insured = await prisma.insured.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InsuredFindFirstOrThrowArgs>(args?: SelectSubset<T, InsuredFindFirstOrThrowArgs<ExtArgs>>): Prisma__InsuredClient<$Result.GetResult<Prisma.$InsuredPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Insureds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsuredFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Insureds
     * const insureds = await prisma.insured.findMany()
     * 
     * // Get first 10 Insureds
     * const insureds = await prisma.insured.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const insuredWithIdOnly = await prisma.insured.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InsuredFindManyArgs>(args?: SelectSubset<T, InsuredFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsuredPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Insured.
     * @param {InsuredCreateArgs} args - Arguments to create a Insured.
     * @example
     * // Create one Insured
     * const Insured = await prisma.insured.create({
     *   data: {
     *     // ... data to create a Insured
     *   }
     * })
     * 
     */
    create<T extends InsuredCreateArgs>(args: SelectSubset<T, InsuredCreateArgs<ExtArgs>>): Prisma__InsuredClient<$Result.GetResult<Prisma.$InsuredPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Insureds.
     * @param {InsuredCreateManyArgs} args - Arguments to create many Insureds.
     * @example
     * // Create many Insureds
     * const insured = await prisma.insured.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InsuredCreateManyArgs>(args?: SelectSubset<T, InsuredCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Insureds and returns the data saved in the database.
     * @param {InsuredCreateManyAndReturnArgs} args - Arguments to create many Insureds.
     * @example
     * // Create many Insureds
     * const insured = await prisma.insured.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Insureds and only return the `id`
     * const insuredWithIdOnly = await prisma.insured.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InsuredCreateManyAndReturnArgs>(args?: SelectSubset<T, InsuredCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsuredPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Insured.
     * @param {InsuredDeleteArgs} args - Arguments to delete one Insured.
     * @example
     * // Delete one Insured
     * const Insured = await prisma.insured.delete({
     *   where: {
     *     // ... filter to delete one Insured
     *   }
     * })
     * 
     */
    delete<T extends InsuredDeleteArgs>(args: SelectSubset<T, InsuredDeleteArgs<ExtArgs>>): Prisma__InsuredClient<$Result.GetResult<Prisma.$InsuredPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Insured.
     * @param {InsuredUpdateArgs} args - Arguments to update one Insured.
     * @example
     * // Update one Insured
     * const insured = await prisma.insured.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InsuredUpdateArgs>(args: SelectSubset<T, InsuredUpdateArgs<ExtArgs>>): Prisma__InsuredClient<$Result.GetResult<Prisma.$InsuredPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Insureds.
     * @param {InsuredDeleteManyArgs} args - Arguments to filter Insureds to delete.
     * @example
     * // Delete a few Insureds
     * const { count } = await prisma.insured.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InsuredDeleteManyArgs>(args?: SelectSubset<T, InsuredDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Insureds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsuredUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Insureds
     * const insured = await prisma.insured.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InsuredUpdateManyArgs>(args: SelectSubset<T, InsuredUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Insureds and returns the data updated in the database.
     * @param {InsuredUpdateManyAndReturnArgs} args - Arguments to update many Insureds.
     * @example
     * // Update many Insureds
     * const insured = await prisma.insured.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Insureds and only return the `id`
     * const insuredWithIdOnly = await prisma.insured.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InsuredUpdateManyAndReturnArgs>(args: SelectSubset<T, InsuredUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsuredPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Insured.
     * @param {InsuredUpsertArgs} args - Arguments to update or create a Insured.
     * @example
     * // Update or create a Insured
     * const insured = await prisma.insured.upsert({
     *   create: {
     *     // ... data to create a Insured
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Insured we want to update
     *   }
     * })
     */
    upsert<T extends InsuredUpsertArgs>(args: SelectSubset<T, InsuredUpsertArgs<ExtArgs>>): Prisma__InsuredClient<$Result.GetResult<Prisma.$InsuredPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Insureds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsuredCountArgs} args - Arguments to filter Insureds to count.
     * @example
     * // Count the number of Insureds
     * const count = await prisma.insured.count({
     *   where: {
     *     // ... the filter for the Insureds we want to count
     *   }
     * })
    **/
    count<T extends InsuredCountArgs>(
      args?: Subset<T, InsuredCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InsuredCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Insured.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsuredAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InsuredAggregateArgs>(args: Subset<T, InsuredAggregateArgs>): Prisma.PrismaPromise<GetInsuredAggregateType<T>>

    /**
     * Group by Insured.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsuredGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InsuredGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InsuredGroupByArgs['orderBy'] }
        : { orderBy?: InsuredGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InsuredGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInsuredGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Insured model
   */
  readonly fields: InsuredFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Insured.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InsuredClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends PlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanDefaultArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    policy<T extends Insured$policyArgs<ExtArgs> = {}>(args?: Subset<T, Insured$policyArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    authorizations<T extends Insured$authorizationsArgs<ExtArgs> = {}>(args?: Subset<T, Insured$authorizationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    claims<T extends Insured$claimsArgs<ExtArgs> = {}>(args?: Subset<T, Insured$claimsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    services<T extends Insured$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Insured$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Insured model
   */
  interface InsuredFieldRefs {
    readonly id: FieldRef<"Insured", 'String'>
    readonly name: FieldRef<"Insured", 'String'>
    readonly nationalId: FieldRef<"Insured", 'String'>
    readonly planId: FieldRef<"Insured", 'String'>
    readonly policyId: FieldRef<"Insured", 'String'>
    readonly status: FieldRef<"Insured", 'InsuredStatus'>
    readonly startDate: FieldRef<"Insured", 'DateTime'>
    readonly birthDate: FieldRef<"Insured", 'DateTime'>
    readonly phone: FieldRef<"Insured", 'String'>
    readonly email: FieldRef<"Insured", 'String'>
    readonly dependents: FieldRef<"Insured", 'Int'>
    readonly createdAt: FieldRef<"Insured", 'DateTime'>
    readonly updatedAt: FieldRef<"Insured", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Insured findUnique
   */
  export type InsuredFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insured
     */
    select?: InsuredSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insured
     */
    omit?: InsuredOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuredInclude<ExtArgs> | null
    /**
     * Filter, which Insured to fetch.
     */
    where: InsuredWhereUniqueInput
  }

  /**
   * Insured findUniqueOrThrow
   */
  export type InsuredFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insured
     */
    select?: InsuredSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insured
     */
    omit?: InsuredOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuredInclude<ExtArgs> | null
    /**
     * Filter, which Insured to fetch.
     */
    where: InsuredWhereUniqueInput
  }

  /**
   * Insured findFirst
   */
  export type InsuredFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insured
     */
    select?: InsuredSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insured
     */
    omit?: InsuredOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuredInclude<ExtArgs> | null
    /**
     * Filter, which Insured to fetch.
     */
    where?: InsuredWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insureds to fetch.
     */
    orderBy?: InsuredOrderByWithRelationInput | InsuredOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Insureds.
     */
    cursor?: InsuredWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insureds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insureds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Insureds.
     */
    distinct?: InsuredScalarFieldEnum | InsuredScalarFieldEnum[]
  }

  /**
   * Insured findFirstOrThrow
   */
  export type InsuredFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insured
     */
    select?: InsuredSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insured
     */
    omit?: InsuredOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuredInclude<ExtArgs> | null
    /**
     * Filter, which Insured to fetch.
     */
    where?: InsuredWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insureds to fetch.
     */
    orderBy?: InsuredOrderByWithRelationInput | InsuredOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Insureds.
     */
    cursor?: InsuredWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insureds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insureds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Insureds.
     */
    distinct?: InsuredScalarFieldEnum | InsuredScalarFieldEnum[]
  }

  /**
   * Insured findMany
   */
  export type InsuredFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insured
     */
    select?: InsuredSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insured
     */
    omit?: InsuredOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuredInclude<ExtArgs> | null
    /**
     * Filter, which Insureds to fetch.
     */
    where?: InsuredWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insureds to fetch.
     */
    orderBy?: InsuredOrderByWithRelationInput | InsuredOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Insureds.
     */
    cursor?: InsuredWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insureds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insureds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Insureds.
     */
    distinct?: InsuredScalarFieldEnum | InsuredScalarFieldEnum[]
  }

  /**
   * Insured create
   */
  export type InsuredCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insured
     */
    select?: InsuredSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insured
     */
    omit?: InsuredOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuredInclude<ExtArgs> | null
    /**
     * The data needed to create a Insured.
     */
    data: XOR<InsuredCreateInput, InsuredUncheckedCreateInput>
  }

  /**
   * Insured createMany
   */
  export type InsuredCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Insureds.
     */
    data: InsuredCreateManyInput | InsuredCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Insured createManyAndReturn
   */
  export type InsuredCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insured
     */
    select?: InsuredSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Insured
     */
    omit?: InsuredOmit<ExtArgs> | null
    /**
     * The data used to create many Insureds.
     */
    data: InsuredCreateManyInput | InsuredCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuredIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Insured update
   */
  export type InsuredUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insured
     */
    select?: InsuredSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insured
     */
    omit?: InsuredOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuredInclude<ExtArgs> | null
    /**
     * The data needed to update a Insured.
     */
    data: XOR<InsuredUpdateInput, InsuredUncheckedUpdateInput>
    /**
     * Choose, which Insured to update.
     */
    where: InsuredWhereUniqueInput
  }

  /**
   * Insured updateMany
   */
  export type InsuredUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Insureds.
     */
    data: XOR<InsuredUpdateManyMutationInput, InsuredUncheckedUpdateManyInput>
    /**
     * Filter which Insureds to update
     */
    where?: InsuredWhereInput
    /**
     * Limit how many Insureds to update.
     */
    limit?: number
  }

  /**
   * Insured updateManyAndReturn
   */
  export type InsuredUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insured
     */
    select?: InsuredSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Insured
     */
    omit?: InsuredOmit<ExtArgs> | null
    /**
     * The data used to update Insureds.
     */
    data: XOR<InsuredUpdateManyMutationInput, InsuredUncheckedUpdateManyInput>
    /**
     * Filter which Insureds to update
     */
    where?: InsuredWhereInput
    /**
     * Limit how many Insureds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuredIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Insured upsert
   */
  export type InsuredUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insured
     */
    select?: InsuredSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insured
     */
    omit?: InsuredOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuredInclude<ExtArgs> | null
    /**
     * The filter to search for the Insured to update in case it exists.
     */
    where: InsuredWhereUniqueInput
    /**
     * In case the Insured found by the `where` argument doesn't exist, create a new Insured with this data.
     */
    create: XOR<InsuredCreateInput, InsuredUncheckedCreateInput>
    /**
     * In case the Insured was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InsuredUpdateInput, InsuredUncheckedUpdateInput>
  }

  /**
   * Insured delete
   */
  export type InsuredDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insured
     */
    select?: InsuredSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insured
     */
    omit?: InsuredOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuredInclude<ExtArgs> | null
    /**
     * Filter which Insured to delete.
     */
    where: InsuredWhereUniqueInput
  }

  /**
   * Insured deleteMany
   */
  export type InsuredDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Insureds to delete
     */
    where?: InsuredWhereInput
    /**
     * Limit how many Insureds to delete.
     */
    limit?: number
  }

  /**
   * Insured.policy
   */
  export type Insured$policyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    where?: PolicyWhereInput
  }

  /**
   * Insured.authorizations
   */
  export type Insured$authorizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authorization
     */
    select?: AuthorizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authorization
     */
    omit?: AuthorizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizationInclude<ExtArgs> | null
    where?: AuthorizationWhereInput
    orderBy?: AuthorizationOrderByWithRelationInput | AuthorizationOrderByWithRelationInput[]
    cursor?: AuthorizationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthorizationScalarFieldEnum | AuthorizationScalarFieldEnum[]
  }

  /**
   * Insured.claims
   */
  export type Insured$claimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    where?: ClaimWhereInput
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    cursor?: ClaimWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * Insured.services
   */
  export type Insured$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalService
     */
    select?: MedicalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalService
     */
    omit?: MedicalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalServiceInclude<ExtArgs> | null
    where?: MedicalServiceWhereInput
    orderBy?: MedicalServiceOrderByWithRelationInput | MedicalServiceOrderByWithRelationInput[]
    cursor?: MedicalServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicalServiceScalarFieldEnum | MedicalServiceScalarFieldEnum[]
  }

  /**
   * Insured without action
   */
  export type InsuredDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insured
     */
    select?: InsuredSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insured
     */
    omit?: InsuredOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsuredInclude<ExtArgs> | null
  }


  /**
   * Model Authorization
   */

  export type AggregateAuthorization = {
    _count: AuthorizationCountAggregateOutputType | null
    _avg: AuthorizationAvgAggregateOutputType | null
    _sum: AuthorizationSumAggregateOutputType | null
    _min: AuthorizationMinAggregateOutputType | null
    _max: AuthorizationMaxAggregateOutputType | null
  }

  export type AuthorizationAvgAggregateOutputType = {
    copay: Decimal | null
  }

  export type AuthorizationSumAggregateOutputType = {
    copay: Decimal | null
  }

  export type AuthorizationMinAggregateOutputType = {
    id: string | null
    insuredId: string | null
    providerId: string | null
    procedure: string | null
    copay: Decimal | null
    status: $Enums.AuthorizationStatus | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthorizationMaxAggregateOutputType = {
    id: string | null
    insuredId: string | null
    providerId: string | null
    procedure: string | null
    copay: Decimal | null
    status: $Enums.AuthorizationStatus | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthorizationCountAggregateOutputType = {
    id: number
    insuredId: number
    providerId: number
    procedure: number
    copay: number
    status: number
    date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AuthorizationAvgAggregateInputType = {
    copay?: true
  }

  export type AuthorizationSumAggregateInputType = {
    copay?: true
  }

  export type AuthorizationMinAggregateInputType = {
    id?: true
    insuredId?: true
    providerId?: true
    procedure?: true
    copay?: true
    status?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthorizationMaxAggregateInputType = {
    id?: true
    insuredId?: true
    providerId?: true
    procedure?: true
    copay?: true
    status?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthorizationCountAggregateInputType = {
    id?: true
    insuredId?: true
    providerId?: true
    procedure?: true
    copay?: true
    status?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AuthorizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authorization to aggregate.
     */
    where?: AuthorizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authorizations to fetch.
     */
    orderBy?: AuthorizationOrderByWithRelationInput | AuthorizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthorizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authorizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authorizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Authorizations
    **/
    _count?: true | AuthorizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthorizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthorizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorizationMaxAggregateInputType
  }

  export type GetAuthorizationAggregateType<T extends AuthorizationAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthorization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthorization[P]>
      : GetScalarType<T[P], AggregateAuthorization[P]>
  }




  export type AuthorizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorizationWhereInput
    orderBy?: AuthorizationOrderByWithAggregationInput | AuthorizationOrderByWithAggregationInput[]
    by: AuthorizationScalarFieldEnum[] | AuthorizationScalarFieldEnum
    having?: AuthorizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorizationCountAggregateInputType | true
    _avg?: AuthorizationAvgAggregateInputType
    _sum?: AuthorizationSumAggregateInputType
    _min?: AuthorizationMinAggregateInputType
    _max?: AuthorizationMaxAggregateInputType
  }

  export type AuthorizationGroupByOutputType = {
    id: string
    insuredId: string
    providerId: string
    procedure: string
    copay: Decimal
    status: $Enums.AuthorizationStatus
    date: Date
    createdAt: Date
    updatedAt: Date
    _count: AuthorizationCountAggregateOutputType | null
    _avg: AuthorizationAvgAggregateOutputType | null
    _sum: AuthorizationSumAggregateOutputType | null
    _min: AuthorizationMinAggregateOutputType | null
    _max: AuthorizationMaxAggregateOutputType | null
  }

  type GetAuthorizationGroupByPayload<T extends AuthorizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorizationGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorizationGroupByOutputType[P]>
        }
      >
    >


  export type AuthorizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    insuredId?: boolean
    providerId?: boolean
    procedure?: boolean
    copay?: boolean
    status?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    insured?: boolean | InsuredDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    services?: boolean | Authorization$servicesArgs<ExtArgs>
    _count?: boolean | AuthorizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authorization"]>

  export type AuthorizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    insuredId?: boolean
    providerId?: boolean
    procedure?: boolean
    copay?: boolean
    status?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    insured?: boolean | InsuredDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authorization"]>

  export type AuthorizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    insuredId?: boolean
    providerId?: boolean
    procedure?: boolean
    copay?: boolean
    status?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    insured?: boolean | InsuredDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authorization"]>

  export type AuthorizationSelectScalar = {
    id?: boolean
    insuredId?: boolean
    providerId?: boolean
    procedure?: boolean
    copay?: boolean
    status?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AuthorizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "insuredId" | "providerId" | "procedure" | "copay" | "status" | "date" | "createdAt" | "updatedAt", ExtArgs["result"]["authorization"]>
  export type AuthorizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insured?: boolean | InsuredDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    services?: boolean | Authorization$servicesArgs<ExtArgs>
    _count?: boolean | AuthorizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AuthorizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insured?: boolean | InsuredDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }
  export type AuthorizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insured?: boolean | InsuredDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }

  export type $AuthorizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Authorization"
    objects: {
      insured: Prisma.$InsuredPayload<ExtArgs>
      provider: Prisma.$ProviderPayload<ExtArgs>
      services: Prisma.$MedicalServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      insuredId: string
      providerId: string
      procedure: string
      copay: Prisma.Decimal
      status: $Enums.AuthorizationStatus
      date: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["authorization"]>
    composites: {}
  }

  type AuthorizationGetPayload<S extends boolean | null | undefined | AuthorizationDefaultArgs> = $Result.GetResult<Prisma.$AuthorizationPayload, S>

  type AuthorizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthorizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthorizationCountAggregateInputType | true
    }

  export interface AuthorizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Authorization'], meta: { name: 'Authorization' } }
    /**
     * Find zero or one Authorization that matches the filter.
     * @param {AuthorizationFindUniqueArgs} args - Arguments to find a Authorization
     * @example
     * // Get one Authorization
     * const authorization = await prisma.authorization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthorizationFindUniqueArgs>(args: SelectSubset<T, AuthorizationFindUniqueArgs<ExtArgs>>): Prisma__AuthorizationClient<$Result.GetResult<Prisma.$AuthorizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Authorization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthorizationFindUniqueOrThrowArgs} args - Arguments to find a Authorization
     * @example
     * // Get one Authorization
     * const authorization = await prisma.authorization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthorizationFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthorizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthorizationClient<$Result.GetResult<Prisma.$AuthorizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authorization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorizationFindFirstArgs} args - Arguments to find a Authorization
     * @example
     * // Get one Authorization
     * const authorization = await prisma.authorization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthorizationFindFirstArgs>(args?: SelectSubset<T, AuthorizationFindFirstArgs<ExtArgs>>): Prisma__AuthorizationClient<$Result.GetResult<Prisma.$AuthorizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authorization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorizationFindFirstOrThrowArgs} args - Arguments to find a Authorization
     * @example
     * // Get one Authorization
     * const authorization = await prisma.authorization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthorizationFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthorizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthorizationClient<$Result.GetResult<Prisma.$AuthorizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Authorizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authorizations
     * const authorizations = await prisma.authorization.findMany()
     * 
     * // Get first 10 Authorizations
     * const authorizations = await prisma.authorization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authorizationWithIdOnly = await prisma.authorization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthorizationFindManyArgs>(args?: SelectSubset<T, AuthorizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Authorization.
     * @param {AuthorizationCreateArgs} args - Arguments to create a Authorization.
     * @example
     * // Create one Authorization
     * const Authorization = await prisma.authorization.create({
     *   data: {
     *     // ... data to create a Authorization
     *   }
     * })
     * 
     */
    create<T extends AuthorizationCreateArgs>(args: SelectSubset<T, AuthorizationCreateArgs<ExtArgs>>): Prisma__AuthorizationClient<$Result.GetResult<Prisma.$AuthorizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Authorizations.
     * @param {AuthorizationCreateManyArgs} args - Arguments to create many Authorizations.
     * @example
     * // Create many Authorizations
     * const authorization = await prisma.authorization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthorizationCreateManyArgs>(args?: SelectSubset<T, AuthorizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Authorizations and returns the data saved in the database.
     * @param {AuthorizationCreateManyAndReturnArgs} args - Arguments to create many Authorizations.
     * @example
     * // Create many Authorizations
     * const authorization = await prisma.authorization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Authorizations and only return the `id`
     * const authorizationWithIdOnly = await prisma.authorization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthorizationCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthorizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Authorization.
     * @param {AuthorizationDeleteArgs} args - Arguments to delete one Authorization.
     * @example
     * // Delete one Authorization
     * const Authorization = await prisma.authorization.delete({
     *   where: {
     *     // ... filter to delete one Authorization
     *   }
     * })
     * 
     */
    delete<T extends AuthorizationDeleteArgs>(args: SelectSubset<T, AuthorizationDeleteArgs<ExtArgs>>): Prisma__AuthorizationClient<$Result.GetResult<Prisma.$AuthorizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Authorization.
     * @param {AuthorizationUpdateArgs} args - Arguments to update one Authorization.
     * @example
     * // Update one Authorization
     * const authorization = await prisma.authorization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthorizationUpdateArgs>(args: SelectSubset<T, AuthorizationUpdateArgs<ExtArgs>>): Prisma__AuthorizationClient<$Result.GetResult<Prisma.$AuthorizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Authorizations.
     * @param {AuthorizationDeleteManyArgs} args - Arguments to filter Authorizations to delete.
     * @example
     * // Delete a few Authorizations
     * const { count } = await prisma.authorization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthorizationDeleteManyArgs>(args?: SelectSubset<T, AuthorizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authorizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authorizations
     * const authorization = await prisma.authorization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthorizationUpdateManyArgs>(args: SelectSubset<T, AuthorizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authorizations and returns the data updated in the database.
     * @param {AuthorizationUpdateManyAndReturnArgs} args - Arguments to update many Authorizations.
     * @example
     * // Update many Authorizations
     * const authorization = await prisma.authorization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Authorizations and only return the `id`
     * const authorizationWithIdOnly = await prisma.authorization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuthorizationUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthorizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Authorization.
     * @param {AuthorizationUpsertArgs} args - Arguments to update or create a Authorization.
     * @example
     * // Update or create a Authorization
     * const authorization = await prisma.authorization.upsert({
     *   create: {
     *     // ... data to create a Authorization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Authorization we want to update
     *   }
     * })
     */
    upsert<T extends AuthorizationUpsertArgs>(args: SelectSubset<T, AuthorizationUpsertArgs<ExtArgs>>): Prisma__AuthorizationClient<$Result.GetResult<Prisma.$AuthorizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Authorizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorizationCountArgs} args - Arguments to filter Authorizations to count.
     * @example
     * // Count the number of Authorizations
     * const count = await prisma.authorization.count({
     *   where: {
     *     // ... the filter for the Authorizations we want to count
     *   }
     * })
    **/
    count<T extends AuthorizationCountArgs>(
      args?: Subset<T, AuthorizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Authorization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthorizationAggregateArgs>(args: Subset<T, AuthorizationAggregateArgs>): Prisma.PrismaPromise<GetAuthorizationAggregateType<T>>

    /**
     * Group by Authorization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthorizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorizationGroupByArgs['orderBy'] }
        : { orderBy?: AuthorizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthorizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Authorization model
   */
  readonly fields: AuthorizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Authorization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthorizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    insured<T extends InsuredDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InsuredDefaultArgs<ExtArgs>>): Prisma__InsuredClient<$Result.GetResult<Prisma.$InsuredPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    provider<T extends ProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProviderDefaultArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    services<T extends Authorization$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Authorization$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Authorization model
   */
  interface AuthorizationFieldRefs {
    readonly id: FieldRef<"Authorization", 'String'>
    readonly insuredId: FieldRef<"Authorization", 'String'>
    readonly providerId: FieldRef<"Authorization", 'String'>
    readonly procedure: FieldRef<"Authorization", 'String'>
    readonly copay: FieldRef<"Authorization", 'Decimal'>
    readonly status: FieldRef<"Authorization", 'AuthorizationStatus'>
    readonly date: FieldRef<"Authorization", 'DateTime'>
    readonly createdAt: FieldRef<"Authorization", 'DateTime'>
    readonly updatedAt: FieldRef<"Authorization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Authorization findUnique
   */
  export type AuthorizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authorization
     */
    select?: AuthorizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authorization
     */
    omit?: AuthorizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizationInclude<ExtArgs> | null
    /**
     * Filter, which Authorization to fetch.
     */
    where: AuthorizationWhereUniqueInput
  }

  /**
   * Authorization findUniqueOrThrow
   */
  export type AuthorizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authorization
     */
    select?: AuthorizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authorization
     */
    omit?: AuthorizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizationInclude<ExtArgs> | null
    /**
     * Filter, which Authorization to fetch.
     */
    where: AuthorizationWhereUniqueInput
  }

  /**
   * Authorization findFirst
   */
  export type AuthorizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authorization
     */
    select?: AuthorizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authorization
     */
    omit?: AuthorizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizationInclude<ExtArgs> | null
    /**
     * Filter, which Authorization to fetch.
     */
    where?: AuthorizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authorizations to fetch.
     */
    orderBy?: AuthorizationOrderByWithRelationInput | AuthorizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authorizations.
     */
    cursor?: AuthorizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authorizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authorizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authorizations.
     */
    distinct?: AuthorizationScalarFieldEnum | AuthorizationScalarFieldEnum[]
  }

  /**
   * Authorization findFirstOrThrow
   */
  export type AuthorizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authorization
     */
    select?: AuthorizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authorization
     */
    omit?: AuthorizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizationInclude<ExtArgs> | null
    /**
     * Filter, which Authorization to fetch.
     */
    where?: AuthorizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authorizations to fetch.
     */
    orderBy?: AuthorizationOrderByWithRelationInput | AuthorizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authorizations.
     */
    cursor?: AuthorizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authorizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authorizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authorizations.
     */
    distinct?: AuthorizationScalarFieldEnum | AuthorizationScalarFieldEnum[]
  }

  /**
   * Authorization findMany
   */
  export type AuthorizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authorization
     */
    select?: AuthorizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authorization
     */
    omit?: AuthorizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizationInclude<ExtArgs> | null
    /**
     * Filter, which Authorizations to fetch.
     */
    where?: AuthorizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authorizations to fetch.
     */
    orderBy?: AuthorizationOrderByWithRelationInput | AuthorizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Authorizations.
     */
    cursor?: AuthorizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authorizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authorizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authorizations.
     */
    distinct?: AuthorizationScalarFieldEnum | AuthorizationScalarFieldEnum[]
  }

  /**
   * Authorization create
   */
  export type AuthorizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authorization
     */
    select?: AuthorizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authorization
     */
    omit?: AuthorizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Authorization.
     */
    data: XOR<AuthorizationCreateInput, AuthorizationUncheckedCreateInput>
  }

  /**
   * Authorization createMany
   */
  export type AuthorizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Authorizations.
     */
    data: AuthorizationCreateManyInput | AuthorizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Authorization createManyAndReturn
   */
  export type AuthorizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authorization
     */
    select?: AuthorizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Authorization
     */
    omit?: AuthorizationOmit<ExtArgs> | null
    /**
     * The data used to create many Authorizations.
     */
    data: AuthorizationCreateManyInput | AuthorizationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Authorization update
   */
  export type AuthorizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authorization
     */
    select?: AuthorizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authorization
     */
    omit?: AuthorizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Authorization.
     */
    data: XOR<AuthorizationUpdateInput, AuthorizationUncheckedUpdateInput>
    /**
     * Choose, which Authorization to update.
     */
    where: AuthorizationWhereUniqueInput
  }

  /**
   * Authorization updateMany
   */
  export type AuthorizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Authorizations.
     */
    data: XOR<AuthorizationUpdateManyMutationInput, AuthorizationUncheckedUpdateManyInput>
    /**
     * Filter which Authorizations to update
     */
    where?: AuthorizationWhereInput
    /**
     * Limit how many Authorizations to update.
     */
    limit?: number
  }

  /**
   * Authorization updateManyAndReturn
   */
  export type AuthorizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authorization
     */
    select?: AuthorizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Authorization
     */
    omit?: AuthorizationOmit<ExtArgs> | null
    /**
     * The data used to update Authorizations.
     */
    data: XOR<AuthorizationUpdateManyMutationInput, AuthorizationUncheckedUpdateManyInput>
    /**
     * Filter which Authorizations to update
     */
    where?: AuthorizationWhereInput
    /**
     * Limit how many Authorizations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Authorization upsert
   */
  export type AuthorizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authorization
     */
    select?: AuthorizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authorization
     */
    omit?: AuthorizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Authorization to update in case it exists.
     */
    where: AuthorizationWhereUniqueInput
    /**
     * In case the Authorization found by the `where` argument doesn't exist, create a new Authorization with this data.
     */
    create: XOR<AuthorizationCreateInput, AuthorizationUncheckedCreateInput>
    /**
     * In case the Authorization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthorizationUpdateInput, AuthorizationUncheckedUpdateInput>
  }

  /**
   * Authorization delete
   */
  export type AuthorizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authorization
     */
    select?: AuthorizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authorization
     */
    omit?: AuthorizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizationInclude<ExtArgs> | null
    /**
     * Filter which Authorization to delete.
     */
    where: AuthorizationWhereUniqueInput
  }

  /**
   * Authorization deleteMany
   */
  export type AuthorizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authorizations to delete
     */
    where?: AuthorizationWhereInput
    /**
     * Limit how many Authorizations to delete.
     */
    limit?: number
  }

  /**
   * Authorization.services
   */
  export type Authorization$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalService
     */
    select?: MedicalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalService
     */
    omit?: MedicalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalServiceInclude<ExtArgs> | null
    where?: MedicalServiceWhereInput
    orderBy?: MedicalServiceOrderByWithRelationInput | MedicalServiceOrderByWithRelationInput[]
    cursor?: MedicalServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicalServiceScalarFieldEnum | MedicalServiceScalarFieldEnum[]
  }

  /**
   * Authorization without action
   */
  export type AuthorizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authorization
     */
    select?: AuthorizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authorization
     */
    omit?: AuthorizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizationInclude<ExtArgs> | null
  }


  /**
   * Model Claim
   */

  export type AggregateClaim = {
    _count: ClaimCountAggregateOutputType | null
    _avg: ClaimAvgAggregateOutputType | null
    _sum: ClaimSumAggregateOutputType | null
    _min: ClaimMinAggregateOutputType | null
    _max: ClaimMaxAggregateOutputType | null
  }

  export type ClaimAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type ClaimSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type ClaimMinAggregateOutputType = {
    id: string | null
    insuredId: string | null
    providerId: string | null
    amount: Decimal | null
    status: $Enums.ClaimStatus | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClaimMaxAggregateOutputType = {
    id: string | null
    insuredId: string | null
    providerId: string | null
    amount: Decimal | null
    status: $Enums.ClaimStatus | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClaimCountAggregateOutputType = {
    id: number
    insuredId: number
    providerId: number
    amount: number
    status: number
    date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClaimAvgAggregateInputType = {
    amount?: true
  }

  export type ClaimSumAggregateInputType = {
    amount?: true
  }

  export type ClaimMinAggregateInputType = {
    id?: true
    insuredId?: true
    providerId?: true
    amount?: true
    status?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClaimMaxAggregateInputType = {
    id?: true
    insuredId?: true
    providerId?: true
    amount?: true
    status?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClaimCountAggregateInputType = {
    id?: true
    insuredId?: true
    providerId?: true
    amount?: true
    status?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClaimAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Claim to aggregate.
     */
    where?: ClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     */
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Claims
    **/
    _count?: true | ClaimCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClaimAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClaimSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClaimMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClaimMaxAggregateInputType
  }

  export type GetClaimAggregateType<T extends ClaimAggregateArgs> = {
        [P in keyof T & keyof AggregateClaim]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClaim[P]>
      : GetScalarType<T[P], AggregateClaim[P]>
  }




  export type ClaimGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaimWhereInput
    orderBy?: ClaimOrderByWithAggregationInput | ClaimOrderByWithAggregationInput[]
    by: ClaimScalarFieldEnum[] | ClaimScalarFieldEnum
    having?: ClaimScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClaimCountAggregateInputType | true
    _avg?: ClaimAvgAggregateInputType
    _sum?: ClaimSumAggregateInputType
    _min?: ClaimMinAggregateInputType
    _max?: ClaimMaxAggregateInputType
  }

  export type ClaimGroupByOutputType = {
    id: string
    insuredId: string
    providerId: string
    amount: Decimal
    status: $Enums.ClaimStatus
    date: Date
    createdAt: Date
    updatedAt: Date
    _count: ClaimCountAggregateOutputType | null
    _avg: ClaimAvgAggregateOutputType | null
    _sum: ClaimSumAggregateOutputType | null
    _min: ClaimMinAggregateOutputType | null
    _max: ClaimMaxAggregateOutputType | null
  }

  type GetClaimGroupByPayload<T extends ClaimGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClaimGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClaimGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClaimGroupByOutputType[P]>
            : GetScalarType<T[P], ClaimGroupByOutputType[P]>
        }
      >
    >


  export type ClaimSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    insuredId?: boolean
    providerId?: boolean
    amount?: boolean
    status?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    insured?: boolean | InsuredDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["claim"]>

  export type ClaimSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    insuredId?: boolean
    providerId?: boolean
    amount?: boolean
    status?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    insured?: boolean | InsuredDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["claim"]>

  export type ClaimSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    insuredId?: boolean
    providerId?: boolean
    amount?: boolean
    status?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    insured?: boolean | InsuredDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["claim"]>

  export type ClaimSelectScalar = {
    id?: boolean
    insuredId?: boolean
    providerId?: boolean
    amount?: boolean
    status?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClaimOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "insuredId" | "providerId" | "amount" | "status" | "date" | "createdAt" | "updatedAt", ExtArgs["result"]["claim"]>
  export type ClaimInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insured?: boolean | InsuredDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }
  export type ClaimIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insured?: boolean | InsuredDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }
  export type ClaimIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insured?: boolean | InsuredDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }

  export type $ClaimPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Claim"
    objects: {
      insured: Prisma.$InsuredPayload<ExtArgs>
      provider: Prisma.$ProviderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      insuredId: string
      providerId: string
      amount: Prisma.Decimal
      status: $Enums.ClaimStatus
      date: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["claim"]>
    composites: {}
  }

  type ClaimGetPayload<S extends boolean | null | undefined | ClaimDefaultArgs> = $Result.GetResult<Prisma.$ClaimPayload, S>

  type ClaimCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClaimFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClaimCountAggregateInputType | true
    }

  export interface ClaimDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Claim'], meta: { name: 'Claim' } }
    /**
     * Find zero or one Claim that matches the filter.
     * @param {ClaimFindUniqueArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClaimFindUniqueArgs>(args: SelectSubset<T, ClaimFindUniqueArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Claim that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClaimFindUniqueOrThrowArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClaimFindUniqueOrThrowArgs>(args: SelectSubset<T, ClaimFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Claim that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimFindFirstArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClaimFindFirstArgs>(args?: SelectSubset<T, ClaimFindFirstArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Claim that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimFindFirstOrThrowArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClaimFindFirstOrThrowArgs>(args?: SelectSubset<T, ClaimFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Claims that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Claims
     * const claims = await prisma.claim.findMany()
     * 
     * // Get first 10 Claims
     * const claims = await prisma.claim.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const claimWithIdOnly = await prisma.claim.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClaimFindManyArgs>(args?: SelectSubset<T, ClaimFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Claim.
     * @param {ClaimCreateArgs} args - Arguments to create a Claim.
     * @example
     * // Create one Claim
     * const Claim = await prisma.claim.create({
     *   data: {
     *     // ... data to create a Claim
     *   }
     * })
     * 
     */
    create<T extends ClaimCreateArgs>(args: SelectSubset<T, ClaimCreateArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Claims.
     * @param {ClaimCreateManyArgs} args - Arguments to create many Claims.
     * @example
     * // Create many Claims
     * const claim = await prisma.claim.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClaimCreateManyArgs>(args?: SelectSubset<T, ClaimCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Claims and returns the data saved in the database.
     * @param {ClaimCreateManyAndReturnArgs} args - Arguments to create many Claims.
     * @example
     * // Create many Claims
     * const claim = await prisma.claim.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Claims and only return the `id`
     * const claimWithIdOnly = await prisma.claim.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClaimCreateManyAndReturnArgs>(args?: SelectSubset<T, ClaimCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Claim.
     * @param {ClaimDeleteArgs} args - Arguments to delete one Claim.
     * @example
     * // Delete one Claim
     * const Claim = await prisma.claim.delete({
     *   where: {
     *     // ... filter to delete one Claim
     *   }
     * })
     * 
     */
    delete<T extends ClaimDeleteArgs>(args: SelectSubset<T, ClaimDeleteArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Claim.
     * @param {ClaimUpdateArgs} args - Arguments to update one Claim.
     * @example
     * // Update one Claim
     * const claim = await prisma.claim.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClaimUpdateArgs>(args: SelectSubset<T, ClaimUpdateArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Claims.
     * @param {ClaimDeleteManyArgs} args - Arguments to filter Claims to delete.
     * @example
     * // Delete a few Claims
     * const { count } = await prisma.claim.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClaimDeleteManyArgs>(args?: SelectSubset<T, ClaimDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Claims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Claims
     * const claim = await prisma.claim.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClaimUpdateManyArgs>(args: SelectSubset<T, ClaimUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Claims and returns the data updated in the database.
     * @param {ClaimUpdateManyAndReturnArgs} args - Arguments to update many Claims.
     * @example
     * // Update many Claims
     * const claim = await prisma.claim.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Claims and only return the `id`
     * const claimWithIdOnly = await prisma.claim.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClaimUpdateManyAndReturnArgs>(args: SelectSubset<T, ClaimUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Claim.
     * @param {ClaimUpsertArgs} args - Arguments to update or create a Claim.
     * @example
     * // Update or create a Claim
     * const claim = await prisma.claim.upsert({
     *   create: {
     *     // ... data to create a Claim
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Claim we want to update
     *   }
     * })
     */
    upsert<T extends ClaimUpsertArgs>(args: SelectSubset<T, ClaimUpsertArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Claims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimCountArgs} args - Arguments to filter Claims to count.
     * @example
     * // Count the number of Claims
     * const count = await prisma.claim.count({
     *   where: {
     *     // ... the filter for the Claims we want to count
     *   }
     * })
    **/
    count<T extends ClaimCountArgs>(
      args?: Subset<T, ClaimCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClaimCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Claim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClaimAggregateArgs>(args: Subset<T, ClaimAggregateArgs>): Prisma.PrismaPromise<GetClaimAggregateType<T>>

    /**
     * Group by Claim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClaimGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClaimGroupByArgs['orderBy'] }
        : { orderBy?: ClaimGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClaimGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClaimGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Claim model
   */
  readonly fields: ClaimFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Claim.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClaimClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    insured<T extends InsuredDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InsuredDefaultArgs<ExtArgs>>): Prisma__InsuredClient<$Result.GetResult<Prisma.$InsuredPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    provider<T extends ProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProviderDefaultArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Claim model
   */
  interface ClaimFieldRefs {
    readonly id: FieldRef<"Claim", 'String'>
    readonly insuredId: FieldRef<"Claim", 'String'>
    readonly providerId: FieldRef<"Claim", 'String'>
    readonly amount: FieldRef<"Claim", 'Decimal'>
    readonly status: FieldRef<"Claim", 'ClaimStatus'>
    readonly date: FieldRef<"Claim", 'DateTime'>
    readonly createdAt: FieldRef<"Claim", 'DateTime'>
    readonly updatedAt: FieldRef<"Claim", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Claim findUnique
   */
  export type ClaimFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claim to fetch.
     */
    where: ClaimWhereUniqueInput
  }

  /**
   * Claim findUniqueOrThrow
   */
  export type ClaimFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claim to fetch.
     */
    where: ClaimWhereUniqueInput
  }

  /**
   * Claim findFirst
   */
  export type ClaimFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claim to fetch.
     */
    where?: ClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     */
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Claims.
     */
    cursor?: ClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Claims.
     */
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * Claim findFirstOrThrow
   */
  export type ClaimFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claim to fetch.
     */
    where?: ClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     */
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Claims.
     */
    cursor?: ClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Claims.
     */
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * Claim findMany
   */
  export type ClaimFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claims to fetch.
     */
    where?: ClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     */
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Claims.
     */
    cursor?: ClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Claims.
     */
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * Claim create
   */
  export type ClaimCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * The data needed to create a Claim.
     */
    data: XOR<ClaimCreateInput, ClaimUncheckedCreateInput>
  }

  /**
   * Claim createMany
   */
  export type ClaimCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Claims.
     */
    data: ClaimCreateManyInput | ClaimCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Claim createManyAndReturn
   */
  export type ClaimCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * The data used to create many Claims.
     */
    data: ClaimCreateManyInput | ClaimCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Claim update
   */
  export type ClaimUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * The data needed to update a Claim.
     */
    data: XOR<ClaimUpdateInput, ClaimUncheckedUpdateInput>
    /**
     * Choose, which Claim to update.
     */
    where: ClaimWhereUniqueInput
  }

  /**
   * Claim updateMany
   */
  export type ClaimUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Claims.
     */
    data: XOR<ClaimUpdateManyMutationInput, ClaimUncheckedUpdateManyInput>
    /**
     * Filter which Claims to update
     */
    where?: ClaimWhereInput
    /**
     * Limit how many Claims to update.
     */
    limit?: number
  }

  /**
   * Claim updateManyAndReturn
   */
  export type ClaimUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * The data used to update Claims.
     */
    data: XOR<ClaimUpdateManyMutationInput, ClaimUncheckedUpdateManyInput>
    /**
     * Filter which Claims to update
     */
    where?: ClaimWhereInput
    /**
     * Limit how many Claims to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Claim upsert
   */
  export type ClaimUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * The filter to search for the Claim to update in case it exists.
     */
    where: ClaimWhereUniqueInput
    /**
     * In case the Claim found by the `where` argument doesn't exist, create a new Claim with this data.
     */
    create: XOR<ClaimCreateInput, ClaimUncheckedCreateInput>
    /**
     * In case the Claim was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClaimUpdateInput, ClaimUncheckedUpdateInput>
  }

  /**
   * Claim delete
   */
  export type ClaimDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter which Claim to delete.
     */
    where: ClaimWhereUniqueInput
  }

  /**
   * Claim deleteMany
   */
  export type ClaimDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Claims to delete
     */
    where?: ClaimWhereInput
    /**
     * Limit how many Claims to delete.
     */
    limit?: number
  }

  /**
   * Claim without action
   */
  export type ClaimDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
  }


  /**
   * Model MedicalService
   */

  export type AggregateMedicalService = {
    _count: MedicalServiceCountAggregateOutputType | null
    _avg: MedicalServiceAvgAggregateOutputType | null
    _sum: MedicalServiceSumAggregateOutputType | null
    _min: MedicalServiceMinAggregateOutputType | null
    _max: MedicalServiceMaxAggregateOutputType | null
  }

  export type MedicalServiceAvgAggregateOutputType = {
    cost: Decimal | null
    copay: Decimal | null
  }

  export type MedicalServiceSumAggregateOutputType = {
    cost: Decimal | null
    copay: Decimal | null
  }

  export type MedicalServiceMinAggregateOutputType = {
    id: string | null
    insuredId: string | null
    providerId: string | null
    authorizationId: string | null
    description: string | null
    cost: Decimal | null
    copay: Decimal | null
    date: Date | null
    status: $Enums.ServiceStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicalServiceMaxAggregateOutputType = {
    id: string | null
    insuredId: string | null
    providerId: string | null
    authorizationId: string | null
    description: string | null
    cost: Decimal | null
    copay: Decimal | null
    date: Date | null
    status: $Enums.ServiceStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicalServiceCountAggregateOutputType = {
    id: number
    insuredId: number
    providerId: number
    authorizationId: number
    description: number
    cost: number
    copay: number
    date: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MedicalServiceAvgAggregateInputType = {
    cost?: true
    copay?: true
  }

  export type MedicalServiceSumAggregateInputType = {
    cost?: true
    copay?: true
  }

  export type MedicalServiceMinAggregateInputType = {
    id?: true
    insuredId?: true
    providerId?: true
    authorizationId?: true
    description?: true
    cost?: true
    copay?: true
    date?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicalServiceMaxAggregateInputType = {
    id?: true
    insuredId?: true
    providerId?: true
    authorizationId?: true
    description?: true
    cost?: true
    copay?: true
    date?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicalServiceCountAggregateInputType = {
    id?: true
    insuredId?: true
    providerId?: true
    authorizationId?: true
    description?: true
    cost?: true
    copay?: true
    date?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MedicalServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalService to aggregate.
     */
    where?: MedicalServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalServices to fetch.
     */
    orderBy?: MedicalServiceOrderByWithRelationInput | MedicalServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicalServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicalServices
    **/
    _count?: true | MedicalServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicalServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicalServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicalServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicalServiceMaxAggregateInputType
  }

  export type GetMedicalServiceAggregateType<T extends MedicalServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicalService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicalService[P]>
      : GetScalarType<T[P], AggregateMedicalService[P]>
  }




  export type MedicalServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalServiceWhereInput
    orderBy?: MedicalServiceOrderByWithAggregationInput | MedicalServiceOrderByWithAggregationInput[]
    by: MedicalServiceScalarFieldEnum[] | MedicalServiceScalarFieldEnum
    having?: MedicalServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicalServiceCountAggregateInputType | true
    _avg?: MedicalServiceAvgAggregateInputType
    _sum?: MedicalServiceSumAggregateInputType
    _min?: MedicalServiceMinAggregateInputType
    _max?: MedicalServiceMaxAggregateInputType
  }

  export type MedicalServiceGroupByOutputType = {
    id: string
    insuredId: string
    providerId: string
    authorizationId: string | null
    description: string
    cost: Decimal
    copay: Decimal
    date: Date
    status: $Enums.ServiceStatus
    createdAt: Date
    updatedAt: Date
    _count: MedicalServiceCountAggregateOutputType | null
    _avg: MedicalServiceAvgAggregateOutputType | null
    _sum: MedicalServiceSumAggregateOutputType | null
    _min: MedicalServiceMinAggregateOutputType | null
    _max: MedicalServiceMaxAggregateOutputType | null
  }

  type GetMedicalServiceGroupByPayload<T extends MedicalServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicalServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicalServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicalServiceGroupByOutputType[P]>
            : GetScalarType<T[P], MedicalServiceGroupByOutputType[P]>
        }
      >
    >


  export type MedicalServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    insuredId?: boolean
    providerId?: boolean
    authorizationId?: boolean
    description?: boolean
    cost?: boolean
    copay?: boolean
    date?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    insured?: boolean | InsuredDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    authorization?: boolean | MedicalService$authorizationArgs<ExtArgs>
    payment?: boolean | MedicalService$paymentArgs<ExtArgs>
  }, ExtArgs["result"]["medicalService"]>

  export type MedicalServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    insuredId?: boolean
    providerId?: boolean
    authorizationId?: boolean
    description?: boolean
    cost?: boolean
    copay?: boolean
    date?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    insured?: boolean | InsuredDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    authorization?: boolean | MedicalService$authorizationArgs<ExtArgs>
  }, ExtArgs["result"]["medicalService"]>

  export type MedicalServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    insuredId?: boolean
    providerId?: boolean
    authorizationId?: boolean
    description?: boolean
    cost?: boolean
    copay?: boolean
    date?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    insured?: boolean | InsuredDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    authorization?: boolean | MedicalService$authorizationArgs<ExtArgs>
  }, ExtArgs["result"]["medicalService"]>

  export type MedicalServiceSelectScalar = {
    id?: boolean
    insuredId?: boolean
    providerId?: boolean
    authorizationId?: boolean
    description?: boolean
    cost?: boolean
    copay?: boolean
    date?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MedicalServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "insuredId" | "providerId" | "authorizationId" | "description" | "cost" | "copay" | "date" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["medicalService"]>
  export type MedicalServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insured?: boolean | InsuredDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    authorization?: boolean | MedicalService$authorizationArgs<ExtArgs>
    payment?: boolean | MedicalService$paymentArgs<ExtArgs>
  }
  export type MedicalServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insured?: boolean | InsuredDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    authorization?: boolean | MedicalService$authorizationArgs<ExtArgs>
  }
  export type MedicalServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insured?: boolean | InsuredDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    authorization?: boolean | MedicalService$authorizationArgs<ExtArgs>
  }

  export type $MedicalServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicalService"
    objects: {
      insured: Prisma.$InsuredPayload<ExtArgs>
      provider: Prisma.$ProviderPayload<ExtArgs>
      authorization: Prisma.$AuthorizationPayload<ExtArgs> | null
      payment: Prisma.$ProviderPaymentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      insuredId: string
      providerId: string
      authorizationId: string | null
      description: string
      cost: Prisma.Decimal
      copay: Prisma.Decimal
      date: Date
      status: $Enums.ServiceStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["medicalService"]>
    composites: {}
  }

  type MedicalServiceGetPayload<S extends boolean | null | undefined | MedicalServiceDefaultArgs> = $Result.GetResult<Prisma.$MedicalServicePayload, S>

  type MedicalServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicalServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicalServiceCountAggregateInputType | true
    }

  export interface MedicalServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicalService'], meta: { name: 'MedicalService' } }
    /**
     * Find zero or one MedicalService that matches the filter.
     * @param {MedicalServiceFindUniqueArgs} args - Arguments to find a MedicalService
     * @example
     * // Get one MedicalService
     * const medicalService = await prisma.medicalService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicalServiceFindUniqueArgs>(args: SelectSubset<T, MedicalServiceFindUniqueArgs<ExtArgs>>): Prisma__MedicalServiceClient<$Result.GetResult<Prisma.$MedicalServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MedicalService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicalServiceFindUniqueOrThrowArgs} args - Arguments to find a MedicalService
     * @example
     * // Get one MedicalService
     * const medicalService = await prisma.medicalService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicalServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicalServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicalServiceClient<$Result.GetResult<Prisma.$MedicalServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalServiceFindFirstArgs} args - Arguments to find a MedicalService
     * @example
     * // Get one MedicalService
     * const medicalService = await prisma.medicalService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicalServiceFindFirstArgs>(args?: SelectSubset<T, MedicalServiceFindFirstArgs<ExtArgs>>): Prisma__MedicalServiceClient<$Result.GetResult<Prisma.$MedicalServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalServiceFindFirstOrThrowArgs} args - Arguments to find a MedicalService
     * @example
     * // Get one MedicalService
     * const medicalService = await prisma.medicalService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicalServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicalServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicalServiceClient<$Result.GetResult<Prisma.$MedicalServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MedicalServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicalServices
     * const medicalServices = await prisma.medicalService.findMany()
     * 
     * // Get first 10 MedicalServices
     * const medicalServices = await prisma.medicalService.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicalServiceWithIdOnly = await prisma.medicalService.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicalServiceFindManyArgs>(args?: SelectSubset<T, MedicalServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MedicalService.
     * @param {MedicalServiceCreateArgs} args - Arguments to create a MedicalService.
     * @example
     * // Create one MedicalService
     * const MedicalService = await prisma.medicalService.create({
     *   data: {
     *     // ... data to create a MedicalService
     *   }
     * })
     * 
     */
    create<T extends MedicalServiceCreateArgs>(args: SelectSubset<T, MedicalServiceCreateArgs<ExtArgs>>): Prisma__MedicalServiceClient<$Result.GetResult<Prisma.$MedicalServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MedicalServices.
     * @param {MedicalServiceCreateManyArgs} args - Arguments to create many MedicalServices.
     * @example
     * // Create many MedicalServices
     * const medicalService = await prisma.medicalService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicalServiceCreateManyArgs>(args?: SelectSubset<T, MedicalServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MedicalServices and returns the data saved in the database.
     * @param {MedicalServiceCreateManyAndReturnArgs} args - Arguments to create many MedicalServices.
     * @example
     * // Create many MedicalServices
     * const medicalService = await prisma.medicalService.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MedicalServices and only return the `id`
     * const medicalServiceWithIdOnly = await prisma.medicalService.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicalServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicalServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MedicalService.
     * @param {MedicalServiceDeleteArgs} args - Arguments to delete one MedicalService.
     * @example
     * // Delete one MedicalService
     * const MedicalService = await prisma.medicalService.delete({
     *   where: {
     *     // ... filter to delete one MedicalService
     *   }
     * })
     * 
     */
    delete<T extends MedicalServiceDeleteArgs>(args: SelectSubset<T, MedicalServiceDeleteArgs<ExtArgs>>): Prisma__MedicalServiceClient<$Result.GetResult<Prisma.$MedicalServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MedicalService.
     * @param {MedicalServiceUpdateArgs} args - Arguments to update one MedicalService.
     * @example
     * // Update one MedicalService
     * const medicalService = await prisma.medicalService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicalServiceUpdateArgs>(args: SelectSubset<T, MedicalServiceUpdateArgs<ExtArgs>>): Prisma__MedicalServiceClient<$Result.GetResult<Prisma.$MedicalServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MedicalServices.
     * @param {MedicalServiceDeleteManyArgs} args - Arguments to filter MedicalServices to delete.
     * @example
     * // Delete a few MedicalServices
     * const { count } = await prisma.medicalService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicalServiceDeleteManyArgs>(args?: SelectSubset<T, MedicalServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicalServices
     * const medicalService = await prisma.medicalService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicalServiceUpdateManyArgs>(args: SelectSubset<T, MedicalServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalServices and returns the data updated in the database.
     * @param {MedicalServiceUpdateManyAndReturnArgs} args - Arguments to update many MedicalServices.
     * @example
     * // Update many MedicalServices
     * const medicalService = await prisma.medicalService.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MedicalServices and only return the `id`
     * const medicalServiceWithIdOnly = await prisma.medicalService.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MedicalServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicalServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MedicalService.
     * @param {MedicalServiceUpsertArgs} args - Arguments to update or create a MedicalService.
     * @example
     * // Update or create a MedicalService
     * const medicalService = await prisma.medicalService.upsert({
     *   create: {
     *     // ... data to create a MedicalService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicalService we want to update
     *   }
     * })
     */
    upsert<T extends MedicalServiceUpsertArgs>(args: SelectSubset<T, MedicalServiceUpsertArgs<ExtArgs>>): Prisma__MedicalServiceClient<$Result.GetResult<Prisma.$MedicalServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MedicalServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalServiceCountArgs} args - Arguments to filter MedicalServices to count.
     * @example
     * // Count the number of MedicalServices
     * const count = await prisma.medicalService.count({
     *   where: {
     *     // ... the filter for the MedicalServices we want to count
     *   }
     * })
    **/
    count<T extends MedicalServiceCountArgs>(
      args?: Subset<T, MedicalServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicalServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicalService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicalServiceAggregateArgs>(args: Subset<T, MedicalServiceAggregateArgs>): Prisma.PrismaPromise<GetMedicalServiceAggregateType<T>>

    /**
     * Group by MedicalService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicalServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicalServiceGroupByArgs['orderBy'] }
        : { orderBy?: MedicalServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicalServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicalServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicalService model
   */
  readonly fields: MedicalServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicalService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicalServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    insured<T extends InsuredDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InsuredDefaultArgs<ExtArgs>>): Prisma__InsuredClient<$Result.GetResult<Prisma.$InsuredPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    provider<T extends ProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProviderDefaultArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    authorization<T extends MedicalService$authorizationArgs<ExtArgs> = {}>(args?: Subset<T, MedicalService$authorizationArgs<ExtArgs>>): Prisma__AuthorizationClient<$Result.GetResult<Prisma.$AuthorizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payment<T extends MedicalService$paymentArgs<ExtArgs> = {}>(args?: Subset<T, MedicalService$paymentArgs<ExtArgs>>): Prisma__ProviderPaymentClient<$Result.GetResult<Prisma.$ProviderPaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MedicalService model
   */
  interface MedicalServiceFieldRefs {
    readonly id: FieldRef<"MedicalService", 'String'>
    readonly insuredId: FieldRef<"MedicalService", 'String'>
    readonly providerId: FieldRef<"MedicalService", 'String'>
    readonly authorizationId: FieldRef<"MedicalService", 'String'>
    readonly description: FieldRef<"MedicalService", 'String'>
    readonly cost: FieldRef<"MedicalService", 'Decimal'>
    readonly copay: FieldRef<"MedicalService", 'Decimal'>
    readonly date: FieldRef<"MedicalService", 'DateTime'>
    readonly status: FieldRef<"MedicalService", 'ServiceStatus'>
    readonly createdAt: FieldRef<"MedicalService", 'DateTime'>
    readonly updatedAt: FieldRef<"MedicalService", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MedicalService findUnique
   */
  export type MedicalServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalService
     */
    select?: MedicalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalService
     */
    omit?: MedicalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalServiceInclude<ExtArgs> | null
    /**
     * Filter, which MedicalService to fetch.
     */
    where: MedicalServiceWhereUniqueInput
  }

  /**
   * MedicalService findUniqueOrThrow
   */
  export type MedicalServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalService
     */
    select?: MedicalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalService
     */
    omit?: MedicalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalServiceInclude<ExtArgs> | null
    /**
     * Filter, which MedicalService to fetch.
     */
    where: MedicalServiceWhereUniqueInput
  }

  /**
   * MedicalService findFirst
   */
  export type MedicalServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalService
     */
    select?: MedicalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalService
     */
    omit?: MedicalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalServiceInclude<ExtArgs> | null
    /**
     * Filter, which MedicalService to fetch.
     */
    where?: MedicalServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalServices to fetch.
     */
    orderBy?: MedicalServiceOrderByWithRelationInput | MedicalServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalServices.
     */
    cursor?: MedicalServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalServices.
     */
    distinct?: MedicalServiceScalarFieldEnum | MedicalServiceScalarFieldEnum[]
  }

  /**
   * MedicalService findFirstOrThrow
   */
  export type MedicalServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalService
     */
    select?: MedicalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalService
     */
    omit?: MedicalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalServiceInclude<ExtArgs> | null
    /**
     * Filter, which MedicalService to fetch.
     */
    where?: MedicalServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalServices to fetch.
     */
    orderBy?: MedicalServiceOrderByWithRelationInput | MedicalServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalServices.
     */
    cursor?: MedicalServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalServices.
     */
    distinct?: MedicalServiceScalarFieldEnum | MedicalServiceScalarFieldEnum[]
  }

  /**
   * MedicalService findMany
   */
  export type MedicalServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalService
     */
    select?: MedicalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalService
     */
    omit?: MedicalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalServiceInclude<ExtArgs> | null
    /**
     * Filter, which MedicalServices to fetch.
     */
    where?: MedicalServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalServices to fetch.
     */
    orderBy?: MedicalServiceOrderByWithRelationInput | MedicalServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicalServices.
     */
    cursor?: MedicalServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalServices.
     */
    distinct?: MedicalServiceScalarFieldEnum | MedicalServiceScalarFieldEnum[]
  }

  /**
   * MedicalService create
   */
  export type MedicalServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalService
     */
    select?: MedicalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalService
     */
    omit?: MedicalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicalService.
     */
    data: XOR<MedicalServiceCreateInput, MedicalServiceUncheckedCreateInput>
  }

  /**
   * MedicalService createMany
   */
  export type MedicalServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicalServices.
     */
    data: MedicalServiceCreateManyInput | MedicalServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MedicalService createManyAndReturn
   */
  export type MedicalServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalService
     */
    select?: MedicalServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalService
     */
    omit?: MedicalServiceOmit<ExtArgs> | null
    /**
     * The data used to create many MedicalServices.
     */
    data: MedicalServiceCreateManyInput | MedicalServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicalService update
   */
  export type MedicalServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalService
     */
    select?: MedicalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalService
     */
    omit?: MedicalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicalService.
     */
    data: XOR<MedicalServiceUpdateInput, MedicalServiceUncheckedUpdateInput>
    /**
     * Choose, which MedicalService to update.
     */
    where: MedicalServiceWhereUniqueInput
  }

  /**
   * MedicalService updateMany
   */
  export type MedicalServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicalServices.
     */
    data: XOR<MedicalServiceUpdateManyMutationInput, MedicalServiceUncheckedUpdateManyInput>
    /**
     * Filter which MedicalServices to update
     */
    where?: MedicalServiceWhereInput
    /**
     * Limit how many MedicalServices to update.
     */
    limit?: number
  }

  /**
   * MedicalService updateManyAndReturn
   */
  export type MedicalServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalService
     */
    select?: MedicalServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalService
     */
    omit?: MedicalServiceOmit<ExtArgs> | null
    /**
     * The data used to update MedicalServices.
     */
    data: XOR<MedicalServiceUpdateManyMutationInput, MedicalServiceUncheckedUpdateManyInput>
    /**
     * Filter which MedicalServices to update
     */
    where?: MedicalServiceWhereInput
    /**
     * Limit how many MedicalServices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicalService upsert
   */
  export type MedicalServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalService
     */
    select?: MedicalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalService
     */
    omit?: MedicalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicalService to update in case it exists.
     */
    where: MedicalServiceWhereUniqueInput
    /**
     * In case the MedicalService found by the `where` argument doesn't exist, create a new MedicalService with this data.
     */
    create: XOR<MedicalServiceCreateInput, MedicalServiceUncheckedCreateInput>
    /**
     * In case the MedicalService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicalServiceUpdateInput, MedicalServiceUncheckedUpdateInput>
  }

  /**
   * MedicalService delete
   */
  export type MedicalServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalService
     */
    select?: MedicalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalService
     */
    omit?: MedicalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalServiceInclude<ExtArgs> | null
    /**
     * Filter which MedicalService to delete.
     */
    where: MedicalServiceWhereUniqueInput
  }

  /**
   * MedicalService deleteMany
   */
  export type MedicalServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalServices to delete
     */
    where?: MedicalServiceWhereInput
    /**
     * Limit how many MedicalServices to delete.
     */
    limit?: number
  }

  /**
   * MedicalService.authorization
   */
  export type MedicalService$authorizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authorization
     */
    select?: AuthorizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authorization
     */
    omit?: AuthorizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizationInclude<ExtArgs> | null
    where?: AuthorizationWhereInput
  }

  /**
   * MedicalService.payment
   */
  export type MedicalService$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderPayment
     */
    select?: ProviderPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderPayment
     */
    omit?: ProviderPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderPaymentInclude<ExtArgs> | null
    where?: ProviderPaymentWhereInput
  }

  /**
   * MedicalService without action
   */
  export type MedicalServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalService
     */
    select?: MedicalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalService
     */
    omit?: MedicalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalServiceInclude<ExtArgs> | null
  }


  /**
   * Model ProviderPayment
   */

  export type AggregateProviderPayment = {
    _count: ProviderPaymentCountAggregateOutputType | null
    _avg: ProviderPaymentAvgAggregateOutputType | null
    _sum: ProviderPaymentSumAggregateOutputType | null
    _min: ProviderPaymentMinAggregateOutputType | null
    _max: ProviderPaymentMaxAggregateOutputType | null
  }

  export type ProviderPaymentAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type ProviderPaymentSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type ProviderPaymentMinAggregateOutputType = {
    id: string | null
    providerId: string | null
    serviceId: string | null
    bankReference: string | null
    amount: Decimal | null
    method: string | null
    date: Date | null
    status: $Enums.PaymentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProviderPaymentMaxAggregateOutputType = {
    id: string | null
    providerId: string | null
    serviceId: string | null
    bankReference: string | null
    amount: Decimal | null
    method: string | null
    date: Date | null
    status: $Enums.PaymentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProviderPaymentCountAggregateOutputType = {
    id: number
    providerId: number
    serviceId: number
    bankReference: number
    amount: number
    method: number
    date: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProviderPaymentAvgAggregateInputType = {
    amount?: true
  }

  export type ProviderPaymentSumAggregateInputType = {
    amount?: true
  }

  export type ProviderPaymentMinAggregateInputType = {
    id?: true
    providerId?: true
    serviceId?: true
    bankReference?: true
    amount?: true
    method?: true
    date?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProviderPaymentMaxAggregateInputType = {
    id?: true
    providerId?: true
    serviceId?: true
    bankReference?: true
    amount?: true
    method?: true
    date?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProviderPaymentCountAggregateInputType = {
    id?: true
    providerId?: true
    serviceId?: true
    bankReference?: true
    amount?: true
    method?: true
    date?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProviderPaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderPayment to aggregate.
     */
    where?: ProviderPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderPayments to fetch.
     */
    orderBy?: ProviderPaymentOrderByWithRelationInput | ProviderPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProviderPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProviderPayments
    **/
    _count?: true | ProviderPaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProviderPaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProviderPaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderPaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderPaymentMaxAggregateInputType
  }

  export type GetProviderPaymentAggregateType<T extends ProviderPaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateProviderPayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProviderPayment[P]>
      : GetScalarType<T[P], AggregateProviderPayment[P]>
  }




  export type ProviderPaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderPaymentWhereInput
    orderBy?: ProviderPaymentOrderByWithAggregationInput | ProviderPaymentOrderByWithAggregationInput[]
    by: ProviderPaymentScalarFieldEnum[] | ProviderPaymentScalarFieldEnum
    having?: ProviderPaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderPaymentCountAggregateInputType | true
    _avg?: ProviderPaymentAvgAggregateInputType
    _sum?: ProviderPaymentSumAggregateInputType
    _min?: ProviderPaymentMinAggregateInputType
    _max?: ProviderPaymentMaxAggregateInputType
  }

  export type ProviderPaymentGroupByOutputType = {
    id: string
    providerId: string
    serviceId: string
    bankReference: string
    amount: Decimal
    method: string
    date: Date
    status: $Enums.PaymentStatus
    createdAt: Date
    updatedAt: Date
    _count: ProviderPaymentCountAggregateOutputType | null
    _avg: ProviderPaymentAvgAggregateOutputType | null
    _sum: ProviderPaymentSumAggregateOutputType | null
    _min: ProviderPaymentMinAggregateOutputType | null
    _max: ProviderPaymentMaxAggregateOutputType | null
  }

  type GetProviderPaymentGroupByPayload<T extends ProviderPaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProviderPaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderPaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderPaymentGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderPaymentGroupByOutputType[P]>
        }
      >
    >


  export type ProviderPaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    serviceId?: boolean
    bankReference?: boolean
    amount?: boolean
    method?: boolean
    date?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    service?: boolean | MedicalServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providerPayment"]>

  export type ProviderPaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    serviceId?: boolean
    bankReference?: boolean
    amount?: boolean
    method?: boolean
    date?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    service?: boolean | MedicalServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providerPayment"]>

  export type ProviderPaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    serviceId?: boolean
    bankReference?: boolean
    amount?: boolean
    method?: boolean
    date?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    service?: boolean | MedicalServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providerPayment"]>

  export type ProviderPaymentSelectScalar = {
    id?: boolean
    providerId?: boolean
    serviceId?: boolean
    bankReference?: boolean
    amount?: boolean
    method?: boolean
    date?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProviderPaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "providerId" | "serviceId" | "bankReference" | "amount" | "method" | "date" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["providerPayment"]>
  export type ProviderPaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    service?: boolean | MedicalServiceDefaultArgs<ExtArgs>
  }
  export type ProviderPaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    service?: boolean | MedicalServiceDefaultArgs<ExtArgs>
  }
  export type ProviderPaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    service?: boolean | MedicalServiceDefaultArgs<ExtArgs>
  }

  export type $ProviderPaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProviderPayment"
    objects: {
      provider: Prisma.$ProviderPayload<ExtArgs>
      service: Prisma.$MedicalServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      providerId: string
      serviceId: string
      bankReference: string
      amount: Prisma.Decimal
      method: string
      date: Date
      status: $Enums.PaymentStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["providerPayment"]>
    composites: {}
  }

  type ProviderPaymentGetPayload<S extends boolean | null | undefined | ProviderPaymentDefaultArgs> = $Result.GetResult<Prisma.$ProviderPaymentPayload, S>

  type ProviderPaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProviderPaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProviderPaymentCountAggregateInputType | true
    }

  export interface ProviderPaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProviderPayment'], meta: { name: 'ProviderPayment' } }
    /**
     * Find zero or one ProviderPayment that matches the filter.
     * @param {ProviderPaymentFindUniqueArgs} args - Arguments to find a ProviderPayment
     * @example
     * // Get one ProviderPayment
     * const providerPayment = await prisma.providerPayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProviderPaymentFindUniqueArgs>(args: SelectSubset<T, ProviderPaymentFindUniqueArgs<ExtArgs>>): Prisma__ProviderPaymentClient<$Result.GetResult<Prisma.$ProviderPaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProviderPayment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProviderPaymentFindUniqueOrThrowArgs} args - Arguments to find a ProviderPayment
     * @example
     * // Get one ProviderPayment
     * const providerPayment = await prisma.providerPayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProviderPaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, ProviderPaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProviderPaymentClient<$Result.GetResult<Prisma.$ProviderPaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProviderPayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderPaymentFindFirstArgs} args - Arguments to find a ProviderPayment
     * @example
     * // Get one ProviderPayment
     * const providerPayment = await prisma.providerPayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProviderPaymentFindFirstArgs>(args?: SelectSubset<T, ProviderPaymentFindFirstArgs<ExtArgs>>): Prisma__ProviderPaymentClient<$Result.GetResult<Prisma.$ProviderPaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProviderPayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderPaymentFindFirstOrThrowArgs} args - Arguments to find a ProviderPayment
     * @example
     * // Get one ProviderPayment
     * const providerPayment = await prisma.providerPayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProviderPaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, ProviderPaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProviderPaymentClient<$Result.GetResult<Prisma.$ProviderPaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProviderPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderPaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProviderPayments
     * const providerPayments = await prisma.providerPayment.findMany()
     * 
     * // Get first 10 ProviderPayments
     * const providerPayments = await prisma.providerPayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerPaymentWithIdOnly = await prisma.providerPayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProviderPaymentFindManyArgs>(args?: SelectSubset<T, ProviderPaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProviderPayment.
     * @param {ProviderPaymentCreateArgs} args - Arguments to create a ProviderPayment.
     * @example
     * // Create one ProviderPayment
     * const ProviderPayment = await prisma.providerPayment.create({
     *   data: {
     *     // ... data to create a ProviderPayment
     *   }
     * })
     * 
     */
    create<T extends ProviderPaymentCreateArgs>(args: SelectSubset<T, ProviderPaymentCreateArgs<ExtArgs>>): Prisma__ProviderPaymentClient<$Result.GetResult<Prisma.$ProviderPaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProviderPayments.
     * @param {ProviderPaymentCreateManyArgs} args - Arguments to create many ProviderPayments.
     * @example
     * // Create many ProviderPayments
     * const providerPayment = await prisma.providerPayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProviderPaymentCreateManyArgs>(args?: SelectSubset<T, ProviderPaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProviderPayments and returns the data saved in the database.
     * @param {ProviderPaymentCreateManyAndReturnArgs} args - Arguments to create many ProviderPayments.
     * @example
     * // Create many ProviderPayments
     * const providerPayment = await prisma.providerPayment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProviderPayments and only return the `id`
     * const providerPaymentWithIdOnly = await prisma.providerPayment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProviderPaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, ProviderPaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProviderPayment.
     * @param {ProviderPaymentDeleteArgs} args - Arguments to delete one ProviderPayment.
     * @example
     * // Delete one ProviderPayment
     * const ProviderPayment = await prisma.providerPayment.delete({
     *   where: {
     *     // ... filter to delete one ProviderPayment
     *   }
     * })
     * 
     */
    delete<T extends ProviderPaymentDeleteArgs>(args: SelectSubset<T, ProviderPaymentDeleteArgs<ExtArgs>>): Prisma__ProviderPaymentClient<$Result.GetResult<Prisma.$ProviderPaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProviderPayment.
     * @param {ProviderPaymentUpdateArgs} args - Arguments to update one ProviderPayment.
     * @example
     * // Update one ProviderPayment
     * const providerPayment = await prisma.providerPayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProviderPaymentUpdateArgs>(args: SelectSubset<T, ProviderPaymentUpdateArgs<ExtArgs>>): Prisma__ProviderPaymentClient<$Result.GetResult<Prisma.$ProviderPaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProviderPayments.
     * @param {ProviderPaymentDeleteManyArgs} args - Arguments to filter ProviderPayments to delete.
     * @example
     * // Delete a few ProviderPayments
     * const { count } = await prisma.providerPayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProviderPaymentDeleteManyArgs>(args?: SelectSubset<T, ProviderPaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderPaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProviderPayments
     * const providerPayment = await prisma.providerPayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProviderPaymentUpdateManyArgs>(args: SelectSubset<T, ProviderPaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderPayments and returns the data updated in the database.
     * @param {ProviderPaymentUpdateManyAndReturnArgs} args - Arguments to update many ProviderPayments.
     * @example
     * // Update many ProviderPayments
     * const providerPayment = await prisma.providerPayment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProviderPayments and only return the `id`
     * const providerPaymentWithIdOnly = await prisma.providerPayment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProviderPaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, ProviderPaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProviderPayment.
     * @param {ProviderPaymentUpsertArgs} args - Arguments to update or create a ProviderPayment.
     * @example
     * // Update or create a ProviderPayment
     * const providerPayment = await prisma.providerPayment.upsert({
     *   create: {
     *     // ... data to create a ProviderPayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProviderPayment we want to update
     *   }
     * })
     */
    upsert<T extends ProviderPaymentUpsertArgs>(args: SelectSubset<T, ProviderPaymentUpsertArgs<ExtArgs>>): Prisma__ProviderPaymentClient<$Result.GetResult<Prisma.$ProviderPaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProviderPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderPaymentCountArgs} args - Arguments to filter ProviderPayments to count.
     * @example
     * // Count the number of ProviderPayments
     * const count = await prisma.providerPayment.count({
     *   where: {
     *     // ... the filter for the ProviderPayments we want to count
     *   }
     * })
    **/
    count<T extends ProviderPaymentCountArgs>(
      args?: Subset<T, ProviderPaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderPaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProviderPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderPaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProviderPaymentAggregateArgs>(args: Subset<T, ProviderPaymentAggregateArgs>): Prisma.PrismaPromise<GetProviderPaymentAggregateType<T>>

    /**
     * Group by ProviderPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderPaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProviderPaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderPaymentGroupByArgs['orderBy'] }
        : { orderBy?: ProviderPaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProviderPaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProviderPayment model
   */
  readonly fields: ProviderPaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderPayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProviderPaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    provider<T extends ProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProviderDefaultArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends MedicalServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicalServiceDefaultArgs<ExtArgs>>): Prisma__MedicalServiceClient<$Result.GetResult<Prisma.$MedicalServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProviderPayment model
   */
  interface ProviderPaymentFieldRefs {
    readonly id: FieldRef<"ProviderPayment", 'String'>
    readonly providerId: FieldRef<"ProviderPayment", 'String'>
    readonly serviceId: FieldRef<"ProviderPayment", 'String'>
    readonly bankReference: FieldRef<"ProviderPayment", 'String'>
    readonly amount: FieldRef<"ProviderPayment", 'Decimal'>
    readonly method: FieldRef<"ProviderPayment", 'String'>
    readonly date: FieldRef<"ProviderPayment", 'DateTime'>
    readonly status: FieldRef<"ProviderPayment", 'PaymentStatus'>
    readonly createdAt: FieldRef<"ProviderPayment", 'DateTime'>
    readonly updatedAt: FieldRef<"ProviderPayment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProviderPayment findUnique
   */
  export type ProviderPaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderPayment
     */
    select?: ProviderPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderPayment
     */
    omit?: ProviderPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderPaymentInclude<ExtArgs> | null
    /**
     * Filter, which ProviderPayment to fetch.
     */
    where: ProviderPaymentWhereUniqueInput
  }

  /**
   * ProviderPayment findUniqueOrThrow
   */
  export type ProviderPaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderPayment
     */
    select?: ProviderPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderPayment
     */
    omit?: ProviderPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderPaymentInclude<ExtArgs> | null
    /**
     * Filter, which ProviderPayment to fetch.
     */
    where: ProviderPaymentWhereUniqueInput
  }

  /**
   * ProviderPayment findFirst
   */
  export type ProviderPaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderPayment
     */
    select?: ProviderPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderPayment
     */
    omit?: ProviderPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderPaymentInclude<ExtArgs> | null
    /**
     * Filter, which ProviderPayment to fetch.
     */
    where?: ProviderPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderPayments to fetch.
     */
    orderBy?: ProviderPaymentOrderByWithRelationInput | ProviderPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderPayments.
     */
    cursor?: ProviderPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderPayments.
     */
    distinct?: ProviderPaymentScalarFieldEnum | ProviderPaymentScalarFieldEnum[]
  }

  /**
   * ProviderPayment findFirstOrThrow
   */
  export type ProviderPaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderPayment
     */
    select?: ProviderPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderPayment
     */
    omit?: ProviderPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderPaymentInclude<ExtArgs> | null
    /**
     * Filter, which ProviderPayment to fetch.
     */
    where?: ProviderPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderPayments to fetch.
     */
    orderBy?: ProviderPaymentOrderByWithRelationInput | ProviderPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderPayments.
     */
    cursor?: ProviderPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderPayments.
     */
    distinct?: ProviderPaymentScalarFieldEnum | ProviderPaymentScalarFieldEnum[]
  }

  /**
   * ProviderPayment findMany
   */
  export type ProviderPaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderPayment
     */
    select?: ProviderPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderPayment
     */
    omit?: ProviderPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderPaymentInclude<ExtArgs> | null
    /**
     * Filter, which ProviderPayments to fetch.
     */
    where?: ProviderPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderPayments to fetch.
     */
    orderBy?: ProviderPaymentOrderByWithRelationInput | ProviderPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProviderPayments.
     */
    cursor?: ProviderPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderPayments.
     */
    distinct?: ProviderPaymentScalarFieldEnum | ProviderPaymentScalarFieldEnum[]
  }

  /**
   * ProviderPayment create
   */
  export type ProviderPaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderPayment
     */
    select?: ProviderPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderPayment
     */
    omit?: ProviderPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderPaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a ProviderPayment.
     */
    data: XOR<ProviderPaymentCreateInput, ProviderPaymentUncheckedCreateInput>
  }

  /**
   * ProviderPayment createMany
   */
  export type ProviderPaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProviderPayments.
     */
    data: ProviderPaymentCreateManyInput | ProviderPaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProviderPayment createManyAndReturn
   */
  export type ProviderPaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderPayment
     */
    select?: ProviderPaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderPayment
     */
    omit?: ProviderPaymentOmit<ExtArgs> | null
    /**
     * The data used to create many ProviderPayments.
     */
    data: ProviderPaymentCreateManyInput | ProviderPaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderPaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProviderPayment update
   */
  export type ProviderPaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderPayment
     */
    select?: ProviderPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderPayment
     */
    omit?: ProviderPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderPaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a ProviderPayment.
     */
    data: XOR<ProviderPaymentUpdateInput, ProviderPaymentUncheckedUpdateInput>
    /**
     * Choose, which ProviderPayment to update.
     */
    where: ProviderPaymentWhereUniqueInput
  }

  /**
   * ProviderPayment updateMany
   */
  export type ProviderPaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProviderPayments.
     */
    data: XOR<ProviderPaymentUpdateManyMutationInput, ProviderPaymentUncheckedUpdateManyInput>
    /**
     * Filter which ProviderPayments to update
     */
    where?: ProviderPaymentWhereInput
    /**
     * Limit how many ProviderPayments to update.
     */
    limit?: number
  }

  /**
   * ProviderPayment updateManyAndReturn
   */
  export type ProviderPaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderPayment
     */
    select?: ProviderPaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderPayment
     */
    omit?: ProviderPaymentOmit<ExtArgs> | null
    /**
     * The data used to update ProviderPayments.
     */
    data: XOR<ProviderPaymentUpdateManyMutationInput, ProviderPaymentUncheckedUpdateManyInput>
    /**
     * Filter which ProviderPayments to update
     */
    where?: ProviderPaymentWhereInput
    /**
     * Limit how many ProviderPayments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderPaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProviderPayment upsert
   */
  export type ProviderPaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderPayment
     */
    select?: ProviderPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderPayment
     */
    omit?: ProviderPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderPaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the ProviderPayment to update in case it exists.
     */
    where: ProviderPaymentWhereUniqueInput
    /**
     * In case the ProviderPayment found by the `where` argument doesn't exist, create a new ProviderPayment with this data.
     */
    create: XOR<ProviderPaymentCreateInput, ProviderPaymentUncheckedCreateInput>
    /**
     * In case the ProviderPayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProviderPaymentUpdateInput, ProviderPaymentUncheckedUpdateInput>
  }

  /**
   * ProviderPayment delete
   */
  export type ProviderPaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderPayment
     */
    select?: ProviderPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderPayment
     */
    omit?: ProviderPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderPaymentInclude<ExtArgs> | null
    /**
     * Filter which ProviderPayment to delete.
     */
    where: ProviderPaymentWhereUniqueInput
  }

  /**
   * ProviderPayment deleteMany
   */
  export type ProviderPaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderPayments to delete
     */
    where?: ProviderPaymentWhereInput
    /**
     * Limit how many ProviderPayments to delete.
     */
    limit?: number
  }

  /**
   * ProviderPayment without action
   */
  export type ProviderPaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderPayment
     */
    select?: ProviderPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderPayment
     */
    omit?: ProviderPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderPaymentInclude<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type InvoiceSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: string | null
    policyId: string | null
    period: string | null
    issuedAt: Date | null
    dueDate: Date | null
    amount: Decimal | null
    status: $Enums.InvoiceStatus | null
    paidAt: Date | null
    reference: string | null
    reminderSent: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: string | null
    policyId: string | null
    period: string | null
    issuedAt: Date | null
    dueDate: Date | null
    amount: Decimal | null
    status: $Enums.InvoiceStatus | null
    paidAt: Date | null
    reference: string | null
    reminderSent: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    policyId: number
    period: number
    issuedAt: number
    dueDate: number
    amount: number
    status: number
    paidAt: number
    reference: number
    reminderSent: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    amount?: true
  }

  export type InvoiceSumAggregateInputType = {
    amount?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    policyId?: true
    period?: true
    issuedAt?: true
    dueDate?: true
    amount?: true
    status?: true
    paidAt?: true
    reference?: true
    reminderSent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    policyId?: true
    period?: true
    issuedAt?: true
    dueDate?: true
    amount?: true
    status?: true
    paidAt?: true
    reference?: true
    reminderSent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    policyId?: true
    period?: true
    issuedAt?: true
    dueDate?: true
    amount?: true
    status?: true
    paidAt?: true
    reference?: true
    reminderSent?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: string
    policyId: string
    period: string
    issuedAt: Date
    dueDate: Date
    amount: Decimal
    status: $Enums.InvoiceStatus
    paidAt: Date | null
    reference: string | null
    reminderSent: boolean
    createdAt: Date
    updatedAt: Date
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    policyId?: boolean
    period?: boolean
    issuedAt?: boolean
    dueDate?: boolean
    amount?: boolean
    status?: boolean
    paidAt?: boolean
    reference?: boolean
    reminderSent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    policy?: boolean | PolicyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    policyId?: boolean
    period?: boolean
    issuedAt?: boolean
    dueDate?: boolean
    amount?: boolean
    status?: boolean
    paidAt?: boolean
    reference?: boolean
    reminderSent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    policy?: boolean | PolicyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    policyId?: boolean
    period?: boolean
    issuedAt?: boolean
    dueDate?: boolean
    amount?: boolean
    status?: boolean
    paidAt?: boolean
    reference?: boolean
    reminderSent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    policy?: boolean | PolicyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectScalar = {
    id?: boolean
    policyId?: boolean
    period?: boolean
    issuedAt?: boolean
    dueDate?: boolean
    amount?: boolean
    status?: boolean
    paidAt?: boolean
    reference?: boolean
    reminderSent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "policyId" | "period" | "issuedAt" | "dueDate" | "amount" | "status" | "paidAt" | "reference" | "reminderSent" | "createdAt" | "updatedAt", ExtArgs["result"]["invoice"]>
  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    policy?: boolean | PolicyDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    policy?: boolean | PolicyDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    policy?: boolean | PolicyDefaultArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      policy: Prisma.$PolicyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      policyId: string
      period: string
      issuedAt: Date
      dueDate: Date
      amount: Prisma.Decimal
      status: $Enums.InvoiceStatus
      paidAt: Date | null
      reference: string | null
      reminderSent: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices and returns the data updated in the database.
     * @param {InvoiceUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    policy<T extends PolicyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PolicyDefaultArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Invoice model
   */
  interface InvoiceFieldRefs {
    readonly id: FieldRef<"Invoice", 'String'>
    readonly policyId: FieldRef<"Invoice", 'String'>
    readonly period: FieldRef<"Invoice", 'String'>
    readonly issuedAt: FieldRef<"Invoice", 'DateTime'>
    readonly dueDate: FieldRef<"Invoice", 'DateTime'>
    readonly amount: FieldRef<"Invoice", 'Decimal'>
    readonly status: FieldRef<"Invoice", 'InvoiceStatus'>
    readonly paidAt: FieldRef<"Invoice", 'DateTime'>
    readonly reference: FieldRef<"Invoice", 'String'>
    readonly reminderSent: FieldRef<"Invoice", 'Boolean'>
    readonly createdAt: FieldRef<"Invoice", 'DateTime'>
    readonly updatedAt: FieldRef<"Invoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoice createManyAndReturn
   */
  export type InvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
  }

  /**
   * Invoice updateManyAndReturn
   */
  export type InvoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to delete.
     */
    limit?: number
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    title: string | null
    message: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    title: string | null
    message: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    title: number
    message: number
    read: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    read?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    read?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    read?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string | null
    type: string
    title: string | null
    message: string
    read: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
    user?: boolean | Notification$userArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
    user?: boolean | Notification$userArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
    user?: boolean | Notification$userArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "title" | "message" | "read" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Notification$userArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Notification$userArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Notification$userArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      type: string
      title: string | null
      message: string
      read: boolean
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Notification$userArgs<ExtArgs> = {}>(args?: Subset<T, Notification$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly read: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification.user
   */
  export type Notification$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    name: 'name',
    nationalId: 'nationalId',
    passwordHash: 'passwordHash',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PlanScalarFieldEnum: {
    id: 'id',
    name: 'name',
    consultationCopay: 'consultationCopay',
    coverage: 'coverage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlanScalarFieldEnum = (typeof PlanScalarFieldEnum)[keyof typeof PlanScalarFieldEnum]


  export const ProviderScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    city: 'city',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProviderScalarFieldEnum = (typeof ProviderScalarFieldEnum)[keyof typeof ProviderScalarFieldEnum]


  export const PolicyScalarFieldEnum: {
    id: 'id',
    company: 'company',
    planId: 'planId',
    startDate: 'startDate',
    endDate: 'endDate',
    monthlyPremium: 'monthlyPremium',
    insuredCount: 'insuredCount',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PolicyScalarFieldEnum = (typeof PolicyScalarFieldEnum)[keyof typeof PolicyScalarFieldEnum]


  export const InsuredScalarFieldEnum: {
    id: 'id',
    name: 'name',
    nationalId: 'nationalId',
    planId: 'planId',
    policyId: 'policyId',
    status: 'status',
    startDate: 'startDate',
    birthDate: 'birthDate',
    phone: 'phone',
    email: 'email',
    dependents: 'dependents',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InsuredScalarFieldEnum = (typeof InsuredScalarFieldEnum)[keyof typeof InsuredScalarFieldEnum]


  export const AuthorizationScalarFieldEnum: {
    id: 'id',
    insuredId: 'insuredId',
    providerId: 'providerId',
    procedure: 'procedure',
    copay: 'copay',
    status: 'status',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AuthorizationScalarFieldEnum = (typeof AuthorizationScalarFieldEnum)[keyof typeof AuthorizationScalarFieldEnum]


  export const ClaimScalarFieldEnum: {
    id: 'id',
    insuredId: 'insuredId',
    providerId: 'providerId',
    amount: 'amount',
    status: 'status',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClaimScalarFieldEnum = (typeof ClaimScalarFieldEnum)[keyof typeof ClaimScalarFieldEnum]


  export const MedicalServiceScalarFieldEnum: {
    id: 'id',
    insuredId: 'insuredId',
    providerId: 'providerId',
    authorizationId: 'authorizationId',
    description: 'description',
    cost: 'cost',
    copay: 'copay',
    date: 'date',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MedicalServiceScalarFieldEnum = (typeof MedicalServiceScalarFieldEnum)[keyof typeof MedicalServiceScalarFieldEnum]


  export const ProviderPaymentScalarFieldEnum: {
    id: 'id',
    providerId: 'providerId',
    serviceId: 'serviceId',
    bankReference: 'bankReference',
    amount: 'amount',
    method: 'method',
    date: 'date',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProviderPaymentScalarFieldEnum = (typeof ProviderPaymentScalarFieldEnum)[keyof typeof ProviderPaymentScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    policyId: 'policyId',
    period: 'period',
    issuedAt: 'issuedAt',
    dueDate: 'dueDate',
    amount: 'amount',
    status: 'status',
    paidAt: 'paidAt',
    reference: 'reference',
    reminderSent: 'reminderSent',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    title: 'title',
    message: 'message',
    read: 'read',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'PolicyStatus'
   */
  export type EnumPolicyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PolicyStatus'>
    


  /**
   * Reference to a field of type 'PolicyStatus[]'
   */
  export type ListEnumPolicyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PolicyStatus[]'>
    


  /**
   * Reference to a field of type 'InsuredStatus'
   */
  export type EnumInsuredStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InsuredStatus'>
    


  /**
   * Reference to a field of type 'InsuredStatus[]'
   */
  export type ListEnumInsuredStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InsuredStatus[]'>
    


  /**
   * Reference to a field of type 'AuthorizationStatus'
   */
  export type EnumAuthorizationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthorizationStatus'>
    


  /**
   * Reference to a field of type 'AuthorizationStatus[]'
   */
  export type ListEnumAuthorizationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthorizationStatus[]'>
    


  /**
   * Reference to a field of type 'ClaimStatus'
   */
  export type EnumClaimStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClaimStatus'>
    


  /**
   * Reference to a field of type 'ClaimStatus[]'
   */
  export type ListEnumClaimStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClaimStatus[]'>
    


  /**
   * Reference to a field of type 'ServiceStatus'
   */
  export type EnumServiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceStatus'>
    


  /**
   * Reference to a field of type 'ServiceStatus[]'
   */
  export type ListEnumServiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'InvoiceStatus'
   */
  export type EnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus'>
    


  /**
   * Reference to a field of type 'InvoiceStatus[]'
   */
  export type ListEnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    nationalId?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    notifications?: NotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    nationalId?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    nationalId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    notifications?: NotificationListRelationFilter
  }, "id" | "username" | "nationalId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    nationalId?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    nationalId?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PlanWhereInput = {
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    id?: StringFilter<"Plan"> | string
    name?: StringFilter<"Plan"> | string
    consultationCopay?: DecimalFilter<"Plan"> | Decimal | DecimalJsLike | number | string
    coverage?: JsonFilter<"Plan">
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    updatedAt?: DateTimeFilter<"Plan"> | Date | string
    insureds?: InsuredListRelationFilter
    policies?: PolicyListRelationFilter
  }

  export type PlanOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    consultationCopay?: SortOrder
    coverage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    insureds?: InsuredOrderByRelationAggregateInput
    policies?: PolicyOrderByRelationAggregateInput
  }

  export type PlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    name?: StringFilter<"Plan"> | string
    consultationCopay?: DecimalFilter<"Plan"> | Decimal | DecimalJsLike | number | string
    coverage?: JsonFilter<"Plan">
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    updatedAt?: DateTimeFilter<"Plan"> | Date | string
    insureds?: InsuredListRelationFilter
    policies?: PolicyListRelationFilter
  }, "id">

  export type PlanOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    consultationCopay?: SortOrder
    coverage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlanCountOrderByAggregateInput
    _avg?: PlanAvgOrderByAggregateInput
    _max?: PlanMaxOrderByAggregateInput
    _min?: PlanMinOrderByAggregateInput
    _sum?: PlanSumOrderByAggregateInput
  }

  export type PlanScalarWhereWithAggregatesInput = {
    AND?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    OR?: PlanScalarWhereWithAggregatesInput[]
    NOT?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Plan"> | string
    name?: StringWithAggregatesFilter<"Plan"> | string
    consultationCopay?: DecimalWithAggregatesFilter<"Plan"> | Decimal | DecimalJsLike | number | string
    coverage?: JsonWithAggregatesFilter<"Plan">
    createdAt?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
  }

  export type ProviderWhereInput = {
    AND?: ProviderWhereInput | ProviderWhereInput[]
    OR?: ProviderWhereInput[]
    NOT?: ProviderWhereInput | ProviderWhereInput[]
    id?: StringFilter<"Provider"> | string
    name?: StringFilter<"Provider"> | string
    type?: StringFilter<"Provider"> | string
    city?: StringFilter<"Provider"> | string
    phone?: StringFilter<"Provider"> | string
    createdAt?: DateTimeFilter<"Provider"> | Date | string
    updatedAt?: DateTimeFilter<"Provider"> | Date | string
    authorizations?: AuthorizationListRelationFilter
    claims?: ClaimListRelationFilter
    services?: MedicalServiceListRelationFilter
    payments?: ProviderPaymentListRelationFilter
  }

  export type ProviderOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    city?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorizations?: AuthorizationOrderByRelationAggregateInput
    claims?: ClaimOrderByRelationAggregateInput
    services?: MedicalServiceOrderByRelationAggregateInput
    payments?: ProviderPaymentOrderByRelationAggregateInput
  }

  export type ProviderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProviderWhereInput | ProviderWhereInput[]
    OR?: ProviderWhereInput[]
    NOT?: ProviderWhereInput | ProviderWhereInput[]
    name?: StringFilter<"Provider"> | string
    type?: StringFilter<"Provider"> | string
    city?: StringFilter<"Provider"> | string
    phone?: StringFilter<"Provider"> | string
    createdAt?: DateTimeFilter<"Provider"> | Date | string
    updatedAt?: DateTimeFilter<"Provider"> | Date | string
    authorizations?: AuthorizationListRelationFilter
    claims?: ClaimListRelationFilter
    services?: MedicalServiceListRelationFilter
    payments?: ProviderPaymentListRelationFilter
  }, "id">

  export type ProviderOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    city?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProviderCountOrderByAggregateInput
    _max?: ProviderMaxOrderByAggregateInput
    _min?: ProviderMinOrderByAggregateInput
  }

  export type ProviderScalarWhereWithAggregatesInput = {
    AND?: ProviderScalarWhereWithAggregatesInput | ProviderScalarWhereWithAggregatesInput[]
    OR?: ProviderScalarWhereWithAggregatesInput[]
    NOT?: ProviderScalarWhereWithAggregatesInput | ProviderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Provider"> | string
    name?: StringWithAggregatesFilter<"Provider"> | string
    type?: StringWithAggregatesFilter<"Provider"> | string
    city?: StringWithAggregatesFilter<"Provider"> | string
    phone?: StringWithAggregatesFilter<"Provider"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Provider"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Provider"> | Date | string
  }

  export type PolicyWhereInput = {
    AND?: PolicyWhereInput | PolicyWhereInput[]
    OR?: PolicyWhereInput[]
    NOT?: PolicyWhereInput | PolicyWhereInput[]
    id?: StringFilter<"Policy"> | string
    company?: StringFilter<"Policy"> | string
    planId?: StringFilter<"Policy"> | string
    startDate?: DateTimeFilter<"Policy"> | Date | string
    endDate?: DateTimeFilter<"Policy"> | Date | string
    monthlyPremium?: DecimalFilter<"Policy"> | Decimal | DecimalJsLike | number | string
    insuredCount?: IntFilter<"Policy"> | number
    status?: EnumPolicyStatusFilter<"Policy"> | $Enums.PolicyStatus
    createdAt?: DateTimeFilter<"Policy"> | Date | string
    updatedAt?: DateTimeFilter<"Policy"> | Date | string
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
    insureds?: InsuredListRelationFilter
    invoices?: InvoiceListRelationFilter
  }

  export type PolicyOrderByWithRelationInput = {
    id?: SortOrder
    company?: SortOrder
    planId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    monthlyPremium?: SortOrder
    insuredCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: PlanOrderByWithRelationInput
    insureds?: InsuredOrderByRelationAggregateInput
    invoices?: InvoiceOrderByRelationAggregateInput
  }

  export type PolicyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PolicyWhereInput | PolicyWhereInput[]
    OR?: PolicyWhereInput[]
    NOT?: PolicyWhereInput | PolicyWhereInput[]
    company?: StringFilter<"Policy"> | string
    planId?: StringFilter<"Policy"> | string
    startDate?: DateTimeFilter<"Policy"> | Date | string
    endDate?: DateTimeFilter<"Policy"> | Date | string
    monthlyPremium?: DecimalFilter<"Policy"> | Decimal | DecimalJsLike | number | string
    insuredCount?: IntFilter<"Policy"> | number
    status?: EnumPolicyStatusFilter<"Policy"> | $Enums.PolicyStatus
    createdAt?: DateTimeFilter<"Policy"> | Date | string
    updatedAt?: DateTimeFilter<"Policy"> | Date | string
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
    insureds?: InsuredListRelationFilter
    invoices?: InvoiceListRelationFilter
  }, "id">

  export type PolicyOrderByWithAggregationInput = {
    id?: SortOrder
    company?: SortOrder
    planId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    monthlyPremium?: SortOrder
    insuredCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PolicyCountOrderByAggregateInput
    _avg?: PolicyAvgOrderByAggregateInput
    _max?: PolicyMaxOrderByAggregateInput
    _min?: PolicyMinOrderByAggregateInput
    _sum?: PolicySumOrderByAggregateInput
  }

  export type PolicyScalarWhereWithAggregatesInput = {
    AND?: PolicyScalarWhereWithAggregatesInput | PolicyScalarWhereWithAggregatesInput[]
    OR?: PolicyScalarWhereWithAggregatesInput[]
    NOT?: PolicyScalarWhereWithAggregatesInput | PolicyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Policy"> | string
    company?: StringWithAggregatesFilter<"Policy"> | string
    planId?: StringWithAggregatesFilter<"Policy"> | string
    startDate?: DateTimeWithAggregatesFilter<"Policy"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Policy"> | Date | string
    monthlyPremium?: DecimalWithAggregatesFilter<"Policy"> | Decimal | DecimalJsLike | number | string
    insuredCount?: IntWithAggregatesFilter<"Policy"> | number
    status?: EnumPolicyStatusWithAggregatesFilter<"Policy"> | $Enums.PolicyStatus
    createdAt?: DateTimeWithAggregatesFilter<"Policy"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Policy"> | Date | string
  }

  export type InsuredWhereInput = {
    AND?: InsuredWhereInput | InsuredWhereInput[]
    OR?: InsuredWhereInput[]
    NOT?: InsuredWhereInput | InsuredWhereInput[]
    id?: StringFilter<"Insured"> | string
    name?: StringFilter<"Insured"> | string
    nationalId?: StringFilter<"Insured"> | string
    planId?: StringFilter<"Insured"> | string
    policyId?: StringNullableFilter<"Insured"> | string | null
    status?: EnumInsuredStatusFilter<"Insured"> | $Enums.InsuredStatus
    startDate?: DateTimeFilter<"Insured"> | Date | string
    birthDate?: DateTimeNullableFilter<"Insured"> | Date | string | null
    phone?: StringNullableFilter<"Insured"> | string | null
    email?: StringNullableFilter<"Insured"> | string | null
    dependents?: IntFilter<"Insured"> | number
    createdAt?: DateTimeFilter<"Insured"> | Date | string
    updatedAt?: DateTimeFilter<"Insured"> | Date | string
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
    policy?: XOR<PolicyNullableScalarRelationFilter, PolicyWhereInput> | null
    authorizations?: AuthorizationListRelationFilter
    claims?: ClaimListRelationFilter
    services?: MedicalServiceListRelationFilter
  }

  export type InsuredOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    nationalId?: SortOrder
    planId?: SortOrder
    policyId?: SortOrderInput | SortOrder
    status?: SortOrder
    startDate?: SortOrder
    birthDate?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    dependents?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: PlanOrderByWithRelationInput
    policy?: PolicyOrderByWithRelationInput
    authorizations?: AuthorizationOrderByRelationAggregateInput
    claims?: ClaimOrderByRelationAggregateInput
    services?: MedicalServiceOrderByRelationAggregateInput
  }

  export type InsuredWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nationalId?: string
    AND?: InsuredWhereInput | InsuredWhereInput[]
    OR?: InsuredWhereInput[]
    NOT?: InsuredWhereInput | InsuredWhereInput[]
    name?: StringFilter<"Insured"> | string
    planId?: StringFilter<"Insured"> | string
    policyId?: StringNullableFilter<"Insured"> | string | null
    status?: EnumInsuredStatusFilter<"Insured"> | $Enums.InsuredStatus
    startDate?: DateTimeFilter<"Insured"> | Date | string
    birthDate?: DateTimeNullableFilter<"Insured"> | Date | string | null
    phone?: StringNullableFilter<"Insured"> | string | null
    email?: StringNullableFilter<"Insured"> | string | null
    dependents?: IntFilter<"Insured"> | number
    createdAt?: DateTimeFilter<"Insured"> | Date | string
    updatedAt?: DateTimeFilter<"Insured"> | Date | string
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
    policy?: XOR<PolicyNullableScalarRelationFilter, PolicyWhereInput> | null
    authorizations?: AuthorizationListRelationFilter
    claims?: ClaimListRelationFilter
    services?: MedicalServiceListRelationFilter
  }, "id" | "nationalId">

  export type InsuredOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    nationalId?: SortOrder
    planId?: SortOrder
    policyId?: SortOrderInput | SortOrder
    status?: SortOrder
    startDate?: SortOrder
    birthDate?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    dependents?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InsuredCountOrderByAggregateInput
    _avg?: InsuredAvgOrderByAggregateInput
    _max?: InsuredMaxOrderByAggregateInput
    _min?: InsuredMinOrderByAggregateInput
    _sum?: InsuredSumOrderByAggregateInput
  }

  export type InsuredScalarWhereWithAggregatesInput = {
    AND?: InsuredScalarWhereWithAggregatesInput | InsuredScalarWhereWithAggregatesInput[]
    OR?: InsuredScalarWhereWithAggregatesInput[]
    NOT?: InsuredScalarWhereWithAggregatesInput | InsuredScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Insured"> | string
    name?: StringWithAggregatesFilter<"Insured"> | string
    nationalId?: StringWithAggregatesFilter<"Insured"> | string
    planId?: StringWithAggregatesFilter<"Insured"> | string
    policyId?: StringNullableWithAggregatesFilter<"Insured"> | string | null
    status?: EnumInsuredStatusWithAggregatesFilter<"Insured"> | $Enums.InsuredStatus
    startDate?: DateTimeWithAggregatesFilter<"Insured"> | Date | string
    birthDate?: DateTimeNullableWithAggregatesFilter<"Insured"> | Date | string | null
    phone?: StringNullableWithAggregatesFilter<"Insured"> | string | null
    email?: StringNullableWithAggregatesFilter<"Insured"> | string | null
    dependents?: IntWithAggregatesFilter<"Insured"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Insured"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Insured"> | Date | string
  }

  export type AuthorizationWhereInput = {
    AND?: AuthorizationWhereInput | AuthorizationWhereInput[]
    OR?: AuthorizationWhereInput[]
    NOT?: AuthorizationWhereInput | AuthorizationWhereInput[]
    id?: StringFilter<"Authorization"> | string
    insuredId?: StringFilter<"Authorization"> | string
    providerId?: StringFilter<"Authorization"> | string
    procedure?: StringFilter<"Authorization"> | string
    copay?: DecimalFilter<"Authorization"> | Decimal | DecimalJsLike | number | string
    status?: EnumAuthorizationStatusFilter<"Authorization"> | $Enums.AuthorizationStatus
    date?: DateTimeFilter<"Authorization"> | Date | string
    createdAt?: DateTimeFilter<"Authorization"> | Date | string
    updatedAt?: DateTimeFilter<"Authorization"> | Date | string
    insured?: XOR<InsuredScalarRelationFilter, InsuredWhereInput>
    provider?: XOR<ProviderScalarRelationFilter, ProviderWhereInput>
    services?: MedicalServiceListRelationFilter
  }

  export type AuthorizationOrderByWithRelationInput = {
    id?: SortOrder
    insuredId?: SortOrder
    providerId?: SortOrder
    procedure?: SortOrder
    copay?: SortOrder
    status?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    insured?: InsuredOrderByWithRelationInput
    provider?: ProviderOrderByWithRelationInput
    services?: MedicalServiceOrderByRelationAggregateInput
  }

  export type AuthorizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuthorizationWhereInput | AuthorizationWhereInput[]
    OR?: AuthorizationWhereInput[]
    NOT?: AuthorizationWhereInput | AuthorizationWhereInput[]
    insuredId?: StringFilter<"Authorization"> | string
    providerId?: StringFilter<"Authorization"> | string
    procedure?: StringFilter<"Authorization"> | string
    copay?: DecimalFilter<"Authorization"> | Decimal | DecimalJsLike | number | string
    status?: EnumAuthorizationStatusFilter<"Authorization"> | $Enums.AuthorizationStatus
    date?: DateTimeFilter<"Authorization"> | Date | string
    createdAt?: DateTimeFilter<"Authorization"> | Date | string
    updatedAt?: DateTimeFilter<"Authorization"> | Date | string
    insured?: XOR<InsuredScalarRelationFilter, InsuredWhereInput>
    provider?: XOR<ProviderScalarRelationFilter, ProviderWhereInput>
    services?: MedicalServiceListRelationFilter
  }, "id">

  export type AuthorizationOrderByWithAggregationInput = {
    id?: SortOrder
    insuredId?: SortOrder
    providerId?: SortOrder
    procedure?: SortOrder
    copay?: SortOrder
    status?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AuthorizationCountOrderByAggregateInput
    _avg?: AuthorizationAvgOrderByAggregateInput
    _max?: AuthorizationMaxOrderByAggregateInput
    _min?: AuthorizationMinOrderByAggregateInput
    _sum?: AuthorizationSumOrderByAggregateInput
  }

  export type AuthorizationScalarWhereWithAggregatesInput = {
    AND?: AuthorizationScalarWhereWithAggregatesInput | AuthorizationScalarWhereWithAggregatesInput[]
    OR?: AuthorizationScalarWhereWithAggregatesInput[]
    NOT?: AuthorizationScalarWhereWithAggregatesInput | AuthorizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Authorization"> | string
    insuredId?: StringWithAggregatesFilter<"Authorization"> | string
    providerId?: StringWithAggregatesFilter<"Authorization"> | string
    procedure?: StringWithAggregatesFilter<"Authorization"> | string
    copay?: DecimalWithAggregatesFilter<"Authorization"> | Decimal | DecimalJsLike | number | string
    status?: EnumAuthorizationStatusWithAggregatesFilter<"Authorization"> | $Enums.AuthorizationStatus
    date?: DateTimeWithAggregatesFilter<"Authorization"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Authorization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Authorization"> | Date | string
  }

  export type ClaimWhereInput = {
    AND?: ClaimWhereInput | ClaimWhereInput[]
    OR?: ClaimWhereInput[]
    NOT?: ClaimWhereInput | ClaimWhereInput[]
    id?: StringFilter<"Claim"> | string
    insuredId?: StringFilter<"Claim"> | string
    providerId?: StringFilter<"Claim"> | string
    amount?: DecimalFilter<"Claim"> | Decimal | DecimalJsLike | number | string
    status?: EnumClaimStatusFilter<"Claim"> | $Enums.ClaimStatus
    date?: DateTimeFilter<"Claim"> | Date | string
    createdAt?: DateTimeFilter<"Claim"> | Date | string
    updatedAt?: DateTimeFilter<"Claim"> | Date | string
    insured?: XOR<InsuredScalarRelationFilter, InsuredWhereInput>
    provider?: XOR<ProviderScalarRelationFilter, ProviderWhereInput>
  }

  export type ClaimOrderByWithRelationInput = {
    id?: SortOrder
    insuredId?: SortOrder
    providerId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    insured?: InsuredOrderByWithRelationInput
    provider?: ProviderOrderByWithRelationInput
  }

  export type ClaimWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClaimWhereInput | ClaimWhereInput[]
    OR?: ClaimWhereInput[]
    NOT?: ClaimWhereInput | ClaimWhereInput[]
    insuredId?: StringFilter<"Claim"> | string
    providerId?: StringFilter<"Claim"> | string
    amount?: DecimalFilter<"Claim"> | Decimal | DecimalJsLike | number | string
    status?: EnumClaimStatusFilter<"Claim"> | $Enums.ClaimStatus
    date?: DateTimeFilter<"Claim"> | Date | string
    createdAt?: DateTimeFilter<"Claim"> | Date | string
    updatedAt?: DateTimeFilter<"Claim"> | Date | string
    insured?: XOR<InsuredScalarRelationFilter, InsuredWhereInput>
    provider?: XOR<ProviderScalarRelationFilter, ProviderWhereInput>
  }, "id">

  export type ClaimOrderByWithAggregationInput = {
    id?: SortOrder
    insuredId?: SortOrder
    providerId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClaimCountOrderByAggregateInput
    _avg?: ClaimAvgOrderByAggregateInput
    _max?: ClaimMaxOrderByAggregateInput
    _min?: ClaimMinOrderByAggregateInput
    _sum?: ClaimSumOrderByAggregateInput
  }

  export type ClaimScalarWhereWithAggregatesInput = {
    AND?: ClaimScalarWhereWithAggregatesInput | ClaimScalarWhereWithAggregatesInput[]
    OR?: ClaimScalarWhereWithAggregatesInput[]
    NOT?: ClaimScalarWhereWithAggregatesInput | ClaimScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Claim"> | string
    insuredId?: StringWithAggregatesFilter<"Claim"> | string
    providerId?: StringWithAggregatesFilter<"Claim"> | string
    amount?: DecimalWithAggregatesFilter<"Claim"> | Decimal | DecimalJsLike | number | string
    status?: EnumClaimStatusWithAggregatesFilter<"Claim"> | $Enums.ClaimStatus
    date?: DateTimeWithAggregatesFilter<"Claim"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Claim"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Claim"> | Date | string
  }

  export type MedicalServiceWhereInput = {
    AND?: MedicalServiceWhereInput | MedicalServiceWhereInput[]
    OR?: MedicalServiceWhereInput[]
    NOT?: MedicalServiceWhereInput | MedicalServiceWhereInput[]
    id?: StringFilter<"MedicalService"> | string
    insuredId?: StringFilter<"MedicalService"> | string
    providerId?: StringFilter<"MedicalService"> | string
    authorizationId?: StringNullableFilter<"MedicalService"> | string | null
    description?: StringFilter<"MedicalService"> | string
    cost?: DecimalFilter<"MedicalService"> | Decimal | DecimalJsLike | number | string
    copay?: DecimalFilter<"MedicalService"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"MedicalService"> | Date | string
    status?: EnumServiceStatusFilter<"MedicalService"> | $Enums.ServiceStatus
    createdAt?: DateTimeFilter<"MedicalService"> | Date | string
    updatedAt?: DateTimeFilter<"MedicalService"> | Date | string
    insured?: XOR<InsuredScalarRelationFilter, InsuredWhereInput>
    provider?: XOR<ProviderScalarRelationFilter, ProviderWhereInput>
    authorization?: XOR<AuthorizationNullableScalarRelationFilter, AuthorizationWhereInput> | null
    payment?: XOR<ProviderPaymentNullableScalarRelationFilter, ProviderPaymentWhereInput> | null
  }

  export type MedicalServiceOrderByWithRelationInput = {
    id?: SortOrder
    insuredId?: SortOrder
    providerId?: SortOrder
    authorizationId?: SortOrderInput | SortOrder
    description?: SortOrder
    cost?: SortOrder
    copay?: SortOrder
    date?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    insured?: InsuredOrderByWithRelationInput
    provider?: ProviderOrderByWithRelationInput
    authorization?: AuthorizationOrderByWithRelationInput
    payment?: ProviderPaymentOrderByWithRelationInput
  }

  export type MedicalServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MedicalServiceWhereInput | MedicalServiceWhereInput[]
    OR?: MedicalServiceWhereInput[]
    NOT?: MedicalServiceWhereInput | MedicalServiceWhereInput[]
    insuredId?: StringFilter<"MedicalService"> | string
    providerId?: StringFilter<"MedicalService"> | string
    authorizationId?: StringNullableFilter<"MedicalService"> | string | null
    description?: StringFilter<"MedicalService"> | string
    cost?: DecimalFilter<"MedicalService"> | Decimal | DecimalJsLike | number | string
    copay?: DecimalFilter<"MedicalService"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"MedicalService"> | Date | string
    status?: EnumServiceStatusFilter<"MedicalService"> | $Enums.ServiceStatus
    createdAt?: DateTimeFilter<"MedicalService"> | Date | string
    updatedAt?: DateTimeFilter<"MedicalService"> | Date | string
    insured?: XOR<InsuredScalarRelationFilter, InsuredWhereInput>
    provider?: XOR<ProviderScalarRelationFilter, ProviderWhereInput>
    authorization?: XOR<AuthorizationNullableScalarRelationFilter, AuthorizationWhereInput> | null
    payment?: XOR<ProviderPaymentNullableScalarRelationFilter, ProviderPaymentWhereInput> | null
  }, "id">

  export type MedicalServiceOrderByWithAggregationInput = {
    id?: SortOrder
    insuredId?: SortOrder
    providerId?: SortOrder
    authorizationId?: SortOrderInput | SortOrder
    description?: SortOrder
    cost?: SortOrder
    copay?: SortOrder
    date?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MedicalServiceCountOrderByAggregateInput
    _avg?: MedicalServiceAvgOrderByAggregateInput
    _max?: MedicalServiceMaxOrderByAggregateInput
    _min?: MedicalServiceMinOrderByAggregateInput
    _sum?: MedicalServiceSumOrderByAggregateInput
  }

  export type MedicalServiceScalarWhereWithAggregatesInput = {
    AND?: MedicalServiceScalarWhereWithAggregatesInput | MedicalServiceScalarWhereWithAggregatesInput[]
    OR?: MedicalServiceScalarWhereWithAggregatesInput[]
    NOT?: MedicalServiceScalarWhereWithAggregatesInput | MedicalServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MedicalService"> | string
    insuredId?: StringWithAggregatesFilter<"MedicalService"> | string
    providerId?: StringWithAggregatesFilter<"MedicalService"> | string
    authorizationId?: StringNullableWithAggregatesFilter<"MedicalService"> | string | null
    description?: StringWithAggregatesFilter<"MedicalService"> | string
    cost?: DecimalWithAggregatesFilter<"MedicalService"> | Decimal | DecimalJsLike | number | string
    copay?: DecimalWithAggregatesFilter<"MedicalService"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeWithAggregatesFilter<"MedicalService"> | Date | string
    status?: EnumServiceStatusWithAggregatesFilter<"MedicalService"> | $Enums.ServiceStatus
    createdAt?: DateTimeWithAggregatesFilter<"MedicalService"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MedicalService"> | Date | string
  }

  export type ProviderPaymentWhereInput = {
    AND?: ProviderPaymentWhereInput | ProviderPaymentWhereInput[]
    OR?: ProviderPaymentWhereInput[]
    NOT?: ProviderPaymentWhereInput | ProviderPaymentWhereInput[]
    id?: StringFilter<"ProviderPayment"> | string
    providerId?: StringFilter<"ProviderPayment"> | string
    serviceId?: StringFilter<"ProviderPayment"> | string
    bankReference?: StringFilter<"ProviderPayment"> | string
    amount?: DecimalFilter<"ProviderPayment"> | Decimal | DecimalJsLike | number | string
    method?: StringFilter<"ProviderPayment"> | string
    date?: DateTimeFilter<"ProviderPayment"> | Date | string
    status?: EnumPaymentStatusFilter<"ProviderPayment"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"ProviderPayment"> | Date | string
    updatedAt?: DateTimeFilter<"ProviderPayment"> | Date | string
    provider?: XOR<ProviderScalarRelationFilter, ProviderWhereInput>
    service?: XOR<MedicalServiceScalarRelationFilter, MedicalServiceWhereInput>
  }

  export type ProviderPaymentOrderByWithRelationInput = {
    id?: SortOrder
    providerId?: SortOrder
    serviceId?: SortOrder
    bankReference?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    date?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: ProviderOrderByWithRelationInput
    service?: MedicalServiceOrderByWithRelationInput
  }

  export type ProviderPaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    serviceId?: string
    bankReference?: string
    AND?: ProviderPaymentWhereInput | ProviderPaymentWhereInput[]
    OR?: ProviderPaymentWhereInput[]
    NOT?: ProviderPaymentWhereInput | ProviderPaymentWhereInput[]
    providerId?: StringFilter<"ProviderPayment"> | string
    amount?: DecimalFilter<"ProviderPayment"> | Decimal | DecimalJsLike | number | string
    method?: StringFilter<"ProviderPayment"> | string
    date?: DateTimeFilter<"ProviderPayment"> | Date | string
    status?: EnumPaymentStatusFilter<"ProviderPayment"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"ProviderPayment"> | Date | string
    updatedAt?: DateTimeFilter<"ProviderPayment"> | Date | string
    provider?: XOR<ProviderScalarRelationFilter, ProviderWhereInput>
    service?: XOR<MedicalServiceScalarRelationFilter, MedicalServiceWhereInput>
  }, "id" | "serviceId" | "bankReference">

  export type ProviderPaymentOrderByWithAggregationInput = {
    id?: SortOrder
    providerId?: SortOrder
    serviceId?: SortOrder
    bankReference?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    date?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProviderPaymentCountOrderByAggregateInput
    _avg?: ProviderPaymentAvgOrderByAggregateInput
    _max?: ProviderPaymentMaxOrderByAggregateInput
    _min?: ProviderPaymentMinOrderByAggregateInput
    _sum?: ProviderPaymentSumOrderByAggregateInput
  }

  export type ProviderPaymentScalarWhereWithAggregatesInput = {
    AND?: ProviderPaymentScalarWhereWithAggregatesInput | ProviderPaymentScalarWhereWithAggregatesInput[]
    OR?: ProviderPaymentScalarWhereWithAggregatesInput[]
    NOT?: ProviderPaymentScalarWhereWithAggregatesInput | ProviderPaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProviderPayment"> | string
    providerId?: StringWithAggregatesFilter<"ProviderPayment"> | string
    serviceId?: StringWithAggregatesFilter<"ProviderPayment"> | string
    bankReference?: StringWithAggregatesFilter<"ProviderPayment"> | string
    amount?: DecimalWithAggregatesFilter<"ProviderPayment"> | Decimal | DecimalJsLike | number | string
    method?: StringWithAggregatesFilter<"ProviderPayment"> | string
    date?: DateTimeWithAggregatesFilter<"ProviderPayment"> | Date | string
    status?: EnumPaymentStatusWithAggregatesFilter<"ProviderPayment"> | $Enums.PaymentStatus
    createdAt?: DateTimeWithAggregatesFilter<"ProviderPayment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProviderPayment"> | Date | string
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: StringFilter<"Invoice"> | string
    policyId?: StringFilter<"Invoice"> | string
    period?: StringFilter<"Invoice"> | string
    issuedAt?: DateTimeFilter<"Invoice"> | Date | string
    dueDate?: DateTimeFilter<"Invoice"> | Date | string
    amount?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
    paidAt?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    reference?: StringNullableFilter<"Invoice"> | string | null
    reminderSent?: BoolFilter<"Invoice"> | boolean
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
    policy?: XOR<PolicyScalarRelationFilter, PolicyWhereInput>
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    policyId?: SortOrder
    period?: SortOrder
    issuedAt?: SortOrder
    dueDate?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    reminderSent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    policy?: PolicyOrderByWithRelationInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reference?: string
    policyId_period?: InvoicePolicyIdPeriodCompoundUniqueInput
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    policyId?: StringFilter<"Invoice"> | string
    period?: StringFilter<"Invoice"> | string
    issuedAt?: DateTimeFilter<"Invoice"> | Date | string
    dueDate?: DateTimeFilter<"Invoice"> | Date | string
    amount?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
    paidAt?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    reminderSent?: BoolFilter<"Invoice"> | boolean
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
    policy?: XOR<PolicyScalarRelationFilter, PolicyWhereInput>
  }, "id" | "reference" | "policyId_period">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    policyId?: SortOrder
    period?: SortOrder
    issuedAt?: SortOrder
    dueDate?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    reminderSent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invoice"> | string
    policyId?: StringWithAggregatesFilter<"Invoice"> | string
    period?: StringWithAggregatesFilter<"Invoice"> | string
    issuedAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    dueDate?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    amount?: DecimalWithAggregatesFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    status?: EnumInvoiceStatusWithAggregatesFilter<"Invoice"> | $Enums.InvoiceStatus
    paidAt?: DateTimeNullableWithAggregatesFilter<"Invoice"> | Date | string | null
    reference?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    reminderSent?: BoolWithAggregatesFilter<"Invoice"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringNullableFilter<"Notification"> | string | null
    type?: StringFilter<"Notification"> | string
    title?: StringNullableFilter<"Notification"> | string | null
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    type?: SortOrder
    title?: SortOrderInput | SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringNullableFilter<"Notification"> | string | null
    type?: StringFilter<"Notification"> | string
    title?: StringNullableFilter<"Notification"> | string | null
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    type?: SortOrder
    title?: SortOrderInput | SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    type?: StringWithAggregatesFilter<"Notification"> | string
    title?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    message?: StringWithAggregatesFilter<"Notification"> | string
    read?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    name: string
    nationalId?: string | null
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    name: string
    nationalId?: string | null
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationalId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationalId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    name: string
    nationalId?: string | null
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationalId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationalId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanCreateInput = {
    id: string
    name: string
    consultationCopay: Decimal | DecimalJsLike | number | string
    coverage: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    insureds?: InsuredCreateNestedManyWithoutPlanInput
    policies?: PolicyCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateInput = {
    id: string
    name: string
    consultationCopay: Decimal | DecimalJsLike | number | string
    coverage: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    insureds?: InsuredUncheckedCreateNestedManyWithoutPlanInput
    policies?: PolicyUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    consultationCopay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    coverage?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    insureds?: InsuredUpdateManyWithoutPlanNestedInput
    policies?: PolicyUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    consultationCopay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    coverage?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    insureds?: InsuredUncheckedUpdateManyWithoutPlanNestedInput
    policies?: PolicyUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanCreateManyInput = {
    id: string
    name: string
    consultationCopay: Decimal | DecimalJsLike | number | string
    coverage: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    consultationCopay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    coverage?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    consultationCopay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    coverage?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderCreateInput = {
    id?: string
    name: string
    type: string
    city: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorizations?: AuthorizationCreateNestedManyWithoutProviderInput
    claims?: ClaimCreateNestedManyWithoutProviderInput
    services?: MedicalServiceCreateNestedManyWithoutProviderInput
    payments?: ProviderPaymentCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateInput = {
    id?: string
    name: string
    type: string
    city: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorizations?: AuthorizationUncheckedCreateNestedManyWithoutProviderInput
    claims?: ClaimUncheckedCreateNestedManyWithoutProviderInput
    services?: MedicalServiceUncheckedCreateNestedManyWithoutProviderInput
    payments?: ProviderPaymentUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorizations?: AuthorizationUpdateManyWithoutProviderNestedInput
    claims?: ClaimUpdateManyWithoutProviderNestedInput
    services?: MedicalServiceUpdateManyWithoutProviderNestedInput
    payments?: ProviderPaymentUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorizations?: AuthorizationUncheckedUpdateManyWithoutProviderNestedInput
    claims?: ClaimUncheckedUpdateManyWithoutProviderNestedInput
    services?: MedicalServiceUncheckedUpdateManyWithoutProviderNestedInput
    payments?: ProviderPaymentUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type ProviderCreateManyInput = {
    id?: string
    name: string
    type: string
    city: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProviderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyCreateInput = {
    id: string
    company: string
    startDate: Date | string
    endDate: Date | string
    monthlyPremium: Decimal | DecimalJsLike | number | string
    insuredCount?: number
    status?: $Enums.PolicyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: PlanCreateNestedOneWithoutPoliciesInput
    insureds?: InsuredCreateNestedManyWithoutPolicyInput
    invoices?: InvoiceCreateNestedManyWithoutPolicyInput
  }

  export type PolicyUncheckedCreateInput = {
    id: string
    company: string
    planId: string
    startDate: Date | string
    endDate: Date | string
    monthlyPremium: Decimal | DecimalJsLike | number | string
    insuredCount?: number
    status?: $Enums.PolicyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    insureds?: InsuredUncheckedCreateNestedManyWithoutPolicyInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutPolicyInput
  }

  export type PolicyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyPremium?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    insuredCount?: IntFieldUpdateOperationsInput | number
    status?: EnumPolicyStatusFieldUpdateOperationsInput | $Enums.PolicyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutPoliciesNestedInput
    insureds?: InsuredUpdateManyWithoutPolicyNestedInput
    invoices?: InvoiceUpdateManyWithoutPolicyNestedInput
  }

  export type PolicyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyPremium?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    insuredCount?: IntFieldUpdateOperationsInput | number
    status?: EnumPolicyStatusFieldUpdateOperationsInput | $Enums.PolicyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    insureds?: InsuredUncheckedUpdateManyWithoutPolicyNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutPolicyNestedInput
  }

  export type PolicyCreateManyInput = {
    id: string
    company: string
    planId: string
    startDate: Date | string
    endDate: Date | string
    monthlyPremium: Decimal | DecimalJsLike | number | string
    insuredCount?: number
    status?: $Enums.PolicyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PolicyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyPremium?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    insuredCount?: IntFieldUpdateOperationsInput | number
    status?: EnumPolicyStatusFieldUpdateOperationsInput | $Enums.PolicyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyPremium?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    insuredCount?: IntFieldUpdateOperationsInput | number
    status?: EnumPolicyStatusFieldUpdateOperationsInput | $Enums.PolicyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsuredCreateInput = {
    id?: string
    name: string
    nationalId: string
    status?: $Enums.InsuredStatus
    startDate: Date | string
    birthDate?: Date | string | null
    phone?: string | null
    email?: string | null
    dependents?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: PlanCreateNestedOneWithoutInsuredsInput
    policy?: PolicyCreateNestedOneWithoutInsuredsInput
    authorizations?: AuthorizationCreateNestedManyWithoutInsuredInput
    claims?: ClaimCreateNestedManyWithoutInsuredInput
    services?: MedicalServiceCreateNestedManyWithoutInsuredInput
  }

  export type InsuredUncheckedCreateInput = {
    id?: string
    name: string
    nationalId: string
    planId: string
    policyId?: string | null
    status?: $Enums.InsuredStatus
    startDate: Date | string
    birthDate?: Date | string | null
    phone?: string | null
    email?: string | null
    dependents?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authorizations?: AuthorizationUncheckedCreateNestedManyWithoutInsuredInput
    claims?: ClaimUncheckedCreateNestedManyWithoutInsuredInput
    services?: MedicalServiceUncheckedCreateNestedManyWithoutInsuredInput
  }

  export type InsuredUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    status?: EnumInsuredStatusFieldUpdateOperationsInput | $Enums.InsuredStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dependents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutInsuredsNestedInput
    policy?: PolicyUpdateOneWithoutInsuredsNestedInput
    authorizations?: AuthorizationUpdateManyWithoutInsuredNestedInput
    claims?: ClaimUpdateManyWithoutInsuredNestedInput
    services?: MedicalServiceUpdateManyWithoutInsuredNestedInput
  }

  export type InsuredUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    policyId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInsuredStatusFieldUpdateOperationsInput | $Enums.InsuredStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dependents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorizations?: AuthorizationUncheckedUpdateManyWithoutInsuredNestedInput
    claims?: ClaimUncheckedUpdateManyWithoutInsuredNestedInput
    services?: MedicalServiceUncheckedUpdateManyWithoutInsuredNestedInput
  }

  export type InsuredCreateManyInput = {
    id?: string
    name: string
    nationalId: string
    planId: string
    policyId?: string | null
    status?: $Enums.InsuredStatus
    startDate: Date | string
    birthDate?: Date | string | null
    phone?: string | null
    email?: string | null
    dependents?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InsuredUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    status?: EnumInsuredStatusFieldUpdateOperationsInput | $Enums.InsuredStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dependents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsuredUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    policyId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInsuredStatusFieldUpdateOperationsInput | $Enums.InsuredStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dependents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorizationCreateInput = {
    id?: string
    procedure: string
    copay: Decimal | DecimalJsLike | number | string
    status?: $Enums.AuthorizationStatus
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    insured: InsuredCreateNestedOneWithoutAuthorizationsInput
    provider: ProviderCreateNestedOneWithoutAuthorizationsInput
    services?: MedicalServiceCreateNestedManyWithoutAuthorizationInput
  }

  export type AuthorizationUncheckedCreateInput = {
    id?: string
    insuredId: string
    providerId: string
    procedure: string
    copay: Decimal | DecimalJsLike | number | string
    status?: $Enums.AuthorizationStatus
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: MedicalServiceUncheckedCreateNestedManyWithoutAuthorizationInput
  }

  export type AuthorizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    procedure?: StringFieldUpdateOperationsInput | string
    copay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumAuthorizationStatusFieldUpdateOperationsInput | $Enums.AuthorizationStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    insured?: InsuredUpdateOneRequiredWithoutAuthorizationsNestedInput
    provider?: ProviderUpdateOneRequiredWithoutAuthorizationsNestedInput
    services?: MedicalServiceUpdateManyWithoutAuthorizationNestedInput
  }

  export type AuthorizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    insuredId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    procedure?: StringFieldUpdateOperationsInput | string
    copay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumAuthorizationStatusFieldUpdateOperationsInput | $Enums.AuthorizationStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: MedicalServiceUncheckedUpdateManyWithoutAuthorizationNestedInput
  }

  export type AuthorizationCreateManyInput = {
    id?: string
    insuredId: string
    providerId: string
    procedure: string
    copay: Decimal | DecimalJsLike | number | string
    status?: $Enums.AuthorizationStatus
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthorizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    procedure?: StringFieldUpdateOperationsInput | string
    copay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumAuthorizationStatusFieldUpdateOperationsInput | $Enums.AuthorizationStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    insuredId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    procedure?: StringFieldUpdateOperationsInput | string
    copay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumAuthorizationStatusFieldUpdateOperationsInput | $Enums.AuthorizationStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.ClaimStatus
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    insured: InsuredCreateNestedOneWithoutClaimsInput
    provider: ProviderCreateNestedOneWithoutClaimsInput
  }

  export type ClaimUncheckedCreateInput = {
    id?: string
    insuredId: string
    providerId: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.ClaimStatus
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClaimUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumClaimStatusFieldUpdateOperationsInput | $Enums.ClaimStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    insured?: InsuredUpdateOneRequiredWithoutClaimsNestedInput
    provider?: ProviderUpdateOneRequiredWithoutClaimsNestedInput
  }

  export type ClaimUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    insuredId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumClaimStatusFieldUpdateOperationsInput | $Enums.ClaimStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimCreateManyInput = {
    id?: string
    insuredId: string
    providerId: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.ClaimStatus
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClaimUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumClaimStatusFieldUpdateOperationsInput | $Enums.ClaimStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    insuredId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumClaimStatusFieldUpdateOperationsInput | $Enums.ClaimStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalServiceCreateInput = {
    id?: string
    description: string
    cost: Decimal | DecimalJsLike | number | string
    copay: Decimal | DecimalJsLike | number | string
    date?: Date | string
    status?: $Enums.ServiceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    insured: InsuredCreateNestedOneWithoutServicesInput
    provider: ProviderCreateNestedOneWithoutServicesInput
    authorization?: AuthorizationCreateNestedOneWithoutServicesInput
    payment?: ProviderPaymentCreateNestedOneWithoutServiceInput
  }

  export type MedicalServiceUncheckedCreateInput = {
    id?: string
    insuredId: string
    providerId: string
    authorizationId?: string | null
    description: string
    cost: Decimal | DecimalJsLike | number | string
    copay: Decimal | DecimalJsLike | number | string
    date?: Date | string
    status?: $Enums.ServiceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: ProviderPaymentUncheckedCreateNestedOneWithoutServiceInput
  }

  export type MedicalServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    copay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    insured?: InsuredUpdateOneRequiredWithoutServicesNestedInput
    provider?: ProviderUpdateOneRequiredWithoutServicesNestedInput
    authorization?: AuthorizationUpdateOneWithoutServicesNestedInput
    payment?: ProviderPaymentUpdateOneWithoutServiceNestedInput
  }

  export type MedicalServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    insuredId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    authorizationId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    copay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: ProviderPaymentUncheckedUpdateOneWithoutServiceNestedInput
  }

  export type MedicalServiceCreateManyInput = {
    id?: string
    insuredId: string
    providerId: string
    authorizationId?: string | null
    description: string
    cost: Decimal | DecimalJsLike | number | string
    copay: Decimal | DecimalJsLike | number | string
    date?: Date | string
    status?: $Enums.ServiceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    copay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    insuredId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    authorizationId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    copay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderPaymentCreateInput = {
    id?: string
    bankReference: string
    amount: Decimal | DecimalJsLike | number | string
    method: string
    date?: Date | string
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: ProviderCreateNestedOneWithoutPaymentsInput
    service: MedicalServiceCreateNestedOneWithoutPaymentInput
  }

  export type ProviderPaymentUncheckedCreateInput = {
    id?: string
    providerId: string
    serviceId: string
    bankReference: string
    amount: Decimal | DecimalJsLike | number | string
    method: string
    date?: Date | string
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProviderPaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankReference?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneRequiredWithoutPaymentsNestedInput
    service?: MedicalServiceUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type ProviderPaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    bankReference?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderPaymentCreateManyInput = {
    id?: string
    providerId: string
    serviceId: string
    bankReference: string
    amount: Decimal | DecimalJsLike | number | string
    method: string
    date?: Date | string
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProviderPaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankReference?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderPaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    bankReference?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateInput = {
    id?: string
    period: string
    issuedAt: Date | string
    dueDate: Date | string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.InvoiceStatus
    paidAt?: Date | string | null
    reference?: string | null
    reminderSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    policy: PolicyCreateNestedOneWithoutInvoicesInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: string
    policyId: string
    period: string
    issuedAt: Date | string
    dueDate: Date | string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.InvoiceStatus
    paidAt?: Date | string | null
    reference?: string | null
    reminderSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    reminderSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policy?: PolicyUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    policyId?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    reminderSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateManyInput = {
    id?: string
    policyId: string
    period: string
    issuedAt: Date | string
    dueDate: Date | string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.InvoiceStatus
    paidAt?: Date | string | null
    reference?: string | null
    reminderSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    reminderSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    policyId?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    reminderSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    type: string
    title?: string | null
    message: string
    read?: boolean
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId?: string | null
    type: string
    title?: string | null
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId?: string | null
    type: string
    title?: string | null
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    nationalId?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    nationalId?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    nationalId?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type InsuredListRelationFilter = {
    every?: InsuredWhereInput
    some?: InsuredWhereInput
    none?: InsuredWhereInput
  }

  export type PolicyListRelationFilter = {
    every?: PolicyWhereInput
    some?: PolicyWhereInput
    none?: PolicyWhereInput
  }

  export type InsuredOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PolicyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlanCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    consultationCopay?: SortOrder
    coverage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanAvgOrderByAggregateInput = {
    consultationCopay?: SortOrder
  }

  export type PlanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    consultationCopay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    consultationCopay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanSumOrderByAggregateInput = {
    consultationCopay?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type AuthorizationListRelationFilter = {
    every?: AuthorizationWhereInput
    some?: AuthorizationWhereInput
    none?: AuthorizationWhereInput
  }

  export type ClaimListRelationFilter = {
    every?: ClaimWhereInput
    some?: ClaimWhereInput
    none?: ClaimWhereInput
  }

  export type MedicalServiceListRelationFilter = {
    every?: MedicalServiceWhereInput
    some?: MedicalServiceWhereInput
    none?: MedicalServiceWhereInput
  }

  export type ProviderPaymentListRelationFilter = {
    every?: ProviderPaymentWhereInput
    some?: ProviderPaymentWhereInput
    none?: ProviderPaymentWhereInput
  }

  export type AuthorizationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClaimOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicalServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProviderPaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProviderCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    city?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    city?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    city?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumPolicyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PolicyStatus | EnumPolicyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PolicyStatus[] | ListEnumPolicyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PolicyStatus[] | ListEnumPolicyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPolicyStatusFilter<$PrismaModel> | $Enums.PolicyStatus
  }

  export type PlanScalarRelationFilter = {
    is?: PlanWhereInput
    isNot?: PlanWhereInput
  }

  export type InvoiceListRelationFilter = {
    every?: InvoiceWhereInput
    some?: InvoiceWhereInput
    none?: InvoiceWhereInput
  }

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PolicyCountOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    planId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    monthlyPremium?: SortOrder
    insuredCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PolicyAvgOrderByAggregateInput = {
    monthlyPremium?: SortOrder
    insuredCount?: SortOrder
  }

  export type PolicyMaxOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    planId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    monthlyPremium?: SortOrder
    insuredCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PolicyMinOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    planId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    monthlyPremium?: SortOrder
    insuredCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PolicySumOrderByAggregateInput = {
    monthlyPremium?: SortOrder
    insuredCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumPolicyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PolicyStatus | EnumPolicyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PolicyStatus[] | ListEnumPolicyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PolicyStatus[] | ListEnumPolicyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPolicyStatusWithAggregatesFilter<$PrismaModel> | $Enums.PolicyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPolicyStatusFilter<$PrismaModel>
    _max?: NestedEnumPolicyStatusFilter<$PrismaModel>
  }

  export type EnumInsuredStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InsuredStatus | EnumInsuredStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InsuredStatus[] | ListEnumInsuredStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InsuredStatus[] | ListEnumInsuredStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInsuredStatusFilter<$PrismaModel> | $Enums.InsuredStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PolicyNullableScalarRelationFilter = {
    is?: PolicyWhereInput | null
    isNot?: PolicyWhereInput | null
  }

  export type InsuredCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nationalId?: SortOrder
    planId?: SortOrder
    policyId?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    birthDate?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    dependents?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InsuredAvgOrderByAggregateInput = {
    dependents?: SortOrder
  }

  export type InsuredMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nationalId?: SortOrder
    planId?: SortOrder
    policyId?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    birthDate?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    dependents?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InsuredMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nationalId?: SortOrder
    planId?: SortOrder
    policyId?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    birthDate?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    dependents?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InsuredSumOrderByAggregateInput = {
    dependents?: SortOrder
  }

  export type EnumInsuredStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InsuredStatus | EnumInsuredStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InsuredStatus[] | ListEnumInsuredStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InsuredStatus[] | ListEnumInsuredStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInsuredStatusWithAggregatesFilter<$PrismaModel> | $Enums.InsuredStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInsuredStatusFilter<$PrismaModel>
    _max?: NestedEnumInsuredStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumAuthorizationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthorizationStatus | EnumAuthorizationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AuthorizationStatus[] | ListEnumAuthorizationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthorizationStatus[] | ListEnumAuthorizationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthorizationStatusFilter<$PrismaModel> | $Enums.AuthorizationStatus
  }

  export type InsuredScalarRelationFilter = {
    is?: InsuredWhereInput
    isNot?: InsuredWhereInput
  }

  export type ProviderScalarRelationFilter = {
    is?: ProviderWhereInput
    isNot?: ProviderWhereInput
  }

  export type AuthorizationCountOrderByAggregateInput = {
    id?: SortOrder
    insuredId?: SortOrder
    providerId?: SortOrder
    procedure?: SortOrder
    copay?: SortOrder
    status?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthorizationAvgOrderByAggregateInput = {
    copay?: SortOrder
  }

  export type AuthorizationMaxOrderByAggregateInput = {
    id?: SortOrder
    insuredId?: SortOrder
    providerId?: SortOrder
    procedure?: SortOrder
    copay?: SortOrder
    status?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthorizationMinOrderByAggregateInput = {
    id?: SortOrder
    insuredId?: SortOrder
    providerId?: SortOrder
    procedure?: SortOrder
    copay?: SortOrder
    status?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthorizationSumOrderByAggregateInput = {
    copay?: SortOrder
  }

  export type EnumAuthorizationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthorizationStatus | EnumAuthorizationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AuthorizationStatus[] | ListEnumAuthorizationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthorizationStatus[] | ListEnumAuthorizationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthorizationStatusWithAggregatesFilter<$PrismaModel> | $Enums.AuthorizationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthorizationStatusFilter<$PrismaModel>
    _max?: NestedEnumAuthorizationStatusFilter<$PrismaModel>
  }

  export type EnumClaimStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ClaimStatus | EnumClaimStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ClaimStatus[] | ListEnumClaimStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClaimStatus[] | ListEnumClaimStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumClaimStatusFilter<$PrismaModel> | $Enums.ClaimStatus
  }

  export type ClaimCountOrderByAggregateInput = {
    id?: SortOrder
    insuredId?: SortOrder
    providerId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClaimAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ClaimMaxOrderByAggregateInput = {
    id?: SortOrder
    insuredId?: SortOrder
    providerId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClaimMinOrderByAggregateInput = {
    id?: SortOrder
    insuredId?: SortOrder
    providerId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClaimSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumClaimStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClaimStatus | EnumClaimStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ClaimStatus[] | ListEnumClaimStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClaimStatus[] | ListEnumClaimStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumClaimStatusWithAggregatesFilter<$PrismaModel> | $Enums.ClaimStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClaimStatusFilter<$PrismaModel>
    _max?: NestedEnumClaimStatusFilter<$PrismaModel>
  }

  export type EnumServiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceStatus | EnumServiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceStatusFilter<$PrismaModel> | $Enums.ServiceStatus
  }

  export type AuthorizationNullableScalarRelationFilter = {
    is?: AuthorizationWhereInput | null
    isNot?: AuthorizationWhereInput | null
  }

  export type ProviderPaymentNullableScalarRelationFilter = {
    is?: ProviderPaymentWhereInput | null
    isNot?: ProviderPaymentWhereInput | null
  }

  export type MedicalServiceCountOrderByAggregateInput = {
    id?: SortOrder
    insuredId?: SortOrder
    providerId?: SortOrder
    authorizationId?: SortOrder
    description?: SortOrder
    cost?: SortOrder
    copay?: SortOrder
    date?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicalServiceAvgOrderByAggregateInput = {
    cost?: SortOrder
    copay?: SortOrder
  }

  export type MedicalServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    insuredId?: SortOrder
    providerId?: SortOrder
    authorizationId?: SortOrder
    description?: SortOrder
    cost?: SortOrder
    copay?: SortOrder
    date?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicalServiceMinOrderByAggregateInput = {
    id?: SortOrder
    insuredId?: SortOrder
    providerId?: SortOrder
    authorizationId?: SortOrder
    description?: SortOrder
    cost?: SortOrder
    copay?: SortOrder
    date?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicalServiceSumOrderByAggregateInput = {
    cost?: SortOrder
    copay?: SortOrder
  }

  export type EnumServiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceStatus | EnumServiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.ServiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceStatusFilter<$PrismaModel>
    _max?: NestedEnumServiceStatusFilter<$PrismaModel>
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type MedicalServiceScalarRelationFilter = {
    is?: MedicalServiceWhereInput
    isNot?: MedicalServiceWhereInput
  }

  export type ProviderPaymentCountOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    serviceId?: SortOrder
    bankReference?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    date?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderPaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ProviderPaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    serviceId?: SortOrder
    bankReference?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    date?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderPaymentMinOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    serviceId?: SortOrder
    bankReference?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    date?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderPaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PolicyScalarRelationFilter = {
    is?: PolicyWhereInput
    isNot?: PolicyWhereInput
  }

  export type InvoicePolicyIdPeriodCompoundUniqueInput = {
    policyId: string
    period: string
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    policyId?: SortOrder
    period?: SortOrder
    issuedAt?: SortOrder
    dueDate?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    reference?: SortOrder
    reminderSent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    policyId?: SortOrder
    period?: SortOrder
    issuedAt?: SortOrder
    dueDate?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    reference?: SortOrder
    reminderSent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    policyId?: SortOrder
    period?: SortOrder
    issuedAt?: SortOrder
    dueDate?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    reference?: SortOrder
    reminderSent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvoiceStatusFilter<$PrismaModel>
    _max?: NestedEnumInvoiceStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type InsuredCreateNestedManyWithoutPlanInput = {
    create?: XOR<InsuredCreateWithoutPlanInput, InsuredUncheckedCreateWithoutPlanInput> | InsuredCreateWithoutPlanInput[] | InsuredUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: InsuredCreateOrConnectWithoutPlanInput | InsuredCreateOrConnectWithoutPlanInput[]
    createMany?: InsuredCreateManyPlanInputEnvelope
    connect?: InsuredWhereUniqueInput | InsuredWhereUniqueInput[]
  }

  export type PolicyCreateNestedManyWithoutPlanInput = {
    create?: XOR<PolicyCreateWithoutPlanInput, PolicyUncheckedCreateWithoutPlanInput> | PolicyCreateWithoutPlanInput[] | PolicyUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PolicyCreateOrConnectWithoutPlanInput | PolicyCreateOrConnectWithoutPlanInput[]
    createMany?: PolicyCreateManyPlanInputEnvelope
    connect?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
  }

  export type InsuredUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<InsuredCreateWithoutPlanInput, InsuredUncheckedCreateWithoutPlanInput> | InsuredCreateWithoutPlanInput[] | InsuredUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: InsuredCreateOrConnectWithoutPlanInput | InsuredCreateOrConnectWithoutPlanInput[]
    createMany?: InsuredCreateManyPlanInputEnvelope
    connect?: InsuredWhereUniqueInput | InsuredWhereUniqueInput[]
  }

  export type PolicyUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<PolicyCreateWithoutPlanInput, PolicyUncheckedCreateWithoutPlanInput> | PolicyCreateWithoutPlanInput[] | PolicyUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PolicyCreateOrConnectWithoutPlanInput | PolicyCreateOrConnectWithoutPlanInput[]
    createMany?: PolicyCreateManyPlanInputEnvelope
    connect?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type InsuredUpdateManyWithoutPlanNestedInput = {
    create?: XOR<InsuredCreateWithoutPlanInput, InsuredUncheckedCreateWithoutPlanInput> | InsuredCreateWithoutPlanInput[] | InsuredUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: InsuredCreateOrConnectWithoutPlanInput | InsuredCreateOrConnectWithoutPlanInput[]
    upsert?: InsuredUpsertWithWhereUniqueWithoutPlanInput | InsuredUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: InsuredCreateManyPlanInputEnvelope
    set?: InsuredWhereUniqueInput | InsuredWhereUniqueInput[]
    disconnect?: InsuredWhereUniqueInput | InsuredWhereUniqueInput[]
    delete?: InsuredWhereUniqueInput | InsuredWhereUniqueInput[]
    connect?: InsuredWhereUniqueInput | InsuredWhereUniqueInput[]
    update?: InsuredUpdateWithWhereUniqueWithoutPlanInput | InsuredUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: InsuredUpdateManyWithWhereWithoutPlanInput | InsuredUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: InsuredScalarWhereInput | InsuredScalarWhereInput[]
  }

  export type PolicyUpdateManyWithoutPlanNestedInput = {
    create?: XOR<PolicyCreateWithoutPlanInput, PolicyUncheckedCreateWithoutPlanInput> | PolicyCreateWithoutPlanInput[] | PolicyUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PolicyCreateOrConnectWithoutPlanInput | PolicyCreateOrConnectWithoutPlanInput[]
    upsert?: PolicyUpsertWithWhereUniqueWithoutPlanInput | PolicyUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: PolicyCreateManyPlanInputEnvelope
    set?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    disconnect?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    delete?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    connect?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    update?: PolicyUpdateWithWhereUniqueWithoutPlanInput | PolicyUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: PolicyUpdateManyWithWhereWithoutPlanInput | PolicyUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: PolicyScalarWhereInput | PolicyScalarWhereInput[]
  }

  export type InsuredUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<InsuredCreateWithoutPlanInput, InsuredUncheckedCreateWithoutPlanInput> | InsuredCreateWithoutPlanInput[] | InsuredUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: InsuredCreateOrConnectWithoutPlanInput | InsuredCreateOrConnectWithoutPlanInput[]
    upsert?: InsuredUpsertWithWhereUniqueWithoutPlanInput | InsuredUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: InsuredCreateManyPlanInputEnvelope
    set?: InsuredWhereUniqueInput | InsuredWhereUniqueInput[]
    disconnect?: InsuredWhereUniqueInput | InsuredWhereUniqueInput[]
    delete?: InsuredWhereUniqueInput | InsuredWhereUniqueInput[]
    connect?: InsuredWhereUniqueInput | InsuredWhereUniqueInput[]
    update?: InsuredUpdateWithWhereUniqueWithoutPlanInput | InsuredUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: InsuredUpdateManyWithWhereWithoutPlanInput | InsuredUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: InsuredScalarWhereInput | InsuredScalarWhereInput[]
  }

  export type PolicyUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<PolicyCreateWithoutPlanInput, PolicyUncheckedCreateWithoutPlanInput> | PolicyCreateWithoutPlanInput[] | PolicyUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PolicyCreateOrConnectWithoutPlanInput | PolicyCreateOrConnectWithoutPlanInput[]
    upsert?: PolicyUpsertWithWhereUniqueWithoutPlanInput | PolicyUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: PolicyCreateManyPlanInputEnvelope
    set?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    disconnect?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    delete?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    connect?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    update?: PolicyUpdateWithWhereUniqueWithoutPlanInput | PolicyUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: PolicyUpdateManyWithWhereWithoutPlanInput | PolicyUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: PolicyScalarWhereInput | PolicyScalarWhereInput[]
  }

  export type AuthorizationCreateNestedManyWithoutProviderInput = {
    create?: XOR<AuthorizationCreateWithoutProviderInput, AuthorizationUncheckedCreateWithoutProviderInput> | AuthorizationCreateWithoutProviderInput[] | AuthorizationUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: AuthorizationCreateOrConnectWithoutProviderInput | AuthorizationCreateOrConnectWithoutProviderInput[]
    createMany?: AuthorizationCreateManyProviderInputEnvelope
    connect?: AuthorizationWhereUniqueInput | AuthorizationWhereUniqueInput[]
  }

  export type ClaimCreateNestedManyWithoutProviderInput = {
    create?: XOR<ClaimCreateWithoutProviderInput, ClaimUncheckedCreateWithoutProviderInput> | ClaimCreateWithoutProviderInput[] | ClaimUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutProviderInput | ClaimCreateOrConnectWithoutProviderInput[]
    createMany?: ClaimCreateManyProviderInputEnvelope
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
  }

  export type MedicalServiceCreateNestedManyWithoutProviderInput = {
    create?: XOR<MedicalServiceCreateWithoutProviderInput, MedicalServiceUncheckedCreateWithoutProviderInput> | MedicalServiceCreateWithoutProviderInput[] | MedicalServiceUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: MedicalServiceCreateOrConnectWithoutProviderInput | MedicalServiceCreateOrConnectWithoutProviderInput[]
    createMany?: MedicalServiceCreateManyProviderInputEnvelope
    connect?: MedicalServiceWhereUniqueInput | MedicalServiceWhereUniqueInput[]
  }

  export type ProviderPaymentCreateNestedManyWithoutProviderInput = {
    create?: XOR<ProviderPaymentCreateWithoutProviderInput, ProviderPaymentUncheckedCreateWithoutProviderInput> | ProviderPaymentCreateWithoutProviderInput[] | ProviderPaymentUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ProviderPaymentCreateOrConnectWithoutProviderInput | ProviderPaymentCreateOrConnectWithoutProviderInput[]
    createMany?: ProviderPaymentCreateManyProviderInputEnvelope
    connect?: ProviderPaymentWhereUniqueInput | ProviderPaymentWhereUniqueInput[]
  }

  export type AuthorizationUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<AuthorizationCreateWithoutProviderInput, AuthorizationUncheckedCreateWithoutProviderInput> | AuthorizationCreateWithoutProviderInput[] | AuthorizationUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: AuthorizationCreateOrConnectWithoutProviderInput | AuthorizationCreateOrConnectWithoutProviderInput[]
    createMany?: AuthorizationCreateManyProviderInputEnvelope
    connect?: AuthorizationWhereUniqueInput | AuthorizationWhereUniqueInput[]
  }

  export type ClaimUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<ClaimCreateWithoutProviderInput, ClaimUncheckedCreateWithoutProviderInput> | ClaimCreateWithoutProviderInput[] | ClaimUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutProviderInput | ClaimCreateOrConnectWithoutProviderInput[]
    createMany?: ClaimCreateManyProviderInputEnvelope
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
  }

  export type MedicalServiceUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<MedicalServiceCreateWithoutProviderInput, MedicalServiceUncheckedCreateWithoutProviderInput> | MedicalServiceCreateWithoutProviderInput[] | MedicalServiceUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: MedicalServiceCreateOrConnectWithoutProviderInput | MedicalServiceCreateOrConnectWithoutProviderInput[]
    createMany?: MedicalServiceCreateManyProviderInputEnvelope
    connect?: MedicalServiceWhereUniqueInput | MedicalServiceWhereUniqueInput[]
  }

  export type ProviderPaymentUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<ProviderPaymentCreateWithoutProviderInput, ProviderPaymentUncheckedCreateWithoutProviderInput> | ProviderPaymentCreateWithoutProviderInput[] | ProviderPaymentUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ProviderPaymentCreateOrConnectWithoutProviderInput | ProviderPaymentCreateOrConnectWithoutProviderInput[]
    createMany?: ProviderPaymentCreateManyProviderInputEnvelope
    connect?: ProviderPaymentWhereUniqueInput | ProviderPaymentWhereUniqueInput[]
  }

  export type AuthorizationUpdateManyWithoutProviderNestedInput = {
    create?: XOR<AuthorizationCreateWithoutProviderInput, AuthorizationUncheckedCreateWithoutProviderInput> | AuthorizationCreateWithoutProviderInput[] | AuthorizationUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: AuthorizationCreateOrConnectWithoutProviderInput | AuthorizationCreateOrConnectWithoutProviderInput[]
    upsert?: AuthorizationUpsertWithWhereUniqueWithoutProviderInput | AuthorizationUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: AuthorizationCreateManyProviderInputEnvelope
    set?: AuthorizationWhereUniqueInput | AuthorizationWhereUniqueInput[]
    disconnect?: AuthorizationWhereUniqueInput | AuthorizationWhereUniqueInput[]
    delete?: AuthorizationWhereUniqueInput | AuthorizationWhereUniqueInput[]
    connect?: AuthorizationWhereUniqueInput | AuthorizationWhereUniqueInput[]
    update?: AuthorizationUpdateWithWhereUniqueWithoutProviderInput | AuthorizationUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: AuthorizationUpdateManyWithWhereWithoutProviderInput | AuthorizationUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: AuthorizationScalarWhereInput | AuthorizationScalarWhereInput[]
  }

  export type ClaimUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ClaimCreateWithoutProviderInput, ClaimUncheckedCreateWithoutProviderInput> | ClaimCreateWithoutProviderInput[] | ClaimUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutProviderInput | ClaimCreateOrConnectWithoutProviderInput[]
    upsert?: ClaimUpsertWithWhereUniqueWithoutProviderInput | ClaimUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ClaimCreateManyProviderInputEnvelope
    set?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    disconnect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    delete?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    update?: ClaimUpdateWithWhereUniqueWithoutProviderInput | ClaimUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ClaimUpdateManyWithWhereWithoutProviderInput | ClaimUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
  }

  export type MedicalServiceUpdateManyWithoutProviderNestedInput = {
    create?: XOR<MedicalServiceCreateWithoutProviderInput, MedicalServiceUncheckedCreateWithoutProviderInput> | MedicalServiceCreateWithoutProviderInput[] | MedicalServiceUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: MedicalServiceCreateOrConnectWithoutProviderInput | MedicalServiceCreateOrConnectWithoutProviderInput[]
    upsert?: MedicalServiceUpsertWithWhereUniqueWithoutProviderInput | MedicalServiceUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: MedicalServiceCreateManyProviderInputEnvelope
    set?: MedicalServiceWhereUniqueInput | MedicalServiceWhereUniqueInput[]
    disconnect?: MedicalServiceWhereUniqueInput | MedicalServiceWhereUniqueInput[]
    delete?: MedicalServiceWhereUniqueInput | MedicalServiceWhereUniqueInput[]
    connect?: MedicalServiceWhereUniqueInput | MedicalServiceWhereUniqueInput[]
    update?: MedicalServiceUpdateWithWhereUniqueWithoutProviderInput | MedicalServiceUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: MedicalServiceUpdateManyWithWhereWithoutProviderInput | MedicalServiceUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: MedicalServiceScalarWhereInput | MedicalServiceScalarWhereInput[]
  }

  export type ProviderPaymentUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ProviderPaymentCreateWithoutProviderInput, ProviderPaymentUncheckedCreateWithoutProviderInput> | ProviderPaymentCreateWithoutProviderInput[] | ProviderPaymentUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ProviderPaymentCreateOrConnectWithoutProviderInput | ProviderPaymentCreateOrConnectWithoutProviderInput[]
    upsert?: ProviderPaymentUpsertWithWhereUniqueWithoutProviderInput | ProviderPaymentUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ProviderPaymentCreateManyProviderInputEnvelope
    set?: ProviderPaymentWhereUniqueInput | ProviderPaymentWhereUniqueInput[]
    disconnect?: ProviderPaymentWhereUniqueInput | ProviderPaymentWhereUniqueInput[]
    delete?: ProviderPaymentWhereUniqueInput | ProviderPaymentWhereUniqueInput[]
    connect?: ProviderPaymentWhereUniqueInput | ProviderPaymentWhereUniqueInput[]
    update?: ProviderPaymentUpdateWithWhereUniqueWithoutProviderInput | ProviderPaymentUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ProviderPaymentUpdateManyWithWhereWithoutProviderInput | ProviderPaymentUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ProviderPaymentScalarWhereInput | ProviderPaymentScalarWhereInput[]
  }

  export type AuthorizationUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<AuthorizationCreateWithoutProviderInput, AuthorizationUncheckedCreateWithoutProviderInput> | AuthorizationCreateWithoutProviderInput[] | AuthorizationUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: AuthorizationCreateOrConnectWithoutProviderInput | AuthorizationCreateOrConnectWithoutProviderInput[]
    upsert?: AuthorizationUpsertWithWhereUniqueWithoutProviderInput | AuthorizationUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: AuthorizationCreateManyProviderInputEnvelope
    set?: AuthorizationWhereUniqueInput | AuthorizationWhereUniqueInput[]
    disconnect?: AuthorizationWhereUniqueInput | AuthorizationWhereUniqueInput[]
    delete?: AuthorizationWhereUniqueInput | AuthorizationWhereUniqueInput[]
    connect?: AuthorizationWhereUniqueInput | AuthorizationWhereUniqueInput[]
    update?: AuthorizationUpdateWithWhereUniqueWithoutProviderInput | AuthorizationUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: AuthorizationUpdateManyWithWhereWithoutProviderInput | AuthorizationUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: AuthorizationScalarWhereInput | AuthorizationScalarWhereInput[]
  }

  export type ClaimUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ClaimCreateWithoutProviderInput, ClaimUncheckedCreateWithoutProviderInput> | ClaimCreateWithoutProviderInput[] | ClaimUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutProviderInput | ClaimCreateOrConnectWithoutProviderInput[]
    upsert?: ClaimUpsertWithWhereUniqueWithoutProviderInput | ClaimUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ClaimCreateManyProviderInputEnvelope
    set?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    disconnect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    delete?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    update?: ClaimUpdateWithWhereUniqueWithoutProviderInput | ClaimUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ClaimUpdateManyWithWhereWithoutProviderInput | ClaimUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
  }

  export type MedicalServiceUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<MedicalServiceCreateWithoutProviderInput, MedicalServiceUncheckedCreateWithoutProviderInput> | MedicalServiceCreateWithoutProviderInput[] | MedicalServiceUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: MedicalServiceCreateOrConnectWithoutProviderInput | MedicalServiceCreateOrConnectWithoutProviderInput[]
    upsert?: MedicalServiceUpsertWithWhereUniqueWithoutProviderInput | MedicalServiceUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: MedicalServiceCreateManyProviderInputEnvelope
    set?: MedicalServiceWhereUniqueInput | MedicalServiceWhereUniqueInput[]
    disconnect?: MedicalServiceWhereUniqueInput | MedicalServiceWhereUniqueInput[]
    delete?: MedicalServiceWhereUniqueInput | MedicalServiceWhereUniqueInput[]
    connect?: MedicalServiceWhereUniqueInput | MedicalServiceWhereUniqueInput[]
    update?: MedicalServiceUpdateWithWhereUniqueWithoutProviderInput | MedicalServiceUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: MedicalServiceUpdateManyWithWhereWithoutProviderInput | MedicalServiceUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: MedicalServiceScalarWhereInput | MedicalServiceScalarWhereInput[]
  }

  export type ProviderPaymentUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ProviderPaymentCreateWithoutProviderInput, ProviderPaymentUncheckedCreateWithoutProviderInput> | ProviderPaymentCreateWithoutProviderInput[] | ProviderPaymentUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ProviderPaymentCreateOrConnectWithoutProviderInput | ProviderPaymentCreateOrConnectWithoutProviderInput[]
    upsert?: ProviderPaymentUpsertWithWhereUniqueWithoutProviderInput | ProviderPaymentUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ProviderPaymentCreateManyProviderInputEnvelope
    set?: ProviderPaymentWhereUniqueInput | ProviderPaymentWhereUniqueInput[]
    disconnect?: ProviderPaymentWhereUniqueInput | ProviderPaymentWhereUniqueInput[]
    delete?: ProviderPaymentWhereUniqueInput | ProviderPaymentWhereUniqueInput[]
    connect?: ProviderPaymentWhereUniqueInput | ProviderPaymentWhereUniqueInput[]
    update?: ProviderPaymentUpdateWithWhereUniqueWithoutProviderInput | ProviderPaymentUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ProviderPaymentUpdateManyWithWhereWithoutProviderInput | ProviderPaymentUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ProviderPaymentScalarWhereInput | ProviderPaymentScalarWhereInput[]
  }

  export type PlanCreateNestedOneWithoutPoliciesInput = {
    create?: XOR<PlanCreateWithoutPoliciesInput, PlanUncheckedCreateWithoutPoliciesInput>
    connectOrCreate?: PlanCreateOrConnectWithoutPoliciesInput
    connect?: PlanWhereUniqueInput
  }

  export type InsuredCreateNestedManyWithoutPolicyInput = {
    create?: XOR<InsuredCreateWithoutPolicyInput, InsuredUncheckedCreateWithoutPolicyInput> | InsuredCreateWithoutPolicyInput[] | InsuredUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: InsuredCreateOrConnectWithoutPolicyInput | InsuredCreateOrConnectWithoutPolicyInput[]
    createMany?: InsuredCreateManyPolicyInputEnvelope
    connect?: InsuredWhereUniqueInput | InsuredWhereUniqueInput[]
  }

  export type InvoiceCreateNestedManyWithoutPolicyInput = {
    create?: XOR<InvoiceCreateWithoutPolicyInput, InvoiceUncheckedCreateWithoutPolicyInput> | InvoiceCreateWithoutPolicyInput[] | InvoiceUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutPolicyInput | InvoiceCreateOrConnectWithoutPolicyInput[]
    createMany?: InvoiceCreateManyPolicyInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type InsuredUncheckedCreateNestedManyWithoutPolicyInput = {
    create?: XOR<InsuredCreateWithoutPolicyInput, InsuredUncheckedCreateWithoutPolicyInput> | InsuredCreateWithoutPolicyInput[] | InsuredUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: InsuredCreateOrConnectWithoutPolicyInput | InsuredCreateOrConnectWithoutPolicyInput[]
    createMany?: InsuredCreateManyPolicyInputEnvelope
    connect?: InsuredWhereUniqueInput | InsuredWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutPolicyInput = {
    create?: XOR<InvoiceCreateWithoutPolicyInput, InvoiceUncheckedCreateWithoutPolicyInput> | InvoiceCreateWithoutPolicyInput[] | InvoiceUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutPolicyInput | InvoiceCreateOrConnectWithoutPolicyInput[]
    createMany?: InvoiceCreateManyPolicyInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPolicyStatusFieldUpdateOperationsInput = {
    set?: $Enums.PolicyStatus
  }

  export type PlanUpdateOneRequiredWithoutPoliciesNestedInput = {
    create?: XOR<PlanCreateWithoutPoliciesInput, PlanUncheckedCreateWithoutPoliciesInput>
    connectOrCreate?: PlanCreateOrConnectWithoutPoliciesInput
    upsert?: PlanUpsertWithoutPoliciesInput
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutPoliciesInput, PlanUpdateWithoutPoliciesInput>, PlanUncheckedUpdateWithoutPoliciesInput>
  }

  export type InsuredUpdateManyWithoutPolicyNestedInput = {
    create?: XOR<InsuredCreateWithoutPolicyInput, InsuredUncheckedCreateWithoutPolicyInput> | InsuredCreateWithoutPolicyInput[] | InsuredUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: InsuredCreateOrConnectWithoutPolicyInput | InsuredCreateOrConnectWithoutPolicyInput[]
    upsert?: InsuredUpsertWithWhereUniqueWithoutPolicyInput | InsuredUpsertWithWhereUniqueWithoutPolicyInput[]
    createMany?: InsuredCreateManyPolicyInputEnvelope
    set?: InsuredWhereUniqueInput | InsuredWhereUniqueInput[]
    disconnect?: InsuredWhereUniqueInput | InsuredWhereUniqueInput[]
    delete?: InsuredWhereUniqueInput | InsuredWhereUniqueInput[]
    connect?: InsuredWhereUniqueInput | InsuredWhereUniqueInput[]
    update?: InsuredUpdateWithWhereUniqueWithoutPolicyInput | InsuredUpdateWithWhereUniqueWithoutPolicyInput[]
    updateMany?: InsuredUpdateManyWithWhereWithoutPolicyInput | InsuredUpdateManyWithWhereWithoutPolicyInput[]
    deleteMany?: InsuredScalarWhereInput | InsuredScalarWhereInput[]
  }

  export type InvoiceUpdateManyWithoutPolicyNestedInput = {
    create?: XOR<InvoiceCreateWithoutPolicyInput, InvoiceUncheckedCreateWithoutPolicyInput> | InvoiceCreateWithoutPolicyInput[] | InvoiceUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutPolicyInput | InvoiceCreateOrConnectWithoutPolicyInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutPolicyInput | InvoiceUpsertWithWhereUniqueWithoutPolicyInput[]
    createMany?: InvoiceCreateManyPolicyInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutPolicyInput | InvoiceUpdateWithWhereUniqueWithoutPolicyInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutPolicyInput | InvoiceUpdateManyWithWhereWithoutPolicyInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type InsuredUncheckedUpdateManyWithoutPolicyNestedInput = {
    create?: XOR<InsuredCreateWithoutPolicyInput, InsuredUncheckedCreateWithoutPolicyInput> | InsuredCreateWithoutPolicyInput[] | InsuredUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: InsuredCreateOrConnectWithoutPolicyInput | InsuredCreateOrConnectWithoutPolicyInput[]
    upsert?: InsuredUpsertWithWhereUniqueWithoutPolicyInput | InsuredUpsertWithWhereUniqueWithoutPolicyInput[]
    createMany?: InsuredCreateManyPolicyInputEnvelope
    set?: InsuredWhereUniqueInput | InsuredWhereUniqueInput[]
    disconnect?: InsuredWhereUniqueInput | InsuredWhereUniqueInput[]
    delete?: InsuredWhereUniqueInput | InsuredWhereUniqueInput[]
    connect?: InsuredWhereUniqueInput | InsuredWhereUniqueInput[]
    update?: InsuredUpdateWithWhereUniqueWithoutPolicyInput | InsuredUpdateWithWhereUniqueWithoutPolicyInput[]
    updateMany?: InsuredUpdateManyWithWhereWithoutPolicyInput | InsuredUpdateManyWithWhereWithoutPolicyInput[]
    deleteMany?: InsuredScalarWhereInput | InsuredScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutPolicyNestedInput = {
    create?: XOR<InvoiceCreateWithoutPolicyInput, InvoiceUncheckedCreateWithoutPolicyInput> | InvoiceCreateWithoutPolicyInput[] | InvoiceUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutPolicyInput | InvoiceCreateOrConnectWithoutPolicyInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutPolicyInput | InvoiceUpsertWithWhereUniqueWithoutPolicyInput[]
    createMany?: InvoiceCreateManyPolicyInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutPolicyInput | InvoiceUpdateWithWhereUniqueWithoutPolicyInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutPolicyInput | InvoiceUpdateManyWithWhereWithoutPolicyInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type PlanCreateNestedOneWithoutInsuredsInput = {
    create?: XOR<PlanCreateWithoutInsuredsInput, PlanUncheckedCreateWithoutInsuredsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutInsuredsInput
    connect?: PlanWhereUniqueInput
  }

  export type PolicyCreateNestedOneWithoutInsuredsInput = {
    create?: XOR<PolicyCreateWithoutInsuredsInput, PolicyUncheckedCreateWithoutInsuredsInput>
    connectOrCreate?: PolicyCreateOrConnectWithoutInsuredsInput
    connect?: PolicyWhereUniqueInput
  }

  export type AuthorizationCreateNestedManyWithoutInsuredInput = {
    create?: XOR<AuthorizationCreateWithoutInsuredInput, AuthorizationUncheckedCreateWithoutInsuredInput> | AuthorizationCreateWithoutInsuredInput[] | AuthorizationUncheckedCreateWithoutInsuredInput[]
    connectOrCreate?: AuthorizationCreateOrConnectWithoutInsuredInput | AuthorizationCreateOrConnectWithoutInsuredInput[]
    createMany?: AuthorizationCreateManyInsuredInputEnvelope
    connect?: AuthorizationWhereUniqueInput | AuthorizationWhereUniqueInput[]
  }

  export type ClaimCreateNestedManyWithoutInsuredInput = {
    create?: XOR<ClaimCreateWithoutInsuredInput, ClaimUncheckedCreateWithoutInsuredInput> | ClaimCreateWithoutInsuredInput[] | ClaimUncheckedCreateWithoutInsuredInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutInsuredInput | ClaimCreateOrConnectWithoutInsuredInput[]
    createMany?: ClaimCreateManyInsuredInputEnvelope
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
  }

  export type MedicalServiceCreateNestedManyWithoutInsuredInput = {
    create?: XOR<MedicalServiceCreateWithoutInsuredInput, MedicalServiceUncheckedCreateWithoutInsuredInput> | MedicalServiceCreateWithoutInsuredInput[] | MedicalServiceUncheckedCreateWithoutInsuredInput[]
    connectOrCreate?: MedicalServiceCreateOrConnectWithoutInsuredInput | MedicalServiceCreateOrConnectWithoutInsuredInput[]
    createMany?: MedicalServiceCreateManyInsuredInputEnvelope
    connect?: MedicalServiceWhereUniqueInput | MedicalServiceWhereUniqueInput[]
  }

  export type AuthorizationUncheckedCreateNestedManyWithoutInsuredInput = {
    create?: XOR<AuthorizationCreateWithoutInsuredInput, AuthorizationUncheckedCreateWithoutInsuredInput> | AuthorizationCreateWithoutInsuredInput[] | AuthorizationUncheckedCreateWithoutInsuredInput[]
    connectOrCreate?: AuthorizationCreateOrConnectWithoutInsuredInput | AuthorizationCreateOrConnectWithoutInsuredInput[]
    createMany?: AuthorizationCreateManyInsuredInputEnvelope
    connect?: AuthorizationWhereUniqueInput | AuthorizationWhereUniqueInput[]
  }

  export type ClaimUncheckedCreateNestedManyWithoutInsuredInput = {
    create?: XOR<ClaimCreateWithoutInsuredInput, ClaimUncheckedCreateWithoutInsuredInput> | ClaimCreateWithoutInsuredInput[] | ClaimUncheckedCreateWithoutInsuredInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutInsuredInput | ClaimCreateOrConnectWithoutInsuredInput[]
    createMany?: ClaimCreateManyInsuredInputEnvelope
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
  }

  export type MedicalServiceUncheckedCreateNestedManyWithoutInsuredInput = {
    create?: XOR<MedicalServiceCreateWithoutInsuredInput, MedicalServiceUncheckedCreateWithoutInsuredInput> | MedicalServiceCreateWithoutInsuredInput[] | MedicalServiceUncheckedCreateWithoutInsuredInput[]
    connectOrCreate?: MedicalServiceCreateOrConnectWithoutInsuredInput | MedicalServiceCreateOrConnectWithoutInsuredInput[]
    createMany?: MedicalServiceCreateManyInsuredInputEnvelope
    connect?: MedicalServiceWhereUniqueInput | MedicalServiceWhereUniqueInput[]
  }

  export type EnumInsuredStatusFieldUpdateOperationsInput = {
    set?: $Enums.InsuredStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PlanUpdateOneRequiredWithoutInsuredsNestedInput = {
    create?: XOR<PlanCreateWithoutInsuredsInput, PlanUncheckedCreateWithoutInsuredsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutInsuredsInput
    upsert?: PlanUpsertWithoutInsuredsInput
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutInsuredsInput, PlanUpdateWithoutInsuredsInput>, PlanUncheckedUpdateWithoutInsuredsInput>
  }

  export type PolicyUpdateOneWithoutInsuredsNestedInput = {
    create?: XOR<PolicyCreateWithoutInsuredsInput, PolicyUncheckedCreateWithoutInsuredsInput>
    connectOrCreate?: PolicyCreateOrConnectWithoutInsuredsInput
    upsert?: PolicyUpsertWithoutInsuredsInput
    disconnect?: PolicyWhereInput | boolean
    delete?: PolicyWhereInput | boolean
    connect?: PolicyWhereUniqueInput
    update?: XOR<XOR<PolicyUpdateToOneWithWhereWithoutInsuredsInput, PolicyUpdateWithoutInsuredsInput>, PolicyUncheckedUpdateWithoutInsuredsInput>
  }

  export type AuthorizationUpdateManyWithoutInsuredNestedInput = {
    create?: XOR<AuthorizationCreateWithoutInsuredInput, AuthorizationUncheckedCreateWithoutInsuredInput> | AuthorizationCreateWithoutInsuredInput[] | AuthorizationUncheckedCreateWithoutInsuredInput[]
    connectOrCreate?: AuthorizationCreateOrConnectWithoutInsuredInput | AuthorizationCreateOrConnectWithoutInsuredInput[]
    upsert?: AuthorizationUpsertWithWhereUniqueWithoutInsuredInput | AuthorizationUpsertWithWhereUniqueWithoutInsuredInput[]
    createMany?: AuthorizationCreateManyInsuredInputEnvelope
    set?: AuthorizationWhereUniqueInput | AuthorizationWhereUniqueInput[]
    disconnect?: AuthorizationWhereUniqueInput | AuthorizationWhereUniqueInput[]
    delete?: AuthorizationWhereUniqueInput | AuthorizationWhereUniqueInput[]
    connect?: AuthorizationWhereUniqueInput | AuthorizationWhereUniqueInput[]
    update?: AuthorizationUpdateWithWhereUniqueWithoutInsuredInput | AuthorizationUpdateWithWhereUniqueWithoutInsuredInput[]
    updateMany?: AuthorizationUpdateManyWithWhereWithoutInsuredInput | AuthorizationUpdateManyWithWhereWithoutInsuredInput[]
    deleteMany?: AuthorizationScalarWhereInput | AuthorizationScalarWhereInput[]
  }

  export type ClaimUpdateManyWithoutInsuredNestedInput = {
    create?: XOR<ClaimCreateWithoutInsuredInput, ClaimUncheckedCreateWithoutInsuredInput> | ClaimCreateWithoutInsuredInput[] | ClaimUncheckedCreateWithoutInsuredInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutInsuredInput | ClaimCreateOrConnectWithoutInsuredInput[]
    upsert?: ClaimUpsertWithWhereUniqueWithoutInsuredInput | ClaimUpsertWithWhereUniqueWithoutInsuredInput[]
    createMany?: ClaimCreateManyInsuredInputEnvelope
    set?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    disconnect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    delete?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    update?: ClaimUpdateWithWhereUniqueWithoutInsuredInput | ClaimUpdateWithWhereUniqueWithoutInsuredInput[]
    updateMany?: ClaimUpdateManyWithWhereWithoutInsuredInput | ClaimUpdateManyWithWhereWithoutInsuredInput[]
    deleteMany?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
  }

  export type MedicalServiceUpdateManyWithoutInsuredNestedInput = {
    create?: XOR<MedicalServiceCreateWithoutInsuredInput, MedicalServiceUncheckedCreateWithoutInsuredInput> | MedicalServiceCreateWithoutInsuredInput[] | MedicalServiceUncheckedCreateWithoutInsuredInput[]
    connectOrCreate?: MedicalServiceCreateOrConnectWithoutInsuredInput | MedicalServiceCreateOrConnectWithoutInsuredInput[]
    upsert?: MedicalServiceUpsertWithWhereUniqueWithoutInsuredInput | MedicalServiceUpsertWithWhereUniqueWithoutInsuredInput[]
    createMany?: MedicalServiceCreateManyInsuredInputEnvelope
    set?: MedicalServiceWhereUniqueInput | MedicalServiceWhereUniqueInput[]
    disconnect?: MedicalServiceWhereUniqueInput | MedicalServiceWhereUniqueInput[]
    delete?: MedicalServiceWhereUniqueInput | MedicalServiceWhereUniqueInput[]
    connect?: MedicalServiceWhereUniqueInput | MedicalServiceWhereUniqueInput[]
    update?: MedicalServiceUpdateWithWhereUniqueWithoutInsuredInput | MedicalServiceUpdateWithWhereUniqueWithoutInsuredInput[]
    updateMany?: MedicalServiceUpdateManyWithWhereWithoutInsuredInput | MedicalServiceUpdateManyWithWhereWithoutInsuredInput[]
    deleteMany?: MedicalServiceScalarWhereInput | MedicalServiceScalarWhereInput[]
  }

  export type AuthorizationUncheckedUpdateManyWithoutInsuredNestedInput = {
    create?: XOR<AuthorizationCreateWithoutInsuredInput, AuthorizationUncheckedCreateWithoutInsuredInput> | AuthorizationCreateWithoutInsuredInput[] | AuthorizationUncheckedCreateWithoutInsuredInput[]
    connectOrCreate?: AuthorizationCreateOrConnectWithoutInsuredInput | AuthorizationCreateOrConnectWithoutInsuredInput[]
    upsert?: AuthorizationUpsertWithWhereUniqueWithoutInsuredInput | AuthorizationUpsertWithWhereUniqueWithoutInsuredInput[]
    createMany?: AuthorizationCreateManyInsuredInputEnvelope
    set?: AuthorizationWhereUniqueInput | AuthorizationWhereUniqueInput[]
    disconnect?: AuthorizationWhereUniqueInput | AuthorizationWhereUniqueInput[]
    delete?: AuthorizationWhereUniqueInput | AuthorizationWhereUniqueInput[]
    connect?: AuthorizationWhereUniqueInput | AuthorizationWhereUniqueInput[]
    update?: AuthorizationUpdateWithWhereUniqueWithoutInsuredInput | AuthorizationUpdateWithWhereUniqueWithoutInsuredInput[]
    updateMany?: AuthorizationUpdateManyWithWhereWithoutInsuredInput | AuthorizationUpdateManyWithWhereWithoutInsuredInput[]
    deleteMany?: AuthorizationScalarWhereInput | AuthorizationScalarWhereInput[]
  }

  export type ClaimUncheckedUpdateManyWithoutInsuredNestedInput = {
    create?: XOR<ClaimCreateWithoutInsuredInput, ClaimUncheckedCreateWithoutInsuredInput> | ClaimCreateWithoutInsuredInput[] | ClaimUncheckedCreateWithoutInsuredInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutInsuredInput | ClaimCreateOrConnectWithoutInsuredInput[]
    upsert?: ClaimUpsertWithWhereUniqueWithoutInsuredInput | ClaimUpsertWithWhereUniqueWithoutInsuredInput[]
    createMany?: ClaimCreateManyInsuredInputEnvelope
    set?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    disconnect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    delete?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    update?: ClaimUpdateWithWhereUniqueWithoutInsuredInput | ClaimUpdateWithWhereUniqueWithoutInsuredInput[]
    updateMany?: ClaimUpdateManyWithWhereWithoutInsuredInput | ClaimUpdateManyWithWhereWithoutInsuredInput[]
    deleteMany?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
  }

  export type MedicalServiceUncheckedUpdateManyWithoutInsuredNestedInput = {
    create?: XOR<MedicalServiceCreateWithoutInsuredInput, MedicalServiceUncheckedCreateWithoutInsuredInput> | MedicalServiceCreateWithoutInsuredInput[] | MedicalServiceUncheckedCreateWithoutInsuredInput[]
    connectOrCreate?: MedicalServiceCreateOrConnectWithoutInsuredInput | MedicalServiceCreateOrConnectWithoutInsuredInput[]
    upsert?: MedicalServiceUpsertWithWhereUniqueWithoutInsuredInput | MedicalServiceUpsertWithWhereUniqueWithoutInsuredInput[]
    createMany?: MedicalServiceCreateManyInsuredInputEnvelope
    set?: MedicalServiceWhereUniqueInput | MedicalServiceWhereUniqueInput[]
    disconnect?: MedicalServiceWhereUniqueInput | MedicalServiceWhereUniqueInput[]
    delete?: MedicalServiceWhereUniqueInput | MedicalServiceWhereUniqueInput[]
    connect?: MedicalServiceWhereUniqueInput | MedicalServiceWhereUniqueInput[]
    update?: MedicalServiceUpdateWithWhereUniqueWithoutInsuredInput | MedicalServiceUpdateWithWhereUniqueWithoutInsuredInput[]
    updateMany?: MedicalServiceUpdateManyWithWhereWithoutInsuredInput | MedicalServiceUpdateManyWithWhereWithoutInsuredInput[]
    deleteMany?: MedicalServiceScalarWhereInput | MedicalServiceScalarWhereInput[]
  }

  export type InsuredCreateNestedOneWithoutAuthorizationsInput = {
    create?: XOR<InsuredCreateWithoutAuthorizationsInput, InsuredUncheckedCreateWithoutAuthorizationsInput>
    connectOrCreate?: InsuredCreateOrConnectWithoutAuthorizationsInput
    connect?: InsuredWhereUniqueInput
  }

  export type ProviderCreateNestedOneWithoutAuthorizationsInput = {
    create?: XOR<ProviderCreateWithoutAuthorizationsInput, ProviderUncheckedCreateWithoutAuthorizationsInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutAuthorizationsInput
    connect?: ProviderWhereUniqueInput
  }

  export type MedicalServiceCreateNestedManyWithoutAuthorizationInput = {
    create?: XOR<MedicalServiceCreateWithoutAuthorizationInput, MedicalServiceUncheckedCreateWithoutAuthorizationInput> | MedicalServiceCreateWithoutAuthorizationInput[] | MedicalServiceUncheckedCreateWithoutAuthorizationInput[]
    connectOrCreate?: MedicalServiceCreateOrConnectWithoutAuthorizationInput | MedicalServiceCreateOrConnectWithoutAuthorizationInput[]
    createMany?: MedicalServiceCreateManyAuthorizationInputEnvelope
    connect?: MedicalServiceWhereUniqueInput | MedicalServiceWhereUniqueInput[]
  }

  export type MedicalServiceUncheckedCreateNestedManyWithoutAuthorizationInput = {
    create?: XOR<MedicalServiceCreateWithoutAuthorizationInput, MedicalServiceUncheckedCreateWithoutAuthorizationInput> | MedicalServiceCreateWithoutAuthorizationInput[] | MedicalServiceUncheckedCreateWithoutAuthorizationInput[]
    connectOrCreate?: MedicalServiceCreateOrConnectWithoutAuthorizationInput | MedicalServiceCreateOrConnectWithoutAuthorizationInput[]
    createMany?: MedicalServiceCreateManyAuthorizationInputEnvelope
    connect?: MedicalServiceWhereUniqueInput | MedicalServiceWhereUniqueInput[]
  }

  export type EnumAuthorizationStatusFieldUpdateOperationsInput = {
    set?: $Enums.AuthorizationStatus
  }

  export type InsuredUpdateOneRequiredWithoutAuthorizationsNestedInput = {
    create?: XOR<InsuredCreateWithoutAuthorizationsInput, InsuredUncheckedCreateWithoutAuthorizationsInput>
    connectOrCreate?: InsuredCreateOrConnectWithoutAuthorizationsInput
    upsert?: InsuredUpsertWithoutAuthorizationsInput
    connect?: InsuredWhereUniqueInput
    update?: XOR<XOR<InsuredUpdateToOneWithWhereWithoutAuthorizationsInput, InsuredUpdateWithoutAuthorizationsInput>, InsuredUncheckedUpdateWithoutAuthorizationsInput>
  }

  export type ProviderUpdateOneRequiredWithoutAuthorizationsNestedInput = {
    create?: XOR<ProviderCreateWithoutAuthorizationsInput, ProviderUncheckedCreateWithoutAuthorizationsInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutAuthorizationsInput
    upsert?: ProviderUpsertWithoutAuthorizationsInput
    connect?: ProviderWhereUniqueInput
    update?: XOR<XOR<ProviderUpdateToOneWithWhereWithoutAuthorizationsInput, ProviderUpdateWithoutAuthorizationsInput>, ProviderUncheckedUpdateWithoutAuthorizationsInput>
  }

  export type MedicalServiceUpdateManyWithoutAuthorizationNestedInput = {
    create?: XOR<MedicalServiceCreateWithoutAuthorizationInput, MedicalServiceUncheckedCreateWithoutAuthorizationInput> | MedicalServiceCreateWithoutAuthorizationInput[] | MedicalServiceUncheckedCreateWithoutAuthorizationInput[]
    connectOrCreate?: MedicalServiceCreateOrConnectWithoutAuthorizationInput | MedicalServiceCreateOrConnectWithoutAuthorizationInput[]
    upsert?: MedicalServiceUpsertWithWhereUniqueWithoutAuthorizationInput | MedicalServiceUpsertWithWhereUniqueWithoutAuthorizationInput[]
    createMany?: MedicalServiceCreateManyAuthorizationInputEnvelope
    set?: MedicalServiceWhereUniqueInput | MedicalServiceWhereUniqueInput[]
    disconnect?: MedicalServiceWhereUniqueInput | MedicalServiceWhereUniqueInput[]
    delete?: MedicalServiceWhereUniqueInput | MedicalServiceWhereUniqueInput[]
    connect?: MedicalServiceWhereUniqueInput | MedicalServiceWhereUniqueInput[]
    update?: MedicalServiceUpdateWithWhereUniqueWithoutAuthorizationInput | MedicalServiceUpdateWithWhereUniqueWithoutAuthorizationInput[]
    updateMany?: MedicalServiceUpdateManyWithWhereWithoutAuthorizationInput | MedicalServiceUpdateManyWithWhereWithoutAuthorizationInput[]
    deleteMany?: MedicalServiceScalarWhereInput | MedicalServiceScalarWhereInput[]
  }

  export type MedicalServiceUncheckedUpdateManyWithoutAuthorizationNestedInput = {
    create?: XOR<MedicalServiceCreateWithoutAuthorizationInput, MedicalServiceUncheckedCreateWithoutAuthorizationInput> | MedicalServiceCreateWithoutAuthorizationInput[] | MedicalServiceUncheckedCreateWithoutAuthorizationInput[]
    connectOrCreate?: MedicalServiceCreateOrConnectWithoutAuthorizationInput | MedicalServiceCreateOrConnectWithoutAuthorizationInput[]
    upsert?: MedicalServiceUpsertWithWhereUniqueWithoutAuthorizationInput | MedicalServiceUpsertWithWhereUniqueWithoutAuthorizationInput[]
    createMany?: MedicalServiceCreateManyAuthorizationInputEnvelope
    set?: MedicalServiceWhereUniqueInput | MedicalServiceWhereUniqueInput[]
    disconnect?: MedicalServiceWhereUniqueInput | MedicalServiceWhereUniqueInput[]
    delete?: MedicalServiceWhereUniqueInput | MedicalServiceWhereUniqueInput[]
    connect?: MedicalServiceWhereUniqueInput | MedicalServiceWhereUniqueInput[]
    update?: MedicalServiceUpdateWithWhereUniqueWithoutAuthorizationInput | MedicalServiceUpdateWithWhereUniqueWithoutAuthorizationInput[]
    updateMany?: MedicalServiceUpdateManyWithWhereWithoutAuthorizationInput | MedicalServiceUpdateManyWithWhereWithoutAuthorizationInput[]
    deleteMany?: MedicalServiceScalarWhereInput | MedicalServiceScalarWhereInput[]
  }

  export type InsuredCreateNestedOneWithoutClaimsInput = {
    create?: XOR<InsuredCreateWithoutClaimsInput, InsuredUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: InsuredCreateOrConnectWithoutClaimsInput
    connect?: InsuredWhereUniqueInput
  }

  export type ProviderCreateNestedOneWithoutClaimsInput = {
    create?: XOR<ProviderCreateWithoutClaimsInput, ProviderUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutClaimsInput
    connect?: ProviderWhereUniqueInput
  }

  export type EnumClaimStatusFieldUpdateOperationsInput = {
    set?: $Enums.ClaimStatus
  }

  export type InsuredUpdateOneRequiredWithoutClaimsNestedInput = {
    create?: XOR<InsuredCreateWithoutClaimsInput, InsuredUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: InsuredCreateOrConnectWithoutClaimsInput
    upsert?: InsuredUpsertWithoutClaimsInput
    connect?: InsuredWhereUniqueInput
    update?: XOR<XOR<InsuredUpdateToOneWithWhereWithoutClaimsInput, InsuredUpdateWithoutClaimsInput>, InsuredUncheckedUpdateWithoutClaimsInput>
  }

  export type ProviderUpdateOneRequiredWithoutClaimsNestedInput = {
    create?: XOR<ProviderCreateWithoutClaimsInput, ProviderUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutClaimsInput
    upsert?: ProviderUpsertWithoutClaimsInput
    connect?: ProviderWhereUniqueInput
    update?: XOR<XOR<ProviderUpdateToOneWithWhereWithoutClaimsInput, ProviderUpdateWithoutClaimsInput>, ProviderUncheckedUpdateWithoutClaimsInput>
  }

  export type InsuredCreateNestedOneWithoutServicesInput = {
    create?: XOR<InsuredCreateWithoutServicesInput, InsuredUncheckedCreateWithoutServicesInput>
    connectOrCreate?: InsuredCreateOrConnectWithoutServicesInput
    connect?: InsuredWhereUniqueInput
  }

  export type ProviderCreateNestedOneWithoutServicesInput = {
    create?: XOR<ProviderCreateWithoutServicesInput, ProviderUncheckedCreateWithoutServicesInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutServicesInput
    connect?: ProviderWhereUniqueInput
  }

  export type AuthorizationCreateNestedOneWithoutServicesInput = {
    create?: XOR<AuthorizationCreateWithoutServicesInput, AuthorizationUncheckedCreateWithoutServicesInput>
    connectOrCreate?: AuthorizationCreateOrConnectWithoutServicesInput
    connect?: AuthorizationWhereUniqueInput
  }

  export type ProviderPaymentCreateNestedOneWithoutServiceInput = {
    create?: XOR<ProviderPaymentCreateWithoutServiceInput, ProviderPaymentUncheckedCreateWithoutServiceInput>
    connectOrCreate?: ProviderPaymentCreateOrConnectWithoutServiceInput
    connect?: ProviderPaymentWhereUniqueInput
  }

  export type ProviderPaymentUncheckedCreateNestedOneWithoutServiceInput = {
    create?: XOR<ProviderPaymentCreateWithoutServiceInput, ProviderPaymentUncheckedCreateWithoutServiceInput>
    connectOrCreate?: ProviderPaymentCreateOrConnectWithoutServiceInput
    connect?: ProviderPaymentWhereUniqueInput
  }

  export type EnumServiceStatusFieldUpdateOperationsInput = {
    set?: $Enums.ServiceStatus
  }

  export type InsuredUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<InsuredCreateWithoutServicesInput, InsuredUncheckedCreateWithoutServicesInput>
    connectOrCreate?: InsuredCreateOrConnectWithoutServicesInput
    upsert?: InsuredUpsertWithoutServicesInput
    connect?: InsuredWhereUniqueInput
    update?: XOR<XOR<InsuredUpdateToOneWithWhereWithoutServicesInput, InsuredUpdateWithoutServicesInput>, InsuredUncheckedUpdateWithoutServicesInput>
  }

  export type ProviderUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<ProviderCreateWithoutServicesInput, ProviderUncheckedCreateWithoutServicesInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutServicesInput
    upsert?: ProviderUpsertWithoutServicesInput
    connect?: ProviderWhereUniqueInput
    update?: XOR<XOR<ProviderUpdateToOneWithWhereWithoutServicesInput, ProviderUpdateWithoutServicesInput>, ProviderUncheckedUpdateWithoutServicesInput>
  }

  export type AuthorizationUpdateOneWithoutServicesNestedInput = {
    create?: XOR<AuthorizationCreateWithoutServicesInput, AuthorizationUncheckedCreateWithoutServicesInput>
    connectOrCreate?: AuthorizationCreateOrConnectWithoutServicesInput
    upsert?: AuthorizationUpsertWithoutServicesInput
    disconnect?: AuthorizationWhereInput | boolean
    delete?: AuthorizationWhereInput | boolean
    connect?: AuthorizationWhereUniqueInput
    update?: XOR<XOR<AuthorizationUpdateToOneWithWhereWithoutServicesInput, AuthorizationUpdateWithoutServicesInput>, AuthorizationUncheckedUpdateWithoutServicesInput>
  }

  export type ProviderPaymentUpdateOneWithoutServiceNestedInput = {
    create?: XOR<ProviderPaymentCreateWithoutServiceInput, ProviderPaymentUncheckedCreateWithoutServiceInput>
    connectOrCreate?: ProviderPaymentCreateOrConnectWithoutServiceInput
    upsert?: ProviderPaymentUpsertWithoutServiceInput
    disconnect?: ProviderPaymentWhereInput | boolean
    delete?: ProviderPaymentWhereInput | boolean
    connect?: ProviderPaymentWhereUniqueInput
    update?: XOR<XOR<ProviderPaymentUpdateToOneWithWhereWithoutServiceInput, ProviderPaymentUpdateWithoutServiceInput>, ProviderPaymentUncheckedUpdateWithoutServiceInput>
  }

  export type ProviderPaymentUncheckedUpdateOneWithoutServiceNestedInput = {
    create?: XOR<ProviderPaymentCreateWithoutServiceInput, ProviderPaymentUncheckedCreateWithoutServiceInput>
    connectOrCreate?: ProviderPaymentCreateOrConnectWithoutServiceInput
    upsert?: ProviderPaymentUpsertWithoutServiceInput
    disconnect?: ProviderPaymentWhereInput | boolean
    delete?: ProviderPaymentWhereInput | boolean
    connect?: ProviderPaymentWhereUniqueInput
    update?: XOR<XOR<ProviderPaymentUpdateToOneWithWhereWithoutServiceInput, ProviderPaymentUpdateWithoutServiceInput>, ProviderPaymentUncheckedUpdateWithoutServiceInput>
  }

  export type ProviderCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<ProviderCreateWithoutPaymentsInput, ProviderUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutPaymentsInput
    connect?: ProviderWhereUniqueInput
  }

  export type MedicalServiceCreateNestedOneWithoutPaymentInput = {
    create?: XOR<MedicalServiceCreateWithoutPaymentInput, MedicalServiceUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: MedicalServiceCreateOrConnectWithoutPaymentInput
    connect?: MedicalServiceWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type ProviderUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<ProviderCreateWithoutPaymentsInput, ProviderUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutPaymentsInput
    upsert?: ProviderUpsertWithoutPaymentsInput
    connect?: ProviderWhereUniqueInput
    update?: XOR<XOR<ProviderUpdateToOneWithWhereWithoutPaymentsInput, ProviderUpdateWithoutPaymentsInput>, ProviderUncheckedUpdateWithoutPaymentsInput>
  }

  export type MedicalServiceUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<MedicalServiceCreateWithoutPaymentInput, MedicalServiceUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: MedicalServiceCreateOrConnectWithoutPaymentInput
    upsert?: MedicalServiceUpsertWithoutPaymentInput
    connect?: MedicalServiceWhereUniqueInput
    update?: XOR<XOR<MedicalServiceUpdateToOneWithWhereWithoutPaymentInput, MedicalServiceUpdateWithoutPaymentInput>, MedicalServiceUncheckedUpdateWithoutPaymentInput>
  }

  export type PolicyCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<PolicyCreateWithoutInvoicesInput, PolicyUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: PolicyCreateOrConnectWithoutInvoicesInput
    connect?: PolicyWhereUniqueInput
  }

  export type EnumInvoiceStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvoiceStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PolicyUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<PolicyCreateWithoutInvoicesInput, PolicyUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: PolicyCreateOrConnectWithoutInvoicesInput
    upsert?: PolicyUpsertWithoutInvoicesInput
    connect?: PolicyWhereUniqueInput
    update?: XOR<XOR<PolicyUpdateToOneWithWhereWithoutInvoicesInput, PolicyUpdateWithoutInvoicesInput>, PolicyUncheckedUpdateWithoutInvoicesInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumPolicyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PolicyStatus | EnumPolicyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PolicyStatus[] | ListEnumPolicyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PolicyStatus[] | ListEnumPolicyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPolicyStatusFilter<$PrismaModel> | $Enums.PolicyStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumPolicyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PolicyStatus | EnumPolicyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PolicyStatus[] | ListEnumPolicyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PolicyStatus[] | ListEnumPolicyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPolicyStatusWithAggregatesFilter<$PrismaModel> | $Enums.PolicyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPolicyStatusFilter<$PrismaModel>
    _max?: NestedEnumPolicyStatusFilter<$PrismaModel>
  }

  export type NestedEnumInsuredStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InsuredStatus | EnumInsuredStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InsuredStatus[] | ListEnumInsuredStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InsuredStatus[] | ListEnumInsuredStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInsuredStatusFilter<$PrismaModel> | $Enums.InsuredStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumInsuredStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InsuredStatus | EnumInsuredStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InsuredStatus[] | ListEnumInsuredStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InsuredStatus[] | ListEnumInsuredStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInsuredStatusWithAggregatesFilter<$PrismaModel> | $Enums.InsuredStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInsuredStatusFilter<$PrismaModel>
    _max?: NestedEnumInsuredStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumAuthorizationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthorizationStatus | EnumAuthorizationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AuthorizationStatus[] | ListEnumAuthorizationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthorizationStatus[] | ListEnumAuthorizationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthorizationStatusFilter<$PrismaModel> | $Enums.AuthorizationStatus
  }

  export type NestedEnumAuthorizationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthorizationStatus | EnumAuthorizationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AuthorizationStatus[] | ListEnumAuthorizationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthorizationStatus[] | ListEnumAuthorizationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthorizationStatusWithAggregatesFilter<$PrismaModel> | $Enums.AuthorizationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthorizationStatusFilter<$PrismaModel>
    _max?: NestedEnumAuthorizationStatusFilter<$PrismaModel>
  }

  export type NestedEnumClaimStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ClaimStatus | EnumClaimStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ClaimStatus[] | ListEnumClaimStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClaimStatus[] | ListEnumClaimStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumClaimStatusFilter<$PrismaModel> | $Enums.ClaimStatus
  }

  export type NestedEnumClaimStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClaimStatus | EnumClaimStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ClaimStatus[] | ListEnumClaimStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClaimStatus[] | ListEnumClaimStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumClaimStatusWithAggregatesFilter<$PrismaModel> | $Enums.ClaimStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClaimStatusFilter<$PrismaModel>
    _max?: NestedEnumClaimStatusFilter<$PrismaModel>
  }

  export type NestedEnumServiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceStatus | EnumServiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceStatusFilter<$PrismaModel> | $Enums.ServiceStatus
  }

  export type NestedEnumServiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceStatus | EnumServiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.ServiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceStatusFilter<$PrismaModel>
    _max?: NestedEnumServiceStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvoiceStatusFilter<$PrismaModel>
    _max?: NestedEnumInvoiceStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    type: string
    title?: string | null
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    title?: string | null
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringNullableFilter<"Notification"> | string | null
    type?: StringFilter<"Notification"> | string
    title?: StringNullableFilter<"Notification"> | string | null
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type InsuredCreateWithoutPlanInput = {
    id?: string
    name: string
    nationalId: string
    status?: $Enums.InsuredStatus
    startDate: Date | string
    birthDate?: Date | string | null
    phone?: string | null
    email?: string | null
    dependents?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    policy?: PolicyCreateNestedOneWithoutInsuredsInput
    authorizations?: AuthorizationCreateNestedManyWithoutInsuredInput
    claims?: ClaimCreateNestedManyWithoutInsuredInput
    services?: MedicalServiceCreateNestedManyWithoutInsuredInput
  }

  export type InsuredUncheckedCreateWithoutPlanInput = {
    id?: string
    name: string
    nationalId: string
    policyId?: string | null
    status?: $Enums.InsuredStatus
    startDate: Date | string
    birthDate?: Date | string | null
    phone?: string | null
    email?: string | null
    dependents?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authorizations?: AuthorizationUncheckedCreateNestedManyWithoutInsuredInput
    claims?: ClaimUncheckedCreateNestedManyWithoutInsuredInput
    services?: MedicalServiceUncheckedCreateNestedManyWithoutInsuredInput
  }

  export type InsuredCreateOrConnectWithoutPlanInput = {
    where: InsuredWhereUniqueInput
    create: XOR<InsuredCreateWithoutPlanInput, InsuredUncheckedCreateWithoutPlanInput>
  }

  export type InsuredCreateManyPlanInputEnvelope = {
    data: InsuredCreateManyPlanInput | InsuredCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type PolicyCreateWithoutPlanInput = {
    id: string
    company: string
    startDate: Date | string
    endDate: Date | string
    monthlyPremium: Decimal | DecimalJsLike | number | string
    insuredCount?: number
    status?: $Enums.PolicyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    insureds?: InsuredCreateNestedManyWithoutPolicyInput
    invoices?: InvoiceCreateNestedManyWithoutPolicyInput
  }

  export type PolicyUncheckedCreateWithoutPlanInput = {
    id: string
    company: string
    startDate: Date | string
    endDate: Date | string
    monthlyPremium: Decimal | DecimalJsLike | number | string
    insuredCount?: number
    status?: $Enums.PolicyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    insureds?: InsuredUncheckedCreateNestedManyWithoutPolicyInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutPolicyInput
  }

  export type PolicyCreateOrConnectWithoutPlanInput = {
    where: PolicyWhereUniqueInput
    create: XOR<PolicyCreateWithoutPlanInput, PolicyUncheckedCreateWithoutPlanInput>
  }

  export type PolicyCreateManyPlanInputEnvelope = {
    data: PolicyCreateManyPlanInput | PolicyCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type InsuredUpsertWithWhereUniqueWithoutPlanInput = {
    where: InsuredWhereUniqueInput
    update: XOR<InsuredUpdateWithoutPlanInput, InsuredUncheckedUpdateWithoutPlanInput>
    create: XOR<InsuredCreateWithoutPlanInput, InsuredUncheckedCreateWithoutPlanInput>
  }

  export type InsuredUpdateWithWhereUniqueWithoutPlanInput = {
    where: InsuredWhereUniqueInput
    data: XOR<InsuredUpdateWithoutPlanInput, InsuredUncheckedUpdateWithoutPlanInput>
  }

  export type InsuredUpdateManyWithWhereWithoutPlanInput = {
    where: InsuredScalarWhereInput
    data: XOR<InsuredUpdateManyMutationInput, InsuredUncheckedUpdateManyWithoutPlanInput>
  }

  export type InsuredScalarWhereInput = {
    AND?: InsuredScalarWhereInput | InsuredScalarWhereInput[]
    OR?: InsuredScalarWhereInput[]
    NOT?: InsuredScalarWhereInput | InsuredScalarWhereInput[]
    id?: StringFilter<"Insured"> | string
    name?: StringFilter<"Insured"> | string
    nationalId?: StringFilter<"Insured"> | string
    planId?: StringFilter<"Insured"> | string
    policyId?: StringNullableFilter<"Insured"> | string | null
    status?: EnumInsuredStatusFilter<"Insured"> | $Enums.InsuredStatus
    startDate?: DateTimeFilter<"Insured"> | Date | string
    birthDate?: DateTimeNullableFilter<"Insured"> | Date | string | null
    phone?: StringNullableFilter<"Insured"> | string | null
    email?: StringNullableFilter<"Insured"> | string | null
    dependents?: IntFilter<"Insured"> | number
    createdAt?: DateTimeFilter<"Insured"> | Date | string
    updatedAt?: DateTimeFilter<"Insured"> | Date | string
  }

  export type PolicyUpsertWithWhereUniqueWithoutPlanInput = {
    where: PolicyWhereUniqueInput
    update: XOR<PolicyUpdateWithoutPlanInput, PolicyUncheckedUpdateWithoutPlanInput>
    create: XOR<PolicyCreateWithoutPlanInput, PolicyUncheckedCreateWithoutPlanInput>
  }

  export type PolicyUpdateWithWhereUniqueWithoutPlanInput = {
    where: PolicyWhereUniqueInput
    data: XOR<PolicyUpdateWithoutPlanInput, PolicyUncheckedUpdateWithoutPlanInput>
  }

  export type PolicyUpdateManyWithWhereWithoutPlanInput = {
    where: PolicyScalarWhereInput
    data: XOR<PolicyUpdateManyMutationInput, PolicyUncheckedUpdateManyWithoutPlanInput>
  }

  export type PolicyScalarWhereInput = {
    AND?: PolicyScalarWhereInput | PolicyScalarWhereInput[]
    OR?: PolicyScalarWhereInput[]
    NOT?: PolicyScalarWhereInput | PolicyScalarWhereInput[]
    id?: StringFilter<"Policy"> | string
    company?: StringFilter<"Policy"> | string
    planId?: StringFilter<"Policy"> | string
    startDate?: DateTimeFilter<"Policy"> | Date | string
    endDate?: DateTimeFilter<"Policy"> | Date | string
    monthlyPremium?: DecimalFilter<"Policy"> | Decimal | DecimalJsLike | number | string
    insuredCount?: IntFilter<"Policy"> | number
    status?: EnumPolicyStatusFilter<"Policy"> | $Enums.PolicyStatus
    createdAt?: DateTimeFilter<"Policy"> | Date | string
    updatedAt?: DateTimeFilter<"Policy"> | Date | string
  }

  export type AuthorizationCreateWithoutProviderInput = {
    id?: string
    procedure: string
    copay: Decimal | DecimalJsLike | number | string
    status?: $Enums.AuthorizationStatus
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    insured: InsuredCreateNestedOneWithoutAuthorizationsInput
    services?: MedicalServiceCreateNestedManyWithoutAuthorizationInput
  }

  export type AuthorizationUncheckedCreateWithoutProviderInput = {
    id?: string
    insuredId: string
    procedure: string
    copay: Decimal | DecimalJsLike | number | string
    status?: $Enums.AuthorizationStatus
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: MedicalServiceUncheckedCreateNestedManyWithoutAuthorizationInput
  }

  export type AuthorizationCreateOrConnectWithoutProviderInput = {
    where: AuthorizationWhereUniqueInput
    create: XOR<AuthorizationCreateWithoutProviderInput, AuthorizationUncheckedCreateWithoutProviderInput>
  }

  export type AuthorizationCreateManyProviderInputEnvelope = {
    data: AuthorizationCreateManyProviderInput | AuthorizationCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type ClaimCreateWithoutProviderInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.ClaimStatus
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    insured: InsuredCreateNestedOneWithoutClaimsInput
  }

  export type ClaimUncheckedCreateWithoutProviderInput = {
    id?: string
    insuredId: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.ClaimStatus
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClaimCreateOrConnectWithoutProviderInput = {
    where: ClaimWhereUniqueInput
    create: XOR<ClaimCreateWithoutProviderInput, ClaimUncheckedCreateWithoutProviderInput>
  }

  export type ClaimCreateManyProviderInputEnvelope = {
    data: ClaimCreateManyProviderInput | ClaimCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type MedicalServiceCreateWithoutProviderInput = {
    id?: string
    description: string
    cost: Decimal | DecimalJsLike | number | string
    copay: Decimal | DecimalJsLike | number | string
    date?: Date | string
    status?: $Enums.ServiceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    insured: InsuredCreateNestedOneWithoutServicesInput
    authorization?: AuthorizationCreateNestedOneWithoutServicesInput
    payment?: ProviderPaymentCreateNestedOneWithoutServiceInput
  }

  export type MedicalServiceUncheckedCreateWithoutProviderInput = {
    id?: string
    insuredId: string
    authorizationId?: string | null
    description: string
    cost: Decimal | DecimalJsLike | number | string
    copay: Decimal | DecimalJsLike | number | string
    date?: Date | string
    status?: $Enums.ServiceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: ProviderPaymentUncheckedCreateNestedOneWithoutServiceInput
  }

  export type MedicalServiceCreateOrConnectWithoutProviderInput = {
    where: MedicalServiceWhereUniqueInput
    create: XOR<MedicalServiceCreateWithoutProviderInput, MedicalServiceUncheckedCreateWithoutProviderInput>
  }

  export type MedicalServiceCreateManyProviderInputEnvelope = {
    data: MedicalServiceCreateManyProviderInput | MedicalServiceCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type ProviderPaymentCreateWithoutProviderInput = {
    id?: string
    bankReference: string
    amount: Decimal | DecimalJsLike | number | string
    method: string
    date?: Date | string
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    service: MedicalServiceCreateNestedOneWithoutPaymentInput
  }

  export type ProviderPaymentUncheckedCreateWithoutProviderInput = {
    id?: string
    serviceId: string
    bankReference: string
    amount: Decimal | DecimalJsLike | number | string
    method: string
    date?: Date | string
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProviderPaymentCreateOrConnectWithoutProviderInput = {
    where: ProviderPaymentWhereUniqueInput
    create: XOR<ProviderPaymentCreateWithoutProviderInput, ProviderPaymentUncheckedCreateWithoutProviderInput>
  }

  export type ProviderPaymentCreateManyProviderInputEnvelope = {
    data: ProviderPaymentCreateManyProviderInput | ProviderPaymentCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type AuthorizationUpsertWithWhereUniqueWithoutProviderInput = {
    where: AuthorizationWhereUniqueInput
    update: XOR<AuthorizationUpdateWithoutProviderInput, AuthorizationUncheckedUpdateWithoutProviderInput>
    create: XOR<AuthorizationCreateWithoutProviderInput, AuthorizationUncheckedCreateWithoutProviderInput>
  }

  export type AuthorizationUpdateWithWhereUniqueWithoutProviderInput = {
    where: AuthorizationWhereUniqueInput
    data: XOR<AuthorizationUpdateWithoutProviderInput, AuthorizationUncheckedUpdateWithoutProviderInput>
  }

  export type AuthorizationUpdateManyWithWhereWithoutProviderInput = {
    where: AuthorizationScalarWhereInput
    data: XOR<AuthorizationUpdateManyMutationInput, AuthorizationUncheckedUpdateManyWithoutProviderInput>
  }

  export type AuthorizationScalarWhereInput = {
    AND?: AuthorizationScalarWhereInput | AuthorizationScalarWhereInput[]
    OR?: AuthorizationScalarWhereInput[]
    NOT?: AuthorizationScalarWhereInput | AuthorizationScalarWhereInput[]
    id?: StringFilter<"Authorization"> | string
    insuredId?: StringFilter<"Authorization"> | string
    providerId?: StringFilter<"Authorization"> | string
    procedure?: StringFilter<"Authorization"> | string
    copay?: DecimalFilter<"Authorization"> | Decimal | DecimalJsLike | number | string
    status?: EnumAuthorizationStatusFilter<"Authorization"> | $Enums.AuthorizationStatus
    date?: DateTimeFilter<"Authorization"> | Date | string
    createdAt?: DateTimeFilter<"Authorization"> | Date | string
    updatedAt?: DateTimeFilter<"Authorization"> | Date | string
  }

  export type ClaimUpsertWithWhereUniqueWithoutProviderInput = {
    where: ClaimWhereUniqueInput
    update: XOR<ClaimUpdateWithoutProviderInput, ClaimUncheckedUpdateWithoutProviderInput>
    create: XOR<ClaimCreateWithoutProviderInput, ClaimUncheckedCreateWithoutProviderInput>
  }

  export type ClaimUpdateWithWhereUniqueWithoutProviderInput = {
    where: ClaimWhereUniqueInput
    data: XOR<ClaimUpdateWithoutProviderInput, ClaimUncheckedUpdateWithoutProviderInput>
  }

  export type ClaimUpdateManyWithWhereWithoutProviderInput = {
    where: ClaimScalarWhereInput
    data: XOR<ClaimUpdateManyMutationInput, ClaimUncheckedUpdateManyWithoutProviderInput>
  }

  export type ClaimScalarWhereInput = {
    AND?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
    OR?: ClaimScalarWhereInput[]
    NOT?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
    id?: StringFilter<"Claim"> | string
    insuredId?: StringFilter<"Claim"> | string
    providerId?: StringFilter<"Claim"> | string
    amount?: DecimalFilter<"Claim"> | Decimal | DecimalJsLike | number | string
    status?: EnumClaimStatusFilter<"Claim"> | $Enums.ClaimStatus
    date?: DateTimeFilter<"Claim"> | Date | string
    createdAt?: DateTimeFilter<"Claim"> | Date | string
    updatedAt?: DateTimeFilter<"Claim"> | Date | string
  }

  export type MedicalServiceUpsertWithWhereUniqueWithoutProviderInput = {
    where: MedicalServiceWhereUniqueInput
    update: XOR<MedicalServiceUpdateWithoutProviderInput, MedicalServiceUncheckedUpdateWithoutProviderInput>
    create: XOR<MedicalServiceCreateWithoutProviderInput, MedicalServiceUncheckedCreateWithoutProviderInput>
  }

  export type MedicalServiceUpdateWithWhereUniqueWithoutProviderInput = {
    where: MedicalServiceWhereUniqueInput
    data: XOR<MedicalServiceUpdateWithoutProviderInput, MedicalServiceUncheckedUpdateWithoutProviderInput>
  }

  export type MedicalServiceUpdateManyWithWhereWithoutProviderInput = {
    where: MedicalServiceScalarWhereInput
    data: XOR<MedicalServiceUpdateManyMutationInput, MedicalServiceUncheckedUpdateManyWithoutProviderInput>
  }

  export type MedicalServiceScalarWhereInput = {
    AND?: MedicalServiceScalarWhereInput | MedicalServiceScalarWhereInput[]
    OR?: MedicalServiceScalarWhereInput[]
    NOT?: MedicalServiceScalarWhereInput | MedicalServiceScalarWhereInput[]
    id?: StringFilter<"MedicalService"> | string
    insuredId?: StringFilter<"MedicalService"> | string
    providerId?: StringFilter<"MedicalService"> | string
    authorizationId?: StringNullableFilter<"MedicalService"> | string | null
    description?: StringFilter<"MedicalService"> | string
    cost?: DecimalFilter<"MedicalService"> | Decimal | DecimalJsLike | number | string
    copay?: DecimalFilter<"MedicalService"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"MedicalService"> | Date | string
    status?: EnumServiceStatusFilter<"MedicalService"> | $Enums.ServiceStatus
    createdAt?: DateTimeFilter<"MedicalService"> | Date | string
    updatedAt?: DateTimeFilter<"MedicalService"> | Date | string
  }

  export type ProviderPaymentUpsertWithWhereUniqueWithoutProviderInput = {
    where: ProviderPaymentWhereUniqueInput
    update: XOR<ProviderPaymentUpdateWithoutProviderInput, ProviderPaymentUncheckedUpdateWithoutProviderInput>
    create: XOR<ProviderPaymentCreateWithoutProviderInput, ProviderPaymentUncheckedCreateWithoutProviderInput>
  }

  export type ProviderPaymentUpdateWithWhereUniqueWithoutProviderInput = {
    where: ProviderPaymentWhereUniqueInput
    data: XOR<ProviderPaymentUpdateWithoutProviderInput, ProviderPaymentUncheckedUpdateWithoutProviderInput>
  }

  export type ProviderPaymentUpdateManyWithWhereWithoutProviderInput = {
    where: ProviderPaymentScalarWhereInput
    data: XOR<ProviderPaymentUpdateManyMutationInput, ProviderPaymentUncheckedUpdateManyWithoutProviderInput>
  }

  export type ProviderPaymentScalarWhereInput = {
    AND?: ProviderPaymentScalarWhereInput | ProviderPaymentScalarWhereInput[]
    OR?: ProviderPaymentScalarWhereInput[]
    NOT?: ProviderPaymentScalarWhereInput | ProviderPaymentScalarWhereInput[]
    id?: StringFilter<"ProviderPayment"> | string
    providerId?: StringFilter<"ProviderPayment"> | string
    serviceId?: StringFilter<"ProviderPayment"> | string
    bankReference?: StringFilter<"ProviderPayment"> | string
    amount?: DecimalFilter<"ProviderPayment"> | Decimal | DecimalJsLike | number | string
    method?: StringFilter<"ProviderPayment"> | string
    date?: DateTimeFilter<"ProviderPayment"> | Date | string
    status?: EnumPaymentStatusFilter<"ProviderPayment"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"ProviderPayment"> | Date | string
    updatedAt?: DateTimeFilter<"ProviderPayment"> | Date | string
  }

  export type PlanCreateWithoutPoliciesInput = {
    id: string
    name: string
    consultationCopay: Decimal | DecimalJsLike | number | string
    coverage: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    insureds?: InsuredCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateWithoutPoliciesInput = {
    id: string
    name: string
    consultationCopay: Decimal | DecimalJsLike | number | string
    coverage: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    insureds?: InsuredUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanCreateOrConnectWithoutPoliciesInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutPoliciesInput, PlanUncheckedCreateWithoutPoliciesInput>
  }

  export type InsuredCreateWithoutPolicyInput = {
    id?: string
    name: string
    nationalId: string
    status?: $Enums.InsuredStatus
    startDate: Date | string
    birthDate?: Date | string | null
    phone?: string | null
    email?: string | null
    dependents?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: PlanCreateNestedOneWithoutInsuredsInput
    authorizations?: AuthorizationCreateNestedManyWithoutInsuredInput
    claims?: ClaimCreateNestedManyWithoutInsuredInput
    services?: MedicalServiceCreateNestedManyWithoutInsuredInput
  }

  export type InsuredUncheckedCreateWithoutPolicyInput = {
    id?: string
    name: string
    nationalId: string
    planId: string
    status?: $Enums.InsuredStatus
    startDate: Date | string
    birthDate?: Date | string | null
    phone?: string | null
    email?: string | null
    dependents?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authorizations?: AuthorizationUncheckedCreateNestedManyWithoutInsuredInput
    claims?: ClaimUncheckedCreateNestedManyWithoutInsuredInput
    services?: MedicalServiceUncheckedCreateNestedManyWithoutInsuredInput
  }

  export type InsuredCreateOrConnectWithoutPolicyInput = {
    where: InsuredWhereUniqueInput
    create: XOR<InsuredCreateWithoutPolicyInput, InsuredUncheckedCreateWithoutPolicyInput>
  }

  export type InsuredCreateManyPolicyInputEnvelope = {
    data: InsuredCreateManyPolicyInput | InsuredCreateManyPolicyInput[]
    skipDuplicates?: boolean
  }

  export type InvoiceCreateWithoutPolicyInput = {
    id?: string
    period: string
    issuedAt: Date | string
    dueDate: Date | string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.InvoiceStatus
    paidAt?: Date | string | null
    reference?: string | null
    reminderSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUncheckedCreateWithoutPolicyInput = {
    id?: string
    period: string
    issuedAt: Date | string
    dueDate: Date | string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.InvoiceStatus
    paidAt?: Date | string | null
    reference?: string | null
    reminderSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceCreateOrConnectWithoutPolicyInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutPolicyInput, InvoiceUncheckedCreateWithoutPolicyInput>
  }

  export type InvoiceCreateManyPolicyInputEnvelope = {
    data: InvoiceCreateManyPolicyInput | InvoiceCreateManyPolicyInput[]
    skipDuplicates?: boolean
  }

  export type PlanUpsertWithoutPoliciesInput = {
    update: XOR<PlanUpdateWithoutPoliciesInput, PlanUncheckedUpdateWithoutPoliciesInput>
    create: XOR<PlanCreateWithoutPoliciesInput, PlanUncheckedCreateWithoutPoliciesInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutPoliciesInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutPoliciesInput, PlanUncheckedUpdateWithoutPoliciesInput>
  }

  export type PlanUpdateWithoutPoliciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    consultationCopay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    coverage?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    insureds?: InsuredUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateWithoutPoliciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    consultationCopay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    coverage?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    insureds?: InsuredUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type InsuredUpsertWithWhereUniqueWithoutPolicyInput = {
    where: InsuredWhereUniqueInput
    update: XOR<InsuredUpdateWithoutPolicyInput, InsuredUncheckedUpdateWithoutPolicyInput>
    create: XOR<InsuredCreateWithoutPolicyInput, InsuredUncheckedCreateWithoutPolicyInput>
  }

  export type InsuredUpdateWithWhereUniqueWithoutPolicyInput = {
    where: InsuredWhereUniqueInput
    data: XOR<InsuredUpdateWithoutPolicyInput, InsuredUncheckedUpdateWithoutPolicyInput>
  }

  export type InsuredUpdateManyWithWhereWithoutPolicyInput = {
    where: InsuredScalarWhereInput
    data: XOR<InsuredUpdateManyMutationInput, InsuredUncheckedUpdateManyWithoutPolicyInput>
  }

  export type InvoiceUpsertWithWhereUniqueWithoutPolicyInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutPolicyInput, InvoiceUncheckedUpdateWithoutPolicyInput>
    create: XOR<InvoiceCreateWithoutPolicyInput, InvoiceUncheckedCreateWithoutPolicyInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutPolicyInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutPolicyInput, InvoiceUncheckedUpdateWithoutPolicyInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutPolicyInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutPolicyInput>
  }

  export type InvoiceScalarWhereInput = {
    AND?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    OR?: InvoiceScalarWhereInput[]
    NOT?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    id?: StringFilter<"Invoice"> | string
    policyId?: StringFilter<"Invoice"> | string
    period?: StringFilter<"Invoice"> | string
    issuedAt?: DateTimeFilter<"Invoice"> | Date | string
    dueDate?: DateTimeFilter<"Invoice"> | Date | string
    amount?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
    paidAt?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    reference?: StringNullableFilter<"Invoice"> | string | null
    reminderSent?: BoolFilter<"Invoice"> | boolean
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
  }

  export type PlanCreateWithoutInsuredsInput = {
    id: string
    name: string
    consultationCopay: Decimal | DecimalJsLike | number | string
    coverage: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    policies?: PolicyCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateWithoutInsuredsInput = {
    id: string
    name: string
    consultationCopay: Decimal | DecimalJsLike | number | string
    coverage: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    policies?: PolicyUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanCreateOrConnectWithoutInsuredsInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutInsuredsInput, PlanUncheckedCreateWithoutInsuredsInput>
  }

  export type PolicyCreateWithoutInsuredsInput = {
    id: string
    company: string
    startDate: Date | string
    endDate: Date | string
    monthlyPremium: Decimal | DecimalJsLike | number | string
    insuredCount?: number
    status?: $Enums.PolicyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: PlanCreateNestedOneWithoutPoliciesInput
    invoices?: InvoiceCreateNestedManyWithoutPolicyInput
  }

  export type PolicyUncheckedCreateWithoutInsuredsInput = {
    id: string
    company: string
    planId: string
    startDate: Date | string
    endDate: Date | string
    monthlyPremium: Decimal | DecimalJsLike | number | string
    insuredCount?: number
    status?: $Enums.PolicyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutPolicyInput
  }

  export type PolicyCreateOrConnectWithoutInsuredsInput = {
    where: PolicyWhereUniqueInput
    create: XOR<PolicyCreateWithoutInsuredsInput, PolicyUncheckedCreateWithoutInsuredsInput>
  }

  export type AuthorizationCreateWithoutInsuredInput = {
    id?: string
    procedure: string
    copay: Decimal | DecimalJsLike | number | string
    status?: $Enums.AuthorizationStatus
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: ProviderCreateNestedOneWithoutAuthorizationsInput
    services?: MedicalServiceCreateNestedManyWithoutAuthorizationInput
  }

  export type AuthorizationUncheckedCreateWithoutInsuredInput = {
    id?: string
    providerId: string
    procedure: string
    copay: Decimal | DecimalJsLike | number | string
    status?: $Enums.AuthorizationStatus
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: MedicalServiceUncheckedCreateNestedManyWithoutAuthorizationInput
  }

  export type AuthorizationCreateOrConnectWithoutInsuredInput = {
    where: AuthorizationWhereUniqueInput
    create: XOR<AuthorizationCreateWithoutInsuredInput, AuthorizationUncheckedCreateWithoutInsuredInput>
  }

  export type AuthorizationCreateManyInsuredInputEnvelope = {
    data: AuthorizationCreateManyInsuredInput | AuthorizationCreateManyInsuredInput[]
    skipDuplicates?: boolean
  }

  export type ClaimCreateWithoutInsuredInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.ClaimStatus
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: ProviderCreateNestedOneWithoutClaimsInput
  }

  export type ClaimUncheckedCreateWithoutInsuredInput = {
    id?: string
    providerId: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.ClaimStatus
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClaimCreateOrConnectWithoutInsuredInput = {
    where: ClaimWhereUniqueInput
    create: XOR<ClaimCreateWithoutInsuredInput, ClaimUncheckedCreateWithoutInsuredInput>
  }

  export type ClaimCreateManyInsuredInputEnvelope = {
    data: ClaimCreateManyInsuredInput | ClaimCreateManyInsuredInput[]
    skipDuplicates?: boolean
  }

  export type MedicalServiceCreateWithoutInsuredInput = {
    id?: string
    description: string
    cost: Decimal | DecimalJsLike | number | string
    copay: Decimal | DecimalJsLike | number | string
    date?: Date | string
    status?: $Enums.ServiceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: ProviderCreateNestedOneWithoutServicesInput
    authorization?: AuthorizationCreateNestedOneWithoutServicesInput
    payment?: ProviderPaymentCreateNestedOneWithoutServiceInput
  }

  export type MedicalServiceUncheckedCreateWithoutInsuredInput = {
    id?: string
    providerId: string
    authorizationId?: string | null
    description: string
    cost: Decimal | DecimalJsLike | number | string
    copay: Decimal | DecimalJsLike | number | string
    date?: Date | string
    status?: $Enums.ServiceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: ProviderPaymentUncheckedCreateNestedOneWithoutServiceInput
  }

  export type MedicalServiceCreateOrConnectWithoutInsuredInput = {
    where: MedicalServiceWhereUniqueInput
    create: XOR<MedicalServiceCreateWithoutInsuredInput, MedicalServiceUncheckedCreateWithoutInsuredInput>
  }

  export type MedicalServiceCreateManyInsuredInputEnvelope = {
    data: MedicalServiceCreateManyInsuredInput | MedicalServiceCreateManyInsuredInput[]
    skipDuplicates?: boolean
  }

  export type PlanUpsertWithoutInsuredsInput = {
    update: XOR<PlanUpdateWithoutInsuredsInput, PlanUncheckedUpdateWithoutInsuredsInput>
    create: XOR<PlanCreateWithoutInsuredsInput, PlanUncheckedCreateWithoutInsuredsInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutInsuredsInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutInsuredsInput, PlanUncheckedUpdateWithoutInsuredsInput>
  }

  export type PlanUpdateWithoutInsuredsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    consultationCopay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    coverage?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policies?: PolicyUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateWithoutInsuredsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    consultationCopay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    coverage?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policies?: PolicyUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PolicyUpsertWithoutInsuredsInput = {
    update: XOR<PolicyUpdateWithoutInsuredsInput, PolicyUncheckedUpdateWithoutInsuredsInput>
    create: XOR<PolicyCreateWithoutInsuredsInput, PolicyUncheckedCreateWithoutInsuredsInput>
    where?: PolicyWhereInput
  }

  export type PolicyUpdateToOneWithWhereWithoutInsuredsInput = {
    where?: PolicyWhereInput
    data: XOR<PolicyUpdateWithoutInsuredsInput, PolicyUncheckedUpdateWithoutInsuredsInput>
  }

  export type PolicyUpdateWithoutInsuredsInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyPremium?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    insuredCount?: IntFieldUpdateOperationsInput | number
    status?: EnumPolicyStatusFieldUpdateOperationsInput | $Enums.PolicyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutPoliciesNestedInput
    invoices?: InvoiceUpdateManyWithoutPolicyNestedInput
  }

  export type PolicyUncheckedUpdateWithoutInsuredsInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyPremium?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    insuredCount?: IntFieldUpdateOperationsInput | number
    status?: EnumPolicyStatusFieldUpdateOperationsInput | $Enums.PolicyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutPolicyNestedInput
  }

  export type AuthorizationUpsertWithWhereUniqueWithoutInsuredInput = {
    where: AuthorizationWhereUniqueInput
    update: XOR<AuthorizationUpdateWithoutInsuredInput, AuthorizationUncheckedUpdateWithoutInsuredInput>
    create: XOR<AuthorizationCreateWithoutInsuredInput, AuthorizationUncheckedCreateWithoutInsuredInput>
  }

  export type AuthorizationUpdateWithWhereUniqueWithoutInsuredInput = {
    where: AuthorizationWhereUniqueInput
    data: XOR<AuthorizationUpdateWithoutInsuredInput, AuthorizationUncheckedUpdateWithoutInsuredInput>
  }

  export type AuthorizationUpdateManyWithWhereWithoutInsuredInput = {
    where: AuthorizationScalarWhereInput
    data: XOR<AuthorizationUpdateManyMutationInput, AuthorizationUncheckedUpdateManyWithoutInsuredInput>
  }

  export type ClaimUpsertWithWhereUniqueWithoutInsuredInput = {
    where: ClaimWhereUniqueInput
    update: XOR<ClaimUpdateWithoutInsuredInput, ClaimUncheckedUpdateWithoutInsuredInput>
    create: XOR<ClaimCreateWithoutInsuredInput, ClaimUncheckedCreateWithoutInsuredInput>
  }

  export type ClaimUpdateWithWhereUniqueWithoutInsuredInput = {
    where: ClaimWhereUniqueInput
    data: XOR<ClaimUpdateWithoutInsuredInput, ClaimUncheckedUpdateWithoutInsuredInput>
  }

  export type ClaimUpdateManyWithWhereWithoutInsuredInput = {
    where: ClaimScalarWhereInput
    data: XOR<ClaimUpdateManyMutationInput, ClaimUncheckedUpdateManyWithoutInsuredInput>
  }

  export type MedicalServiceUpsertWithWhereUniqueWithoutInsuredInput = {
    where: MedicalServiceWhereUniqueInput
    update: XOR<MedicalServiceUpdateWithoutInsuredInput, MedicalServiceUncheckedUpdateWithoutInsuredInput>
    create: XOR<MedicalServiceCreateWithoutInsuredInput, MedicalServiceUncheckedCreateWithoutInsuredInput>
  }

  export type MedicalServiceUpdateWithWhereUniqueWithoutInsuredInput = {
    where: MedicalServiceWhereUniqueInput
    data: XOR<MedicalServiceUpdateWithoutInsuredInput, MedicalServiceUncheckedUpdateWithoutInsuredInput>
  }

  export type MedicalServiceUpdateManyWithWhereWithoutInsuredInput = {
    where: MedicalServiceScalarWhereInput
    data: XOR<MedicalServiceUpdateManyMutationInput, MedicalServiceUncheckedUpdateManyWithoutInsuredInput>
  }

  export type InsuredCreateWithoutAuthorizationsInput = {
    id?: string
    name: string
    nationalId: string
    status?: $Enums.InsuredStatus
    startDate: Date | string
    birthDate?: Date | string | null
    phone?: string | null
    email?: string | null
    dependents?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: PlanCreateNestedOneWithoutInsuredsInput
    policy?: PolicyCreateNestedOneWithoutInsuredsInput
    claims?: ClaimCreateNestedManyWithoutInsuredInput
    services?: MedicalServiceCreateNestedManyWithoutInsuredInput
  }

  export type InsuredUncheckedCreateWithoutAuthorizationsInput = {
    id?: string
    name: string
    nationalId: string
    planId: string
    policyId?: string | null
    status?: $Enums.InsuredStatus
    startDate: Date | string
    birthDate?: Date | string | null
    phone?: string | null
    email?: string | null
    dependents?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    claims?: ClaimUncheckedCreateNestedManyWithoutInsuredInput
    services?: MedicalServiceUncheckedCreateNestedManyWithoutInsuredInput
  }

  export type InsuredCreateOrConnectWithoutAuthorizationsInput = {
    where: InsuredWhereUniqueInput
    create: XOR<InsuredCreateWithoutAuthorizationsInput, InsuredUncheckedCreateWithoutAuthorizationsInput>
  }

  export type ProviderCreateWithoutAuthorizationsInput = {
    id?: string
    name: string
    type: string
    city: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    claims?: ClaimCreateNestedManyWithoutProviderInput
    services?: MedicalServiceCreateNestedManyWithoutProviderInput
    payments?: ProviderPaymentCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateWithoutAuthorizationsInput = {
    id?: string
    name: string
    type: string
    city: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    claims?: ClaimUncheckedCreateNestedManyWithoutProviderInput
    services?: MedicalServiceUncheckedCreateNestedManyWithoutProviderInput
    payments?: ProviderPaymentUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderCreateOrConnectWithoutAuthorizationsInput = {
    where: ProviderWhereUniqueInput
    create: XOR<ProviderCreateWithoutAuthorizationsInput, ProviderUncheckedCreateWithoutAuthorizationsInput>
  }

  export type MedicalServiceCreateWithoutAuthorizationInput = {
    id?: string
    description: string
    cost: Decimal | DecimalJsLike | number | string
    copay: Decimal | DecimalJsLike | number | string
    date?: Date | string
    status?: $Enums.ServiceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    insured: InsuredCreateNestedOneWithoutServicesInput
    provider: ProviderCreateNestedOneWithoutServicesInput
    payment?: ProviderPaymentCreateNestedOneWithoutServiceInput
  }

  export type MedicalServiceUncheckedCreateWithoutAuthorizationInput = {
    id?: string
    insuredId: string
    providerId: string
    description: string
    cost: Decimal | DecimalJsLike | number | string
    copay: Decimal | DecimalJsLike | number | string
    date?: Date | string
    status?: $Enums.ServiceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: ProviderPaymentUncheckedCreateNestedOneWithoutServiceInput
  }

  export type MedicalServiceCreateOrConnectWithoutAuthorizationInput = {
    where: MedicalServiceWhereUniqueInput
    create: XOR<MedicalServiceCreateWithoutAuthorizationInput, MedicalServiceUncheckedCreateWithoutAuthorizationInput>
  }

  export type MedicalServiceCreateManyAuthorizationInputEnvelope = {
    data: MedicalServiceCreateManyAuthorizationInput | MedicalServiceCreateManyAuthorizationInput[]
    skipDuplicates?: boolean
  }

  export type InsuredUpsertWithoutAuthorizationsInput = {
    update: XOR<InsuredUpdateWithoutAuthorizationsInput, InsuredUncheckedUpdateWithoutAuthorizationsInput>
    create: XOR<InsuredCreateWithoutAuthorizationsInput, InsuredUncheckedCreateWithoutAuthorizationsInput>
    where?: InsuredWhereInput
  }

  export type InsuredUpdateToOneWithWhereWithoutAuthorizationsInput = {
    where?: InsuredWhereInput
    data: XOR<InsuredUpdateWithoutAuthorizationsInput, InsuredUncheckedUpdateWithoutAuthorizationsInput>
  }

  export type InsuredUpdateWithoutAuthorizationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    status?: EnumInsuredStatusFieldUpdateOperationsInput | $Enums.InsuredStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dependents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutInsuredsNestedInput
    policy?: PolicyUpdateOneWithoutInsuredsNestedInput
    claims?: ClaimUpdateManyWithoutInsuredNestedInput
    services?: MedicalServiceUpdateManyWithoutInsuredNestedInput
  }

  export type InsuredUncheckedUpdateWithoutAuthorizationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    policyId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInsuredStatusFieldUpdateOperationsInput | $Enums.InsuredStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dependents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: ClaimUncheckedUpdateManyWithoutInsuredNestedInput
    services?: MedicalServiceUncheckedUpdateManyWithoutInsuredNestedInput
  }

  export type ProviderUpsertWithoutAuthorizationsInput = {
    update: XOR<ProviderUpdateWithoutAuthorizationsInput, ProviderUncheckedUpdateWithoutAuthorizationsInput>
    create: XOR<ProviderCreateWithoutAuthorizationsInput, ProviderUncheckedCreateWithoutAuthorizationsInput>
    where?: ProviderWhereInput
  }

  export type ProviderUpdateToOneWithWhereWithoutAuthorizationsInput = {
    where?: ProviderWhereInput
    data: XOR<ProviderUpdateWithoutAuthorizationsInput, ProviderUncheckedUpdateWithoutAuthorizationsInput>
  }

  export type ProviderUpdateWithoutAuthorizationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: ClaimUpdateManyWithoutProviderNestedInput
    services?: MedicalServiceUpdateManyWithoutProviderNestedInput
    payments?: ProviderPaymentUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateWithoutAuthorizationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: ClaimUncheckedUpdateManyWithoutProviderNestedInput
    services?: MedicalServiceUncheckedUpdateManyWithoutProviderNestedInput
    payments?: ProviderPaymentUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type MedicalServiceUpsertWithWhereUniqueWithoutAuthorizationInput = {
    where: MedicalServiceWhereUniqueInput
    update: XOR<MedicalServiceUpdateWithoutAuthorizationInput, MedicalServiceUncheckedUpdateWithoutAuthorizationInput>
    create: XOR<MedicalServiceCreateWithoutAuthorizationInput, MedicalServiceUncheckedCreateWithoutAuthorizationInput>
  }

  export type MedicalServiceUpdateWithWhereUniqueWithoutAuthorizationInput = {
    where: MedicalServiceWhereUniqueInput
    data: XOR<MedicalServiceUpdateWithoutAuthorizationInput, MedicalServiceUncheckedUpdateWithoutAuthorizationInput>
  }

  export type MedicalServiceUpdateManyWithWhereWithoutAuthorizationInput = {
    where: MedicalServiceScalarWhereInput
    data: XOR<MedicalServiceUpdateManyMutationInput, MedicalServiceUncheckedUpdateManyWithoutAuthorizationInput>
  }

  export type InsuredCreateWithoutClaimsInput = {
    id?: string
    name: string
    nationalId: string
    status?: $Enums.InsuredStatus
    startDate: Date | string
    birthDate?: Date | string | null
    phone?: string | null
    email?: string | null
    dependents?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: PlanCreateNestedOneWithoutInsuredsInput
    policy?: PolicyCreateNestedOneWithoutInsuredsInput
    authorizations?: AuthorizationCreateNestedManyWithoutInsuredInput
    services?: MedicalServiceCreateNestedManyWithoutInsuredInput
  }

  export type InsuredUncheckedCreateWithoutClaimsInput = {
    id?: string
    name: string
    nationalId: string
    planId: string
    policyId?: string | null
    status?: $Enums.InsuredStatus
    startDate: Date | string
    birthDate?: Date | string | null
    phone?: string | null
    email?: string | null
    dependents?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authorizations?: AuthorizationUncheckedCreateNestedManyWithoutInsuredInput
    services?: MedicalServiceUncheckedCreateNestedManyWithoutInsuredInput
  }

  export type InsuredCreateOrConnectWithoutClaimsInput = {
    where: InsuredWhereUniqueInput
    create: XOR<InsuredCreateWithoutClaimsInput, InsuredUncheckedCreateWithoutClaimsInput>
  }

  export type ProviderCreateWithoutClaimsInput = {
    id?: string
    name: string
    type: string
    city: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorizations?: AuthorizationCreateNestedManyWithoutProviderInput
    services?: MedicalServiceCreateNestedManyWithoutProviderInput
    payments?: ProviderPaymentCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateWithoutClaimsInput = {
    id?: string
    name: string
    type: string
    city: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorizations?: AuthorizationUncheckedCreateNestedManyWithoutProviderInput
    services?: MedicalServiceUncheckedCreateNestedManyWithoutProviderInput
    payments?: ProviderPaymentUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderCreateOrConnectWithoutClaimsInput = {
    where: ProviderWhereUniqueInput
    create: XOR<ProviderCreateWithoutClaimsInput, ProviderUncheckedCreateWithoutClaimsInput>
  }

  export type InsuredUpsertWithoutClaimsInput = {
    update: XOR<InsuredUpdateWithoutClaimsInput, InsuredUncheckedUpdateWithoutClaimsInput>
    create: XOR<InsuredCreateWithoutClaimsInput, InsuredUncheckedCreateWithoutClaimsInput>
    where?: InsuredWhereInput
  }

  export type InsuredUpdateToOneWithWhereWithoutClaimsInput = {
    where?: InsuredWhereInput
    data: XOR<InsuredUpdateWithoutClaimsInput, InsuredUncheckedUpdateWithoutClaimsInput>
  }

  export type InsuredUpdateWithoutClaimsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    status?: EnumInsuredStatusFieldUpdateOperationsInput | $Enums.InsuredStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dependents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutInsuredsNestedInput
    policy?: PolicyUpdateOneWithoutInsuredsNestedInput
    authorizations?: AuthorizationUpdateManyWithoutInsuredNestedInput
    services?: MedicalServiceUpdateManyWithoutInsuredNestedInput
  }

  export type InsuredUncheckedUpdateWithoutClaimsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    policyId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInsuredStatusFieldUpdateOperationsInput | $Enums.InsuredStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dependents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorizations?: AuthorizationUncheckedUpdateManyWithoutInsuredNestedInput
    services?: MedicalServiceUncheckedUpdateManyWithoutInsuredNestedInput
  }

  export type ProviderUpsertWithoutClaimsInput = {
    update: XOR<ProviderUpdateWithoutClaimsInput, ProviderUncheckedUpdateWithoutClaimsInput>
    create: XOR<ProviderCreateWithoutClaimsInput, ProviderUncheckedCreateWithoutClaimsInput>
    where?: ProviderWhereInput
  }

  export type ProviderUpdateToOneWithWhereWithoutClaimsInput = {
    where?: ProviderWhereInput
    data: XOR<ProviderUpdateWithoutClaimsInput, ProviderUncheckedUpdateWithoutClaimsInput>
  }

  export type ProviderUpdateWithoutClaimsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorizations?: AuthorizationUpdateManyWithoutProviderNestedInput
    services?: MedicalServiceUpdateManyWithoutProviderNestedInput
    payments?: ProviderPaymentUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateWithoutClaimsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorizations?: AuthorizationUncheckedUpdateManyWithoutProviderNestedInput
    services?: MedicalServiceUncheckedUpdateManyWithoutProviderNestedInput
    payments?: ProviderPaymentUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type InsuredCreateWithoutServicesInput = {
    id?: string
    name: string
    nationalId: string
    status?: $Enums.InsuredStatus
    startDate: Date | string
    birthDate?: Date | string | null
    phone?: string | null
    email?: string | null
    dependents?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: PlanCreateNestedOneWithoutInsuredsInput
    policy?: PolicyCreateNestedOneWithoutInsuredsInput
    authorizations?: AuthorizationCreateNestedManyWithoutInsuredInput
    claims?: ClaimCreateNestedManyWithoutInsuredInput
  }

  export type InsuredUncheckedCreateWithoutServicesInput = {
    id?: string
    name: string
    nationalId: string
    planId: string
    policyId?: string | null
    status?: $Enums.InsuredStatus
    startDate: Date | string
    birthDate?: Date | string | null
    phone?: string | null
    email?: string | null
    dependents?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authorizations?: AuthorizationUncheckedCreateNestedManyWithoutInsuredInput
    claims?: ClaimUncheckedCreateNestedManyWithoutInsuredInput
  }

  export type InsuredCreateOrConnectWithoutServicesInput = {
    where: InsuredWhereUniqueInput
    create: XOR<InsuredCreateWithoutServicesInput, InsuredUncheckedCreateWithoutServicesInput>
  }

  export type ProviderCreateWithoutServicesInput = {
    id?: string
    name: string
    type: string
    city: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorizations?: AuthorizationCreateNestedManyWithoutProviderInput
    claims?: ClaimCreateNestedManyWithoutProviderInput
    payments?: ProviderPaymentCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateWithoutServicesInput = {
    id?: string
    name: string
    type: string
    city: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorizations?: AuthorizationUncheckedCreateNestedManyWithoutProviderInput
    claims?: ClaimUncheckedCreateNestedManyWithoutProviderInput
    payments?: ProviderPaymentUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderCreateOrConnectWithoutServicesInput = {
    where: ProviderWhereUniqueInput
    create: XOR<ProviderCreateWithoutServicesInput, ProviderUncheckedCreateWithoutServicesInput>
  }

  export type AuthorizationCreateWithoutServicesInput = {
    id?: string
    procedure: string
    copay: Decimal | DecimalJsLike | number | string
    status?: $Enums.AuthorizationStatus
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    insured: InsuredCreateNestedOneWithoutAuthorizationsInput
    provider: ProviderCreateNestedOneWithoutAuthorizationsInput
  }

  export type AuthorizationUncheckedCreateWithoutServicesInput = {
    id?: string
    insuredId: string
    providerId: string
    procedure: string
    copay: Decimal | DecimalJsLike | number | string
    status?: $Enums.AuthorizationStatus
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthorizationCreateOrConnectWithoutServicesInput = {
    where: AuthorizationWhereUniqueInput
    create: XOR<AuthorizationCreateWithoutServicesInput, AuthorizationUncheckedCreateWithoutServicesInput>
  }

  export type ProviderPaymentCreateWithoutServiceInput = {
    id?: string
    bankReference: string
    amount: Decimal | DecimalJsLike | number | string
    method: string
    date?: Date | string
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: ProviderCreateNestedOneWithoutPaymentsInput
  }

  export type ProviderPaymentUncheckedCreateWithoutServiceInput = {
    id?: string
    providerId: string
    bankReference: string
    amount: Decimal | DecimalJsLike | number | string
    method: string
    date?: Date | string
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProviderPaymentCreateOrConnectWithoutServiceInput = {
    where: ProviderPaymentWhereUniqueInput
    create: XOR<ProviderPaymentCreateWithoutServiceInput, ProviderPaymentUncheckedCreateWithoutServiceInput>
  }

  export type InsuredUpsertWithoutServicesInput = {
    update: XOR<InsuredUpdateWithoutServicesInput, InsuredUncheckedUpdateWithoutServicesInput>
    create: XOR<InsuredCreateWithoutServicesInput, InsuredUncheckedCreateWithoutServicesInput>
    where?: InsuredWhereInput
  }

  export type InsuredUpdateToOneWithWhereWithoutServicesInput = {
    where?: InsuredWhereInput
    data: XOR<InsuredUpdateWithoutServicesInput, InsuredUncheckedUpdateWithoutServicesInput>
  }

  export type InsuredUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    status?: EnumInsuredStatusFieldUpdateOperationsInput | $Enums.InsuredStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dependents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutInsuredsNestedInput
    policy?: PolicyUpdateOneWithoutInsuredsNestedInput
    authorizations?: AuthorizationUpdateManyWithoutInsuredNestedInput
    claims?: ClaimUpdateManyWithoutInsuredNestedInput
  }

  export type InsuredUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    policyId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInsuredStatusFieldUpdateOperationsInput | $Enums.InsuredStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dependents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorizations?: AuthorizationUncheckedUpdateManyWithoutInsuredNestedInput
    claims?: ClaimUncheckedUpdateManyWithoutInsuredNestedInput
  }

  export type ProviderUpsertWithoutServicesInput = {
    update: XOR<ProviderUpdateWithoutServicesInput, ProviderUncheckedUpdateWithoutServicesInput>
    create: XOR<ProviderCreateWithoutServicesInput, ProviderUncheckedCreateWithoutServicesInput>
    where?: ProviderWhereInput
  }

  export type ProviderUpdateToOneWithWhereWithoutServicesInput = {
    where?: ProviderWhereInput
    data: XOR<ProviderUpdateWithoutServicesInput, ProviderUncheckedUpdateWithoutServicesInput>
  }

  export type ProviderUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorizations?: AuthorizationUpdateManyWithoutProviderNestedInput
    claims?: ClaimUpdateManyWithoutProviderNestedInput
    payments?: ProviderPaymentUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorizations?: AuthorizationUncheckedUpdateManyWithoutProviderNestedInput
    claims?: ClaimUncheckedUpdateManyWithoutProviderNestedInput
    payments?: ProviderPaymentUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type AuthorizationUpsertWithoutServicesInput = {
    update: XOR<AuthorizationUpdateWithoutServicesInput, AuthorizationUncheckedUpdateWithoutServicesInput>
    create: XOR<AuthorizationCreateWithoutServicesInput, AuthorizationUncheckedCreateWithoutServicesInput>
    where?: AuthorizationWhereInput
  }

  export type AuthorizationUpdateToOneWithWhereWithoutServicesInput = {
    where?: AuthorizationWhereInput
    data: XOR<AuthorizationUpdateWithoutServicesInput, AuthorizationUncheckedUpdateWithoutServicesInput>
  }

  export type AuthorizationUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    procedure?: StringFieldUpdateOperationsInput | string
    copay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumAuthorizationStatusFieldUpdateOperationsInput | $Enums.AuthorizationStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    insured?: InsuredUpdateOneRequiredWithoutAuthorizationsNestedInput
    provider?: ProviderUpdateOneRequiredWithoutAuthorizationsNestedInput
  }

  export type AuthorizationUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    insuredId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    procedure?: StringFieldUpdateOperationsInput | string
    copay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumAuthorizationStatusFieldUpdateOperationsInput | $Enums.AuthorizationStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderPaymentUpsertWithoutServiceInput = {
    update: XOR<ProviderPaymentUpdateWithoutServiceInput, ProviderPaymentUncheckedUpdateWithoutServiceInput>
    create: XOR<ProviderPaymentCreateWithoutServiceInput, ProviderPaymentUncheckedCreateWithoutServiceInput>
    where?: ProviderPaymentWhereInput
  }

  export type ProviderPaymentUpdateToOneWithWhereWithoutServiceInput = {
    where?: ProviderPaymentWhereInput
    data: XOR<ProviderPaymentUpdateWithoutServiceInput, ProviderPaymentUncheckedUpdateWithoutServiceInput>
  }

  export type ProviderPaymentUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankReference?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type ProviderPaymentUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    bankReference?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderCreateWithoutPaymentsInput = {
    id?: string
    name: string
    type: string
    city: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorizations?: AuthorizationCreateNestedManyWithoutProviderInput
    claims?: ClaimCreateNestedManyWithoutProviderInput
    services?: MedicalServiceCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateWithoutPaymentsInput = {
    id?: string
    name: string
    type: string
    city: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorizations?: AuthorizationUncheckedCreateNestedManyWithoutProviderInput
    claims?: ClaimUncheckedCreateNestedManyWithoutProviderInput
    services?: MedicalServiceUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderCreateOrConnectWithoutPaymentsInput = {
    where: ProviderWhereUniqueInput
    create: XOR<ProviderCreateWithoutPaymentsInput, ProviderUncheckedCreateWithoutPaymentsInput>
  }

  export type MedicalServiceCreateWithoutPaymentInput = {
    id?: string
    description: string
    cost: Decimal | DecimalJsLike | number | string
    copay: Decimal | DecimalJsLike | number | string
    date?: Date | string
    status?: $Enums.ServiceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    insured: InsuredCreateNestedOneWithoutServicesInput
    provider: ProviderCreateNestedOneWithoutServicesInput
    authorization?: AuthorizationCreateNestedOneWithoutServicesInput
  }

  export type MedicalServiceUncheckedCreateWithoutPaymentInput = {
    id?: string
    insuredId: string
    providerId: string
    authorizationId?: string | null
    description: string
    cost: Decimal | DecimalJsLike | number | string
    copay: Decimal | DecimalJsLike | number | string
    date?: Date | string
    status?: $Enums.ServiceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalServiceCreateOrConnectWithoutPaymentInput = {
    where: MedicalServiceWhereUniqueInput
    create: XOR<MedicalServiceCreateWithoutPaymentInput, MedicalServiceUncheckedCreateWithoutPaymentInput>
  }

  export type ProviderUpsertWithoutPaymentsInput = {
    update: XOR<ProviderUpdateWithoutPaymentsInput, ProviderUncheckedUpdateWithoutPaymentsInput>
    create: XOR<ProviderCreateWithoutPaymentsInput, ProviderUncheckedCreateWithoutPaymentsInput>
    where?: ProviderWhereInput
  }

  export type ProviderUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: ProviderWhereInput
    data: XOR<ProviderUpdateWithoutPaymentsInput, ProviderUncheckedUpdateWithoutPaymentsInput>
  }

  export type ProviderUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorizations?: AuthorizationUpdateManyWithoutProviderNestedInput
    claims?: ClaimUpdateManyWithoutProviderNestedInput
    services?: MedicalServiceUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorizations?: AuthorizationUncheckedUpdateManyWithoutProviderNestedInput
    claims?: ClaimUncheckedUpdateManyWithoutProviderNestedInput
    services?: MedicalServiceUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type MedicalServiceUpsertWithoutPaymentInput = {
    update: XOR<MedicalServiceUpdateWithoutPaymentInput, MedicalServiceUncheckedUpdateWithoutPaymentInput>
    create: XOR<MedicalServiceCreateWithoutPaymentInput, MedicalServiceUncheckedCreateWithoutPaymentInput>
    where?: MedicalServiceWhereInput
  }

  export type MedicalServiceUpdateToOneWithWhereWithoutPaymentInput = {
    where?: MedicalServiceWhereInput
    data: XOR<MedicalServiceUpdateWithoutPaymentInput, MedicalServiceUncheckedUpdateWithoutPaymentInput>
  }

  export type MedicalServiceUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    copay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    insured?: InsuredUpdateOneRequiredWithoutServicesNestedInput
    provider?: ProviderUpdateOneRequiredWithoutServicesNestedInput
    authorization?: AuthorizationUpdateOneWithoutServicesNestedInput
  }

  export type MedicalServiceUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    insuredId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    authorizationId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    copay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyCreateWithoutInvoicesInput = {
    id: string
    company: string
    startDate: Date | string
    endDate: Date | string
    monthlyPremium: Decimal | DecimalJsLike | number | string
    insuredCount?: number
    status?: $Enums.PolicyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: PlanCreateNestedOneWithoutPoliciesInput
    insureds?: InsuredCreateNestedManyWithoutPolicyInput
  }

  export type PolicyUncheckedCreateWithoutInvoicesInput = {
    id: string
    company: string
    planId: string
    startDate: Date | string
    endDate: Date | string
    monthlyPremium: Decimal | DecimalJsLike | number | string
    insuredCount?: number
    status?: $Enums.PolicyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    insureds?: InsuredUncheckedCreateNestedManyWithoutPolicyInput
  }

  export type PolicyCreateOrConnectWithoutInvoicesInput = {
    where: PolicyWhereUniqueInput
    create: XOR<PolicyCreateWithoutInvoicesInput, PolicyUncheckedCreateWithoutInvoicesInput>
  }

  export type PolicyUpsertWithoutInvoicesInput = {
    update: XOR<PolicyUpdateWithoutInvoicesInput, PolicyUncheckedUpdateWithoutInvoicesInput>
    create: XOR<PolicyCreateWithoutInvoicesInput, PolicyUncheckedCreateWithoutInvoicesInput>
    where?: PolicyWhereInput
  }

  export type PolicyUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: PolicyWhereInput
    data: XOR<PolicyUpdateWithoutInvoicesInput, PolicyUncheckedUpdateWithoutInvoicesInput>
  }

  export type PolicyUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyPremium?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    insuredCount?: IntFieldUpdateOperationsInput | number
    status?: EnumPolicyStatusFieldUpdateOperationsInput | $Enums.PolicyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutPoliciesNestedInput
    insureds?: InsuredUpdateManyWithoutPolicyNestedInput
  }

  export type PolicyUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyPremium?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    insuredCount?: IntFieldUpdateOperationsInput | number
    status?: EnumPolicyStatusFieldUpdateOperationsInput | $Enums.PolicyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    insureds?: InsuredUncheckedUpdateManyWithoutPolicyNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    username: string
    name: string
    nationalId?: string | null
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    username: string
    name: string
    nationalId?: string | null
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationalId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationalId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    type: string
    title?: string | null
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsuredCreateManyPlanInput = {
    id?: string
    name: string
    nationalId: string
    policyId?: string | null
    status?: $Enums.InsuredStatus
    startDate: Date | string
    birthDate?: Date | string | null
    phone?: string | null
    email?: string | null
    dependents?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PolicyCreateManyPlanInput = {
    id: string
    company: string
    startDate: Date | string
    endDate: Date | string
    monthlyPremium: Decimal | DecimalJsLike | number | string
    insuredCount?: number
    status?: $Enums.PolicyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InsuredUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    status?: EnumInsuredStatusFieldUpdateOperationsInput | $Enums.InsuredStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dependents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policy?: PolicyUpdateOneWithoutInsuredsNestedInput
    authorizations?: AuthorizationUpdateManyWithoutInsuredNestedInput
    claims?: ClaimUpdateManyWithoutInsuredNestedInput
    services?: MedicalServiceUpdateManyWithoutInsuredNestedInput
  }

  export type InsuredUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    policyId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInsuredStatusFieldUpdateOperationsInput | $Enums.InsuredStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dependents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorizations?: AuthorizationUncheckedUpdateManyWithoutInsuredNestedInput
    claims?: ClaimUncheckedUpdateManyWithoutInsuredNestedInput
    services?: MedicalServiceUncheckedUpdateManyWithoutInsuredNestedInput
  }

  export type InsuredUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    policyId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInsuredStatusFieldUpdateOperationsInput | $Enums.InsuredStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dependents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyPremium?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    insuredCount?: IntFieldUpdateOperationsInput | number
    status?: EnumPolicyStatusFieldUpdateOperationsInput | $Enums.PolicyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    insureds?: InsuredUpdateManyWithoutPolicyNestedInput
    invoices?: InvoiceUpdateManyWithoutPolicyNestedInput
  }

  export type PolicyUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyPremium?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    insuredCount?: IntFieldUpdateOperationsInput | number
    status?: EnumPolicyStatusFieldUpdateOperationsInput | $Enums.PolicyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    insureds?: InsuredUncheckedUpdateManyWithoutPolicyNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutPolicyNestedInput
  }

  export type PolicyUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyPremium?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    insuredCount?: IntFieldUpdateOperationsInput | number
    status?: EnumPolicyStatusFieldUpdateOperationsInput | $Enums.PolicyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorizationCreateManyProviderInput = {
    id?: string
    insuredId: string
    procedure: string
    copay: Decimal | DecimalJsLike | number | string
    status?: $Enums.AuthorizationStatus
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClaimCreateManyProviderInput = {
    id?: string
    insuredId: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.ClaimStatus
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalServiceCreateManyProviderInput = {
    id?: string
    insuredId: string
    authorizationId?: string | null
    description: string
    cost: Decimal | DecimalJsLike | number | string
    copay: Decimal | DecimalJsLike | number | string
    date?: Date | string
    status?: $Enums.ServiceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProviderPaymentCreateManyProviderInput = {
    id?: string
    serviceId: string
    bankReference: string
    amount: Decimal | DecimalJsLike | number | string
    method: string
    date?: Date | string
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthorizationUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    procedure?: StringFieldUpdateOperationsInput | string
    copay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumAuthorizationStatusFieldUpdateOperationsInput | $Enums.AuthorizationStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    insured?: InsuredUpdateOneRequiredWithoutAuthorizationsNestedInput
    services?: MedicalServiceUpdateManyWithoutAuthorizationNestedInput
  }

  export type AuthorizationUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    insuredId?: StringFieldUpdateOperationsInput | string
    procedure?: StringFieldUpdateOperationsInput | string
    copay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumAuthorizationStatusFieldUpdateOperationsInput | $Enums.AuthorizationStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: MedicalServiceUncheckedUpdateManyWithoutAuthorizationNestedInput
  }

  export type AuthorizationUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    insuredId?: StringFieldUpdateOperationsInput | string
    procedure?: StringFieldUpdateOperationsInput | string
    copay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumAuthorizationStatusFieldUpdateOperationsInput | $Enums.AuthorizationStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumClaimStatusFieldUpdateOperationsInput | $Enums.ClaimStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    insured?: InsuredUpdateOneRequiredWithoutClaimsNestedInput
  }

  export type ClaimUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    insuredId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumClaimStatusFieldUpdateOperationsInput | $Enums.ClaimStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    insuredId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumClaimStatusFieldUpdateOperationsInput | $Enums.ClaimStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalServiceUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    copay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    insured?: InsuredUpdateOneRequiredWithoutServicesNestedInput
    authorization?: AuthorizationUpdateOneWithoutServicesNestedInput
    payment?: ProviderPaymentUpdateOneWithoutServiceNestedInput
  }

  export type MedicalServiceUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    insuredId?: StringFieldUpdateOperationsInput | string
    authorizationId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    copay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: ProviderPaymentUncheckedUpdateOneWithoutServiceNestedInput
  }

  export type MedicalServiceUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    insuredId?: StringFieldUpdateOperationsInput | string
    authorizationId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    copay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderPaymentUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankReference?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: MedicalServiceUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type ProviderPaymentUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    bankReference?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderPaymentUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    bankReference?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsuredCreateManyPolicyInput = {
    id?: string
    name: string
    nationalId: string
    planId: string
    status?: $Enums.InsuredStatus
    startDate: Date | string
    birthDate?: Date | string | null
    phone?: string | null
    email?: string | null
    dependents?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceCreateManyPolicyInput = {
    id?: string
    period: string
    issuedAt: Date | string
    dueDate: Date | string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.InvoiceStatus
    paidAt?: Date | string | null
    reference?: string | null
    reminderSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InsuredUpdateWithoutPolicyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    status?: EnumInsuredStatusFieldUpdateOperationsInput | $Enums.InsuredStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dependents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutInsuredsNestedInput
    authorizations?: AuthorizationUpdateManyWithoutInsuredNestedInput
    claims?: ClaimUpdateManyWithoutInsuredNestedInput
    services?: MedicalServiceUpdateManyWithoutInsuredNestedInput
  }

  export type InsuredUncheckedUpdateWithoutPolicyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    status?: EnumInsuredStatusFieldUpdateOperationsInput | $Enums.InsuredStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dependents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorizations?: AuthorizationUncheckedUpdateManyWithoutInsuredNestedInput
    claims?: ClaimUncheckedUpdateManyWithoutInsuredNestedInput
    services?: MedicalServiceUncheckedUpdateManyWithoutInsuredNestedInput
  }

  export type InsuredUncheckedUpdateManyWithoutPolicyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    status?: EnumInsuredStatusFieldUpdateOperationsInput | $Enums.InsuredStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dependents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUpdateWithoutPolicyInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    reminderSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateWithoutPolicyInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    reminderSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyWithoutPolicyInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    reminderSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorizationCreateManyInsuredInput = {
    id?: string
    providerId: string
    procedure: string
    copay: Decimal | DecimalJsLike | number | string
    status?: $Enums.AuthorizationStatus
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClaimCreateManyInsuredInput = {
    id?: string
    providerId: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.ClaimStatus
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalServiceCreateManyInsuredInput = {
    id?: string
    providerId: string
    authorizationId?: string | null
    description: string
    cost: Decimal | DecimalJsLike | number | string
    copay: Decimal | DecimalJsLike | number | string
    date?: Date | string
    status?: $Enums.ServiceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthorizationUpdateWithoutInsuredInput = {
    id?: StringFieldUpdateOperationsInput | string
    procedure?: StringFieldUpdateOperationsInput | string
    copay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumAuthorizationStatusFieldUpdateOperationsInput | $Enums.AuthorizationStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneRequiredWithoutAuthorizationsNestedInput
    services?: MedicalServiceUpdateManyWithoutAuthorizationNestedInput
  }

  export type AuthorizationUncheckedUpdateWithoutInsuredInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    procedure?: StringFieldUpdateOperationsInput | string
    copay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumAuthorizationStatusFieldUpdateOperationsInput | $Enums.AuthorizationStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: MedicalServiceUncheckedUpdateManyWithoutAuthorizationNestedInput
  }

  export type AuthorizationUncheckedUpdateManyWithoutInsuredInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    procedure?: StringFieldUpdateOperationsInput | string
    copay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumAuthorizationStatusFieldUpdateOperationsInput | $Enums.AuthorizationStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimUpdateWithoutInsuredInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumClaimStatusFieldUpdateOperationsInput | $Enums.ClaimStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneRequiredWithoutClaimsNestedInput
  }

  export type ClaimUncheckedUpdateWithoutInsuredInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumClaimStatusFieldUpdateOperationsInput | $Enums.ClaimStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimUncheckedUpdateManyWithoutInsuredInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumClaimStatusFieldUpdateOperationsInput | $Enums.ClaimStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalServiceUpdateWithoutInsuredInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    copay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneRequiredWithoutServicesNestedInput
    authorization?: AuthorizationUpdateOneWithoutServicesNestedInput
    payment?: ProviderPaymentUpdateOneWithoutServiceNestedInput
  }

  export type MedicalServiceUncheckedUpdateWithoutInsuredInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    authorizationId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    copay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: ProviderPaymentUncheckedUpdateOneWithoutServiceNestedInput
  }

  export type MedicalServiceUncheckedUpdateManyWithoutInsuredInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    authorizationId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    copay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalServiceCreateManyAuthorizationInput = {
    id?: string
    insuredId: string
    providerId: string
    description: string
    cost: Decimal | DecimalJsLike | number | string
    copay: Decimal | DecimalJsLike | number | string
    date?: Date | string
    status?: $Enums.ServiceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalServiceUpdateWithoutAuthorizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    copay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    insured?: InsuredUpdateOneRequiredWithoutServicesNestedInput
    provider?: ProviderUpdateOneRequiredWithoutServicesNestedInput
    payment?: ProviderPaymentUpdateOneWithoutServiceNestedInput
  }

  export type MedicalServiceUncheckedUpdateWithoutAuthorizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    insuredId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    copay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: ProviderPaymentUncheckedUpdateOneWithoutServiceNestedInput
  }

  export type MedicalServiceUncheckedUpdateManyWithoutAuthorizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    insuredId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    copay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}