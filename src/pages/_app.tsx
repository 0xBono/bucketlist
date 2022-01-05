import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';

import Head from 'next/head';

import 'styles/global.scss';

function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <RecoilRoot>
      <Head>
        <title>목표를 위한 작심세개 | Bucketry</title>
        <meta
          property="og:title"
          content="목표를 위해 30초만 투자하기"
          key="bucketry_title"
        />
        <meta
          property="og:description"
          content="누구나 한 번 쯤은 목표를 세워봤지만 잊고 살아가는 반복되는 습관을 30초만 투자해서 바꿔보세요."
          key="bucketry_description"
        />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/59228569/148159657-cee730f5-9430-476b-9fe9-cc71b3df21dc.png"
          key="bucketry_image"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
export default App;
