import { FieldValues, Path, useFormContext } from 'react-hook-form';

import { FieldLayout, FieldProps } from './components/FieldLayout';

export function FieldText<T extends FieldValues>(
  props: FieldProps & {
    name: Path<T>;
    type?: 'text' | 'password';
  },
) {
  const { register } = useFormContext<T>();
  const type = props.type || 'text';

  return (
    <FieldLayout error={props.error} label={props.label} required={props.required}>
      <input
        aria-invalid={props.error ? 'true' : 'false'}
        autoComplete={type === 'password' ? 'currentPassword' : undefined}
        type={type}
        {...register(props.name)}
      />
    </FieldLayout>
  );
}
