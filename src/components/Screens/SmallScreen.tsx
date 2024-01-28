import { Result } from "antd";

export default function SmallScreen(): JSX.Element {
  return (
    <Result
      status="warning"
      title="Sorry, this page is not available on small screens!"
      extra={
        <div className="mt-24">
          <div
            className="flex items-center p-4 text-lg text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
            aria-live="assertive"
          >
            <svg
              className="flex-shrink-0 inline w-4 h-4 me-3"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>

            <div>
              <span className="font-bold">Attention:</span> Please open this
              page on a larger screen.
            </div>
          </div>
        </div>
      }
    />
  );
}
