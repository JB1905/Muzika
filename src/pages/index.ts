import { useRouter } from 'next/router';
import { useEffect } from 'react';

function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/login');
  }, [router]);

  return null;
}

export default HomePage;

// TODO
export const getServerSideProps = ({ req, res }: any) => {
  console.log(req.headers.cookie);

  if (req.headers.cookie) {
    res.writeHead(302, { Location: '/browse' });
  } else {
    res.writeHead(302, { Location: '/login' });
  }

  // res.writeHead(302, { Location: '/login' });

  res.end();

  return {};
};
