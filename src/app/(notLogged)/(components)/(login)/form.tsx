import { Schema } from './schema';
import { useForm } from 'react-hook-form';
import type { AuthFormSchema } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import AuthClass from '@/classes/auth/AuthClass';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export function useAuthForm() {
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
    auth
      .postHttp('login', {
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        if (!res.status) {
          toast.error(res.data);
          return;
        }
        if (res.status) {
          console.log(res);
          auth.setCache(res.data, true);
          Cookies.set('auth', res.data.email);
          router.refresh();
        }
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
  };
}
