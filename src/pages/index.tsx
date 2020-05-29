const Home = () => null;

Home.getInitialProps = ({ res }: any) => {
  if (res) {
    res.writeHead(301, {
      Location: 'login',
    });

    res.end();
  }

  return {};
};

export default Home;
