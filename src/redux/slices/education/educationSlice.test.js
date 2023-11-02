import educationReducer, { fetchEducationData } from '../education/educationSlice';

describe('educationSlice', () => {
  it('should handle fetchEducationData.pending', () => {
    const initialState = {
      data: [],
      loading: 'idle',
      error: null,
    };
    const nextState = educationReducer(initialState, fetchEducationData.pending);
    expect(nextState.loading).toEqual('pending');
  });

  it('should handle fetchEducationData.fulfilled', () => {
    const initialState = {
      data: [],
      loading: 'pending',
      error: null,
    };
    const mockData = [{ id: 1, name: 'Education 1' }];
    const nextState = educationReducer(initialState, fetchEducationData.fulfilled(mockData));
    expect(nextState.loading).toEqual('succeeded');
    expect(nextState.data).toEqual(mockData);
    expect(nextState.error).toBeNull();
  });

  it('should handle fetchEducationData.rejected', () => {
    const initialState = {
      data: [],
      loading: 'pending',
      error: null,
    };
    const error = 'An error occurred';
    const nextState = educationReducer(initialState, fetchEducationData.rejected(error));
    expect(nextState.loading).toEqual('failed');
    expect(nextState.error).toEqual(error);
  });
});
