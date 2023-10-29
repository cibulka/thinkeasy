'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { ButtonSubmit } from '@/components/button-submit/ButtonSubmit';
import { LayoutPage } from '@/components/layout-page/LayoutPage';
import { STATE, State } from '@/constants/common';
import { URL_APP_STATIC } from '@/constants/app';
import { LoginInput, authControllerLogin } from '@/orval/api';
import { atomTokens, atomUser } from '@/recoil/atom';
import { AuthWithUser } from '@/types/api';
import { FieldText } from '@/components/field/FieldText';

const schema = yup
  .object()
  .shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

export default function PageLogin() {
  const [state, setState] = useState<State>(STATE.IDLE);
  const [_tokens, setTokens] = useRecoilState(atomTokens);
  const [_user, setUser] = useRecoilState(atomUser);

  const form = useForm<LoginInput>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  function onSubmit(data: LoginInput) {
    setState(STATE.LOADING);
    authControllerLogin(data)
      .then((res) => {
        setTokens((old) => ({
          ...old,
          accessToken: res.data.accessToken,
          refreshToken: res.data.refreshToken,
        }));
        // See types/api.ts for explanation
        const user = (res.data as AuthWithUser).user;
        setUser(user);
        setState(STATE.SUCCESS);
      })
      .catch(() => {
        setState(STATE.FAILURE);
      });
  }

  return (
    <LayoutPage title="Login">
      <div>
        {state === STATE.FAILURE ? (
          <div className="flex flex-col gap-4">
            <p>Login failed. Maybe you have the wrong credentials?</p>
            <div>
              <button
                className="underline text-blue-500"
                type="button"
                onClick={() => setState(STATE.IDLE)}
              >
                Try again
              </button>
            </div>
          </div>
        ) : (
          <FormProvider {...form}>
            <form className="flex flex-col gap-4 max-w-md" onSubmit={form.handleSubmit(onSubmit)}>
              <FieldText<LoginInput>
                error={form.formState.errors.email}
                label="E-mail"
                name="email"
                required
              />
              <FieldText<LoginInput>
                error={form.formState.errors.password}
                label="Password"
                name="password"
                required
                type="password"
              />
              <ButtonSubmit className="mt-4" isLoading={state === STATE.LOADING}>
                Log in
              </ButtonSubmit>
            </form>
            <div className="mt-6">
              {`Don't have an account? `}
              <Link href={URL_APP_STATIC.SIGNUP} className="underline text-blue-500">
                Register.
              </Link>
            </div>
          </FormProvider>
        )}
      </div>
    </LayoutPage>
  );
}
