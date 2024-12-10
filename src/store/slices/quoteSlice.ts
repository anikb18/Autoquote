import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { QuoteRequest } from '../../types';

interface QuoteState {
  quotes: QuoteRequest[];
  loading: boolean;
}

const initialState: QuoteState = {
  quotes: [],
  loading: false,
};

const quoteSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {
    setQuotes: (state, action: PayloadAction<QuoteRequest[]>) => {
      state.quotes = action.payload;
    },
    addQuote: (state, action: PayloadAction<QuoteRequest>) => {
      state.quotes.push(action.payload);
    },
    updateQuote: (state, action: PayloadAction<QuoteRequest>) => {
      const index = state.quotes.findIndex(quote => quote.id === action.payload.id);
      if (index !== -1) {
        state.quotes[index] = action.payload;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setQuotes, addQuote, updateQuote, setLoading } = quoteSlice.actions;
export default quoteSlice.reducer;