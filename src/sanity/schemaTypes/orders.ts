import { defineField, defineType } from "sanity";

export const orders = defineType({
    name: "orders",
    type: "document",
    title: "Orders",
    fields: [
        defineField({
            name: "customer",
            type: "reference",
            to: [{type: "user"}],
            title: "Customer"
        }),
        defineField({
            name: "products",
            type: "array",
            of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'product',
                      type: 'reference',
                      to: [{ type: 'products' }]
                    },
                    {
                      name: 'quantity',
                      type: 'number'
                    }
                  ]
                }
              ]
        }),
        defineField({
            name: "status",
            type: "string",
            options: {
                list: [
                    {title: "Pending",value: "pending"},
                    {title: "Shipped",value: "shipped"},
                    {title: "Delivered",value: "delivered"},
                    {title: "Returned",value: "returned"},
                ]
            }
        })
    ]
});
