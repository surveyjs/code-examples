// Fictional existing employee, shared by both profile-update implementations.
export function initialData(options) {
  return options.stage === 5 && options.variant === "profile-update"
    ? {
        name: "Alex Morgan",
        email: "alex@example.com",
        department: "Operations",
        workMode: "office",
        contractType: "permanent",
        startDate: "2024-05-01",
        officeLocation: "London",
        relocates: "no",
        contacts: [
          {
            name: "Sam Morgan",
            relationship: "Family",
            contactMethod: "phone",
            phone: "+44 20 0000 0000",
          },
        ],
      }
    : {};
}

// The same fictional answers feed both renderers. This is test/demo data, not business logic.
export function sampleData(options) {
  return {
    name: "Alex Morgan",
    email: "alex@example.com",
    department: "Engineering",
    workMode: "hybrid",
    contractType: "fixed",
    startDate: "2027-01-10",
    contractEnd: "2027-12-31",
    officeLocation: "London",
    homeAddress: "10 Example Street",
    relocates: "yes",
    relocationCity: "Berlin",
    moveDate: "2027-01-15",
    equipment: ["Laptop", "Monitor"],
    deliveryNotes: "Leave the equipment with reception.",
    confirmation: ["confirmed"],
    contacts: [
      {
        name: "Sam Morgan",
        relationship: "Family",
        contactMethod: "email",
        email: "sam@example.com",
        phone: "+44 20 0000 0001",
        notes: "First contact",
      },
      {
        name: "Lee Morgan",
        relationship: "Friend",
        contactMethod: "phone",
        email: "lee@example.com",
        phone: "+44 20 0000 0002",
        notes: "Second contact",
      },
    ],
  };
}
