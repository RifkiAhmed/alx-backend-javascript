import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const res1 = uploadPhoto();
  const res2 = createUser();
  Promise.all([res1, res2]).then((values) => {
    const [photo, user] = values;
    console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
  });
}
