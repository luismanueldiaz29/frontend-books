import create from 'zustand';

interface useAsyncListRemissionsStoreProps {
  asyncList: any;
  // eslint-disable-next-line no-unused-vars
  setAsyncList: (list: any) => void;
  reloadList: () => void;
}

export const useAsyncListStore = create<useAsyncListRemissionsStoreProps>(
  (set) => ({
    asyncList: null,
    reloadList: () =>
      set((state) => {
        state.asyncList.reload();
        return state;
      }),
    setAsyncList: (list) => set({ asyncList: list }),
  }),
);
