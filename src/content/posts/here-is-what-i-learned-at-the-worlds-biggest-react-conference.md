---
template: post
title: Here’s what I learned at the world’s biggest React conference
slug: here-is-what-i-learned-at-the-worlds-biggest-react-conference
draft: false
date: 2018-04-24T13:10:27.395Z
description: >-
  On Friday, April 13th, I attended the biggest React conference in the world:
  React Amsterdam. Together with 1200 frontend and full-stack developers from
  across the globe, we gathered in the tech heart of Europe for an event with
  over 25 speakers.
category: article
image: img/scott-graham-5fNmWej4tAA-unsplash.jpg
tags:
  - react
  - events
---

On Friday, April 13th, three colleagues and I from [Inspire](https://www.inspire.nl/) attended the biggest React conference in the world:[React Amsterdam](https://react.amsterdam/). Together with 1200 frontend and full stack developers from across the globe, we gathered in the tech heart of Europe for an event with over 25 speakers.

Let me tell you five things I learned on a day filled with great talks, lots of coffee, and of course some beers.

## 1. Reactive programming

There will always be a new JavaScript framework to learn. Technology will continue to evolve and change, and developers will continue to rewrite applications. _[Tracy Lee](https://twitter.com/ladyleet) talked about reactive programming, which can enable you to just copy-paste most of your code from framework to framework._

In her talk, Tracy showed why reactive programming can be a more efficient way to code. She also discussed how it has been adopted by industry leaders such as Netflix, Slack, Microsoft, and Facebook as the new standard for developing applications. It seems very promising, especially libraries like RxJS, that help developers deliver complex features quicker with less, more maintainable code.

The more developers adopt this concept, the better.

As Tracy mentioned in her blog post:

> _“The more people understand reactive programming, the more productive we as one modern web will all be. The only barrier to adoption is not understanding the paradigm and the language around it.”_

I think it’s not such a bad idea to invest some time in learning reactive programming, and RxJS could be a great library to get you started.

Watch the full talk[here](https://www.youtube.com/watch?v=smBND2pwdUE&feature=youtu.be&t=23m9s).

## 2. React Navigation

When implementing navigation inside your React Native app, you have two options: you can use a library that wraps the native navigation APIs for the platform, or you can use a re-implementation of those APIs using the same React Native primitives that you use throughout your app. [Brent Vatne](https://twitter.com/notbrent), who works at Expo, gave a nice talk about an open source project he works on: [React Navigation](https://reactnavigation.org/).

Providing us with a clear overview of how you can use different types like switch or stack navigators throughout your app, Brent gave us a better understanding of how navigation works. He also showed how to do great looking transitions with the React Navigation library.

Besides that, Brent mentioned some great reasons to choose a “JavaScript-based navigation” over a “native-based” one. To learn how to take full advantage of it, I recommend reading the docs of the React Navigation library or check out[this post](https://medium.com/@christian.falch/fluid-transitions-with-react-navigation-a049d2f71494)of Christian Falch about Fluid transitions with React Navigation.

Watch the full talk [here](https://www.youtube.com/watch?v=N-X3Z5A-pW4&feature=youtu.be&t=40m5s).

![](https://miro.medium.com/freeze/max/38/1*JPhQb0r50aAyc-G35cd8mw.gif?q=20)

![](https://miro.medium.com/max/1200/1*JPhQb0r50aAyc-G35cd8mw.gif)

<https://github.com/fram-x/fluidtransitions>

## 3. D3 and React, Together

One of the most impressive talks of the day was about D3 and React, by[Shirley Wu](https://twitter.com/sxywu). D3 is a library for building data visualisations, and it can work together with React. The challenge of integrating D3 with React is that React and D3 both want to control the DOM. Mainly by letting D3 do all the calculations, and React do all the rendering, Shirley showed us how to deal with this challenge and why D3 and React can work together.

She also demoed [this project](https://pudding.cool/2017/03/hamilton/) that is worth checking out. Ending the talk with some live coding in front of a huge crowd showed why Shirley Wu is the real deal, and it made this one of the more interesting talks of the day.

Read more about this subject on [her blog post](https://medium.com/@sxywu/on-d3-react-and-a-little-bit-of-flux-88a226f328f3)or watch the full talk[here](https://www.youtube.com/watch?v=smBND2pwdUE&feature=youtu.be&t=2h36m).

## 4. React Native VR + AR Made Simple

The React ecosystem has given developers the opportunity to target platforms that were once thought to be out of reach for JavaScript developers. [Nader Dabit](https://twitter.com/dabit3) gave a nice talk about the [Viro](https://viromedia.com/) platform that opens the door to developing both Augmented Reality and Virtual Reality.

Creating your own AR app with React Native is actually pretty simple and straightforward if you’re using [Viro React](https://github.com/viromedia/viro). It allows you to create fun apps like Nader’s demo app, which allowed users to upload pictures taken at the conference into a virtual room, as well as walk around and interact with them in AR.

Although this technology can be fun to experiment with, I can’t imagine myself using this technology for any useful implementations. I also think that most professional AR and VR developers are probably not building their stuff with React Native. But if you have the time and a good amount of creativity, you might want to checkout Viro.

Watch the full talk [here](https://www.youtube.com/watch?v=N-X3Z5A-pW4&feature=youtu.be&t=2h08m30s).

![](https://miro.medium.com/freeze/max/60/1*4rpcfMytFkK4M4kwy0eN-A.gif?q=20)

![]()

<https://github.com/viromedia/viro>

## 5. React State Management in a GraphQL Era

Last but not the least, I want to mention the great presentation of[Kristijan Ristovski](https://twitter.com/thekitze)also known as Kitze. He talked about the (un)necessity of state management libraries when GraphQL takes care of managing data in our apps.

GraphQL is a well-documented data query language that provides an alternative to REST and ad-hoc web service architectures. It allows you to return complex data results through a single API call.

Or as Kitze said it:

> “GraphQL is the thing that’s eventually gonna replicate REST, but you keep telling yourself that you don’t need to learn it.”

Kitze opened his enjoyable talk with a fun explanation of why the terms “Rockstar-”, “Senior-” or “Ninja-” developer are so stupid, which showed that he had more to talk about then just how great GraphQL is.

He explored all the possibilities and compared the combinations of React, Apollo, Redux, MobX, and Next.js. But instead of just praising all these genius projects, he kept it real and talked about the practical use cases.

For instance, Redux, a brilliant concept that is (over)used by many react developers. Even the creator of Redux said:

> “It’s definitely overhyped, low level and often used unnecessarily”.

You can read more about that from the creator of Redux in his own blog post,[You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367).

Kitze continued and showed a simple question someone asked on Reddit:*“Hello Reddit, I just started my first React app. What should I use to do network requests?”*The most upvoted answer?*“Just use redux-saga.”*Who says JUST use redux-saga? As Kitz said, that is like having a friend tell you there is a bug in his house and you tell him to use a bazooka.

_The front-end world is changing very rapidly, and the battles of different technologies will keep on forever. But the problem is that we are asking “What’s better?” instead of:_

- What’s suitable for my app?
- What’s suitable for my team?
- What’s suitable for our use-case?

Kitze ended his talk with the question “Do we even need a state management library when using GraphQL?” The answer: maybe.

It all depends on your project. If you want a bit more specific advice, I recommend watching the full talk for some examples.

![](https://miro.medium.com/max/60/1*5xM37Bwus9boD9QvLtp7nw.png?q=20)

![](https://miro.medium.com/max/4000/1*5xM37Bwus9boD9QvLtp7nw.png)

Moving from Redux to React Apollo (<https://dev-blog.apollodata.com/reducing-our-redux-code-with-react-apollo-5091b9de9c2a>)

The only things left to mention about Kitze’s talk are these simple pieces of advice:

- Stop seeking external approval.
- Stop seeking answers to other people’s projects.
- _Stop feeling insecure about your code, because today no one actually knows what they’re doing_.
- For God’s sake: delete your Twitter account.

Watch the full talk [here](https://www.youtube.com/watch?v=smBND2pwdUE&feature=youtu.be&t=5h2m44s).

## Final thoughts

Although there were a lot more interesting presentations besides the five talks I mentioned, not all of them were as engaging and interesting. Not every talk was as in depth as we’d hoped, and showing a lot of documentation that can easily be found online will not do it for everyone.

Besides that, most speakers demonstrated how passionate they are and the overall experience was great!

React Amsterdam is a well-organized conference that provided much to learn. Hopefully this post gave you a glimpse of a couple of interesting topics that you may want to dive into deeper.
