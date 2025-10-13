import type { ReactNode } from 'react';

interface SettingProps {
  children?: ReactNode;
}

function Setting({ children }: SettingProps) {
  return <div className="w-52 h-52 bg-red-100">this is a Setting page {children}</div>;
}
export default Setting;
