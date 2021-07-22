import { REQUEST_GIT_INFO } from './constants';

export function requestGitInfo(userName) {
  return { type: REQUEST_GIT_INFO, userName };
}