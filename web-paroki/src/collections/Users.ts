import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  fields: [
    { name: "Nama", type: "text" },
    { name: "Nomor Telepon", type: "text" },
    { name: "Alamat", type: "text" },
    { name: "Lingkungan", type: "text" },
    { name: "Paroki", type: "text" },
  ],
};

export default Users;
