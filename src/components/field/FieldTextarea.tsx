'use client';
import { useEffect, useRef } from 'react';
import { FieldValues, Path, useFormContext, useWatch } from 'react-hook-form';

import { FieldLayout, FieldProps } from './components/FieldLayout';

export function FieldTextarea<T extends FieldValues>(
  props: FieldProps & {
    name: Path<T>;
  },
) {
  const { register } = useFormContext<T>();
  const { ref, ...attrs } = register(props.name);
  const textarea = useRef<HTMLTextAreaElement>();
  const value = useWatch({ name: props.name });

  useEffect(() => {
    if (textarea.current) {
      textarea.current.style.height = '0px';
      textarea.current.style.height = `${textarea.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <FieldLayout error={props.error} label={props.label} required={props.required}>
      <textarea
        aria-invalid={props.error ? 'true' : 'false'}
        {...attrs}
        ref={(el) => {
          ref(el);
          if (el) textarea.current = el;
        }}
      />
    </FieldLayout>
  );
}
