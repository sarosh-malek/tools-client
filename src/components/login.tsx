import { FormEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useMutation } from '@apollo/client';
import { GET_USER } from '../graphql/mutation';
import { toast } from 'react-toastify';

interface Form {
  userNameOrEmail: string;
  password: string;
}

export const Login = () => {
  const user = useAppSelector((state) => state.users.email);
  const dispatch = useAppDispatch();
  const [formValue, setFormValue] = useState<Form>({
    userNameOrEmail: '',
    password: '',
  });
  const [errorMessage, setError] = useState('');
  const [formError, setFormError] = useState('');
  const [fetchUser, { data, loading, error }] = useMutation(GET_USER);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    for (let values of Object.values(formValue)) {
      if (values === '') {
        console.log(values);
        setFormError('all fields are mandatory');
        return;
      }
    }
    setFormError('');

    fetchUser({ variables: formValue })
      .then((mutationResult) => {
        if (mutationResult.data.loginUser.errors) {
          setError(mutationResult.data.loginUser.errors[0].message);
          return;
        }
        toast.success(
          `Welcome ${mutationResult.data.loginUser.user.userName}!`
        );
        setError('');
      })
      .catch((e) => {
        console.log('Catching the error!'); // 3.5 Catching errors if any
      });
  };

  return (
    <div className="flex justify-center items-center min-w-full min-h-full fixed">
      <form className="w-96" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            User name or Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            onChange={(e) =>
              setFormValue({ ...formValue, userNameOrEmail: e.target.value })
            }
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            onChange={(e) =>
              setFormValue({ ...formValue, password: e.target.value })
            }
          />
          {formError && (
            <p className="text-red-500 text-xs italic">{formError}</p>
          )}
          {errorMessage && (
            <p className="text-red-500 text-xs italic">{errorMessage}</p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>

          {/* TO DO: Implement forgot password
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a> */}
        </div>
      </form>
    </div>
  );
};
