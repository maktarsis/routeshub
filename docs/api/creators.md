# Creators

| Name | Type | Args | Return Type |
| :--- | :--- | :--- | :--- |
| [createNote](creators.md#createnote) | &lt;R = any, C = any&gt; | routes, nameOptions | Notes&lt;R, C&gt; |
| [createRoot](creators.md#createroot) | &lt;R = any, C = any&gt; | routes, { key, nearby, routeName } | [Unit](interfaces.md#unit)&lt;R & C&gt; |
| [createFeature](creators.md#createfeature) | &lt;R = any, C = any&gt; | routes, { key, nearby, routeName } | [Connector](interfaces.md#connector)&lt;R & C&gt; |



## [createNote](creators.md#createnote)

Creates a route note unit. It uses internally by [createRoot](creators.md#createroot) / [createFeature](creators.md#createfeature)

#### Generic Type:

```typescript
<R = any, C = any>
```

#### Args:

```typescript
(
  routes: Route[],
  nameOptions: DefaultNameOptions = {}
)
```

####  Return Type:

```typescript
Notes<R, C>
```

## [createRoot](creators.md#createroot)

Creates the root unit and invokes only once to initialize a hub. 

#### Generic Type:

```typescript
: <R = any, C = any>
```

#### Args:

```typescript
(
  routes: Route[],
  { key, nearby, routeName }: Partial<CreatorOptionArgs> = {}
)
```

####  Return Type:

```typescript
: Unit<R, C>
```

#### Usage example:

{% code title="" %}
```typescript
export const appUnit: Unit<AppNotes, AppChildNotes> = 
    createRoot<AppNotes, AppChildNotes>(routes, { key: KEY });

```
{% endcode %}

## [createFeature](creators.md#createfeature)

Invokes once for each feature \(eager/lazy\) module. 

####  Generic Type:

```typescript
: <R = any, C = any>
```

#### Args:

```typescript
(
  routes: Route[],
  { key, nearby, routeName }: Partial<CreatorOptionArgs> = {}
)
```

#### Return Type:

```typescript
: Connector<R, C>
```

#### Usage example:

{% code title="" %}
```typescript
export const aboutConnector: Unit<AboutNotes> = 
    createFeature<AboutNotes>(routes, { key: ABOUT_HUB_KEY});
```
{% endcode %}

