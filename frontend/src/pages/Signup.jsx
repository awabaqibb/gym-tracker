import { useForm } from "react-hook-form";
import useSignup from "../hooks/useSignup";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signUp, error, loading } = useSignup();

  const onSubmit = async (data) => {
    console.log(data);
    await signUp(data.email, data.password);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white rounded-md mt-20 p-10">
        <h1 className="text-center font-semibold text-lg pb-3">Signup</h1>
        <form
          className="flex flex-col justify-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="email">Email:</label>
          <input
            className="rounded-md border-2 border-gray-200"
            type="email"
            id="email"
            name="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <span className="text-red-500 block mb-2">
              {errors.email.message}
            </span>
          )}

          <label htmlFor="password">Password:</label>
          <input
            className="rounded-md border-2 border-gray-200 "
            type="password"
            id="password"
            name="password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <span className="text-red-500 block mb-2">
              {errors.password.message}
            </span>
          )}

          <button
            className="bg-green-500 justify-center shadow-md text-white mt-3"
            type="submit"
          >
            Signup
          </button>
          {error && <span className="text-red-500 block mt-2">{error}</span>}
        </form>
      </div>
    </div>
  );
};

export default Signup;
