
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model TourType
 * 
 */
export type TourType = $Result.DefaultSelection<Prisma.$TourTypePayload>
/**
 * Model Tour
 * 
 */
export type Tour = $Result.DefaultSelection<Prisma.$TourPayload>
/**
 * Model TicketCategory
 * 
 */
export type TicketCategory = $Result.DefaultSelection<Prisma.$TicketCategoryPayload>
/**
 * Model Schedule
 * 
 */
export type Schedule = $Result.DefaultSelection<Prisma.$SchedulePayload>
/**
 * Model ScheduleSlot
 * 
 */
export type ScheduleSlot = $Result.DefaultSelection<Prisma.$ScheduleSlotPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>
/**
 * Model Discount
 * 
 */
export type Discount = $Result.DefaultSelection<Prisma.$DiscountPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const OrderStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  CANCELLED: 'CANCELLED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

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
   * `prisma.tourType`: Exposes CRUD operations for the **TourType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TourTypes
    * const tourTypes = await prisma.tourType.findMany()
    * ```
    */
  get tourType(): Prisma.TourTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tour`: Exposes CRUD operations for the **Tour** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tours
    * const tours = await prisma.tour.findMany()
    * ```
    */
  get tour(): Prisma.TourDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketCategory`: Exposes CRUD operations for the **TicketCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketCategories
    * const ticketCategories = await prisma.ticketCategory.findMany()
    * ```
    */
  get ticketCategory(): Prisma.TicketCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **Schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedule.findMany()
    * ```
    */
  get schedule(): Prisma.ScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scheduleSlot`: Exposes CRUD operations for the **ScheduleSlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScheduleSlots
    * const scheduleSlots = await prisma.scheduleSlot.findMany()
    * ```
    */
  get scheduleSlot(): Prisma.ScheduleSlotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.discount`: Exposes CRUD operations for the **Discount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Discounts
    * const discounts = await prisma.discount.findMany()
    * ```
    */
  get discount(): Prisma.DiscountDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
      (Without<T, U> & U) | (Without<U, T> & T)
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
    TourType: 'TourType',
    Tour: 'Tour',
    TicketCategory: 'TicketCategory',
    Schedule: 'Schedule',
    ScheduleSlot: 'ScheduleSlot',
    Order: 'Order',
    OrderItem: 'OrderItem',
    Discount: 'Discount'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "tourType" | "tour" | "ticketCategory" | "schedule" | "scheduleSlot" | "order" | "orderItem" | "discount"
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
      TourType: {
        payload: Prisma.$TourTypePayload<ExtArgs>
        fields: Prisma.TourTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TourTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TourTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourTypePayload>
          }
          findFirst: {
            args: Prisma.TourTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TourTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourTypePayload>
          }
          findMany: {
            args: Prisma.TourTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourTypePayload>[]
          }
          create: {
            args: Prisma.TourTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourTypePayload>
          }
          createMany: {
            args: Prisma.TourTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TourTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourTypePayload>[]
          }
          delete: {
            args: Prisma.TourTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourTypePayload>
          }
          update: {
            args: Prisma.TourTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourTypePayload>
          }
          deleteMany: {
            args: Prisma.TourTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TourTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TourTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourTypePayload>[]
          }
          upsert: {
            args: Prisma.TourTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourTypePayload>
          }
          aggregate: {
            args: Prisma.TourTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTourType>
          }
          groupBy: {
            args: Prisma.TourTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TourTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TourTypeCountArgs<ExtArgs>
            result: $Utils.Optional<TourTypeCountAggregateOutputType> | number
          }
        }
      }
      Tour: {
        payload: Prisma.$TourPayload<ExtArgs>
        fields: Prisma.TourFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TourFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TourFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          findFirst: {
            args: Prisma.TourFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TourFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          findMany: {
            args: Prisma.TourFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>[]
          }
          create: {
            args: Prisma.TourCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          createMany: {
            args: Prisma.TourCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TourCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>[]
          }
          delete: {
            args: Prisma.TourDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          update: {
            args: Prisma.TourUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          deleteMany: {
            args: Prisma.TourDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TourUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TourUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>[]
          }
          upsert: {
            args: Prisma.TourUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          aggregate: {
            args: Prisma.TourAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTour>
          }
          groupBy: {
            args: Prisma.TourGroupByArgs<ExtArgs>
            result: $Utils.Optional<TourGroupByOutputType>[]
          }
          count: {
            args: Prisma.TourCountArgs<ExtArgs>
            result: $Utils.Optional<TourCountAggregateOutputType> | number
          }
        }
      }
      TicketCategory: {
        payload: Prisma.$TicketCategoryPayload<ExtArgs>
        fields: Prisma.TicketCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload>
          }
          findFirst: {
            args: Prisma.TicketCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload>
          }
          findMany: {
            args: Prisma.TicketCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload>[]
          }
          create: {
            args: Prisma.TicketCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload>
          }
          createMany: {
            args: Prisma.TicketCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload>[]
          }
          delete: {
            args: Prisma.TicketCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload>
          }
          update: {
            args: Prisma.TicketCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload>
          }
          deleteMany: {
            args: Prisma.TicketCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload>[]
          }
          upsert: {
            args: Prisma.TicketCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload>
          }
          aggregate: {
            args: Prisma.TicketCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketCategory>
          }
          groupBy: {
            args: Prisma.TicketCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCategoryCountAggregateOutputType> | number
          }
        }
      }
      Schedule: {
        payload: Prisma.$SchedulePayload<ExtArgs>
        fields: Prisma.ScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findFirst: {
            args: Prisma.ScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findMany: {
            args: Prisma.ScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          create: {
            args: Prisma.ScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          createMany: {
            args: Prisma.ScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          delete: {
            args: Prisma.ScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          update: {
            args: Prisma.ScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          deleteMany: {
            args: Prisma.ScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          upsert: {
            args: Prisma.ScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedule>
          }
          groupBy: {
            args: Prisma.ScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number
          }
        }
      }
      ScheduleSlot: {
        payload: Prisma.$ScheduleSlotPayload<ExtArgs>
        fields: Prisma.ScheduleSlotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleSlotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleSlotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleSlotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleSlotPayload>
          }
          findFirst: {
            args: Prisma.ScheduleSlotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleSlotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleSlotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleSlotPayload>
          }
          findMany: {
            args: Prisma.ScheduleSlotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleSlotPayload>[]
          }
          create: {
            args: Prisma.ScheduleSlotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleSlotPayload>
          }
          createMany: {
            args: Prisma.ScheduleSlotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduleSlotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleSlotPayload>[]
          }
          delete: {
            args: Prisma.ScheduleSlotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleSlotPayload>
          }
          update: {
            args: Prisma.ScheduleSlotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleSlotPayload>
          }
          deleteMany: {
            args: Prisma.ScheduleSlotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleSlotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduleSlotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleSlotPayload>[]
          }
          upsert: {
            args: Prisma.ScheduleSlotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleSlotPayload>
          }
          aggregate: {
            args: Prisma.ScheduleSlotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScheduleSlot>
          }
          groupBy: {
            args: Prisma.ScheduleSlotGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleSlotGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleSlotCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleSlotCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      Discount: {
        payload: Prisma.$DiscountPayload<ExtArgs>
        fields: Prisma.DiscountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiscountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiscountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>
          }
          findFirst: {
            args: Prisma.DiscountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiscountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>
          }
          findMany: {
            args: Prisma.DiscountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>[]
          }
          create: {
            args: Prisma.DiscountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>
          }
          createMany: {
            args: Prisma.DiscountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiscountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>[]
          }
          delete: {
            args: Prisma.DiscountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>
          }
          update: {
            args: Prisma.DiscountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>
          }
          deleteMany: {
            args: Prisma.DiscountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiscountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiscountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>[]
          }
          upsert: {
            args: Prisma.DiscountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>
          }
          aggregate: {
            args: Prisma.DiscountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscount>
          }
          groupBy: {
            args: Prisma.DiscountGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiscountGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiscountCountArgs<ExtArgs>
            result: $Utils.Optional<DiscountCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    tourType?: TourTypeOmit
    tour?: TourOmit
    ticketCategory?: TicketCategoryOmit
    schedule?: ScheduleOmit
    scheduleSlot?: ScheduleSlotOmit
    order?: OrderOmit
    orderItem?: OrderItemOmit
    discount?: DiscountOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    orders: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
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
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type TourTypeCountOutputType
   */

  export type TourTypeCountOutputType = {
    tours: number
  }

  export type TourTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tours?: boolean | TourTypeCountOutputTypeCountToursArgs
  }

  // Custom InputTypes
  /**
   * TourTypeCountOutputType without action
   */
  export type TourTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourTypeCountOutputType
     */
    select?: TourTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TourTypeCountOutputType without action
   */
  export type TourTypeCountOutputTypeCountToursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourWhereInput
  }


  /**
   * Count Type TourCountOutputType
   */

  export type TourCountOutputType = {
    schedules: number
    tickets: number
  }

  export type TourCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedules?: boolean | TourCountOutputTypeCountSchedulesArgs
    tickets?: boolean | TourCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * TourCountOutputType without action
   */
  export type TourCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourCountOutputType
     */
    select?: TourCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TourCountOutputType without action
   */
  export type TourCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
  }

  /**
   * TourCountOutputType without action
   */
  export type TourCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketCategoryWhereInput
  }


  /**
   * Count Type TicketCategoryCountOutputType
   */

  export type TicketCategoryCountOutputType = {
    orders: number
  }

  export type TicketCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | TicketCategoryCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * TicketCategoryCountOutputType without action
   */
  export type TicketCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategoryCountOutputType
     */
    select?: TicketCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketCategoryCountOutputType without action
   */
  export type TicketCategoryCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type ScheduleCountOutputType
   */

  export type ScheduleCountOutputType = {
    slots: number
  }

  export type ScheduleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slots?: boolean | ScheduleCountOutputTypeCountSlotsArgs
  }

  // Custom InputTypes
  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleCountOutputType
     */
    select?: ScheduleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeCountSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleSlotWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    items: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | OrderCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string | null
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orders?: boolean | User$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | User$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string | null
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
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
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
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
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
   * Model TourType
   */

  export type AggregateTourType = {
    _count: TourTypeCountAggregateOutputType | null
    _avg: TourTypeAvgAggregateOutputType | null
    _sum: TourTypeSumAggregateOutputType | null
    _min: TourTypeMinAggregateOutputType | null
    _max: TourTypeMaxAggregateOutputType | null
  }

  export type TourTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type TourTypeSumAggregateOutputType = {
    id: number | null
  }

  export type TourTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TourTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TourTypeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TourTypeAvgAggregateInputType = {
    id?: true
  }

  export type TourTypeSumAggregateInputType = {
    id?: true
  }

  export type TourTypeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TourTypeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TourTypeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TourTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourType to aggregate.
     */
    where?: TourTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourTypes to fetch.
     */
    orderBy?: TourTypeOrderByWithRelationInput | TourTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TourTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TourTypes
    **/
    _count?: true | TourTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TourTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TourTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TourTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TourTypeMaxAggregateInputType
  }

  export type GetTourTypeAggregateType<T extends TourTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateTourType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTourType[P]>
      : GetScalarType<T[P], AggregateTourType[P]>
  }




  export type TourTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourTypeWhereInput
    orderBy?: TourTypeOrderByWithAggregationInput | TourTypeOrderByWithAggregationInput[]
    by: TourTypeScalarFieldEnum[] | TourTypeScalarFieldEnum
    having?: TourTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TourTypeCountAggregateInputType | true
    _avg?: TourTypeAvgAggregateInputType
    _sum?: TourTypeSumAggregateInputType
    _min?: TourTypeMinAggregateInputType
    _max?: TourTypeMaxAggregateInputType
  }

  export type TourTypeGroupByOutputType = {
    id: number
    name: string
    _count: TourTypeCountAggregateOutputType | null
    _avg: TourTypeAvgAggregateOutputType | null
    _sum: TourTypeSumAggregateOutputType | null
    _min: TourTypeMinAggregateOutputType | null
    _max: TourTypeMaxAggregateOutputType | null
  }

  type GetTourTypeGroupByPayload<T extends TourTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TourTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TourTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TourTypeGroupByOutputType[P]>
            : GetScalarType<T[P], TourTypeGroupByOutputType[P]>
        }
      >
    >


  export type TourTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tours?: boolean | TourType$toursArgs<ExtArgs>
    _count?: boolean | TourTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourType"]>

  export type TourTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tourType"]>

  export type TourTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tourType"]>

  export type TourTypeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TourTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["tourType"]>
  export type TourTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tours?: boolean | TourType$toursArgs<ExtArgs>
    _count?: boolean | TourTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TourTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TourTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TourTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TourType"
    objects: {
      tours: Prisma.$TourPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["tourType"]>
    composites: {}
  }

  type TourTypeGetPayload<S extends boolean | null | undefined | TourTypeDefaultArgs> = $Result.GetResult<Prisma.$TourTypePayload, S>

  type TourTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TourTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TourTypeCountAggregateInputType | true
    }

  export interface TourTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TourType'], meta: { name: 'TourType' } }
    /**
     * Find zero or one TourType that matches the filter.
     * @param {TourTypeFindUniqueArgs} args - Arguments to find a TourType
     * @example
     * // Get one TourType
     * const tourType = await prisma.tourType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TourTypeFindUniqueArgs>(args: SelectSubset<T, TourTypeFindUniqueArgs<ExtArgs>>): Prisma__TourTypeClient<$Result.GetResult<Prisma.$TourTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TourType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TourTypeFindUniqueOrThrowArgs} args - Arguments to find a TourType
     * @example
     * // Get one TourType
     * const tourType = await prisma.tourType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TourTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, TourTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TourTypeClient<$Result.GetResult<Prisma.$TourTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourTypeFindFirstArgs} args - Arguments to find a TourType
     * @example
     * // Get one TourType
     * const tourType = await prisma.tourType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TourTypeFindFirstArgs>(args?: SelectSubset<T, TourTypeFindFirstArgs<ExtArgs>>): Prisma__TourTypeClient<$Result.GetResult<Prisma.$TourTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourTypeFindFirstOrThrowArgs} args - Arguments to find a TourType
     * @example
     * // Get one TourType
     * const tourType = await prisma.tourType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TourTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, TourTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TourTypeClient<$Result.GetResult<Prisma.$TourTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TourTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TourTypes
     * const tourTypes = await prisma.tourType.findMany()
     * 
     * // Get first 10 TourTypes
     * const tourTypes = await prisma.tourType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tourTypeWithIdOnly = await prisma.tourType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TourTypeFindManyArgs>(args?: SelectSubset<T, TourTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TourType.
     * @param {TourTypeCreateArgs} args - Arguments to create a TourType.
     * @example
     * // Create one TourType
     * const TourType = await prisma.tourType.create({
     *   data: {
     *     // ... data to create a TourType
     *   }
     * })
     * 
     */
    create<T extends TourTypeCreateArgs>(args: SelectSubset<T, TourTypeCreateArgs<ExtArgs>>): Prisma__TourTypeClient<$Result.GetResult<Prisma.$TourTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TourTypes.
     * @param {TourTypeCreateManyArgs} args - Arguments to create many TourTypes.
     * @example
     * // Create many TourTypes
     * const tourType = await prisma.tourType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TourTypeCreateManyArgs>(args?: SelectSubset<T, TourTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TourTypes and returns the data saved in the database.
     * @param {TourTypeCreateManyAndReturnArgs} args - Arguments to create many TourTypes.
     * @example
     * // Create many TourTypes
     * const tourType = await prisma.tourType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TourTypes and only return the `id`
     * const tourTypeWithIdOnly = await prisma.tourType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TourTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, TourTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TourType.
     * @param {TourTypeDeleteArgs} args - Arguments to delete one TourType.
     * @example
     * // Delete one TourType
     * const TourType = await prisma.tourType.delete({
     *   where: {
     *     // ... filter to delete one TourType
     *   }
     * })
     * 
     */
    delete<T extends TourTypeDeleteArgs>(args: SelectSubset<T, TourTypeDeleteArgs<ExtArgs>>): Prisma__TourTypeClient<$Result.GetResult<Prisma.$TourTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TourType.
     * @param {TourTypeUpdateArgs} args - Arguments to update one TourType.
     * @example
     * // Update one TourType
     * const tourType = await prisma.tourType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TourTypeUpdateArgs>(args: SelectSubset<T, TourTypeUpdateArgs<ExtArgs>>): Prisma__TourTypeClient<$Result.GetResult<Prisma.$TourTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TourTypes.
     * @param {TourTypeDeleteManyArgs} args - Arguments to filter TourTypes to delete.
     * @example
     * // Delete a few TourTypes
     * const { count } = await prisma.tourType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TourTypeDeleteManyArgs>(args?: SelectSubset<T, TourTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TourTypes
     * const tourType = await prisma.tourType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TourTypeUpdateManyArgs>(args: SelectSubset<T, TourTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourTypes and returns the data updated in the database.
     * @param {TourTypeUpdateManyAndReturnArgs} args - Arguments to update many TourTypes.
     * @example
     * // Update many TourTypes
     * const tourType = await prisma.tourType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TourTypes and only return the `id`
     * const tourTypeWithIdOnly = await prisma.tourType.updateManyAndReturn({
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
    updateManyAndReturn<T extends TourTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, TourTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TourType.
     * @param {TourTypeUpsertArgs} args - Arguments to update or create a TourType.
     * @example
     * // Update or create a TourType
     * const tourType = await prisma.tourType.upsert({
     *   create: {
     *     // ... data to create a TourType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TourType we want to update
     *   }
     * })
     */
    upsert<T extends TourTypeUpsertArgs>(args: SelectSubset<T, TourTypeUpsertArgs<ExtArgs>>): Prisma__TourTypeClient<$Result.GetResult<Prisma.$TourTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TourTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourTypeCountArgs} args - Arguments to filter TourTypes to count.
     * @example
     * // Count the number of TourTypes
     * const count = await prisma.tourType.count({
     *   where: {
     *     // ... the filter for the TourTypes we want to count
     *   }
     * })
    **/
    count<T extends TourTypeCountArgs>(
      args?: Subset<T, TourTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TourTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TourType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TourTypeAggregateArgs>(args: Subset<T, TourTypeAggregateArgs>): Prisma.PrismaPromise<GetTourTypeAggregateType<T>>

    /**
     * Group by TourType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourTypeGroupByArgs} args - Group by arguments.
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
      T extends TourTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TourTypeGroupByArgs['orderBy'] }
        : { orderBy?: TourTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TourTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTourTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TourType model
   */
  readonly fields: TourTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TourType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TourTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tours<T extends TourType$toursArgs<ExtArgs> = {}>(args?: Subset<T, TourType$toursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TourType model
   */
  interface TourTypeFieldRefs {
    readonly id: FieldRef<"TourType", 'Int'>
    readonly name: FieldRef<"TourType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TourType findUnique
   */
  export type TourTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourType
     */
    select?: TourTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourType
     */
    omit?: TourTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourTypeInclude<ExtArgs> | null
    /**
     * Filter, which TourType to fetch.
     */
    where: TourTypeWhereUniqueInput
  }

  /**
   * TourType findUniqueOrThrow
   */
  export type TourTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourType
     */
    select?: TourTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourType
     */
    omit?: TourTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourTypeInclude<ExtArgs> | null
    /**
     * Filter, which TourType to fetch.
     */
    where: TourTypeWhereUniqueInput
  }

  /**
   * TourType findFirst
   */
  export type TourTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourType
     */
    select?: TourTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourType
     */
    omit?: TourTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourTypeInclude<ExtArgs> | null
    /**
     * Filter, which TourType to fetch.
     */
    where?: TourTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourTypes to fetch.
     */
    orderBy?: TourTypeOrderByWithRelationInput | TourTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourTypes.
     */
    cursor?: TourTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourTypes.
     */
    distinct?: TourTypeScalarFieldEnum | TourTypeScalarFieldEnum[]
  }

  /**
   * TourType findFirstOrThrow
   */
  export type TourTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourType
     */
    select?: TourTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourType
     */
    omit?: TourTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourTypeInclude<ExtArgs> | null
    /**
     * Filter, which TourType to fetch.
     */
    where?: TourTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourTypes to fetch.
     */
    orderBy?: TourTypeOrderByWithRelationInput | TourTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourTypes.
     */
    cursor?: TourTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourTypes.
     */
    distinct?: TourTypeScalarFieldEnum | TourTypeScalarFieldEnum[]
  }

  /**
   * TourType findMany
   */
  export type TourTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourType
     */
    select?: TourTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourType
     */
    omit?: TourTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourTypeInclude<ExtArgs> | null
    /**
     * Filter, which TourTypes to fetch.
     */
    where?: TourTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourTypes to fetch.
     */
    orderBy?: TourTypeOrderByWithRelationInput | TourTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TourTypes.
     */
    cursor?: TourTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourTypes.
     */
    skip?: number
    distinct?: TourTypeScalarFieldEnum | TourTypeScalarFieldEnum[]
  }

  /**
   * TourType create
   */
  export type TourTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourType
     */
    select?: TourTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourType
     */
    omit?: TourTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a TourType.
     */
    data: XOR<TourTypeCreateInput, TourTypeUncheckedCreateInput>
  }

  /**
   * TourType createMany
   */
  export type TourTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TourTypes.
     */
    data: TourTypeCreateManyInput | TourTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TourType createManyAndReturn
   */
  export type TourTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourType
     */
    select?: TourTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourType
     */
    omit?: TourTypeOmit<ExtArgs> | null
    /**
     * The data used to create many TourTypes.
     */
    data: TourTypeCreateManyInput | TourTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TourType update
   */
  export type TourTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourType
     */
    select?: TourTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourType
     */
    omit?: TourTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a TourType.
     */
    data: XOR<TourTypeUpdateInput, TourTypeUncheckedUpdateInput>
    /**
     * Choose, which TourType to update.
     */
    where: TourTypeWhereUniqueInput
  }

  /**
   * TourType updateMany
   */
  export type TourTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TourTypes.
     */
    data: XOR<TourTypeUpdateManyMutationInput, TourTypeUncheckedUpdateManyInput>
    /**
     * Filter which TourTypes to update
     */
    where?: TourTypeWhereInput
    /**
     * Limit how many TourTypes to update.
     */
    limit?: number
  }

  /**
   * TourType updateManyAndReturn
   */
  export type TourTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourType
     */
    select?: TourTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourType
     */
    omit?: TourTypeOmit<ExtArgs> | null
    /**
     * The data used to update TourTypes.
     */
    data: XOR<TourTypeUpdateManyMutationInput, TourTypeUncheckedUpdateManyInput>
    /**
     * Filter which TourTypes to update
     */
    where?: TourTypeWhereInput
    /**
     * Limit how many TourTypes to update.
     */
    limit?: number
  }

  /**
   * TourType upsert
   */
  export type TourTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourType
     */
    select?: TourTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourType
     */
    omit?: TourTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the TourType to update in case it exists.
     */
    where: TourTypeWhereUniqueInput
    /**
     * In case the TourType found by the `where` argument doesn't exist, create a new TourType with this data.
     */
    create: XOR<TourTypeCreateInput, TourTypeUncheckedCreateInput>
    /**
     * In case the TourType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TourTypeUpdateInput, TourTypeUncheckedUpdateInput>
  }

  /**
   * TourType delete
   */
  export type TourTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourType
     */
    select?: TourTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourType
     */
    omit?: TourTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourTypeInclude<ExtArgs> | null
    /**
     * Filter which TourType to delete.
     */
    where: TourTypeWhereUniqueInput
  }

  /**
   * TourType deleteMany
   */
  export type TourTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourTypes to delete
     */
    where?: TourTypeWhereInput
    /**
     * Limit how many TourTypes to delete.
     */
    limit?: number
  }

  /**
   * TourType.tours
   */
  export type TourType$toursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    where?: TourWhereInput
    orderBy?: TourOrderByWithRelationInput | TourOrderByWithRelationInput[]
    cursor?: TourWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TourScalarFieldEnum | TourScalarFieldEnum[]
  }

  /**
   * TourType without action
   */
  export type TourTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourType
     */
    select?: TourTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourType
     */
    omit?: TourTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourTypeInclude<ExtArgs> | null
  }


  /**
   * Model Tour
   */

  export type AggregateTour = {
    _count: TourCountAggregateOutputType | null
    _avg: TourAvgAggregateOutputType | null
    _sum: TourSumAggregateOutputType | null
    _min: TourMinAggregateOutputType | null
    _max: TourMaxAggregateOutputType | null
  }

  export type TourAvgAggregateOutputType = {
    id: number | null
    typeId: number | null
    basePrice: number | null
  }

  export type TourSumAggregateOutputType = {
    id: number | null
    typeId: number | null
    basePrice: number | null
  }

  export type TourMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    typeId: number | null
    basePrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TourMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    typeId: number | null
    basePrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TourCountAggregateOutputType = {
    id: number
    title: number
    description: number
    typeId: number
    basePrice: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TourAvgAggregateInputType = {
    id?: true
    typeId?: true
    basePrice?: true
  }

  export type TourSumAggregateInputType = {
    id?: true
    typeId?: true
    basePrice?: true
  }

  export type TourMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    typeId?: true
    basePrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TourMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    typeId?: true
    basePrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TourCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    typeId?: true
    basePrice?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TourAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tour to aggregate.
     */
    where?: TourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tours to fetch.
     */
    orderBy?: TourOrderByWithRelationInput | TourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tours
    **/
    _count?: true | TourCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TourAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TourSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TourMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TourMaxAggregateInputType
  }

  export type GetTourAggregateType<T extends TourAggregateArgs> = {
        [P in keyof T & keyof AggregateTour]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTour[P]>
      : GetScalarType<T[P], AggregateTour[P]>
  }




  export type TourGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourWhereInput
    orderBy?: TourOrderByWithAggregationInput | TourOrderByWithAggregationInput[]
    by: TourScalarFieldEnum[] | TourScalarFieldEnum
    having?: TourScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TourCountAggregateInputType | true
    _avg?: TourAvgAggregateInputType
    _sum?: TourSumAggregateInputType
    _min?: TourMinAggregateInputType
    _max?: TourMaxAggregateInputType
  }

  export type TourGroupByOutputType = {
    id: number
    title: string
    description: string
    typeId: number
    basePrice: number
    createdAt: Date
    updatedAt: Date
    _count: TourCountAggregateOutputType | null
    _avg: TourAvgAggregateOutputType | null
    _sum: TourSumAggregateOutputType | null
    _min: TourMinAggregateOutputType | null
    _max: TourMaxAggregateOutputType | null
  }

  type GetTourGroupByPayload<T extends TourGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TourGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TourGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TourGroupByOutputType[P]>
            : GetScalarType<T[P], TourGroupByOutputType[P]>
        }
      >
    >


  export type TourSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    typeId?: boolean
    basePrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean | TourTypeDefaultArgs<ExtArgs>
    schedules?: boolean | Tour$schedulesArgs<ExtArgs>
    tickets?: boolean | Tour$ticketsArgs<ExtArgs>
    _count?: boolean | TourCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tour"]>

  export type TourSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    typeId?: boolean
    basePrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean | TourTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tour"]>

  export type TourSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    typeId?: boolean
    basePrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean | TourTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tour"]>

  export type TourSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    typeId?: boolean
    basePrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TourOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "typeId" | "basePrice" | "createdAt" | "updatedAt", ExtArgs["result"]["tour"]>
  export type TourInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | TourTypeDefaultArgs<ExtArgs>
    schedules?: boolean | Tour$schedulesArgs<ExtArgs>
    tickets?: boolean | Tour$ticketsArgs<ExtArgs>
    _count?: boolean | TourCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TourIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | TourTypeDefaultArgs<ExtArgs>
  }
  export type TourIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | TourTypeDefaultArgs<ExtArgs>
  }

  export type $TourPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tour"
    objects: {
      type: Prisma.$TourTypePayload<ExtArgs>
      schedules: Prisma.$SchedulePayload<ExtArgs>[]
      tickets: Prisma.$TicketCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      typeId: number
      basePrice: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tour"]>
    composites: {}
  }

  type TourGetPayload<S extends boolean | null | undefined | TourDefaultArgs> = $Result.GetResult<Prisma.$TourPayload, S>

  type TourCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TourFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TourCountAggregateInputType | true
    }

  export interface TourDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tour'], meta: { name: 'Tour' } }
    /**
     * Find zero or one Tour that matches the filter.
     * @param {TourFindUniqueArgs} args - Arguments to find a Tour
     * @example
     * // Get one Tour
     * const tour = await prisma.tour.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TourFindUniqueArgs>(args: SelectSubset<T, TourFindUniqueArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tour that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TourFindUniqueOrThrowArgs} args - Arguments to find a Tour
     * @example
     * // Get one Tour
     * const tour = await prisma.tour.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TourFindUniqueOrThrowArgs>(args: SelectSubset<T, TourFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tour that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourFindFirstArgs} args - Arguments to find a Tour
     * @example
     * // Get one Tour
     * const tour = await prisma.tour.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TourFindFirstArgs>(args?: SelectSubset<T, TourFindFirstArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tour that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourFindFirstOrThrowArgs} args - Arguments to find a Tour
     * @example
     * // Get one Tour
     * const tour = await prisma.tour.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TourFindFirstOrThrowArgs>(args?: SelectSubset<T, TourFindFirstOrThrowArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tours
     * const tours = await prisma.tour.findMany()
     * 
     * // Get first 10 Tours
     * const tours = await prisma.tour.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tourWithIdOnly = await prisma.tour.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TourFindManyArgs>(args?: SelectSubset<T, TourFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tour.
     * @param {TourCreateArgs} args - Arguments to create a Tour.
     * @example
     * // Create one Tour
     * const Tour = await prisma.tour.create({
     *   data: {
     *     // ... data to create a Tour
     *   }
     * })
     * 
     */
    create<T extends TourCreateArgs>(args: SelectSubset<T, TourCreateArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tours.
     * @param {TourCreateManyArgs} args - Arguments to create many Tours.
     * @example
     * // Create many Tours
     * const tour = await prisma.tour.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TourCreateManyArgs>(args?: SelectSubset<T, TourCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tours and returns the data saved in the database.
     * @param {TourCreateManyAndReturnArgs} args - Arguments to create many Tours.
     * @example
     * // Create many Tours
     * const tour = await prisma.tour.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tours and only return the `id`
     * const tourWithIdOnly = await prisma.tour.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TourCreateManyAndReturnArgs>(args?: SelectSubset<T, TourCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tour.
     * @param {TourDeleteArgs} args - Arguments to delete one Tour.
     * @example
     * // Delete one Tour
     * const Tour = await prisma.tour.delete({
     *   where: {
     *     // ... filter to delete one Tour
     *   }
     * })
     * 
     */
    delete<T extends TourDeleteArgs>(args: SelectSubset<T, TourDeleteArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tour.
     * @param {TourUpdateArgs} args - Arguments to update one Tour.
     * @example
     * // Update one Tour
     * const tour = await prisma.tour.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TourUpdateArgs>(args: SelectSubset<T, TourUpdateArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tours.
     * @param {TourDeleteManyArgs} args - Arguments to filter Tours to delete.
     * @example
     * // Delete a few Tours
     * const { count } = await prisma.tour.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TourDeleteManyArgs>(args?: SelectSubset<T, TourDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tours
     * const tour = await prisma.tour.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TourUpdateManyArgs>(args: SelectSubset<T, TourUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tours and returns the data updated in the database.
     * @param {TourUpdateManyAndReturnArgs} args - Arguments to update many Tours.
     * @example
     * // Update many Tours
     * const tour = await prisma.tour.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tours and only return the `id`
     * const tourWithIdOnly = await prisma.tour.updateManyAndReturn({
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
    updateManyAndReturn<T extends TourUpdateManyAndReturnArgs>(args: SelectSubset<T, TourUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tour.
     * @param {TourUpsertArgs} args - Arguments to update or create a Tour.
     * @example
     * // Update or create a Tour
     * const tour = await prisma.tour.upsert({
     *   create: {
     *     // ... data to create a Tour
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tour we want to update
     *   }
     * })
     */
    upsert<T extends TourUpsertArgs>(args: SelectSubset<T, TourUpsertArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourCountArgs} args - Arguments to filter Tours to count.
     * @example
     * // Count the number of Tours
     * const count = await prisma.tour.count({
     *   where: {
     *     // ... the filter for the Tours we want to count
     *   }
     * })
    **/
    count<T extends TourCountArgs>(
      args?: Subset<T, TourCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TourCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tour.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TourAggregateArgs>(args: Subset<T, TourAggregateArgs>): Prisma.PrismaPromise<GetTourAggregateType<T>>

    /**
     * Group by Tour.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourGroupByArgs} args - Group by arguments.
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
      T extends TourGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TourGroupByArgs['orderBy'] }
        : { orderBy?: TourGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TourGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTourGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tour model
   */
  readonly fields: TourFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tour.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TourClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    type<T extends TourTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TourTypeDefaultArgs<ExtArgs>>): Prisma__TourTypeClient<$Result.GetResult<Prisma.$TourTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    schedules<T extends Tour$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, Tour$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends Tour$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Tour$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tour model
   */
  interface TourFieldRefs {
    readonly id: FieldRef<"Tour", 'Int'>
    readonly title: FieldRef<"Tour", 'String'>
    readonly description: FieldRef<"Tour", 'String'>
    readonly typeId: FieldRef<"Tour", 'Int'>
    readonly basePrice: FieldRef<"Tour", 'Float'>
    readonly createdAt: FieldRef<"Tour", 'DateTime'>
    readonly updatedAt: FieldRef<"Tour", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tour findUnique
   */
  export type TourFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter, which Tour to fetch.
     */
    where: TourWhereUniqueInput
  }

  /**
   * Tour findUniqueOrThrow
   */
  export type TourFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter, which Tour to fetch.
     */
    where: TourWhereUniqueInput
  }

  /**
   * Tour findFirst
   */
  export type TourFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter, which Tour to fetch.
     */
    where?: TourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tours to fetch.
     */
    orderBy?: TourOrderByWithRelationInput | TourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tours.
     */
    cursor?: TourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tours.
     */
    distinct?: TourScalarFieldEnum | TourScalarFieldEnum[]
  }

  /**
   * Tour findFirstOrThrow
   */
  export type TourFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter, which Tour to fetch.
     */
    where?: TourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tours to fetch.
     */
    orderBy?: TourOrderByWithRelationInput | TourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tours.
     */
    cursor?: TourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tours.
     */
    distinct?: TourScalarFieldEnum | TourScalarFieldEnum[]
  }

  /**
   * Tour findMany
   */
  export type TourFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter, which Tours to fetch.
     */
    where?: TourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tours to fetch.
     */
    orderBy?: TourOrderByWithRelationInput | TourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tours.
     */
    cursor?: TourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tours.
     */
    skip?: number
    distinct?: TourScalarFieldEnum | TourScalarFieldEnum[]
  }

  /**
   * Tour create
   */
  export type TourCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * The data needed to create a Tour.
     */
    data: XOR<TourCreateInput, TourUncheckedCreateInput>
  }

  /**
   * Tour createMany
   */
  export type TourCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tours.
     */
    data: TourCreateManyInput | TourCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tour createManyAndReturn
   */
  export type TourCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * The data used to create many Tours.
     */
    data: TourCreateManyInput | TourCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tour update
   */
  export type TourUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * The data needed to update a Tour.
     */
    data: XOR<TourUpdateInput, TourUncheckedUpdateInput>
    /**
     * Choose, which Tour to update.
     */
    where: TourWhereUniqueInput
  }

  /**
   * Tour updateMany
   */
  export type TourUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tours.
     */
    data: XOR<TourUpdateManyMutationInput, TourUncheckedUpdateManyInput>
    /**
     * Filter which Tours to update
     */
    where?: TourWhereInput
    /**
     * Limit how many Tours to update.
     */
    limit?: number
  }

  /**
   * Tour updateManyAndReturn
   */
  export type TourUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * The data used to update Tours.
     */
    data: XOR<TourUpdateManyMutationInput, TourUncheckedUpdateManyInput>
    /**
     * Filter which Tours to update
     */
    where?: TourWhereInput
    /**
     * Limit how many Tours to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tour upsert
   */
  export type TourUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * The filter to search for the Tour to update in case it exists.
     */
    where: TourWhereUniqueInput
    /**
     * In case the Tour found by the `where` argument doesn't exist, create a new Tour with this data.
     */
    create: XOR<TourCreateInput, TourUncheckedCreateInput>
    /**
     * In case the Tour was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TourUpdateInput, TourUncheckedUpdateInput>
  }

  /**
   * Tour delete
   */
  export type TourDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter which Tour to delete.
     */
    where: TourWhereUniqueInput
  }

  /**
   * Tour deleteMany
   */
  export type TourDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tours to delete
     */
    where?: TourWhereInput
    /**
     * Limit how many Tours to delete.
     */
    limit?: number
  }

  /**
   * Tour.schedules
   */
  export type Tour$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    cursor?: ScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Tour.tickets
   */
  export type Tour$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    where?: TicketCategoryWhereInput
    orderBy?: TicketCategoryOrderByWithRelationInput | TicketCategoryOrderByWithRelationInput[]
    cursor?: TicketCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketCategoryScalarFieldEnum | TicketCategoryScalarFieldEnum[]
  }

  /**
   * Tour without action
   */
  export type TourDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
  }


  /**
   * Model TicketCategory
   */

  export type AggregateTicketCategory = {
    _count: TicketCategoryCountAggregateOutputType | null
    _avg: TicketCategoryAvgAggregateOutputType | null
    _sum: TicketCategorySumAggregateOutputType | null
    _min: TicketCategoryMinAggregateOutputType | null
    _max: TicketCategoryMaxAggregateOutputType | null
  }

  export type TicketCategoryAvgAggregateOutputType = {
    id: number | null
    price: number | null
    tourId: number | null
  }

  export type TicketCategorySumAggregateOutputType = {
    id: number | null
    price: number | null
    tourId: number | null
  }

  export type TicketCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    tourId: number | null
  }

  export type TicketCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    tourId: number | null
  }

  export type TicketCategoryCountAggregateOutputType = {
    id: number
    name: number
    price: number
    tourId: number
    _all: number
  }


  export type TicketCategoryAvgAggregateInputType = {
    id?: true
    price?: true
    tourId?: true
  }

  export type TicketCategorySumAggregateInputType = {
    id?: true
    price?: true
    tourId?: true
  }

  export type TicketCategoryMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    tourId?: true
  }

  export type TicketCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    tourId?: true
  }

  export type TicketCategoryCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    tourId?: true
    _all?: true
  }

  export type TicketCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketCategory to aggregate.
     */
    where?: TicketCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketCategories to fetch.
     */
    orderBy?: TicketCategoryOrderByWithRelationInput | TicketCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketCategories
    **/
    _count?: true | TicketCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketCategoryMaxAggregateInputType
  }

  export type GetTicketCategoryAggregateType<T extends TicketCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketCategory[P]>
      : GetScalarType<T[P], AggregateTicketCategory[P]>
  }




  export type TicketCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketCategoryWhereInput
    orderBy?: TicketCategoryOrderByWithAggregationInput | TicketCategoryOrderByWithAggregationInput[]
    by: TicketCategoryScalarFieldEnum[] | TicketCategoryScalarFieldEnum
    having?: TicketCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCategoryCountAggregateInputType | true
    _avg?: TicketCategoryAvgAggregateInputType
    _sum?: TicketCategorySumAggregateInputType
    _min?: TicketCategoryMinAggregateInputType
    _max?: TicketCategoryMaxAggregateInputType
  }

  export type TicketCategoryGroupByOutputType = {
    id: number
    name: string
    price: number
    tourId: number
    _count: TicketCategoryCountAggregateOutputType | null
    _avg: TicketCategoryAvgAggregateOutputType | null
    _sum: TicketCategorySumAggregateOutputType | null
    _min: TicketCategoryMinAggregateOutputType | null
    _max: TicketCategoryMaxAggregateOutputType | null
  }

  type GetTicketCategoryGroupByPayload<T extends TicketCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], TicketCategoryGroupByOutputType[P]>
        }
      >
    >


  export type TicketCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    tourId?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
    orders?: boolean | TicketCategory$ordersArgs<ExtArgs>
    _count?: boolean | TicketCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketCategory"]>

  export type TicketCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    tourId?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketCategory"]>

  export type TicketCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    tourId?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketCategory"]>

  export type TicketCategorySelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    tourId?: boolean
  }

  export type TicketCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "tourId", ExtArgs["result"]["ticketCategory"]>
  export type TicketCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
    orders?: boolean | TicketCategory$ordersArgs<ExtArgs>
    _count?: boolean | TicketCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TicketCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type TicketCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }

  export type $TicketCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketCategory"
    objects: {
      tour: Prisma.$TourPayload<ExtArgs>
      orders: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: number
      tourId: number
    }, ExtArgs["result"]["ticketCategory"]>
    composites: {}
  }

  type TicketCategoryGetPayload<S extends boolean | null | undefined | TicketCategoryDefaultArgs> = $Result.GetResult<Prisma.$TicketCategoryPayload, S>

  type TicketCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCategoryCountAggregateInputType | true
    }

  export interface TicketCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketCategory'], meta: { name: 'TicketCategory' } }
    /**
     * Find zero or one TicketCategory that matches the filter.
     * @param {TicketCategoryFindUniqueArgs} args - Arguments to find a TicketCategory
     * @example
     * // Get one TicketCategory
     * const ticketCategory = await prisma.ticketCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketCategoryFindUniqueArgs>(args: SelectSubset<T, TicketCategoryFindUniqueArgs<ExtArgs>>): Prisma__TicketCategoryClient<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketCategoryFindUniqueOrThrowArgs} args - Arguments to find a TicketCategory
     * @example
     * // Get one TicketCategory
     * const ticketCategory = await prisma.ticketCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketCategoryClient<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCategoryFindFirstArgs} args - Arguments to find a TicketCategory
     * @example
     * // Get one TicketCategory
     * const ticketCategory = await prisma.ticketCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketCategoryFindFirstArgs>(args?: SelectSubset<T, TicketCategoryFindFirstArgs<ExtArgs>>): Prisma__TicketCategoryClient<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCategoryFindFirstOrThrowArgs} args - Arguments to find a TicketCategory
     * @example
     * // Get one TicketCategory
     * const ticketCategory = await prisma.ticketCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketCategoryClient<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketCategories
     * const ticketCategories = await prisma.ticketCategory.findMany()
     * 
     * // Get first 10 TicketCategories
     * const ticketCategories = await prisma.ticketCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketCategoryWithIdOnly = await prisma.ticketCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketCategoryFindManyArgs>(args?: SelectSubset<T, TicketCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketCategory.
     * @param {TicketCategoryCreateArgs} args - Arguments to create a TicketCategory.
     * @example
     * // Create one TicketCategory
     * const TicketCategory = await prisma.ticketCategory.create({
     *   data: {
     *     // ... data to create a TicketCategory
     *   }
     * })
     * 
     */
    create<T extends TicketCategoryCreateArgs>(args: SelectSubset<T, TicketCategoryCreateArgs<ExtArgs>>): Prisma__TicketCategoryClient<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketCategories.
     * @param {TicketCategoryCreateManyArgs} args - Arguments to create many TicketCategories.
     * @example
     * // Create many TicketCategories
     * const ticketCategory = await prisma.ticketCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCategoryCreateManyArgs>(args?: SelectSubset<T, TicketCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketCategories and returns the data saved in the database.
     * @param {TicketCategoryCreateManyAndReturnArgs} args - Arguments to create many TicketCategories.
     * @example
     * // Create many TicketCategories
     * const ticketCategory = await prisma.ticketCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketCategories and only return the `id`
     * const ticketCategoryWithIdOnly = await prisma.ticketCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TicketCategory.
     * @param {TicketCategoryDeleteArgs} args - Arguments to delete one TicketCategory.
     * @example
     * // Delete one TicketCategory
     * const TicketCategory = await prisma.ticketCategory.delete({
     *   where: {
     *     // ... filter to delete one TicketCategory
     *   }
     * })
     * 
     */
    delete<T extends TicketCategoryDeleteArgs>(args: SelectSubset<T, TicketCategoryDeleteArgs<ExtArgs>>): Prisma__TicketCategoryClient<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketCategory.
     * @param {TicketCategoryUpdateArgs} args - Arguments to update one TicketCategory.
     * @example
     * // Update one TicketCategory
     * const ticketCategory = await prisma.ticketCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketCategoryUpdateArgs>(args: SelectSubset<T, TicketCategoryUpdateArgs<ExtArgs>>): Prisma__TicketCategoryClient<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketCategories.
     * @param {TicketCategoryDeleteManyArgs} args - Arguments to filter TicketCategories to delete.
     * @example
     * // Delete a few TicketCategories
     * const { count } = await prisma.ticketCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketCategoryDeleteManyArgs>(args?: SelectSubset<T, TicketCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketCategories
     * const ticketCategory = await prisma.ticketCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketCategoryUpdateManyArgs>(args: SelectSubset<T, TicketCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketCategories and returns the data updated in the database.
     * @param {TicketCategoryUpdateManyAndReturnArgs} args - Arguments to update many TicketCategories.
     * @example
     * // Update many TicketCategories
     * const ticketCategory = await prisma.ticketCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TicketCategories and only return the `id`
     * const ticketCategoryWithIdOnly = await prisma.ticketCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends TicketCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TicketCategory.
     * @param {TicketCategoryUpsertArgs} args - Arguments to update or create a TicketCategory.
     * @example
     * // Update or create a TicketCategory
     * const ticketCategory = await prisma.ticketCategory.upsert({
     *   create: {
     *     // ... data to create a TicketCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketCategory we want to update
     *   }
     * })
     */
    upsert<T extends TicketCategoryUpsertArgs>(args: SelectSubset<T, TicketCategoryUpsertArgs<ExtArgs>>): Prisma__TicketCategoryClient<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TicketCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCategoryCountArgs} args - Arguments to filter TicketCategories to count.
     * @example
     * // Count the number of TicketCategories
     * const count = await prisma.ticketCategory.count({
     *   where: {
     *     // ... the filter for the TicketCategories we want to count
     *   }
     * })
    **/
    count<T extends TicketCategoryCountArgs>(
      args?: Subset<T, TicketCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketCategoryAggregateArgs>(args: Subset<T, TicketCategoryAggregateArgs>): Prisma.PrismaPromise<GetTicketCategoryAggregateType<T>>

    /**
     * Group by TicketCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCategoryGroupByArgs} args - Group by arguments.
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
      T extends TicketCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketCategoryGroupByArgs['orderBy'] }
        : { orderBy?: TicketCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketCategory model
   */
  readonly fields: TicketCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tour<T extends TourDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TourDefaultArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orders<T extends TicketCategory$ordersArgs<ExtArgs> = {}>(args?: Subset<T, TicketCategory$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TicketCategory model
   */
  interface TicketCategoryFieldRefs {
    readonly id: FieldRef<"TicketCategory", 'Int'>
    readonly name: FieldRef<"TicketCategory", 'String'>
    readonly price: FieldRef<"TicketCategory", 'Float'>
    readonly tourId: FieldRef<"TicketCategory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TicketCategory findUnique
   */
  export type TicketCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketCategory to fetch.
     */
    where: TicketCategoryWhereUniqueInput
  }

  /**
   * TicketCategory findUniqueOrThrow
   */
  export type TicketCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketCategory to fetch.
     */
    where: TicketCategoryWhereUniqueInput
  }

  /**
   * TicketCategory findFirst
   */
  export type TicketCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketCategory to fetch.
     */
    where?: TicketCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketCategories to fetch.
     */
    orderBy?: TicketCategoryOrderByWithRelationInput | TicketCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketCategories.
     */
    cursor?: TicketCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketCategories.
     */
    distinct?: TicketCategoryScalarFieldEnum | TicketCategoryScalarFieldEnum[]
  }

  /**
   * TicketCategory findFirstOrThrow
   */
  export type TicketCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketCategory to fetch.
     */
    where?: TicketCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketCategories to fetch.
     */
    orderBy?: TicketCategoryOrderByWithRelationInput | TicketCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketCategories.
     */
    cursor?: TicketCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketCategories.
     */
    distinct?: TicketCategoryScalarFieldEnum | TicketCategoryScalarFieldEnum[]
  }

  /**
   * TicketCategory findMany
   */
  export type TicketCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketCategories to fetch.
     */
    where?: TicketCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketCategories to fetch.
     */
    orderBy?: TicketCategoryOrderByWithRelationInput | TicketCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketCategories.
     */
    cursor?: TicketCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketCategories.
     */
    skip?: number
    distinct?: TicketCategoryScalarFieldEnum | TicketCategoryScalarFieldEnum[]
  }

  /**
   * TicketCategory create
   */
  export type TicketCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketCategory.
     */
    data: XOR<TicketCategoryCreateInput, TicketCategoryUncheckedCreateInput>
  }

  /**
   * TicketCategory createMany
   */
  export type TicketCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketCategories.
     */
    data: TicketCategoryCreateManyInput | TicketCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketCategory createManyAndReturn
   */
  export type TicketCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many TicketCategories.
     */
    data: TicketCategoryCreateManyInput | TicketCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketCategory update
   */
  export type TicketCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketCategory.
     */
    data: XOR<TicketCategoryUpdateInput, TicketCategoryUncheckedUpdateInput>
    /**
     * Choose, which TicketCategory to update.
     */
    where: TicketCategoryWhereUniqueInput
  }

  /**
   * TicketCategory updateMany
   */
  export type TicketCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketCategories.
     */
    data: XOR<TicketCategoryUpdateManyMutationInput, TicketCategoryUncheckedUpdateManyInput>
    /**
     * Filter which TicketCategories to update
     */
    where?: TicketCategoryWhereInput
    /**
     * Limit how many TicketCategories to update.
     */
    limit?: number
  }

  /**
   * TicketCategory updateManyAndReturn
   */
  export type TicketCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * The data used to update TicketCategories.
     */
    data: XOR<TicketCategoryUpdateManyMutationInput, TicketCategoryUncheckedUpdateManyInput>
    /**
     * Filter which TicketCategories to update
     */
    where?: TicketCategoryWhereInput
    /**
     * Limit how many TicketCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketCategory upsert
   */
  export type TicketCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketCategory to update in case it exists.
     */
    where: TicketCategoryWhereUniqueInput
    /**
     * In case the TicketCategory found by the `where` argument doesn't exist, create a new TicketCategory with this data.
     */
    create: XOR<TicketCategoryCreateInput, TicketCategoryUncheckedCreateInput>
    /**
     * In case the TicketCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketCategoryUpdateInput, TicketCategoryUncheckedUpdateInput>
  }

  /**
   * TicketCategory delete
   */
  export type TicketCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    /**
     * Filter which TicketCategory to delete.
     */
    where: TicketCategoryWhereUniqueInput
  }

  /**
   * TicketCategory deleteMany
   */
  export type TicketCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketCategories to delete
     */
    where?: TicketCategoryWhereInput
    /**
     * Limit how many TicketCategories to delete.
     */
    limit?: number
  }

  /**
   * TicketCategory.orders
   */
  export type TicketCategory$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * TicketCategory without action
   */
  export type TicketCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  export type ScheduleAvgAggregateOutputType = {
    id: number | null
    tourId: number | null
    maxPeople: number | null
  }

  export type ScheduleSumAggregateOutputType = {
    id: number | null
    tourId: number | null
    maxPeople: number | null
  }

  export type ScheduleMinAggregateOutputType = {
    id: number | null
    tourId: number | null
    startDate: Date | null
    endDate: Date | null
    maxPeople: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduleMaxAggregateOutputType = {
    id: number | null
    tourId: number | null
    startDate: Date | null
    endDate: Date | null
    maxPeople: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduleCountAggregateOutputType = {
    id: number
    tourId: number
    startDate: number
    endDate: number
    maxPeople: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ScheduleAvgAggregateInputType = {
    id?: true
    tourId?: true
    maxPeople?: true
  }

  export type ScheduleSumAggregateInputType = {
    id?: true
    tourId?: true
    maxPeople?: true
  }

  export type ScheduleMinAggregateInputType = {
    id?: true
    tourId?: true
    startDate?: true
    endDate?: true
    maxPeople?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduleMaxAggregateInputType = {
    id?: true
    tourId?: true
    startDate?: true
    endDate?: true
    maxPeople?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduleCountAggregateInputType = {
    id?: true
    tourId?: true
    startDate?: true
    endDate?: true
    maxPeople?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedule to aggregate.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedules
    **/
    _count?: true | ScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleMaxAggregateInputType
  }

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>
  }




  export type ScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithAggregationInput | ScheduleOrderByWithAggregationInput[]
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum
    having?: ScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleCountAggregateInputType | true
    _avg?: ScheduleAvgAggregateInputType
    _sum?: ScheduleSumAggregateInputType
    _min?: ScheduleMinAggregateInputType
    _max?: ScheduleMaxAggregateInputType
  }

  export type ScheduleGroupByOutputType = {
    id: number
    tourId: number
    startDate: Date
    endDate: Date
    maxPeople: number
    createdAt: Date
    updatedAt: Date
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  type GetScheduleGroupByPayload<T extends ScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    startDate?: boolean
    endDate?: boolean
    maxPeople?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
    slots?: boolean | Schedule$slotsArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    startDate?: boolean
    endDate?: boolean
    maxPeople?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    startDate?: boolean
    endDate?: boolean
    maxPeople?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectScalar = {
    id?: boolean
    tourId?: boolean
    startDate?: boolean
    endDate?: boolean
    maxPeople?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tourId" | "startDate" | "endDate" | "maxPeople" | "createdAt" | "updatedAt", ExtArgs["result"]["schedule"]>
  export type ScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
    slots?: boolean | Schedule$slotsArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type ScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }

  export type $SchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Schedule"
    objects: {
      tour: Prisma.$TourPayload<ExtArgs>
      slots: Prisma.$ScheduleSlotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tourId: number
      startDate: Date
      endDate: Date
      maxPeople: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["schedule"]>
    composites: {}
  }

  type ScheduleGetPayload<S extends boolean | null | undefined | ScheduleDefaultArgs> = $Result.GetResult<Prisma.$SchedulePayload, S>

  type ScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleCountAggregateInputType | true
    }

  export interface ScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Schedule'], meta: { name: 'Schedule' } }
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {ScheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleFindUniqueArgs>(args: SelectSubset<T, ScheduleFindUniqueArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleFindFirstArgs>(args?: SelectSubset<T, ScheduleFindFirstArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleWithIdOnly = await prisma.schedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleFindManyArgs>(args?: SelectSubset<T, ScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schedule.
     * @param {ScheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     * 
     */
    create<T extends ScheduleCreateArgs>(args: SelectSubset<T, ScheduleCreateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedules.
     * @param {ScheduleCreateManyArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleCreateManyArgs>(args?: SelectSubset<T, ScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schedules and returns the data saved in the database.
     * @param {ScheduleCreateManyAndReturnArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Schedule.
     * @param {ScheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     * 
     */
    delete<T extends ScheduleDeleteArgs>(args: SelectSubset<T, ScheduleDeleteArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schedule.
     * @param {ScheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleUpdateArgs>(args: SelectSubset<T, ScheduleUpdateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedules.
     * @param {ScheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleDeleteManyArgs>(args?: SelectSubset<T, ScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleUpdateManyArgs>(args: SelectSubset<T, ScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules and returns the data updated in the database.
     * @param {ScheduleUpdateManyAndReturnArgs} args - Arguments to update many Schedules.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.updateManyAndReturn({
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
    updateManyAndReturn<T extends ScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Schedule.
     * @param {ScheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleUpsertArgs>(args: SelectSubset<T, ScheduleUpsertArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends ScheduleCountArgs>(
      args?: Subset<T, ScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScheduleAggregateArgs>(args: Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleGroupByArgs} args - Group by arguments.
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
      T extends ScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Schedule model
   */
  readonly fields: ScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tour<T extends TourDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TourDefaultArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    slots<T extends Schedule$slotsArgs<ExtArgs> = {}>(args?: Subset<T, Schedule$slotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Schedule model
   */
  interface ScheduleFieldRefs {
    readonly id: FieldRef<"Schedule", 'Int'>
    readonly tourId: FieldRef<"Schedule", 'Int'>
    readonly startDate: FieldRef<"Schedule", 'DateTime'>
    readonly endDate: FieldRef<"Schedule", 'DateTime'>
    readonly maxPeople: FieldRef<"Schedule", 'Int'>
    readonly createdAt: FieldRef<"Schedule", 'DateTime'>
    readonly updatedAt: FieldRef<"Schedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Schedule findUnique
   */
  export type ScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findUniqueOrThrow
   */
  export type ScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findFirst
   */
  export type ScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findFirstOrThrow
   */
  export type ScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findMany
   */
  export type ScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedules to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule create
   */
  export type ScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a Schedule.
     */
    data: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
  }

  /**
   * Schedule createMany
   */
  export type ScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Schedule createManyAndReturn
   */
  export type ScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule update
   */
  export type ScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a Schedule.
     */
    data: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
    /**
     * Choose, which Schedule to update.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule updateMany
   */
  export type ScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
  }

  /**
   * Schedule updateManyAndReturn
   */
  export type ScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule upsert
   */
  export type ScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the Schedule to update in case it exists.
     */
    where: ScheduleWhereUniqueInput
    /**
     * In case the Schedule found by the `where` argument doesn't exist, create a new Schedule with this data.
     */
    create: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
    /**
     * In case the Schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
  }

  /**
   * Schedule delete
   */
  export type ScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter which Schedule to delete.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule deleteMany
   */
  export type ScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedules to delete
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to delete.
     */
    limit?: number
  }

  /**
   * Schedule.slots
   */
  export type Schedule$slotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSlot
     */
    select?: ScheduleSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleSlot
     */
    omit?: ScheduleSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleSlotInclude<ExtArgs> | null
    where?: ScheduleSlotWhereInput
    orderBy?: ScheduleSlotOrderByWithRelationInput | ScheduleSlotOrderByWithRelationInput[]
    cursor?: ScheduleSlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleSlotScalarFieldEnum | ScheduleSlotScalarFieldEnum[]
  }

  /**
   * Schedule without action
   */
  export type ScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
  }


  /**
   * Model ScheduleSlot
   */

  export type AggregateScheduleSlot = {
    _count: ScheduleSlotCountAggregateOutputType | null
    _avg: ScheduleSlotAvgAggregateOutputType | null
    _sum: ScheduleSlotSumAggregateOutputType | null
    _min: ScheduleSlotMinAggregateOutputType | null
    _max: ScheduleSlotMaxAggregateOutputType | null
  }

  export type ScheduleSlotAvgAggregateOutputType = {
    id: number | null
    scheduleId: number | null
    weekDay: number | null
  }

  export type ScheduleSlotSumAggregateOutputType = {
    id: number | null
    scheduleId: number | null
    weekDay: number | null
  }

  export type ScheduleSlotMinAggregateOutputType = {
    id: number | null
    scheduleId: number | null
    weekDay: number | null
    time: string | null
  }

  export type ScheduleSlotMaxAggregateOutputType = {
    id: number | null
    scheduleId: number | null
    weekDay: number | null
    time: string | null
  }

  export type ScheduleSlotCountAggregateOutputType = {
    id: number
    scheduleId: number
    weekDay: number
    time: number
    _all: number
  }


  export type ScheduleSlotAvgAggregateInputType = {
    id?: true
    scheduleId?: true
    weekDay?: true
  }

  export type ScheduleSlotSumAggregateInputType = {
    id?: true
    scheduleId?: true
    weekDay?: true
  }

  export type ScheduleSlotMinAggregateInputType = {
    id?: true
    scheduleId?: true
    weekDay?: true
    time?: true
  }

  export type ScheduleSlotMaxAggregateInputType = {
    id?: true
    scheduleId?: true
    weekDay?: true
    time?: true
  }

  export type ScheduleSlotCountAggregateInputType = {
    id?: true
    scheduleId?: true
    weekDay?: true
    time?: true
    _all?: true
  }

  export type ScheduleSlotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduleSlot to aggregate.
     */
    where?: ScheduleSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleSlots to fetch.
     */
    orderBy?: ScheduleSlotOrderByWithRelationInput | ScheduleSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScheduleSlots
    **/
    _count?: true | ScheduleSlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScheduleSlotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScheduleSlotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleSlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleSlotMaxAggregateInputType
  }

  export type GetScheduleSlotAggregateType<T extends ScheduleSlotAggregateArgs> = {
        [P in keyof T & keyof AggregateScheduleSlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScheduleSlot[P]>
      : GetScalarType<T[P], AggregateScheduleSlot[P]>
  }




  export type ScheduleSlotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleSlotWhereInput
    orderBy?: ScheduleSlotOrderByWithAggregationInput | ScheduleSlotOrderByWithAggregationInput[]
    by: ScheduleSlotScalarFieldEnum[] | ScheduleSlotScalarFieldEnum
    having?: ScheduleSlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleSlotCountAggregateInputType | true
    _avg?: ScheduleSlotAvgAggregateInputType
    _sum?: ScheduleSlotSumAggregateInputType
    _min?: ScheduleSlotMinAggregateInputType
    _max?: ScheduleSlotMaxAggregateInputType
  }

  export type ScheduleSlotGroupByOutputType = {
    id: number
    scheduleId: number
    weekDay: number
    time: string
    _count: ScheduleSlotCountAggregateOutputType | null
    _avg: ScheduleSlotAvgAggregateOutputType | null
    _sum: ScheduleSlotSumAggregateOutputType | null
    _min: ScheduleSlotMinAggregateOutputType | null
    _max: ScheduleSlotMaxAggregateOutputType | null
  }

  type GetScheduleSlotGroupByPayload<T extends ScheduleSlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleSlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleSlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleSlotGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleSlotGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleSlotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scheduleId?: boolean
    weekDay?: boolean
    time?: boolean
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduleSlot"]>

  export type ScheduleSlotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scheduleId?: boolean
    weekDay?: boolean
    time?: boolean
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduleSlot"]>

  export type ScheduleSlotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scheduleId?: boolean
    weekDay?: boolean
    time?: boolean
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduleSlot"]>

  export type ScheduleSlotSelectScalar = {
    id?: boolean
    scheduleId?: boolean
    weekDay?: boolean
    time?: boolean
  }

  export type ScheduleSlotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "scheduleId" | "weekDay" | "time", ExtArgs["result"]["scheduleSlot"]>
  export type ScheduleSlotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }
  export type ScheduleSlotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }
  export type ScheduleSlotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }

  export type $ScheduleSlotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScheduleSlot"
    objects: {
      schedule: Prisma.$SchedulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      scheduleId: number
      weekDay: number
      time: string
    }, ExtArgs["result"]["scheduleSlot"]>
    composites: {}
  }

  type ScheduleSlotGetPayload<S extends boolean | null | undefined | ScheduleSlotDefaultArgs> = $Result.GetResult<Prisma.$ScheduleSlotPayload, S>

  type ScheduleSlotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduleSlotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleSlotCountAggregateInputType | true
    }

  export interface ScheduleSlotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScheduleSlot'], meta: { name: 'ScheduleSlot' } }
    /**
     * Find zero or one ScheduleSlot that matches the filter.
     * @param {ScheduleSlotFindUniqueArgs} args - Arguments to find a ScheduleSlot
     * @example
     * // Get one ScheduleSlot
     * const scheduleSlot = await prisma.scheduleSlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleSlotFindUniqueArgs>(args: SelectSubset<T, ScheduleSlotFindUniqueArgs<ExtArgs>>): Prisma__ScheduleSlotClient<$Result.GetResult<Prisma.$ScheduleSlotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScheduleSlot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduleSlotFindUniqueOrThrowArgs} args - Arguments to find a ScheduleSlot
     * @example
     * // Get one ScheduleSlot
     * const scheduleSlot = await prisma.scheduleSlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleSlotFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleSlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleSlotClient<$Result.GetResult<Prisma.$ScheduleSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduleSlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleSlotFindFirstArgs} args - Arguments to find a ScheduleSlot
     * @example
     * // Get one ScheduleSlot
     * const scheduleSlot = await prisma.scheduleSlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleSlotFindFirstArgs>(args?: SelectSubset<T, ScheduleSlotFindFirstArgs<ExtArgs>>): Prisma__ScheduleSlotClient<$Result.GetResult<Prisma.$ScheduleSlotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduleSlot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleSlotFindFirstOrThrowArgs} args - Arguments to find a ScheduleSlot
     * @example
     * // Get one ScheduleSlot
     * const scheduleSlot = await prisma.scheduleSlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleSlotFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleSlotFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleSlotClient<$Result.GetResult<Prisma.$ScheduleSlotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScheduleSlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleSlotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScheduleSlots
     * const scheduleSlots = await prisma.scheduleSlot.findMany()
     * 
     * // Get first 10 ScheduleSlots
     * const scheduleSlots = await prisma.scheduleSlot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleSlotWithIdOnly = await prisma.scheduleSlot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleSlotFindManyArgs>(args?: SelectSubset<T, ScheduleSlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScheduleSlot.
     * @param {ScheduleSlotCreateArgs} args - Arguments to create a ScheduleSlot.
     * @example
     * // Create one ScheduleSlot
     * const ScheduleSlot = await prisma.scheduleSlot.create({
     *   data: {
     *     // ... data to create a ScheduleSlot
     *   }
     * })
     * 
     */
    create<T extends ScheduleSlotCreateArgs>(args: SelectSubset<T, ScheduleSlotCreateArgs<ExtArgs>>): Prisma__ScheduleSlotClient<$Result.GetResult<Prisma.$ScheduleSlotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScheduleSlots.
     * @param {ScheduleSlotCreateManyArgs} args - Arguments to create many ScheduleSlots.
     * @example
     * // Create many ScheduleSlots
     * const scheduleSlot = await prisma.scheduleSlot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleSlotCreateManyArgs>(args?: SelectSubset<T, ScheduleSlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScheduleSlots and returns the data saved in the database.
     * @param {ScheduleSlotCreateManyAndReturnArgs} args - Arguments to create many ScheduleSlots.
     * @example
     * // Create many ScheduleSlots
     * const scheduleSlot = await prisma.scheduleSlot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScheduleSlots and only return the `id`
     * const scheduleSlotWithIdOnly = await prisma.scheduleSlot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduleSlotCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduleSlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleSlotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScheduleSlot.
     * @param {ScheduleSlotDeleteArgs} args - Arguments to delete one ScheduleSlot.
     * @example
     * // Delete one ScheduleSlot
     * const ScheduleSlot = await prisma.scheduleSlot.delete({
     *   where: {
     *     // ... filter to delete one ScheduleSlot
     *   }
     * })
     * 
     */
    delete<T extends ScheduleSlotDeleteArgs>(args: SelectSubset<T, ScheduleSlotDeleteArgs<ExtArgs>>): Prisma__ScheduleSlotClient<$Result.GetResult<Prisma.$ScheduleSlotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScheduleSlot.
     * @param {ScheduleSlotUpdateArgs} args - Arguments to update one ScheduleSlot.
     * @example
     * // Update one ScheduleSlot
     * const scheduleSlot = await prisma.scheduleSlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleSlotUpdateArgs>(args: SelectSubset<T, ScheduleSlotUpdateArgs<ExtArgs>>): Prisma__ScheduleSlotClient<$Result.GetResult<Prisma.$ScheduleSlotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScheduleSlots.
     * @param {ScheduleSlotDeleteManyArgs} args - Arguments to filter ScheduleSlots to delete.
     * @example
     * // Delete a few ScheduleSlots
     * const { count } = await prisma.scheduleSlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleSlotDeleteManyArgs>(args?: SelectSubset<T, ScheduleSlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduleSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleSlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScheduleSlots
     * const scheduleSlot = await prisma.scheduleSlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleSlotUpdateManyArgs>(args: SelectSubset<T, ScheduleSlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduleSlots and returns the data updated in the database.
     * @param {ScheduleSlotUpdateManyAndReturnArgs} args - Arguments to update many ScheduleSlots.
     * @example
     * // Update many ScheduleSlots
     * const scheduleSlot = await prisma.scheduleSlot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScheduleSlots and only return the `id`
     * const scheduleSlotWithIdOnly = await prisma.scheduleSlot.updateManyAndReturn({
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
    updateManyAndReturn<T extends ScheduleSlotUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduleSlotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleSlotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScheduleSlot.
     * @param {ScheduleSlotUpsertArgs} args - Arguments to update or create a ScheduleSlot.
     * @example
     * // Update or create a ScheduleSlot
     * const scheduleSlot = await prisma.scheduleSlot.upsert({
     *   create: {
     *     // ... data to create a ScheduleSlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScheduleSlot we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleSlotUpsertArgs>(args: SelectSubset<T, ScheduleSlotUpsertArgs<ExtArgs>>): Prisma__ScheduleSlotClient<$Result.GetResult<Prisma.$ScheduleSlotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScheduleSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleSlotCountArgs} args - Arguments to filter ScheduleSlots to count.
     * @example
     * // Count the number of ScheduleSlots
     * const count = await prisma.scheduleSlot.count({
     *   where: {
     *     // ... the filter for the ScheduleSlots we want to count
     *   }
     * })
    **/
    count<T extends ScheduleSlotCountArgs>(
      args?: Subset<T, ScheduleSlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleSlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScheduleSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleSlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScheduleSlotAggregateArgs>(args: Subset<T, ScheduleSlotAggregateArgs>): Prisma.PrismaPromise<GetScheduleSlotAggregateType<T>>

    /**
     * Group by ScheduleSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleSlotGroupByArgs} args - Group by arguments.
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
      T extends ScheduleSlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleSlotGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleSlotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScheduleSlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScheduleSlot model
   */
  readonly fields: ScheduleSlotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScheduleSlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleSlotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schedule<T extends ScheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScheduleDefaultArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ScheduleSlot model
   */
  interface ScheduleSlotFieldRefs {
    readonly id: FieldRef<"ScheduleSlot", 'Int'>
    readonly scheduleId: FieldRef<"ScheduleSlot", 'Int'>
    readonly weekDay: FieldRef<"ScheduleSlot", 'Int'>
    readonly time: FieldRef<"ScheduleSlot", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ScheduleSlot findUnique
   */
  export type ScheduleSlotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSlot
     */
    select?: ScheduleSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleSlot
     */
    omit?: ScheduleSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleSlotInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleSlot to fetch.
     */
    where: ScheduleSlotWhereUniqueInput
  }

  /**
   * ScheduleSlot findUniqueOrThrow
   */
  export type ScheduleSlotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSlot
     */
    select?: ScheduleSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleSlot
     */
    omit?: ScheduleSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleSlotInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleSlot to fetch.
     */
    where: ScheduleSlotWhereUniqueInput
  }

  /**
   * ScheduleSlot findFirst
   */
  export type ScheduleSlotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSlot
     */
    select?: ScheduleSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleSlot
     */
    omit?: ScheduleSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleSlotInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleSlot to fetch.
     */
    where?: ScheduleSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleSlots to fetch.
     */
    orderBy?: ScheduleSlotOrderByWithRelationInput | ScheduleSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduleSlots.
     */
    cursor?: ScheduleSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduleSlots.
     */
    distinct?: ScheduleSlotScalarFieldEnum | ScheduleSlotScalarFieldEnum[]
  }

  /**
   * ScheduleSlot findFirstOrThrow
   */
  export type ScheduleSlotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSlot
     */
    select?: ScheduleSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleSlot
     */
    omit?: ScheduleSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleSlotInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleSlot to fetch.
     */
    where?: ScheduleSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleSlots to fetch.
     */
    orderBy?: ScheduleSlotOrderByWithRelationInput | ScheduleSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduleSlots.
     */
    cursor?: ScheduleSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduleSlots.
     */
    distinct?: ScheduleSlotScalarFieldEnum | ScheduleSlotScalarFieldEnum[]
  }

  /**
   * ScheduleSlot findMany
   */
  export type ScheduleSlotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSlot
     */
    select?: ScheduleSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleSlot
     */
    omit?: ScheduleSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleSlotInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleSlots to fetch.
     */
    where?: ScheduleSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleSlots to fetch.
     */
    orderBy?: ScheduleSlotOrderByWithRelationInput | ScheduleSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScheduleSlots.
     */
    cursor?: ScheduleSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleSlots.
     */
    skip?: number
    distinct?: ScheduleSlotScalarFieldEnum | ScheduleSlotScalarFieldEnum[]
  }

  /**
   * ScheduleSlot create
   */
  export type ScheduleSlotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSlot
     */
    select?: ScheduleSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleSlot
     */
    omit?: ScheduleSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleSlotInclude<ExtArgs> | null
    /**
     * The data needed to create a ScheduleSlot.
     */
    data: XOR<ScheduleSlotCreateInput, ScheduleSlotUncheckedCreateInput>
  }

  /**
   * ScheduleSlot createMany
   */
  export type ScheduleSlotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScheduleSlots.
     */
    data: ScheduleSlotCreateManyInput | ScheduleSlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScheduleSlot createManyAndReturn
   */
  export type ScheduleSlotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSlot
     */
    select?: ScheduleSlotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleSlot
     */
    omit?: ScheduleSlotOmit<ExtArgs> | null
    /**
     * The data used to create many ScheduleSlots.
     */
    data: ScheduleSlotCreateManyInput | ScheduleSlotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleSlotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScheduleSlot update
   */
  export type ScheduleSlotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSlot
     */
    select?: ScheduleSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleSlot
     */
    omit?: ScheduleSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleSlotInclude<ExtArgs> | null
    /**
     * The data needed to update a ScheduleSlot.
     */
    data: XOR<ScheduleSlotUpdateInput, ScheduleSlotUncheckedUpdateInput>
    /**
     * Choose, which ScheduleSlot to update.
     */
    where: ScheduleSlotWhereUniqueInput
  }

  /**
   * ScheduleSlot updateMany
   */
  export type ScheduleSlotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScheduleSlots.
     */
    data: XOR<ScheduleSlotUpdateManyMutationInput, ScheduleSlotUncheckedUpdateManyInput>
    /**
     * Filter which ScheduleSlots to update
     */
    where?: ScheduleSlotWhereInput
    /**
     * Limit how many ScheduleSlots to update.
     */
    limit?: number
  }

  /**
   * ScheduleSlot updateManyAndReturn
   */
  export type ScheduleSlotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSlot
     */
    select?: ScheduleSlotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleSlot
     */
    omit?: ScheduleSlotOmit<ExtArgs> | null
    /**
     * The data used to update ScheduleSlots.
     */
    data: XOR<ScheduleSlotUpdateManyMutationInput, ScheduleSlotUncheckedUpdateManyInput>
    /**
     * Filter which ScheduleSlots to update
     */
    where?: ScheduleSlotWhereInput
    /**
     * Limit how many ScheduleSlots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleSlotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScheduleSlot upsert
   */
  export type ScheduleSlotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSlot
     */
    select?: ScheduleSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleSlot
     */
    omit?: ScheduleSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleSlotInclude<ExtArgs> | null
    /**
     * The filter to search for the ScheduleSlot to update in case it exists.
     */
    where: ScheduleSlotWhereUniqueInput
    /**
     * In case the ScheduleSlot found by the `where` argument doesn't exist, create a new ScheduleSlot with this data.
     */
    create: XOR<ScheduleSlotCreateInput, ScheduleSlotUncheckedCreateInput>
    /**
     * In case the ScheduleSlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleSlotUpdateInput, ScheduleSlotUncheckedUpdateInput>
  }

  /**
   * ScheduleSlot delete
   */
  export type ScheduleSlotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSlot
     */
    select?: ScheduleSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleSlot
     */
    omit?: ScheduleSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleSlotInclude<ExtArgs> | null
    /**
     * Filter which ScheduleSlot to delete.
     */
    where: ScheduleSlotWhereUniqueInput
  }

  /**
   * ScheduleSlot deleteMany
   */
  export type ScheduleSlotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduleSlots to delete
     */
    where?: ScheduleSlotWhereInput
    /**
     * Limit how many ScheduleSlots to delete.
     */
    limit?: number
  }

  /**
   * ScheduleSlot without action
   */
  export type ScheduleSlotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSlot
     */
    select?: ScheduleSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleSlot
     */
    omit?: ScheduleSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleSlotInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    totalPrice: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    userId: number | null
    totalPrice: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    userId: number | null
    totalPrice: number | null
    status: $Enums.OrderStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    emailSent: boolean | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    totalPrice: number | null
    status: $Enums.OrderStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    emailSent: boolean | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    userId: number
    totalPrice: number
    status: number
    createdAt: number
    updatedAt: number
    emailSent: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    userId?: true
    totalPrice?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    userId?: true
    totalPrice?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    userId?: true
    totalPrice?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    emailSent?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    userId?: true
    totalPrice?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    emailSent?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    userId?: true
    totalPrice?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    emailSent?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    userId: number
    totalPrice: number
    status: $Enums.OrderStatus
    createdAt: Date
    updatedAt: Date
    emailSent: boolean
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalPrice?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailSent?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Order$itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalPrice?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailSent?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalPrice?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailSent?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    userId?: boolean
    totalPrice?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailSent?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "totalPrice" | "status" | "createdAt" | "updatedAt" | "emailSent", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Order$itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      totalPrice: number
      status: $Enums.OrderStatus
      createdAt: Date
      updatedAt: Date
      emailSent: boolean
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Order$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly userId: FieldRef<"Order", 'Int'>
    readonly totalPrice: FieldRef<"Order", 'Float'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
    readonly emailSent: FieldRef<"Order", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.items
   */
  export type Order$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    id: number | null
    orderId: number | null
    ticketCategoryId: number | null
    quantity: number | null
    price: number | null
  }

  export type OrderItemSumAggregateOutputType = {
    id: number | null
    orderId: number | null
    ticketCategoryId: number | null
    quantity: number | null
    price: number | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: number | null
    orderId: number | null
    ticketCategoryId: number | null
    quantity: number | null
    price: number | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: number | null
    orderId: number | null
    ticketCategoryId: number | null
    quantity: number | null
    price: number | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    ticketCategoryId: number
    quantity: number
    price: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    id?: true
    orderId?: true
    ticketCategoryId?: true
    quantity?: true
    price?: true
  }

  export type OrderItemSumAggregateInputType = {
    id?: true
    orderId?: true
    ticketCategoryId?: true
    quantity?: true
    price?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    orderId?: true
    ticketCategoryId?: true
    quantity?: true
    price?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    ticketCategoryId?: true
    quantity?: true
    price?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    orderId?: true
    ticketCategoryId?: true
    quantity?: true
    price?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: number
    orderId: number
    ticketCategoryId: number
    quantity: number
    price: number
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    ticketCategoryId?: boolean
    quantity?: boolean
    price?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    ticketCategory?: boolean | TicketCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    ticketCategoryId?: boolean
    quantity?: boolean
    price?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    ticketCategory?: boolean | TicketCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    ticketCategoryId?: boolean
    quantity?: boolean
    price?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    ticketCategory?: boolean | TicketCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    ticketCategoryId?: boolean
    quantity?: boolean
    price?: boolean
  }

  export type OrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "ticketCategoryId" | "quantity" | "price", ExtArgs["result"]["orderItem"]>
  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    ticketCategory?: boolean | TicketCategoryDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    ticketCategory?: boolean | TicketCategoryDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    ticketCategory?: boolean | TicketCategoryDefaultArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      ticketCategory: Prisma.$TicketCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderId: number
      ticketCategoryId: number
      quantity: number
      price: number
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems and returns the data updated in the database.
     * @param {OrderItemUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
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
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ticketCategory<T extends TicketCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketCategoryDefaultArgs<ExtArgs>>): Prisma__TicketCategoryClient<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OrderItem model
   */
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'Int'>
    readonly orderId: FieldRef<"OrderItem", 'Int'>
    readonly ticketCategoryId: FieldRef<"OrderItem", 'Int'>
    readonly quantity: FieldRef<"OrderItem", 'Int'>
    readonly price: FieldRef<"OrderItem", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItem createManyAndReturn
   */
  export type OrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
  }

  /**
   * OrderItem updateManyAndReturn
   */
  export type OrderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Model Discount
   */

  export type AggregateDiscount = {
    _count: DiscountCountAggregateOutputType | null
    _avg: DiscountAvgAggregateOutputType | null
    _sum: DiscountSumAggregateOutputType | null
    _min: DiscountMinAggregateOutputType | null
    _max: DiscountMaxAggregateOutputType | null
  }

  export type DiscountAvgAggregateOutputType = {
    id: number | null
    value: number | null
  }

  export type DiscountSumAggregateOutputType = {
    id: number | null
    value: number | null
  }

  export type DiscountMinAggregateOutputType = {
    id: number | null
    code: string | null
    value: number | null
    isPercent: boolean | null
    active: boolean | null
    validFrom: Date | null
    validTo: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DiscountMaxAggregateOutputType = {
    id: number | null
    code: string | null
    value: number | null
    isPercent: boolean | null
    active: boolean | null
    validFrom: Date | null
    validTo: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DiscountCountAggregateOutputType = {
    id: number
    code: number
    value: number
    isPercent: number
    active: number
    validFrom: number
    validTo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DiscountAvgAggregateInputType = {
    id?: true
    value?: true
  }

  export type DiscountSumAggregateInputType = {
    id?: true
    value?: true
  }

  export type DiscountMinAggregateInputType = {
    id?: true
    code?: true
    value?: true
    isPercent?: true
    active?: true
    validFrom?: true
    validTo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DiscountMaxAggregateInputType = {
    id?: true
    code?: true
    value?: true
    isPercent?: true
    active?: true
    validFrom?: true
    validTo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DiscountCountAggregateInputType = {
    id?: true
    code?: true
    value?: true
    isPercent?: true
    active?: true
    validFrom?: true
    validTo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DiscountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Discount to aggregate.
     */
    where?: DiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discounts to fetch.
     */
    orderBy?: DiscountOrderByWithRelationInput | DiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Discounts
    **/
    _count?: true | DiscountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiscountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiscountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscountMaxAggregateInputType
  }

  export type GetDiscountAggregateType<T extends DiscountAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscount[P]>
      : GetScalarType<T[P], AggregateDiscount[P]>
  }




  export type DiscountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscountWhereInput
    orderBy?: DiscountOrderByWithAggregationInput | DiscountOrderByWithAggregationInput[]
    by: DiscountScalarFieldEnum[] | DiscountScalarFieldEnum
    having?: DiscountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscountCountAggregateInputType | true
    _avg?: DiscountAvgAggregateInputType
    _sum?: DiscountSumAggregateInputType
    _min?: DiscountMinAggregateInputType
    _max?: DiscountMaxAggregateInputType
  }

  export type DiscountGroupByOutputType = {
    id: number
    code: string
    value: number
    isPercent: boolean
    active: boolean
    validFrom: Date
    validTo: Date
    createdAt: Date
    updatedAt: Date
    _count: DiscountCountAggregateOutputType | null
    _avg: DiscountAvgAggregateOutputType | null
    _sum: DiscountSumAggregateOutputType | null
    _min: DiscountMinAggregateOutputType | null
    _max: DiscountMaxAggregateOutputType | null
  }

  type GetDiscountGroupByPayload<T extends DiscountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscountGroupByOutputType[P]>
            : GetScalarType<T[P], DiscountGroupByOutputType[P]>
        }
      >
    >


  export type DiscountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    value?: boolean
    isPercent?: boolean
    active?: boolean
    validFrom?: boolean
    validTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["discount"]>

  export type DiscountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    value?: boolean
    isPercent?: boolean
    active?: boolean
    validFrom?: boolean
    validTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["discount"]>

  export type DiscountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    value?: boolean
    isPercent?: boolean
    active?: boolean
    validFrom?: boolean
    validTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["discount"]>

  export type DiscountSelectScalar = {
    id?: boolean
    code?: boolean
    value?: boolean
    isPercent?: boolean
    active?: boolean
    validFrom?: boolean
    validTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DiscountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "value" | "isPercent" | "active" | "validFrom" | "validTo" | "createdAt" | "updatedAt", ExtArgs["result"]["discount"]>

  export type $DiscountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Discount"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      value: number
      isPercent: boolean
      active: boolean
      validFrom: Date
      validTo: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["discount"]>
    composites: {}
  }

  type DiscountGetPayload<S extends boolean | null | undefined | DiscountDefaultArgs> = $Result.GetResult<Prisma.$DiscountPayload, S>

  type DiscountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiscountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiscountCountAggregateInputType | true
    }

  export interface DiscountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Discount'], meta: { name: 'Discount' } }
    /**
     * Find zero or one Discount that matches the filter.
     * @param {DiscountFindUniqueArgs} args - Arguments to find a Discount
     * @example
     * // Get one Discount
     * const discount = await prisma.discount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiscountFindUniqueArgs>(args: SelectSubset<T, DiscountFindUniqueArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Discount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiscountFindUniqueOrThrowArgs} args - Arguments to find a Discount
     * @example
     * // Get one Discount
     * const discount = await prisma.discount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiscountFindUniqueOrThrowArgs>(args: SelectSubset<T, DiscountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountFindFirstArgs} args - Arguments to find a Discount
     * @example
     * // Get one Discount
     * const discount = await prisma.discount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiscountFindFirstArgs>(args?: SelectSubset<T, DiscountFindFirstArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountFindFirstOrThrowArgs} args - Arguments to find a Discount
     * @example
     * // Get one Discount
     * const discount = await prisma.discount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiscountFindFirstOrThrowArgs>(args?: SelectSubset<T, DiscountFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Discounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Discounts
     * const discounts = await prisma.discount.findMany()
     * 
     * // Get first 10 Discounts
     * const discounts = await prisma.discount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const discountWithIdOnly = await prisma.discount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiscountFindManyArgs>(args?: SelectSubset<T, DiscountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Discount.
     * @param {DiscountCreateArgs} args - Arguments to create a Discount.
     * @example
     * // Create one Discount
     * const Discount = await prisma.discount.create({
     *   data: {
     *     // ... data to create a Discount
     *   }
     * })
     * 
     */
    create<T extends DiscountCreateArgs>(args: SelectSubset<T, DiscountCreateArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Discounts.
     * @param {DiscountCreateManyArgs} args - Arguments to create many Discounts.
     * @example
     * // Create many Discounts
     * const discount = await prisma.discount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiscountCreateManyArgs>(args?: SelectSubset<T, DiscountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Discounts and returns the data saved in the database.
     * @param {DiscountCreateManyAndReturnArgs} args - Arguments to create many Discounts.
     * @example
     * // Create many Discounts
     * const discount = await prisma.discount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Discounts and only return the `id`
     * const discountWithIdOnly = await prisma.discount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiscountCreateManyAndReturnArgs>(args?: SelectSubset<T, DiscountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Discount.
     * @param {DiscountDeleteArgs} args - Arguments to delete one Discount.
     * @example
     * // Delete one Discount
     * const Discount = await prisma.discount.delete({
     *   where: {
     *     // ... filter to delete one Discount
     *   }
     * })
     * 
     */
    delete<T extends DiscountDeleteArgs>(args: SelectSubset<T, DiscountDeleteArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Discount.
     * @param {DiscountUpdateArgs} args - Arguments to update one Discount.
     * @example
     * // Update one Discount
     * const discount = await prisma.discount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiscountUpdateArgs>(args: SelectSubset<T, DiscountUpdateArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Discounts.
     * @param {DiscountDeleteManyArgs} args - Arguments to filter Discounts to delete.
     * @example
     * // Delete a few Discounts
     * const { count } = await prisma.discount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiscountDeleteManyArgs>(args?: SelectSubset<T, DiscountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Discounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Discounts
     * const discount = await prisma.discount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiscountUpdateManyArgs>(args: SelectSubset<T, DiscountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Discounts and returns the data updated in the database.
     * @param {DiscountUpdateManyAndReturnArgs} args - Arguments to update many Discounts.
     * @example
     * // Update many Discounts
     * const discount = await prisma.discount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Discounts and only return the `id`
     * const discountWithIdOnly = await prisma.discount.updateManyAndReturn({
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
    updateManyAndReturn<T extends DiscountUpdateManyAndReturnArgs>(args: SelectSubset<T, DiscountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Discount.
     * @param {DiscountUpsertArgs} args - Arguments to update or create a Discount.
     * @example
     * // Update or create a Discount
     * const discount = await prisma.discount.upsert({
     *   create: {
     *     // ... data to create a Discount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Discount we want to update
     *   }
     * })
     */
    upsert<T extends DiscountUpsertArgs>(args: SelectSubset<T, DiscountUpsertArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Discounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountCountArgs} args - Arguments to filter Discounts to count.
     * @example
     * // Count the number of Discounts
     * const count = await prisma.discount.count({
     *   where: {
     *     // ... the filter for the Discounts we want to count
     *   }
     * })
    **/
    count<T extends DiscountCountArgs>(
      args?: Subset<T, DiscountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Discount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiscountAggregateArgs>(args: Subset<T, DiscountAggregateArgs>): Prisma.PrismaPromise<GetDiscountAggregateType<T>>

    /**
     * Group by Discount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountGroupByArgs} args - Group by arguments.
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
      T extends DiscountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiscountGroupByArgs['orderBy'] }
        : { orderBy?: DiscountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiscountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Discount model
   */
  readonly fields: DiscountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Discount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiscountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Discount model
   */
  interface DiscountFieldRefs {
    readonly id: FieldRef<"Discount", 'Int'>
    readonly code: FieldRef<"Discount", 'String'>
    readonly value: FieldRef<"Discount", 'Float'>
    readonly isPercent: FieldRef<"Discount", 'Boolean'>
    readonly active: FieldRef<"Discount", 'Boolean'>
    readonly validFrom: FieldRef<"Discount", 'DateTime'>
    readonly validTo: FieldRef<"Discount", 'DateTime'>
    readonly createdAt: FieldRef<"Discount", 'DateTime'>
    readonly updatedAt: FieldRef<"Discount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Discount findUnique
   */
  export type DiscountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Filter, which Discount to fetch.
     */
    where: DiscountWhereUniqueInput
  }

  /**
   * Discount findUniqueOrThrow
   */
  export type DiscountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Filter, which Discount to fetch.
     */
    where: DiscountWhereUniqueInput
  }

  /**
   * Discount findFirst
   */
  export type DiscountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Filter, which Discount to fetch.
     */
    where?: DiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discounts to fetch.
     */
    orderBy?: DiscountOrderByWithRelationInput | DiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Discounts.
     */
    cursor?: DiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Discounts.
     */
    distinct?: DiscountScalarFieldEnum | DiscountScalarFieldEnum[]
  }

  /**
   * Discount findFirstOrThrow
   */
  export type DiscountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Filter, which Discount to fetch.
     */
    where?: DiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discounts to fetch.
     */
    orderBy?: DiscountOrderByWithRelationInput | DiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Discounts.
     */
    cursor?: DiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Discounts.
     */
    distinct?: DiscountScalarFieldEnum | DiscountScalarFieldEnum[]
  }

  /**
   * Discount findMany
   */
  export type DiscountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Filter, which Discounts to fetch.
     */
    where?: DiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discounts to fetch.
     */
    orderBy?: DiscountOrderByWithRelationInput | DiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Discounts.
     */
    cursor?: DiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discounts.
     */
    skip?: number
    distinct?: DiscountScalarFieldEnum | DiscountScalarFieldEnum[]
  }

  /**
   * Discount create
   */
  export type DiscountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * The data needed to create a Discount.
     */
    data: XOR<DiscountCreateInput, DiscountUncheckedCreateInput>
  }

  /**
   * Discount createMany
   */
  export type DiscountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Discounts.
     */
    data: DiscountCreateManyInput | DiscountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Discount createManyAndReturn
   */
  export type DiscountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * The data used to create many Discounts.
     */
    data: DiscountCreateManyInput | DiscountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Discount update
   */
  export type DiscountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * The data needed to update a Discount.
     */
    data: XOR<DiscountUpdateInput, DiscountUncheckedUpdateInput>
    /**
     * Choose, which Discount to update.
     */
    where: DiscountWhereUniqueInput
  }

  /**
   * Discount updateMany
   */
  export type DiscountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Discounts.
     */
    data: XOR<DiscountUpdateManyMutationInput, DiscountUncheckedUpdateManyInput>
    /**
     * Filter which Discounts to update
     */
    where?: DiscountWhereInput
    /**
     * Limit how many Discounts to update.
     */
    limit?: number
  }

  /**
   * Discount updateManyAndReturn
   */
  export type DiscountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * The data used to update Discounts.
     */
    data: XOR<DiscountUpdateManyMutationInput, DiscountUncheckedUpdateManyInput>
    /**
     * Filter which Discounts to update
     */
    where?: DiscountWhereInput
    /**
     * Limit how many Discounts to update.
     */
    limit?: number
  }

  /**
   * Discount upsert
   */
  export type DiscountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * The filter to search for the Discount to update in case it exists.
     */
    where: DiscountWhereUniqueInput
    /**
     * In case the Discount found by the `where` argument doesn't exist, create a new Discount with this data.
     */
    create: XOR<DiscountCreateInput, DiscountUncheckedCreateInput>
    /**
     * In case the Discount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiscountUpdateInput, DiscountUncheckedUpdateInput>
  }

  /**
   * Discount delete
   */
  export type DiscountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Filter which Discount to delete.
     */
    where: DiscountWhereUniqueInput
  }

  /**
   * Discount deleteMany
   */
  export type DiscountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Discounts to delete
     */
    where?: DiscountWhereInput
    /**
     * Limit how many Discounts to delete.
     */
    limit?: number
  }

  /**
   * Discount without action
   */
  export type DiscountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
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
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TourTypeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TourTypeScalarFieldEnum = (typeof TourTypeScalarFieldEnum)[keyof typeof TourTypeScalarFieldEnum]


  export const TourScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    typeId: 'typeId',
    basePrice: 'basePrice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TourScalarFieldEnum = (typeof TourScalarFieldEnum)[keyof typeof TourScalarFieldEnum]


  export const TicketCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    tourId: 'tourId'
  };

  export type TicketCategoryScalarFieldEnum = (typeof TicketCategoryScalarFieldEnum)[keyof typeof TicketCategoryScalarFieldEnum]


  export const ScheduleScalarFieldEnum: {
    id: 'id',
    tourId: 'tourId',
    startDate: 'startDate',
    endDate: 'endDate',
    maxPeople: 'maxPeople',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum]


  export const ScheduleSlotScalarFieldEnum: {
    id: 'id',
    scheduleId: 'scheduleId',
    weekDay: 'weekDay',
    time: 'time'
  };

  export type ScheduleSlotScalarFieldEnum = (typeof ScheduleSlotScalarFieldEnum)[keyof typeof ScheduleSlotScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    totalPrice: 'totalPrice',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    emailSent: 'emailSent'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    ticketCategoryId: 'ticketCategoryId',
    quantity: 'quantity',
    price: 'price'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const DiscountScalarFieldEnum: {
    id: 'id',
    code: 'code',
    value: 'value',
    isPercent: 'isPercent',
    active: 'active',
    validFrom: 'validFrom',
    validTo: 'validTo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DiscountScalarFieldEnum = (typeof DiscountScalarFieldEnum)[keyof typeof DiscountScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    orders?: OrderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    orders?: OrderListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TourTypeWhereInput = {
    AND?: TourTypeWhereInput | TourTypeWhereInput[]
    OR?: TourTypeWhereInput[]
    NOT?: TourTypeWhereInput | TourTypeWhereInput[]
    id?: IntFilter<"TourType"> | number
    name?: StringFilter<"TourType"> | string
    tours?: TourListRelationFilter
  }

  export type TourTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    tours?: TourOrderByRelationAggregateInput
  }

  export type TourTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: TourTypeWhereInput | TourTypeWhereInput[]
    OR?: TourTypeWhereInput[]
    NOT?: TourTypeWhereInput | TourTypeWhereInput[]
    tours?: TourListRelationFilter
  }, "id" | "name">

  export type TourTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TourTypeCountOrderByAggregateInput
    _avg?: TourTypeAvgOrderByAggregateInput
    _max?: TourTypeMaxOrderByAggregateInput
    _min?: TourTypeMinOrderByAggregateInput
    _sum?: TourTypeSumOrderByAggregateInput
  }

  export type TourTypeScalarWhereWithAggregatesInput = {
    AND?: TourTypeScalarWhereWithAggregatesInput | TourTypeScalarWhereWithAggregatesInput[]
    OR?: TourTypeScalarWhereWithAggregatesInput[]
    NOT?: TourTypeScalarWhereWithAggregatesInput | TourTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TourType"> | number
    name?: StringWithAggregatesFilter<"TourType"> | string
  }

  export type TourWhereInput = {
    AND?: TourWhereInput | TourWhereInput[]
    OR?: TourWhereInput[]
    NOT?: TourWhereInput | TourWhereInput[]
    id?: IntFilter<"Tour"> | number
    title?: StringFilter<"Tour"> | string
    description?: StringFilter<"Tour"> | string
    typeId?: IntFilter<"Tour"> | number
    basePrice?: FloatFilter<"Tour"> | number
    createdAt?: DateTimeFilter<"Tour"> | Date | string
    updatedAt?: DateTimeFilter<"Tour"> | Date | string
    type?: XOR<TourTypeScalarRelationFilter, TourTypeWhereInput>
    schedules?: ScheduleListRelationFilter
    tickets?: TicketCategoryListRelationFilter
  }

  export type TourOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    typeId?: SortOrder
    basePrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: TourTypeOrderByWithRelationInput
    schedules?: ScheduleOrderByRelationAggregateInput
    tickets?: TicketCategoryOrderByRelationAggregateInput
  }

  export type TourWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TourWhereInput | TourWhereInput[]
    OR?: TourWhereInput[]
    NOT?: TourWhereInput | TourWhereInput[]
    title?: StringFilter<"Tour"> | string
    description?: StringFilter<"Tour"> | string
    typeId?: IntFilter<"Tour"> | number
    basePrice?: FloatFilter<"Tour"> | number
    createdAt?: DateTimeFilter<"Tour"> | Date | string
    updatedAt?: DateTimeFilter<"Tour"> | Date | string
    type?: XOR<TourTypeScalarRelationFilter, TourTypeWhereInput>
    schedules?: ScheduleListRelationFilter
    tickets?: TicketCategoryListRelationFilter
  }, "id">

  export type TourOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    typeId?: SortOrder
    basePrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TourCountOrderByAggregateInput
    _avg?: TourAvgOrderByAggregateInput
    _max?: TourMaxOrderByAggregateInput
    _min?: TourMinOrderByAggregateInput
    _sum?: TourSumOrderByAggregateInput
  }

  export type TourScalarWhereWithAggregatesInput = {
    AND?: TourScalarWhereWithAggregatesInput | TourScalarWhereWithAggregatesInput[]
    OR?: TourScalarWhereWithAggregatesInput[]
    NOT?: TourScalarWhereWithAggregatesInput | TourScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tour"> | number
    title?: StringWithAggregatesFilter<"Tour"> | string
    description?: StringWithAggregatesFilter<"Tour"> | string
    typeId?: IntWithAggregatesFilter<"Tour"> | number
    basePrice?: FloatWithAggregatesFilter<"Tour"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Tour"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tour"> | Date | string
  }

  export type TicketCategoryWhereInput = {
    AND?: TicketCategoryWhereInput | TicketCategoryWhereInput[]
    OR?: TicketCategoryWhereInput[]
    NOT?: TicketCategoryWhereInput | TicketCategoryWhereInput[]
    id?: IntFilter<"TicketCategory"> | number
    name?: StringFilter<"TicketCategory"> | string
    price?: FloatFilter<"TicketCategory"> | number
    tourId?: IntFilter<"TicketCategory"> | number
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
    orders?: OrderItemListRelationFilter
  }

  export type TicketCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    tourId?: SortOrder
    tour?: TourOrderByWithRelationInput
    orders?: OrderItemOrderByRelationAggregateInput
  }

  export type TicketCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TicketCategoryWhereInput | TicketCategoryWhereInput[]
    OR?: TicketCategoryWhereInput[]
    NOT?: TicketCategoryWhereInput | TicketCategoryWhereInput[]
    name?: StringFilter<"TicketCategory"> | string
    price?: FloatFilter<"TicketCategory"> | number
    tourId?: IntFilter<"TicketCategory"> | number
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
    orders?: OrderItemListRelationFilter
  }, "id">

  export type TicketCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    tourId?: SortOrder
    _count?: TicketCategoryCountOrderByAggregateInput
    _avg?: TicketCategoryAvgOrderByAggregateInput
    _max?: TicketCategoryMaxOrderByAggregateInput
    _min?: TicketCategoryMinOrderByAggregateInput
    _sum?: TicketCategorySumOrderByAggregateInput
  }

  export type TicketCategoryScalarWhereWithAggregatesInput = {
    AND?: TicketCategoryScalarWhereWithAggregatesInput | TicketCategoryScalarWhereWithAggregatesInput[]
    OR?: TicketCategoryScalarWhereWithAggregatesInput[]
    NOT?: TicketCategoryScalarWhereWithAggregatesInput | TicketCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TicketCategory"> | number
    name?: StringWithAggregatesFilter<"TicketCategory"> | string
    price?: FloatWithAggregatesFilter<"TicketCategory"> | number
    tourId?: IntWithAggregatesFilter<"TicketCategory"> | number
  }

  export type ScheduleWhereInput = {
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    id?: IntFilter<"Schedule"> | number
    tourId?: IntFilter<"Schedule"> | number
    startDate?: DateTimeFilter<"Schedule"> | Date | string
    endDate?: DateTimeFilter<"Schedule"> | Date | string
    maxPeople?: IntFilter<"Schedule"> | number
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
    slots?: ScheduleSlotListRelationFilter
  }

  export type ScheduleOrderByWithRelationInput = {
    id?: SortOrder
    tourId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    maxPeople?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tour?: TourOrderByWithRelationInput
    slots?: ScheduleSlotOrderByRelationAggregateInput
  }

  export type ScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    tourId?: IntFilter<"Schedule"> | number
    startDate?: DateTimeFilter<"Schedule"> | Date | string
    endDate?: DateTimeFilter<"Schedule"> | Date | string
    maxPeople?: IntFilter<"Schedule"> | number
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
    slots?: ScheduleSlotListRelationFilter
  }, "id">

  export type ScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    tourId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    maxPeople?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ScheduleCountOrderByAggregateInput
    _avg?: ScheduleAvgOrderByAggregateInput
    _max?: ScheduleMaxOrderByAggregateInput
    _min?: ScheduleMinOrderByAggregateInput
    _sum?: ScheduleSumOrderByAggregateInput
  }

  export type ScheduleScalarWhereWithAggregatesInput = {
    AND?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    OR?: ScheduleScalarWhereWithAggregatesInput[]
    NOT?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Schedule"> | number
    tourId?: IntWithAggregatesFilter<"Schedule"> | number
    startDate?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    maxPeople?: IntWithAggregatesFilter<"Schedule"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
  }

  export type ScheduleSlotWhereInput = {
    AND?: ScheduleSlotWhereInput | ScheduleSlotWhereInput[]
    OR?: ScheduleSlotWhereInput[]
    NOT?: ScheduleSlotWhereInput | ScheduleSlotWhereInput[]
    id?: IntFilter<"ScheduleSlot"> | number
    scheduleId?: IntFilter<"ScheduleSlot"> | number
    weekDay?: IntFilter<"ScheduleSlot"> | number
    time?: StringFilter<"ScheduleSlot"> | string
    schedule?: XOR<ScheduleScalarRelationFilter, ScheduleWhereInput>
  }

  export type ScheduleSlotOrderByWithRelationInput = {
    id?: SortOrder
    scheduleId?: SortOrder
    weekDay?: SortOrder
    time?: SortOrder
    schedule?: ScheduleOrderByWithRelationInput
  }

  export type ScheduleSlotWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ScheduleSlotWhereInput | ScheduleSlotWhereInput[]
    OR?: ScheduleSlotWhereInput[]
    NOT?: ScheduleSlotWhereInput | ScheduleSlotWhereInput[]
    scheduleId?: IntFilter<"ScheduleSlot"> | number
    weekDay?: IntFilter<"ScheduleSlot"> | number
    time?: StringFilter<"ScheduleSlot"> | string
    schedule?: XOR<ScheduleScalarRelationFilter, ScheduleWhereInput>
  }, "id">

  export type ScheduleSlotOrderByWithAggregationInput = {
    id?: SortOrder
    scheduleId?: SortOrder
    weekDay?: SortOrder
    time?: SortOrder
    _count?: ScheduleSlotCountOrderByAggregateInput
    _avg?: ScheduleSlotAvgOrderByAggregateInput
    _max?: ScheduleSlotMaxOrderByAggregateInput
    _min?: ScheduleSlotMinOrderByAggregateInput
    _sum?: ScheduleSlotSumOrderByAggregateInput
  }

  export type ScheduleSlotScalarWhereWithAggregatesInput = {
    AND?: ScheduleSlotScalarWhereWithAggregatesInput | ScheduleSlotScalarWhereWithAggregatesInput[]
    OR?: ScheduleSlotScalarWhereWithAggregatesInput[]
    NOT?: ScheduleSlotScalarWhereWithAggregatesInput | ScheduleSlotScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ScheduleSlot"> | number
    scheduleId?: IntWithAggregatesFilter<"ScheduleSlot"> | number
    weekDay?: IntWithAggregatesFilter<"ScheduleSlot"> | number
    time?: StringWithAggregatesFilter<"ScheduleSlot"> | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    userId?: IntFilter<"Order"> | number
    totalPrice?: FloatFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    emailSent?: BoolFilter<"Order"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: OrderItemListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailSent?: SortOrder
    user?: UserOrderByWithRelationInput
    items?: OrderItemOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    userId?: IntFilter<"Order"> | number
    totalPrice?: FloatFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    emailSent?: BoolFilter<"Order"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: OrderItemListRelationFilter
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailSent?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    userId?: IntWithAggregatesFilter<"Order"> | number
    totalPrice?: FloatWithAggregatesFilter<"Order"> | number
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    emailSent?: BoolWithAggregatesFilter<"Order"> | boolean
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: IntFilter<"OrderItem"> | number
    orderId?: IntFilter<"OrderItem"> | number
    ticketCategoryId?: IntFilter<"OrderItem"> | number
    quantity?: IntFilter<"OrderItem"> | number
    price?: FloatFilter<"OrderItem"> | number
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    ticketCategory?: XOR<TicketCategoryScalarRelationFilter, TicketCategoryWhereInput>
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    ticketCategoryId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    order?: OrderOrderByWithRelationInput
    ticketCategory?: TicketCategoryOrderByWithRelationInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    orderId?: IntFilter<"OrderItem"> | number
    ticketCategoryId?: IntFilter<"OrderItem"> | number
    quantity?: IntFilter<"OrderItem"> | number
    price?: FloatFilter<"OrderItem"> | number
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    ticketCategory?: XOR<TicketCategoryScalarRelationFilter, TicketCategoryWhereInput>
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    ticketCategoryId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrderItem"> | number
    orderId?: IntWithAggregatesFilter<"OrderItem"> | number
    ticketCategoryId?: IntWithAggregatesFilter<"OrderItem"> | number
    quantity?: IntWithAggregatesFilter<"OrderItem"> | number
    price?: FloatWithAggregatesFilter<"OrderItem"> | number
  }

  export type DiscountWhereInput = {
    AND?: DiscountWhereInput | DiscountWhereInput[]
    OR?: DiscountWhereInput[]
    NOT?: DiscountWhereInput | DiscountWhereInput[]
    id?: IntFilter<"Discount"> | number
    code?: StringFilter<"Discount"> | string
    value?: FloatFilter<"Discount"> | number
    isPercent?: BoolFilter<"Discount"> | boolean
    active?: BoolFilter<"Discount"> | boolean
    validFrom?: DateTimeFilter<"Discount"> | Date | string
    validTo?: DateTimeFilter<"Discount"> | Date | string
    createdAt?: DateTimeFilter<"Discount"> | Date | string
    updatedAt?: DateTimeFilter<"Discount"> | Date | string
  }

  export type DiscountOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    value?: SortOrder
    isPercent?: SortOrder
    active?: SortOrder
    validFrom?: SortOrder
    validTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DiscountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: DiscountWhereInput | DiscountWhereInput[]
    OR?: DiscountWhereInput[]
    NOT?: DiscountWhereInput | DiscountWhereInput[]
    value?: FloatFilter<"Discount"> | number
    isPercent?: BoolFilter<"Discount"> | boolean
    active?: BoolFilter<"Discount"> | boolean
    validFrom?: DateTimeFilter<"Discount"> | Date | string
    validTo?: DateTimeFilter<"Discount"> | Date | string
    createdAt?: DateTimeFilter<"Discount"> | Date | string
    updatedAt?: DateTimeFilter<"Discount"> | Date | string
  }, "id" | "code">

  export type DiscountOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    value?: SortOrder
    isPercent?: SortOrder
    active?: SortOrder
    validFrom?: SortOrder
    validTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DiscountCountOrderByAggregateInput
    _avg?: DiscountAvgOrderByAggregateInput
    _max?: DiscountMaxOrderByAggregateInput
    _min?: DiscountMinOrderByAggregateInput
    _sum?: DiscountSumOrderByAggregateInput
  }

  export type DiscountScalarWhereWithAggregatesInput = {
    AND?: DiscountScalarWhereWithAggregatesInput | DiscountScalarWhereWithAggregatesInput[]
    OR?: DiscountScalarWhereWithAggregatesInput[]
    NOT?: DiscountScalarWhereWithAggregatesInput | DiscountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Discount"> | number
    code?: StringWithAggregatesFilter<"Discount"> | string
    value?: FloatWithAggregatesFilter<"Discount"> | number
    isPercent?: BoolWithAggregatesFilter<"Discount"> | boolean
    active?: BoolWithAggregatesFilter<"Discount"> | boolean
    validFrom?: DateTimeWithAggregatesFilter<"Discount"> | Date | string
    validTo?: DateTimeWithAggregatesFilter<"Discount"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Discount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Discount"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourTypeCreateInput = {
    name: string
    tours?: TourCreateNestedManyWithoutTypeInput
  }

  export type TourTypeUncheckedCreateInput = {
    id?: number
    name: string
    tours?: TourUncheckedCreateNestedManyWithoutTypeInput
  }

  export type TourTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    tours?: TourUpdateManyWithoutTypeNestedInput
  }

  export type TourTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tours?: TourUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type TourTypeCreateManyInput = {
    id?: number
    name: string
  }

  export type TourTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TourTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TourCreateInput = {
    title: string
    description: string
    basePrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    type: TourTypeCreateNestedOneWithoutToursInput
    schedules?: ScheduleCreateNestedManyWithoutTourInput
    tickets?: TicketCategoryCreateNestedManyWithoutTourInput
  }

  export type TourUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    typeId: number
    basePrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: ScheduleUncheckedCreateNestedManyWithoutTourInput
    tickets?: TicketCategoryUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: TourTypeUpdateOneRequiredWithoutToursNestedInput
    schedules?: ScheduleUpdateManyWithoutTourNestedInput
    tickets?: TicketCategoryUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
    basePrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: ScheduleUncheckedUpdateManyWithoutTourNestedInput
    tickets?: TicketCategoryUncheckedUpdateManyWithoutTourNestedInput
  }

  export type TourCreateManyInput = {
    id?: number
    title: string
    description: string
    typeId: number
    basePrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TourUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
    basePrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCategoryCreateInput = {
    name: string
    price: number
    tour: TourCreateNestedOneWithoutTicketsInput
    orders?: OrderItemCreateNestedManyWithoutTicketCategoryInput
  }

  export type TicketCategoryUncheckedCreateInput = {
    id?: number
    name: string
    price: number
    tourId: number
    orders?: OrderItemUncheckedCreateNestedManyWithoutTicketCategoryInput
  }

  export type TicketCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    tour?: TourUpdateOneRequiredWithoutTicketsNestedInput
    orders?: OrderItemUpdateManyWithoutTicketCategoryNestedInput
  }

  export type TicketCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    orders?: OrderItemUncheckedUpdateManyWithoutTicketCategoryNestedInput
  }

  export type TicketCategoryCreateManyInput = {
    id?: number
    name: string
    price: number
    tourId: number
  }

  export type TicketCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type TicketCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
  }

  export type ScheduleCreateInput = {
    startDate: Date | string
    endDate: Date | string
    maxPeople: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tour: TourCreateNestedOneWithoutSchedulesInput
    slots?: ScheduleSlotCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateInput = {
    id?: number
    tourId: number
    startDate: Date | string
    endDate: Date | string
    maxPeople: number
    createdAt?: Date | string
    updatedAt?: Date | string
    slots?: ScheduleSlotUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUpdateInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    maxPeople?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tour?: TourUpdateOneRequiredWithoutSchedulesNestedInput
    slots?: ScheduleSlotUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    maxPeople?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: ScheduleSlotUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleCreateManyInput = {
    id?: number
    tourId: number
    startDate: Date | string
    endDate: Date | string
    maxPeople: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleUpdateManyMutationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    maxPeople?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    maxPeople?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleSlotCreateInput = {
    weekDay: number
    time: string
    schedule: ScheduleCreateNestedOneWithoutSlotsInput
  }

  export type ScheduleSlotUncheckedCreateInput = {
    id?: number
    scheduleId: number
    weekDay: number
    time: string
  }

  export type ScheduleSlotUpdateInput = {
    weekDay?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    schedule?: ScheduleUpdateOneRequiredWithoutSlotsNestedInput
  }

  export type ScheduleSlotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    scheduleId?: IntFieldUpdateOperationsInput | number
    weekDay?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleSlotCreateManyInput = {
    id?: number
    scheduleId: number
    weekDay: number
    time: string
  }

  export type ScheduleSlotUpdateManyMutationInput = {
    weekDay?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleSlotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    scheduleId?: IntFieldUpdateOperationsInput | number
    weekDay?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
  }

  export type OrderCreateInput = {
    totalPrice: number
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    emailSent?: boolean
    user: UserCreateNestedOneWithoutOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    userId: number
    totalPrice: number
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    emailSent?: boolean
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailSent?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailSent?: BoolFieldUpdateOperationsInput | boolean
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: number
    userId: number
    totalPrice: number
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    emailSent?: boolean
  }

  export type OrderUpdateManyMutationInput = {
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailSent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailSent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrderItemCreateInput = {
    quantity: number
    price: number
    order: OrderCreateNestedOneWithoutItemsInput
    ticketCategory: TicketCategoryCreateNestedOneWithoutOrdersInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: number
    orderId: number
    ticketCategoryId: number
    quantity: number
    price: number
  }

  export type OrderItemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
    ticketCategory?: TicketCategoryUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    ticketCategoryId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderItemCreateManyInput = {
    id?: number
    orderId: number
    ticketCategoryId: number
    quantity: number
    price: number
  }

  export type OrderItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    ticketCategoryId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type DiscountCreateInput = {
    code: string
    value: number
    isPercent?: boolean
    active?: boolean
    validFrom: Date | string
    validTo: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiscountUncheckedCreateInput = {
    id?: number
    code: string
    value: number
    isPercent?: boolean
    active?: boolean
    validFrom: Date | string
    validTo: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiscountUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    isPercent?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validTo?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    isPercent?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validTo?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscountCreateManyInput = {
    id?: number
    code: string
    value: number
    isPercent?: boolean
    active?: boolean
    validFrom: Date | string
    validTo: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiscountUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    isPercent?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validTo?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    isPercent?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validTo?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type TourListRelationFilter = {
    every?: TourWhereInput
    some?: TourWhereInput
    none?: TourWhereInput
  }

  export type TourOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TourTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TourTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TourTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TourTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TourTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TourTypeScalarRelationFilter = {
    is?: TourTypeWhereInput
    isNot?: TourTypeWhereInput
  }

  export type ScheduleListRelationFilter = {
    every?: ScheduleWhereInput
    some?: ScheduleWhereInput
    none?: ScheduleWhereInput
  }

  export type TicketCategoryListRelationFilter = {
    every?: TicketCategoryWhereInput
    some?: TicketCategoryWhereInput
    none?: TicketCategoryWhereInput
  }

  export type ScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TourCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    typeId?: SortOrder
    basePrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TourAvgOrderByAggregateInput = {
    id?: SortOrder
    typeId?: SortOrder
    basePrice?: SortOrder
  }

  export type TourMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    typeId?: SortOrder
    basePrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TourMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    typeId?: SortOrder
    basePrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TourSumOrderByAggregateInput = {
    id?: SortOrder
    typeId?: SortOrder
    basePrice?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type TourScalarRelationFilter = {
    is?: TourWhereInput
    isNot?: TourWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    tourId?: SortOrder
  }

  export type TicketCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    tourId?: SortOrder
  }

  export type TicketCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    tourId?: SortOrder
  }

  export type TicketCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    tourId?: SortOrder
  }

  export type TicketCategorySumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    tourId?: SortOrder
  }

  export type ScheduleSlotListRelationFilter = {
    every?: ScheduleSlotWhereInput
    some?: ScheduleSlotWhereInput
    none?: ScheduleSlotWhereInput
  }

  export type ScheduleSlotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    maxPeople?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleAvgOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    maxPeople?: SortOrder
  }

  export type ScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    maxPeople?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    maxPeople?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleSumOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    maxPeople?: SortOrder
  }

  export type ScheduleScalarRelationFilter = {
    is?: ScheduleWhereInput
    isNot?: ScheduleWhereInput
  }

  export type ScheduleSlotCountOrderByAggregateInput = {
    id?: SortOrder
    scheduleId?: SortOrder
    weekDay?: SortOrder
    time?: SortOrder
  }

  export type ScheduleSlotAvgOrderByAggregateInput = {
    id?: SortOrder
    scheduleId?: SortOrder
    weekDay?: SortOrder
  }

  export type ScheduleSlotMaxOrderByAggregateInput = {
    id?: SortOrder
    scheduleId?: SortOrder
    weekDay?: SortOrder
    time?: SortOrder
  }

  export type ScheduleSlotMinOrderByAggregateInput = {
    id?: SortOrder
    scheduleId?: SortOrder
    weekDay?: SortOrder
    time?: SortOrder
  }

  export type ScheduleSlotSumOrderByAggregateInput = {
    id?: SortOrder
    scheduleId?: SortOrder
    weekDay?: SortOrder
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailSent?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalPrice?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailSent?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailSent?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalPrice?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type TicketCategoryScalarRelationFilter = {
    is?: TicketCategoryWhereInput
    isNot?: TicketCategoryWhereInput
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    ticketCategoryId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    ticketCategoryId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    ticketCategoryId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    ticketCategoryId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    ticketCategoryId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type DiscountCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    value?: SortOrder
    isPercent?: SortOrder
    active?: SortOrder
    validFrom?: SortOrder
    validTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DiscountAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type DiscountMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    value?: SortOrder
    isPercent?: SortOrder
    active?: SortOrder
    validFrom?: SortOrder
    validTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DiscountMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    value?: SortOrder
    isPercent?: SortOrder
    active?: SortOrder
    validFrom?: SortOrder
    validTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DiscountSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
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

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type TourCreateNestedManyWithoutTypeInput = {
    create?: XOR<TourCreateWithoutTypeInput, TourUncheckedCreateWithoutTypeInput> | TourCreateWithoutTypeInput[] | TourUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: TourCreateOrConnectWithoutTypeInput | TourCreateOrConnectWithoutTypeInput[]
    createMany?: TourCreateManyTypeInputEnvelope
    connect?: TourWhereUniqueInput | TourWhereUniqueInput[]
  }

  export type TourUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<TourCreateWithoutTypeInput, TourUncheckedCreateWithoutTypeInput> | TourCreateWithoutTypeInput[] | TourUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: TourCreateOrConnectWithoutTypeInput | TourCreateOrConnectWithoutTypeInput[]
    createMany?: TourCreateManyTypeInputEnvelope
    connect?: TourWhereUniqueInput | TourWhereUniqueInput[]
  }

  export type TourUpdateManyWithoutTypeNestedInput = {
    create?: XOR<TourCreateWithoutTypeInput, TourUncheckedCreateWithoutTypeInput> | TourCreateWithoutTypeInput[] | TourUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: TourCreateOrConnectWithoutTypeInput | TourCreateOrConnectWithoutTypeInput[]
    upsert?: TourUpsertWithWhereUniqueWithoutTypeInput | TourUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: TourCreateManyTypeInputEnvelope
    set?: TourWhereUniqueInput | TourWhereUniqueInput[]
    disconnect?: TourWhereUniqueInput | TourWhereUniqueInput[]
    delete?: TourWhereUniqueInput | TourWhereUniqueInput[]
    connect?: TourWhereUniqueInput | TourWhereUniqueInput[]
    update?: TourUpdateWithWhereUniqueWithoutTypeInput | TourUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: TourUpdateManyWithWhereWithoutTypeInput | TourUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: TourScalarWhereInput | TourScalarWhereInput[]
  }

  export type TourUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<TourCreateWithoutTypeInput, TourUncheckedCreateWithoutTypeInput> | TourCreateWithoutTypeInput[] | TourUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: TourCreateOrConnectWithoutTypeInput | TourCreateOrConnectWithoutTypeInput[]
    upsert?: TourUpsertWithWhereUniqueWithoutTypeInput | TourUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: TourCreateManyTypeInputEnvelope
    set?: TourWhereUniqueInput | TourWhereUniqueInput[]
    disconnect?: TourWhereUniqueInput | TourWhereUniqueInput[]
    delete?: TourWhereUniqueInput | TourWhereUniqueInput[]
    connect?: TourWhereUniqueInput | TourWhereUniqueInput[]
    update?: TourUpdateWithWhereUniqueWithoutTypeInput | TourUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: TourUpdateManyWithWhereWithoutTypeInput | TourUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: TourScalarWhereInput | TourScalarWhereInput[]
  }

  export type TourTypeCreateNestedOneWithoutToursInput = {
    create?: XOR<TourTypeCreateWithoutToursInput, TourTypeUncheckedCreateWithoutToursInput>
    connectOrCreate?: TourTypeCreateOrConnectWithoutToursInput
    connect?: TourTypeWhereUniqueInput
  }

  export type ScheduleCreateNestedManyWithoutTourInput = {
    create?: XOR<ScheduleCreateWithoutTourInput, ScheduleUncheckedCreateWithoutTourInput> | ScheduleCreateWithoutTourInput[] | ScheduleUncheckedCreateWithoutTourInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutTourInput | ScheduleCreateOrConnectWithoutTourInput[]
    createMany?: ScheduleCreateManyTourInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type TicketCategoryCreateNestedManyWithoutTourInput = {
    create?: XOR<TicketCategoryCreateWithoutTourInput, TicketCategoryUncheckedCreateWithoutTourInput> | TicketCategoryCreateWithoutTourInput[] | TicketCategoryUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TicketCategoryCreateOrConnectWithoutTourInput | TicketCategoryCreateOrConnectWithoutTourInput[]
    createMany?: TicketCategoryCreateManyTourInputEnvelope
    connect?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
  }

  export type ScheduleUncheckedCreateNestedManyWithoutTourInput = {
    create?: XOR<ScheduleCreateWithoutTourInput, ScheduleUncheckedCreateWithoutTourInput> | ScheduleCreateWithoutTourInput[] | ScheduleUncheckedCreateWithoutTourInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutTourInput | ScheduleCreateOrConnectWithoutTourInput[]
    createMany?: ScheduleCreateManyTourInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type TicketCategoryUncheckedCreateNestedManyWithoutTourInput = {
    create?: XOR<TicketCategoryCreateWithoutTourInput, TicketCategoryUncheckedCreateWithoutTourInput> | TicketCategoryCreateWithoutTourInput[] | TicketCategoryUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TicketCategoryCreateOrConnectWithoutTourInput | TicketCategoryCreateOrConnectWithoutTourInput[]
    createMany?: TicketCategoryCreateManyTourInputEnvelope
    connect?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TourTypeUpdateOneRequiredWithoutToursNestedInput = {
    create?: XOR<TourTypeCreateWithoutToursInput, TourTypeUncheckedCreateWithoutToursInput>
    connectOrCreate?: TourTypeCreateOrConnectWithoutToursInput
    upsert?: TourTypeUpsertWithoutToursInput
    connect?: TourTypeWhereUniqueInput
    update?: XOR<XOR<TourTypeUpdateToOneWithWhereWithoutToursInput, TourTypeUpdateWithoutToursInput>, TourTypeUncheckedUpdateWithoutToursInput>
  }

  export type ScheduleUpdateManyWithoutTourNestedInput = {
    create?: XOR<ScheduleCreateWithoutTourInput, ScheduleUncheckedCreateWithoutTourInput> | ScheduleCreateWithoutTourInput[] | ScheduleUncheckedCreateWithoutTourInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutTourInput | ScheduleCreateOrConnectWithoutTourInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutTourInput | ScheduleUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: ScheduleCreateManyTourInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutTourInput | ScheduleUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutTourInput | ScheduleUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type TicketCategoryUpdateManyWithoutTourNestedInput = {
    create?: XOR<TicketCategoryCreateWithoutTourInput, TicketCategoryUncheckedCreateWithoutTourInput> | TicketCategoryCreateWithoutTourInput[] | TicketCategoryUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TicketCategoryCreateOrConnectWithoutTourInput | TicketCategoryCreateOrConnectWithoutTourInput[]
    upsert?: TicketCategoryUpsertWithWhereUniqueWithoutTourInput | TicketCategoryUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: TicketCategoryCreateManyTourInputEnvelope
    set?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    disconnect?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    delete?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    connect?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    update?: TicketCategoryUpdateWithWhereUniqueWithoutTourInput | TicketCategoryUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: TicketCategoryUpdateManyWithWhereWithoutTourInput | TicketCategoryUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: TicketCategoryScalarWhereInput | TicketCategoryScalarWhereInput[]
  }

  export type ScheduleUncheckedUpdateManyWithoutTourNestedInput = {
    create?: XOR<ScheduleCreateWithoutTourInput, ScheduleUncheckedCreateWithoutTourInput> | ScheduleCreateWithoutTourInput[] | ScheduleUncheckedCreateWithoutTourInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutTourInput | ScheduleCreateOrConnectWithoutTourInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutTourInput | ScheduleUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: ScheduleCreateManyTourInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutTourInput | ScheduleUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutTourInput | ScheduleUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type TicketCategoryUncheckedUpdateManyWithoutTourNestedInput = {
    create?: XOR<TicketCategoryCreateWithoutTourInput, TicketCategoryUncheckedCreateWithoutTourInput> | TicketCategoryCreateWithoutTourInput[] | TicketCategoryUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TicketCategoryCreateOrConnectWithoutTourInput | TicketCategoryCreateOrConnectWithoutTourInput[]
    upsert?: TicketCategoryUpsertWithWhereUniqueWithoutTourInput | TicketCategoryUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: TicketCategoryCreateManyTourInputEnvelope
    set?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    disconnect?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    delete?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    connect?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    update?: TicketCategoryUpdateWithWhereUniqueWithoutTourInput | TicketCategoryUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: TicketCategoryUpdateManyWithWhereWithoutTourInput | TicketCategoryUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: TicketCategoryScalarWhereInput | TicketCategoryScalarWhereInput[]
  }

  export type TourCreateNestedOneWithoutTicketsInput = {
    create?: XOR<TourCreateWithoutTicketsInput, TourUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: TourCreateOrConnectWithoutTicketsInput
    connect?: TourWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutTicketCategoryInput = {
    create?: XOR<OrderItemCreateWithoutTicketCategoryInput, OrderItemUncheckedCreateWithoutTicketCategoryInput> | OrderItemCreateWithoutTicketCategoryInput[] | OrderItemUncheckedCreateWithoutTicketCategoryInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutTicketCategoryInput | OrderItemCreateOrConnectWithoutTicketCategoryInput[]
    createMany?: OrderItemCreateManyTicketCategoryInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutTicketCategoryInput = {
    create?: XOR<OrderItemCreateWithoutTicketCategoryInput, OrderItemUncheckedCreateWithoutTicketCategoryInput> | OrderItemCreateWithoutTicketCategoryInput[] | OrderItemUncheckedCreateWithoutTicketCategoryInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutTicketCategoryInput | OrderItemCreateOrConnectWithoutTicketCategoryInput[]
    createMany?: OrderItemCreateManyTicketCategoryInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type TourUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<TourCreateWithoutTicketsInput, TourUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: TourCreateOrConnectWithoutTicketsInput
    upsert?: TourUpsertWithoutTicketsInput
    connect?: TourWhereUniqueInput
    update?: XOR<XOR<TourUpdateToOneWithWhereWithoutTicketsInput, TourUpdateWithoutTicketsInput>, TourUncheckedUpdateWithoutTicketsInput>
  }

  export type OrderItemUpdateManyWithoutTicketCategoryNestedInput = {
    create?: XOR<OrderItemCreateWithoutTicketCategoryInput, OrderItemUncheckedCreateWithoutTicketCategoryInput> | OrderItemCreateWithoutTicketCategoryInput[] | OrderItemUncheckedCreateWithoutTicketCategoryInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutTicketCategoryInput | OrderItemCreateOrConnectWithoutTicketCategoryInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutTicketCategoryInput | OrderItemUpsertWithWhereUniqueWithoutTicketCategoryInput[]
    createMany?: OrderItemCreateManyTicketCategoryInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutTicketCategoryInput | OrderItemUpdateWithWhereUniqueWithoutTicketCategoryInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutTicketCategoryInput | OrderItemUpdateManyWithWhereWithoutTicketCategoryInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutTicketCategoryNestedInput = {
    create?: XOR<OrderItemCreateWithoutTicketCategoryInput, OrderItemUncheckedCreateWithoutTicketCategoryInput> | OrderItemCreateWithoutTicketCategoryInput[] | OrderItemUncheckedCreateWithoutTicketCategoryInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutTicketCategoryInput | OrderItemCreateOrConnectWithoutTicketCategoryInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutTicketCategoryInput | OrderItemUpsertWithWhereUniqueWithoutTicketCategoryInput[]
    createMany?: OrderItemCreateManyTicketCategoryInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutTicketCategoryInput | OrderItemUpdateWithWhereUniqueWithoutTicketCategoryInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutTicketCategoryInput | OrderItemUpdateManyWithWhereWithoutTicketCategoryInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type TourCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<TourCreateWithoutSchedulesInput, TourUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: TourCreateOrConnectWithoutSchedulesInput
    connect?: TourWhereUniqueInput
  }

  export type ScheduleSlotCreateNestedManyWithoutScheduleInput = {
    create?: XOR<ScheduleSlotCreateWithoutScheduleInput, ScheduleSlotUncheckedCreateWithoutScheduleInput> | ScheduleSlotCreateWithoutScheduleInput[] | ScheduleSlotUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: ScheduleSlotCreateOrConnectWithoutScheduleInput | ScheduleSlotCreateOrConnectWithoutScheduleInput[]
    createMany?: ScheduleSlotCreateManyScheduleInputEnvelope
    connect?: ScheduleSlotWhereUniqueInput | ScheduleSlotWhereUniqueInput[]
  }

  export type ScheduleSlotUncheckedCreateNestedManyWithoutScheduleInput = {
    create?: XOR<ScheduleSlotCreateWithoutScheduleInput, ScheduleSlotUncheckedCreateWithoutScheduleInput> | ScheduleSlotCreateWithoutScheduleInput[] | ScheduleSlotUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: ScheduleSlotCreateOrConnectWithoutScheduleInput | ScheduleSlotCreateOrConnectWithoutScheduleInput[]
    createMany?: ScheduleSlotCreateManyScheduleInputEnvelope
    connect?: ScheduleSlotWhereUniqueInput | ScheduleSlotWhereUniqueInput[]
  }

  export type TourUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<TourCreateWithoutSchedulesInput, TourUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: TourCreateOrConnectWithoutSchedulesInput
    upsert?: TourUpsertWithoutSchedulesInput
    connect?: TourWhereUniqueInput
    update?: XOR<XOR<TourUpdateToOneWithWhereWithoutSchedulesInput, TourUpdateWithoutSchedulesInput>, TourUncheckedUpdateWithoutSchedulesInput>
  }

  export type ScheduleSlotUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<ScheduleSlotCreateWithoutScheduleInput, ScheduleSlotUncheckedCreateWithoutScheduleInput> | ScheduleSlotCreateWithoutScheduleInput[] | ScheduleSlotUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: ScheduleSlotCreateOrConnectWithoutScheduleInput | ScheduleSlotCreateOrConnectWithoutScheduleInput[]
    upsert?: ScheduleSlotUpsertWithWhereUniqueWithoutScheduleInput | ScheduleSlotUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: ScheduleSlotCreateManyScheduleInputEnvelope
    set?: ScheduleSlotWhereUniqueInput | ScheduleSlotWhereUniqueInput[]
    disconnect?: ScheduleSlotWhereUniqueInput | ScheduleSlotWhereUniqueInput[]
    delete?: ScheduleSlotWhereUniqueInput | ScheduleSlotWhereUniqueInput[]
    connect?: ScheduleSlotWhereUniqueInput | ScheduleSlotWhereUniqueInput[]
    update?: ScheduleSlotUpdateWithWhereUniqueWithoutScheduleInput | ScheduleSlotUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: ScheduleSlotUpdateManyWithWhereWithoutScheduleInput | ScheduleSlotUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: ScheduleSlotScalarWhereInput | ScheduleSlotScalarWhereInput[]
  }

  export type ScheduleSlotUncheckedUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<ScheduleSlotCreateWithoutScheduleInput, ScheduleSlotUncheckedCreateWithoutScheduleInput> | ScheduleSlotCreateWithoutScheduleInput[] | ScheduleSlotUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: ScheduleSlotCreateOrConnectWithoutScheduleInput | ScheduleSlotCreateOrConnectWithoutScheduleInput[]
    upsert?: ScheduleSlotUpsertWithWhereUniqueWithoutScheduleInput | ScheduleSlotUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: ScheduleSlotCreateManyScheduleInputEnvelope
    set?: ScheduleSlotWhereUniqueInput | ScheduleSlotWhereUniqueInput[]
    disconnect?: ScheduleSlotWhereUniqueInput | ScheduleSlotWhereUniqueInput[]
    delete?: ScheduleSlotWhereUniqueInput | ScheduleSlotWhereUniqueInput[]
    connect?: ScheduleSlotWhereUniqueInput | ScheduleSlotWhereUniqueInput[]
    update?: ScheduleSlotUpdateWithWhereUniqueWithoutScheduleInput | ScheduleSlotUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: ScheduleSlotUpdateManyWithWhereWithoutScheduleInput | ScheduleSlotUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: ScheduleSlotScalarWhereInput | ScheduleSlotScalarWhereInput[]
  }

  export type ScheduleCreateNestedOneWithoutSlotsInput = {
    create?: XOR<ScheduleCreateWithoutSlotsInput, ScheduleUncheckedCreateWithoutSlotsInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutSlotsInput
    connect?: ScheduleWhereUniqueInput
  }

  export type ScheduleUpdateOneRequiredWithoutSlotsNestedInput = {
    create?: XOR<ScheduleCreateWithoutSlotsInput, ScheduleUncheckedCreateWithoutSlotsInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutSlotsInput
    upsert?: ScheduleUpsertWithoutSlotsInput
    connect?: ScheduleWhereUniqueInput
    update?: XOR<XOR<ScheduleUpdateToOneWithWhereWithoutSlotsInput, ScheduleUpdateWithoutSlotsInput>, ScheduleUncheckedUpdateWithoutSlotsInput>
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutItemsInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type TicketCategoryCreateNestedOneWithoutOrdersInput = {
    create?: XOR<TicketCategoryCreateWithoutOrdersInput, TicketCategoryUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: TicketCategoryCreateOrConnectWithoutOrdersInput
    connect?: TicketCategoryWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    upsert?: OrderUpsertWithoutItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutItemsInput, OrderUpdateWithoutItemsInput>, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type TicketCategoryUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<TicketCategoryCreateWithoutOrdersInput, TicketCategoryUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: TicketCategoryCreateOrConnectWithoutOrdersInput
    upsert?: TicketCategoryUpsertWithoutOrdersInput
    connect?: TicketCategoryWhereUniqueInput
    update?: XOR<XOR<TicketCategoryUpdateToOneWithWhereWithoutOrdersInput, TicketCategoryUpdateWithoutOrdersInput>, TicketCategoryUncheckedUpdateWithoutOrdersInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type OrderCreateWithoutUserInput = {
    totalPrice: number
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    emailSent?: boolean
    items?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: number
    totalPrice: number
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    emailSent?: boolean
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    userId?: IntFilter<"Order"> | number
    totalPrice?: FloatFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    emailSent?: BoolFilter<"Order"> | boolean
  }

  export type TourCreateWithoutTypeInput = {
    title: string
    description: string
    basePrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: ScheduleCreateNestedManyWithoutTourInput
    tickets?: TicketCategoryCreateNestedManyWithoutTourInput
  }

  export type TourUncheckedCreateWithoutTypeInput = {
    id?: number
    title: string
    description: string
    basePrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: ScheduleUncheckedCreateNestedManyWithoutTourInput
    tickets?: TicketCategoryUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourCreateOrConnectWithoutTypeInput = {
    where: TourWhereUniqueInput
    create: XOR<TourCreateWithoutTypeInput, TourUncheckedCreateWithoutTypeInput>
  }

  export type TourCreateManyTypeInputEnvelope = {
    data: TourCreateManyTypeInput | TourCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type TourUpsertWithWhereUniqueWithoutTypeInput = {
    where: TourWhereUniqueInput
    update: XOR<TourUpdateWithoutTypeInput, TourUncheckedUpdateWithoutTypeInput>
    create: XOR<TourCreateWithoutTypeInput, TourUncheckedCreateWithoutTypeInput>
  }

  export type TourUpdateWithWhereUniqueWithoutTypeInput = {
    where: TourWhereUniqueInput
    data: XOR<TourUpdateWithoutTypeInput, TourUncheckedUpdateWithoutTypeInput>
  }

  export type TourUpdateManyWithWhereWithoutTypeInput = {
    where: TourScalarWhereInput
    data: XOR<TourUpdateManyMutationInput, TourUncheckedUpdateManyWithoutTypeInput>
  }

  export type TourScalarWhereInput = {
    AND?: TourScalarWhereInput | TourScalarWhereInput[]
    OR?: TourScalarWhereInput[]
    NOT?: TourScalarWhereInput | TourScalarWhereInput[]
    id?: IntFilter<"Tour"> | number
    title?: StringFilter<"Tour"> | string
    description?: StringFilter<"Tour"> | string
    typeId?: IntFilter<"Tour"> | number
    basePrice?: FloatFilter<"Tour"> | number
    createdAt?: DateTimeFilter<"Tour"> | Date | string
    updatedAt?: DateTimeFilter<"Tour"> | Date | string
  }

  export type TourTypeCreateWithoutToursInput = {
    name: string
  }

  export type TourTypeUncheckedCreateWithoutToursInput = {
    id?: number
    name: string
  }

  export type TourTypeCreateOrConnectWithoutToursInput = {
    where: TourTypeWhereUniqueInput
    create: XOR<TourTypeCreateWithoutToursInput, TourTypeUncheckedCreateWithoutToursInput>
  }

  export type ScheduleCreateWithoutTourInput = {
    startDate: Date | string
    endDate: Date | string
    maxPeople: number
    createdAt?: Date | string
    updatedAt?: Date | string
    slots?: ScheduleSlotCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutTourInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    maxPeople: number
    createdAt?: Date | string
    updatedAt?: Date | string
    slots?: ScheduleSlotUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleCreateOrConnectWithoutTourInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutTourInput, ScheduleUncheckedCreateWithoutTourInput>
  }

  export type ScheduleCreateManyTourInputEnvelope = {
    data: ScheduleCreateManyTourInput | ScheduleCreateManyTourInput[]
    skipDuplicates?: boolean
  }

  export type TicketCategoryCreateWithoutTourInput = {
    name: string
    price: number
    orders?: OrderItemCreateNestedManyWithoutTicketCategoryInput
  }

  export type TicketCategoryUncheckedCreateWithoutTourInput = {
    id?: number
    name: string
    price: number
    orders?: OrderItemUncheckedCreateNestedManyWithoutTicketCategoryInput
  }

  export type TicketCategoryCreateOrConnectWithoutTourInput = {
    where: TicketCategoryWhereUniqueInput
    create: XOR<TicketCategoryCreateWithoutTourInput, TicketCategoryUncheckedCreateWithoutTourInput>
  }

  export type TicketCategoryCreateManyTourInputEnvelope = {
    data: TicketCategoryCreateManyTourInput | TicketCategoryCreateManyTourInput[]
    skipDuplicates?: boolean
  }

  export type TourTypeUpsertWithoutToursInput = {
    update: XOR<TourTypeUpdateWithoutToursInput, TourTypeUncheckedUpdateWithoutToursInput>
    create: XOR<TourTypeCreateWithoutToursInput, TourTypeUncheckedCreateWithoutToursInput>
    where?: TourTypeWhereInput
  }

  export type TourTypeUpdateToOneWithWhereWithoutToursInput = {
    where?: TourTypeWhereInput
    data: XOR<TourTypeUpdateWithoutToursInput, TourTypeUncheckedUpdateWithoutToursInput>
  }

  export type TourTypeUpdateWithoutToursInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TourTypeUncheckedUpdateWithoutToursInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleUpsertWithWhereUniqueWithoutTourInput = {
    where: ScheduleWhereUniqueInput
    update: XOR<ScheduleUpdateWithoutTourInput, ScheduleUncheckedUpdateWithoutTourInput>
    create: XOR<ScheduleCreateWithoutTourInput, ScheduleUncheckedCreateWithoutTourInput>
  }

  export type ScheduleUpdateWithWhereUniqueWithoutTourInput = {
    where: ScheduleWhereUniqueInput
    data: XOR<ScheduleUpdateWithoutTourInput, ScheduleUncheckedUpdateWithoutTourInput>
  }

  export type ScheduleUpdateManyWithWhereWithoutTourInput = {
    where: ScheduleScalarWhereInput
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyWithoutTourInput>
  }

  export type ScheduleScalarWhereInput = {
    AND?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    OR?: ScheduleScalarWhereInput[]
    NOT?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    id?: IntFilter<"Schedule"> | number
    tourId?: IntFilter<"Schedule"> | number
    startDate?: DateTimeFilter<"Schedule"> | Date | string
    endDate?: DateTimeFilter<"Schedule"> | Date | string
    maxPeople?: IntFilter<"Schedule"> | number
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
  }

  export type TicketCategoryUpsertWithWhereUniqueWithoutTourInput = {
    where: TicketCategoryWhereUniqueInput
    update: XOR<TicketCategoryUpdateWithoutTourInput, TicketCategoryUncheckedUpdateWithoutTourInput>
    create: XOR<TicketCategoryCreateWithoutTourInput, TicketCategoryUncheckedCreateWithoutTourInput>
  }

  export type TicketCategoryUpdateWithWhereUniqueWithoutTourInput = {
    where: TicketCategoryWhereUniqueInput
    data: XOR<TicketCategoryUpdateWithoutTourInput, TicketCategoryUncheckedUpdateWithoutTourInput>
  }

  export type TicketCategoryUpdateManyWithWhereWithoutTourInput = {
    where: TicketCategoryScalarWhereInput
    data: XOR<TicketCategoryUpdateManyMutationInput, TicketCategoryUncheckedUpdateManyWithoutTourInput>
  }

  export type TicketCategoryScalarWhereInput = {
    AND?: TicketCategoryScalarWhereInput | TicketCategoryScalarWhereInput[]
    OR?: TicketCategoryScalarWhereInput[]
    NOT?: TicketCategoryScalarWhereInput | TicketCategoryScalarWhereInput[]
    id?: IntFilter<"TicketCategory"> | number
    name?: StringFilter<"TicketCategory"> | string
    price?: FloatFilter<"TicketCategory"> | number
    tourId?: IntFilter<"TicketCategory"> | number
  }

  export type TourCreateWithoutTicketsInput = {
    title: string
    description: string
    basePrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    type: TourTypeCreateNestedOneWithoutToursInput
    schedules?: ScheduleCreateNestedManyWithoutTourInput
  }

  export type TourUncheckedCreateWithoutTicketsInput = {
    id?: number
    title: string
    description: string
    typeId: number
    basePrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: ScheduleUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourCreateOrConnectWithoutTicketsInput = {
    where: TourWhereUniqueInput
    create: XOR<TourCreateWithoutTicketsInput, TourUncheckedCreateWithoutTicketsInput>
  }

  export type OrderItemCreateWithoutTicketCategoryInput = {
    quantity: number
    price: number
    order: OrderCreateNestedOneWithoutItemsInput
  }

  export type OrderItemUncheckedCreateWithoutTicketCategoryInput = {
    id?: number
    orderId: number
    quantity: number
    price: number
  }

  export type OrderItemCreateOrConnectWithoutTicketCategoryInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutTicketCategoryInput, OrderItemUncheckedCreateWithoutTicketCategoryInput>
  }

  export type OrderItemCreateManyTicketCategoryInputEnvelope = {
    data: OrderItemCreateManyTicketCategoryInput | OrderItemCreateManyTicketCategoryInput[]
    skipDuplicates?: boolean
  }

  export type TourUpsertWithoutTicketsInput = {
    update: XOR<TourUpdateWithoutTicketsInput, TourUncheckedUpdateWithoutTicketsInput>
    create: XOR<TourCreateWithoutTicketsInput, TourUncheckedCreateWithoutTicketsInput>
    where?: TourWhereInput
  }

  export type TourUpdateToOneWithWhereWithoutTicketsInput = {
    where?: TourWhereInput
    data: XOR<TourUpdateWithoutTicketsInput, TourUncheckedUpdateWithoutTicketsInput>
  }

  export type TourUpdateWithoutTicketsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: TourTypeUpdateOneRequiredWithoutToursNestedInput
    schedules?: ScheduleUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
    basePrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: ScheduleUncheckedUpdateManyWithoutTourNestedInput
  }

  export type OrderItemUpsertWithWhereUniqueWithoutTicketCategoryInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutTicketCategoryInput, OrderItemUncheckedUpdateWithoutTicketCategoryInput>
    create: XOR<OrderItemCreateWithoutTicketCategoryInput, OrderItemUncheckedCreateWithoutTicketCategoryInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutTicketCategoryInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutTicketCategoryInput, OrderItemUncheckedUpdateWithoutTicketCategoryInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutTicketCategoryInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutTicketCategoryInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: IntFilter<"OrderItem"> | number
    orderId?: IntFilter<"OrderItem"> | number
    ticketCategoryId?: IntFilter<"OrderItem"> | number
    quantity?: IntFilter<"OrderItem"> | number
    price?: FloatFilter<"OrderItem"> | number
  }

  export type TourCreateWithoutSchedulesInput = {
    title: string
    description: string
    basePrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    type: TourTypeCreateNestedOneWithoutToursInput
    tickets?: TicketCategoryCreateNestedManyWithoutTourInput
  }

  export type TourUncheckedCreateWithoutSchedulesInput = {
    id?: number
    title: string
    description: string
    typeId: number
    basePrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketCategoryUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourCreateOrConnectWithoutSchedulesInput = {
    where: TourWhereUniqueInput
    create: XOR<TourCreateWithoutSchedulesInput, TourUncheckedCreateWithoutSchedulesInput>
  }

  export type ScheduleSlotCreateWithoutScheduleInput = {
    weekDay: number
    time: string
  }

  export type ScheduleSlotUncheckedCreateWithoutScheduleInput = {
    id?: number
    weekDay: number
    time: string
  }

  export type ScheduleSlotCreateOrConnectWithoutScheduleInput = {
    where: ScheduleSlotWhereUniqueInput
    create: XOR<ScheduleSlotCreateWithoutScheduleInput, ScheduleSlotUncheckedCreateWithoutScheduleInput>
  }

  export type ScheduleSlotCreateManyScheduleInputEnvelope = {
    data: ScheduleSlotCreateManyScheduleInput | ScheduleSlotCreateManyScheduleInput[]
    skipDuplicates?: boolean
  }

  export type TourUpsertWithoutSchedulesInput = {
    update: XOR<TourUpdateWithoutSchedulesInput, TourUncheckedUpdateWithoutSchedulesInput>
    create: XOR<TourCreateWithoutSchedulesInput, TourUncheckedCreateWithoutSchedulesInput>
    where?: TourWhereInput
  }

  export type TourUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: TourWhereInput
    data: XOR<TourUpdateWithoutSchedulesInput, TourUncheckedUpdateWithoutSchedulesInput>
  }

  export type TourUpdateWithoutSchedulesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: TourTypeUpdateOneRequiredWithoutToursNestedInput
    tickets?: TicketCategoryUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateWithoutSchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
    basePrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketCategoryUncheckedUpdateManyWithoutTourNestedInput
  }

  export type ScheduleSlotUpsertWithWhereUniqueWithoutScheduleInput = {
    where: ScheduleSlotWhereUniqueInput
    update: XOR<ScheduleSlotUpdateWithoutScheduleInput, ScheduleSlotUncheckedUpdateWithoutScheduleInput>
    create: XOR<ScheduleSlotCreateWithoutScheduleInput, ScheduleSlotUncheckedCreateWithoutScheduleInput>
  }

  export type ScheduleSlotUpdateWithWhereUniqueWithoutScheduleInput = {
    where: ScheduleSlotWhereUniqueInput
    data: XOR<ScheduleSlotUpdateWithoutScheduleInput, ScheduleSlotUncheckedUpdateWithoutScheduleInput>
  }

  export type ScheduleSlotUpdateManyWithWhereWithoutScheduleInput = {
    where: ScheduleSlotScalarWhereInput
    data: XOR<ScheduleSlotUpdateManyMutationInput, ScheduleSlotUncheckedUpdateManyWithoutScheduleInput>
  }

  export type ScheduleSlotScalarWhereInput = {
    AND?: ScheduleSlotScalarWhereInput | ScheduleSlotScalarWhereInput[]
    OR?: ScheduleSlotScalarWhereInput[]
    NOT?: ScheduleSlotScalarWhereInput | ScheduleSlotScalarWhereInput[]
    id?: IntFilter<"ScheduleSlot"> | number
    scheduleId?: IntFilter<"ScheduleSlot"> | number
    weekDay?: IntFilter<"ScheduleSlot"> | number
    time?: StringFilter<"ScheduleSlot"> | string
  }

  export type ScheduleCreateWithoutSlotsInput = {
    startDate: Date | string
    endDate: Date | string
    maxPeople: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tour: TourCreateNestedOneWithoutSchedulesInput
  }

  export type ScheduleUncheckedCreateWithoutSlotsInput = {
    id?: number
    tourId: number
    startDate: Date | string
    endDate: Date | string
    maxPeople: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleCreateOrConnectWithoutSlotsInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutSlotsInput, ScheduleUncheckedCreateWithoutSlotsInput>
  }

  export type ScheduleUpsertWithoutSlotsInput = {
    update: XOR<ScheduleUpdateWithoutSlotsInput, ScheduleUncheckedUpdateWithoutSlotsInput>
    create: XOR<ScheduleCreateWithoutSlotsInput, ScheduleUncheckedCreateWithoutSlotsInput>
    where?: ScheduleWhereInput
  }

  export type ScheduleUpdateToOneWithWhereWithoutSlotsInput = {
    where?: ScheduleWhereInput
    data: XOR<ScheduleUpdateWithoutSlotsInput, ScheduleUncheckedUpdateWithoutSlotsInput>
  }

  export type ScheduleUpdateWithoutSlotsInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    maxPeople?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tour?: TourUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutSlotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    maxPeople?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutOrdersInput = {
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type OrderItemCreateWithoutOrderInput = {
    quantity: number
    price: number
    ticketCategory: TicketCategoryCreateNestedOneWithoutOrdersInput
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: number
    ticketCategoryId: number
    quantity: number
    price: number
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderCreateWithoutItemsInput = {
    totalPrice: number
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    emailSent?: boolean
    user: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutItemsInput = {
    id?: number
    userId: number
    totalPrice: number
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    emailSent?: boolean
  }

  export type OrderCreateOrConnectWithoutItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
  }

  export type TicketCategoryCreateWithoutOrdersInput = {
    name: string
    price: number
    tour: TourCreateNestedOneWithoutTicketsInput
  }

  export type TicketCategoryUncheckedCreateWithoutOrdersInput = {
    id?: number
    name: string
    price: number
    tourId: number
  }

  export type TicketCategoryCreateOrConnectWithoutOrdersInput = {
    where: TicketCategoryWhereUniqueInput
    create: XOR<TicketCategoryCreateWithoutOrdersInput, TicketCategoryUncheckedCreateWithoutOrdersInput>
  }

  export type OrderUpsertWithoutItemsInput = {
    update: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type OrderUpdateWithoutItemsInput = {
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailSent?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailSent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TicketCategoryUpsertWithoutOrdersInput = {
    update: XOR<TicketCategoryUpdateWithoutOrdersInput, TicketCategoryUncheckedUpdateWithoutOrdersInput>
    create: XOR<TicketCategoryCreateWithoutOrdersInput, TicketCategoryUncheckedCreateWithoutOrdersInput>
    where?: TicketCategoryWhereInput
  }

  export type TicketCategoryUpdateToOneWithWhereWithoutOrdersInput = {
    where?: TicketCategoryWhereInput
    data: XOR<TicketCategoryUpdateWithoutOrdersInput, TicketCategoryUncheckedUpdateWithoutOrdersInput>
  }

  export type TicketCategoryUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    tour?: TourUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TicketCategoryUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderCreateManyUserInput = {
    id?: number
    totalPrice: number
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    emailSent?: boolean
  }

  export type OrderUpdateWithoutUserInput = {
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailSent?: BoolFieldUpdateOperationsInput | boolean
    items?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailSent?: BoolFieldUpdateOperationsInput | boolean
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailSent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TourCreateManyTypeInput = {
    id?: number
    title: string
    description: string
    basePrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TourUpdateWithoutTypeInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: ScheduleUpdateManyWithoutTourNestedInput
    tickets?: TicketCategoryUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: ScheduleUncheckedUpdateManyWithoutTourNestedInput
    tickets?: TicketCategoryUncheckedUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateManyWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleCreateManyTourInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    maxPeople: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCategoryCreateManyTourInput = {
    id?: number
    name: string
    price: number
  }

  export type ScheduleUpdateWithoutTourInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    maxPeople?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: ScheduleSlotUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutTourInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    maxPeople?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: ScheduleSlotUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateManyWithoutTourInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    maxPeople?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCategoryUpdateWithoutTourInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    orders?: OrderItemUpdateManyWithoutTicketCategoryNestedInput
  }

  export type TicketCategoryUncheckedUpdateWithoutTourInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    orders?: OrderItemUncheckedUpdateManyWithoutTicketCategoryNestedInput
  }

  export type TicketCategoryUncheckedUpdateManyWithoutTourInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderItemCreateManyTicketCategoryInput = {
    id?: number
    orderId: number
    quantity: number
    price: number
  }

  export type OrderItemUpdateWithoutTicketCategoryInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutTicketCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyWithoutTicketCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type ScheduleSlotCreateManyScheduleInput = {
    id?: number
    weekDay: number
    time: string
  }

  export type ScheduleSlotUpdateWithoutScheduleInput = {
    weekDay?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleSlotUncheckedUpdateWithoutScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    weekDay?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleSlotUncheckedUpdateManyWithoutScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    weekDay?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemCreateManyOrderInput = {
    id?: number
    ticketCategoryId: number
    quantity: number
    price: number
  }

  export type OrderItemUpdateWithoutOrderInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    ticketCategory?: TicketCategoryUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketCategoryId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketCategoryId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
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