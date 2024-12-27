import { screen } from "@testing-library/react";
import NavBar from "../Components/NavBar";
import RenderWithProvider from "./utils/RenderWithProvider";
import userEvent from "@testing-library/user-event";
import makeRequest from "./utils/MSW";
import axios from 'axios'
import { configureStore } from "@reduxjs/toolkit";
import { getMovies, moviesReducer } from "../Redux/Redux-toolkit/Slices/moviesSlice";

describe("test navbar ui", () => {
 
  // makeRequest({
  //   method:'get',
  //   url:"https://api.themoviedb.org/3/movie/popular",
  //   response:{
  //     results:[
  //       {
  //         "adult": false,
  //         "backdrop_path": "/cjEcqdRdPQJhYre3HUAc5538Gk8.jpg",
  //         "genre_ids": [
  //             28,
  //             14,
  //             35
  //         ],
  //         "id": 845781,
  //         "original_language": "en",
  //         "original_title": "Red One",
  //         "overview": "بعد اختط",
  //         "popularity": 5982.016,
  //         "poster_path": "/XTsoKh6QhTLH9JSdiKUrJFx1To.jpg",
  //         "release_date": "2024-10-31",
  //         "title": "Red One",
  //         "video": false,
  //         "vote_average": 7.002,
  //         "vote_count": 1410
  //     },
  //     ]
  //   }
  // })


  
  test("first test for navbar ui", async () => {
    RenderWithProvider(<NavBar />);
    const logo = await screen.findAllByAltText("logo-img");
    expect(logo).toHaveLength(1);
    // const input = screen.getByLabelText("aria-label");
    const input = await screen.findAllByTestId("search-input");
    expect(input).toHaveLength(1);
    await userEvent.type(input[0], "search");
    expect(input[0]?.value).toBe("search");
  });

  // when the user type in the input should make a request to api
  test("when the user type in the input should make a request to api", async () => {
    RenderWithProvider(<NavBar />);
    const input = await screen.findAllByTestId("search-input");
    expect(input).toHaveLength(1);
    await userEvent.type(input[0], "search");
    expect(input[0]?.value).toBe("search");
  });

});

jest.mock('axios');

describe('getMovies thunk', () => {
  let store;

  beforeEach(() => {
    // Setup a mock store for testing
    store = configureStore({
      reducer: {
        movies: moviesReducer,
      },
    });
  });

  it('dispatches the correct actions on successful fetch', async () => {
    // Arrange: Mock the successful API response
    const mockResponse = {
      data: {
        results: [
          {
            "adult": false,
            "backdrop_path": "/cjEcqdRdPQJhYre3HUAc5538Gk8.jpg",
            "genre_ids": [
                28,
                14,
                35
            ],
            "id": 845781,
            "original_language": "en",
            "original_title": "Red One",
            "overview": "بعد اختلقطب اعيد الميلاد.",
            "popularity": 5982.016,
            "poster_path": "/XTsoKh6QhTLH9JSdiKUrJFx1To.jpg",
            "release_date": "2024-10-31",
            "title": "Red One",
            "video": false,
            "vote_average": 7.002,
            "vote_count": 1410
        },
        ],
      },
    };

    axios.get.mockResolvedValue(mockResponse);

    // Act: Dispatch the thunk action
    const result = await store.dispatch(getMovies());

    // Assert: Check that the result is as expected
    expect(result.type).toBe('movies/getMovies/fulfilled'); // Action type for success
    // expect(result.payload).toEqual(mockResponse.data);

    // Optionally, check that the state has been updated (depends on your implementation)
    const state = store.getState();
    expect(state.movies.movies.results).toEqual(mockResponse.data.results);
  });

  it('dispatches the correct actions on failed fetch', async () => {
    // Arrange: Mock the error response
    const mockError = new Error('Network Error');
    axios.get.mockRejectedValue(mockError);

    // Act: Dispatch the thunk action
    const result = await store.dispatch(getMovies());

    // Assert: Check that the result is an error action
    expect(result.type).toBe('movies/getMovies/rejected'); // Action type for failure
    expect(result.payload).toEqual(mockError);
  });
});