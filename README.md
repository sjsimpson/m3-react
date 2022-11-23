## M3 React

This package ws designed to create React components that follow [Google's Material 3](https://m3.material.io/) design pattern.

### Getting Started

Components in this library should be used primarily for stying, so you don't have to create new components each time UI standards are changed. To get started using them, you first need to import the styles and include them in your app:


```SCSS
// styles/base.scss
@import '~m3-react/dist/esm/styles/m3';
```

```Typescript
// App.tsx
import './styles/base.scss'
```

Then, you can simply import any of the components and and use them in your application:

```JSX
// HelloWorld.tsx
import { Button, ButtonVariants } from 'm3-react'


const MyApp = (props) => {

  return (
      <Button
        type={ButtonVariants.ButtonStyles.filled}
        text="Cilck Me!!"
        onClick={() => console.log('Hello World!!')}
      />
  )
}
```

Instructions on how to use each component can be found below.

### Components

I am constantly working to expand our usable components, but thus far the list includes:

- Button
- Icon
- LoadingSpinner
- NavItem
- TextInput

All components have default styling, and uses SCSS for those styles. To use the components in this project, you need to import the styles and include them in your app:


```SCSS
// styles/base.scss
@import '~m3-react/dist/esm/styles/m3';
```

```Typescript
// App.tsx
import './styles/base.scss'
```

