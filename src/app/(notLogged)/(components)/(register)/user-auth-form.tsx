'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';

import { FaSpinner } from 'react-icons/fa';
import { useAuthForm } from './form';
import { FormInput } from '@/components/formComponents/FormInput';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function RegisterForm({ className, ...props }: UserAuthFormProps) {
  const {
    watch,
    errors,
    register,
    setValue,
    handleSubmit,
    submitForm,
    isSubmitting,
  } = useAuthForm();

  return (
    <div
      className={cn('grid gap-6', className)}
      {...props}
    >
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label
              className="sr-only"
              htmlFor="email"
            >
              Email
            </Label>
            <FormInput
              register={register('email')}
              type="text"
              placeholder="name@example.com"
              errorMessage={errors.email?.message}
              disabled={isSubmitting}
            />
          </div>
          <div className="grid gap-1">
            <Label
              className="sr-only"
              htmlFor="email"
            >
              Name
            </Label>
            <FormInput
              register={register('name')}
              type="text"
              placeholder="Your name here"
              errorMessage={errors.email?.message}
              disabled={isSubmitting}
            />
          </div>
          <div className="grid gap-1">
            <Label
              className="sr-only"
              htmlFor="password"
            >
              Password
            </Label>

            <FormInput
              register={register('password')}
              type="password"
              placeholder="*****"
              errorMessage={errors.password?.message}
              disabled={isSubmitting}
            />
          </div>
          <div className="grid gap-1">
            <Label
              className="sr-only"
              htmlFor="password"
            >
              Confirm Password
            </Label>

            <FormInput
              register={register('confirmPassword')}
              type="password"
              placeholder="*****"
              errorMessage={errors.confirmPassword?.message}
              disabled={isSubmitting}
            />
          </div>
          <button
            className="bg-black text-white rounded-normal p-2"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting && (
              <FaSpinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Create your account
          </button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
      </div>
    </div>
  );
}
