'use client';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import dayjs from 'dayjs';
import Link from 'next/link';

import { ButtonSubmit } from '@/components/button-submit/ButtonSubmit';
import { FieldText } from '@/components/field/FieldText';
import { LayoutPage } from '@/components/layout-page/LayoutPage';
import { MIN_PASSWORD_LENGTH, URL_APP_STATIC } from '@/constants/app';
import { STATE, State } from '@/constants/common';
import { SignupInput, authControllerLogin } from '@/orval/api';
import { atomTokens, atomUser } from '@/recoil/atom';
import { UserAfterSignup } from '@/types/api';

const schema = yup
  .object()
  .shape({
    email: yup.string().email().required(),
    password: yup.string().min(MIN_PASSWORD_LENGTH).required(),
    firstname: yup.string().required(),
    lastname: yup.string().required(),
  })
  .required();

export default function PageSignup() {
  const [state, setState] = useState<State>(STATE.IDLE);
  const [_tokens, setTokens] = useRecoilState(atomTokens);
  const [_user, setUser] = useRecoilState(atomUser);

  const form = useForm<SignupInput>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  function onSubmit(data: SignupInput) {
    setState(STATE.LOADING);
    authControllerLogin(data)
      .then((res) => {
        setTokens((old) => ({
          ...old,
          accessToken: res.data.accessToken,
          refreshToken: res.data.refreshToken,
        }));
        const user: UserAfterSignup = {
          ...data,
          createdAt: dayjs().toISOString(),
          updatedAt: dayjs().toISOString(),
        };
        setUser(user);
        setState(STATE.SUCCESS);
      })
      .catch(() => {
        setState(STATE.FAILURE);
      });
  }

  return (
    <LayoutPage title="Register">
      {state === STATE.FAILURE ? (
        <div className="flex flex-col gap-4">
          <p>Signup failed. Maybe your e-mail is already registered?</p>
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
          <form className="flex flex-col gap-8 max-w-md" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldText<SignupInput>
              error={form.formState.errors.email}
              label="E-mail"
              name="email"
              required
            />
            <FieldText<SignupInput>
              error={form.formState.errors.password}
              label="Password"
              name="password"
              type="password"
              required
            />
            <FieldText<SignupInput>
              error={form.formState.errors.firstname}
              label="First name"
              name="firstname"
              required
            />
            <FieldText<SignupInput>
              error={form.formState.errors.lastname}
              label="Last name"
              name="lastname"
              required
            />
            <ButtonSubmit isLoading={state === STATE.LOADING}>Create new account</ButtonSubmit>
          </form>
          <div className="mt-6">
            {`Do you have an account already? `}
            <Link href={URL_APP_STATIC.LOGIN} className="underline text-blue-500">
              Login.
            </Link>
          </div>
        </FormProvider>
      )}
    </LayoutPage>
  );
}
