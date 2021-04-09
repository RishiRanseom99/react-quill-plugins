import React from 'react'
import { css } from 'styled-components'
import { up as from, down as below, between, only } from 'styled-breakpoints'
import ReactMedia from 'react-media'

export const breakpoints = {
  // tl;dr Avoid using `from('mobile')` and only use `only('mobile')` as an escape hatch to avoid
  // unnecessary unsetting of styles in a bigger viewport.
  // All CSS here are usually implemented in a mobile-first fashion. Which means that there is
  // really no point in using `from('mobile')` because everything is assumed to for mobile
  // viewport unless scoped with media queries.
  mobile: '1px',
  mobileM: '400px',
  mobileL: '600px',
  tablet: '768px',
  desktop: '1024px',
  desktopL: '1280px',
  hd: '1366px',
  uhd: '1440px',
  UhdL: '1600px',
}
const SCREEN_SIZE_NAMES = {
  Mobile: 'mobile',
  MobileM: 'mobileM',
  MobileL: 'mobileL',
  Tablet: 'tablet',
  Desktop: 'desktop',
  DesktopL: 'desktopL',
  Hd: 'hd',
  Uhd: 'uhd',
  UhdL: 'UhdL',
}
// should NOT make it dynamic and should keep it stable for reference as well as autocompletion
// UHD is possible to apply for "from" merely
export const SCREEN_SIZE = {
  From: {
    Mobile: from(SCREEN_SIZE_NAMES.Mobile),
    MobileM: from(SCREEN_SIZE_NAMES.MobileM),
    MobileL: from(SCREEN_SIZE_NAMES.MobileL),
    Tablet: from(SCREEN_SIZE_NAMES.Tablet),
    Desktop: from(SCREEN_SIZE_NAMES.Desktop),
    DesktopL: from(SCREEN_SIZE_NAMES.DesktopL),
    Hd: from(SCREEN_SIZE_NAMES.Hd),
    Uhd: from(SCREEN_SIZE_NAMES.Uhd),
    UhdL: from(SCREEN_SIZE_NAMES.UhdL),
  },
  Only: {
    Mobile: only(SCREEN_SIZE_NAMES.Mobile),
    MobileL: only(SCREEN_SIZE_NAMES.MobileL),
    Tablet: only(SCREEN_SIZE_NAMES.Tablet),
    Desktop: only(SCREEN_SIZE_NAMES.Desktop),
    Hd: only(SCREEN_SIZE_NAMES.Hd),
  },
  Below: {
    Mobile: below(SCREEN_SIZE_NAMES.Mobile),
    MobileL: below(SCREEN_SIZE_NAMES.MobileL),
    MobileM: below(SCREEN_SIZE_NAMES.MobileM),
    Tablet: below(SCREEN_SIZE_NAMES.Tablet),
    Desktop: below(SCREEN_SIZE_NAMES.Desktop),
    Hd: below(SCREEN_SIZE_NAMES.Hd),
  },
  Between: {
    Mobile: {
      MobileL: between(SCREEN_SIZE_NAMES.Mobile, SCREEN_SIZE_NAMES.MobileL),
      Tablet: between(SCREEN_SIZE_NAMES.Mobile, SCREEN_SIZE_NAMES.Tablet),
      Desktop: between(SCREEN_SIZE_NAMES.Mobile, SCREEN_SIZE_NAMES.Desktop),
      Hd: between(SCREEN_SIZE_NAMES.Mobile, SCREEN_SIZE_NAMES.Hd),
    },
    MobileM: {
      MobileL: between(SCREEN_SIZE_NAMES.MobileM, SCREEN_SIZE_NAMES.MobileL),
      Tablet: between(SCREEN_SIZE_NAMES.MobileM, SCREEN_SIZE_NAMES.Tablet),
      Desktop: between(SCREEN_SIZE_NAMES.MobileM, SCREEN_SIZE_NAMES.Desktop),
      Hd: between(SCREEN_SIZE_NAMES.MobileM, SCREEN_SIZE_NAMES.Hd),
    },
    MobileL: {
      Tablet: between(SCREEN_SIZE_NAMES.MobileL, SCREEN_SIZE_NAMES.Tablet),
      Desktop: between(SCREEN_SIZE_NAMES.MobileL, SCREEN_SIZE_NAMES.Desktop),
      Hd: between(SCREEN_SIZE_NAMES.MobileL, SCREEN_SIZE_NAMES.Hd),
    },
    Tablet: {
      Desktop: between(SCREEN_SIZE_NAMES.Tablet, SCREEN_SIZE_NAMES.Desktop),
      Hd: between(SCREEN_SIZE_NAMES.Tablet, SCREEN_SIZE_NAMES.Hd),
    },
    Desktop: {
      Hd: between(SCREEN_SIZE_NAMES.Desktop, SCREEN_SIZE_NAMES.Hd),
    },
  },
}
export const Media = ({ query = '', ...props }) => (
  <ReactMedia {...props} query={query.replace('@media', '').trim()} />
)
export const visible = query =>
  query === SCREEN_SIZE.Only.Mobile
    ? css`
        display: block;
        ${SCREEN_SIZE.From.Tablet} {
          display: none;
        }
      `
    : css`
        display: none;
        ${query} {
          display: block;
        }
      `
export const withMedia = WrappedComponent => {
  return function Component(props) {
    return (
      <div css={visible(props.query)}>
        <WrappedComponent {...props} />
      </div>
    )
  }
}
export default visible
