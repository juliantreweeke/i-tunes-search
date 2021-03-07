import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks'
import useSearchQuery from './useSearchQuery';
import store from '../store/Store';
import { Provider } from 'react-redux';

describe('The useSearchQuery hook', () => {
    it('searchQuery should be an empty string by default', () => {
        const { result } = renderHook(() => useSearchQuery(), {
            wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
        });
        expect(result.current.searchQuery).toEqual('');
    });

    it('setSearchQuery should change value of searchQuery', () => {
        const { result } = renderHook(() => useSearchQuery(), {
            wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
        });
        const searchQuery = 'this is a search query';
        act(() => {
            result.current.setSearchQuery(searchQuery);
        })
        expect(result.current.searchQuery).toEqual(searchQuery);
    });
});