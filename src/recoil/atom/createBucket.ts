import { atom } from 'recoil';

export const createBucket = atom({
  key: 'createBucket',
  default: [
    {
      id: 1,
      placeholder: 'e.g. 12월 전까지 지구 정복하기',
      emoticon: '1️⃣',
      goal: '',
    },
    {
      id: 2,
      placeholder: 'e.g. 은행 적금 50만원 씩 저축하기',
      emoticon: '2️⃣',
      goal: '',
    },
    {
      id: 3,
      placeholder: 'e.g. 연구 논문 작성하기',
      emoticon: '3️⃣',
      goal: '',
    },
  ],
});
