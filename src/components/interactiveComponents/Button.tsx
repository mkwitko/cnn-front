import React from 'react';
import { twMerge } from 'tailwind-merge';
import Spinner from '../utilComponents/Spinner';

export default function CnnButton({
  label,
  onClick,
  disabled,
  color = 'primary',
  mergeClass,
  textClass,
  children,
  buttonType = 'button',
  loading = false,
}: {
  label: string;
  onClick?: any;
  disabled?: boolean;
  color?: 'primary' | 'light' | 'outlined' | 'disabled';
  mergeClass?: string;
  textClass?: string;
  children?: React.ReactNode;
  buttonType?: 'button' | 'submit' | 'reset';
  loading?: boolean;
}) {
  const classes = `${
    color === 'primary'
      ? 'bg-primary text-white'
      : color === 'light'
      ? 'text-primary'
      : color === 'outlined'
      ? 'text-primary border border-primary'
      : color === 'disabled'
      ? 'text-textDisabled'
      : ''
  } ${
    disabled || loading
      ? 'opacity-75'
      : color === 'primary'
      ? 'hover:bg-primaryDark'
      : color === 'outlined'
      ? 'hover:bg-primary/5'
      : ''
  } 
    px-4 py-1 h-[2rem] rounded-[.325rem] disabled:cursor-not-allowed w-full font-semibold flex items-center justify-center gap-4`;

  return (
    <button
      type={buttonType === 'button' ? 'button' : 'submit'}
      onClick={onClick || undefined}
      disabled={disabled || loading}
      className={mergeClass ? twMerge(classes, mergeClass) : classes}
    >
      {children}
      {loading ? (
        <Spinner />
      ) : (
        <p
          className={`text-center text-extraSmall font-[700] uppercase md:text-small lg:text-[1rem] ${textClass}`}
        >
          {label}
        </p>
      )}
    </button>
  );
}
