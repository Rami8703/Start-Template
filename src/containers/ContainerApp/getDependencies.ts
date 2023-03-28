import { Redux } from '@/redux';

function getDependencies(): Promise<{
  store: Redux['store'];
}> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const redux = new Redux();
        resolve({
          store: redux.store,
        });
      } catch (error) {
        reject(error);
      }
    }, 5000);
  });
}

export { getDependencies };
