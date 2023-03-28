import { useEffect, useState } from 'react';

import { getDependencies } from './getDependencies';

function useBootstrapApp() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<unknown>();
  const [dependencies, setDependencies] =
    useState<Awaited<ReturnType<typeof getDependencies>>>();

  useEffect(() => {
    async function bootstrap() {
      try {
        // @TODO: dependencies should be injected
        setDependencies(await getDependencies());
      } catch (bootstrapError) {
        setError(bootstrapError);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    bootstrap();
  }, []);

  if (isLoading) {
    return {
      isLoading,
    };
  }

  if (isError) {
    return {
      isLoading,
      isError,
      error,
    };
  }

  return {
    isLoading,
    isError,
    dependencies: dependencies!,
  };
}

export { useBootstrapApp };
