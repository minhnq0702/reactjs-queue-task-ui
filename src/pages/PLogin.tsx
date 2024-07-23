import { InputDebouce } from '@/components/InputDebouce';
import { actions } from '@/models/slices/SliceUser';
import { useAppDispath, useAppSelector } from '@/models/store';
import { Button, Card } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';

const PLogin = () => {
  const dispath = useAppDispath();
  const nav = useNavigate();
  const isLogged = useAppSelector((state) => state.user.isLogged);
  useEffect(() => {
    if (isLogged === true) {
      // * Redirect to home page
      nav('/');
    }

    // let doRedirect: NodeJS.Timeout;
    // if (isLogged === true) {
    //   // * Redirect to home page
    //   doRedirect = setTimeout(() => {
    //     nav('/');
    //   }, 5000);
    // }
    // return () => {
    //   console.log('Clearing timeout');
    //   clearTimeout(doRedirect);
    // };
  }, [isLogged]);

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    dispath(actions.LOGIN({ login: login, password }))
      .unwrap()
      .then(() => {
        nav('/');
      })
      .catch((err) => {
        console.log('Login failed', err);
      });
  };

  return (
    <div className="max-w-screen-md mx-5 md:mx-auto md:mt-10">
      <h1 className="py-5">Login</h1>
      <Card className="px-12 py-6 w-full md:w-144 md:mt-4">
        <div>
          <Form method="POST">
            <InputDebouce
              delay={500}
              label="Email / Username"
              variant="underlined"
              size="lg"
              className="mt-2"
              value={login}
              onValueChange={(val) => setLogin(val)}
            />
            <InputDebouce
              delay={500}
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
