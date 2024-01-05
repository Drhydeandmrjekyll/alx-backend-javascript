export default function getResponseFromAPI(){
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      // Assuming some API response
      const apiResponse = { data: "API response data" };
      resolve(apiResponse);
    }, 1000); // Simulating a delay of 1 second
  });

  return promise;
}
