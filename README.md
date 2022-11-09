## M3 React

This package ws designed to create React components that follow Google's Material 3 [design pattern](https://m3.material.io/).

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
