import { FieldError } from 'react-hook-form';

import { MIN_PASSWORD_LENGTH } from '@/constants/app';

export function getErrorMessage(error: FieldError, label: string, value: string) {
  switch (error.type) {
    case 'required':
      return `${label} is required field.`;
    case 'email':
      return `"${value}" is not a valid e-mail`;
    case 'min':
      // TODO: Can we make the min length not hardcoded h
      return `${label} must be at least ${MIN_PASSWORD_LENGTH} characters long.`;
    default:
      return `"${value}" is not a valid value.`;
  }
}
