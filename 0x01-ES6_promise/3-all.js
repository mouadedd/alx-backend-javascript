import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const userPhoto = uploadPhoto();
  const userName = createUser();

  return Promise.all([userPhoto, userName]).then((value) => {
    console.log(`${value[0].body} ${value[1].firstName} ${value[1].lastName}`);
  })
    .catch(() => { console.log('Signup system offline'); });
}
