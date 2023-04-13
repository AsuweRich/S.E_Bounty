/* eslint-disable import/extensions */
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const upload = uploadPhoto();
  const create = createUser();
  return Promise.all([upload, create]).then((result) => {
    console.log(`${result[0].body} ${result[1].firstName} ${result[1].lastName}`);
  }).catch(() => {
    console.log('Signup system offline');
  });
}
