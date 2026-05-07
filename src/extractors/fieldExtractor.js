export const extractFields = (text) => {
    return {
      documentType: text.toLowerCase().includes("invoice")
        ? "invoice"
        : "purchase_order",
  
      supplier:
        text.match(/Supplier:\s*(.*)/i)?.[1]?.trim() || null,
  
      documentNumber:
        text.match(/Invoice Number:\s*(.*)/i)?.[1]?.trim() || null,
  
      issueDate:
        text.match(/Issue Date:\s*(.*)/i)?.[1]?.trim() || null,
  
      total:
        text.match(/Total:\s*(.*)/i)?.[1]?.trim() || null,
  
      currency:
        text.match(/Currency:\s*(.*)/i)?.[1]?.trim() || null,
    };
  };