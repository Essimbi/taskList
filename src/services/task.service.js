import { create } from "zustand";
import { devtools, persist as persistDevtools } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useDataStore = create(
  devtools(
    persistDevtools(
      (set) => ({
        data: [],
        addData: (newData) => {
          const currentData = useDataStore.getState().data;
          set({ data: [...currentData, newData] });
        },
        removeData: (id) => {
          const currentData = useDataStore.getState().data;
          set({
            data: currentData.filter((data) => data.id !== id),
          });
        },
        updateData: (updatedData) => {
          const currentData = useDataStore.getState().data;
          set({
            data: currentData.map((data) =>
              data.id === updatedData.id ? updatedData : data
            ),
          });
        },
      }),
      {
        name: "data-storage",
        getStorage: () => AsyncStorage,
      }
    )
  )
);

export default useDataStore;
