import { selector } from 'recoil';
import { createBucket } from 'recoil/atom';

export const createBucketSelector = selector({
  key: 'createBucketSelector',
  get: ({ get }) => {
    const bucket = get(createBucket);

    return bucket;
  },
});
