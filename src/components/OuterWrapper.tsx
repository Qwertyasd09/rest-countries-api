import { WrapperProps } from '../types/types';

export const OuterWrapper = ({ children }: WrapperProps) => {
  return (
    <div className="min-h-screen bg-background pb-20 font-FontProject">
      {children}
    </div>
  );
};
