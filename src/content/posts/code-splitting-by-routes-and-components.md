---
template: post
title: Code Splitting by Routes and Components
slug: code-splitting-by-routes-and-components
draft: false
date: 2020-01-22T15:50:13.245Z
description: >-
  When your app's bundle starts to grow it will slow things down. That's why we
  see a lot more use of code-splitting in modern web development. This is a
  simple tutorial on how to implement code-splitting by routes and by components
  in React using React Loadable.
category: tutorials
image: img/headway-jfR5wu2hMI0-unsplash.jpg
tags:
  - react
  - code-splitting
  - tutorials
---

When your app's bundle starts to grow it will slow things down. That's why we see a lot more use of code-splitting in modern web development. Code-splitting is the process of taking one large bundle containing your entire app, and splitting them up into multiple smaller bundles which contain separate parts of your app. This technique allows you to load chunks of code only when needed.

For example, when a visitor enters your application on the homepage, there is no need to load in all the code related to a completely separate page. That user might not even go to that route at all, so we only want to load it when the user navigates to that page. If we can load only the code necessary for the home page this means our initial loading time will be al lot faster, especially on slow networks.

In this post we will take a look at how we can boost the performance of our React applications by implementing code-splitting using [React Loadable](https://github.com/jamiebuilds/react-loadable). If you rather save time and start with a boilerplate that includes code-splitting, try out [React Milkshake](https://www.reactmilkshake.com/).

### Route-based splitting

A great way to get started is to implement route-based code splitting, which means we load code chucks according to the current route.

Normally, our routes could something look like this:

    import React from 'react';
    import { Route, Switch } from 'react-router-dom';

    import Home from 'pages/Home';
    import Example from 'pages/Example';

    const Routes = () => {
      return (
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/example' component={Example} />
        </Switch>
      );
    };

    export default Routes;

Now, let's refactor these route to implement code splitting using React Loadable. The `Loadable` higher-order component takes an object with two keys: `loader` and `loading`.

    import React from 'react';
    import { Route, Switch } from 'react-router-dom';
    import Loadable from 'react-loadable';

    const AsyncHome = Loadable({
      loader: () => import('./pages/Home'),
      loading: <div>Loading...</div>
    });

    const AsyncExample = Loadable({
      loader: () =>
        import('./pages/Example'),
      loading: <div>Loading...</div>
    });

    const Routes = () => {
      return (
        <Switch>
          <Route path='/' exact component={AsyncHome} />
          <Route path='/example' component={AsyncExample} />
        </Switch>
      );
    };

    export default Routes;

With this simple setup, the code related to the `Example` component will only load when that route is active. If you open your inspector in your browser and go to your network tab (js), you can see that if you change your routes a new code chunk will be loaded.

Pro tip. If you want to give your chunk a name instead of a generated hash, so you can clearly see which chunk just loaded, you can set the `webpackChunkName` like this:

    const AsyncExample = Loadable({
      loader: () =>
        import(/* webpackChunkName: "Example" */ './pages/Example'),
      loading: <div>Loading...</div>
    });

Sometimes components load really quickly (<200ms) and the loading screen only quickly flashes on the screen. A number of user studies have proven that this causes users to perceive things taking longer than they really have. If you don't show anything, users perceive it as being faster. Thankfully, your loading component will also get a pastDelay prop which will only be true once the component has taken longer to load than a set delay. Be default, delay is set to 200ms.

To do that, let's create a `Loader` component that we can use in our sample component that will now look like this:

    const AsyncExample = Loadable({
      loader: () =>
        import(/* webpackChunkName: "Example" */ './pages/Example'),
      loading: Loader
    });

And our `Loader` component:

    import React from 'react';

    const Loader = (props) => {
    	if (props.pastDelay) {
    		return <h2>Loading...</h2>
    	} else {
    		return null
    	}
    }

    export default Loader;

But what if something goes wrong while loading the code? Well, luckily React Loadable also provides use with an `error` prop. This means our final `Loader` component will look like this:

    import React from 'react';

    const Loader = ({ pastDelay, error }) => {
    	if (error) {
        return (
          <h2>Sorry, there was a problem loading the page.</h2>
        );
      } else if (pastDelay) {
        return (
           <h2>Loading...</h2>
        );
      } else {
        return null;
      }
    };

    export default Loader;

And that's it!

### Load on hover

Now we can even go a little further. We can also start loading the next chunk as soon as the user starts to hover over the link. To achieve this, all we have to do is call `preload()` on our Loadable component. It will look something like this:

    import React, { useState } from 'react';
    import { Link } from 'react-router-dom';

    import { AsyncExample } from 'routes';

    const SideBar = () => {
      return (
        <div className='sidebar'>
          <Link to='/' exact={true}>Home</Link>
          <Link
    	    to='/example'
    	    onMouseOver={() => AsyncExample.preload()}>
    	    Example
    	  </Link>
        </div>
      );
    };

    export default SideBar;

And that's it, awesome!

### Component-based splitting

Now that we now how to code split based on the current route, let's take it even a little further and look at how we can code split on component level. Inside your container component you might render different components based on a certain state, like if an user is logged in or not. We can achieve this with the same Loadable component. Take a look at this example, in which a component is only rendered into the view once the user clicks on the button.

    import React, { useState } from 'react';
    import Loadable from 'react-loadable';
    import Loader from 'components/Loader';

    const SomeComponent = Loadable({
      loader: () => import('components/SomeComponent'),
      loading: Loading
    });

    const App = () => {
    	const [showComponent, setShowComponent] = useState(false);

      return (
        if (showComponent) {
          return <SomeComponent />;
        } else {
          return (
            <>
              <h1>Hello! 👋</h1>
              <button onClick={() => setShowComponent(true)}>Click me!</button>
            </>
          );
        }
      );
    };

    export default App;

Obviously with such a simple component it doesn’t make a difference, but with larger components in an app it can be a good idea to implement code-splitting on component-level like this.

And with this, you should be ready to implement code splitting in your React apps! Checkout the repo of [React Loadable](https://github.com/jamiebuilds/react-loadable) for more options. If you are looking for a nice boilerplate that comes with code-splitting out of the box, try out [React Milkshake](https://www.reactmilkshake.com/).

Thanks for reading! If you want to ben notified when I release new projects or articles then follow me on twitter: [@jakeprins_nl](https://twitter.com/jakeprins_nl).When your app's bundle starts to grow it will slow things down. That's why we see a lot more use of code-splitting in modern web development. Code-splitting is the process of taking one large bundle containing your entire app, and splitting them up into multiple smaller bundles which contain separate parts of your app. This technique allows you to load chunks of code only when needed.

For example, when a visitor enters your application on the homepage, there is no need to load in all the code related to a completely separate page. That user might not even go to that route at all, so we only want to load it when the user navigates to that page. If we can load only the code necessary for the home page this means our initial loading time will be al lot faster, especially on slow networks.

In this post we will take a look at how we can boost the performance of our React applications by implementing code-splitting using [React Loadable](https://github.com/jamiebuilds/react-loadable). If you rather save time and start with a boilerplate that includes code-splitting, try out [React Milkshake](https://www.reactmilkshake.com/).

### Route-based splitting

A great way to get started is to implement route-based code splitting, which means we load code chucks according to the current route.

Normally, our routes could something look like this:

    import React from 'react';
    import { Route, Switch } from 'react-router-dom';

    import Home from 'pages/Home';
    import Example from 'pages/Example';

    const Routes = () => {
      return (
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/example' component={Example} />
        </Switch>
      );
    };

    export default Routes;

Now lets refactor these route to implement code splitting using React Loadable. The `Loadable` higher-order component takes an object with two keys: `loader` and `loading`.

    import React from 'react';
    import { Route, Switch } from 'react-router-dom';
    import Loadable from 'react-loadable';

    const AsyncHome = Loadable({
      loader: () => import('./pages/Home'),
      loading: <div>Loading...</div>
    });

    const AsyncExample = Loadable({
      loader: () =>
        import('./pages/Example'),
      loading: <div>Loading...</div>
    });

    const Routes = () => {
      return (
        <Switch>
          <Route path='/' exact component={AsyncHome} />
          <Route path='/example' component={AsyncExample} />
        </Switch>
      );
    };

    export default Routes;

With this simple setup, the code related to the `Example` component will only load when that route is active. If you open your inspector in your browser and go to your network tab (js), you can see that if you change your routes a new code chunk will be loaded.

Pro tip. If you want to give your chunk a name instead of a generated hash, so you can clearly see which chunk just loaded, you can set the `webpackChunkName` like this:

    const AsyncExample = Loadable({
      loader: () =>
        import(/* webpackChunkName: "Example" */ './pages/Example'),
      loading: <div>Loading...</div>
    });

Sometimes components load really quickly (<200ms) and the loading screen only quickly flashes on the screen. A number of user studies have proven that this causes users to perceive things taking longer than they really have. If you don't show anything, users perceive it as being faster. Thankfully, your loading component will also get a pastDelay prop which will only be true once the component has taken longer to load than a set delay. Be default, delay is set to 200ms.

To do that, let's create a `Loader` component that we can use in our sample component that will now look like this:

    const AsyncExample = Loadable({
      loader: () =>
        import(/* webpackChunkName: "Example" */ './pages/Example'),
      loading: Loader
    });

And our `Loader` component:

    import React from 'react';

    const Loader = (props) => {
    	if (props.pastDelay) {
    		return <h2>Loading...</h2>
    	} else {
    		return null
    	}
    }

    export default Loader;

But what if something goes wrong while loading the code? Well, luckily React Loadable also provides use with an `error` prop. This means our final `Loader` component will look like this:

    import React from 'react';

    const Loader = ({ pastDelay, error }) => {
    	if (error) {
        return (
          <h2>Sorry, there was a problem loading the page.</h2>
        );
      } else if (pastDelay) {
        return (
           <h2>Loading...</h2>
        );
      } else {
        return null;
      }
    };

    export default Loader;

And that's it!

### Load on hover

Now we can even go a little further. We can also start loading the next chunk as soon as the user starts to hover over the link. To achieve this, all we have to do is call `preload()` on our Loadable component. It will look something like this:

    import React, { useState } from 'react';
    import { Link } from 'react-router-dom';

    import { AsyncExample } from 'routes';

    const SideBar = () => {
      return (
        <div className='sidebar'>
          <Link to='/' exact={true}>Home</Link>
          <Link
    	    to='/example'
    	    onMouseOver={() => AsyncExample.preload()}>
    	    Example
    	  </Link>
        </div>
      );
    };

    export default SideBar;

And that's it, awesome!

### Component-based splitting

Now that we now how to code split based on the current route, let's take it even a little further and look at how we can code split on component level. Inside your container component you might render different components based on a certain state, like if an user is logged in or not. We can achieve this with the same Loadable component. Take a look at this example, in which a component is only rendered into the view once the user clicks on the button.

    import React, { useState } from 'react';
    import Loadable from 'react-loadable';
    import Loader from 'components/Loader';

    const SomeComponent = Loadable({
      loader: () => import('components/SomeComponent'),
      loading: Loading
    });

    const App = () => {
    	const [showComponent, setShowComponent] = useState(false);

      return (
        if (showComponent) {
          return <SomeComponent />;
        } else {
          return (
            <>
              <h1>Hello! 👋</h1>
              <button onClick={() => setShowComponent(true)}>Click me!</button>
            </>
          );
        }
      );
    };

    export default App;

Obviously with such a simple component it doesn’t make a difference, but with larger components in an app it can be a good idea to implement code-splitting on component-level like this.

And with this, you should be ready to implement code splitting in your React apps! Checkout the repo of [React Loadable](https://github.com/jamiebuilds/react-loadable) for more options. If you are looking for a nice boilerplate that comes with code-splitting out of the box, try out [React Milkshake](https://www.reactmilkshake.com/).

Thanks for reading! If you want to ben notified when I release new projects or articles then follow me on twitter: [@jakeprins_nl](https://twitter.com/jakeprins_nl).
