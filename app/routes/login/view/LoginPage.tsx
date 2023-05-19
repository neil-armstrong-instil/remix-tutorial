import {useEffect, useRef} from "react";
import {Form, Link, useSearchParams} from "@remix-run/react";
import {useCredentialsValidationError} from "~/routes/shared/server/utils/credentials/validation/hooks/use-credentials-validation-error/UseCredentialsValidationError";

export function LoginPage() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [searchParams] = useSearchParams();
  const {emailError, passwordError} = useCredentialsValidationError();

  useEffect(() => {
    if (emailError) {
      emailRef.current?.focus();
      return;
    }

    if (passwordError) {
      passwordRef.current?.focus();
      return;
    }
  }, [emailError, passwordError]);

  return (
    <div className="flex min-h-full flex-col justify-center">
      <div className="mx-auto w-full max-w-md px-8">
        <Form
          className="space-y-6"
          method="post"
        >
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email address
            </label>

            <div className="mt-1">
              <input
                ref={emailRef}
                id="email"
                className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
                name="email"
                type="email"
                autoComplete="email"
                aria-invalid={emailError ? true : undefined}
                aria-describedby="email-error"
                autoFocus
                required
              />

              {emailError && (
                <div
                  id="email-error"
                  className="pt-1 text-red-700"
                >
                  {emailError}
                </div>
              )}
            </div>
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>

            <div className="mt-1">
              <input
                ref={passwordRef}
                id="password"
                className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
                name="password"
                type="password"
                autoComplete="current-password"
                aria-invalid={passwordError ? true : undefined}
                aria-describedby="password-error"
              />
              {passwordError && (
                <div className="pt-1 text-red-700" id="password-error">
                  {passwordError}
                </div>
              )}
            </div>
          </div>

          <input
            name="redirectTo"
            value={searchParams.get("redirectTo") || "/notes"}
            type="hidden"
          />
          <button
            className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400"
            type="submit"
          >
            Log in
          </button>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                name="remember"
                type="checkbox"
              />

              <label
                className="ml-2 block text-sm text-gray-900"
                htmlFor="remember"
              >
                Remember me
              </label>
            </div>

            <div className="text-center text-sm text-gray-500">
              Don't have an account?{" "}

              <Link
                className="text-blue-500 underline"
                to={{
                  pathname: "/join",
                  search: searchParams.toString()
                }}
              >
                Sign up
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
