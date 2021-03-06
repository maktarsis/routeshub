# Interfaces

| Title | Description |
| :--- | :--- |
| [Root](interfaces.md#root) | Inserts 'root' route into the note |
| [Spot](interfaces.md#spot) | Describes an enhanced route |
| [Note](interfaces.md#note) | Describes a route note |
| [Unit](interfaces.md#unit) | Describes a processed routes |
| [Units](interfaces.md#units) | Describes a bunch of units |
| [Connector](interfaces.md#connector) | Describes not connected \(unprocessed\) unit |
| [Connectors](interfaces.md#connectors) | Describes a bunch of connectors |
| [privateNotesKey](interfaces.md#privatenoteskey) | Describes a possible key value |
| [PrivateNotesKey](interfaces.md#privatenoteskey) | Describes additional \(optional\) key prop |
| [DefaultNameOptions](interfaces.md#defaultnameoptions) | Describes route name options \(root and wildcard\) |
| [CreatorOptionArgs](interfaces.md#creatoroptionargs) | Describes possible option args in creator functions |



## [Root](interfaces.md#root)

**Generic Type:**

```typescript
<C = {}>
```

| Keys | Type | Optional |
| :--- | :--- | :--- |
| root | RootNote \(internal interface\) | + |

Declares a type which describes default`root` route

**Usage example:**

```typescript
export interface AboutNotes extends Root {
    person: Note;
}

// or if there is only one 'root' path

export type AboutNotes = Root;
```

##  [Spot](interfaces.md#spot)

| **K**eys | Type | Optional |
| :--- | :--- | :--- |
| id | number |  |
| parentId | number |  |
| state | string\[\] |  |
| name | string |  |
| path | string |  |



## [Note](interfaces.md#note)

**Generic Type:**

```typescript
<C = {}>
```

| Keys | Type | Optional |
| :--- | :--- | :--- |
| path | string |  |
| name | string | + |
| children | [Notes](interfaces.md#notes)&lt;C&gt; | + |

**Usage example:**

```typescript
export interface AppNotes {
    root: Note<ChildNotes>
    location: Note;
};
```

## [Unit](interfaces.md#unit)

**Generic Type:**

```typescript
<R = any, C = {}>
```

| Keys | Type | Optional |
| :--- | :--- | :--- |
| key in keyof \(R & C\) | [Spot](interfaces.md#spot) & [PrivateNotesKey](interfaces.md#privatenoteskey-1) |  |

**Usage example:**

```typescript
export const appUnit: Unit<AppNotes, AppChildNotes> = 
    createRoot<AppNotes, AppChildNotes>(routes);
```

##  [Units](interfaces.md#units)

**Generic Type:**

```typescript
<R = any>
```

| Keys | Type | Optional |
| :--- | :--- | :--- |
| key in keyof R | [Unit](interfaces.md#unit)&lt;R\[key\]&gt; |  |

**Usage example:**

```typescript
export interface Hub {
  app: AppNotes & AppChildNotes;
  about: AboutNotes;
}

export const hub: Units<Hub> = getRegisteredUnits<Hub>();
```

## [Connector](interfaces.md#connector)

**Generic Type:**

```typescript
<R = any, C = any>
```

**Type:**

```typescript
(
  parentStructure: Structure,
  alternativeName?: string
) => Unit<R, C>;
```

**Usage example:**

```typescript
export const aboutConnector: Connector<AboutNotes, AboutChildNotes> = 
    createFeature<AboutNotes, AboutChildNotes>(aboutRoutes);
```

## [Connectors](interfaces.md#connectors)

**Generic Type:**

```typescript
<R = any>
```

| Keys | Type | Optional |
| :--- | :--- | :--- |
| key in keyof R | [Connector](interfaces.md#connector)&lt;R\[key\]&gt; |  |

**Usage example:**

```typescript
createRoot(appRoutes, { 
  /**
  * nearby prop accepts connectors
  */
  nearby: {
    location: locationConnector
  }
});
```

## [privateNotesKey](interfaces.md#privatenoteskey)

describes the private key value

**Type:**

```typescript
string | symbol;
```

## [PrivateNotesKey](interfaces.md#privatenoteskey)

extends interfaces by private key property

| Keys | Type | Optional |
| :--- | :--- | :--- |
| \_key | privateNotesKey |  |

## [DefaultNameOptions](interfaces.md#defaultrouteoptions)

provides an opportunity to change the default route names for some paths

| Keys | Type | Optional |
| :--- | :--- | :--- |
| root | string | + |
| wildcard | string | + |

**Usage example:**

```typescript
createRoot(routes, {
    routeName: { 
        root: 'home',
        wildcard: 'notFound'
    } 
  }
);
```

## [CreatorOptionArgs](interfaces.md#creatoroptionargs)

describes possible options of root/feature creators

| Keys | Type | Optional |
| :--- | :--- | :--- |
| key | [privateNotesKey](interfaces.md#privatenoteskey) |  |
| routeName | [DefaultNameOptions](interfaces.md#defaultnameoptions) |  |
| nearby | [Connectors](interfaces.md#connectors) |  |

