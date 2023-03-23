function arrayObjectUniqueCollector(arr1, arr2, field) {
    const results = arr2.some((row) => (row.id = 1));
   //  const filter = arr1.filter((row) => arr2.some((row2) => row2.id != row.id));
    const filter = arr2.filter((row) => !arr1.some((row2) => row2.id === row.id));
    console.log(filter);
    return [];
}
const arr1 = [
    {
        id: 1,
        fullName: "Beetlejuice",
        email: "blj@co.cc",
        password: "smee@9123",
    },
    {
        id: 2,
        fullName: "Ghostbusters",
        email: "gbst@co.cc",
        password: "smee@9123",
    },
    {
        id: 3,
        fullName: "Ghostbusters",
        email: "gbst@co.cc",
        password: "smee@9123",
    },
    {
        id: 4,
        fullName: "Ghostbusters",
        email: "gbst@co.cc",
        password: "smee@9123",
    },
    {
        id: 5,
        fullName: "Ghostbusters",
        email: "gbst@co.cc",
        password: "smee@9123",
    },
];

const arr2 = [
    {
        id: 1,
        fullName: "Beetlejuice",
        email: "blj@co.cc",
        password: "smee@9123",
    },
    {
        id: 2,
        fullName: "Ghostbusters",
        email: "gbst@co.cc",
        password: "smee@9123",
    },
    {
        id: 3,
        fullName: "Ghostbusters",
        email: "gbst@co.cc",
        password: "smee@9123",
    },
    {
        id: 4,
        fullName: "Ghostbusters",
        email: "gbst@co.cc",
        password: "smee@9123",
    },
    {
        id: 5,
        fullName: "Ghostbusters",
        email: "gbst@co.cc",
        password: "smee@9123",
    },
    {
        id: 6,
        fullName: "Ghostbusters",
        email: "gbst@co.cc",
        password: "smee@9123",
    },
    {
        id: 7,
        fullName: "Ghostbusters",
        email: "gbst@co.cc",
        password: "smee@9123",
    },
];

arrayObjectUniqueCollector(arr1, arr2, "id");
