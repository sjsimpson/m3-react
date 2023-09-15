// Doing this for improved intellisense, but wtill allowing users to input any
// material icon string
type OtherIcon = string & { materialIcon?: any }
export type IconStyles =
  | 'account_circle'
  | 'home'
  | 'menu'
  | 'menu_open'
  | 'monitoring'
  | 'palette'
  | 'info'
  | 'search'
  | 'cancel'
  | 'login'
  | 'logout'
  | 'add'
  | 'remove'
  | 'close'
  | 'list'
  | 'construction'
  | 'work'
  | 'arrow_back'
  | 'arrow_forward'
  | OtherIcon

export type IconColors =
  | 'primary'
  | 'on-primary-container'
  | 'on-surface-variant'
