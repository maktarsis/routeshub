# Functions

## forwardParams

This function inserts parameters into the route state and outputs a ready-made dynamic state.

**Args:**

```typescript
/*
* Params interface describes an object which has string key
*/

(
  state: string[],
  params?: Params
)
```

** Return Type:**

```typescript
string[]
```

**Usage example:**

```typescript
const url = forwardParams(userUnit.user.state, { id: 15 };
this.router.navigate(url);

// or

this.router.navigate(forwardParams(userUnit.user.state, { id: 15 })

```

## getRegisteredUnits

A function that returns all declared units in the application \(hub\)

**Generic Type:**

```typescript
<T = any>
```

**Args:**

```typescript
No args
```

 **Return Type:**

```typescript
Units<T>
```

**Usage example:**

```typescript
export interface Hub {
  app: AppNote & AppChildNotes;
  about: AboutNotes;
  bikes: BikeNotes
}

export const hub: Units<Hub> = getRegisteredUnits<Hub>();
```

## getUnit

A function that returns a unit by an identifier \(key or name\)

**Generic Type:**

```typescript
<R = any, C = {}>
```

**Args:**

```typescript
(
    arg: privateNotesKey
)
```

 **Return Type:**

```typescript
Unit<R, C>
```

**Usage example:**

```typescript
const unit = getUnit<AppNotes>(APP_HUB_KEY);
```

## connectFeatures

It connects feature-connector with parent routes.

**Generic Type:**

```typescript
<R = any, C = {}>
```

**Args:**

```typescript
(
   key: privateNotesKey,
   features: partialFeatureRoutes<R, C>
)
```

 **Return Type:**

```typescript
void
```

**Usage example:**

```typescript
createRoot<AppNotes, AppChildNotes>(appRoutes, { key: APP_NOTES_KEY });

/**
* it will connect aboutConnector to 'about' path of appRoutes
*/
connectFeatures<AppNotes, AppChildNotes>(APP_NOTES_KEY, {
  about: aboutConnector
});
```

