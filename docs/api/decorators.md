# Decorators

## Secluded

A decorator that applies unit to the component's property by unit identifier or unit name. 

**Generic Type:**

```typescript
T = any
```

**Args:**

```typescript
(
  arg: privateNotesKey
)
```

 **Return Type:**

```typescript
(target: any, propertyKey: PropertyKey) => void
```

**Usage example:**

```typescript
....

@Component({
...
})
export class HeaderComponent {

  // getting unit by key
  @Secluded(APP_HUB_KEY)
  private app: Unit<AppNotes, AppChildNotes>;

  // getting unit by unit name
  @Secluded('about')
  private about: Unit<AboutNotes>;
}

```

