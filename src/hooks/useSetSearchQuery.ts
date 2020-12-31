import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { searchFormState } from '../states/searchForm';

export const useSetSearchQuery = (query: string) => {
  const setNamesState = useSetRecoilState(searchFormState);

  useEffect(() => {
    setNamesState(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
