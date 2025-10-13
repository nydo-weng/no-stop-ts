import type { ReactNode } from 'react';

interface HomeProps {
  children?: ReactNode;
}

function Home({ children }: HomeProps) {
  return <div className="w-52 h-52 bg-red-100">this is a home page {children}</div>;
}
export default Home;
