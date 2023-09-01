import { Schema } from './schema';
import { useForm } from 'react-hook-form';
import type { AuthFormSchema } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import AuthClass from '@/classes/auth/AuthClass';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function useAuthForm() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    setValue,
    watch,
    formState: { isSubmitting, errors },
    handleSubmit,
  } = useForm<AuthFormSchema>({
    resolver: zodResolver(Schema),
  });

  const auth = new AuthClass();

  const router = useRouter();

  function submitForm(values: AuthFormSchema) {
    if (values.password !== values.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    setIsLoading(true);
    auth
      .postHttp('register', {
        email: values.email,
        password: values.password,
        name: values.name,
        isSuper: 1,
      })
      .then((res) => {
        if (!res.status) {
          toast.error(res.data);
          return;
        }
        if (res.status) {
          auth.setCache(res.data, true);
          Cookies.set('auth', res.data.email);
          router.refresh();
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return {
    watch,
    errors,
    register,
    setValue,
    handleSubmit,
    submitForm,
    isSubmitting,
    isLoading,
  };
}
