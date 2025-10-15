import type { ReactNode } from 'react';

interface PracticeProps {
  children?: ReactNode;
}

function Practice({ children }: PracticeProps) {
  return <div className="w-52 h-52 bg-red-100">this is a Practice page {children}</div>;
}
export default Practice;
