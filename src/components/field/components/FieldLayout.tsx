import { PropsWithChildren } from 'react';
import { FieldError, FieldValues } from 'react-hook-form';

export type FieldProps = {
  error?: FieldError;
  label: string;
  required?: boolean;
};

// TODO: Customized error message
export function FieldLayout(props: PropsWithChildren & FieldProps) {
  return (
    <label className="flex flex-col gap-2">
      <strong>
        {props.label}
        {props.required && (
          <>
            {` `}
            <span className="text-red-500">*</span>
          </>
        )}
      </strong>
      {props.children}
      {props.error && (
        <div className="text-sm text-red-500 first-letter:capitalize">{props.error?.message}</div>
      )}
    </label>
  );
}
