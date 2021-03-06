# Directives

## Setup

Before we start using routeshub directives, we need to import the navigation module to get access.

#### **Import example:**

```typescript
...
import { NavigationModule } from 'routeshub';
...

@NgModule({
  imports: [
    ...
    NavigationModule
  ],
  ...
})
export class AppModule {
}
```

## Navigation

Routeshub provides a directive `navLink` for navigation reasons. It extends by `routerLink` and doing the same as `routerLink` . But if you replace `routerLink` with `navLink`, then and want to pass parameters, don't forget to use `navParams` . `navLink` manages dynamic paths \(parameters\) with the additional attribute `navParams` . 

#### **Usage example:**

```markup
<li [navLink]="locationUnit.map.state">Map</li>

<li [navLink]="locationUnit.search">Search</li>

<li [navLink]="locationUnit.profile.state" 
    [navParams]="{id: USER_ID}">
    Profile
</li>
```

As you could see, we can pass in the `navLink` route's state or it also possible to omit the state, and then `navLink` itself will still handle the link.

Summing `navLink` works in the same way as `routerLink`. It consumes the string or array of strings. But first and foremost, this directive was created for navigation through route states and support dynamic parameters via states.



## Active Link

Because we replaced routerLink with navLink, then we need another directive to manage active links. Routeshub has `navLinkActive` for these reasons

#### **Usage example:**

```markup
<nav class="menu">
  <a [navLink]="aboutUnit.root" navLinkActive="about about-active">About</a>
  <a [navLink]="locationUnit.map" [navLinkActive]="['location', 'map-active']">
    Map
  </a>
</nav>
```

 Works as `routerLinkActive` as well. This directive with square brackets takes an array of CSS classes. Without brackets, it takes a string with spaces.

## Quick Recap

* Import **NavigationModule**
* **navLink** replaces **routerLink**
* **navLink** with ****square ****brackets **\[ \]** supports two types of possible values: _UNIT.SPOT / UNIT.SPOT.STATE._ It was implemented for more human-readable records when you can omit the _state_ property 
* **navLink** with curly **{{ }}** brackets doesn't allow to pass _UNIT.SPOT,_ it supports only string literals or string arrays. The only way to pass the state properly is _UNIT.SPOT.STATE_
* **navParams** takes parameters as an object of param-value.
* **navLinkActive** manages active links. Takes an array of strings in the case when **navLinkActive** in square **\[ \]** brackets. Takes a string with spaces without brackets.



