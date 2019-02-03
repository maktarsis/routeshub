# Creating Notes

We are going to declare our inputs. In general, this is probably the only boring part but carries a lot of useful things and most importantly - is the declared foundation

##

{% code-tabs %}
{% code-tabs-item title="app-children.notes.ts" %}

```typescript
import { RootRoute, RouteNote, RoutesNotes } from 'routeshub';

export interface AppChildrenRoutes extends RootRoute {
  about: RouteNote;
}

const aboutNote: RouteNote = {
  path: 'about',
  lazyPath: 'app/views/about/about.module#AboutModule'
};

export const appChildrenNotes: RoutesNotes<AppChildrenRoutes> = {
  root: { path: '' },
  about: aboutNote
};
```

{% endcode-tabs-item %}
{% endcode-tabs %}

{% code-tabs %}
{% code-tabs-item title="app.notes.ts" %}

```typescript
import { RootRoute, RouteNote, RoutesNotes } from 'routeshub';
import { appChildrenNotes, AppChildrenRoutes } from './app-children.note';

export interface AppRoutes extends RootRoute {
  auth: RouteNote;
  notFound: RouteNote;
}

const rootNote: RouteNote = {
  path: '',
  children: appChildrenNotes
};
const authNote: RouteNote = {
  path: 'auth',
  lazyPath: 'app/views/auth/auth.module#AuthModule'
};
const notFoundNote: RouteNote = {
  path: '**'
};

export const appNotes: RoutesNotes<AppRoutes, AppChildrenRoutes> = {
  root: rootNote,
  auth: authNote,
  notFound: notFoundNote
};
```

{% endcode-tabs-item %}
{% endcode-tabs %}

{% code-tabs %}
{% code-tabs-item title="about.notes.ts" %}

```typescript
import { RootRoute, RouteNote, RoutesNotes } from 'routeshub';

export type AboutRoutes = RootRoute;

export const aboutNotes: RoutesNotes<AboutRoutes> = {
  root: {
    path: ''
  }
};
```

{% endcode-tabs-item %}
{% endcode-tabs %}

{% code-tabs %}
{% code-tabs-item title="auth.note.ts" %}

```typescript
import { RootRoute, RouteNote, RoutesNotes } from 'routeshub';

export interface AuthRoutes extends RootRoute {
  signIn: RouteNote;
  signUp: RouteNote;
}

export const AuthNotes: RoutesNotes<AuthRoutes> = {
  root: {
    path: ''
  },
  signIn: {
    path: 'sign-in'
  },
  signUp: {
    path: 'sign-up'
  }
};
```

{% endcode-tabs-item %}
{% endcode-tabs %}

## First benefits

{% code-tabs %}
{% code-tabs-item title="app.routes.ts" %}

```typescript
export const routes: Routes = [
  {
    path: appNotes.root.path,
    pathMatch: 'full',
    component: AppComponent,
    children: [
      {
        path: appNotes.root.children.root.path,
        pathMatch: 'full',
        redirectTo: appNotes.root.children.about.path
      },
      {
        path: appNotes.root.children.about.path,
        pathMatch: 'full',
        loadChildren: appNotes.root.children.about.lazyPath
      }
    ]
  },
  {
    path: appNotes.auth.path
    pathMatch: 'full',
    loadChildren: appNotes.auth.lazyPath
  }
  {
    path: appNotes.notFound.path,
    redirectTo: appNotes.root.path
  }
];
```

{% endcode-tabs-item %}
{% endcode-tabs %}

{% code-tabs %}
{% code-tabs-item title="about.routes.ts" %}

```typescript
export const aboutRoutes: Routes = [
  {
    path: aboutNotes.root.path
    component: AboutComponent
  }
];
```

{% endcode-tabs-item %}
{% endcode-tabs %}

{% code-tabs %}
{% code-tabs-item title="auth.routes.ts" %}

```typescript
export const authNotes: Routes = [
  {
    path: authNotes.root.path
    redirectTo: authNote.signIn.path
  },
  {
    path: authNotes.signIn.path
    component: SignInComponent
  },
  {
    path: authNotes.signUp.path
    redirectTo: SignUpComponent
  },
];
```

{% endcode-tabs-item %}
{% endcode-tabs %}

Looks a bit safer, isn't it? 🙃
