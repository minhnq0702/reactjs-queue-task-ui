import { Navbar, NavbarBrand, NavbarContent, NavbarMenuItem } from '@nextui-org/navbar';
import { Input, Kbd } from '@nextui-org/react';
import { FC } from 'react';
import './Header.css';
import CLogo from './shared/Logo';

interface HeaderProps {
  allowSearch: boolean;
}

const CHeader: FC<HeaderProps> = ({ allowSearch }: HeaderProps) => {
  const handleInputSearch = (value: string) => {
    console.log('searching...', value);
  };
  return (
    <Navbar id="header" maxWidth="full">
      <NavbarBrand className="header-brand">
        <CLogo></CLogo>
      </NavbarBrand>
      <NavbarContent justify="center">
        {allowSearch ? (
          <Input
            classNames={{
              base: 'max-w-full sm:max-w-[10rem] md:max-w-[24rem] h-10 md:h-12',
              mainWrapper: 'h-full',
              input: 'text-medium md:w-[24rem]',
              inputWrapper: 'h-full font-normal text-default-400 bg-default-400/20 dark:bg-default-500/20',
            }}
            placeholder="Type to search..."
            // size="md"
            variant="bordered"
            radius="md"
            endContent={<Kbd keys={['command']}>K</Kbd>}
            type="search"
            color="primary"
            // fullWidth={true}
            onValueChange={handleInputSearch}
          />
        ) : null}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarMenuItem>List Item 1</NavbarMenuItem>
      </NavbarContent>
    </Navbar>
  );
};

export default CHeader;
