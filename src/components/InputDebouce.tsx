import { useDebouncedValue } from '@/lib/debounce';
import { Input, InputProps } from '@nextui-org/react';
import { useEffect, useState } from 'react';

export interface InputDebouceProps extends InputProps {
  value?: string;
  delay: number;
}

export const InputDebouce = ({ value, delay, children, onValueChange, ...props }: InputDebouceProps) => {
  const [_val, _setVal] = useState(value ?? '');
  const debouceTerm = useDebouncedValue(_val, delay);

  useEffect(() => {
    onValueChange?.(_val);
  }, [debouceTerm]);

  return (
    <Input value={_val} {...props} onValueChange={(val) => _setVal(val)}>
      {children}
    </Input>
  );
};
