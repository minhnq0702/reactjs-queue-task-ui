import { actions } from '@/models/slices/SliceUser';
import { useAppDispath } from '@/models/store';
import { Button, Card, Input } from '@nextui-org/react';
import { useState } from 'react';
import { Form } from 'react-router-dom';

const PLogin = () => {
  const dispath = useAppDispath();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    void dispath(actions.LOGIN({ login: login, password }));
    console.log(import.meta.env);
  };

  return (
    <div className="max-w-screen-md mx-5 md:mx-auto md:mt-10">
      <h1 className="py-5">Login</h1>
      <Card className="px-12 py-6 w-full md:w-144 md:mt-4">
        <div>
          <Form method="POST">
            <Input
              label="Email / Username"
              variant="underlined"
              size="lg"
              className="mt-2"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <Input
              label="Password"
              variant="underlined"
              size="lg"
              className="mt-5"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="button"
              size="lg"
              color="primary"
              radius="sm"
              fullWidth={true}
              className="mt-8 mb-2"
              onClick={handleLogin}
            >
              Login
            </Button>
          </Form>
        </div>
      </Card>
    </div>
  );
};

export default PLogin;