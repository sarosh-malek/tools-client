import { useMutation } from '@apollo/client';
import { FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { updateUser } from '../features/user/user-slice';
import { ADD_USER } from '../graphql/mutation';

interface Form {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignIn = () => {
  const user = useAppSelector((state) => state.users.email);
  const dispatch = useAppDispatch();
  const [formValue, setFormValue] = useState<Form>({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errorMessage, setError] = useState('');
  const [formError, setFormError] = useState('');

  const [addUser, { data, loading, error }] = useMutation(ADD_USER);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    for (let values of Object.values(formValue)) {
      if (values === '') {
        console.log(values);
        setFormError('all fields are mandatory');
        return;
      }
    }
    if (formValue.password !== formValue.confirmPassword) {
      setFormError('Password mismatch');
      return;
    }
    setFormError('');
    addUser({ variables: formValue })
      .then((mutationResult) => {
        if (mutationResult.data.registerNewUser.errors) {
          setError(mutationResult.data.registerNewUser.errors[0].message);
        }
        setError('');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="flex justify-center items-center min-w-full min-h-full fixed">
      <form className="w-96" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            User name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            onChange={(e) =>
              setFormValue({ ...formValue, userName: e.target.value })
            }
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            onChange={(e) =>
              setFormValue({ ...formValue, email: e.target.value })
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
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            onChange={(e) =>
              setFormValue({ ...formValue, confirmPassword: e.target.value })
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
            Register
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
