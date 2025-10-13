import type { ReactNode } from 'react';

interface ManageProps {
  children?: ReactNode;
}

function Manage({ children }: ManageProps) {
  return <div className="w-52 h-52 bg-red-100">this is a Manage page {children}</div>;
}
export default Manage;
