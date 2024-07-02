const getSuspender = (promise: Promise<Response>) => {
    let status = "pending";
    let response: string | object = ''
  
    const suspender = promise.then(
      (res) => {
        status = "success";
        response = res;
      },
      (err) => {
        status = "error";
        response = err;
      }
    );
  
    const read = () => {
      switch (status) {
        case "pending":
          throw suspender;
        case "error":
          throw response;
        default:
          return response;
      }
    };
  
    return { read };
  };
  
  export type Method =  'GET' | 'POST' | 'PUT' | 'DELETE'
  export function fetchData(url: string, method?: Method, body?: BodyInit) {

    let request = {
        input: url,
        init: {
            method: method ? method : 'GET',
            body: body ? body : null,
        }
    }

    const promise = fetch(request.input, { ...request.init })
      .then((response) => response.json())
      .then((json) => json);
  
    return getSuspender(promise)
  }