'use client';

import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { useState } from 'react';
import { LoginForm } from '../(components)/(login)/user-auth-form';
import { RegisterForm } from '../(components)/(register)/user-auth-form';
import { SiCnn } from 'react-icons/si';

export default function AuthenticationPage() {
  const [login, setLogin] = useState(true);
  return (
    <>
      <div className="md:hidden">
        <SiCnn className="text-white w-16 h-16" />
      </div>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <button
          type="button"
          onClick={() => {
            setLogin(!login);
          }}
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'absolute right-4 top-4 md:right-8 md:top-8'
          )}
        >
          {login ? 'Registration' : 'Login'}
        </button>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <SiCnn className="text-white w-16 h-16" />
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                {login ? 'Login to your account' : 'Create your account'}
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to {login ? 'login to ' : 'create '} your
                account
              </p>
            </div>
            {login ? <LoginForm /> : <RegisterForm />}
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{' '}
              <Link
                href="https://www.cnnnewsource.com/privacy-policy/"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                href="https://www.cnnnewsource.com/privacy-policy/"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
