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
                "VtexIdclientAutCookie": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjM1MzhBRTE2MTA2NTAxREZERDZBODcwQjY1MjgxNkMzMkY4MzI1RUQiLCJ0eXAiOiJqd3QifQ.eyJzdWIiOiJyZW5hdG8ucmljYXJkaUB2dGV4LmNvbSIsImFjY291bnQiOiJkcm9nYWwiLCJhdWRpZW5jZSI6ImFkbWluIiwic2VzcyI6ImE3NTQ0NzU0LTRjYjQtNDM3Ny1iMzhmLTk1NWVmNjc5ZmFlZiIsImV4cCI6MTcyNzgwMDIzNSwidHlwZSI6InVzZXIiLCJ1c2VySWQiOiJkYWE2NDgwMy04YzlkLTRmMWItYmVmZS05NjI2MGE2NzVlYzUiLCJpYXQiOjE3Mjc3MTM4MzUsImlzUmVwcmVzZW50YXRpdmUiOmZhbHNlLCJpc3MiOiJ0b2tlbi1lbWl0dGVyIiwianRpIjoiYzRhMDIxNWYtODkxMi00NGEyLWE2ZmUtOWEwOGUxYjRiNTlmIn0.i9JqwhPW0NCc3UGy2_oTLCbQc5i3daT7LVGJN7xDfpDhoH47bUfFJRDwoNQ5DRv9VtfW3zHKRAQb-evE6UXhVw"
              },
              body: JSON.stringify(input),
            }
          );
  
          if (!response.ok) {
            throw new Error("Error while sending the message");
          }
  
          return { message: "Your message was sent successfully!" };
        } catch (error) {
          return { message: error };
        }
      },
    },
  };
  
  export default contactFormResolver;