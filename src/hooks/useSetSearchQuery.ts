import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { searchFormState } from '../states/searchForm';

export const useSetSearchQuery = (query: string) => {
  const setNamesState = useSetRecoilState(searchFormState);

  useEffect(() => {
    // TODO eslint ignore
    setNamesState(query);
  }, []);
};
