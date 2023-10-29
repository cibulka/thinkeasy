'use client';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { ButtonSubmit } from '@/components/button-submit/ButtonSubmit';
import { LayoutPage } from '@/components/layout-page/LayoutPage';
import { STATE, State } from '@/constants/common';
import { CreatePostInput, postsControllerCreate } from '@/orval/api';
import { FieldText } from '@/components/field/FieldText';
import { FieldTextarea } from '@/components/field/FieldTextarea';
import { useRecoilValue } from 'recoil';
import { atomTokens } from '@/recoil/atom';
import { toast } from 'react-toastify';

const schema = yup
  .object()
  .shape({
    title: yup.string().required(),
    content: yup.string().required(),
  })
  .required();

export default function PageCreate() {
  const tokens = useRecoilValue(atomTokens);
  const [state, setState] = useState<State>(STATE.IDLE);

  const form = useForm<CreatePostInput>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  function onSubmit(data: CreatePostInput) {
    setState(STATE.LOADING);
    postsControllerCreate(data, { headers: { Authorization: `Bearer ${tokens.accessToken}` } })
      .then(() => {
        form.reset();
        const titleShort = data.title.length > 20 ? `${data.title.slice(0, 20)}...` : data.title;
        toast(`Post "${titleShort}" was created!`);
        setState(STATE.SUCCESS);
      })
      .catch(() => {
        setState(STATE.FAILURE);
      });
  }

  return (
    <LayoutPage title="Create new post">
      {state === STATE.FAILURE ? (
        <div className="flex flex-col gap-4">
          <p>Publishing failed, for unclear reasons.</p>
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
            <FieldText<CreatePostInput>
              error={form.formState.errors.title}
              label="Text"
              name="title"
              required
            />
            <FieldTextarea<CreatePostInput>
              error={form.formState.errors.content}
              label="Content"
              name="content"
              required
            />
            <ButtonSubmit isLoading={state === STATE.LOADING}>Post new content</ButtonSubmit>
          </form>
        </FormProvider>
      )}
    </LayoutPage>
  );
}
