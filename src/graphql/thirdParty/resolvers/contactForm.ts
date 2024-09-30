type SubmitContactFormData = {
    input: {
      name: string;
      email: string;
      phone: string;
    };
  };
  
  const contactFormResolver = {
    Mutation: {
      submitContactForm: async (_: never, data: SubmitContactFormData) => {
        const { input } = data;
  
        try {
          const response = await fetch(
            "https://renatoricardi.vtexcommercestable.com.br/api/dataentities/contatos_revendedores/documents?_schema=contatos_revendedores",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "VtexIdclientAutCookie": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjAxQjlGRDg5NENFNDAyNjg5NkY2M0QwMjJGNUJBM0IyMTMyNzNGMjAiLCJ0eXAiOiJqd3QifQ.eyJzdWIiOiJyZW5hdG8ucmljYXJkaUB2dGV4LmNvbSIsImFjY291bnQiOiJyZW5hdG9yaWNhcmRpIiwiYXVkaWVuY2UiOiJhZG1pbiIsInNlc3MiOiI5MTNmNTVlNC00YWI0LTRmMTEtYWI2ZS0wYmI1MmE0Y2Y3OWQiLCJleHAiOjE3MjU1MzkyODcsInR5cGUiOiJ1c2VyIiwidXNlcklkIjoiZGFhNjQ4MDMtOGM5ZC00ZjFiLWJlZmUtOTYyNjBhNjc1ZWM1IiwiaWF0IjoxNzI1NDUyODg3LCJpc1JlcHJlc2VudGF0aXZlIjpmYWxzZSwiaXNzIjoidG9rZW4tZW1pdHRlciIsImp0aSI6IjAzMmFmMDA1LWM1YTgtNDBiMy1iYjhkLWFkMzJiMGE5MzI5NSJ9._MbJNpvdmMJtmPPRzQVq2F5yryaCwgqaWZceyZ2m-eYzPIbUvbNSMwUwIBSl4qCqAlCFeINJdmjNRVXECYsZxQ"
              },
              body: JSON.stringify(input),
            }
          );
  
          if (!response.ok) {
            throw new Error("Error while sending the message");
          }
  
          return { message: "Your message was sent successfully!!" };
        } catch (error) {
          return { message: error };
        }
      },
    },
  };
  
  export default contactFormResolver;