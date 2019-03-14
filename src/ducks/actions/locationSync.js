import {
  PUSH,
  REPLACE,
  GO,
  GO_BACK,
  GO_FORWARD,
  LOCATION_CHANGE
} from "../constants";

export const push = href => ({
  type: PUSH,
  payload: href
});

export const replace = index => ({
  type: REPLACE,
  payload: index
});

export const go = index => ({
  type: GO,
  payload: index
});

export const goBack = () => ({
  type: GO_BACK
});

export const goForward = () => ({
  type: GO_FORWARD
});

export const locationChange = ({ pathname, search, hash }) => ({
  type: LOCATION_CHANGE,
  payload: {
    pathname,
    search,
    hash
  }
});
