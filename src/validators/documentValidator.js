export const validateDocument = (data) => {
    const errors = [];
  
    const validationRules = [
      {
        field: "documentNumber",
        validate: (value) => Boolean(value),
        message: "Missing document number",
      },
  
      {
        field: "supplier",
        validate: (value) => Boolean(value),
        message: "Missing supplier",
      },
  
      {
        field: "issueDate",
        validate: (value) => Boolean(value),
        message: "Missing issue date",
      },
  
      {
        field: "total",
        validate: (value) => {
          return value && !isNaN(Number(value));
        },
        message: "Invalid total amount",
      },
  
      {
        field: "currency",
        validate: (value) => {
          const allowedCurrencies = ["USD", "EUR", "BAM"];
  
          return value && allowedCurrencies.includes(value);
        },
        message: "Invalid currency",
      },
    ];
  
    validationRules.forEach((rule) => {
      const value = data[rule.field];
  
      if (!rule.validate(value)) {
        errors.push({
          field: rule.field,
          message: rule.message,
        });
      }
    });
  
    return errors;
  };