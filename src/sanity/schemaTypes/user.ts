import { defineField, defineType } from "sanity";

export const User = defineType({
    name: "user",
    type: "document",
    title: "User",
    fields: [
        defineField({
            name: "name",
            type: "string",
            title: "Name"
        }),
        defineField({
            name: "email",
            type: "string",
            title: "Email"
        }),
        defineField({
            name: "password",
            type: "string",
            title: "Password"
        }),
        defineField({
            name:"address",
            type: "string",
            title: "Address"
        }),
        defineField({
            name:"phone",
            type: "number",
            title: "Phone"
        }),
        

    ]
})