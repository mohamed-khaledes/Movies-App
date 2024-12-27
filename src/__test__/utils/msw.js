// import { http, HttpResponse} from "msw"
// import { setupServer } from "msw/node";
// // const { http, HttpResponse} = require("msw");

// const makeRequest = async (cfg) => {
//     const handler = cfg?.map((item) => {
//         return http[item?.method || 'get'](item?.url,() => {
//             return  HttpResponse.json(item?.response)
//           })
//     })

//   const server = setupServer(...handler);
//   beforeAll(() => server.listen());
//   afterEach(() => server.resetHandlers());
//   afterAll(() => server.close());
// };

// export default makeRequest;
